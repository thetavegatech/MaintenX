"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[374],{16374:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var n=t(4942),r=t(93433),l=t(74165),s=t(15861),o=t(29439),i=t(72791),c=t(24846),d=t(57689),m=t(55294),u=t(78983),h=t(98030),p=t(80184);function x(){var e=(0,d.UO)().id,a=(0,d.s0)(),t=(0,i.useState)(""),x=(0,o.Z)(t,2),v=x[0],j=x[1],f=(0,i.useState)(""),y=(0,o.Z)(f,2),g=y[0],b=y[1],N=(0,i.useState)(""),S=(0,o.Z)(N,2),k=S[0],w=S[1],Z=(0,i.useState)(""),C=(0,o.Z)(Z,2),B=C[0],F=C[1],T=(0,i.useState)(""),D=(0,o.Z)(T,2),E=D[0],R=D[1],W=(0,i.useState)(""),A=(0,o.Z)(W,2),L=A[0],_=A[1],q=(0,i.useState)(""),P=(0,o.Z)(q,2),M=P[0],O=P[1],H=(0,i.useState)(""),I=(0,o.Z)(H,2),U=I[0],z=I[1],G=(0,i.useState)(""),J=(0,o.Z)(G,2),K=J[0],Q=J[1],V=(0,i.useState)(""),X=(0,o.Z)(V,2),Y=X[0],$=X[1],ee=(0,i.useState)(""),ae=(0,o.Z)(ee,2),te=ae[0],ne=(ae[1],(0,i.useState)("")),re=(0,o.Z)(ne,2),le=re[0],se=(re[1],(0,i.useState)("")),oe=(0,o.Z)(se,2),ie=oe[0],ce=oe[1],de=(0,i.useState)(""),me=(0,o.Z)(de,2),ue=me[0],he=me[1],pe=(0,i.useState)(""),xe=(0,o.Z)(pe,2),ve=xe[0],je=xe[1],fe=(0,i.useState)(""),ye=(0,o.Z)(fe,2),ge=ye[0],be=ye[1],Ne=(0,i.useState)(""),Se=(0,o.Z)(Ne,2),ke=Se[0],we=Se[1],Ze=(0,i.useState)(""),Ce=(0,o.Z)(Ze,2),Be=Ce[0],Fe=Ce[1],Te=(0,i.useState)(""),De=(0,o.Z)(Te,2),Ee=De[0],Re=De[1],We=(0,i.useState)(""),Ae=(0,o.Z)(We,2),Le=(Ae[0],Ae[1]),_e=(0,i.useState)(""),qe=(0,o.Z)(_e,2),Pe=qe[0],Me=qe[1],Oe=(0,i.useState)(""),He=(0,o.Z)(Oe,2),Ie=He[0],Ue=He[1],ze=(0,i.useState)(""),Ge=(0,o.Z)(ze,2),Je=Ge[0],Ke=Ge[1],Qe=(0,i.useState)(""),Ve=(0,o.Z)(Qe,2),Xe=Ve[0],Ye=Ve[1],$e=(0,i.useState)([]),ea=(0,o.Z)($e,2),aa=ea[0],ta=ea[1],na=(0,i.useState)({}),ra=(0,o.Z)(na,2),la=(ra[0],ra[1]),sa=(0,i.useState)(""),oa=(0,o.Z)(sa,2),ia=oa[0],ca=oa[1];(0,i.useEffect)((function(){da()}),[]);var da=function(){var a=(0,s.Z)((0,l.Z)().mark((function a(){var t;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.Z.get("https://backendmaintenx.onrender.com/api/breakdown/".concat(e));case 3:t=a.sent,console.log(t),j(t.data.MachineName),b(t.data.BreakdownStartDate),F(t.data.BreakdownStartTime),w(t.data.BreakdownEndDate),R(t.data.BreakdownEndTime),_(t.data.Shift),O(t.data.LineName),z(t.data.Operations),Q(t.data.BreakdownPhenomenons),Le(t.data.Status),Me(t.data.Location),Ue(t.data.SpareParts),Ke(t.data.Cost),a.next=23;break;case 20:a.prev=20,a.t0=a.catch(0),console.error("Error fetching data:",a.t0);case 23:case"end":return a.stop()}}),a,null,[[0,20]])})));return function(){return a.apply(this,arguments)}}(),ma=(0,i.useState)(""),ua=(0,o.Z)(ma,2),ha=ua[0],pa=ua[1];var xa=(0,i.useState)([]),va=(0,o.Z)(xa,2),ja=(va[0],va[1],(0,i.useState)(null)),fa=(0,o.Z)(ja,2),ya=fa[0];fa[1];return console.log(aa),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:"container",style:{border:"2px solid #ccc",backgroundColor:"",padding:"20px",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",width:"95%"},children:[ia&&(0,p.jsx)("div",{className:"alert alert-success",role:"alert",style:{marginTop:"10px"},children:ia}),(0,p.jsx)("form",{method:"post",onSubmit:function(t){t.preventDefault();var r=new FormData;r.append("attachment",ya);var l=aa.join(",");la({WhyWhyAnalysis:l}),r.append("MachineName",v),r.append("BreakdownStartDate",g),r.append("attachment",ya),m.Z.put("https://backendmaintenx.onrender.com/api/breakdown/".concat(e),(0,n.Z)({MachineName:v,BreakdownStartDate:g,BreakdownEndDate:k,BreakdownStartTime:B,BreakdownEndTime:E,Shift:L,LineName:M,Operations:U,BreakdownPhenomenons:K,BreakdownType:Y,DetectOCC:te,ActionTaken:le,WhyWhyAnalysis:l,whyWhyAnalysisList:l,RootCause:ie,PreventiveAction:ue,CorrectiveAction:ve,TargetDate:ge,Responsibility:ke,HD:Be,Remark:Ee,Status:"pending",attachment:ya,Location:Pe,Image:ha,SpareParts:Ie,Cost:Je},"whyWhyAnalysisList",aa)).then((function(e){ca("Form submitted successfully!"),console.log(r),j(""),b(""),w(""),F(""),R(""),_(""),O(""),z(""),Q(""),Le("pending"),Me(""),pa(""),he(""),je(""),Ke(""),Ue(""),Ye([]),ta([]),console.log("Form submitted!"),console.log("whyWhyAnalysisList:",aa),ca("Form submitted successfully!"),setTimeout((function(){ca(""),a(-1)}),5e3)})).catch((function(e){return console.log(e)}))},children:(0,p.jsxs)("div",{className:"row g-2",children:[(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"machineName",children:"Machine Name:"}),(0,p.jsx)("input",{type:"text",className:"form-control col-sm-6",name:"MachineName",value:v,disabled:!0,onChange:function(e){return j(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"breakdownStartDate",children:"Breakdown Start Date:"}),(0,p.jsx)("input",{type:"date",className:"form-control col-sm-6",name:"BreakdownDate",value:g,disabled:!0,onChange:function(e){return b(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"location",children:"Location:"}),(0,p.jsx)("input",{type:"text",className:"form-control col-sm-6",name:"Location",value:Pe,disabled:!0,onChange:function(e){return Me(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"shift",children:"Shift:"}),(0,p.jsx)("input",{type:"text",className:"form-control col-sm-6",name:"Shift",value:L,disabled:!0,onChange:function(e){return _(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"lineName",children:"Line Name:"}),(0,p.jsx)("input",{type:"text",name:"LineName",className:"form-control col-sm-6",value:M,disabled:!0,onChange:function(e){return O(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"operations",children:"Operations:"}),(0,p.jsx)("input",{type:"text",className:"form-control col-sm-6",name:"Operations",value:U,disabled:!0,onChange:function(e){return z(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"breakdownPhenomen",children:"Breakdown Phenomenon:"}),(0,p.jsx)("input",{type:"text",name:"BreakdownPhenomenons",className:"form-control col-sm-6",value:K,disabled:!0,onChange:function(e){return Q(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"breakdownStartTime",children:"Breakdown Start Time:"}),(0,p.jsx)("input",{type:"text",disabled:!0,className:"form-control col-sm-6",name:"BreakdownTime",value:B,onChange:function(e){return F(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"breakdownType",children:"Breakdown Type:"}),(0,p.jsxs)("select",{className:"form-control col-sm-6",required:!0,id:"BreakdownType",name:"BreakdownType",value:Y,onChange:function(e){return $(e.target.value)},children:[(0,p.jsx)("option",{value:"",children:"Select an option"}),(0,p.jsx)("option",{value:"Mechanical",children:"Mechanical"}),(0,p.jsx)("option",{value:"Electrical",children:"Electrical"}),(0,p.jsx)("option",{value:"Electronic",children:"Electronic"}),(0,p.jsx)("option",{value:"Hydrolic",children:"Hydrolic"}),(0,p.jsx)("option",{value:"Neumatic",children:"Neumatic"}),(0,p.jsx)("option",{value:"Production Setting",children:"Production Setting"})]})]}),(0,p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,p.jsxs)("div",{className:"col-md-5",style:{marginRight:"10px"},children:[(0,p.jsx)("label",{htmlFor:"whyWhy",children:"Why-Why Analysis:"}),(0,p.jsx)("textarea",{style:{display:""},type:"text",className:"form-control col-sm-5",name:"WhyWhyAnalysis",value:Xe,onChange:function(e){Ye(e.target.value)}})]}),(0,p.jsx)("div",{style:{display:"",marginRight:"15px",marginTop:"10px"},children:(0,p.jsx)(u.u5,{children:(0,p.jsx)(c.Z,{icon:h.q,className:"ml-2",onClick:function(){ta([].concat((0,r.Z)(aa),[Xe])),Ye("")}})})}),(0,p.jsxs)("div",{style:{display:""},children:[(0,p.jsx)("h6",{children:"Add:"}),(0,p.jsx)("ul",{children:aa.map((function(e,a){return(0,p.jsx)("li",{children:"WhyWhy".concat(a+1,": ").concat(e)},a)}))})]})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"rootCause",children:"Root Cause:"}),(0,p.jsx)("input",{type:"text",required:!0,className:"form-control col-sm-6",name:"RootCause",value:ie,onChange:function(e){return ce(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"targetDate",children:"Target Date:"}),(0,p.jsx)("input",{type:"date",required:!0,className:"form-control col-sm-6",name:"TargetDate",value:ge,onChange:function(e){return be(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"responsibility",children:"Responsibility:"}),(0,p.jsx)("input",{type:"text",required:!0,className:"form-control col-sm-6",name:"Responsibility",value:ke,onChange:function(e){return we(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"hd",children:"HD:"}),(0,p.jsx)("input",{type:"text",required:!0,name:"HD",className:"form-control col-sm-6",value:Be,onChange:function(e){return Fe(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"remark",children:"Remark:"}),(0,p.jsx)("input",{type:"text",required:!0,className:"form-control col-sm-6",name:"Remark",value:Ee,onChange:function(e){return Re(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"BreakdownEndDate",children:"BreakdownEndDate:"}),(0,p.jsx)("input",{type:"date",required:!0,className:"form-control col-sm-6",name:"BreakdownEndDate",value:k,onChange:function(e){return w(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"BreakdownEndTime",children:"BreakdownEndTime:"}),(0,p.jsx)("input",{type:"time",required:!0,className:"form-control col-sm-6",name:"BreakdownEndTime",value:E,onChange:function(e){return R(e.target.value)}})]}),(0,p.jsxs)("div",{className:"col-md-6",children:[(0,p.jsx)("label",{htmlFor:"attachment",children:"Attachment:"}),(0,p.jsx)("input",{type:"file",className:"form-control col-sm-6",onChange:function(e){console.log(e);var a=new FileReader;a.readAsDataURL(e.target.files[0]),a.onload=function(){console.log(a.result),pa(a.result)},a.onerror=function(e){console.log(e)}}})]}),(0,p.jsx)("div",{style:{marginTop:"20px"},children:(0,p.jsx)("button",{className:"btn btn-primary",style:{width:"20%",marginBottom:"10px"},type:"submit",children:"Save"})})]})})]})})})}},98030:function(e,a,t){t.d(a,{q:function(){return n}});var n=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"]}}]);
//# sourceMappingURL=374.98177caf.chunk.js.map