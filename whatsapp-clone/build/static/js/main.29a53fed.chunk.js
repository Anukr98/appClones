(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{52:function(e,a,t){e.exports=t(77)},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(23),r=t.n(l),s=(t(57),t(9)),o=(t(58),t(99)),i=t(89),m=(t(59),t(90)),u=t(91),d=t(92),h=t(93),p=t(26),E=(t(60),t(25)),f=t.n(E),b=f.a.initializeApp({apiKey:"AIzaSyBhaQ4m1_f_b-BFz2gSU_OwbHytPO-u1JE",authDomain:"whatsapp-clone-788d2.firebaseapp.com",databaseURL:"https://whatsapp-clone-788d2.firebaseio.com",projectId:"whatsapp-clone-788d2",storageBucket:"whatsapp-clone-788d2.appspot.com",messagingSenderId:"936047143665",appId:"1:936047143665:web:db4762250f27bbf7765750",measurementId:"G-MYJ87S41H5"}).firestore(),v=f.a.auth(),g=new f.a.auth.GoogleAuthProvider,_=b,O=Object(n.createContext)(),j=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(O.Provider,{value:Object(n.useReducer)(a,t)},l)},N=function(){return Object(n.useContext)(O)};var S=function(e){var a,t=e.id,l=e.name,r=e.addNewChat,i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],d=m[1],h=N(),E=Object(s.a)(h,2),f=(E[0].user,E[1],Object(n.useState)("")),b=Object(s.a)(f,2),v=b[0],g=b[1];return Object(n.useEffect)((function(){t&&_.collection("chats").doc(t).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))}))}),[t]),Object(n.useEffect)((function(){g(Math.floor(5e3*Math.random()))}),[]),r?c.a.createElement("div",{onClick:function(){var e=prompt("Enter your name");e&&_.collection("chats").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add New Chat")):c.a.createElement(p.b,{to:"/chats/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(v,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null," ",l," "),c.a.createElement("p",null,null===(a=u[0])||void 0===a?void 0:a.message))))};var w=function(){var e=N(),a=Object(s.a)(e,2),t=a[0].user,l=(a[1],Object(n.useState)([])),r=Object(s.a)(l,2),p=r[0],E=r[1];return Object(n.useEffect)((function(){_.collection("chats").onSnapshot((function(e){return E(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(o.a,{src:null===t||void 0===t?void 0:t.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(i.a,null," ",c.a.createElement(m.a,null)," "),c.a.createElement(i.a,null," ",c.a.createElement(u.a,null)," "),c.a.createElement(i.a,null," ",c.a.createElement(d.a,null)," "))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(h.a,null),c.a.createElement("input",{type:"text",placeholder:"Search or start new chat"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(S,{addNewChat:!0}),p.map((function(e){return c.a.createElement(S,{key:e.id,id:e.id,name:e.data.name})}))))},y=(t(75),t(94)),C=t(95),I=t(96),k=t(97),B=t(5);var x=function(){var e,a,t=Object(n.useState)(""),l=Object(s.a)(t,2),r=l[0],m=l[1],u=Object(B.f)().chatId,h=Object(n.useState)(""),p=Object(s.a)(h,2),E=p[0],b=p[1],v=Object(n.useState)([]),g=Object(s.a)(v,2),O=g[0],j=g[1],S=N(),w=Object(s.a)(S,2),x=w[0].user,D=(w[1],Object(n.useState)("")),M=Object(s.a)(D,2),R=M[0],U=M[1];return Object(n.useEffect)((function(){u&&(_.collection("chats").doc(u).onSnapshot((function(e){return b(e.data().name)})),_.collection("chats").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return j(e.docs.map((function(e){return e.data()})))})))}),[u]),Object(n.useEffect)((function(){U(Math.floor(5e3*Math.random()))}),[u]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(R,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,E),c.a.createElement("p",null,"Last seen at ",new Date(null===(e=O[O.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(i.a,null," ",c.a.createElement(y.a,null)," "),c.a.createElement(i.a,null," ",c.a.createElement(C.a,null)," "),c.a.createElement(i.a,null," ",c.a.createElement(d.a,null)," "))),c.a.createElement("div",{className:"chat__body"},O.map((function(e){var a;return c.a.createElement("p",{className:"chat__message ".concat(e.name===x.displayName&&"chat__receiver")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(I.a,null),c.a.createElement("form",{action:""},c.a.createElement("input",{type:"text",autoComplete:"false",placeholder:"Type a message",value:r,onChange:function(e){return m(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),_.collection("chats").doc(u).collection("messages").add({name:x.displayName,timestamp:f.a.firestore.FieldValue.serverTimestamp(),message:r}),m("")}},"Send a message")),c.a.createElement(k.a,null)))},D=t(43),M=t(98),R=(t(76),t(44)),U="SET_USER",A=function(e,a){switch(console.log(a),a.type){case U:return Object(R.a)({},e,{user:a.user});default:return e}};var T=function(){var e=N(),a=Object(s.a)(e,2);Object(D.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png",alt:""}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Sign in to WhatsApp")),c.a.createElement(M.a,{onClick:function(){v.signInWithPopup(g).then((function(e){t({type:U,user:e.user})})).catch((function(e){return alert(e.message)}))},className:"button"},"Sign in with Google")))};var J=function(){var e=N(),a=Object(s.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(p.a,null,c.a.createElement(B.c,null,c.a.createElement(B.a,{path:"/chats/:chatId"},c.a.createElement(w,null),c.a.createElement(x,null)),c.a.createElement(B.a,{path:"/"},c.a.createElement(w,null),c.a.createElement(x,null))))):c.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,{initialState:{user:null},reducer:A},c.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.29a53fed.chunk.js.map