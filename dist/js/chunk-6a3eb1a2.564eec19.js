(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a3eb1a2"],{"04a8":function(e,t,r){"use strict";var a=r("3391"),n=r.n(a);n.a},"14af":function(e,t,r){e.exports=r.p+"img/point.21d42e62.png"},3391:function(e,t,r){},"5b75":function(e,t,r){},7271:function(e,t,r){},aa1f:function(e,t,r){"use strict";var a=r("5b75"),n=r.n(a);n.a},afaa:function(e,t,r){(function(e,r){r(t)})(0,(function(e){"use strict";var t="4.17",r="next";function a(e){if(e.toLowerCase()===r)return r;var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function n(e){return void 0===e&&(e=t),"https://js.arcgis.com/"+e+"/"}function i(e){void 0===e&&(e=t);var i=n(e),o=a(e);if(o!==r&&3===o.major){var s=o.minor<=10?"js/":"";return""+i+s+"esri/css/esri.css"}return i+"esri/themes/light/main.css"}function o(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}function s(e,t){if(t){var r=document.querySelector(t);r.parentNode.insertBefore(e,r)}else document.head.appendChild(e)}function c(e){return document.querySelector('link[href*="'+e+'"]')}function l(e){return!e||a(e)?i(e):e}function u(e,t){var r=l(e),a=c(r);return a||(a=o(r),s(a,t)),a}var d="undefined"!==typeof window,m={Promise:d?window["Promise"]:void 0},p={};function f(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}function h(e,t,r){var a;r&&(a=v(e,r));var n=function(){t(e),e.removeEventListener("load",n,!1),a&&e.removeEventListener("error",a,!1)};e.addEventListener("load",n,!1)}function v(e,t){var r=function(a){t(a.error||new Error("There was an error attempting to load "+e.src)),e.removeEventListener("error",r,!1)};return e.addEventListener("error",r,!1),r}function y(e){void 0===e&&(e={}),p=e}function w(){return document.querySelector("script[data-esri-loader]")}function b(){var e=window["require"];return e&&e.on}function g(e){void 0===e&&(e={});var t={};[p,e].forEach((function(e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}));var r=t.version,a=t.url||n(r);return new m.Promise((function(e,n){var i=w();if(i){var o=i.getAttribute("src");o!==a?n(new Error("The ArcGIS API for JavaScript is already loaded ("+o+").")):b()?e(i):h(i,e,n)}else if(b())n(new Error("The ArcGIS API for JavaScript is already loaded."));else{var s=t.css;if(s){var c=!0===s;u(c?r:s,t.insertCssBefore)}t.dojoConfig&&(window["dojoConfig"]=t.dojoConfig),i=f(a),h(i,(function(){i.setAttribute("data-esri-loader","loaded"),e(i)}),n),document.body.appendChild(i)}}))}function S(e){return new m.Promise((function(t,r){var a=window["require"].on("error",r);window["require"](e,(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];a.remove(),t(e)}))}))}function j(e,t){if(void 0===t&&(t={}),b())return S(e);var r=w(),a=r&&r.getAttribute("src");return!t.url&&a&&(t.url=a),g(t).then((function(){return S(e)}))}var C={getScript:w,isLoaded:b,loadModules:j,loadScript:g,loadCss:u,setDefaultOptions:y,utils:m};e.getScript=w,e.isLoaded=b,e.loadModules=j,e.loadScript=g,e.loadCss=u,e.setDefaultOptions=y,e.utils=m,e["default"]=C,Object.defineProperty(e,"__esModule",{value:!0})}))},df66:function(e,t,r){"use strict";var a=r("7271"),n=r.n(a);n.a},e560:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"arcgis-wrapper relative",style:{height:e.tagShow?"calc(100vh - 148px)":"calc(100vh - 102px)"}},[e.map?r("div",{staticClass:"handle-list flex flex-wrap align-content-around"},e._l(e.handleList,(function(t){return r("div",{key:t.icon,staticClass:"handle-item",on:{click:function(r){return e.changeHandle(t.icon)}}},[r("a-tooltip",{attrs:{placement:"right"}},[r("template",{slot:"title"},[e._v(" "+e._s(t.title)+" ")]),r("svg-icon",{attrs:{icon:t.icon,size:21,color:t.icon==e.currentKey?"#fff":"#cecece"}})],2)],1)})),0):e._e(),r("base-map",{staticClass:"all-container",attrs:{current:e.currentKey},on:{sendMap:e.getMap}})],1)},n=[],i=(r("d81d"),r("5530")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative",attrs:{id:"mapView"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:"toggle"==e.current,expression:"current == 'toggle'"}],staticClass:"mapList"},[r("scroll-bar",{staticStyle:{width:"250px",height:"550px",color:"#fff"}},[r("div",{attrs:{id:"basemapGallery"}})])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"distance"==e.current,expression:"current == 'distance'"}],staticClass:"mapList measure"},[r("div",{attrs:{id:"measurementDiv"}})]),r("div",{attrs:{id:"search"}})])},s=[];r("ac1f"),r("841c");function c(e){if(Array.isArray(e))return e}r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function l(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0)if(r.push(o.value),t&&r.length===t)break}catch(c){n=!0,i=c}finally{try{a||null==s["return"]||s["return"]()}finally{if(n)throw i}}return r}}var u=r("06c5");function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){return c(e)||l(e,t)||Object(u["a"])(e,t)||d()}var p=r("afaa"),f={name:"mapview",props:{current:{type:String,default:""}},data:function(){return{}},mounted:function(){this.initMap()},methods:{initMap:function(){var e=this,t={url:"https://js.arcgis.com/3.34/"};Object(p["loadModules"])(["esri/map","esri/dijit/BasemapGallery","esri/dijit/Scalebar","esri/dijit/Search","esri/toolbars/draw","dijit/TitlePane","esri/layers/FeatureLayer","esri/renderers/SimpleRenderer","esri/dijit/Measurement","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/Color","dojo/keys","dojo/dom","dojo/domReady!"],t).then((function(t){var r=m(t,13),a=r[0],n=r[1],i=r[2],o=r[3],s=r[4];r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12];e.map=new a("mapView",{basemap:"satellite",center:[114.3,30.4],logo:!1,zoom:15,slider:!1,spatialReference:{wkid:4326}}),e.map.setMapCursor("pointer"),e.basemapGallery=new n({showArcGISBasemaps:!0,map:e.map},"basemapGallery"),e.basemapGallery.startup();var c=new i({map:e.map,attachTo:"bottom-left",scalebarUnit:"dual"});c.show(),e.search=new o({map:e.map},"search"),e.search.startup();var l=dijit.byId("measurementDiv");e.measurement=l||new esri.dijit.Measurement({map:e.map,defaultAreaUnit:esri.Units.SQUARE_METERS,defaultLengthUnit:esri.Units.METERS},document.getElementById("measurementDiv")),e.measurement.startup(),e.measurement.on("measure-start",(function(t){e.$message.info("双击结束测量")})),e.map.on("load",(function(){e.tb=new s(e.map),e.$emit("sendMap",e.map,e.tb)}))})).catch((function(t){e.$message.error("arcgis 加载出错")}))}},beforeDestroy:function(){this.map&&this.map.destroy(),this.basemapGallery&&this.basemapGallery.destroy(),this.search&&this.search.destroy()},watch:{current:function(e){"distance"!=e&&this.measurement?(this.measurement.hide(),this.measurement.clearResult(),this.measurement.setTool("location",!1),this.measurement.setTool("distance",!1),this.measurement.setTool("area",!1)):this.measurement&&this.measurement.show()}}},h=f,v=(r("aa1f"),r("df66"),r("2877")),y=Object(v["a"])(h,o,s,!1,null,"be79e86c",null),w=y.exports,b=r("5880"),g={name:"arcgis",components:{baseMap:w},data:function(){return{handleList:[{title:"切换底图",icon:"toggle"},{title:"绘制点",icon:"multipoint"},{title:"绘制线",icon:"line"},{title:"绘制面",icon:"extent"},{title:"清除",icon:"clear"},{title:"测量",icon:"distance"},{title:"打点",icon:"addPoint"},{title:"加载地图服务",icon:"mapServer"},{title:"轨迹",icon:"trajectory"}],currentKey:"",tb:"",map:""}},computed:Object(i["a"])({},Object(b["mapState"])({tagShow:function(e){return e.setting.tagShow}})),mounted:function(){this.$loading.show({spin:"pulse"})},methods:{changeHandle:function(e){"clear"!=e?"trajectory"!=e?("multipoint"==e||"line"==e||"extent"==e?(this.tb.activate(e),this.map.disableMapNavigation()):"addPoint"==e?this.addPoint():"mapServer"==e&&this.addMapServer(),this.currentKey=e):this.$message.info("功能开发中..."):this.map.graphics.clear()},getMap:function(e,t){var r=this;this.map=e,this.tb=t,this.$loading.hide(),this.tb.on("draw-end",(function(e){r.tb.deactivate(),r.map.enableMapNavigation();var t=r.getDrawStyle(r.currentKey);r.map.graphics.add(new esri.Graphic(e.geometry,t)),e.geometry.setCacheValue("geoShape",r.currentKey),r.currentKey=""}))},getDrawStyle:function(e){if("multipoint"==e){var t=new esri.symbol.SimpleMarkerSymbol;return t.setColor(new esri.Color("#00FFFF")),t}if("line"==e){var r=esri.symbol.CartographicLineSymbol;return new r(r.STYLE_SOLID,new esri.Color([255,0,0]),2,r.CAP_ROUND,r.JOIN_MITER,5)}var a=esri.symbol.SimpleFillSymbol,n=esri.symbol.SimpleLineSymbol;return new a(a.STYLE_SOLID,new n(n.STYLE_SOLID,new esri.Color([255,0,0]),1),new esri.Color([255,0,0,.1]))},addPoint:function(){var e=[{x:116.413384,y:39.910925},{x:117.209523,y:39.093668},{x:113.306436,y:40.082469},{x:109.787443,y:39.614482},{x:123.567539,y:41.849226},{x:129.63954,y:44.556246},{x:121.480539,y:31.235929},{x:121.628572,y:29.866033},{x:114.311582,y:30.598467},{x:103.679433,y:30.636596}],t=e[parseInt(10*Math.random(0,.9))],a=new esri.geometry.Point(t.x,t.y,new esri.SpatialReference({wkid:4326})),n=r("14af"),i=new esri.symbol.PictureMarkerSymbol(n,25,25),o=new esri.Graphic(a,i,"");this.map.graphics.add(o),this.map.centerAndZoom(a,8),this.currentKey=""},addMapServer:function(){var e=new esri.layers.ArcGISDynamicMapServiceLayer("http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer");this.map.addLayer(e);var t=new esri.geometry.Point(116.413384,39.910925,new esri.SpatialReference({wkid:4326}));this.map.centerAndZoom(t,4)}}},S=g,j=(r("04a8"),Object(v["a"])(S,a,n,!1,null,"4f5e26a6",null));t["default"]=j.exports}}]);