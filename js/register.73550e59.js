(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"16cc":function(e,r,s){},"73cf":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"page-register"},[s("div",{staticClass:"container"},[s("div",{staticClass:"form-panel"},[s("a-form-model",{ref:"form",attrs:{model:e.form,"label-col":{span:5},"wrapper-col":{span:10},rules:e.rules},on:{submit:e.handleSubmit}},[s("a-form-model-item",{attrs:{label:e.$t("username"),prop:"username"}},[s("a-input",{attrs:{placeholder:e.$t("enter.username")},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),s("a-form-model-item",{attrs:{label:e.$t("email"),prop:"email"}},[s("a-input",{attrs:{placeholder:e.$t("enter.email")},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),s("a-form-model-item",{attrs:{label:e.$t("password"),prop:"password"}},[s("a-input-password",{attrs:{placeholder:e.$t("enter.password")},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),s("a-form-model-item",{attrs:{label:e.$t("repassword"),prop:"repassword"}},[s("a-input-password",{attrs:{placeholder:e.$t("reenter.password")},model:{value:e.form.repassword,callback:function(r){e.$set(e.form,"repassword",r)},expression:"form.repassword"}})],1),s("a-form-model-item",{attrs:{"wrapper-col":{span:10,offset:5}}},[s("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.submitting}},[e._v(e._s(e.$t("signup")))])],1)],1)],1)])])},a=[];function o(){return{username:"",password:"",repassword:"",email:""}}function n(e){return{username:[{required:!0,message:e.$t("enter.username")}],email:[{type:"email",message:e.$t("not.email")}],password:[{required:!0,message:e.$t("enter.password")}],repassword:[{required:!0,message:e.$t("reenter.password")},{validator:function(r,s,t){s&&s===e.form.password?t():t(new Error(e.$t("diff.password")))}}]}}var i=s("1f57"),m={name:"Register",data:function(){return{submitting:!1,form:o(),rules:n(this)}},methods:{afterRegister:function(){var e=this;this.$nextTick((function(){e.$router.push("/")}))},submit:function(){var e=this,r=this.form,s=r.username,t=r.password,a=r.email;this.submitting=!0,i["b"].register({username:s,password:t,email:a}).then((function(r){e.submitting=!1,e.$message.success(e.$t("register.ok"),1,(function(){e.$store.dispatch("account/updateUser",r),e.afterRegister()}))})).catch((function(r){console.log("submit -> error",r),e.$message.error(e.$t("register.error"))}))},handleSubmit:function(e){var r=this;e.preventDefault(),this.$refs.form.validate((function(e){e&&r.submit()}))}}},l=m,u=(s("a220"),s("2877")),p=Object(u["a"])(l,t,a,!1,null,"82bdd912",null);r["default"]=p.exports},a220:function(e,r,s){"use strict";var t=s("16cc"),a=s.n(t);a.a}}]);
//# sourceMappingURL=register.73550e59.js.map