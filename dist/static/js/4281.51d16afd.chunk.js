(self.webpackChunkreact_ant_admin=self.webpackChunkreact_ant_admin||[]).push([[4281,8922],{94281:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var o=t(34706),r=t(16443),i=t(21035),a=function(){return a=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},a.apply(this,arguments)},c={onActivate:i.func,onAddUndo:i.func,onBeforeAddUndo:i.func,onBeforeExecCommand:i.func,onBeforeGetContent:i.func,onBeforeRenderUI:i.func,onBeforeSetContent:i.func,onBeforePaste:i.func,onBlur:i.func,onChange:i.func,onClearUndos:i.func,onClick:i.func,onContextMenu:i.func,onCommentChange:i.func,onCopy:i.func,onCut:i.func,onDblclick:i.func,onDeactivate:i.func,onDirty:i.func,onDrag:i.func,onDragDrop:i.func,onDragEnd:i.func,onDragGesture:i.func,onDragOver:i.func,onDrop:i.func,onExecCommand:i.func,onFocus:i.func,onFocusIn:i.func,onFocusOut:i.func,onGetContent:i.func,onHide:i.func,onInit:i.func,onKeyDown:i.func,onKeyPress:i.func,onKeyUp:i.func,onLoadContent:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseMove:i.func,onMouseOut:i.func,onMouseOver:i.func,onMouseUp:i.func,onNodeChange:i.func,onObjectResizeStart:i.func,onObjectResized:i.func,onObjectSelected:i.func,onPaste:i.func,onPostProcess:i.func,onPostRender:i.func,onPreProcess:i.func,onProgressState:i.func,onRedo:i.func,onRemove:i.func,onReset:i.func,onSaveContent:i.func,onSelectionChange:i.func,onSetAttrib:i.func,onSetContent:i.func,onShow:i.func,onSubmit:i.func,onUndo:i.func,onVisualAid:i.func,onSkinLoadError:i.func,onThemeLoadError:i.func,onModelLoadError:i.func,onPluginLoadError:i.func,onIconsLoadError:i.func,onLanguageLoadError:i.func,onScriptsLoad:i.func,onScriptsLoadError:i.func},s=a({apiKey:i.string,id:i.string,inline:i.bool,init:i.object,initialValue:i.string,onEditorChange:i.func,value:i.string,tagName:i.string,cloudChannel:i.string,plugins:i.oneOfType([i.string,i.array]),toolbar:i.oneOfType([i.string,i.array]),disabled:i.bool,textareaName:i.string,tinymceScriptSrc:i.oneOfType([i.string,i.arrayOf(i.string),i.arrayOf(i.shape({src:i.string,async:i.bool,defer:i.bool}))]),rollback:i.oneOfType([i.number,i.oneOf([!1])]),scriptLoading:i.shape({async:i.bool,defer:i.bool,delay:i.number})},c),u=function(n){return"function"===typeof n},l=function(n){return n in c},d=function(n){return n.substr(2)},p=function(n,e,t,o,r){return function(n,e,t,o,r,i,a){var c=Object.keys(r).filter(l),s=Object.keys(i).filter(l),u=c.filter((function(n){return void 0===i[n]})),p=s.filter((function(n){return void 0===r[n]}));u.forEach((function(n){var e=d(n),o=a[e];t(e,o),delete a[e]})),p.forEach((function(t){var r=o(n,t),i=d(t);a[i]=r,e(i,r)}))}(r,n.on.bind(n),n.off.bind(n),(function(e,t){return function(o){var r;return null===(r=e(t))||void 0===r?void 0:r(o,n)}}),e,t,o)},f=0,h=function(n){var e=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++f+String(e)},v=function(n){return null!==n&&("textarea"===n.tagName.toLowerCase()||"input"===n.tagName.toLowerCase())},y=function(n){return"undefined"===typeof n||""===n?[]:Array.isArray(n)?n:n.split(" ")},g=function(n,e){void 0!==n&&(null!=n.mode&&"object"===typeof n.mode&&"function"===typeof n.mode.set?n.mode.set(e):n.setMode(e))},m=function(){return m=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},m.apply(this,arguments)},b=function(n,e,t){var o,r,i=n.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e.id,i.src=e.src,i.async=null!==(o=e.async)&&void 0!==o&&o,i.defer=null!==(r=e.defer)&&void 0!==r&&r;var a=function n(){i.removeEventListener("load",n),i.removeEventListener("error",c),t(e.src)},c=function n(o){i.removeEventListener("load",a),i.removeEventListener("error",n),t(e.src,o)};i.addEventListener("load",a),i.addEventListener("error",c),n.head&&n.head.appendChild(i)},C=function(){var n=[],e=function(e){var t=n.find((function(n){return n.getDocument()===e}));return void 0===t&&(t=function(n){var e={},t=function(n,t){var o=e[n];o.done=!0,o.error=t;for(var r=0,i=o.handlers;r<i.length;r++)(0,i[r])(n,t);o.handlers=[]};return{loadScripts:function(o,r,i){var a=function(n){return void 0!==i?i(n):void 0};if(0!==o.length)for(var c=0,s=!1,u=function(n,e){s||(e?(s=!0,a(e)):++c===o.length&&r())},l=0,d=o;l<d.length;l++){var p=d[l],f=e[p.src];if(f)f.done?u(p.src,f.error):f.handlers.push(u);else{var v=h("tiny-");e[p.src]={id:v,src:p.src,done:!1,error:null,handlers:[u]},b(n,m({id:v},p),t)}}else a(new Error("At least one script must be provided"))},deleteScripts:function(){for(var t,o=0,r=Object.values(e);o<r.length;o++){var i=r[o],a=n.getElementById(i.id);null!=a&&"SCRIPT"===a.tagName&&(null===(t=a.parentNode)||void 0===t||t.removeChild(a))}e={}},getDocument:function(){return n}}}(e),n.push(t)),t};return{loadList:function(n,t,o,r,i){var a=function(){return e(n).loadScripts(t,r,i)};o>0?setTimeout(a,o):a()},reinitialize:function(){for(var e=n.pop();null!=e;e=n.pop())e.deleteScripts()}}}(),E=function(n){var e=n;return e&&e.tinymce?e.tinymce:null},k=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),S=function(){return S=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},S.apply(this,arguments)},w=function(n){function e(e){var t,r,i,a=this;return(a=n.call(this,e)||this).rollbackTimer=void 0,a.valueCursor=void 0,a.rollbackChange=function(){var n=a.editor,e=a.props.value;n&&e&&e!==a.currentContent&&n.undoManager.ignore((function(){if(n.setContent(e),a.valueCursor&&(!a.inline||n.hasFocus()))try{n.selection.moveToBookmark(a.valueCursor)}catch(t){}})),a.rollbackTimer=void 0},a.handleBeforeInput=function(n){if(void 0!==a.props.value&&a.props.value===a.currentContent&&a.editor&&(!a.inline||a.editor.hasFocus()))try{a.valueCursor=a.editor.selection.getBookmark(3)}catch(e){}},a.handleBeforeInputSpecial=function(n){"Enter"!==n.key&&"Backspace"!==n.key&&"Delete"!==n.key||a.handleBeforeInput(n)},a.handleEditorChange=function(n){var e=a.editor;if(e&&e.initialized){var t=e.getContent();void 0!==a.props.value&&a.props.value!==t&&!1!==a.props.rollback&&(a.rollbackTimer||(a.rollbackTimer=window.setTimeout(a.rollbackChange,"number"===typeof a.props.rollback?a.props.rollback:200))),t!==a.currentContent&&(a.currentContent=t,u(a.props.onEditorChange)&&a.props.onEditorChange(t,e))}},a.handleEditorChangeSpecial=function(n){"Backspace"!==n.key&&"Delete"!==n.key||a.handleEditorChange(n)},a.initialise=function(n){var e,t,o;void 0===n&&(n=0);var r=a.elementRef.current;if(r)if(function(n){if(!("isConnected"in Node.prototype)){for(var e=n,t=n.parentNode;null!=t;)t=(e=t).parentNode;return e===n.ownerDocument}return n.isConnected}(r)){var i=E(a.view);if(!i)throw new Error("tinymce should have been loaded into global scope");var c,s,l=S(S({},a.props.init),{selector:void 0,target:r,readonly:a.props.disabled,inline:a.inline,plugins:(c=null===(e=a.props.init)||void 0===e?void 0:e.plugins,s=a.props.plugins,y(c).concat(y(s))),toolbar:null!==(t=a.props.toolbar)&&void 0!==t?t:null===(o=a.props.init)||void 0===o?void 0:o.toolbar,setup:function(n){a.editor=n,a.bindHandlers({}),a.inline&&!v(r)&&n.once("PostRender",(function(e){n.setContent(a.getInitialValue(),{no_events:!0})})),a.props.init&&u(a.props.init.setup)&&a.props.init.setup(n)},init_instance_callback:function(n){var e,t,o=a.getInitialValue();a.currentContent=null!==(e=a.currentContent)&&void 0!==e?e:n.getContent(),a.currentContent!==o&&(a.currentContent=o,n.setContent(o),n.undoManager.clear(),n.undoManager.add(),n.setDirty(!1));var r=null!==(t=a.props.disabled)&&void 0!==t&&t;g(a.editor,r?"readonly":"design"),a.props.init&&u(a.props.init.init_instance_callback)&&a.props.init.init_instance_callback(n)}});a.inline||(r.style.visibility=""),v(r)&&(r.value=a.getInitialValue()),i.init(l)}else if(0===n)setTimeout((function(){return a.initialise(1)}),1);else{if(!(n<100))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return a.initialise(n+1)}),100)}},a.id=a.props.id||h("tiny-react"),a.elementRef=o.createRef(),a.inline=null!==(i=null!==(t=a.props.inline)&&void 0!==t?t:null===(r=a.props.init)||void 0===r?void 0:r.inline)&&void 0!==i&&i,a.boundHandlers={},a}return k(e,n),Object.defineProperty(e.prototype,"view",{get:function(){var n,e;return null!==(e=null===(n=this.elementRef.current)||void 0===n?void 0:n.ownerDocument.defaultView)&&void 0!==e?e:window},enumerable:!1,configurable:!0}),e.prototype.componentDidUpdate=function(n){var e,t,o=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=null!==(e=this.currentContent)&&void 0!==e?e:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var r=this.editor;r.undoManager.transact((function(){var n;if(!o.inline||r.hasFocus())try{n=r.selection.getBookmark(3)}catch(c){}var e=o.valueCursor;if(r.setContent(o.props.value),!o.inline||r.hasFocus())for(var t=0,i=[n,e];t<i.length;t++){var a=i[t];if(a)try{r.selection.moveToBookmark(a),o.valueCursor=a;break}catch(c){}}}))}if(this.props.disabled!==n.disabled){var i=null!==(t=this.props.disabled)&&void 0!==t&&t;g(this.editor,i?"readonly":"design")}}},e.prototype.componentDidMount=function(){var n,e,t,o,r,i=this;if(null!==E(this.view))this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&0===this.props.tinymceScriptSrc.length)null===(e=(n=this.props).onScriptsLoadError)||void 0===e||e.call(n,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(null===(t=this.elementRef.current)||void 0===t?void 0:t.ownerDocument){C.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),null!==(r=null===(o=this.props.scriptLoading)||void 0===o?void 0:o.delay)&&void 0!==r?r:0,(function(){var n,e;null===(e=(n=i.props).onScriptsLoad)||void 0===e||e.call(n),i.initialise()}),(function(n){var e,t;null===(t=(e=i.props).onScriptsLoadError)||void 0===t||t.call(e,n)}))}},e.prototype.componentWillUnmount=function(){var n=this,e=this.editor;e&&(e.off(this.changeEvents(),this.handleEditorChange),e.off(this.beforeInputEvent(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(t){e.off(t,n.boundHandlers[t])})),this.boundHandlers={},e.remove(),this.editor=void 0)},e.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},e.prototype.changeEvents=function(){var n,e,t;return(null===(t=null===(e=null===(n=E(this.view))||void 0===n?void 0:n.Env)||void 0===e?void 0:e.browser)||void 0===t?void 0:t.isIE())?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},e.prototype.beforeInputEvent=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},e.prototype.renderInline=function(){var n=this.props.tagName,e=void 0===n?"div":n;return o.createElement(e,{ref:this.elementRef,id:this.id})},e.prototype.renderIframe=function(){return o.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},e.prototype.getScriptSources=function(){var n,e,t=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.async,o=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.defer;if(void 0!==this.props.tinymceScriptSrc)return"string"===typeof this.props.tinymceScriptSrc?[{src:this.props.tinymceScriptSrc,async:t,defer:o}]:this.props.tinymceScriptSrc.map((function(n){return"string"===typeof n?{src:n,async:t,defer:o}:n}));var r=this.props.cloudChannel,i=this.props.apiKey?this.props.apiKey:"no-api-key";return[{src:"https://cdn.tiny.cloud/1/".concat(i,"/tinymce/").concat(r,"/tinymce.min.js"),async:t,defer:o}]},e.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},e.prototype.bindHandlers=function(n){var e=this;if(void 0!==this.editor){p(this.editor,n,this.props,this.boundHandlers,(function(n){return e.props[n]}));var t=function(n){return void 0!==n.onEditorChange||void 0!==n.value},o=t(n),r=t(this.props);!o&&r?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):o&&!r&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},e.propTypes=s,e.defaultProps={cloudChannel:"6"},e}(o.Component),_=t(88922),O=t(10161),T=function(){return(0,O.jsx)("div",{className:_.default.editorSection,children:(0,O.jsx)(r.Z,{bordered:!1,children:(0,O.jsx)(w,{init:{height:500,language:"zh_CN",plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect |fontselect fontsizeselect | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"},onEditorChange:function(n,e){}})})})}},97262:function(n,e,t){"use strict";var o=t(96289);function r(){}function i(){}i.resetWarningCache=r,n.exports=function(){function n(n,e,t,r,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},21035:function(n,e,t){n.exports=t(97262)()},96289:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},88922:function(n,e,t){"use strict";t.r(e),e.default={tinymceContainer:"tynimce_tinymceContainer__1uPrM","mce-fullscreen":"tynimce_mce-fullscreen__GYlg1",tinymceTextarea:"tynimce_tinymceTextarea__HL+qm","editor-custom-btn-container":"tynimce_editor-custom-btn-container__zJ5oR",fullscreen:"tynimce_fullscreen__Ev14X","editor-upload-btn":"tynimce_editor-upload-btn__z2sgM"}}}]);