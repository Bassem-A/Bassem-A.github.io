(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{37:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(24),r=n.n(c),s=n(14),i=(n(37),n(12)),o=i.a.initializeApp({apiKey:"AIzaSyB0rENg9JV1-iOTwRHWONdYI-DsrlAwLGg",authDomain:"basic-chat-15a2f.firebaseapp.com",projectId:"basic-chat-15a2f",storageBucket:"basic-chat-15a2f.appspot.com",messagingSenderId:"20133538012",appId:"1:20133538012:web:d1c3aebaf64dbc1084ec19",measurementId:"G-E4YRVC9W1J"}).firestore(),u=i.a.auth(),d=n(5);var j=function(){return Object(d.jsx)("div",{className:"btn-con",children:Object(d.jsx)("button",{className:"btn-danger",onClick:function(){var e=new i.a.auth.GoogleAuthProvider;u.signInWithPopup(e)},children:"Sign In with Google"})})},b=n(20),l=n.n(b),h=n(25),p=n(64);var m=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1];function r(){return(r=Object(h.a)(l.a.mark((function e(t){var a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=u.currentUser,r=a.uid,s=a.photoURL,e.next=4,o.collection("messages").add({text:n,photoURL:s,uid:r,createdAt:i.a.firestore.FieldValue.serverTimestamp()});case 4:c("");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){return r.apply(this,arguments)},id:"SendForm",children:[Object(d.jsx)(p.a,{className:"inp",value:n,placeholder:"Message..",onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("button",{className:"btn-primary",type:"submit",children:"Send"})]})})};var O=function(){return Object(d.jsx)("div",{className:"signoutContainer",children:Object(d.jsx)("button",{className:"btn-danger",onClick:function(){return u.signOut()},children:"Sign-out"})})};var f=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){o.collection("messages").orderBy("createdAt","desc").limit(35).onSnapshot((function(e){c(e.docs.map((function(e){return e.data()})))}))}),[]),Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(O,{}),Object(d.jsx)("div",{className:"msgs",children:n.slice(0).reverse().map((function(e){e.id;var t=e.text,n=(e.photoURL,e.uid);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"shadow-lg",id:"msg",children:[Object(d.jsxs)("div",{id:"userID",children:[n.substring(0,3),":"]}),Object(d.jsx)("div",{id:"Amsg",children:t})]})})}))}),Object(d.jsx)(m,{})]})},g=n(31);n(49);var v=function(){var e=Object(g.a)(u),t=Object(s.a)(e,1)[0];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h6",{id:"temp",className:"bg-warning",children:"UNDER DEVELOPMENT"}),t?Object(d.jsx)(f,{}):Object(d.jsx)(j,{})]})};r.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.5261e41b.chunk.js.map