(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aece394"],{"1a2f":function(e,t,a){},2302:function(e,t,a){"use strict";var r=a("ed08");t["a"]={data:function(){return{myChart:null,resizeHandler:null}},mounted:function(){var e=this;this.resizeHandler=Object(r["a"])((function(){e.myChart&&e.myChart.resize()}),100),this.initResizeEvent()},methods:{initResizeEvent:function(){window.addEventListener("resize",this.resizeHandler)},destroyResizeEvent:function(){window.removeEventListener("resize",this.resizeHandler)}},beforeDestroy:function(){this.destroyResizeEvent(),this.myChart&&(this.myChart.dispose(),this.myChart.off("click"),this.myChart=null)},activated:function(){this.initResizeEvent(),this.myChart&&this.myChart.resize()},deactivated:function(){this.destroyResizeEvent()}}},"32f8":function(e,t,a){var r=a("862d"),i=a("3eba");i.extendSeriesModel({type:"series.liquidFill",visualColorAccessPath:"textStyle.normal.color",optionUpdated:function(){var e=this.option;e.gridSize=Math.max(Math.floor(e.gridSize),4)},getInitialData:function(e,t){var a=r(["value"],e.data),n=new i.List(a,this);return n.initData(e.data),n},defaultOption:{color:["#294D99","#156ACF","#1598ED","#45BDFF"],center:["50%","50%"],radius:"50%",amplitude:"8%",waveLength:"80%",phase:"auto",period:"auto",direction:"right",shape:"circle",waveAnimation:!0,animationEasing:"linear",animationEasingUpdate:"linear",animationDuration:2e3,animationDurationUpdate:1e3,outline:{show:!0,borderDistance:8,itemStyle:{color:"none",borderColor:"#294D99",borderWidth:8,shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.25)"}},backgroundStyle:{color:"#E3F7FF"},itemStyle:{opacity:.95,shadowBlur:50,shadowColor:"rgba(0, 0, 0, 0.4)"},label:{show:!0,color:"#294D99",insideColor:"#fff",fontSize:50,fontWeight:"bold",align:"center",baseline:"middle",position:"inside"},emphasis:{itemStyle:{opacity:.8}}}})},"8e18":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"other-wrapper"},[a("a-row",{staticClass:"other-list",attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{title:"水球图",hoverable:!0,bordered:!1}},[a("liquid-chart",{staticClass:"chart-other"})],1)],1),a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{title:"仪表盘",hoverable:!0,bordered:!1}},[a("gauge-chart",{staticClass:"chart-other"})],1)],1)],1),a("div",{staticClass:"other-list"},[a("a-card",{attrs:{title:"词云图",hoverable:!0,bordered:!1}},[a("word-chart",{staticClass:"chart-other"})],1)],1),a("a-row",{staticClass:"other-list",attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{title:"雷达图",hoverable:!0,bordered:!1}},[a("radar-chart",{staticClass:"chart-other"})],1)],1),a("a-col",{attrs:{span:12}},[a("a-card",{attrs:{title:"矩形树图",hoverable:!0,bordered:!1}},[a("tree-chart",{staticClass:"chart-other"})],1)],1)],1)],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"liquidChart"})},o=[],l=a("2302"),s=a("313e"),h=a.n(s);a("d015");var u={name:"liquidChart",mixins:[l["a"]],data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.initEchart()}))},methods:{initEchart:function(){this.myChart=h.a.init(this.$refs.liquidChart),this.myChart.setOption({series:[{type:"liquidFill",radius:"85%",center:["50%","45%"],data:[.48,.48,.48,.48],backgroundStyle:{color:{type:"linear",x:1,y:0,x2:.5,y2:1,colorStops:[{offset:1,color:"rgba(168, 218, 247, 0.4)"},{offset:.5,color:"rgba(168, 218, 247, 0.5)"},{offset:0,color:"rgba(168, 218, 247, 0.8)"}],globalCoord:!1}},outline:{borderDistance:0,itemStyle:{borderWidth:5,borderColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(81,142,215, 0)"},{offset:.5,color:"rgba(53,142,215, 0.45)"},{offset:1,color:"rgba(53,142,215, 0.6)"}],globalCoord:!1},shadowColor:"rgba(66,102,247, 0.55)",shadowBlur:10}},label:{normal:{formatter:"48%",textStyle:{fontSize:35}}}}]},!0)}}},d=u,c=a("2877"),m=Object(c["a"])(d,n,o,!1,null,null,null),f=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"gaugeChart"})},v=[],g={name:"gaugeChart",mixins:[l["a"]],data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.initEchart()}))},methods:{initEchart:function(){var e=85.45;this.myChart=h.a.init(this.$refs.gaugeChart),this.myChart.setOption({color:["#37A2DA","#32C5E9","#67E0E3"],title:[{text:"Km/h",top:"30%",left:"center",textStyle:{color:"#5171fd",fontSize:18}},{text:"85.45",bottom:"20%",left:"center",textStyle:{color:"#5171fd",fontSize:24}}],series:[{type:"gauge",center:["50%","52%"],radius:"83.10%",startAngle:225,endAngle:-45,min:0,max:100,axisLine:{show:!0,lineStyle:{width:25,shadowBlur:0,color:[[.3,"#67e0e3"],[.7,"#37a2da"],[1,"#fd666d"]]}},axisTick:{show:!1},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"100%",radius:"20%",width:5},itemStyle:{color:"#4389F6"},detail:{show:!1},data:[{value:e}]},{type:"gauge",radius:"78%",center:["50%","52%"],splitNumber:10,min:0,max:100,startAngle:225,endAngle:-45,axisLabel:{show:!1},axisLine:{show:!1},splitLine:{show:!0,length:12,lineStyle:{color:"#b3efff",width:2,shadowColor:"rgb(58,115,192)",shadowBlur:15}},pointer:{show:0},detail:{show:0}}]},!0)}}},y=g,w=Object(c["a"])(y,p,v,!1,null,null,null),b=w.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"radarChart"})},x=[],M={name:"radarChart",mixins:[l["a"]],data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.initEchart()}))},methods:{initEchart:function(){this.myChart=h.a.init(this.$refs.radarChart),this.myChart.setOption({color:["#FF9E8C","#00D2C9"],tooltip:{trigger:"item"},legend:{icon:"circle",show:!0,right:"5",top:"10",itemWidth:10,itemHeight:11,data:["2019","2020"]},radar:{center:["42%","50%"],radius:"70%",nameGap:15,startAngle:90,splitNumber:4,name:{textStyle:{color:"#666",fontSize:14}},shape:"circle",splitArea:{areaStyle:{color:["transparent"]}},axisLabel:{show:!1},axisLine:{show:!0,lineStyle:{color:"rgba(63,133,247,0.3)"}},splitLine:{show:!0,lineStyle:{color:"rgba(63,133,247,0.3)"}},indicator:[{name:"JavaScrpt",max:100},{name:"Vue",max:100},{name:"jQuery",max:100},{name:"TypeScript",max:100},{name:"Echarts",max:100},{name:"webpack",max:100}]},series:[{name:"2020",type:"radar",symbolSize:0,areaStyle:{normal:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1}},itemStyle:{normal:{shadowColor:"rgb(58,115,192)",shadowBlur:15}},data:[{value:[75,85,80,80,90,90],name:"2020"}]},{name:"2019",type:"radar",symbolSize:0,areaStyle:{normal:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1}},itemStyle:{normal:{shadowColor:"rgb(58,115,192)",shadowBlur:15}},data:[{value:[95,75,75,50,40,20],name:"2019"}]}]},!0)}}},S=M,E=Object(c["a"])(S,C,x,!1,null,null,null),F=E.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"treeChart"})},I=[],L={name:"treeChart",mixins:[l["a"]],data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.initEchart()}))},methods:{initEchart:function(){this.myChart=h.a.init(this.$refs.treeChart),this.myChart.setOption({color:["#6FFFFF","#FF9244","#7155B7","#0FE7E7","#48C7F2","#4490FF"],tooltip:{},series:[{name:"矩形树图",type:"treemap",roam:!1,label:{show:!0,formatter:"{b}",fontSize:14},nodeClick:!1,breadcrumb:{show:!1},itemStyle:{normal:{show:!0,textStyle:{color:"#666",fontSize:14},borderWidth:0},emphasis:{label:{show:!0}}},data:[{name:"Vue",value:6e3},{name:"React",value:6600},{name:"Angular",value:3200},{name:"uni-app",value:2100},{name:"mpvue",value:172},{name:"Taro",value:179},{name:"element-ui",value:293},{name:"vant",value:200}]}]},!0)}}},z=L,k=Object(c["a"])(z,P,I,!1,null,null,null),D=k.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"wordChart"})},T=[];a("b0c0");a("87a1");var A=["#4FD8FF","#C15FFF","#FF5F55","#FFC935","#767BFB"],$={name:"wordChart",mixins:[l["a"]],data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.initEchart()}))},methods:{initEchart:function(){var e=this;this.myChart=h.a.init(this.$refs.wordChart),this.myChart.setOption({tooltip:{},series:[{type:"wordCloud",sizeRange:[12,35],rotationRange:[0,0],width:"100%",shape:"cardioid",gridSize:11,top:0,textStyle:{normal:{fontFamily:"sans-serif",color:function(){return A[Math.floor(Math.random()*A.length)]}}},data:[{name:"小笼包",value:70*Math.random(.1,1)},{name:"炸鸡",value:70*Math.random(.1,1)},{name:"汉堡",value:70*Math.random(.1,1)},{name:"蜜雪冰城",value:70*Math.random(.1,1)},{name:"一点点",value:70*Math.random(.1,1)},{name:"喜茶",value:70*Math.random(.1,1)},{name:"贡茶",value:70*Math.random(.1,1)},{name:"热干面",value:70*Math.random(.1,1)},{name:"螺蛳粉",value:70*Math.random(.1,1)},{name:"臭豆腐",value:70*Math.random(.1,1)},{name:"麻辣烫",value:70*Math.random(.1,1)},{name:"过桥米线",value:70*Math.random(.1,1)},{name:"大盘鸡",value:70*Math.random(.1,1)},{name:"披萨",value:70*Math.random(.1,1)},{name:"鸡公煲",value:70*Math.random(.1,1)},{name:"烤全羊",value:70*Math.random(.1,1)},{name:"肉夹馍",value:70*Math.random(.1,1)},{name:"烤冷面",value:70*Math.random(.1,1)},{name:"炒酸奶",value:70*Math.random(.1,1)},{name:"卫龙",value:70*Math.random(.1,1)},{name:"烤鸭",value:70*Math.random(.1,1)},{name:"灌汤包",value:70*Math.random(.1,1)},{name:"鸭血粉丝",value:70*Math.random(.1,1)},{name:"糯米团",value:70*Math.random(.1,1)},{name:"酸辣粉",value:70*Math.random(.1,1)},{name:"汤圆",value:70*Math.random(.1,1)},{name:"羊肉泡馍",value:70*Math.random(.1,1)},{name:"糊辣汤",value:70*Math.random(.1,1)}]}]},!0),this.myChart.off("click"),this.myChart.on("click",(function(t){e.$message.success("点击了"+t.name)}))}},watch:{chartData:{handler:function(e,t){this.initEchart()},deep:!0}}},B=$,_=Object(c["a"])(B,O,T,!1,null,null,null),R=_.exports,Y={name:"otherChart",components:{liquidChart:f,gaugeChart:b,radarChart:F,treeChart:D,wordChart:R},data:function(){return{}}},q=Y,W=(a("f3f8"),Object(c["a"])(q,r,i,!1,null,"34a37f2a",null));t["default"]=W.exports},a98e:function(e,t,a){var r=a("3eba");a("32f8"),a("cb7d"),r.registerVisual(r.util.curry(a("98e7"),"liquidFill"))},cb7d:function(e,t,a){var r=a("3eba"),i=r.number,n=a("a15a"),o=i.parsePercent,l=a("ccf7");r.extendChartView({type:"liquidFill",render:function(e,t,a){var i=this.group;i.removeAll();var s=e.getData(),h=s.getItemModel(0),u=h.get("center"),d=h.get("radius"),c=a.getWidth(),m=a.getHeight(),f=Math.min(c,m),p=0,v=0,g=e.get("outline.show");g&&(p=e.get("outline.borderDistance"),v=o(e.get("outline.itemStyle.borderWidth"),f));var y,w,b,C=o(u[0],c),x=o(u[1],m),M=!1,S=e.get("shape");if("container"===S?(M=!0,y=[c/2,m/2],w=[y[0]-v/2,y[1]-v/2],b=[o(p,c),o(p,m)],d=[Math.max(w[0]-b[0],0),Math.max(w[1]-b[1],0)]):(y=o(d,f)/2,w=y-v/2,b=o(p,f),d=Math.max(w-b,0)),g){var E=D();E.style.lineWidth=v,i.add(D())}var F=M?0:C-d,P=M?0:x-d,I=null;i.add(O());var L=this._data,z=[];function k(e,t){if(S){if(0===S.indexOf("path://")){var a=r.graphic.makePath(S.slice(7),{}),i=a.getBoundingRect(),o=i.width,l=i.height;o>l?(l*=2*e/o,o=2*e):(o*=2*e/l,l=2*e);var s=t?0:C-o/2,h=t?0:x-l/2;return a=r.graphic.makePath(S.slice(7),{},new r.graphic.BoundingRect(s,h,o,l)),t&&(a.position=[-o/2,-l/2]),a}if(M){var u=t?-e[0]:C-e[0],d=t?-e[1]:x-e[1];return n.createSymbol("rect",u,d,2*e[0],2*e[1])}u=t?-e:C-e,d=t?-e:x-e;return"pin"===S?d+=e:"arrow"===S&&(d-=e),n.createSymbol(S,u,d,2*e,2*e)}return new r.graphic.Circle({shape:{cx:t?0:C,cy:t?0:x,r:e}})}function D(){var t=k(y);return t.style.fill=null,t.setStyle(e.getModel("outline.itemStyle").getItemStyle()),t}function O(){var t=k(d);t.setStyle(e.getModel("backgroundStyle").getItemStyle()),t.style.fill=null,t.z2=5;var a=k(d);a.setStyle(e.getModel("backgroundStyle").getItemStyle()),a.style.stroke=null;var i=new r.graphic.Group;return i.add(t),i.add(a),i}function T(t,a,i){var n=M?d[0]:d,h=M?m/2:d,u=s.getItemModel(t),c=u.getModel("itemStyle"),f=u.get("phase"),p=o(u.get("amplitude"),2*h),v=o(u.get("waveLength"),2*n),g=s.get("value",t),y=h-g*h*2;f=i?i.shape.phase:"auto"===f?t*Math.PI/4:f;var w=c.getItemStyle();if(!w.fill){var b=e.get("color"),S=t%b.length;w.fill=b[S]}var E=2*n,F=new l({shape:{waveLength:v,radius:n,radiusY:h,cx:E,cy:0,waterLevel:y,amplitude:p,phase:f,inverse:a},style:w,position:[C,x]});F.shape._waterLevel=y;var P=u.getModel("emphasis.itemStyle").getItemStyle();P.lineWidth=0,r.graphic.setHoverStyle(F,P);var I=k(d,!0);return I.setStyle({fill:"white"}),F.setClipPath(I),F}function A(e,t,a){var r=s.getItemModel(e),i=r.get("period"),n=r.get("direction"),o=s.get("value",e),l=r.get("phase");l=a?a.shape.phase:"auto"===l?e*Math.PI/4:l;var h=function(t){var a=s.count();return 0===a?t:t*(.2+(a-e)/a*.8)},u=0;u="auto"===i?h(5e3):"function"===typeof i?i(o,e):i;var d=0;"right"===n||null==n?d=Math.PI:"left"===n?d=-Math.PI:"none"===n?d=0:console.error("Illegal direction value for liquid fill."),"none"!==n&&r.get("waveAnimation")&&t.animate("shape",!0).when(0,{phase:l}).when(u/2,{phase:d+l}).when(u,{phase:2*d+l}).during((function(){I&&I.dirty(!0)})).start()}function $(t){var a=h.getModel("label");function i(){var t=e.getFormattedLabel(0,"normal"),a=100*s.get("value",0),r=s.getName(0)||e.name;return isNaN(a)||(r=a.toFixed(0)+"%"),null==t?r:t}var n={z2:10,shape:{x:F,y:P,width:2*(M?d[0]:d),height:2*(M?d[1]:d)},style:{fill:"transparent",text:i(),textAlign:a.get("align"),textVerticalAlign:a.get("baseline")},silent:!0},o=new r.graphic.Rect(n),l=a.get("color");r.graphic.setText(o.style,a,l);var u=new r.graphic.Rect(n),c=a.get("insideColor");r.graphic.setText(u.style,a,c),u.style.textFill=c;var m=new r.graphic.Group;m.add(o),m.add(u);var f=k(d,!0);return I=new r.graphic.CompoundPath({shape:{paths:t},position:[C,x]}),I.setClipPath(f),u.setClipPath(I),m}s.diff(L).add((function(t){var a=T(t,!1),n=a.shape.waterLevel;a.shape.waterLevel=M?m/2:d,r.graphic.initProps(a,{shape:{waterLevel:n}},e),a.z2=2,A(t,a,null),i.add(a),s.setItemGraphicEl(t,a),z.push(a)})).update((function(t,a){for(var n=L.getItemGraphicEl(a),o=T(t,!1,n),l={},h=["amplitude","cx","cy","phase","radius","radiusY","waterLevel","waveLength"],u=0;u<h.length;++u){var d=h[u];o.shape.hasOwnProperty(d)&&(l[d]=o.shape[d])}var c={},f=["fill","opacity","shadowBlur","shadowColor"];for(u=0;u<f.length;++u){d=f[u];o.style.hasOwnProperty(d)&&(c[d]=o.style[d])}M&&(l.radiusY=m/2),r.graphic.updateProps(n,{shape:l},e),n.useStyle(c),n.position=o.position,n.setClipPath(o.clipPath),n.shape.inverse=o.inverse,A(t,n,n),i.add(n),s.setItemGraphicEl(t,n),z.push(n)})).remove((function(e){var t=L.getItemGraphicEl(e);i.remove(t)})).execute(),h.get("label.show")&&i.add($(z)),this._data=s},dispose:function(){}})},ccf7:function(e,t,a){var r=a("3eba");function i(e,t,a,r){return 0===t?[[e+.5*a/Math.PI/2,r/2],[e+.5*a/Math.PI,r],[e+a/4,r]]:1===t?[[e+.5*a/Math.PI/2*(Math.PI-2),r],[e+.5*a/Math.PI/2*(Math.PI-1),r/2],[e+a/4,0]]:2===t?[[e+.5*a/Math.PI/2,-r/2],[e+.5*a/Math.PI,-r],[e+a/4,-r]]:[[e+.5*a/Math.PI/2*(Math.PI-2),-r],[e+.5*a/Math.PI/2*(Math.PI-1),-r/2],[e+a/4,0]]}e.exports=r.graphic.extendShape({type:"ec-liquid-fill",shape:{waveLength:0,radius:0,radiusY:0,cx:0,cy:0,waterLevel:0,amplitude:0,phase:0,inverse:!1},buildPath:function(e,t){null==t.radiusY&&(t.radiusY=t.radius);var a=Math.max(2*Math.ceil(2*t.radius/t.waveLength*4),8);while(t.phase<2*-Math.PI)t.phase+=2*Math.PI;while(t.phase>0)t.phase-=2*Math.PI;var r=t.phase/Math.PI/2*t.waveLength,n=t.cx-t.radius+r-2*t.radius;e.moveTo(n,t.waterLevel);for(var o=0,l=0;l<a;++l){var s=l%4,h=i(l*t.waveLength/4,s,t.waveLength,t.amplitude);e.bezierCurveTo(h[0][0]+n,-h[0][1]+t.waterLevel,h[1][0]+n,-h[1][1]+t.waterLevel,h[2][0]+n,-h[2][1]+t.waterLevel),l===a-1&&(o=h[2][0])}t.inverse?(e.lineTo(o+n,t.cy-t.radiusY),e.lineTo(n,t.cy-t.radiusY),e.lineTo(n,t.waterLevel)):(e.lineTo(o+n,t.cy+t.radiusY),e.lineTo(n,t.cy+t.radiusY),e.lineTo(n,t.waterLevel)),e.closePath()}})},d015:function(e,t,a){e.exports=a("a98e")},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));a("4de4"),a("d3b7"),a("ac1f"),a("5319"),a("1276");function r(e,t){var a,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this;return function(){for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];if(r)return e.apply(i,o),void(r=!1);clearTimeout(a),a=setTimeout((function(){e.apply(i,o)}),t)}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(a,r){function i(e,t){AMapUI.loadUI(["geo/DistrictExplorer"],(function(n){var o=new n;o.loadAreaNode(e,(function(n,o){if(n)return console.error(n),void r(n);var l=o.getSubFeatures();if(0!==l.length){t&&(l=l.filter((function(e){return e.properties.adcode==t})));var s={features:l};a(s)}else{var h=o._data.geoData.parent.properties.acroutes;i(h[h.length-1],e)}}))}))}i(e,t)}))}},f3f8:function(e,t,a){"use strict";var r=a("1a2f"),i=a.n(r);i.a}}]);