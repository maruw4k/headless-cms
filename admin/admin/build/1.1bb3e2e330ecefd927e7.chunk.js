webpackJsonp([1],{"./admin/src/components/InstallPluginPopup/index.js":function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,s,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var r=Array(a),p=0;p<a;p++)r[p]=arguments[p+3];t.children=r}return{$$typeof:e,type:n,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}}(),r=function(){function e(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(n,t,s){return t&&e(n.prototype,t),s&&e(n,s),n}}(),p=t("./node_modules/strapi-helper-plugin/node_modules/react/index.js"),d=s(p),u=t("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),c=s(u),m=t("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js"),_=t("./node_modules/strapi-helper-plugin/node_modules/reactstrap/dist/reactstrap.es.js"),f=t("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js"),g=t("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js"),h=s(g),y=t("./admin/src/components/Official/index.js"),P=s(y),v=t("./admin/src/components/InstallPluginPopup/styles.scss"),b=s(v),x=function(e){function n(){var e,t,s,a;o(this,n);for(var l=arguments.length,r=Array(l),p=0;p<l;p++)r[p]=arguments[p];return t=s=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r))),s.handleClick=function(){s.props.history.push({pathname:s.props.history.location.pathname}),s.props.isAlreadyInstalled||s.context.downloadPlugin(s.props.plugin.id)},s.toggle=function(){s.props.history.push({pathname:s.props.history.location.pathname})},s.navLinks=[{content:"app.components.InstallPluginPopup.navLink.description",name:"description"},{content:"app.components.InstallPluginPopup.navLink.screenshots",name:"screenshots"},{content:"app.components.InstallPluginPopup.navLink.avis",name:"avis"},{content:"app.components.InstallPluginPopup.navLink.faq",name:"faq"},{content:"app.components.InstallPluginPopup.navLink.changelog",name:"changelog"}],a=t,i(s,a)}return a(n,e),r(n,[{key:"render",value:function(){var e=this,n={short:"support-us"===this.props.plugin.id?l(m.FormattedMessage,{id:this.props.plugin.description.short}):this.props.plugin.description.short,long:"support-us"===this.props.plugin.id?l(m.FormattedMessage,{id:this.props.plugin.description.long||this.props.plugin.description.short}):this.props.plugin.description.long||this.props.plugin.description.short},t=this.props.isAlreadyInstalled?"app.components.PluginCard.Button.label.install":"app.components.InstallPluginPopup.downloads";return l(_.Modal,{isOpen:this.props.isOpen,toggle:this.toggle,className:b.default.modalPosition},void 0,l(_.ModalHeader,{toggle:this.toggle,className:b.default.modalHeader}),l(_.ModalBody,{className:b.default.modalBody},void 0,l("div",{className:b.default.wrapper},void 0,l("div",{className:b.default.headerWrapper},void 0,l("div",{className:b.default.logo},void 0,l("img",{src:""+this.props.plugin.logo,alt:"icon"})),l("div",{className:b.default.headerInfo},void 0,l("div",{className:b.default.name},void 0,this.props.plugin.name),l("div",{className:b.default.ratings},void 0,l(P.default,{style:{marginTop:"0"}})),l("div",{className:b.default.headerDescription},void 0,n.short),l("div",{className:b.default.headerButtonContainer},void 0,l("div",{},void 0,l("i",{className:"fa fa-"+(this.props.plugin.isCompatible?"check":"times")}),l(m.FormattedMessage,{id:"app.components.PluginCard.compatible"+("support-us"===this.props.plugin.id?"Community":"")})),l("div",{},void 0,l("div",{},void 0),l("div",{className:b.default.buttonWrapper,onClick:this.handleClick},void 0,l("div",{},void 0,l(m.FormattedMessage,{id:t})))))))),l("div",{className:b.default.navContainer},void 0,(0,f.map)(this.navLinks,function(n){var t=e.props.history.location.hash.split("::")[1]===n.name;return l("div",{className:(0,h.default)(t?b.default.navLink:"","description"!==n.name?b.default.notAllowed:""),onClick:function(){"description"===n.name&&e.props.history.push({pathname:e.props.history.location.pathname,hash:e.props.plugin.id+"::"+n.name})},style:t?{paddingTop:"4px"}:{paddingTop:"6px"}},n.name,l(m.FormattedMessage,{id:n.content}))})),l("div",{className:b.default.pluginDescription},void 0,n.long)))}}]),n}(d.default.Component);x.contextTypes={downloadPlugin:c.default.func.isRequired},x.defaultProps={description:{short:"app.Components.InstallPluginPopup.noDescription"}},n.default=x},"./admin/src/components/InstallPluginPopup/styles.scss":function(e,n,t){var s=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/InstallPluginPopup/styles.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var o={};o.transform=void 0,t("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(s,o),s.locals&&(e.exports=s.locals)},"./admin/src/components/Official/index.js":function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e){return i("button",{className:d.default.wrapper,style:e.style},void 0,u,c)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,s,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var r=Array(a),p=0;p<a;p++)r[p]=arguments[p+3];t.children=r}return{$$typeof:e,type:n,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}}(),a=t("./node_modules/strapi-helper-plugin/node_modules/react/index.js"),l=(s(a),t("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js")),r=t("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),p=(s(r),t("./admin/src/components/Official/styles.scss")),d=s(p),u=i("i",{className:"fa fa-star"}),c=i(l.FormattedMessage,{id:"app.components.Official"});o.defaultProps={style:{}},n.default=o},"./admin/src/components/Official/styles.scss":function(e,n,t){var s=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/Official/styles.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var o={};o.transform=void 0,t("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(s,o),s.locals&&(e.exports=s.locals)},"./admin/src/components/PluginCard/index.js":function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,s,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var r=Array(a),p=0;p<a;p++)r[p]=arguments[p+3];t.children=r}return{$$typeof:e,type:n,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}}(),r=function(){function e(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(n,t,s){return t&&e(n.prototype,t),s&&e(n,s),n}}(),p=t("./node_modules/strapi-helper-plugin/node_modules/react/index.js"),d=s(p),u=t("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),c=(s(u),t("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js")),m=s(c),_=t("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js"),f=t("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js"),g=t("./node_modules/strapi-helper-plugin/lib/src/components/Button/index.js"),h=s(g),y=t("./admin/src/components/InstallPluginPopup/index.js"),P=s(y),v=t("./admin/src/components/PluginCard/styles.scss"),b=s(v),x=["content-manager","email","upload"],w=l("i",{className:"fa fa-cog"}),j=l(f.FormattedMessage,{id:"app.components.PluginCard.settings"}),k=function(e){function n(){var e,t,s,a;o(this,n);for(var l=arguments.length,r=Array(l),p=0;p<l;p++)r[p]=arguments[p];return t=s=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r))),s.state={boostrapCol:"col-lg-4"},s.setBoostrapCol=function(){var e="col-lg-4";window.innerWidth>1680&&(e="col-lg-3"),window.innerWidth>2300&&(e="col-lg-2"),s.setState({boostrapCol:e})},s.handleClick=function(){"support-us"!==s.props.plugin.id?s.props.history.push({pathname:s.props.history.location.pathname,hash:s.props.plugin.id+"::description"}):s.aTag.click()},s.handleClickSettings=function(e){var n="content-manager"===s.props.plugin.id?"/plugins/content-manager/ctm-configurations":"/plugins/"+s.props.plugin.id+"/configurations/"+s.props.currentEnvironment;e.preventDefault(),e.stopPropagation(),s.props.history.push(n)},s.handleDownloadPlugin=function(e){s.props.isAlreadyInstalled||"support-us"===s.props.plugin.id?"support-us"===s.props.plugin.id?s.aTag.click():s.props.history.push("/list-plugins"):s.props.downloadPlugin(e)},a=t,i(s,a)}return a(n,e),r(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setBoostrapCol),this.setBoostrapCol()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setBoostrapCol)}},{key:"render",value:function(){var e=this,n=this.props.isAlreadyInstalled?b.default.secondary:b.default.primary,t=this.props.isAlreadyInstalled?"app.components.PluginCard.Button.label.install":"app.components.PluginCard.Button.label.download",s=x.includes(this.props.plugin.id)&&l("div",{className:b.default.settings,onClick:this.handleClickSettings},void 0,w,j),o={short:"support-us"===this.props.plugin.id?l(f.FormattedMessage,{id:this.props.plugin.description.short}):this.props.plugin.description.short,long:"support-us"===this.props.plugin.id?l(f.FormattedMessage,{id:this.props.plugin.description.long||this.props.plugin.description.short}):this.props.plugin.description.long||this.props.plugin.description.short};return l("div",{className:(0,m.default)(this.state.boostrapCol,b.default.pluginCard)},void 0,l("div",{className:b.default.wrapper},void 0,l("div",{className:b.default.cardTitle},void 0,l("div",{className:b.default.frame},void 0,l("span",{className:b.default.helper}),l("img",{src:this.props.plugin.logo,alt:"icon"})),l("div",{},void 0,this.props.plugin.name," ",l("i",{className:"fa fa-external-link",onClick:function(){return window.open("https://github.com/strapi/strapi/tree/master/packages/strapi-plugin-"+e.props.plugin.id,"_blank")}}))),l("div",{className:b.default.cardDescription},void 0,o.long),l("div",{className:b.default.cardFooter,onClick:function(e){return e.stopPropagation()}},void 0,l("div",{className:b.default.cardFooterButton},void 0,l(h.default,{className:(0,m.default)(n,b.default.button),label:t,onClick:this.handleDownloadPlugin}),d.default.createElement("a",{href:"https://strapi.io/shop",style:{display:"none"},ref:function(n){e.aTag=n},target:"_blank"}," ")),this.props.isAlreadyInstalled?s:l("div",{className:b.default.compatible},void 0,l("i",{className:"fa fa-"+(this.props.plugin.isCompatible?"check":"times")}),l(f.FormattedMessage,{id:"app.components.PluginCard.compatible"+("support-us"===this.props.plugin.id?"Community":"")})))),l(P.default,{history:this.props.history,isAlreadyInstalled:this.props.isAlreadyInstalled,isOpen:!(0,_.isEmpty)(this.props.history.location.hash)&&(0,_.replace)(this.props.history.location.hash.split("::")[0],"#","")===this.props.plugin.id,plugin:this.props.plugin}))}}]),n}(d.default.Component);k.defaultProps={isAlreadyInstalled:!1,plugin:{description:"",id:"",name:"",price:0,ratings:5}},n.default=k},"./admin/src/components/PluginCard/styles.scss":function(e,n,t){var s=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/PluginCard/styles.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var o={};o.transform=void 0,t("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(s,o),s.locals&&(e.exports=s.locals)},"./admin/src/containers/Marketplace/actions.js":function(e,n,t){"use strict";function s(e){return{type:r.DOWNLOAD_PLUGIN,pluginToDownload:e}}function o(){return{type:r.DOWNLOAD_PLUGIN_SUCCEEDED}}function i(){return{type:r.GET_AVAILABLE_AND_INSTALLED_PLUGINS}}function a(e,n){return{type:r.GET_AVAILABLE_AND_INSTALLED_PLUGINS_SUCCEEDED,availablePlugins:e,installedPlugins:n}}function l(){return{type:r.RESET_PROPS}}Object.defineProperty(n,"__esModule",{value:!0}),n.downloadPlugin=s,n.downloadPluginSucceeded=o,n.getAvailableAndInstalledPlugins=i,n.getAvailableAndInstalledPluginsSucceeded=a,n.resetProps=l;var r=t("./admin/src/containers/Marketplace/constants.js")},"./admin/src/containers/Marketplace/constants.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.DOWNLOAD_PLUGIN="StrapiAdmin/Marketplace/DOWNLOAD_PLUGIN",n.DOWNLOAD_PLUGIN_SUCCEEDED="StrapiAdmin/Marketplace/DOWNLOAD_PLUGIN_SUCCEEDED",n.GET_AVAILABLE_AND_INSTALLED_PLUGINS="StrapiAdmin/Marketplace/GET_AVAILABLE_AND_INSTALLED_PLUGINS",n.GET_AVAILABLE_AND_INSTALLED_PLUGINS_SUCCEEDED="StrapiAdmin/Marketplace/GET_AVAILABLE_AND_INSTALLED_PLUGINS_SUCCEEDED",n.RESET_PROPS="StrapiAdmin/Marketplace/RESET_PROPS"},"./admin/src/containers/Marketplace/index.js":function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e){return(0,h.bindActionCreators)({downloadPlugin:O.downloadPlugin,getAvailableAndInstalledPlugins:O.getAvailableAndInstalledPlugins,resetProps:O.resetProps},e)}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,s,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var r=Array(a),p=0;p<a;p++)r[p]=arguments[p+3];t.children=r}return{$$typeof:e,type:n,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}}}(),p=function(){function e(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(n,t,s){return t&&e(n.prototype,t),s&&e(n,s),n}}(),d=t("./node_modules/strapi-helper-plugin/node_modules/react/index.js"),u=s(d),c=t("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),m=s(c),_=t("./node_modules/strapi-helper-plugin/node_modules/react-redux/lib/index.js"),f=t("./node_modules/strapi-helper-plugin/node_modules/react-helmet/lib/Helmet.js"),g=t("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js"),h=t("./node_modules/strapi-helper-plugin/node_modules/redux/lib/redux.js"),y=t("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js"),P=s(y),v=t("./node_modules/strapi-helper-plugin/lib/src/components/PluginHeader/index.js"),b=s(v),x=t("./node_modules/strapi-helper-plugin/lib/src/components/LoadingIndicatorPage/index.js"),w=s(x),j=t("./admin/src/components/PluginCard/index.js"),k=s(j),C=t("./admin/src/utils/injectSaga.js"),I=s(C),A=t("./admin/src/utils/injectReducer.js"),D=s(A),O=t("./admin/src/containers/Marketplace/actions.js"),L=t("./admin/src/containers/Marketplace/selectors.js"),N=s(L),S=t("./admin/src/containers/Marketplace/reducer.js"),E=s(S),M=t("./admin/src/containers/Marketplace/saga.js"),T=s(M),G=t("./admin/src/containers/Marketplace/styles.scss"),U=s(G),B=r("meta",{name:"description",content:"Description of InstallPluginPage"}),F=r(w.default,{}),W=function(e){function n(){var e,t,s,a;o(this,n);for(var l=arguments.length,p=Array(l),d=0;d<l;d++)p[d]=arguments[d];return t=s=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(p))),s.getChildContext=function(){return{downloadPlugin:s.props.downloadPlugin}},s.renderHelmet=function(e){return r(f.Helmet,{},void 0,r("title",{},void 0,e),B)},s.renderPluginCard=function(e){var n=s.props,t=n.adminPage.currentEnvironment,o=n.availablePlugins,i=n.downloadPlugin,a=n.history,l=n.installedPlugins,p=o[e];return r(k.default,{currentEnvironment:t,history:a,plugin:p,showSupportUsButton:"support-us"===p.id,isAlreadyInstalled:l.includes(p.id),downloadPlugin:function(n){n.preventDefault(),n.stopPropagation(),"support-us"!==e.id&&i(p.id)}},p.id)},a=t,i(s,a)}return a(n,e),p(n,[{key:"componentDidMount",value:function(){this.props.getAvailableAndInstalledPlugins()}},{key:"componentWillUnmount",value:function(){this.props.resetProps()}},{key:"render",value:function(){var e=this.props,n=e.availablePlugins;return e.isLoading?F:r("div",{},void 0,r(g.FormattedMessage,{id:"app.components.InstallPluginPage.helmet"},void 0,this.renderHelmet),r("div",{className:(0,P.default)("container-fluid",U.default.containerFluid)},void 0,r(b.default,{title:{id:"app.components.InstallPluginPage.title"},description:{id:"app.components.InstallPluginPage.description"},actions:[]}),r("div",{className:(0,P.default)("row",U.default.wrapper)},void 0,Object.keys(n).map(this.renderPluginCard))))}}]),n}(u.default.Component);W.childContextTypes={downloadPlugin:m.default.func.isRequired},W.defaultProps={};var z=(0,N.default)(),V=(0,_.connect)(z,l),H=(0,D.default)({key:"marketplace",reducer:E.default}),R=(0,I.default)({key:"marketplace",saga:T.default});n.default=(0,h.compose)(H,R,V)(W)},"./admin/src/containers/Marketplace/reducer.js":function(e,n,t){"use strict";function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments[1];switch(n.type){case i.DOWNLOAD_PLUGIN:return e.update("pluginToDownload",function(){return n.pluginToDownload});case i.DOWNLOAD_PLUGIN_SUCCEEDED:return e.update("installedPlugins",function(n){return n.push(e.get("pluginToDownload"))}).update("pluginToDownload",function(){return null});case i.GET_AVAILABLE_AND_INSTALLED_PLUGINS_SUCCEEDED:return e.update("availablePlugins",function(){return(0,o.List)(n.availablePlugins)}).update("installedPlugins",function(){return(0,o.List)(n.installedPlugins)}).update("isLoading",function(){return!1});case i.RESET_PROPS:return a;default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t("./node_modules/strapi-helper-plugin/node_modules/immutable/dist/immutable.js"),i=t("./admin/src/containers/Marketplace/constants.js"),a=(0,o.fromJS)({availablePlugins:(0,o.List)([]),installedPlugins:(0,o.List)([]),isLoading:!0,pluginToDownload:null});n.default=s},"./admin/src/containers/Marketplace/saga.js":function(e,n,t){"use strict";function s(){var e,n,t,s;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,e={enabled:!0,title:"app.components.InstallPluginPage.Download.title",description:"app.components.InstallPluginPage.Download.description"},strapi.lockApp(e),o.next=5,(0,r.select)((0,_.makeSelectPluginToDownload)());case 5:return n=o.sent,t={method:"POST",body:{plugin:n,port:window.location.port}},o.next=9,(0,r.call)(d.default,"/admin/plugins/install",t,e);case 9:if(s=o.sent,!s.ok){o.next=14;break}return o.next=13,(0,r.put)((0,c.downloadPluginSucceeded)());case 13:window.location.reload();case 14:o.next=20;break;case 16:o.prev=16,o.t0=o.catch(0),strapi.unlockApp(),strapi.notification.error("notification.error");case 20:case"end":return o.stop()}},f,this,[[0,16]])}function o(){var e,n,t,s,o,i;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,r.select)((0,u.selectLocale)());case 2:return e=l.sent,l.prev=3,n={method:"GET",headers:{"Content-Type":"application/json"},params:{lang:e}},l.next=7,(0,r.all)([(0,r.call)(d.default,"https://marketplace.strapi.io/plugins",n),(0,r.call)(d.default,"/admin/plugins",{method:"GET"})]);case 7:return t=l.sent,s=a(t,2),o=s[0],i=s[1].plugins,l.next=13,(0,r.put)((0,c.getAvailableAndInstalledPluginsSucceeded)(o,Object.keys(i)));case 13:l.next=18;break;case 15:l.prev=15,l.t0=l.catch(3),strapi.notification.error("notification.error");case 18:case"end":return l.stop()}},g,this,[[3,15]])}function i(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,r.fork)(r.takeLatest,m.GET_AVAILABLE_AND_INSTALLED_PLUGINS,o);case 2:return e=n.sent,n.next=5,(0,r.fork)(r.takeLatest,m.DOWNLOAD_PLUGIN,s);case 5:return n.next=7,(0,r.take)(l.LOCATION_CHANGE);case 7:return n.next=9,(0,r.cancel)(e);case 9:case"end":return n.stop()}},h,this)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){var t=[],s=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(s=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);s=!0);}catch(e){o=!0,i=e}finally{try{!s&&l.return&&l.return()}finally{if(o)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.pluginDownload=s,n.getData=o,n.default=i;var l=t("./node_modules/strapi-helper-plugin/node_modules/react-router-redux/index.js"),r=t("./node_modules/strapi-helper-plugin/node_modules/redux-saga/es/effects.js"),p=t("./node_modules/strapi-helper-plugin/lib/src/utils/request.js"),d=function(e){return e&&e.__esModule?e:{default:e}}(p),u=t("./admin/src/containers/LanguageProvider/selectors.js"),c=t("./admin/src/containers/Marketplace/actions.js"),m=t("./admin/src/containers/Marketplace/constants.js"),_=t("./admin/src/containers/Marketplace/selectors.js"),f=regeneratorRuntime.mark(s),g=regeneratorRuntime.mark(o),h=regeneratorRuntime.mark(i)},"./admin/src/containers/Marketplace/selectors.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.makeSelectPluginToDownload=n.selectMarketplaceDomain=void 0;var s=t("./node_modules/strapi-helper-plugin/node_modules/reselect/es/index.js"),o=function(){return function(e){return e.get("marketplace")}},i=function(){return(0,s.createSelector)(o(),function(e){return e.toJS()})},a=function(){return(0,s.createSelector)(o(),function(e){return e.get("pluginToDownload")})};n.default=i,n.selectMarketplaceDomain=o,n.makeSelectPluginToDownload=a},"./admin/src/containers/Marketplace/styles.scss":function(e,n,t){var s=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/containers/Marketplace/styles.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var o={};o.transform=void 0,t("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(s,o),s.locals&&(e.exports=s.locals)},"./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/InstallPluginPopup/styles.scss":function(e,n,t){n=e.exports=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(!1),n.push([e.i,'.adminbuttonWrapper__admin-src-components-InstallPluginPopup-styles__9L2sC{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;min-width:136px;height:30px;margin-left:20px;border-radius:.3rem;background:linear-gradient(315deg,#0097f6,#005eea);color:#fff;font-size:13px;font-style:normal;font-weight:600;cursor:pointer}.adminbuttonWrapper__admin-src-components-InstallPluginPopup-styles__9L2sC:focus{outline:0}.adminbuttonWrapper__admin-src-components-InstallPluginPopup-styles__9L2sC>div{text-align:center;text-transform:capitalize}.adminbuttonWrapper__admin-src-components-InstallPluginPopup-styles__9L2sC>div:first-child{-ms-flex-positive:2;flex-grow:2}.adminheaderButtonContainer__admin-src-components-InstallPluginPopup-styles__1aVaY{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding-top:13px;line-height:29px}.adminheaderButtonContainer__admin-src-components-InstallPluginPopup-styles__1aVaY>div{font-size:13px;font-style:italic}.adminheaderButtonContainer__admin-src-components-InstallPluginPopup-styles__1aVaY>div:first-child{color:#5a9e06}.adminheaderButtonContainer__admin-src-components-InstallPluginPopup-styles__1aVaY>div:first-child>i{margin-right:10px}.adminheaderButtonContainer__admin-src-components-InstallPluginPopup-styles__1aVaY>div:nth-child(2){display:-ms-flexbox;display:flex}.adminheaderButtonContainer__admin-src-components-InstallPluginPopup-styles__1aVaY>div:nth-child(2)>span:nth-child(2){font-style:normal}.adminheaderDescription__admin-src-components-InstallPluginPopup-styles__2wluV{height:48px;padding-top:12px;font-size:13px}.adminheaderInfo__admin-src-components-InstallPluginPopup-styles__2xSXJ{-ms-flex-positive:1;flex-grow:1;padding-top:7px;padding-left:30px}.adminheaderWrapper__admin-src-components-InstallPluginPopup-styles__3Ojqi{display:-ms-flexbox;display:flex}.adminlogo__admin-src-components-InstallPluginPopup-styles__2ykDF{-ms-flex-negative:0;flex-shrink:0;width:144px;height:144px;background:#fafafb;border:1px solid #f3f3f7;border-radius:3px;background-size:contain;line-height:144px;text-align:center}.adminlogo__admin-src-components-InstallPluginPopup-styles__2ykDF>img{min-width:72px}.adminmodalHeader__admin-src-components-InstallPluginPopup-styles__22hnT{margin:0 1.4rem!important;padding:1.4rem 0 0!important;border-bottom:0!important}.adminmodalHeader__admin-src-components-InstallPluginPopup-styles__22hnT>button{margin-right:-1rem!important;color:#c3c5c8;opacity:1;font-size:1.8rem;font-weight:100;z-index:999}.adminmodalHeader__admin-src-components-InstallPluginPopup-styles__22hnT>button:focus,.adminmodalHeader__admin-src-components-InstallPluginPopup-styles__22hnT>button:hover{color:#c3c5c8;opacity:1;outline:0!important;cursor:pointer}.adminmodalHeader__admin-src-components-InstallPluginPopup-styles__22hnT>button>span{display:none}.adminmodalHeader__admin-src-components-InstallPluginPopup-styles__22hnT>button:before{-webkit-font-smoothing:antialiased;content:"\\F00D";font-family:FontAwesome;font-weight:400;font-size:1.2rem;margin-right:10px}.adminmodalBody__admin-src-components-InstallPluginPopup-styles__15zUn{padding:5px 0!important}.adminmodalPosition__admin-src-components-InstallPluginPopup-styles__3uvy7>div{border:none;border-radius:2px;width:74.5rem;padding-left:0;padding-right:0}.adminname__admin-src-components-InstallPluginPopup-styles__1kHaZ{padding-bottom:1px;font-size:16px;font-weight:700;text-transform:uppercase}.adminnavContainer__admin-src-components-InstallPluginPopup-styles__17UaD{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:36px;margin-top:38px;padding:0 30px;background-color:#fafafb;font-size:13px;font-weight:600;text-transform:capitalize}.adminnavContainer__admin-src-components-InstallPluginPopup-styles__17UaD>div{-ms-flex-positive:2;flex-grow:2;text-align:center;line-height:23px;cursor:pointer}.adminnavLink__admin-src-components-InstallPluginPopup-styles__E_jQj{border-top:2px solid #1c5de7}.adminnotAllowed__admin-src-components-InstallPluginPopup-styles__ygnwx{opacity:.3;cursor:not-allowed!important}.adminpluginDescription__admin-src-components-InstallPluginPopup-styles__9c1x5{padding:24px 30px;font-size:13px;line-height:18px}.adminratings__admin-src-components-InstallPluginPopup-styles__1zCXO{display:-ms-flexbox;display:flex;line-height:18px}.adminratings__admin-src-components-InstallPluginPopup-styles__1zCXO>div:last-child{padding-top:1px;font-style:italic}.adminstarsContainer__admin-src-components-InstallPluginPopup-styles__3pG6M{display:-ms-flexbox;display:flex}.adminstarsContainer__admin-src-components-InstallPluginPopup-styles__3pG6M>div{color:#eed348}.adminstarsContainer__admin-src-components-InstallPluginPopup-styles__3pG6M>div>i{margin-right:2px}.adminstarsContainer__admin-src-components-InstallPluginPopup-styles__3pG6M>div:last-child{color:#b3b5b9}.adminwrapper__admin-src-components-InstallPluginPopup-styles__MDSFV{padding:0 30px}',""]),n.locals={buttonWrapper:"adminbuttonWrapper__admin-src-components-InstallPluginPopup-styles__9L2sC",headerButtonContainer:"adminheaderButtonContainer__admin-src-components-InstallPluginPopup-styles__1aVaY",headerDescription:"adminheaderDescription__admin-src-components-InstallPluginPopup-styles__2wluV",headerInfo:"adminheaderInfo__admin-src-components-InstallPluginPopup-styles__2xSXJ",headerWrapper:"adminheaderWrapper__admin-src-components-InstallPluginPopup-styles__3Ojqi",logo:"adminlogo__admin-src-components-InstallPluginPopup-styles__2ykDF",modalHeader:"adminmodalHeader__admin-src-components-InstallPluginPopup-styles__22hnT",modalBody:"adminmodalBody__admin-src-components-InstallPluginPopup-styles__15zUn",modalPosition:"adminmodalPosition__admin-src-components-InstallPluginPopup-styles__3uvy7",name:"adminname__admin-src-components-InstallPluginPopup-styles__1kHaZ",navContainer:"adminnavContainer__admin-src-components-InstallPluginPopup-styles__17UaD",navLink:"adminnavLink__admin-src-components-InstallPluginPopup-styles__E_jQj",notAllowed:"adminnotAllowed__admin-src-components-InstallPluginPopup-styles__ygnwx",pluginDescription:"adminpluginDescription__admin-src-components-InstallPluginPopup-styles__9c1x5",ratings:"adminratings__admin-src-components-InstallPluginPopup-styles__1zCXO",starsContainer:"adminstarsContainer__admin-src-components-InstallPluginPopup-styles__3pG6M",wrapper:"adminwrapper__admin-src-components-InstallPluginPopup-styles__MDSFV"}},"./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/Official/styles.scss":function(e,n,t){n=e.exports=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(!1),n.push([e.i,".adminwrapper__admin-src-components-Official-styles__7W5fa{display:-ms-flexbox;display:flex;height:20px!important;width:88px;padding:0 10px;border-radius:2px;background-color:#ee8948;line-height:20px;text-align:center;text-transform:uppercase}.adminwrapper__admin-src-components-Official-styles__7W5fa>span{height:20px;padding:0!important;color:#fff;letter-spacing:.5px;font-weight:600;font-size:11px}.adminwrapper__admin-src-components-Official-styles__7W5fa>i{margin-top:1px;margin-right:6px;vertical-align:-webkit-baseline-middle;color:#ffdc00;font-size:10px}",""]),n.locals={wrapper:"adminwrapper__admin-src-components-Official-styles__7W5fa"}},"./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/components/PluginCard/styles.scss":function(e,n,t){n=e.exports=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(!1),n.push([e.i,".adminwrapper__admin-src-components-PluginCard-styles__2abuo{position:relative;min-height:216px;margin-bottom:3.6rem;padding:1.2rem 1.5rem;padding-bottom:0;background-color:#fff;box-shadow:0 2px 4px #e3e9f3;-webkit-font-smoothing:antialiased}.admincardTitle__admin-src-components-PluginCard-styles__2Afeu{display:-ms-flexbox;display:flex;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.5px}.admincardTitle__admin-src-components-PluginCard-styles__2Afeu>div:first-child{margin-right:14px}.admincardTitle__admin-src-components-PluginCard-styles__2Afeu>div:last-child{height:36px;line-height:36px}.admincardTitle__admin-src-components-PluginCard-styles__2Afeu i{margin-left:7px;color:#b3b5b9;font-size:1rem;vertical-align:baseline;cursor:pointer}.admincardDescription__admin-src-components-PluginCard-styles__38Gl7{height:54px;margin-top:27px;margin-bottom:9px;font-size:13px;font-weight:400;-webkit-font-smoothing:antialiased}.admincardDescription__admin-src-components-PluginCard-styles__38Gl7>span:last-child{color:#1c5de7}.admincardFooter__admin-src-components-PluginCard-styles__31WUG{position:absolute;bottom:0;left:0;display:-ms-flexbox;display:flex;width:100%;height:45px;padding:.9rem 1.5rem 1rem;background-color:#fafafb;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:row-reverse;flex-direction:row-reverse;cursor:auto}.admincompatible__admin-src-components-PluginCard-styles__ZYFV0{margin-top:3px;color:#5a9e06;font-size:1.3rem;font-style:italic}.admincompatible__admin-src-components-PluginCard-styles__ZYFV0>i{margin-right:7px;font-size:12px}.adminsettings__admin-src-components-PluginCard-styles__2ATyM{margin-top:3px;color:#323740;font-size:1.3rem;font-weight:500;cursor:pointer}.adminsettings__admin-src-components-PluginCard-styles__2ATyM>i{margin-right:7px;font-size:12px}.adminbutton__admin-src-components-PluginCard-styles__1vmaS{height:26px;min-width:89px!important;padding:0 15px;margin:0;border-radius:2px!important;line-height:24px;font-size:13px;font-weight:500!important;cursor:pointer}.adminbutton__admin-src-components-PluginCard-styles__1vmaS span{display:inline-block;width:100%;height:100%;line-height:24px}.adminframe__admin-src-components-PluginCard-styles__2jesK{width:70px;height:36px;margin:auto 0;text-align:center;border:1px solid #f3f3f7;border-radius:3px;white-space:nowrap}.adminframe__admin-src-components-PluginCard-styles__2jesK>img{max-height:36px;vertical-align:middle}.adminhelper__admin-src-components-PluginCard-styles__1gvN1{display:inline-block;height:100%;vertical-align:middle}.adminprimary__admin-src-components-PluginCard-styles__1VtQD{background:linear-gradient(315deg,#0097f6,#005eea);color:#fff;font-weight:500;-webkit-font-smoothing:antialiased}.adminprimary__admin-src-components-PluginCard-styles__1VtQD:active{box-shadow:inset 1px 1px 3px rgba(0,0,0,.15)}.adminsecondary__admin-src-components-PluginCard-styles__dk49i{border:1px solid #dfe0e1;font-weight:600}",""]),n.locals={wrapper:"adminwrapper__admin-src-components-PluginCard-styles__2abuo",cardTitle:"admincardTitle__admin-src-components-PluginCard-styles__2Afeu",cardDescription:"admincardDescription__admin-src-components-PluginCard-styles__38Gl7",cardFooter:"admincardFooter__admin-src-components-PluginCard-styles__31WUG",compatible:"admincompatible__admin-src-components-PluginCard-styles__ZYFV0",settings:"adminsettings__admin-src-components-PluginCard-styles__2ATyM",button:"adminbutton__admin-src-components-PluginCard-styles__1vmaS",frame:"adminframe__admin-src-components-PluginCard-styles__2jesK",helper:"adminhelper__admin-src-components-PluginCard-styles__1gvN1",primary:"adminprimary__admin-src-components-PluginCard-styles__1VtQD",secondary:"adminsecondary__admin-src-components-PluginCard-styles__dk49i"}},"./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/containers/Marketplace/styles.scss":function(e,n,t){n=e.exports=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(!1),n.push([e.i,".admincontainerFluid__admin-src-containers-Marketplace-styles__1ha6H{padding:18px 30px!important}.admincontainerFluid__admin-src-containers-Marketplace-styles__1ha6H>div:first-child{margin-bottom:11px}.admininputContainer__admin-src-containers-Marketplace-styles__3cdAq{padding-top:7px;background-color:#fff}.admininputContainer__admin-src-containers-Marketplace-styles__3cdAq>div>div{margin-bottom:0!important}.admininputContainer__admin-src-containers-Marketplace-styles__3cdAq>div>div:nth-child(3){display:none}.admininputContainer__admin-src-containers-Marketplace-styles__3cdAq>div>label{display:none!important}.adminwrapper__admin-src-containers-Marketplace-styles__jDN8A{padding-top:3.8rem}",""]),n.locals={containerFluid:"admincontainerFluid__admin-src-containers-Marketplace-styles__1ha6H",inputContainer:"admininputContainer__admin-src-containers-Marketplace-styles__3cdAq",wrapper:"adminwrapper__admin-src-containers-Marketplace-styles__jDN8A"}}});
//# sourceMappingURL=1.1bb3e2e330ecefd927e7.chunk.js.map