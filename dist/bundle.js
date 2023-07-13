(()=>{"use strict";var e={99:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(81),n=r.n(o),i=r(645),a=r.n(i)()(n());a.push([e.id,"*{margin:0;box-sizing:border-box}body{background:#020024;background:linear-gradient(360deg, #020024 0%, #090979 50%, #006cff 100%);height:100vw}body #header{text-align:center;height:140px;padding:20px 4vw 0px 4vw;border-bottom:1px solid black;display:grid;grid-template-columns:4fr 1fr 4fr}body #header #heading{grid-row:1;grid-column:2;font-size:3em;color:whitesmoke}body #header #playerName{grid-row:2;grid-column:1;font-size:2em;font-weight:bold;color:goldenrod}body #header #comName{grid-row:2;grid-column:3;font-size:2em;font-weight:bold;color:palevioletred}body #content{display:grid;grid-template-columns:repeat(2, 1fr);justify-items:center;margin-top:30px}body #content .playerBackground{background-color:goldenrod}body #content .comBackground{background-color:palevioletred}body #content .board{display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr);width:500px}body #content .board .field{border:1px solid black;width:50px;height:50px}body #content .board .placedShip{background-color:green}body #content .board .placedShipCom{background-color:transparent}body #content .board .water{background-color:mediumblue}body #content .board .shipHit{background-color:red}body #content .board .sunk{background-color:black}body #content #direction{margin-top:20px;height:30px;width:80px;border:none;border-radius:5px;background-color:blanchedalmond;border:1px solid black}body #content #direction:hover{opacity:0.8}body #message{text-align:center;font-size:1.2em;color:white}body #newGame{width:100px;height:40px;margin-left:47vw;margin-right:48vw;margin-top:10px;border:none;border-radius:5px;background-color:blanchedalmond;border:1px solid black}body #newGame:hover{opacity:0.8}body .hide{opacity:0}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,h="".concat(c," ").concat(d);i[c]=d+1;var u=r(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=n(p,o);o.byIndex=s,t.splice(s,0,{identifier:h,updater:m,references:1})}a.push(h)}return a}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var i=o(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);t[s].references--}for(var l=o(e,n),c=0;c<i.length;c++){var d=r(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),o=r(795),n=r.n(o),i=r(569),a=r.n(i),s=r(565),l=r.n(s),c=r(216),d=r.n(c),h=r(589),u=r.n(h),p=r(99),m={};function f(e,t,r,o,n){const i=document.createElement(t);return null!=e?e.append(i):document.getElementById("content").append(i),null!=r&&(i.id=r),null!=o&&(i.className=o),null!=n&&(i.innerHTML=n),i}m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;class y{constructor(e){this.length=e,this.position=this.startPosition(e),this.hits=0,this.sunk=!1,this.horizontal=!0,this.placed=!1}startPosition(e){let t=[];for(let r=0;r<e;r++)t.push(0);return t}}class g{constructor(e,t){this.name=e,this.shipAmount=t,this.allShipsLength=[2,3,3,4],this.allShips=this.createShips(4,this.allShipsLength),this.field=this.createFields(),this.shipsPlaced=0,this.allShipsPlaced=!1,this.allHits=0,this.usedChoices=[]}placeShip(e){for(let t=0;t<e.length;t++)this.field[e[t]]=1;this.shipsPlaced+=1,this.shipsPlaced===this.shipAmount&&(this.allShipsPlaced=!0,console.log("All Ships placed"))}markSquare(e){for(let t=0;t<e.length;t++){const r=document.querySelector(`[data-square='${String(e[t])}']`);"Computer"===this.name?r.classList.add("placedShipCom"):r.classList.add("placedShip")}}receiveAttack(e){0===this.field[e]?this.field[e]=2:1===this.field[e]&&(this.field[e]=3,this.allHits+=1,this.registerHitShip(e)),this.markAttackSquare(e,this.field[e])}markAttackSquare(e,t){const r=document.querySelector(`[data-square='${String(e)}']`);2===t?r.classList.add("water"):3===t&&r.classList.add("shipHit")}markSunkenShip(e){for(let t=0;t<e.length;t++)document.querySelector(`[data-square='${String(e[t])}']`).classList.add("sunk"),this.field[e[t]]=4}registerHitShip(e){this.allShips.forEach((t=>{for(let r=0;r<t.position.length;r++)t.position[r]===e&&(t.hits+=1,t.hits===t.length&&(t.sunk=!0,this.markSunkenShip(t.position),this.allShipsSunk()))}))}allShipsSunk(){if(12===this.allHits){const e=document.querySelector("#message");"Computer"===this.name?(console.log("Gewonnen"),e.innerHTML="You sunk all enemy ships! <br> You Win!!!"):(console.log("Verloren"),e.innerHTML="All your ships have been sunk! <br> You Lose!!!");const t=document.querySelector("#newGame");t.addEventListener("click",(()=>{location.reload()})),t.classList.remove("hide")}}createBoard(e){const t=f(document.querySelector("#content"),"div",this.name,"board");for(let r=1;r<=100;r++)f(t,"div",null,"field").setAttribute("data-square",r+e)}createFields(){let e=[];for(let t=0;t<=301;t++)e.push(0);return e}createShips(e,t){const r=[];for(let o=0;o<e;o++){const e=new y(t[o]);r.push(e)}return r}comShips(){for(;!1===this.allShipsPlaced;){let e=Math.floor(100*Math.random())+201,t=Math.floor(2*Math.random())+1;this.allShips.forEach((e=>{e.horizontal=1===t})),this.checkIfPlaced(e)}}checkIfPlaced(e){this.allShips.every((t=>{if(!1===t.placed){let r="",o=[],n=[],i=[],a=[];if(!0===t.horizontal){for(let r=0;r<t.length;r++)o[r]=e+r,n[r]=e-r;r=this.checkBorder_h(o)?n:o}else{for(let r=0;r<t.length;r++)i[r]=e+10*r,a[r]=e-10*r;r=this.checkBorder_v(i)?a:i}return(!1===this.checkDoublePlacement(this.allShips,r)&&this.shipsPlaced>0||0===this.shipsPlaced)&&(this.setShipPosition(t.position,r),this.placeShip(t.position),this.markSquare(t.position),t.placed=!0),!1}return!0}))}checkDoublePlacement(e,t){let r=!1;return e.forEach((e=>{for(let o=0;o<e.position.length;o++)for(let n=0;n<t.length;n++)e.position[o]===t[n]&&(r=!0)})),r}setShipPosition(e,t){for(let r=0;r<t.length;r++)e[r]=t[r]}checkBorder_h(e){return e.at(-2)%10==0||e.at(-3)%10==0||e.at(-4)%10==0}checkBorder_v(e){return e[0]>=200?e.at(-2)+10>300||e.at(-3)+10>300||e.at(-4)+10>300:e.at(-2)+10>100||e.at(-3)+10>100||e.at(-4)+10>100}}const b=(()=>{const e=new g("Player",4);return e.createBoard(0),e})(),v=(()=>{const e=new g("Computer",4);return e.createBoard(200),e.comShips(),e})();((e,t)=>{const r=document.querySelector("#header");f(r,"h1","heading",null,"Battleships"),f(r,"p","playerName",null,t.name),f(r,"p","comName",null,e.name),f(document.querySelector("#content"),"button","direction",null,"Vertical"),f(document.body,"p","message",null,"Place your ships on the left board. Change directions by clicking the button first"),f(document.body,"button","newGame","hide","New Game")})(v,b);const S=new class{constructor(e,t){this.computer=e,this.enemyPlayer=t}comAttack(){let e=this.computer.usedChoices.slice(-1);e=e[0];let t=Math.floor(99*Math.random())+1;t=this.comBestShot(t,e),this.computer.usedChoices.push(t),this.enemyPlayer.receiveAttack(t)}comBestShot(e,t){if(3===this.enemyPlayer.field[t]&&1===this.enemyPlayer.field[t+1])e=t+1;else if(3===this.enemyPlayer.field[t]&&1===this.enemyPlayer.field[t-1])e=t-1;else if(3===this.enemyPlayer.field[t]&&1===this.enemyPlayer.field[t-2])e=t-2;else if(3===this.enemyPlayer.field[t]&&1===this.enemyPlayer.field[t-3])e=t-3;else if(3===this.enemyPlayer.field[t]&&1===this.enemyPlayer.field[t+10])e=t+10;else if(3===this.enemyPlayer.field[t]&&1===this.enemyPlayer.field[t-10])e=t-10;else if(3===this.enemyPlayer.field[t]&&1===this.enemyPlayer.field[t-20])e=t-20;else if(3===this.enemyPlayer.field[t]&&1===this.enemyPlayer.field[t-30])e=t-30;else for(;this.computer.usedChoices.includes(e);)e=Math.floor(99*Math.random())+1;return e}}(v,b),k=document.querySelectorAll(".board");k[0].classList.add("playerBackground"),k[0].addEventListener("click",(e=>{let t=e.target;if(t.matches(".field")){let e=parseInt(t.getAttribute("data-square"));!1===b.allShipsPlaced&&(b.checkIfPlaced(e),b.allShipsPlaced)&&(P.classList.add("hide"),document.querySelector("#message").innerHTML="Shoot for enemy ships on the right board")}})),k[1].classList.add("comBackground"),k[1].addEventListener("click",(e=>{let t=e.target;if(t.matches(".field")){let e=parseInt(t.getAttribute("data-square"));!0!==b.allShipsPlaced||b.usedChoices.includes(e)||12==b.allHits||12==v.allHits||(b.usedChoices.push(e),v.receiveAttack(e),S.comAttack())}}));const P=document.querySelector("#direction");P.addEventListener("click",(()=>{b.allShips.forEach((e=>{e.horizontal?(e.horizontal=!1,P.innerHTML="Horizontal"):(e.horizontal=!0,P.innerHTML="Vertical")}))}))})()})();