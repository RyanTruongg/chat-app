(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[3],{110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var r=n(31),a=n(3),i=n(24),o=n(32),s=n(0),c=n(2),u={small:{flex:"0 0 28px",height:"28px"},medium:{flex:"0 0 40px",height:"40px"},large:{flex:"0 0 60px",height:"60px"}},l=function(e){var t=e.imgSrc,n=void 0===t?"https://i.pravatar.cc/300":t,r=e.size,a=void 0===r?"medium":r;return Object(c.jsx)("div",{className:"avatar round",style:u[a],children:Object(c.jsx)("img",{className:"round",style:{padding:"1px"},src:n,alt:""})})},d=n(20),m=n(44),f=["iconName","variant","type","size","color","className"],j=function(e){var t=e.iconName,n=e.variant,r=e.type,a=e.size,i=e.color,o=e.className,s=Object(m.a)(e,f),u=["btn"];return null===o||void 0===o||o.split(" ").forEach((function(e){return u.push(e)})),"clear"===n&&u.push("btn--nobg"),"large"===a&&u.push("btn--large"),Object(c.jsx)("button",Object(d.a)(Object(d.a)({},s),{},{type:r,className:u.join(" "),children:Object(c.jsx)("span",{style:{color:i},className:"material-icons-round",children:t})}))},v=n.p+"static/media/search.ffb58015.svg",b=n(25);function p(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)([]),u=Object(o.a)(i,2),d=u[0],m=u[1];Object(s.useEffect)((function(){return b.a.on("search:user",(function(e){m(e)})),function(){b.a.off("search:user")}}),[]);var f=function(e){a(e.target.value),b.a.emit("search:user",e.target.value,(function(e){m(e)}))};return Object(c.jsxs)("div",{onBlur:function(){setTimeout((function(){return m([])}),100)},children:[Object(c.jsx)("input",{type:"text",placeholder:"Find",value:n,onFocus:f,onChange:f,style:{borderRadius:0!==d.length?"16px 16px 0 0":"16px",transition:"0.25s"}}),!n&&Object(c.jsx)("img",{className:"search-icon",src:v,alt:""}),Object(c.jsx)("div",{style:{position:"absolute",marginTop:"4px",backgroundColor:"white",width:"100%",boxShadow:"0 0 5px 0px #aaa"},children:d.map((function(e){var t=e._id,n=e.displayName,a=e.photoURL;return Object(c.jsxs)(r.b,{to:"/home/t/".concat(t),style:{display:"flex",alignItems:"center",padding:"8px"},children:[Object(c.jsx)(l,{imgSrc:a,size:"medium"}),Object(c.jsx)("span",{style:{marginLeft:"16px"},children:n})]},t)}))})]})}var h=function(e){var t=e.providerData,n=e.setOpen,r=e.open,a=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return[n,function(){var e=document.getElementById("root");document.fullscreenElement?(r(!1),document.exitFullscreen()):e.requestFullscreen().then((function(){return r(!0)})).catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}]}(),u=Object(o.a)(a,2),d=u[0],m=u[1],f=Object(i.c)(),v=(t||{}).photoURL;return Object(c.jsxs)("header",{className:"sidebar-header",children:[Object(c.jsxs)("div",{className:"sidebar-top",children:[Object(c.jsxs)("div",{className:"sidebar-top-left",children:[Object(c.jsx)(l,{imgSrc:v}),Object(c.jsx)("span",{children:"Chats"})]}),Object(c.jsxs)("div",{className:"sidebar-top-right",children:[Object(c.jsx)(j,{iconName:"more_horiz",title:"More"}),Object(c.jsx)(j,{iconName:d?"fullscreen_exit":"fullscreen",onClick:m}),Object(c.jsx)(j,{iconName:"logout",title:"Signout",onClick:f.signout}),r&&Object(c.jsx)(j,{iconName:"close",color:"var(--primary)",onClick:function(){return n(!1)}})]})]}),Object(c.jsx)("div",{className:"sidebar-bottom",children:Object(c.jsx)(p,{})})]})},O=n(38);var x=n(43);function g(e){return function(e){if(Array.isArray(e))return Object(O.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(x.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=n(42),N=n(61);function _(){var e,t=Object(y.c)((function(e){return e.conversations.data})),n=g(t);n.sort((function(e,t){return t.lastMsg.timestamp-e.lastMsg.timestamp}));var r=Object(y.c)((function(e){return e.conversations.status})),a=Object(y.b)(),o=Object(i.c)();return Object(s.useEffect)((function(){var e;"idle"===r&&a(Object(N.c)(null===(e=o.user)||void 0===e?void 0:e.uid))}),[null===(e=o.user)||void 0===e?void 0:e.uid,a,r]),{data:n,updateConversation:function(e){var n=t.findIndex((function(t){return t.info._id===e.info._id}));a(-1===n?Object(N.a)(e):Object(N.e)({conversationIndex:n,lastMsg:e.lastMsg}))},markConversationAsRead:function(e){var n,r;(null===(n=t.find((function(t){return t.info._id===e})))||void 0===n?void 0:n.seen)||a(Object(N.d)({uid:null===(r=o.user)||void 0===r?void 0:r.uid,conversationID:e}))},getConversationInfo:function(e){var n=t.find((function(t){return t.info._id===e}));if(n)return n.info}}}var w=function(e){var t={},n=Date.now()-e;t.seconds=Math.floor(n/1e3),t.minutes=Math.floor(t.seconds/60),t.hours=Math.floor(t.minutes/60),t.days=Math.floor(t.hours/24),t.weeks=Math.floor(t.days/7),t.months=Math.floor(t.weeks/4),t.years=Math.floor(t.months/12);var r="Just now";for(var a in t){if(!(t[a]>0))return r;r="".concat(t[a]," ").concat(t[a]>1?a:a.split("s")[0])}},I=function(e){var t,n=e.info,u=e.seen,d=e.lastMsg,m=e.to,f=e.setOpen,j=n._id,v=n.displayName,b=n.photoURL,p=Object(s.useState)(w(d.timestamp)),h=Object(o.a)(p,2),O=h[0],x=h[1],g=Object(a.g)(),y=Object(i.c)(),N=_().markConversationAsRead;Object(s.useEffect)((function(){x(w(d.timestamp));var e=setInterval((function(){x(w(d.timestamp))}),6e4);return function(){return clearInterval(e)}}),[d.timestamp]);return Object(c.jsxs)(r.b,{onClick:function(){N(j),f(!1)},to:m,className:m===g.pathname?"room-title__card active":"room-title__card",children:[Object(c.jsx)(l,{imgSrc:b,size:"large"}),Object(c.jsxs)("div",{className:"room-title__card-info",children:[Object(c.jsx)("p",{children:v}),Object(c.jsxs)("div",{style:{fontWeight:!u&&"600"},className:"last-msg",children:[Object(c.jsx)("span",{children:(null===(t=y.user)||void 0===t?void 0:t.uid)===(null===d||void 0===d?void 0:d.from)?"You: "+(null===d||void 0===d?void 0:d.content):null===d||void 0===d?void 0:d.content}),Object(c.jsx)("span",{children:O})]})]})]})},M=["info","lastMsg","seen"],S=function(e){var t=e.data,n=e.setOpen;return Object(c.jsx)("div",{className:"room-title__list",children:null===t||void 0===t?void 0:t.map((function(e){var t=e.info,r=e.lastMsg,a=e.seen,i=Object(m.a)(e,M);return Object(c.jsx)(I,Object(d.a)({seen:a,info:t,lastMsg:r,to:"/home/t/"+t._id,setOpen:n},i),t._id)}))})},D=(n(110),function(){var e,t=Object(s.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],u=Object(i.c)(),l=_();return Object(s.useEffect)((function(){window.matchMedia("(max-width: 768px)").matches&&a(!0)}),[]),Object(c.jsxs)("div",{className:"sidebar",style:{transform:r&&"translateX(0px)"},children:[Object(c.jsx)(h,{open:r,setOpen:a,providerData:null===(e=u.user)||void 0===e?void 0:e.providerData[0]}),Object(c.jsx)(S,{setOpen:a,data:l.data}),!r&&Object(c.jsx)(j,{className:"sidebar-open",type:"button",variant:"clear",size:"large",iconName:"menu",color:"var(--primary)",onClick:function(){return a(!0)}})]})}),L=n(60);var C=function(e){var t=e.photoURL,n=e.displayName;return Object(c.jsxs)("div",{className:"chat__header",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsx)(l,{imgSrc:t,size:"medium"}),Object(c.jsxs)("div",{className:"chat-info",children:[Object(c.jsx)("p",{className:"chat-info__name",children:n}),Object(c.jsx)("p",{className:"chat-info__status",children:"Active now"})]})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)(j,{variant:"clear",iconName:"phone_in_talk",color:"var(--primary)"}),Object(c.jsx)(j,{variant:"clear",iconName:"video_call",color:"var(--primary)"}),Object(c.jsx)(j,{variant:"clear",iconName:"more_horiz",color:"var(--primary)"})]})]})},k=function(e){var t=e.msgText,n=e.className,r=e.self,a=e.roomPhotoURL;return Object(c.jsxs)("div",{className:n,children:[!r&&Object(c.jsx)(l,{size:"small",imgSrc:a}),Object(c.jsx)("div",{className:"msg-list",children:null===t||void 0===t?void 0:t.map((function(e,t){var n=e.content,r=e.timestamp,a=new Date(r-6e4*(new Date).getTimezoneOffset()).toLocaleString("en-GB",{timeZone:"UTC"});return Object(c.jsx)("p",{"data-time":a,children:n},t)}))})]})},R=(n(111),function(e){var t=e.msgList,n=e.uid,r=e.roomPhotoURL,a=Object(s.useRef)(null);return Object(s.useEffect)((function(){a.current.scrollTop=a.current.scrollHeight}),[t]),Object(c.jsx)("div",{ref:a,className:"chatbox-msg-container",children:null===t||void 0===t?void 0:t.map((function(e,t){var a=(null===e||void 0===e?void 0:e.from)===n?"msg msg--mine":"msg",i=(null===e||void 0===e?void 0:e.from)===n;return Object(c.jsx)(k,{className:a,self:i,roomPhotoURL:r,msgText:null===e||void 0===e?void 0:e.msg},t)}))})}),U=function(e){var t=e.conversationID,n=e.uid,r=e.pushNewMessage,a=Object(s.useState)(""),i=Object(o.a)(a,2),u=i[0],l=i[1],d=_().updateConversation;return Object(c.jsx)("div",{className:"msg-form",children:Object(c.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u.trim()){var a={senderID:n,receiverID:t,content:u.trim()};b.a.emit("msg:create",a,(function(e){var t=e.doc,n=e.conversation;r(n.info._id,t),d(n)}))}l("")},children:[Object(c.jsx)("input",{type:"text",placeholder:"Aa",value:u,onChange:function(e){return l(e.target.value)}}),Object(c.jsx)(j,{variant:"clear",size:"large",iconName:"send",color:"var(--primary)"})]})})},E=(n(112),n(62));var z=function(e){var t,n=[],r={from:"",msg:[]},a=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(x.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}(e=Array.from(e));try{for(a.s();!(t=a.n()).done;){var i=t.value,o={timestamp:i.timestamp,content:i.content};r.from?i.senderID!==r.from?(n.push(r),r={from:i.senderID,msg:[o]}):r.msg.push(o):(r.from=i.senderID,r.msg=[o])}}catch(s){a.e(s)}finally{a.f()}return r.from&&n.push(r),n},A=function(e){var t,n=Object(i.c)(),r=Object(y.c)((function(t){var n;return null===(n=t.messages.data[e])||void 0===n?void 0:n.messages})),a=Object(y.c)((function(t){var n;return null===(n=t.messages.data[e])||void 0===n?void 0:n.status})),o=Object(y.b)();Object(s.useEffect)((function(){var t;a&&"fulfilled"===a||!e||o(Object(E.c)({uid:null===(t=n.user)||void 0===t?void 0:t.uid,conversationID:e}))}),[null===(t=n.user)||void 0===t?void 0:t.uid,e,o,a]);return{groupMessages:function(){if(r){var e=g(r).sort((function(e,t){return e.timestamp-t.timestamp}));return z(e)}return[]},pushNewMessage:function(e,t){o(Object(E.a)({conversationID:e,message:t}))}}},T=function(){var e,t=Object(a.h)().conversationID,n=A(t),r=n.groupMessages,o=n.pushNewMessage,s=Object(i.c)(),u=r(),l=function(){var e=Object(y.b)({}),t=Object(y.c)((function(e){return e}));return{getUserById:function(n){var r=L.c.selectById(t,n);if(r)return r;"pending"!==t.users.requests[n]&&e(Object(L.b)(n))}}}().getUserById(t),d=null===(e=s.user)||void 0===e?void 0:e.uid;return u?Object(c.jsxs)("div",{className:"chat",children:[Object(c.jsx)(C,{displayName:(null===l||void 0===l?void 0:l.displayName)||"Loading...",photoURL:(null===l||void 0===l?void 0:l.photoURL)||"https://i.stack.imgur.com/ATB3o.gif"}),Object(c.jsx)(R,{roomPhotoURL:(null===l||void 0===l?void 0:l.photoURL)||"https://i.stack.imgur.com/ATB3o.gif",uid:d,msgList:u}),Object(c.jsx)(U,{pushNewMessage:o,conversationID:t,uid:d})]}):Object(c.jsx)("p",{children:"Loading..."})},B=function(){var e=A().pushNewMessage,t=_().updateConversation;return Object(s.useEffect)((function(){return b.a.on("private msg",(function(n){var r=n.doc,a=n.conversation;e(a.info._id,r),a.lastMsg=r,t(a)})),function(){b.a.off("private msg")}}),[e,t]),Object(c.jsxs)(r.a,{children:[Object(c.jsx)(D,{}),Object(c.jsx)(a.d,{children:Object(c.jsx)(i.a,{exact:!0,path:"/home/t/:conversationID",children:Object(c.jsx)(T,{})})})]})};t.default=B}}]);