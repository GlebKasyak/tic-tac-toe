(this["webpackJsonpti-tac-toe"]=this["webpackJsonpti-tac-toe"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(3),o=t.n(c),i=(t(9),t(10),t(1)),l=function(e){var n,t=e.value,a=e.onClick,c=e.index,o=e.winLine;return o&&o.indexOf(c)>=0&&(n="highlight"),r.a.createElement("button",{className:"square ".concat(n),onClick:a},t)},u=function(e){var n=e.squares,t=e.onClick,c=e.winLine;return r.a.createElement("div",{className:"board-row"},n.map((function(e,o){return r.a.createElement(a.Fragment,{key:o},function(e){return r.a.createElement(l,{value:n[e],index:e,onClick:function(){return t(e)},winLine:c})}(o))})))},s=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var a=Object(i.a)(n[t],3),r=a[0],c=a[1],o=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[o])return{squares:e[r],winLine:n[t]}}return null},m=function(e){var n=e.onClick,t=e.move,a=e.currentMove;return r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-move ".concat(a),onClick:n},"Got to next step # ",t))},f=function(e){var n=e.history,t=e.stepNumber,a=e.jumpTo,c=n.map((function(e,n){return!!n&&r.a.createElement(m,{currentMove:n===t?"currentMove":"",key:n,move:n,onClick:function(){return a(n)}})}));return r.a.createElement("div",{className:"game-info"},r.a.createElement("h2",null,"Game information"),r.a.createElement("ol",{className:"info-list"},c))},v=function(e){return e?"X":"O"},E=function(e){var n,t,a=e.winner,c=e.player,o=e.draw;return r.a.createElement(r.a.Fragment,null,a&&(t=a.squares,r.a.createElement("h1",null,"Winner ",r.a.createElement("span",{className:"winner-player"},t)))||o&&(n=o,r.a.createElement("h1",{className:"draw"},n))||function(e){return r.a.createElement("h1",null,"Next player:",r.a.createElement("span",{className:"next-player"},v(e)))}(c))},h=Array(9).fill(null),w=function(){var e=Object(a.useState)([{squares:h}]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(0),l=Object(i.a)(o,2),m=l[0],w=l[1],b=Object(a.useState)(!0),d=Object(i.a)(b,2),p=d[0],g=d[1],k=function(e){w(e),g(e%2===0)},N=t[m],y=s(N.squares),q=N.squares.every((function(e){return!!e}))&&"Draw";return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(E,{winner:y,player:p,draw:q}),r.a.createElement("button",{onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;k(e),c([{squares:h}])}()},className:"btn btn-start"},"Go to game start"),r.a.createElement(u,{onClick:function(e){return function(e){var n=t.slice(0,m+1),a=n[n.length-1].squares.slice();s(a)||a[e]||(a[e]=v(p),c(n.concat({squares:a})),w(n.length),g(!p))}(e)},squares:N.squares,winLine:y&&y.winLine}),!!m&&r.a.createElement(f,{history:t,stepNumber:m,jumpTo:k})))},b=function(){return r.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d5ca0c79.chunk.js.map