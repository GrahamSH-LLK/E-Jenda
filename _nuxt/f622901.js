(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(e,n,r){"use strict";r.r(n);var o={mounted:function(){var t;(t=this.subjects).push.apply(t,[this.generateSubject("Math","red"),this.generateSubject("English","indigo"),this.generateSubject("Science","yellow")])},data:function(){return{subjects:[]}},methods:{push:function(t){t.assignments={name:t.entry,id:new Date},t.entry=""},generateSubject:function(e,n){return{name:e,id:e.toLowerCase(),color:n,get assignments(){return JSON.parse(localStorage.getItem(e.toLowerCase())||"[]")},set assignments(n){this.assignments.push(n),localStorage.setItem(e.toLowerCase(),JSON.stringify(t))}}},parseColor:function(t){switch(t){case"red":return"bg-red-400 text-white";case"indigo":return"bg-indigo-400 text-white";case"blue":return"bg-blue-400 text-white";case"yellow":return"bg-yellow-400 text-white";default:return"bg-red-400 text-white"}}}},l=r(41),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("h1",{staticClass:"font-serif font-bold text-4xl"},[t._v("E-jenda")]),t._v(" "),n("span",{staticClass:"p-1 font-italic"},[t._v("This demo is not completed and is buggy. Do not store anything in it, as it may be lost.")]),t._v(" "),t._l(t.subjects,(function(e){return n("ul",{key:e.name,staticClass:"-bg-opacity-50 w-full p-6",class:t.parseColor(e.color)},[n("h1",{staticClass:"font-serif font-bold text-4xl"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.assignments,(function(e){return n("li",{key:""+e.id,staticClass:"\n        bg-opacity-75\n        font-serif\n        rounded-sm\n        bg-white\n        text-gray-800\n        m-2\n        p-1\n      "},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),n("button",{staticClass:"rounded-l-sm bg-white text-gray-800 p-2",on:{click:function(n){return t.push(e)}}},[t._v("\n      +")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.entry,expression:"subject.entry"}],staticClass:"text-gray-800 rounded-r-sm p-2",attrs:{placeholder:"Add a new assignment"},domProps:{value:e.entry},on:{input:function(n){n.target.composing||t.$set(e,"entry",n.target.value)}}})],2)}))],2)}),[],!1,null,null,null);n.default=component.exports}}]);