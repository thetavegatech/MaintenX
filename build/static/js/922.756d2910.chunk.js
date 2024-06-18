"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[922],{47922:function(e,t,a){a.r(t);var n=a(1413),s=a(74165),l=a(15861),r=a(29439),o=a(72791),c=a(57689),i=a(55294),d=a(80184);t.default=function(){var e=(0,o.useState)({AssetName:"",ScheduledMaintenanceDatesandIntervals:"",TaskName:"",TaskDescription:"",startDate:"",nextDate:"",Location:"",status:"Pending",pmScheduleDate:"",nextScheduleDate:""}),t=(0,r.Z)(e,2),a=t[0],u=t[1],m=(0,c.s0)(),h=(0,o.useState)([]),p=(0,r.Z)(h,2),x=p[0],f=p[1],v=(0,o.useState)(""),g=(0,r.Z)(v,2),j=g[0],D=g[1],N=(0,o.useState)(null),y=(0,r.Z)(N,2),S=(y[0],y[1],(0,o.useState)("")),b=(0,r.Z)(S,2),k=(b[0],b[1]);(0,o.useEffect)((function(){i.Z.get("https://backendmaintenx.onrender.com/api/assets").then((function(e){var t=Array.from(new Set(e.data.map((function(e){return e.AssetName}))));f(t)})).catch((function(e){console.error("Error fetching asset names:",e)}))}),[]);var Z=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var n,l,r,o,c,i,d,u,h,p,x;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=a.AssetName,l=a.Location,r=a.ScheduledMaintenanceDatesandIntervals,o=a.pmScheduleDate,c=a.nextScheduleDate,i=a.TaskName,d=a.TaskDescription,u=a.status,h=void 0===u?"Pending":u,console.log("Asset Name:",n),console.log("Location:",l),console.log("Task Name:",i),console.log("status",h),console.log(a),D("Form submitted successfully!"),e.next=11,fetch("https://backendmaintenx.onrender.com/api/pm",{method:"POST",headers:{"Content-type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({AssetName:n,ScheduledMaintenanceDatesandIntervals:r,Location:l,TaskName:i,TaskDescription:d,startDate:o,nextDate:c,status:h})});case 11:return p=e.sent,m(-1),e.next=15,p.json();case 15:x=e.sent,console.log("Response from server:",x),setTimeout((function(){D("")}),5e3),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.error("Error:",e.t0);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}();var w=function(e,t){var a=new Date(e),n=function(){for(;0===a.getDay();)a.setDate(a.getDate()+1)},s=function(e){for(var t=0;t<e;)a.setDate(a.getDate()+1),0!==a.getDay()&&t++};switch(t.toLowerCase()){case"daily":a.setDate(a.getDate()+1),n();break;case"weekly":a.setDate(a.getDate()+7),n();break;case"fifteen days":s(15);break;case"monthly":a.setMonth(a.getMonth()+1),s(4),n();break;case"quarterly":a.setMonth(a.getMonth()+3),s(14),n();break;case"half year":a.setMonth(a.getMonth()+6),s(28),n();break;case"yearly":a.setFullYear(a.getFullYear()+1),s(52),n();break;default:throw new Error("Unsupported frequency")}return console.log("New Scheduled Date:",a),a};return(0,d.jsxs)("div",{className:"container-lg",style:{border:"2px solid #ccc",backgroundColor:"",padding:"20px",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",width:"90%"},children:[j&&(0,d.jsx)("div",{className:"alert alert-success",role:"alert",style:{marginTop:"10px"},children:j}),(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("form",{onSubmit:Z,style:{marginLeft:"%"},children:(0,d.jsxs)("div",{className:"row g-3",children:[(0,d.jsxs)("div",{className:"col-md-5",children:[(0,d.jsx)("label",{htmlFor:"assetName",children:"Asset Name:"}),(0,d.jsxs)("select",{required:!0,className:"form-control col-sm-6",id:"AssetName",onChange:function(e){var t=e.target.value;u((0,n.Z)((0,n.Z)({},a),{},{AssetName:t}))},style:{maxHeight:"50px",overflowY:"auto"},children:[(0,d.jsx)("option",{value:"",children:"Select an asset"}),x.map((function(e){return(0,d.jsx)("option",{value:e,children:e},e)}))]})]}),(0,d.jsxs)("div",{className:"col-md-5",children:[(0,d.jsx)("label",{htmlFor:"Location",children:"Location:"}),(0,d.jsxs)("select",{className:"form-control col-sm-6",required:!0,id:"Location",name:"Location",onChange:function(e){return u((0,n.Z)((0,n.Z)({},a),{},{Location:e.target.value}))},children:[(0,d.jsx)("option",{value:"",children:"Select an option"}),(0,d.jsx)("option",{value:"Plant 1",children:"Plant 1"}),(0,d.jsx)("option",{value:"Plant 2",children:"Plant 2"}),(0,d.jsx)("option",{value:"Plant 3",children:"Plant 3"}),(0,d.jsx)("option",{value:"Plant 4",children:"Plant 4"})]})]}),(0,d.jsxs)("div",{className:"col-md-5",children:[(0,d.jsx)("label",{htmlFor:"taskName",children:"Task Name:"}),(0,d.jsx)("input",{type:"text",required:!0,className:"form-control col-sm-6",id:"TaskName",onChange:function(e){return u((0,n.Z)((0,n.Z)({},a),{},{TaskName:e.target.value}))}})]}),(0,d.jsxs)("div",{className:"col-md-5",children:[(0,d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Task Description:"}),(0,d.jsx)("input",{className:"form-control col-sm-6",required:!0,id:"taskDescription",defaultValue:"",onChange:function(e){return u((0,n.Z)((0,n.Z)({},a),{},{TaskDescription:e.target.value}))}})]}),(0,d.jsxs)("div",{className:"col-md-5",children:[(0,d.jsx)("label",{htmlFor:"pmScheduleDate",children:"Start From :"}),(0,d.jsx)("input",{type:"date",required:!0,className:"form-control col-sm-6",id:"pmScheduleDate",onChange:function(e){return u((0,n.Z)((0,n.Z)({},a),{},{pmScheduleDate:e.target.value}))}})]}),(0,d.jsxs)("div",{className:"col-md-5",children:[(0,d.jsx)("label",{htmlFor:"scheduledMaintenance",children:"Scheduled Maintenance Dates and Intervals:"}),(0,d.jsxs)("select",{className:"form-control col-sm-6",required:!0,id:"scheduledMaintenance",name:"ScheduledMaintenanceDatesandIntervals",onChange:function(e){var t=e.target.value,s=a.pmScheduleDate,l=w(s,t);u((0,n.Z)((0,n.Z)({},a),{},{ScheduledMaintenanceDatesandIntervals:t,nextScheduleDate:l.toISOString().split("T")[0]}))},children:[(0,d.jsx)("option",{value:"",children:"Select an option"}),(0,d.jsx)("option",{value:"daily",children:"Daily"}),(0,d.jsx)("option",{value:"weekly",children:"Weekly"}),(0,d.jsx)("option",{value:"fifteen Days",children:"Fifteen Days"}),(0,d.jsx)("option",{value:"monthly",children:"Monthly"}),(0,d.jsx)("option",{value:"quarterly",children:"Quarterly"}),(0,d.jsx)("option",{value:"half Year",children:"Half Year"}),(0,d.jsx)("option",{value:"yearly",children:"Yearly"})]})]}),(0,d.jsxs)("div",{className:"col-md-5",children:[(0,d.jsx)("label",{htmlFor:"NextDateofMaintenance",children:"Next Date of Maintenance :"}),(0,d.jsx)("input",{type:"date",required:!0,className:"form-control col-sm-6",id:"nextScheduleDate",value:a.nextScheduleDate,readOnly:!0,onChange:function(e){return u((0,n.Z)((0,n.Z)({},a),{},{nextScheduleDate:e.target.value}))}})]}),(0,d.jsxs)("div",{className:"col-md-5",children:[(0,d.jsx)("label",{htmlFor:"attachment",children:"Attachment:"}),(0,d.jsx)("input",{type:"file",id:"Image",name:"Image",className:"form-control col-sm-6",onChange:function(e){console.log(e);var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=function(){console.log(t.result),k(t.result)},t.onerror=function(e){console.log(e)}}})]}),(0,d.jsx)("div",{className:"col-xs-12",children:(0,d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})})})]})}}}]);
//# sourceMappingURL=922.756d2910.chunk.js.map