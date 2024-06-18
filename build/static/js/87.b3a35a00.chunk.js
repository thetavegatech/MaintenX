"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[87],{6708:function(e,t,r){r.r(t);var n=r(74165),a=r(15861),c=r(29439),s=r(72791),i=r(55294),o=r(11087),l=r(78983),d=r(16856),u=(r(8477),r(56355)),h=r(18512),x=(r(66338),r(80184));t.default=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],p=t[1],m=(0,s.useState)([]),f=(0,c.Z)(m,2),b=f[0],j=f[1],g=(0,s.useState)(""),y=(0,c.Z)(g,2),T=y[0],k=y[1],v=(0,s.useState)(""),D=(0,c.Z)(v,2),w=D[0],S=D[1],Z=(0,s.useState)(!0),_=(0,c.Z)(Z,2),C=_[0],L=_[1],N=(0,s.useState)(null),A=(0,c.Z)(N,2),E=A[0];A[1];(0,s.useEffect)((function(){i.Z.get("https://backendmaintenx.onrender.com/api/cbm").then((function(e){var t=Array.isArray(e.data)?e.data:[e.data];p(t),j(t),L(!1)})).catch((function(e){console.error("Error fetching data:",e),alert("Error fetching data"),L(!1)}))}),[]),(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,e.next=3,Promise.all(r.map(function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=new Date(r.nextCbmDate),!(t>=a)){e.next=24;break}c=1,e.t0=r.cbmFrequency.toLowerCase(),e.next="daily"===e.t0?6:"weekly"===e.t0?8:"fifteen days"===e.t0?10:"monthly"===e.t0?12:"quarterly"===e.t0?14:"half year"===e.t0?16:"yearly"===e.t0?18:20;break;case 6:return c=1,e.abrupt("break",21);case 8:return c=7,e.abrupt("break",21);case 10:return c=15,e.abrupt("break",21);case 12:return c=30,e.abrupt("break",21);case 14:return c=90,e.abrupt("break",21);case 16:return c=180,e.abrupt("break",21);case 18:return c=365,e.abrupt("break",21);case 20:c=1;case 21:a.setDate(a.getDate()+c),r.nextCbmDate=a.toISOString().split("T")[0],r.status="Pending";case 24:return e.abrupt("return",r);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return c=e.sent,p(c),j(c),e.prev=6,e.next=9,i.Z.put("https://backendmaintenx.onrender.com/api/cbmupdateRecords",{cbms:c});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),console.error("Error updating Next Date in the database:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(){return e.apply(this,arguments)}}();!function(){var t=new Date,r=new Date(t.getFullYear(),t.getMonth(),t.getDate(),14,31,0,0);t>=r&&r.setDate(r.getDate()+1),setTimeout((function(){e(),setInterval(e,864e5)}),r-t)}()}),[r]);return(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(o.OL,{to:"/cbmForm",children:(0,x.jsx)(l.u5,{className:"mb-2",style:{marginTop:"5px",backgroundColor:"#000026"},children:"Add New"})}),(0,x.jsx)("label",{htmlFor:"searchTask",style:{marginLeft:"70%"},children:(0,x.jsx)("span",{role:"img","aria-label":"search-icon"})}),(0,x.jsx)("input",{placeholder:"Search by Asset/Location",style:{marginBottom:"10px",padding:"8px",border:"1px solid ",borderRadius:"4px",transition:"border-color 0.3s ease-in-out, background-color 0.3s ease-in-out"},value:T,onChange:function(e){var t=e.target.value.toLowerCase(),n=r.filter((function(e){var r=(e.location||"").toLowerCase(),n=(e.assetName||"").toLowerCase();return r.includes(t)||n.includes(t)}));j(n),k(t)}}),(0,x.jsxs)("div",{className:"table-container",children:[(0,x.jsxs)(h.iA,{className:"custom-table",children:[(0,x.jsx)(h.hr,{children:(0,x.jsxs)(h.Tr,{children:[(0,x.jsx)(h.Th,{children:"Sr No"}),(0,x.jsx)(h.Th,{children:"Asset Name"}),(0,x.jsx)(h.Th,{children:"Location"}),(0,x.jsx)(h.Th,{children:"CBM Schedule Date"}),(0,x.jsx)(h.Th,{}),(0,x.jsx)(h.Th,{children:"CBM Frequency"}),(0,x.jsx)(h.Th,{children:"Next CBM"}),(0,x.jsx)(h.Th,{children:"Status"}),(0,x.jsx)(h.Th,{children:"Edit"}),(0,x.jsx)(h.Th,{children:"Delete"})]})}),(0,x.jsx)(h.p3,{children:C?(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"12",style:{textAlign:"center"},children:(0,x.jsx)("p",{children:"Loading..."})})}):(0,x.jsxs)(x.Fragment,{children:[w&&(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"12",style:{textAlign:"center",fontStyle:"italic",color:"red"},children:w})}),b.map((function(e,t){return(0,x.jsxs)(h.Tr,{children:[(0,x.jsx)(h.Td,{children:t+1}),(0,x.jsx)(h.Td,{children:e.assetName}),(0,x.jsx)(h.Td,{children:e.location}),(0,x.jsx)(h.Td,{children:new Date(e.cbmScheduleDate).toLocaleDateString()}),(0,x.jsx)(h.Td,{}),(0,x.jsx)(h.Td,{children:e.cbmFrequency}),(0,x.jsx)(h.Td,{children:new Date(e.nextCbmDate).toLocaleDateString()}),(0,x.jsx)(h.Td,{children:e.status}),(0,x.jsx)(h.Td,{children:(0,x.jsx)(o.OL,{to:"/editcbm/".concat(e._id),style:{color:"#000080"},children:(0,x.jsx)(u.fmQ,{})})}),(0,x.jsx)(h.Td,{children:(0,x.jsx)("button",{className:"btn",onClick:function(){return t=e._id,void(window.confirm("Are you sure you want to delete this data?")&&i.Z.delete("https://backendmaintenx.onrender.com/api/cbm/".concat(t)).then((function(e){var n=r.filter((function(e){return e._id!==t}));p(n),j(n),S("Data successfully deleted!"),setTimeout((function(){S("")}),2e3)})).catch((function(e){console.error("Error deleting data:",e),S("Error deleting data. Please try again."),setTimeout((function(){S("")}),2e3)})));var t},style:{color:"red"},children:(0,x.jsx)(d.ZkW,{})})})]},e._id)}))]})})]}),(0,x.jsx)("div",{children:E&&(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Scanned Data:"}),(0,x.jsx)("p",{children:E})]})})]})]})}},8477:function(){}}]);
//# sourceMappingURL=87.b3a35a00.chunk.js.map