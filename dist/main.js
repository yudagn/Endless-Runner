!function(){var t={9670:function(t,e,i){var n=i(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,e,i){var n=i(5656),r=i(7466),s=i(1400),h=function(t){return function(e,i,h){var a,o=n(e),c=r(o.length),u=s(h,c);if(t&&i!=i){for(;c>u;)if((a=o[u++])!=a)return!0}else for(;c>u;u++)if((t||u in o)&&o[u]===i)return t||u||0;return!t&&-1}};t.exports={includes:h(!0),indexOf:h(!1)}},1194:function(t,e,i){var n=i(7293),r=i(5112),s=i(7392),h=r("species");t.exports=function(t){return s>=51||!n((function(){var e=[];return(e.constructor={})[h]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},7475:function(t,e,i){var n=i(111),r=i(3157),s=i(5112)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)?n(e)&&null===(e=e[s])&&(e=void 0):e=void 0),void 0===e?Array:e}},5417:function(t,e,i){var n=i(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:function(t,e,i){var n=i(6656),r=i(3887),s=i(1236),h=i(3070);t.exports=function(t,e){for(var i=r(e),a=h.f,o=s.f,c=0;c<i.length;c++){var u=i[c];n(t,u)||a(t,u,o(e,u))}}},8880:function(t,e,i){var n=i(9781),r=i(3070),s=i(9114);t.exports=n?function(t,e,i){return r.f(t,e,s(1,i))}:function(t,e,i){return t[e]=i,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,i){"use strict";var n=i(4948),r=i(3070),s=i(9114);t.exports=function(t,e,i){var h=n(e);h in t?r.f(t,h,s(0,i)):t[h]=i}},9781:function(t,e,i){var n=i(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,i){var n=i(7854),r=i(111),s=n.document,h=r(s)&&r(s.createElement);t.exports=function(t){return h?s.createElement(t):{}}},8113:function(t,e,i){var n=i(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,i){var n,r,s=i(7854),h=i(8113),a=s.process,o=s.Deno,c=a&&a.versions||o&&o.version,u=c&&c.v8;u?r=(n=u.split("."))[0]<4?1:n[0]+n[1]:h&&(!(n=h.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=h.match(/Chrome\/(\d+)/))&&(r=n[1]),t.exports=r&&+r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,i){var n=i(7854),r=i(1236).f,s=i(8880),h=i(1320),a=i(3505),o=i(9920),c=i(4705);t.exports=function(t,e){var i,u,f,l,p,g=t.target,d=t.global,v=t.stat;if(i=d?n:v?n[g]||a(g,{}):(n[g]||{}).prototype)for(u in e){if(l=e[u],f=t.noTargetGet?(p=r(i,u))&&p.value:i[u],!c(d?u:g+(v?".":"#")+u,t.forced)&&void 0!==f){if(typeof l==typeof f)continue;o(l,f)}(t.sham||f&&f.sham)&&s(l,"sham",!0),h(i,u,l,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:function(t,e,i){var n=i(7854),r=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?r(n[t]):n[t]&&n[t][e]}},7854:function(t,e,i){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof i.g&&i.g)||function(){return this}()||Function("return this")()},6656:function(t,e,i){var n=i(7908),r={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return r.call(n(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,i){var n=i(9781),r=i(7293),s=i(317);t.exports=!n&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,i){var n=i(7293),r=i(4326),s="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?s.call(t,""):Object(t)}:Object},2788:function(t,e,i){var n=i(5465),r=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return r.call(t)}),t.exports=n.inspectSource},9909:function(t,e,i){var n,r,s,h=i(8536),a=i(7854),o=i(111),c=i(8880),u=i(6656),f=i(5465),l=i(6200),p=i(3501),g="Object already initialized",d=a.WeakMap;if(h||f.state){var v=f.state||(f.state=new d),x=v.get,m=v.has,y=v.set;n=function(t,e){if(m.call(v,t))throw new TypeError(g);return e.facade=t,y.call(v,t,e),e},r=function(t){return x.call(v,t)||{}},s=function(t){return m.call(v,t)}}else{var w=l("state");p[w]=!0,n=function(t,e){if(u(t,w))throw new TypeError(g);return e.facade=t,c(t,w,e),e},r=function(t){return u(t,w)?t[w]:{}},s=function(t){return u(t,w)}}t.exports={set:n,get:r,has:s,enforce:function(t){return s(t)?r(t):n(t,{})},getterFor:function(t){return function(e){var i;if(!o(e)||(i=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}}},3157:function(t,e,i){var n=i(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:function(t,e,i){var n=i(7293),r=/#|\.prototype\./,s=function(t,e){var i=a[h(t)];return i==c||i!=o&&("function"==typeof e?n(e):!!e)},h=s.normalize=function(t){return String(t).replace(r,".").toLowerCase()},a=s.data={},o=s.NATIVE="N",c=s.POLYFILL="P";t.exports=s},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},2190:function(t,e,i){var n=i(5005),r=i(3307);t.exports=r?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return"function"==typeof e&&Object(t)instanceof e}},133:function(t,e,i){var n=i(7392),r=i(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,i){var n=i(7854),r=i(2788),s=n.WeakMap;t.exports="function"==typeof s&&/native code/.test(r(s))},3070:function(t,e,i){var n=i(9781),r=i(4664),s=i(9670),h=i(4948),a=Object.defineProperty;e.f=n?a:function(t,e,i){if(s(t),e=h(e),s(i),r)try{return a(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},1236:function(t,e,i){var n=i(9781),r=i(5296),s=i(9114),h=i(5656),a=i(4948),o=i(6656),c=i(4664),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(t,e){if(t=h(t),e=a(e),c)try{return u(t,e)}catch(t){}if(o(t,e))return s(!r.f.call(t,e),t[e])}},8006:function(t,e,i){var n=i(6324),r=i(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,i){var n=i(6656),r=i(5656),s=i(1318).indexOf,h=i(3501);t.exports=function(t,e){var i,a=r(t),o=0,c=[];for(i in a)!n(h,i)&&n(a,i)&&c.push(i);for(;e.length>o;)n(a,i=e[o++])&&(~s(c,i)||c.push(i));return c}},5296:function(t,e){"use strict";var i={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!i.call({1:2},1);e.f=r?function(t){var e=n(this,t);return!!e&&e.enumerable}:i},2140:function(t,e,i){var n=i(111);t.exports=function(t,e){var i,r;if("string"===e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;if("function"==typeof(i=t.valueOf)&&!n(r=i.call(t)))return r;if("string"!==e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,i){var n=i(5005),r=i(8006),s=i(5181),h=i(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=r.f(h(t)),i=s.f;return i?e.concat(i(t)):e}},1320:function(t,e,i){var n=i(7854),r=i(8880),s=i(6656),h=i(3505),a=i(2788),o=i(9909),c=o.get,u=o.enforce,f=String(String).split("String");(t.exports=function(t,e,i,a){var o,c=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||s(i,"name")||r(i,"name",e),(o=u(i)).source||(o.source=f.join("string"==typeof e?e:""))),t!==n?(c?!p&&t[e]&&(l=!0):delete t[e],l?t[e]=i:r(t,e,i)):l?t[e]=i:h(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,i){var n=i(7854);t.exports=function(t,e){try{Object.defineProperty(n,t,{value:e,configurable:!0,writable:!0})}catch(i){n[t]=e}return e}},6200:function(t,e,i){var n=i(2309),r=i(9711),s=n("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},5465:function(t,e,i){var n=i(7854),r=i(3505),s="__core-js_shared__",h=n[s]||r(s,{});t.exports=h},2309:function(t,e,i){var n=i(1913),r=i(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.16.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,i){var n=i(9958),r=Math.max,s=Math.min;t.exports=function(t,e){var i=n(t);return i<0?r(i+e,0):s(i,e)}},5656:function(t,e,i){var n=i(8361),r=i(4488);t.exports=function(t){return n(r(t))}},9958:function(t){var e=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},7466:function(t,e,i){var n=i(9958),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},7908:function(t,e,i){var n=i(4488);t.exports=function(t){return Object(n(t))}},7593:function(t,e,i){var n=i(111),r=i(2190),s=i(2140),h=i(5112)("toPrimitive");t.exports=function(t,e){if(!n(t)||r(t))return t;var i,a=t[h];if(void 0!==a){if(void 0===e&&(e="default"),i=a.call(t,e),!n(i)||r(i))return i;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:function(t,e,i){var n=i(7593),r=i(2190);t.exports=function(t){var e=n(t,"string");return r(e)?e:String(e)}},9711:function(t){var e=0,i=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+i).toString(36)}},3307:function(t,e,i){var n=i(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,i){var n=i(7854),r=i(2309),s=i(6656),h=i(9711),a=i(133),o=i(3307),c=r("wks"),u=n.Symbol,f=o?u:u&&u.withoutSetter||h;t.exports=function(t){return s(c,t)&&(a||"string"==typeof c[t])||(a&&s(u,t)?c[t]=u[t]:c[t]=f("Symbol."+t)),c[t]}},561:function(t,e,i){"use strict";var n=i(2109),r=i(1400),s=i(9958),h=i(7466),a=i(7908),o=i(5417),c=i(6135),u=i(1194)("splice"),f=Math.max,l=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var i,n,u,d,v,x,m=a(this),y=h(m.length),w=r(t,y),b=arguments.length;if(0===b?i=n=0:1===b?(i=0,n=y-w):(i=b-2,n=l(f(s(e),0),y-w)),y+i-n>p)throw TypeError(g);for(u=o(m,n),d=0;d<n;d++)(v=w+d)in m&&c(u,d,m[v]);if(u.length=n,i<n){for(d=w;d<y-n;d++)x=d+i,(v=d+n)in m?m[x]=m[v]:delete m[x];for(d=y;d>y-n+i;d--)delete m[d-1]}else if(i>n)for(d=y-n;d>w;d--)x=d+i-1,(v=d+n-1)in m?m[x]=m[v]:delete m[x];for(d=0;d<i;d++)m[d+w]=arguments[d+2];return m.length=y-n+i,u}})}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i(561);var e={};document.addEventListener("keydown",(function(t){e[t.code]=!0})),document.addEventListener("keyup",(function(t){e[t.code]=!1}));var n=1,r=function(){function i(t,e,n,r,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.x=t,this.y=e,this.width=n,this.height=r,this.sprite=new Image,this.ctx=s,this.yDir=0,this.jumpPower=10,this.originalHeight=r,this.jumping=!1,this.jumpLength=0,this.i=0,this.p=0,this.ducking=!1,this.jumpSound=new Audio("./src/assets/audio/jump.wav"),this.jumpSound.volume=.8}var r,s;return r=i,(s=[{key:"animate",value:function(t,i,r){e.Space||e.ArrowUp?this.jump(r):this.jumpLength=0,e.ShiftLeft||e.ArrowDown?(this.ducking=!0,n=5,this.duck()):(this.ducking=!1,n=1,this.height=this.originalHeight),this.y+=this.yDir,this.y+this.height<canvas.height-93?(this.yDir+=n,this.jumping=!0):(this.yDir=0,this.jumping=!1,this.y=canvas.height-this.height-93),this.draw(t,i)}},{key:"duck",value:function(){this.height=this.originalHeight/1.5,this.ducking=!0,this.duckLength++}},{key:"jump",value:function(t){this.jumping||0!==this.jumpLength||this.ducking?this.jumpLength>0&&this.jumpLength<17&&(this.jumpLength++,this.yDir=-this.jumpPower):(this.jumpLength=1,this.yDir=-this.jumpPower,t&&this.jumpSound.play())}},{key:"draw",value:function(t,e){0===e?(this.i>9&&(this.i=0),this.ducking?this.sprite.src="./src/assets/Sprites/male/Slide__00".concat(this.i,".png"):this.sprite.src="./src/assets/Sprites/male/Run__00".concat(this.i,".png")):(this.i>7&&(this.i=0),this.ducking?(this.i>4&&(this.i=0),this.sprite.src="./src/assets/Sprites/female/png/Slide__00".concat(this.i,".png")):this.sprite.src="./src/assets/Sprites/female/png/Run__00".concat(this.i,".png")),this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),this.p%3==0&&this.i++,this.p++,t&&e?(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x+15,this.y,this.width-30,this.height),this.ctx.stroke()):t&&!e&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&t(r.prototype,s),i}();function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=111,this.height=64,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/Bush_2.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&s(e.prototype,i),t}();function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=90,this.height=95,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/Cactus_1.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&a(e.prototype,i),t}();function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=65,this.height=65,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/Crate.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&c(e.prototype,i),t}();function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=180,this.height=150,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/Tree.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&f(e.prototype,i),t}();function p(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var g=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=75,this.height=45,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/Cactus_2.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&p(e.prototype,i),t}();function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=146.8,this.height=192,this.frameX=4,this.frameY=0,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/bird.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.width,this.height),0===this.frameY&&0===this.frameX?this.frameY=3:3===this.frameY&&0===this.frameX?this.frameY=2:2===this.frameY&&0===this.frameX?this.frameY=1:1===this.frameY&&0===this.frameX&&(this.frameY=0),this.frameX--,this.frameX<0&&(this.frameX=4),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y+15,this.width,this.height-45),this.ctx.stroke())}}])&&d(e.prototype,i),t}();function x(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=120,this.height=51,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/Skeleton.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&x(e.prototype,i),t}();function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var w=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=101,this.height=99,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/StoneBlock.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&y(e.prototype,i),t}();function b(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var k=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=86,this.height=96,this.gameSpeed=r,this.xDir=-r,this.ctx=n,this.sprite=new Image,this.sprite.src="src/assets/Tiles/png/Objects/Cactus_3.png"}var e,i;return e=t,(i=[{key:"move",value:function(t){this.x+=this.xDir,this.xDir=-this.gameSpeed,this.draw(t)}},{key:"draw",value:function(t){this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height),t&&(this.ctx.beginPath(),this.ctx.lineWidth="1",this.ctx.strokeStyle="black",this.ctx.rect(this.x,this.y,this.width,this.height),this.ctx.stroke())}}])&&b(e.prototype,i),t}();function S(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var j=200,O=[],E=93,T=function(){function t(e,i,n,r,s,h,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=i,this.ctx.font="48px fantasy",this.ctx.textAlign="center",this.hitboxes=n,this.character=r,this.music=new Audio("./src/assets/audio/ES_Alleyways of Seoul - Josef Bel Habib.mp3"),this.music.loop=!0,this.music.volume=.15,this.gameSound=s,this.platform=h,this.background=a}var e,i;return e=t,(i=[{key:"spawnObstacle",value:function(t){var e=this.newObs(t);O.push(e)}},{key:"newObs",value:function(t){var e=this.randomInt(1,9);return 1===e?new h(canvas.width+131,canvas.height-E-65,this.ctx,this.gameSpeed):2===e?new o(canvas.width+88,canvas.height-E-95,this.ctx,this.gameSpeed):3===e?new u(canvas.width+65,canvas.height-E-65,this.ctx,this.gameSpeed):4===e?this.gameSpeed>=15?new l(canvas.width+180,canvas.height-E-150,this.ctx,this.gameSpeed):new g(canvas.width+70,canvas.height-E-45,this.ctx,this.gameSpeed):5===e||9===e?new v(canvas.width+146.8,canvas.height-E-192-t.height/2,this.ctx,this.gameSpeed):6===e?new m(canvas.width+120,canvas.height-E-51,this.ctx,this.gameSpeed):7===e?new w(canvas.width+101,canvas.height-E-99,this.ctx,this.gameSpeed):8===e?new k(canvas.width+86,canvas.height-E-96,this.ctx,this.gameSpeed):void 0}},{key:"randomInt",value:function(t,e){return Math.floor(t+Math.random()*(e-t+1))}},{key:"start",value:function(){var t;this.gameSound&&this.music.play(),this.gameSpeed=5,this.gameOver=!1,this.score=0,O=[],j=200,t=this.character?new r(100,0,110,100,this.ctx):new r(100,0,75,100,this.ctx),this.update(t)}},{key:"endGame",value:function(){this.ctx.fillText("GAME OVER",this.canvas.width/2,this.canvas.height/2),this.ctx.fillText("Click Restart",this.canvas.width/2,this.canvas.height/1.5);var t=document.getElementById("start");t.innerText="Restart",t.classList.remove("none"),this.music.pause(),this.music.currentTime=0}},{key:"update",value:function(t){if(this.gameOver)this.endGame();else{var e=document.getElementById("difficulty");this.gameSpeed<15?e.innerText="Difficulty: Easy":this.gameSpeed>15&&this.gameSpeed<20?e.innerText="Difficulty: Medium":this.gameSpeed>20&&this.gameSpeed<30?e.innerText="Difficulty: Hard":this.gameSpeed>30&&this.gameSpeed<40?e.innerText="Difficulty: Impossible":this.gameSpeed>40&&(e.innerText="Why???"),requestAnimationFrame(this.update.bind(this,t)),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),--j<=0&&(this.spawnObstacle(t),(j=200-10*this.gameSpeed)<50&&(j=50));for(var i=0;i<O.length;i++){var n=O[i];n.x+n.width<0&&O.splice(i,1),this.character?(n instanceof v&&t.x<n.x+n.width&&t.x+t.width-40>n.x&&t.y<n.y+n.height-45&&t.y+t.height>n.y||!(n instanceof v)&&t.x<n.x+n.width&&t.x+15+t.width-40>n.x&&t.y<n.y+15+n.height&&t.y+t.height>n.y)&&(this.gameOver=!0):(n instanceof v&&t.x<n.x+n.width&&t.x+t.width-10>n.x&&t.y<n.y+n.height-45&&t.y+t.height>n.y||!(n instanceof v)&&t.x<n.x+n.width&&t.x+t.width-10>n.x&&t.y<n.y+15+n.height&&t.y+t.height>n.y)&&(this.gameOver=!0),n.move(this.hitboxes)}t.animate(this.hitboxes,this.character,this.gameSound),this.score++,this.ctx.fillText("Score: ".concat(this.score),this.canvas.width/2,this.canvas.height/3+10),this.gameSpeed+=.005}}}])&&S(e.prototype,i),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),i=document.getElementById("scene"),n=i.getContext("2d"),r=new Image;r.src="./src/assets/Tiles/png/BG.png";var s=new Image;s.src="./src/assets/Tiles/png/Tile/platform.png";var h=new Image;h.src="./src/assets/Title/Desert-Runner-8-16-2021.png",t.height=window.innerHeight/1.8,t.width=window.innerWidth/2,i.height=window.innerHeight/1.8,i.width=window.innerWidth/2,r.onload=function(){n.drawImage(r,0,0,t.width,t.height)},s.onload=function(){n.drawImage(s,0,t.height-93,t.width,93)},h.onload=function(){n.drawImage(h,20,0,t.width-20,t.height/3)};var a={},o=document.getElementById("sound"),c=document.getElementById("volume"),u=!0;o.addEventListener("click",(function(t){u=!u,c.src=u?"src/assets/volume/volume-icon.png":"src/assets/volume/mute-icon.png"}));var f=document.getElementById("debug"),l=!1;f.addEventListener("click",(function(t){l=!l}));var p=document.getElementById("male"),g=document.getElementById("female"),d=0;p.addEventListener("click",(function(t){d=0})),g.addEventListener("click",(function(t){d=1})),window.addEventListener("keydown",(function(t){a[t.code]=!0})),window.addEventListener("keyup",(function(t){a[t.code]=!1}));var v=document.getElementById("start");v.addEventListener("click",(function(i){v.classList.add("none"),new T(e,t,l,d,u,s,r).start()}))}))}()}();
//# sourceMappingURL=main.js.map