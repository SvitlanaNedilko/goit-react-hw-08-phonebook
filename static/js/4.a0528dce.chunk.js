(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{133:function(t,e,n){"use strict";var r,c,a,o=n(143),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){a=!1}function i(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==u&&(r=u,s())}function f(){return a||(a=function(){r||i(u);for(var t,e=r.split(""),n=[],c=o.nextValue();e.length>0;)c=o.nextValue(),t=Math.floor(c*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return i(t),r},seed:function(t){o.seed(t),c!==t&&(s(),c=t)},lookup:function(t){return f()[t]},shuffled:f}},134:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(50);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(s){c=!0,a=s}finally{try{r||null==u.return||u.return()}finally{if(c)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},141:function(t,e,n){"use strict";t.exports=n(142)},142:function(t,e,n){"use strict";var r=n(133),c=n(144),a=n(148),o=n(149)||0;function u(){return c(o)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return o=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=a},143:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},144:function(t,e,n){"use strict";var r,c,a=n(145);n(133);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===c?r++:(r=0,c=n),e+=a(7),e+=a(t),r>0&&(e+=a(r)),e+=a(n)}},145:function(t,e,n){"use strict";var r=n(133),c=n(146),a=n(147);t.exports=function(t){for(var e,n=0,o="";!e;)o+=a(c,r.get(),1),e=t<Math.pow(16,n+1),n++;return o}},146:function(t,e,n){"use strict";var r,c="object"===typeof window&&(window.crypto||window.msCrypto);r=c&&c.getRandomValues?function(t){return c.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},147:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,c=-~(1.6*r*n/e.length),a="";;)for(var o=t(c),u=c;u--;)if((a+=e[o[u]&r]||"").length===+n)return a}},148:function(t,e,n){"use strict";var r=n(133);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},149:function(t,e,n){"use strict";t.exports=0},150:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){},172:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var r=n(0),c=n(13),a=n(134),o=n(141),u=n.n(o),s=n(14),i=n(40),f=function(t){return t.contacts.contactItems},l=function(t){return t.contacts.filter},h=function(t){return t.contacts.loading},d=Object(i.a)([l,f],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))})),b=n(25),p=n.n(b),j=n(34),m=n(28),x=n.n(m),v=(n(150),n(2));function g(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],o=e[1],i=Object(r.useState)(""),l=Object(a.a)(i,2),h=l[0],d=l[1],b=Object(c.c)(f),p=Object(c.b)(),j=u.a.generate(),m=u.a.generate();return Object(v.jsxs)("form",{className:"ContactForm",onSubmit:function(t){var e;t.preventDefault(),b.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):p((e={name:n,number:h},function(t){t(s.a.addContactRequest()),x.a.post("/contacts",e).then((function(e){var n=e.data;return t(s.a.addContactSuccess(n))})).catch((function(e){return t(s.a.addContactError(e))}))})),o(""),d("")},children:[Object(v.jsxs)("label",{className:"ContactForm_Input",htmlFor:j,children:["\u0418\u043c\u044f",Object(v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:function(t){o(t.currentTarget.value)},id:j})]}),Object(v.jsxs)("label",{className:"ContactForm_Input",htmlFor:m,children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(v.jsx)("input",{type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:h,onChange:function(t){d(t.currentTarget.value)},id:m})]}),Object(v.jsx)("button",{type:"submit",children:"Add contact"})]})}n(151);var O=function(){var t=Object(c.c)(l),e=Object(c.b)();return Object(v.jsxs)("label",{className:"Filter_Input",children:["Find contacts by name",Object(v.jsx)("input",{type:"text",value:t,onChange:function(t){return e(s.a.changeFilter(t.currentTarget.value))}})]})},w=(n(152),function(){var t=Object(c.c)(d),e=Object(c.b)(),n=function(t){return e((n=t,function(t){t(s.a.onDeleteContactRequest()),x.a.delete("/contacts/".concat(n)).then((function(){return t(s.a.onDeleteContactSuccess(n))})).catch((function(e){return t(s.a.onDeleteContactError(e))}))}));var n};return Object(r.useEffect)((function(){e(function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(s.a.fatchContactRequest()),t.prev=1,t.next=4,x.a.get("/contacts");case 4:n=t.sent,r=n.data,e(s.a.fatchContactSuccess(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(s.a.fatchContactError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[e]),Object(v.jsx)("ul",{className:"ContactList",children:!!t.length&&t.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(v.jsxs)("li",{className:"ContactList_Item",children:[Object(v.jsx)("p",{className:"ContactList_Name",children:r}),Object(v.jsx)("p",{children:c}),Object(v.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},e)}))})});function C(){var t=Object(c.c)(h);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{className:"AppTitle",children:"Contacts"}),Object(v.jsx)(g,{}),Object(v.jsx)(O,{}),t&&Object(v.jsx)("h2",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),Object(v.jsx)(w,{})]})}}}]);
//# sourceMappingURL=4.a0528dce.chunk.js.map