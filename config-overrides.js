
// more ： https://github.com/arackaf/customize-cra/blob/master/api.md
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer,
  adjustStyleLoaders,
  // getBabelLoader,
  // addBabelPlugin,
  // addBabelPlugins,
  // addWebpackModuleRule,
  // addWebpackPlugin,
  watchAll
} = require( 'customize-cra' )

const eslintConfigOverrides = require( 'customize-cra-eslint' )
const eslintConfig = require( './.eslintrc.js' )

const { GLOBAL_DATA } = require( './src/config/constant' )
const ScriptExtHtmlWebpackPlugin = require( 'script-ext-html-webpack-plugin' )
const path = require( 'path' )

function resolve( dir ) {
  return path.join( __dirname, dir )
}

process.env.CI = 'false'

/**
 * @param target: 要遍历的对象
 * @param name: 插件名
 * @param callback: 回调函数，第一个参数为该插件对象
 * @return null
 */
function invade( target, name, callback ) {
  target.forEach(
    item => {
      if ( item.constructor.name === name ) {
        callback( item )
      }
    }
  )
}

// 自定义组合配置
const addCustomize = () => ( config, env ) => {
  const oneOf_loc = config.module.rules.findIndex( rule => rule.oneOf )

  config.module.rules[oneOf_loc].oneOf = [
    {
      test : /.(eot|otf|fon|font|ttf|ttc|woff|woff2)$/,
      use : [
        {
          loader : 'url-loader',
          options : {
            limit : 1024
          }
        }
      ]
    },
    {
      test : /.(png|jpe?g|gif|bmp)$/,
      exclude : [/(node_modules)/],
      include : [
        resolve( './src' )
      ],
      use : [
        {
          loader : 'url-loader',
          options : {
            limit : 1024 * 10
          }
        }
      ]
    },

    {
      test : /\.svg$/,
      include : [resolve( './src/icons' )],
      use : [
        {
          loader : 'svg-sprite-loader',
          options : {
            symbolId : 'icon-[name]'
          }
        },
        {
          loader : 'svgo-loader',
          options : {
            plugins : [
              {
                name : 'removeAttrs',
                params : {
                  attrs : 'fill'
                }
              }
            ]
          }
        }
      ]
    },
    ...config.module.rules[oneOf_loc].oneOf
  ]

  // if ( config.output.publicPath ) {
  //   config.output.publicPath =
  //       process.env.NODE_ENV === 'production'
  //         ? '/react-ant-admin/dist/'
  //         : '/'
  // }
  config.output.publicPath = './'

  if ( config.resolve ) {
    config.resolve.extensions.push( '.jsx' )
  }

  return config
}

const devServerConfig = () => config => {
  const result = {
    ...config,
    proxy : {
      '/api' : {
        target : GLOBAL_DATA.proxy_url,
        // ws : false,
        changeOrigin : true,
        pathRewrite : {
          '^/api' : ''
        }
      }
    }
  }
  return result
}

module.exports = {
  paths : function( paths ) {
    paths.appBuild = resolve( './dist' )
    return paths
  },
  webpack : override(
    eslintConfigOverrides( eslintConfig ),
    fixBabelImports( 'import', {
      libraryName : 'antd',
      libraryDirectory : 'es',
      style : true
    } ),

    // 使用less-loader对源码中的less的变量进行重新指定
    addLessLoader( {
      javascriptEnabled : true,
      additionalData : `@import "${resolve( './src/styles/variable.less' )}";`
      // modifyVars : { '@primary-color' : '#1DA57A' }
    } ),

    addWebpackAlias( {
      '@' : resolve( './src' ),
      '@api' : resolve( './src/api' ),
      '@components' : resolve( './src/components' ),
      '@config' : resolve( './src/config' ),
      '@router' : resolve( './src/router' ),
      '@store' : resolve( './src/store' ),
      '@vendor' : resolve( './src/vendor' ),
      '@utils' : resolve( './src/utils' ),
      '@views' : resolve( './src/views' ),
      '@layout' : resolve( './src/views/layout' ),
      '@styles' : resolve( './src/styles' ),
      '@assets' : resolve( './src/assets' ),
      '@imgs' : resolve( './src/assets/imgs' )
    } ),
    addCustomize(),

    adjustStyleLoaders( ( { use : [, css, postcss, resolve, processor] } ) => {
      css.options.sourceMap = true
      postcss.options.sourceMap = true

      if ( resolve ) {
        resolve.options.sourceMap = true // resolve-url-loader
      }
      // pre-processor
      if ( processor && processor.loader.includes( 'sass-loader' ) ) {
        processor.options.sourceMap = true // sass-loader
      }

      // css.options.modules = {
      //   localIdentName : '[name]__[local]--[hash:base64:5]',
      //   getLocalIdent : ( loaderContext, localIdentName, localName, options ) => {
      //     if ( loaderContext.resourcePath.includes( 'node_modules' ) ) {
      //       return localName
      //     }
      //   }
      // }
    } ),

    ( config ) => {
      if ( process.env.NODE_ENV === 'production' ) {
        config.devtool = false
        config.output.chunkFilename = config.output.chunkFilename.replace( '.chunk', '' )

        invade( config.optimization.minimizer, 'TerserPlugin', ( e ) => {
          e.options.extractComments = false
          e.options.terserOptions.compress.drop_console = true
        } )

        invade( config.plugins, 'MiniCssExtractPlugin', ( e ) => {
          e.options.chunkFilename = e.options.chunkFilename.replace( '.chunk', '' )
        } )

        config.optimization.splitChunks = {
          chunks : 'all',
          cacheGroups : {
            libs : {
              name : 'chunk-libs',
              test : /[\\/]node_modules[\\/]/,
              priority : 10,
              chunks : 'initial'
            },
            commons : {
              name : 'chunk-commons',
              test : resolve( './src/components' ),
              minChunks : 3,
              priority : 5,
              reuseExistingChunk : true
            }
          }
        }

        config.plugins.push(
          new ScriptExtHtmlWebpackPlugin(
            {
              inline : /runtime\..*\.js$/
            } )
        )

        config.optimization.runtimeChunk = 'single'
      }

      return config
    }
  ),
  devServer : overrideDevServer(
    devServerConfig(),
    watchAll()
  )
}
