(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{21:function(e,s,o){},38:function(e,s,o){},39:function(e,s,o){"use strict";o.r(s);var t=o(2),a=o(15),n=o.n(a),i=(o(21),o(16)),c=o(12),r=["G\xe9nesis","\xc9xodo","Lev\xedtico","N\xfameros","Deuteronomio","Josu\xe9","Jueces","Rut","1 Samuel","2 Samuel","1 Reyes","2 Reyes","1 Cr\xf3nicas","2 Cr\xf3nicas","Esdras","Nehem\xedas","Ester","Job","Salmos","Proverbios","Eclesiast\xe9s","Cantares","Isa\xedas","Jerem\xedas","Lamentaciones","Ezequiel","Daniel","Oseas","Joel","Am\xf3s","Abd\xedas","Jon\xe1s","Miqueas","Nah\xfam","Habacuc","Sofon\xedas","Ageo","Zacar\xedas","Malaqu\xedas","Mateo","Marcos","Lucas","Juan","Hechos","Romanos","1 Corintios","2 Corintios","G\xe1latas","Efesios","Filipenses","Colosenses","1 Tesalonicenses","2 Tesalonicenses","1 Timoteo","2 Timoteo","Tito","Filem\xf3n","Hebreos","Santiago","1 Pedro","2 Pedro","1 Juan","2 Juan","3 Juan","Judas","Apocalipsis"],l=o(1),u=function(e){var s=e.book;return console.log("Book box ",s),Object(l.jsx)("div",{className:"book_list_item",children:Object(l.jsxs)("p",{className:"text-center",children:[" ",s," "]})})},b=o(3),m=o.n(b),d=o(10),j=o(11),f=[],g=["G\xe9nesis","\xc9xodo","Lev\xedtico","N\xfameros","Deuteronomio","Josu\xe9","Jueces","Rut","1 Samuel","2 Samuel","1 Reyes","2 Reyes","1 Cr\xf3nicas","2 Cr\xf3nicas","Esdras","Nehem\xedas","Ester","Job","Salmos","Proverbios","Eclesiast\xe9s","Cantares","Isa\xedas","Jerem\xedas","Lamentaciones","Ezequiel","Daniel","Oseas","Joel","Am\xf3s","Abd\xedas","Jon\xe1s","Miqueas","Nah\xfam","Habacuc","Sofon\xedas","Ageo","Zacar\xedas","Malaqu\xedas","Mateo","Marcos","Lucas","Juan","Hechos","Romanos","1 Corintios","2 Corintios","G\xe1latas","Efesios","Filipenses","Colosenses","1 Tesalonicenses","2 Tesalonicenses","1 Timoteo","2 Timoteo","Tito","Filem\xf3n","Hebreos","Santiago","1 Pedro","2 Pedro","1 Juan","2 Juan","3 Juan","Judas","Apocalipsis"],h=function(){var e=Object(t.useState)(!1),s=Object(c.a)(e,2),o=s[0],a=s[1],n=Object(t.useState)([]),b=Object(c.a)(n,2),h=b[0],x=b[1];Object(t.useEffect)((function(){var e=JSON.parse(localStorage.getItem("books"))||null,s=JSON.parse(localStorage.getItem("books_bible_storaged"))||null;e&&(x(e),f=e,g=s)}),[]);var O=function(e,s){var o=Math.floor(Math.random()*(s-e))+e,t=g[o];g.splice(o,1),x([].concat(Object(i.a)(h),[t])),f.push(t),localStorage.setItem("books",JSON.stringify(f)),localStorage.setItem("books_bible_storaged",JSON.stringify(g)),0===g.length&&a(!0),m.a.fire("Libro seleccionado: \n ".concat(t))};return Object(l.jsxs)("div",{className:"canvas_component_box",children:[Object(l.jsxs)("div",{className:"btn_shake_box",children:[Object(l.jsxs)("button",{className:"btn_restart",onClick:function(){m.a.fire({title:"\xbfEst\xe1s seguro?",text:"No puedes revertir esta acci\xf3n",icon:"warning",showCancelButton:!0,cancelButtonText:"No",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed"}).then((function(e){e.isConfirmed&&(x([]),localStorage.removeItem("books"),localStorage.removeItem("books_bible_storaged"),f=[],g=r)}))},children:["Reiniciar",Object(l.jsx)(d.a,{style:{marginLeft:"10px"},icon:j.b})]}),Object(l.jsxs)("button",{type:"button",className:"btn_shake",disabled:o,onClick:function(){return function(e,s){var o;m.a.fire({title:"Elegir Libro",html:"Seleccionando en <b></b> milisegundos.",timer:2e3,timerProgressBar:!0,didOpen:function(){m.a.showLoading();var e=m.a.getHtmlContainer().querySelector("b");o=setInterval((function(){e.textContent=m.a.getTimerLeft()}),100)},willClose:function(){clearInterval(o)}}).then((function(o){o.dismiss===m.a.DismissReason.timer&&O(e,s)}))}(0,g.length)},children:[o?"Juego terminado":"Seleccionar libro",Object(l.jsx)(d.a,{style:{marginLeft:"10px"},icon:j.a})]})]}),Object(l.jsxs)("div",{className:"books_list_box",children:[Object(l.jsxs)("h2",{className:"text-center",children:["Libros generados ",h.length,"/66"," "]}),Object(l.jsx)("div",{className:"books_list",children:h.map((function(e,s){return Object(l.jsx)(u,{book:e},s)}))})]})]})},x=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-center main-title",children:"Divi\xe9rtete con los libros B\xedblicos"}),Object(l.jsx)(h,{})]})};o(38);var O=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(x,{})})};n.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ca53b163.chunk.js.map