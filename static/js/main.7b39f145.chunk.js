(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(53)},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(28),l=a.n(c),o=(a(37),a(39),a(14)),u=a(0),i=a(15),m=a(12),d=a(18),b=a(7),s=r.a.createContext([]),f=function(){return Object(n.useContext)(s)},E=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(b.a)(a,2),l=c[0],o=c[1],u=function(e){return!!l.find(function(t){return t.id===e})};return r.a.createElement(s.Provider,{value:{clearCart:function(){return o([])},isInCart:u,removeProduct:function(e){return o(l.filter(function(t){return t.id!==e}))},addProduct:function(e,t){u(e.id)?o(l.map(function(a){return a.id===e.id?Object(d.a)({},a,{quantity:a.quantity+t}):a})):o([].concat(Object(m.a)(l),[Object(d.a)({},e,{quantity:t})]))},totalPrice:function(){return l.reduce(function(e,t){return e+t.quantity*t.price},0)},totalProducts:function(){return l.reduce(function(e,t){return e+t.quantity},0)},cart:l}},t)},p=(a(41),function(e){var t=e.product,a=f().removeProduct;return r.a.createElement("div",{className:"itemCart"},r.a.createElement("img",{src:t.image,alt:t.title,className:"mb-3"}),r.a.createElement("div",null,r.a.createElement("p",null,"T\xedtulo: ",t.title),r.a.createElement("p",null,"Cantidad: ",t.quantity),r.a.createElement("p",null,"Precio u.: $",t.price),r.a.createElement("p",null,"Subtotal: $",t.quantity*t.price),r.a.createElement("button",{onClick:function(){return a(t.id)},className:"bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-3 border-b-4 border-red-700 hover:border-red-500 rounded"},"Eliminar")))}),v=function(){var e=f(),t=e.cart,a=e.totalPrice,n={buyer:{name:"Patz",email:"patz@gmail.com",phone:"1544556677",address:"Avenida Siempreviva 740, CABA"},items:t.map(function(e){return{id:e.id,title:e.title,price:e.price,quantity:e.quantity}}),total:a()};return 0===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"m-5"},"No hay elementos en el carrito."),r.a.createElement(o.b,{to:"/",className:"ml-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},"Hacer compras")):r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(p,{key:e.id,product:e})}),r.a.createElement("div",{className:"flex flex-col items-center mt-10"},r.a.createElement("p",null,"total: $",a()),r.a.createElement("button",{onClick:function(){var e=Object(i.f)(),t=Object(i.b)(e,"orders");Object(i.a)(t,n).then(function(e){var t=e.id;return console.log(t)}),alert("\xa1Usted a emitido una orden de Compra!")},className:"mt-2 mb-20 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},"Emitir Compra")))},g=(a(43),a(45),function(e){var t=e.initial,a=e.stock,c=e.onAdd,l=Object(n.useState)(parseInt(t)),o=Object(b.a)(l,2),u=o[0],i=o[1];return Object(n.useEffect)(function(){i(parseInt(t))},[t]),r.a.createElement("div",{className:"mt-5"},r.a.createElement("button",{disabled:u<=1,onClick:function(){i(u-1)},className:"mr-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},"-"),r.a.createElement("span",null,u),r.a.createElement("button",{disabled:u>=a,onClick:function(){i(u+1)},className:"ml-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},"+"),r.a.createElement("div",null,r.a.createElement("button",{disabled:a<=0,onClick:function(){return c(u)},className:"mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},"Agregar al carrito")))}),h=function(e){var t=e.data,a=Object(n.useState)(!1),c=Object(b.a)(a,2),l=c[0],u=c[1],i=f().addProduct;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"detail"},r.a.createElement("img",{className:"detail_image",src:t.img,alt:""}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"font-bold text-3xl"},t.title),l?r.a.createElement(o.b,{to:"/cart",className:"btn mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},"Terminar Compra"):r.a.createElement(g,{initial:1,stock:5,onAdd:function(e){u(!0),i(t,e)}}))))},j=function(){var e=Object(n.useState)({}),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(u.o)().detalleId;return Object(n.useEffect)(function(){var e=Object(i.f)(),t=Object(i.c)(e,"products",l);Object(i.d)(t).then(function(e){return c(Object(d.a)({id:e.id},e.data()))})},[l]),r.a.createElement(h,{data:a})},O=(a(47),function(e){var t=e.info;return r.a.createElement(o.b,{to:"/detalle/".concat(t.id),className:"film"},r.a.createElement("img",{src:t.img,alt:""}),r.a.createElement("p",null,t.title))}),x=function(e){var t=e.data;return(void 0===t?[]:t).map(function(e){return r.a.createElement(O,{key:e.id,info:e})})},N=function(e){var t=e.greeting;return r.a.createElement("h1",null,t)},y=(a(49),function(e){var t=e.texto,a=Object(n.useState)([]),c=Object(b.a)(a,2),l=c[0],o=c[1],m=Object(u.o)().categoriaId;return Object(n.useEffect)(function(){var e=Object(i.f)(),t=Object(i.b)(e,"products");if(m){var a=Object(i.g)(t,Object(i.h)("category","==",m));Object(i.e)(a).then(function(e){return o(e.docs.map(function(e){return Object(d.a)({id:e.id},e.data())}))})}else Object(i.e)(t).then(function(e){return o(e.docs.map(function(e){return Object(d.a)({id:e.id},e.data())}))})},[m]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cajaProductos ml-5"},r.a.createElement(N,{greeting:t}),r.a.createElement(x,{data:l})))}),w=function(){var e=f().totalProducts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})),r.a.createElement("span",null,e()||""))},C=(a(51),function(){return r.a.createElement("div",{className:"navbar bg-base-100"},r.a.createElement("div",{className:"flex-1"},r.a.createElement(o.c,{className:"nav__link btn btn-ghost normal-case text-xl mr-5",to:"/"},"NutriPet"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{className:"nav__link btn btn-square btn-ghost px-8",to:"/categoria/alimentos"},"Alimentos")),r.a.createElement("li",null,r.a.createElement(o.c,{className:"nav__link btn btn-square btn-ghost px-8",to:"/categoria/accesorios"},"Accesorios")))),r.a.createElement("div",{className:"flex-none"},r.a.createElement(o.c,{className:"mr-5 scaleCss nav__link btn btn-square btn-ghost",to:"cart"},r.a.createElement(w,null))))});var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(E,null,r.a.createElement(C,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(y,null)}),r.a.createElement(u.a,{path:"/categoria/:categoriaId",element:r.a.createElement(y,null)}),r.a.createElement(u.a,{path:"/cart",element:r.a.createElement(v,null)}),r.a.createElement(u.a,{path:"/detalle/:detalleId",element:r.a.createElement(j,null)})))))},I=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,54)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})},P=a(29);Object(P.a)({apiKey:"AIzaSyDtIO5bnL5yHEQ51nL6a8AaCLwDYwOWDGY",authDomain:"nutripet-cd830.firebaseapp.com",projectId:"nutripet-cd830",storageBucket:"nutripet-cd830.appspot.com",messagingSenderId:"420447346159",appId:"1:420447346159:web:87ed22f686f5d2a6e72a1a",measurementId:"G-Q51KB7R0VM"});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),I()}},[[30,3,2]]]);
//# sourceMappingURL=main.7b39f145.chunk.js.map