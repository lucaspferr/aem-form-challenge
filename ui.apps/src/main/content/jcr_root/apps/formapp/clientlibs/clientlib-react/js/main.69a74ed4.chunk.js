(this.webpackJsonpformapp=this.webpackJsonpformapp||[]).push([[0],{292:function(e,t,n){var a={".":60,"./":60,"./index":60,"./index.js":60};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=292},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);n(149),n(222),n(272);var a=n(33),i=n(21),s=n(1),r=n.n(s),c=n(141),o=n(14),l=n(7),d=n(0);class b extends l.Page{render(){return Object(d.jsxs)("div",{children:[this.childComponents,this.childPages]})}}var p=Object(l.withModel)(b);a.ModelClient;var h=n(99),m=n.n(h);const j=()=>Object(d.jsx)("div",{children:"Error loading chunks!"}),f=(x=e=>Object(d.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:e.skeletonHeight?e.skeletonHeight:"50px"}}),u={skeletonHeight:1e3},function(e){return Object(d.jsx)(x,{...u,...e})});var x,u;var g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return m()(e,{loading:t,error:j})};n(297);class O extends l.Page{get containerProps(){let e=super.containerProps;return e.className=(e.className||"")+" page "+(this.props.cssClassNames||""),e}}var y,w;Object(l.MapTo)("formapp/components/page")(Object(l.withComponentMappingContext)((y=O,class extends s.Component{render(){let e=this.props.cqPath;return e?(w=w||"html",Object(d.jsx)(o.d,{exact:!0,path:"(.*)"+e+"(."+w+")?",render:e=>Object(d.jsx)(y,{...this.props,...e})},e)):Object(d.jsx)(y,{...this.props})}})));Object(l.MapTo)("formapp/components/container")(Object(l.withComponentMappingContext)(l.AllowedComponentsContainer),{emptyLabel:"Container",isEmpty:function(e){return!e||!e.cqItemsOrder||0===e.cqItemsOrder.length}});Object(l.MapTo)("formapp/components/experiencefragment")(Object(l.withComponentMappingContext)(l.Container),{emptyLabel:"Experience Fragment",isEmpty:function(e){return!e||!e.configured}});var v,N,L,T=n(2),C=n(3);const k=C.a.h1(v||(v=Object(T.a)(['\n  font-family: "Inter", sans-serif;\n  font-size: 18px;\n  color: #111111;\n  margin: 0;\n  padding: 0 0 0 10px;\n  height: 5%;\n  width: 100%;\n']))),E=C.a.div(N||(N=Object(T.a)(["\n  display: flex;\n  background-color: white;\n  border-radius: 16px;\n  margin: 5vh auto;\n  width: 660px;\n  height: 85vh;\n  @media (max-width: 768px) {\n    width: 90vw;\n  }\n  @media (min-height: 2000px) {\n    height: 1080px;\n    margin: 60px auto;\n  }\n"]))),I=C.a.div(L||(L=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  height: 80vh;\n  margin: 2.5vh auto;\n  @media (min-height: 2000px) {\n    height: 1000px;\n    margin: 40px auto;\n  }\n"])));var S,M,B,F;const P=C.a.ul(S||(S=Object(T.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  list-style: none;\n  width: 100%;\n  height: 20%;\n  padding: 0;\n  margin: 0;\n"]))),D=C.a.li(M||(M=Object(T.a)(["\n  width: 100%;\n"]))),V=C.a.button(B||(B=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  width: 100%;\n  border: none;\n  background: transparent;\n  font-size: 16px;\n  box-shadow: inset 0px -2px 0px #aaaaaa;\n  color: #111111;\n']))),z=C.a.button(F||(F=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  width: 100%;\n  border: none;\n  background: transparent;\n  font-size: 16px;\n  box-shadow: inset 0px -3px 0px #074ee8;\n  color: #074ee8;\n'])));var A,_,R,q,G=e=>{let t=0===e.currentStep?Object(d.jsx)(z,{id:"basic-button",children:e.navNames.firstTabName}):Object(d.jsx)(V,{id:"basic-button",children:e.navNames.firstTabName}),n=1===e.currentStep?Object(d.jsx)(z,{id:"social-button",children:e.navNames.secondTabName}):Object(d.jsx)(V,{id:"social-button",children:e.navNames.secondTabName}),a=2===e.currentStep?Object(d.jsx)(z,{id:"certificates-button",children:e.navNames.thirdTabName}):Object(d.jsx)(V,{id:"certificates-button",children:e.navNames.thirdTabName});return Object(d.jsxs)(P,{onClick:function(t){"basic-button"===t.target.id?e.userData.basic.fName&&e.setCurrentStep(0):"social-button"===t.target.id?e.userData.social.github&&(console.log(e.userData.social),e.setCurrentStep(1)):"certificates-button"===t.target.id&&e.userData.certificates&&e.setCurrentStep(2)},children:[Object(d.jsx)(D,{children:t}),Object(d.jsx)(D,{children:n}),Object(d.jsx)(D,{children:a})]})};const H=C.a.button(A||(A=Object(T.a)(["\n  background: #074ee8;\n  border: none;\n  border-radius: 4px;\n  justify-content: center;\n  align-items: center;\n  width: 65px;\n  height: 30px;\n"]))),Y=C.a.img(_||(_=Object(T.a)(["\n  height: 18px;\n  width: 18px;\n"]))),U=C.a.div(R||(R=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),J=C.a.span(q||(q=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  font-size: 14px;\n  color: #fff;\n  margin-left: 2px;\n'])));var X,K,Q,W,Z,$=e=>Object(d.jsx)(H,{type:e.type,style:e.bStyle,children:Object(d.jsxs)(U,{style:e.wStyle,children:[Object(d.jsx)(J,{children:e.bName}),Object(d.jsx)(Y,{src:e.icon})]})});const ee=C.a.div(X||(X=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n"]))),te=C.a.input(K||(K=Object(T.a)(["\n  height: 20px;\n  background: transparent;\n  border: 2px solid #aaaaaa;\n  color: #767676;\n  font-size: 14px;\n  border-radius: 4px;\n  padding-left: 5px;\n  &:focus {\n    outline: none;\n  }\n"]))),ne=C.a.div(Q||(Q=Object(T.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: start;\n  align-items: center;\n  height: 20px;\n"]))),ae=C.a.p(W||(W=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  font-size: 12px;\n  margin: 0;\n  color: #ff0000;\n  padding-bottom: 4px;\n  padding-left: 10px;\n']))),ie=C.a.label(Z||(Z=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  font-size: 12px;\n  padding-bottom: 4px;\n  color: #767676;\n'])));var se,re,ce,oe,le,de,be,pe,he,me,je,fe,xe=e=>{const t={width:e.width},[n,a]=r.a.useState("");return Object(s.useEffect)((()=>{e.errorMessage?a("Please enter your "+e.label.replace("*","")):a("")}),[e.errorMessage,e.label]),Object(d.jsxs)(ee,{style:t,children:[Object(d.jsxs)(ne,{children:[Object(d.jsx)(ie,{children:e.label}),Object(d.jsx)(ae,{children:n})]}),Object(d.jsx)(te,{id:e.id})]})};const ue=C.a.div(se||(se=Object(T.a)(["\n  display: flex;\n  background-color: white;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),ge=C.a.form(re||(re=Object(T.a)(["\n  display: flex;\n  width: 100%;\n  height: 68%;\n  margin: 0;\n  padding: 0;\n"]))),Oe=C.a.div(ce||(ce=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  height: 50%;\n"]))),ye=C.a.div(oe||(oe=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 20%;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    height: 30%;\n  }\n"]))),we=C.a.div(le||(le=Object(T.a)(["\n  display: flex;\n  width: 100%;\n  height: 15%;\n  align-items: center;\n  @media (max-width: 768px) {\n    height: 10%;\n  }\n"]))),ve=C.a.div(de||(de=Object(T.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: end;\n  width: 100%;\n  height: 15%;\n  @media (max-width: 768px) {\n    height: 10%;\n  }\n"]))),Ne=C.a.div(be||(be=Object(T.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: start;\n  align-items: center;\n  height: 20px;\n"]))),Le=C.a.p(pe||(pe=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  font-size: 16px;\n  color: #767676;\n  margin: 0;\n  padding: 0;\n']))),Te=C.a.p(he||(he=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  font-size: 12px;\n  color: #ff0000;\n  margin: 0;\n  padding: 0;\n  padding-left: 10px;\n']))),Ce=C.a.input(me||(me=Object(T.a)(["\n  &:focus {\n    outline: none;\n  }\n"]))),ke=C.a.p(je||(je=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  font-size: 14px;\n  color: #111111;\n']))),Ee=C.a.p(fe||(fe=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  font-size: 12px;\n  color: #ff0000;\n  padding-left: 10px;\n'])));var Ie,Se,Me,Be,Fe=n.p+"static/media/chevron-right.bf67d07f.svg";const Pe=C.a.div(Ie||(Ie=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  @media (max-width: 768px) {\n    width: 40%;\n  }\n"]))),De=C.a.select(Se||(Se=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  height: 24px;\n  background: transparent;\n  border: 2px solid #aaaaaa;\n  color: #767676;\n  font-size: 12px;\n  border-radius: 4px;\n  padding: 1px 2px 1px 5px;\n  &:focus {\n    outline: none;\n  }\n']))),Ve=C.a.input(Me||(Me=Object(T.a)(["\n  height: 18px;\n  background: transparent;\n  border: 2px solid #aaaaaa;\n  color: #767676;\n  font-size: 14px;\n  border-radius: 4px;\n  padding-left: 5px;\n  &:focus {\n    outline: none;\n  }\n"]))),ze=C.a.label(Be||(Be=Object(T.a)(['\n  font-family: "Nunito", sans-serif;\n  font-size: 12px;\n  padding-bottom: 3px;\n  color: #767676;\n'])));var Ae=e=>{const t=(new Date).getFullYear()-115,[n,a]=r.a.useState(0),[i,s]=r.a.useState({day:1,month:1,year:t}),c=t=>{let n={...i,[t.target.id]:t.target.value};s(n);let r=(new Date).getFullYear()-n.year;(new Date).getMonth()<n.month-1&&r--,n.month-1===(new Date).getMonth()&&(new Date).getDate()<n.day&&r--,a(r),e.setBasicInfo({age:r})};return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsxs)(Pe,{children:[Object(d.jsx)(ze,{children:e.birthdayNames.dayLabel}),Object(d.jsx)(De,{id:"day",onChange:c,children:[...Array(31)].map(((e,t)=>Object(d.jsx)("option",{value:t+1,children:t+1},"day"+t)))})]}),Object(d.jsxs)(Pe,{children:[Object(d.jsx)(ze,{children:e.birthdayNames.monthLabel}),Object(d.jsx)(De,{id:"month",onChange:c,children:[...Array(12)].map(((e,t)=>Object(d.jsx)("option",{value:t+1,children:t+1},"month"+t)))})]}),Object(d.jsxs)(Pe,{children:[Object(d.jsx)(ze,{children:e.birthdayNames.yearLabel}),Object(d.jsx)(De,{id:"year",onChange:c,children:[...Array(115)].map(((e,n)=>Object(d.jsx)("option",{value:n+t+1,children:n+t+1},"year"+(n+t))))})]}),Object(d.jsxs)(Pe,{children:[Object(d.jsx)(ze,{children:e.birthdayNames.ageLabel}),Object(d.jsx)(Ve,{disabled:!0,value:n||"",id:"age"})]})]})};var _e,Re,qe,Ge,He,Ye=e=>{const t={dayLabel:e.basicTabNames.dayLabel,monthLabel:e.basicTabNames.monthLabel,yearLabel:e.basicTabNames.yearLabel,ageLabel:e.basicTabNames.ageLabel},n="Please enter your",a="You must accept the terms",[i,s]=r.a.useState({fullNameError:!1,emailError:!1});return Object(d.jsx)(ge,{onSubmit:function(t){t.preventDefault();let n={fullNameError:!1,emailError:!1,birthdayError:!1,checkError:!1};t.target.elements.fName.value&&t.target.elements.email.value&&t.target.elements.termsCheck.checked?(e.setBasicInfo({...e.basicInfo,fName:t.target.elements.fName.value,nName:t.target.elements.nName.value,email:t.target.elements.email.value,phone:t.target.elements.phone.value,birthday:t.target.elements.day.value+"/"+t.target.elements.month.value+"/"+t.target.elements.year.value}),e.setCurrentStep(1)):(t.target.elements.fName.value?n.fullNameError=!1:n.fullNameError=!0,t.target.elements.email.value?n.emailError=!1:n.emailError=!0,t.target.elements.termsCheck.checked?n.checkError=!1:n.checkError=!0,t.target.elements.age.value?n.birthdayError=!1:n.birthdayError=!0,s(n))},id:"basicForm",children:Object(d.jsxs)(ue,{children:[Object(d.jsxs)(Oe,{children:[Object(d.jsx)(xe,{width:"100%",label:e.basicTabNames.fullNameLabel+" *",id:"fName",errorMessage:i.fullNameError}),Object(d.jsx)(xe,{width:"100%",label:e.basicTabNames.nickNameLabel,id:"nName"}),Object(d.jsx)(xe,{width:"60%",label:e.basicTabNames.emailLabel+" *",id:"email",errorMessage:i.emailError}),Object(d.jsx)(xe,{width:"30%",label:e.basicTabNames.phoneLabel,id:"phone"})]}),Object(d.jsxs)(ye,{children:[Object(d.jsxs)(Ne,{children:[Object(d.jsx)(Le,{children:e.basicTabNames.birthdayLabel+" *"}),Object(d.jsx)(Te,{children:i.birthdayError?n+e.basicTabNames.ageLabel:""})]}),Object(d.jsx)(Ae,{setBasicInfo:e.setBasicInfo,birthdayNames:t})]}),Object(d.jsxs)(we,{children:[Object(d.jsx)(Ce,{type:"checkbox",id:"termsCheck"}),Object(d.jsx)(ke,{children:e.basicTabNames.termsLabel}),Object(d.jsx)(Ee,{children:i.checkError?a:""})]}),Object(d.jsx)(ve,{children:Object(d.jsx)($,{icon:Fe,type:"submit",bName:e.basicTabNames.nextButtonText})})]})})};const Ue=C.a.div(_e||(_e=Object(T.a)(["\n  display: flex;\n  background-color: white;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),Je=C.a.form(Re||(Re=Object(T.a)(["\n  display: flex;\n  width: 100%;\n  height: 68%;\n  margin: 0;\n  padding: 0;\n"]))),Xe=C.a.div(qe||(qe=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  width: 100%;\n  height: 85%;\n"]))),Ke=C.a.div(Ge||(Ge=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 100%;\n  height: 50%;\n"]))),Qe=C.a.div(He||(He=Object(T.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: end;\n  width: 100%;\n  height: 15%;\n"])));var We,Ze,$e,et,tt,nt,at,it,st,rt,ct,ot,lt=e=>Object(d.jsx)(Je,{id:"socialForm",onSubmit:function(t){t.target.elements.github.value?e.setSocialInfo({linkedin:t.target.elements.linkedin.value,github:t.target.elements.github.value}):alert("Please enter your Github"),e.setCurrentStep(2)},children:Object(d.jsxs)(Ue,{children:[Object(d.jsx)(Xe,{children:Object(d.jsxs)(Ke,{children:[Object(d.jsx)(xe,{width:"100%",label:"Linkedin",id:"linkedin"}),Object(d.jsx)(xe,{width:"100%",label:"Github *",id:"github"})]})}),Object(d.jsx)(Qe,{children:Object(d.jsx)($,{icon:Fe,type:"submit"})})]})});const dt=C.a.form(We||(We=Object(T.a)(["\n  width: 100%;\n"]))),bt=C.a.div(Ze||(Ze=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 17vh;\n  width: 100%;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),pt=C.a.div($e||($e=Object(T.a)(['\n  display: flex;\n  height: 5vh;\n  justify-content: flex-end;\n  div {\n    width: 50%;\n    P {\n      font-family: "Nunito", sans-serif;\n      font-size: 9px;\n      color: #ff0000;\n      margin: 0;\n      padding: 0;\n      text-align: end;\n    }\n  }\n']))),ht=C.a.div(et||(et=Object(T.a)(["\n  width: 50%;\n  margin: 10px 0 0 0;\n"]))),mt=C.a.button(tt||(tt=Object(T.a)(["\n  display: flex;\n  width: 140px;\n  height: 30px;\n  border-radius: 4px;\n  border: none;\n  background-color: #074ee8;\n  justify-content: center;\n  align-items: center;\n"]))),jt=C.a.p(nt||(nt=Object(T.a)(["\n  display: flex;\n  margin: 0 10px 0 0;\n  padding: 0;\n  font-size: 12px;\n  color: white;\n"]))),ft=C.a.p(at||(at=Object(T.a)(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  color: white;\n"]))),xt=C.a.img(it||(it=Object(T.a)(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n"]))),ut=C.a.button(st||(st=Object(T.a)(["\n  display: flex;\n  width: 80px;\n  height: 30px;\n  border-radius: 4px;\n  border: none;\n  background-color: #074ee8;\n  justify-content: space-around;\n  align-items: center;\n"]))),gt=C.a.ul(rt||(rt=Object(T.a)(["\n  display: block;\n  position: fixed;\n  list-style-type: none;\n  margin: -6px 0 0 0;\n  padding: 6px 0 3px 0;\n  width: 140px;\n  border-radius: 4px;\n\n  background: rgba(7, 78, 232, 0.8);\n  li {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    color: white;\n    font-weight: normal;\n  }\n"]))),Ot=C.a.button(ct||(ct=Object(T.a)(["\n  border: none;\n  background: transparent;\n  color: white;\n  font-size: 10px;\n"]))),yt=C.a.p(ot||(ot=Object(T.a)(["\n  color: white;\n  font-size: 10px;\n  font-weight: normal;\n  margin: 0;\n  padding: 2px 0 0 6px;\n  width: 110px;\n  height: 14px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])));var wt=n.p+"static/media/arrow-down.ec543b51.svg",vt=n.p+"static/media/plus.dff04c6c.svg";var Nt,Lt,Tt,Ct,kt,Et=e=>{const[t,n]=r.a.useState(!1),[a,i]=r.a.useState("");function s(t){t.preventDefault(),console.log(t.target.id);let n=e.certificatesList.filter((n=>n!==e.certificatesList.at(t.target.id)));e.setCertificatesInfo({certificates:n})}function c(t){t.preventDefault();let n=t.target.elements.certificate.value;!n||n.indexOf(" ")>=0?i(o.empty):5===e.certificatesList.length?i(o.moreThanFive):e.certificatesList.includes(n)?i(o.duplicate):(e.setCertificatesInfo({certificates:[...e.certificatesList,n]}),i(""))}const o={empty:function(){return Object(d.jsx)("p",{children:"Empty certificate is not allowed"})},moreThanFive:function(){return Object(d.jsxs)("p",{children:["Sorry, only 5 certificates are allowed.",Object(d.jsx)("br",{})," You can remove one certificate instead"]})},duplicate:function(){return Object(d.jsx)("p",{children:"This certificate is already in the list"})}};return Object(d.jsxs)(dt,{onSubmit:c,children:[Object(d.jsxs)(bt,{children:[Object(d.jsx)(xe,{width:"100%",label:"Certificates",id:"certificate",onChange:c}),Object(d.jsxs)(ht,{children:[Object(d.jsxs)(mt,{onClick:()=>n(!t),type:"button",children:[Object(d.jsx)(jt,{children:"Certificates"}),Object(d.jsx)(xt,{src:wt,alt:"arrow-down"})]}),t&&Object(d.jsx)(gt,{children:e.certificatesList.map(((e,t)=>Object(d.jsxs)("li",{children:[Object(d.jsx)(yt,{children:e}),Object(d.jsx)(Ot,{onClick:s,id:t,children:"X"})]},t)))})]}),Object(d.jsxs)(ut,{type:"submit",children:[Object(d.jsx)(xt,{src:vt,alt:"plus",style:{height:"14px"}}),Object(d.jsx)(ft,{children:"More"}),Object(d.jsx)(xt,{src:Fe,alt:"arrow-right",style:{height:"18px"}})]})]}),Object(d.jsx)(pt,{children:Object(d.jsx)("div",{children:a})})]})};const It=C.a.div(Nt||(Nt=Object(T.a)(["\n  display: flex;\n  background-color: white;\n  flex-direction: column;\n  width: 100%;\n  height: 68%;\n"]))),St=C.a.div(Lt||(Lt=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  height: 40%;\n"]))),Mt=C.a.form(Tt||(Tt=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 60%;\n  margin: 0;\n  padding: 0;\n"]))),Bt=C.a.div(Ct||(Ct=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 77.5%;\n  justify-content: space-between;\n"]))),Ft=C.a.div(kt||(kt=Object(T.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: end;\n  width: 100%;\n  height: 22.5%;\n"])));var Pt,Dt,Vt,zt,At,_t,Rt,qt=e=>Object(d.jsxs)(It,{children:[Object(d.jsx)(St,{children:Object(d.jsx)(Et,{certificatesList:e.certificatesInfo.certificates,setCertificatesInfo:e.setCertificatesInfo})}),Object(d.jsxs)(Mt,{id:"lcertificateform",onSubmit:function(t){t.preventDefault(),t.target.elements.teamName.value&&t.target.elements.institution.value&&t.target.elements.graduation.value?(e.setCertificatesInfo({teamName:t.target.elements.teamName.value,institution:t.target.elements.institution.value,graduation:t.target.elements.graduation.value,certificates:e.certificatesInfo.certificates}),e.setCurrentStep(3)):alert("Please enter your team name")},children:[Object(d.jsxs)(Bt,{children:[Object(d.jsx)(xe,{width:"100%",label:"Team Name *",id:"teamName"}),Object(d.jsx)(xe,{width:"100%",label:"Institution *",id:"institution"}),Object(d.jsx)(xe,{width:"100%",label:"Graduation *",id:"graduation"})]}),Object(d.jsx)(Ft,{children:Object(d.jsx)($,{icon:Fe,type:"submit",width:"500px"})})]})]});const Gt=C.a.div(Pt||(Pt=Object(T.a)(['\n  display: flex;\n  background-color: white;\n  flex-direction: column;\n  width: 100%;\n  height: 90%;\n  font-family: "Nunito", sans-serif;\n  font-size: 16px;\n  color: #111111;\n']))),Ht=C.a.div(Dt||(Dt=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 45%;\n  align-content: space-around;\n  P {\n    margin: 0 0 10px 0;\n    width: 100%;\n  }\n"]))),Yt=C.a.div(Vt||(Vt=Object(T.a)(["\n  display: flex;\n  width: 100%;\n  height: 25%;\n"]))),Ut=C.a.div(zt||(zt=Object(T.a)(["\n  display: flex;\n  width: 25%;\n  height: 100%;\n"]))),Jt=C.a.ul(At||(At=Object(T.a)(["\n  margin: 0;\n  padding: 0 0 0 0;\n  width: 75%;\n  height: 100%;\n  li {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 90%;\n    font-size: 14px;\n    padding: 3px 0 0 10px;\n    overflow-wrap: break-word;\n  }\n"]))),Xt=C.a.div(_t||(_t=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 20%;\n  P {\n    margin: 0 0 10px 0;\n    width: 100%;\n  }\n"]))),Kt=C.a.div(Rt||(Rt=Object(T.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: end;\n  width: 100%;\n  height: 15%;\n"])));var Qt=n.p+"static/media/check.08da21f2.svg";var Wt=e=>Object(d.jsxs)(Gt,{children:[Object(d.jsxs)(Ht,{children:[Object(d.jsx)("p",{children:"Your data has been sent successfully!"}),Object(d.jsxs)("p",{children:["Full Name: ",e.basicInfo.fName]}),Object(d.jsxs)("p",{children:["Email: ",e.basicInfo.email]}),Object(d.jsxs)("p",{children:["Birthday: ",e.basicInfo.birthday]}),Object(d.jsxs)("p",{children:["Age: ",e.basicInfo.age]}),Object(d.jsxs)("p",{children:["GitHub: ",e.socialInfo.github]})]}),Object(d.jsxs)(Yt,{children:[Object(d.jsx)(Ut,{children:"Certificates:"}),Object(d.jsx)(Jt,{children:e.certificatesInfo.certificates.map(((e,t)=>Object(d.jsx)("li",{children:e},t)))})]}),Object(d.jsxs)(Xt,{children:[Object(d.jsxs)("p",{children:["Team Name: ",e.certificatesInfo.teamName]}),Object(d.jsxs)("p",{children:["Team Name: ",e.certificatesInfo.teamName]}),Object(d.jsxs)("p",{children:["Team Name: ",e.certificatesInfo.teamName]})]}),Object(d.jsx)(Kt,{children:Object(d.jsx)($,{icon:Qt,type:"submit",bStyle:{width:"100px"},wStyle:{flexDirection:"row-reverse",justifyContent:"space-around"}})})]});const Zt=e=>{const t={firstTabName:e.firstTabName,secondTabName:e.secondTabName,thirdTabName:e.thirdTabName},n={fullNameLabel:e.fullNameLabel,nickNameLabel:e.nickNameLabel,emailLabel:e.emailLabel,phoneLabel:e.phoneLabel,termsLabel:e.termsLabel,birthdayLabel:e.birthdayLabel,dayLabel:e.dayLabel,monthLabel:e.monthLabel,yearLabel:e.yearLabel,ageLabel:e.ageLabel,nextButtonText:e.nextButtonText},[a,i]=(e.linkedinLabel,e.githubLabel,e.nextButtonText,e.certificatesLabel,e.certificatesButtonLabel,e.moreButtonText,e.teamNameLabel,e.institutionLabel,e.graduationLabel,e.finishButtonText,e.fullNameLabel,e.emailLabel,e.birthdayLabel,e.ageLabel,e.githubLabel,e.certificatesLabel,e.teamNameLabel,e.institutionLabel,e.graduationLabel,e.returnButtonText,r.a.useState(0)),[s,c]=r.a.useState({fName:"",nName:"",email:"",phone:"",birthday:"",age:""}),[o,l]=r.a.useState({linkedin:"",github:""}),[b,p]=r.a.useState({certificates:[],teamName:"",institution:"",graduation:""}),h={basic:s,social:o,certificates:b};let m;switch(a){case 0:m=Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(k,{children:"Team SignUp"}),Object(d.jsx)(G,{currentStep:a,setCurrentStep:i,userData:h,navNames:t}),Object(d.jsx)(Ye,{basicInfo:s,setBasicInfo:c,setCurrentStep:i,basicTabNames:n})]});break;case 1:m=Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(k,{children:"Team SignUp"}),Object(d.jsx)(G,{currentStep:a,setCurrentStep:i,userData:h,navNames:t}),Object(d.jsx)(lt,{socialInfo:o,setSocialInfo:l,setCurrentStep:i})]});break;case 2:m=Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(k,{children:"Team SignUp"}),Object(d.jsx)(G,{currentStep:a,setCurrentStep:i,userData:h,navNames:t}),Object(d.jsx)(qt,{certificatesInfo:b,setCertificatesInfo:p,setCurrentStep:i})]});break;case 3:m=Object(d.jsx)(Wt,{basicInfo:s,socialInfo:o,certificatesInfo:b});break;default:m=Object(d.jsx)(Ye,{basicInfo:s,setBasicInfo:c})}return Object(d.jsx)(E,{children:Object(d.jsx)(I,{children:m})})};Zt.defaultProps={firstTabName:"Basic",secondTabName:"Social",thirdTabName:"Certificates",nextButtonText:"Next",finishButtonText:"Finish",returnButtonText:"Return",fullNameLabel:"Full Name",nickNameLabel:"Nickname",emailLabel:"Email",phoneLabel:"Phone",termsLabel:"I accept the terms and privacy",birthdayLabel:"Birthday",dayLabel:"Day",monthLabel:"Month",yearLabel:"Year",ageLabel:"Age",linkedinLabel:"Linkedin",githubLabel:"Github",certificatesLabel:"Certificates",certificatesButtonLabel:"Certificates",moreButtonText:"More",teamNameLabel:"Team Name",institutionLabel:"Institution",graduationLabel:"Graduation"};Object(l.MapTo)("formapp/components/form-component")(Zt);var $t=n(146),en=n(147),tn=n(44),nn=n(20);const an=g((()=>Promise.all([n.e(3),n.e(4)]).then(n.bind(null,367)))),sn=g((()=>n.e(5).then(n.t.bind(null,365,7)))),rn=g((()=>n.e(6).then(n.t.bind(null,366,7))));Object(l.MapTo)("formapp/components/download")(nn.DownloadV1,{isEmpty:nn.DownloadV1IsEmptyFn}),Object(l.MapTo)("formapp/components/list")(nn.ListV2,{isEmpty:nn.ListV2IsEmptyFn}),Object(l.MapTo)("formapp/components/separator")(nn.SeparatorV1,{isEmpty:nn.SeparatorV1IsEmptyFn}),Object(l.MapTo)("formapp/components/button")(nn.ButtonV1,{isEmpty:nn.ButtonV1IsEmptyFn}),Object(l.MapTo)("formapp/components/teaser")(nn.TeaserV1,{isEmpty:nn.TeaserV1IsEmptyFn}),Object(l.MapTo)("formapp/components/image")(nn.ImageV2,{isEmpty:nn.ImageV2IsEmptyFn}),Object(l.MapTo)("formapp/components/title")(sn,{isEmpty:en.TitleV2IsEmptyFn}),Object(l.MapTo)("formapp/components/breadcrumb")(nn.BreadCrumbV2,{isEmpty:nn.BreadCrumbV2IsEmptyFn}),Object(l.MapTo)("formapp/components/navigation")(nn.NavigationV1),Object(l.MapTo)("formapp/components/languagenavigation")(nn.LanguageNavigationV1),Object(l.MapTo)("formapp/components/tabs")(tn.TabsV1,{isEmpty:tn.TabsV1IsEmptyFn}),Object(l.MapTo)("formapp/components/accordion")(tn.AccordionV1,{isEmpty:tn.AccordionV1IsEmptyFn}),Object(l.MapTo)("formapp/components/carousel")(rn,{isEmpty:$t.CarouselV1IsEmptyFn}),Object(l.MapTo)("formapp/components/container")(tn.ContainerV1,{isEmpty:tn.ContainerV1IsEmptyFn});Object(l.MapTo)("formapp/components/text")(an,{emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1}});n(298);const cn={};document.addEventListener("DOMContentLoaded",(()=>{a.ModelManager.initialize(cn).then((e=>{const t=Object(i.a)();Object(c.render)(Object(d.jsx)(o.e,{history:t,children:Object(d.jsx)(p,{history:t,cqChildren:e[a.Constants.CHILDREN_PROP],cqItems:e[a.Constants.ITEMS_PROP],cqItemsOrder:e[a.Constants.ITEMS_ORDER_PROP],cqPath:e[a.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[299,1,2]]]);
//# sourceMappingURL=main.69a74ed4.chunk.js.map