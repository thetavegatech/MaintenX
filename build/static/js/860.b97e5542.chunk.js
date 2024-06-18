"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[860],{70860:function(e,t,n){n.r(t);var r=n(4942),a=n(1413),s=n(74165),c=n(15861),o=n(29439),i=n(72791),u=n(55294),l=n(39040),d=n(90020),m=n(1104),f=(n(30536),n(80184));t.default=function(){var e=(0,i.useState)({assetName:"",location:"",assetType:"",installationDate:"",tbmScheduleDate:"",tbmFrequency:"",nextTbmDate:"",status:"Pending"}),t=(0,o.Z)(e,2),n=t[0],p=t[1],h=(0,i.useState)(""),v=(0,o.Z)(h,2),b=v[0],x=v[1],Z=(0,i.useState)([]),g=(0,o.Z)(Z,2),y=g[0],N=g[1],j=function(e,t){if(!e||!t)return"";var n=new Date(e);switch(t){case"daily":return(0,l.Z)(n,1).toISOString().split("T")[0];case"weekly":return(0,d.Z)(n,1).toISOString().split("T")[0];case"fifteen days":return(0,l.Z)(n,15).toISOString().split("T")[0];case"monthly":return(0,m.Z)(n,1).toISOString().split("T")[0];case"quarterly":return(0,m.Z)(n,3).toISOString().split("T")[0];case"half year":return(0,m.Z)(n,6).toISOString().split("T")[0];case"yearly":return(0,m.Z)(n,12).toISOString().split("T")[0];default:return""}};(0,i.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://backendmaintenx.onrender.com/api/assets");case 3:t=e.sent,N(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching assets:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var c,o,i,l,d,m,f,h,v;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.target,o=c.name,i=c.value,l=(0,a.Z)((0,a.Z)({},n),{},(0,r.Z)({},o,i)),"assetName"!==o){e.next=13;break}return e.prev=3,e.next=6,u.Z.get("https://backendmaintenx.onrender.com/api/locations/".concat(i));case 6:(d=e.sent).data&&d.data.Location&&(l=(0,a.Z)((0,a.Z)({},l),{},{location:d.data.Location})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error fetching location:",e.t0);case 13:"tbmScheduleDate"!==o&&"tbmFrequency"!==o||(f=(m=l).tbmScheduleDate,h=m.tbmFrequency,v=j(f,h),l=(0,a.Z)((0,a.Z)({},l),{},{nextTbmDate:v})),p(l);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.Z.post("https://backendmaintenx.onrender.com/api/tbm",n);case 4:x("TBM record created successfully!"),p((function(e){return(0,a.Z)((0,a.Z)({},e),{},{assetName:"",location:"",assetType:"",installationDate:"",tbmScheduleDate:"",tbmFrequency:"",nextTbmDate:"",status:"Pending"})})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),x("Error creating TBM record."),console.error("There was an error creating the TBM record:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"form-container",children:[(0,f.jsx)("h4",{children:"Create TBM Record"}),(0,f.jsxs)("form",{onSubmit:D,children:[(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("label",{children:"Asset Name:"}),(0,f.jsxs)("select",{name:"assetName",className:"form-control",value:n.assetName,onChange:S,required:!0,children:[(0,f.jsx)("option",{value:"",children:"Select Asset"}),y.map((function(e){return(0,f.jsx)("option",{value:e.name,children:e.AssetName},e._id)}))]})]}),(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("label",{children:"Location:"}),(0,f.jsx)("input",{type:"text",name:"location",className:"form-control",value:n.location,readOnly:!0,required:!0})]}),(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("label",{children:"CBM Schedule Date:"}),(0,f.jsx)("input",{type:"date",name:"tbmScheduleDate",className:"form-control",value:n.tbmScheduleDate,onChange:S})]}),(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("label",{children:"CBM Frequency:"}),(0,f.jsxs)("select",{type:"text",name:"tbmFrequency",className:"form-control",value:n.tbmFrequency,onChange:S,children:[(0,f.jsx)("option",{value:"daily",children:"Daily"}),(0,f.jsx)("option",{value:"weekly",children:"Weekly"}),(0,f.jsx)("option",{value:"fifteen days",children:"Fifteen Days"}),(0,f.jsx)("option",{value:"monthly",children:"Monthly"}),(0,f.jsx)("option",{value:"quarterly",children:"Quarterly"}),(0,f.jsx)("option",{value:"half year",children:"Half Year"}),(0,f.jsx)("option",{value:"yearly",children:"Yearly"})]})]}),(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("label",{children:"Next TBM Date:"}),(0,f.jsx)("input",{type:"date",name:"nextTbmDate",className:"form-control",value:n.nextTbmDate,onChange:S})]})]}),(0,f.jsx)("button",{type:"submit",className:"submit-button",children:"Submit"})]}),b&&(0,f.jsx)("p",{children:b})]})}},4522:function(e,t,n){function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return r}})},29297:function(e,t,n){function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:function(){return r}})},39040:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(29297),a=n(38527),s=n(4522);function c(e,t){(0,s.Z)(2,arguments);var n=(0,a.Z)(e),c=(0,r.Z)(t);return isNaN(c)?new Date(NaN):c?(n.setDate(n.getDate()+c),n):n}},1104:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(29297),a=n(38527),s=n(4522);function c(e,t){(0,s.Z)(2,arguments);var n=(0,a.Z)(e),c=(0,r.Z)(t);if(isNaN(c))return new Date(NaN);if(!c)return n;var o=n.getDate(),i=new Date(n.getTime());return i.setMonth(n.getMonth()+c+1,0),o>=i.getDate()?i:(n.setFullYear(i.getFullYear(),i.getMonth(),o),n)}},90020:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(29297),a=n(39040),s=n(4522);function c(e,t){(0,s.Z)(2,arguments);var n=7*(0,r.Z)(t);return(0,a.Z)(e,n)}},38527:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(71002),a=n(4522);function s(e){(0,a.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,r.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},30536:function(){}}]);
//# sourceMappingURL=860.b97e5542.chunk.js.map