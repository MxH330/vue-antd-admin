(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-265609a0"],{4143:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"roleManage-wrapper"},[a("a-card",{attrs:{hoverable:!0,bordered:!1}},[a("div",{staticClass:"flex flex-wrap",attrs:{slot:"title"},slot:"title"},[a("a-button",{staticClass:"select-bottom",attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v(" 新增角色 ")])],1),a("standard-table",{attrs:{tableData:e.tableData,tableHead:e.tableHead,loading:e.loading,pagination:!1},scopedSlots:e._u([{key:"index",fn:function(t){var r=t.index;return a("div",{},[e._v(" "+e._s(r+1)+" ")])}},{key:"action",fn:function(t){var r=t.text;return a("div",{},[a("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleEdit(r)}}},[e._v(" 编辑 ")]),a("a-popconfirm",{attrs:{title:"你确定要删除当前列吗?","ok-text":"是","cancel-text":"否",disabled:r.role&&"admin"==r.role},on:{confirm:function(t){return e.handleDelete(r)}}},[a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"danger",size:"small",disabled:r.role&&"admin"==r.role}},[e._v(" 删除 ")])],1)],1)}}])})],1),e.dialogVisible?a("role-model",{attrs:{currentRow:e.currentRow,dialogVisible:e.dialogVisible,tableData:e.tableData},on:{ok:e.handleOk,cancel:function(t){e.dialogVisible=!1}}}):e._e()],1)},n=[],o=a("5530"),l=a("a567"),i=a("b775");function c(e){return i["a"].post("/roleManage/roleTableData",e)}function s(e){return i["a"].post("/roleManage/deleteRole",e)}function d(e){return i["a"].post("/roleManage/editRole",e)}function u(e){return i["a"].post("/roleManage/addRole",e)}var f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.currentRow?"编辑":"新增",visible:e.dialogVisible,okText:"确认",cancelText:"取消",width:620,confirmLoading:e.loading},on:{ok:e.handleSure,cancel:function(){e.$emit("cancel")}}},[a("a-form-model",{ref:"roleFrom",attrs:{model:e.roleFrom,rules:e.roleRule,"label-col":{span:4},"wrapper-col":{span:16},hideRequiredMark:""}},[a("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:e.currentRow,expression:"currentRow"}],attrs:{prop:"id",label:"id"}},[a("a-input",{attrs:{disabled:""},model:{value:e.roleFrom.id,callback:function(t){e.$set(e.roleFrom,"id",t)},expression:"roleFrom.id"}})],1),a("a-form-model-item",{attrs:{prop:"role",label:"角色名称",hasFeedback:""}},[a("a-input",{model:{value:e.roleFrom.role,callback:function(t){e.$set(e.roleFrom,"role",t)},expression:"roleFrom.role"}})],1),a("a-form-model-item",{attrs:{prop:"text",label:"描述"}},[a("a-textarea",{attrs:{placeholder:"描述...",autoSize:{minRows:3,maxRows:5}},model:{value:e.roleFrom.text,callback:function(t){e.$set(e.roleFrom,"text",t)},expression:"roleFrom.text"}})],1),a("a-form-model-item",{attrs:{prop:"menu",label:"菜单"}},[a("standard-tree",{attrs:{role:e.roleFrom.role}})],1)],1)],1)},m=[],h=(a("c975"),a("d81d"),a("498a"),a("a3cc")),p={name:"roleModel",props:{currentRow:[Object,null],dialogVisible:Boolean,tableData:Array},components:{standardTree:h["a"]},data:function(){var e=this,t=function(t,a,r){e.currentRow&&r(),0===a.trim().length?r(new Error("角色名称不能为空！")):-1!=e.roleList.indexOf(a)?r(new Error("已存在相同角色名称！")):r()};return{roleRule:{role:[{required:!0,trigger:"blur",validator:t}],text:[{required:!0,trigger:"blur",min:5,message:"请至少输入五个字符描述！"}]},roleFrom:{role:""},loading:!1}},computed:{roleList:function(){return this.tableData.map((function(e){return e.role}))}},mounted:function(){this.roleFrom=Object(o["a"])({},this.currentRow)||{role:""}},methods:{handleSure:function(){var e=this;this.$refs.roleFrom.validate((function(t){e.loading=!0,t?e.currentRow?d(e.roleFrom).then((function(){e.$message.success("修改成功!"),e.loading=!1,e.$emit("ok")})):u(e.roleFrom).then((function(){e.$message.success("添加成功!"),e.loading=!1,e.$emit("ok")})):e.loading=!1}))}}},b=p,g=a("2877"),R=Object(g["a"])(b,f,m,!1,null,null,null),v=R.exports,w=[{title:"序号",dataIndex:"index",scopedSlots:{customRender:"index"},width:60},{title:"id",dataIndex:"id",ellipsis:!0},{title:"权限",dataIndex:"role",ellipsis:!0},{title:"描述",dataIndex:"text",ellipsis:!0},{title:"操作",scopedSlots:{customRender:"action"},width:140}],x={name:"roleManage",components:{standardTable:l["a"],roleModel:v},data:function(){return{loading:!1,tableData:[],currentRow:null,dialogVisible:!1,tableHead:w}},created:function(){this.getRoleTable()},methods:{handleAdd:function(){this.currentRow=null,this.dialogVisible=!0},getRoleTable:function(){var e=this;c().then((function(t){e.tableData=t.data||[]}))},handleEdit:function(e){this.currentRow=Object(o["a"])({},e),this.dialogVisible=!0},handleOk:function(){this.dialogVisible=!1,this.currentRow=null,this.getRoleTable()},handleDelete:function(e){var t=this;s({id:e.id}).then((function(){t.$message.success("删除成功!"),t.getRoleTable()}))}}},k=x,y=Object(g["a"])(k,r,n,!1,null,"0a6ad163",null);t["default"]=y.exports},"498a":function(e,t,a){"use strict";var r=a("23e7"),n=a("58a8").trim,o=a("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return n(this)}})},a3cc:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree",{attrs:{checkable:"","tree-data":e.treeData,checkedKeys:e.checkKeyList},on:{check:e.handleSelect}})},n=[],o=(a("99af"),a("4de4"),a("4160"),a("159b"),a("5530")),l=a("2f62"),i=a("a18c"),c=(a("d3b7"),a("31c2"));function s(e){return new Promise((function(t,a){var r=[];r="admin"==e?i["a"]:"text"==e||"editor"==e?Object(c["filterAsyncRoute"])(i["a"],e):[],t({data:r,code:200,message:"路由获取成功!"})}))}var d={name:"standardTree",props:{role:String},data:function(){return{treeData:[],checkKeyList:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["baseRoute"])),{},{asyncRoutes:function(){return i["a"]}}),created:function(){var e=this.filtrRoute(this.asyncRoutes);this.treeData=this.generateRoutes(e),this.gerRoleRoute()},methods:{gerRoleRoute:function(){var e=this;s(this.role).then((function(t){var a=t.data||[],r=e.filtrRoute(a);e.checkKeyList=e.getSelectRoute(r)}))},filtrRoute:function(e){return 0==e.length?[]:e.filter((function(e){return e.children}))[0].children},generateRoutes:function(e){var t=this,a=[];return e.forEach((function(e){var r={key:e.path,title:e.meta.title};e.children&&(r.children=t.generateRoutes(e.children)),a.push(r)})),a},getSelectRoute:function(e){var t=this,a=[];return e.forEach((function(e){e.children?a=a.concat(t.getSelectRoute(e.children)):a.push(e.path)})),a},handleSelect:function(e){this.checkKeyList=e}},watch:{role:function(e,t){this.gerRoleRoute()}}},u=d,f=a("2877"),m=Object(f["a"])(u,r,n,!1,null,"edb849e6",null);t["a"]=m.exports},a567:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tableCommon-wrapper"},[a("a-table",{attrs:{columns:e.tableHead,dataSource:e.tableData,loading:e.loading,pagination:e.pagination,"row-selection":e.rowSelection},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots).filter((function(e){return"expandedRowRender"!==e})),(function(t){return{key:t,fn:function(a,r,n){return[e._t(t,null,null,{text:a,record:r,index:n})]}}}))],null,!0)})],1)},n=[],o={name:"standardTable",props:{tableHead:{type:Array,required:!0},tableData:{type:Array,required:!0},loading:{type:Boolean,default:!1},pagination:{type:Boolean,default:!0},rowSelection:{type:Object}},data:function(){return{}}},l=o,i=a("2877"),c=Object(i["a"])(l,r,n,!1,null,"37900d19",null);t["a"]=c.exports},c8d2:function(e,t,a){var r=a("d039"),n=a("5899"),o="​᠎";e.exports=function(e){return r((function(){return!!n[e]()||o[e]()!=o||n[e].name!==e}))}}}]);