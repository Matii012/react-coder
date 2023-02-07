var U=Object.defineProperty,W=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var z=(t,n,c)=>n in t?U(t,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[n]=c,N=(t,n)=>{for(var c in n||(n={}))Q.call(n,c)&&z(t,c,n[c]);if(D)for(var c of D(n))Y.call(n,c)&&z(t,c,n[c]);return t},k=(t,n)=>W(t,J(n));import{r as i,j as e,a as r,F as u,b as X,B as Z,N as w,C as ee,L as g,c as te,d as j,e as _,_ as B,u as E,f as P,U as ae,K as re,V as F,w as $,g as T,D as V,h as ne,i as ce,T as le,k as se,l as ie,m as oe,n as de,o as me,p as he,R as ue,q as v,s as ge,t as fe}from"./vendor.f1db2009.js";const Ne=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function c(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=c(a);fetch(a.href,l)}};Ne();var A="/react-coder/assets/logo.aba07118.png";const x=i.exports.createContext([]),be=({children:t})=>{const[n,c]=i.exports.useState([]);function s(d){const o=n.findIndex(b=>b.id===d.id);if(o>-1){const b=n[o].quantity;n.splice(o,1),c([...n,k(N({},d),{quantity:d.quantity+b})])}else c([...n,d])}const a=d=>{const o=n.filter(b=>b.id!==d);c(o)};function l(){c([])}const m=()=>n.reduce((d,o)=>d+o.quantity,0),f=()=>n.reduce((d,o)=>d+o.quantity*o.price,0);return e(x.Provider,{value:{cartList:n,addToCart:s,removeItem:a,emptyCart:l,cartCounter:m,totalBuy:f},children:t})};function G(){const{cartList:t,cartCounter:n}=i.exports.useContext(x);return r(u,{children:[e(X,{size:"2rem",color:"white",className:"position-relative"}),t.length===0?e("span",{}):e(Z,{pill:!0,bg:"danger",children:n()})]})}const pe=({cartCount:t})=>e(u,{children:e(w,{bg:"dark",variant:"dark",expand:"lg",children:r(ee,{children:[e(g,{to:"/",children:e(w.Brand,{children:e("img",{src:A,width:"100",height:"100",className:"d-inline-block align-top",alt:"NGGames Logo"})})}),e(g,{className:"cart-mobile",style:{paddingRight:"2rem"},to:"/cart",children:e(G,{cartCount:t})}),e(w.Toggle,{"aria-controls":"basic-navbar-nav"}),e(w.Collapse,{className:"justify-content-end",id:"basic-navbar-nav",children:r(te,{className:"align-items-center",children:[e(j,{className:"nav-link",to:"/",children:"Home"}),e(j,{className:"nav-link",to:"/categoria/placas-de-video",children:"Placas de Video"}),e(j,{className:"nav-link",to:"/categoria/procesadores",children:"Procesadores"})]})}),e(g,{className:"cart-desktop",to:"/cart",children:e(G,{cartCount:t})})]})})});function ve({prod:t}){return e("div",{className:"col-md-4",children:r("div",{className:"card mt-5",children:[e("img",{src:t.img,className:"card-img-top card-img-products",alt:t.name}),r("div",{className:"card-body text-center",children:[e("h4",{className:"card-title",children:t.name}),r("h5",{className:"card-text",children:["$",t.price]})]}),e("div",{className:"card-footer text-center",children:e(g,{to:`/detalle/${t.id}`,children:e("button",{className:"btn btn-danger bg-gradient",children:"Ver M\xE1s"})})})]})})}const xe=i.exports.memo(({products:t})=>e(u,{children:t.map(n=>e(ve,{prod:n},n.id))}));const ye=()=>{const t=_`
        display: block;
        margin: 0 auto;
        border-color: red;
`;return r(u,{children:[e("div",{className:"loaderContainerMobile",children:e(B,{color:"#dc3545",css:t,size:60})}),e("div",{className:"loaderContainer",children:e(B,{color:"#dc3545",css:t,size:150})})]})};function O({greeting:t}){const[n,c]=i.exports.useState([]),[s,a]=i.exports.useState(!0),{idCategory:l}=E();return i.exports.useEffect(()=>{const m=P();if(l){const f=ae(F(m,"items"),re("category","==",l));$(f).then(d=>c(d.docs.map(o=>N({id:o.id},o.data())))).finally(()=>a(!1))}else{const f=F(m,"items");$(f).then(d=>c(d.docs.map(o=>N({id:o.id},o.data())))).finally(()=>a(!1))}},[l]),r("div",{children:[r("h2",{className:"text-center",children:[" ",t," "]}),e("div",{className:"container",children:e("div",{className:"row",children:s?e(ye,{}):e(xe,{products:n})})})]})}function Ce({initial:t,max:n,onAdd:c}){const[s,a]=i.exports.useState(t);return r("div",{children:[r("div",{className:"d-flex justify-content-center align-items-center",children:[e("button",{onClick:()=>{s>t&&a(s-1)},className:"btn btn-dark",children:"-"}),e("h3",{className:"m-3",children:s}),e("button",{onClick:()=>{s<n&&a(s+1)},className:"btn btn-dark",children:"+"})]}),e("div",{className:"d-flex justify-content-center",children:e("button",{onClick:()=>c(s),className:"btn btn-danger bg-gradient mt-3",children:"A\xF1adir Carrito"})})]})}function ke({product:t}){const[n,c]=i.exports.useState(!1),{addToCart:s}=i.exports.useContext(x),a=l=>{c(!0),s(k(N({},t),{quantity:l}))};return e("div",{className:"container mt-5",children:r("div",{className:"row justify-content-center text-center align-items-center",children:[e("div",{className:"col-lg-6 col-md-12 col-sm-12 pb-5",children:e("img",{src:t.img,className:"itemDetail-img"})}),r("div",{className:"col-lg-6 col-md-12 col-sm-12",children:[e("h3",{className:"fw-bold",children:t.name}),r("h4",{children:["$",t.price]}),e("p",{children:t.description}),r("h5",{children:["Stock: ",t.stock]}),n?r("div",{className:"d-flex justify-content-center",children:[e(g,{to:"/cart",children:e("button",{className:"btn btn-danger bg-gradient me-3 mt-3",children:"Ir al carrito"})}),e(g,{to:"/",children:e("button",{className:"btn btn-danger bg-gradient ms-3 mt-3",children:"Seguir comprando"})})]}):e(Ce,{initial:1,max:t.stock,onAdd:a})]})]})},t.id)}const M=()=>{const t=_`
        display: block;
        margin: 0 auto;
        border-color: red;
`;return r(u,{children:[e("div",{className:"loaderSecondaryContainerMobile",children:e(T,{color:"#dc3545",css:t,size:150})}),e("div",{className:"loaderSecondaryContainer",children:e(T,{color:"#dc3545",css:t,size:150})})]})};function we(){const{idProduct:t}=E(),[n,c]=i.exports.useState(!0),[s,a]=i.exports.useState([]);return i.exports.useEffect(()=>{const l=P(),m=V(l,"items",t);ne(m).then(f=>a(N({id:f.id},f.data()))).finally(()=>c(!1))},[t]),e("div",{children:n?e(M,{}):e(ke,{product:s})})}const Le=()=>{const{cartList:t,totalBuy:n,removeItem:c,emptyCart:s}=i.exports.useContext(x);return r("div",{className:"container",children:[r("div",{className:"row mt-4 justify-content-center text-center",children:[e("div",{className:"col-lg-3 col-sm-3"}),e("h5",{className:"col-lg-3 col-sm-3",children:"Nombre:"}),e("h5",{className:"col-lg-2 col-sm-2",children:"Precio:"}),e("h5",{className:"col-lg-1 col-sm-1",children:"Cantidad:"}),e("h5",{className:"col-lg-2 col-sm-2",children:"Total:"}),e("div",{className:"col-lg-1 col-sm-1"})]}),e("hr",{}),r("div",{className:"row justify-content-center text-center",children:[t.map(a=>r("div",{className:"row align-items-center",children:[e("div",{className:"col-lg-3 col-sm-3",children:e("img",{src:a.img,style:{width:150}})}),e("div",{className:"col-lg-3 col-sm-3",children:e("h5",{children:a.name})}),e("div",{className:"col-lg-2 col-sm-2",children:r("h5",{children:["$",a.price]})}),e("div",{className:"col-lg-1 col-sm-1",children:e("h5",{children:a.quantity})}),e("div",{className:"col-lg-2 col-sm-2",children:r("h5",{children:["$",a.quantity*a.price]})}),e("div",{className:"col-lg-1 col-sm-1",children:e("button",{className:"btn btn-danger bg-gradient",onClick:()=>c(a.id),children:"Eliminar"})}),e("hr",{})]},a.id)),e("h3",{children:e("b",{children:"Precio Total:"})}),e("h4",{className:"text-center",children:r("b",{children:["$",n()]})}),r("div",{className:"d-flex justify-content-center mt-5",children:[e("button",{className:"btn btn-danger bg-gradient me-3",onClick:s,children:"Vaciar Carrito"}),e(g,{to:"/checkout",children:e("button",{className:"btn btn-danger bg-gradient ms-3",children:"Procesar Compra"})})]})]})]})};var Se="/react-coder/assets/gamingpc.7a9b13dc.jpg";function Ie(){const{cartList:t}=i.exports.useContext(x);return r(u,{children:[e("img",{src:Se,className:"img-fluid"}),t.length===0?e("div",{className:"container mt-5",children:r("div",{className:"row text-center justify-content-center",children:[e("h3",{className:"my-5",children:e("strong",{children:"No hay productos en tu carrito"})}),e("h4",{className:"my-5",children:"\xBFQu\xE9 te parece si agreg\xE1s algunos?"}),e(g,{className:"btn btn-danger bg-gradient w-25",to:"/",children:"Ir a comprar"})]})}):e(Le,{})]})}const qe=()=>r("div",{className:"text-center",children:[e("h2",{children:"Error 404 - P\xE1gina no encontrada."}),e("div",{className:"d-flex justify-content-center",children:e(g,{to:"/",children:e("button",{className:"btn btn-danger bg-gradient mt-3",children:"Volver al Inicio"})})})]});const je=()=>{const[t,n]=i.exports.useState(""),[c,s]=i.exports.useState(!1),[a,l]=i.exports.useState({name:"",email:"",emailConfirm:"",phone:""}),{cartList:m,totalBuy:f,emptyCart:d}=i.exports.useContext(x);return e(u,{children:c?r(u,{children:[e("h4",{className:"mt-5 text-center",children:"Procesando su orden, espere un momento..."}),e(M,{})]}):t?e("div",{className:"container",children:r("div",{className:"py-5 text-center mt-5",children:[e("h2",{className:"mt-5",children:"\xA1Gracias por elegirnos!"}),e("h4",{className:"my-5",children:"La compra se ha realizado exitosamente."}),r("strong",{children:["El ID de tu compra es ",t]}),e("br",{}),e(g,{className:"btn btn-danger bg-gradient mt-5",to:"/",children:e("strong",{children:"Volver al inicio"})})]})}):e("div",{className:"container mt-5 form__container d-flex",children:e("div",{className:"container align-self-center position-relative",children:e("div",{className:"row",children:e("div",{className:"col-12",children:r("form",{className:"d-flex flex-column",onSubmit:C=>{C.preventDefault(),s(!0),delete a.emailConfirm;let p={};p.date=ce.fromDate(new Date),p.buyer=a,p.total=f(),p.items=m.map(h=>{const y=h.id,S=h.name,I=h.price,q=h.quantity,H=h.price*h.quantity;return{id:y,name:S,price:I,quantity:q,totalPrice:H}});const L=P(),R=F(L,"orders");le(R,p).then(h=>n(h.id)).catch(h=>console.log(h)).finally(()=>{s(!1),K(),d(),l({name:"",email:"",emailConfirm:"",phone:""})});function K(){const h=se(L);p.items.map(y=>{let S=V(L,"items",y.id),I=m.find(q=>q.id===y.id).stock;h.update(S,{stock:I-y.quantity})}),h.commit()}},onChange:C=>{l(k(N({},a),{[C.target.name]:C.target.value}))},children:[r("div",{className:"mb-3 d-flex flex-column align-items-center",children:[e("label",{className:"form-label",children:"Nombre"}),e("input",{type:"name",className:"form-control form-control--color",name:"name",placeholder:"Pedrito Pedrazo",defaultValue:a.name,required:!0})]}),r("div",{className:"mb-3 d-flex flex-column align-items-center",children:[e("label",{className:"form-label",children:"Tel\xE9fono"}),e("input",{type:"number",className:"form-control form-control--color",name:"phone",placeholder:"15xxxxxxxxx",defaultValue:a.phone,required:!0})]}),r("div",{className:"mb-3 d-flex flex-column align-items-center",children:[e("label",{className:"form-label",children:"Email"}),e("input",{type:"email",className:"form-control form-control--color",name:"email",placeholder:"pedrito@ejemplo.com",defaultValue:a.email,required:!0})]}),r("div",{className:"mb-3 d-flex flex-column align-items-center",children:[e("label",{className:"form-label",children:"Confirmar Email"}),e("input",{type:"email",className:"form-control form-control--color",name:"emailConfirm",placeholder:"pedrito@ejemplo.com",defaultValue:a.emailConfirm,required:!0})]}),e("button",{className:"btn btn-danger bg-gradient d-flex justify-content-center w-50 align-self-center",disabled:!a.name||!a.phone||!a.email||a.email!==a.emailConfirm||m.length==0,children:"Comprar"})]})})})})})})},Pe=()=>e(u,{children:e(ie,{size:"2rem",color:"white",className:"logoSocial d-flex"})}),Fe=()=>e(u,{children:e(oe,{size:"2rem",color:"white",className:"logoSocial d-flex"})}),De=()=>e(u,{children:e(de,{size:"2rem",color:"white",className:"logoSocial d-flex"})}),ze=()=>e(u,{children:e(me,{size:"2rem",color:"white",className:"logoSocial d-flex"})});const _e=()=>e(u,{children:r("footer",{className:"footer container-fluid mt-5 bg-dark",children:[e("div",{className:"row",children:e("div",{className:"col-12 d-flex flex-column align-items-center mt-2",children:e(g,{to:"/",children:e("img",{src:A,alt:"ng games",className:"footer__logo"})})})}),e("div",{className:"row mb-3",children:r("div",{className:"col-12 text-center text-white",children:[r("h3",{className:"footer__texto",children:["Nuestras ",e("b",{children:"Redes:"})]}),r("div",{className:"redes__sociales",children:[e("a",{href:"https://www.facebook.com",target:"_blank",children:e(Pe,{})}),r("a",{href:"https://www.instagram.com",target:"_blank",children:[" ",e(De,{})," "]}),r("a",{href:"https://www.linkedin.com/in/Nahuelz08",target:"_blank",children:[" ",e(ze,{})," "]}),r("a",{href:"https://github.com/Nahuelz08",target:"_blank",children:[" ",e(Fe,{})," "]})]})]})}),e("div",{className:"footer-final row text-center",children:e("h4",{className:"text-white",children:"\xA9 Developed by Nahuel Gramajo"})})]})});function Be(){return e(be,{children:e(he,{children:r("div",{className:"App",children:[e(pe,{}),r(ue,{children:[e(v,{exact:!0,path:"/",element:e(O,{greeting:"Hola, Bienvenido a NG Games!"})}),e(v,{exact:!0,path:"/categoria/:idCategory",element:e(O,{greeting:"Hola, Bienvenido a NG Games!"})}),e(v,{exact:!0,path:"/detalle/:idProduct",element:e(we,{})}),e(v,{exact:!0,path:"/cart",element:e(Ie,{})}),e(v,{exact:!0,path:"/checkout",element:e(je,{})}),e(v,{path:"*",element:e(qe,{})})]}),e(_e,{})]})})})}const Ee={apiKey:"AIzaSyACzTKxTj4vqJmAmFBOlWPm5Huk908YFjs",authDomain:"proyecto-react-coderhous-22c3c.firebaseapp.com",projectId:"proyecto-react-coderhous-22c3c",storageBucket:"proyecto-react-coderhous-22c3c.appspot.com",messagingSenderId:"429353057728",appId:"1:429353057728:web:5dd604aaff8d2573349c25"};ge(Ee);fe.render(e(Be,{}),document.getElementById("root"));
