(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a24aae2"],{"3b0d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}},nativeOn:{click:function(e){return t.clearStorage.apply(null,arguments)}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("分类参数")])],1),a("el-card",[a("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"注意：只能给商品添加参数",type:"warning",closable:!0,"show-icon":""}}),a("el-row",{staticClass:"selectRow"},[a("el-col",[a("span",[t._v("请选择商品：")]),a("el-cascader",{staticStyle:{width:"300px"},attrs:{options:t.cateList,props:t.carProps},on:{change:t.handleChange},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}})],1)],1),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("el-button",{attrs:{type:"primary",disabled:t.isShowBtn},on:{click:function(e){t.addVisible=!0}}},[t._v("添加参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.manyList,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return t.handleClose(e.row,n)}}},[t._v(" "+t._s(r)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"attr_name",label:"参数名称"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.openEditParams(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.deleteParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("el-button",{attrs:{type:"primary",disabled:t.isShowBtn},on:{click:function(e){t.addVisible=!0}}},[t._v("添加属性")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.onlyList,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(r,n){return a("el-tag",{key:n,attrs:{closable:""},on:{close:function(a){return t.handleClose(e.row,n)}}},[t._v(" "+t._s(r)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"attr_name",label:"属性名称"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.openEditParams(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.deleteParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1)],1),a("el-dialog",{attrs:{title:t.textTitle,visible:t.addVisible,width:"50%"},on:{"update:visible":function(e){t.addVisible=e},close:t.resetAddForm}},[a("el-form",{ref:"addFormRefs",attrs:{"label-width":"80px",model:t.addForm,rules:t.addFormRules}},[a("el-form-item",{attrs:{label:t.labelText,prop:"attr_name"}},[a("el-input",{model:{value:t.addForm.attr_name,callback:function(e){t.$set(t.addForm,"attr_name",e)},expression:"addForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addParams}},[t._v("确 定")])],1)],1),a("el-dialog",{ref:"editRefs",attrs:{title:t.editTitle,visible:t.editVisible,width:"50%"},on:{"update:visible":function(e){t.editVisible=e},close:t.resetEditForm}},[a("el-form",{ref:"editFormRefs",attrs:{"label-width":"80px",model:t.editForm,rules:t.addFormRules}},[a("el-form-item",{attrs:{label:t.labelText,prop:"attr_name"}},[a("el-input",{model:{value:t.editForm.attr_name,callback:function(e){t.$set(t.editForm,"attr_name",e)},expression:"editForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editParams}},[t._v("确 定")])],1)],1)],1)],1)},n=[],s=a("1da1"),i=(a("159b"),a("ac1f"),a("1276"),a("99af"),a("a15b"),a("498a"),a("a434"),a("96cf"),{data:function(){return{cateList:[],carProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children"},selectValue:[],activeName:"many",manyList:[],onlyList:[],addVisible:!1,editVisible:!1,addForm:{attr_name:""},editForm:{attr_name:"",attr_id:0},addFormRules:{attr_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}}},created:function(){this.getCateList()},computed:{isShowBtn:function(){return 3!==this.selectValue.length},selectGoodsId:function(){return this.selectValue[this.selectValue.length-1]},textTitle:function(){return"many"===this.activeName?"添加参数":"添加属性"},editTitle:function(){return"many"===this.activeName?"修改参数":"修改属性"},labelText:function(){return"many"===this.activeName?"参数名称":"属性名称"}},methods:{clearStorage:function(){window.sessionStorage.setItem("activePath",""),this.$router.go(0)},getCateList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories");case 2:if(a=e.sent,r=a.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取数据失败"));case 6:t.cateList=r.data;case 7:case"end":return e.stop()}}),e)})))()},handleChange:function(){this.getParamsData()},getParamsData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories/".concat(t.selectGoodsId,"/attributes"),{params:{sel:t.activeName}});case 2:if(a=e.sent,r=a.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取数据失败"));case 6:r.data.forEach((function(t){t.attr_vals=t.attr_vals?t.attr_vals.split(" "):[],t.inputVisible=!1,t.inputValue=""})),"many"===t.activeName?t.manyList=r.data:t.onlyList=r.data;case 8:case"end":return e.stop()}}),e)})))()},handleClick:function(){this.getParamsData()},resetAddForm:function(){this.$refs.addFormRefs.resetFields()},resetEditForm:function(){this.$refs.editFormRefs.resetFields()},addParams:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("categories/".concat(t.selectGoodsId,"/attributes"),{attr_name:t.addForm.attr_name,attr_sel:t.activeName});case 2:if(a=e.sent,r=a.data,201===r.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("创建失败"));case 6:t.$message.success("创建成功"),t.getParamsData(),t.addVisible=!1;case 9:case"end":return e.stop()}}),e)})))()},editParams:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs.editRefs.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return",t.$message.error("提交信息有误"));case 2:return e.next=4,t.$http.put("categories/".concat(t.selectGoodsId,"/attributes/").concat(t.editForm.attr_id),{attr_name:t.editForm.attr_name,attr_sel:t.activeName});case 4:if(r=e.sent,n=r.data,200===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("创建失败"));case 8:t.$message.success("创建成功"),t.getParamsData(),t.editVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()},openEditParams:function(t){this.editVisible=!0,this.editForm.attr_name=t.attr_name,this.editForm.attr_id=t.attr_id},deleteParams:function(t){var e=this;this.$confirm("此操作将永久删除该信息, 是否继续?","删除",{confirmButtonText:"删除",cancelButtonText:"取消",type:"error"}).then(Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.delete("categories/".concat(e.selectGoodsId,"/attributes/").concat(t));case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error("删除失败"));case 6:e.$message({type:"success",message:"删除成功!"}),e.getParamsData();case 8:case"end":return a.stop()}}),a)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},getValsInfo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.put("categories/".concat(e.selectGoodsId,"/attributes/").concat(t.attr_id),{attr_name:t.attr_name,attr_sel:e.activeName,attr_vals:t.attr_vals.join(" ")});case 2:if(r=a.sent,n=r.data,200===n.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error("失败"));case 6:e.$message.success("成功");case 7:case"end":return a.stop()}}),a)})))()},handleInputConfirm:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(0!==t.inputValue.trim().length){a.next=4;break}return t.inputValue="",t.inputVisible=!1,a.abrupt("return");case 4:t.attr_vals.push(t.inputValue),t.inputValue="",t.inputVisible=!1,e.getValsInfo(t);case 8:case"end":return a.stop()}}),a)})))()},handleClose:function(t,e){t.attr_vals.splice(e,1),this.getValsInfo(t)},showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))}}}),o=i,l=(a("4da5"),a("2877")),u=Object(l["a"])(o,r,n,!1,null,null,null);e["default"]=u.exports},"498a":function(t,e,a){"use strict";var r=a("23e7"),n=a("58a8").trim,s=a("c8d2");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},"4da5":function(t,e,a){"use strict";a("6feb")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("577e"),s=a("5899"),i="["+s+"]",o=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),u=function(t){return function(e){var a=n(r(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(l,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},"6feb":function(t,e,a){},c8d2:function(t,e,a){var r=a("d039"),n=a("5899"),s="​᠎";t.exports=function(t){return r((function(){return!!n[t]()||s[t]()!=s||n[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-4a24aae2.14a1c1d7.js.map