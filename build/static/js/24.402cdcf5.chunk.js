"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[24,59],{70991:function(e,r,n){n.d(r,{YA:function(){return a},_y:function(){return s}});var t=n(76996).g.injectEndpoints({endpoints:function(e){return{login:e.mutation({query:function(e){return{url:"https://backendmaintenx.onrender.com/api/users".concat("/auth"),method:"POST",body:e}}}),logout:e.mutation({query:function(){return{url:"https://backendmaintenx.onrender.com/api/users".concat("/logout"),method:"POST"}}})}}}),a=t.useLoginMutation,s=t.useLogoutMutation},23024:function(e,r,n){n.r(r);var t=n(74165),a=n(1413),s=n(15861),i=n(29439),c=n(72791),l=n(57689),o=n(11087),u=n(78983),d=n(24846),h=n(99161),m=n(93647),x=n(95048),p=n(70991),f=n(71126),j=n(80184);r.default=function(){var e=(0,c.useState)(""),r=(0,i.Z)(e,2),n=r[0],v=r[1],g=(0,c.useState)(""),b=(0,i.Z)(g,2),y=b[0],w=b[1],Z=(0,l.s0)(),N=(0,x.I0)(),_=(0,p.YA)(),V=(0,i.Z)(_,2),k=V[0],L=(V[1].isLoading,(0,c.useState)(null)),S=(0,i.Z)(L,2),A=S[0],H=S[1],M=(0,x.v9)((function(e){return e.auth})).userInfo;(0,c.useEffect)((function(){M&&Z("/dashboard")}),[Z,M]);var C=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r){var s,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,k({email:n,password:y}).unwrap();case 4:s=e.sent,N((0,f.Dj)((0,a.Z)({},s))),Z("/dashboard"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log((null===e.t0||void 0===e.t0||null===(i=e.t0.data)||void 0===i?void 0:i.massage)||e.t0.error),H("Invalid email or password. Please try again.");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}();return(0,j.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,j.jsx)(u.KB,{children:(0,j.jsx)(u.rb,{className:"justify-content-center",children:(0,j.jsx)(u.b7,{md:8,children:(0,j.jsxs)(u.dL,{children:[(0,j.jsx)(u.xH,{className:"p-4",children:(0,j.jsx)(u.sl,{children:(0,j.jsxs)(u.lx,{onSubmit:C,children:[(0,j.jsx)("h1",{children:"Login"}),(0,j.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),A&&(0,j.jsx)("p",{className:"text-danger",children:A}),(0,j.jsxs)(u.YR,{className:"mb-3",children:[(0,j.jsx)(u.wV,{children:(0,j.jsx)(d.Z,{icon:h.E})}),(0,j.jsx)(u.jO,{type:"email",id:"email",placeholder:"Email",value:n,onChange:function(e){return v(e.target.value)},required:!0})]}),(0,j.jsxs)(u.YR,{className:"mb-4",children:[(0,j.jsx)(u.wV,{children:(0,j.jsx)(d.Z,{icon:m.U})}),(0,j.jsx)(u.jO,{type:"password",placeholder:"Password",id:"password",value:y,onChange:function(e){return w(e.target.value)},required:!0})]}),(0,j.jsxs)(u.rb,{children:[(0,j.jsx)(u.b7,{xs:6,children:(0,j.jsx)(u.u5,{type:"submit",color:"primary",className:"px-4",children:"Login"})}),(0,j.jsx)(u.b7,{xs:6,className:"text-right"})]})]})})}),(0,j.jsx)(u.xH,{className:"text-white bg-primary py-5",style:{width:"100%"},children:(0,j.jsx)(u.sl,{className:"text-center",children:(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:"Sign up"}),(0,j.jsx)(o.rU,{to:"/register",children:(0,j.jsx)(u.u5,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})]})})})})})}},93647:function(e,r,n){n.d(r,{U:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},99161:function(e,r,n){n.d(r,{E:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=24.402cdcf5.chunk.js.map