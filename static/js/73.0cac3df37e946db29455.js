webpackJsonp([73],{263:function(e,a,t){t(918);var r=t(4)(t(920),t(921),null,null);e.exports=r.exports},475:function(e,a){var t={CityManager:"CityManager",OfficeAssistant:"OfficeAssistant",OperationalStaff:"OperationalStaff",OperationalStaffLeader:"OperationalStaffLeader",GroupLeader:"GroupLeader",GroupMember:"GroupMember",WarehouseKeeper:"WarehouseKeeper",Buyer:"Buyer",HR:"HR",Legal:"Legal",FinancialStaff:"FinancialStaff"};e.exports={ROLE:t,getRoleTextByEnum:function(e){switch(e){case t.CityManager:return"城市经理";case t.OfficeAssistant:return"办公室助理";case t.OperationalStaff:return"运维人员";case t.OperationalStaffLeader:return"运维经理";case t.GroupLeader:return"地推组长";case t.GroupMember:return"地推组员";case t.WarehouseKeeper:return"库管员";case t.Buyer:return"采购员";case t.HR:return"人事";case t.Legal:return"法务";case t.FinancialStaff:return"财务"}}}},918:function(e,a,t){var r=t(919);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(254)("075fcf0a",r,!0)},919:function(e,a,t){(e.exports=t(94)()).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"enter.vue",sourceRoot:""}])},920:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(475),n=(t.n(r),{c:"Way.OperationMaintenance.ApiController.System.OmsOfficeWorkerApiController",m:"GetUserInfo"});a.default={name:"enter",created:function(){var e=this,a="home";this.$vux.loading.show({text:"请稍后.."}),this.$http.request(n).then(function(t){e.$vux.loading.hide(),t.Data&&(t.Data.RoleMarks&&1==t.Data.RoleMarks.length&&t.Data.RoleMarks[0]==r.ROLE.OfficeAssistant&&(a="officeAssIndex"),t.Data.RoleMarks&&t.Data.RoleMarks.length>0&&e.$http.saveLocalStorage(e.$http.local.role,t.Data.RoleMarks[0]),localStorage.setItem("userPhone",t.Data.Telephone),localStorage.setItem("__OMSBYCURRNAME",t.Data.UserName)),e.$router.replace({name:a})}).catch(function(a){e.$vux.loading.hide(),a.Message=a.Message||"系统繁忙，请稍后再试试",e.$router.replace({name:"login"})})}}},921:function(e,a){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]}}});