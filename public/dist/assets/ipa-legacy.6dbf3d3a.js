!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,a=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.0750148c.js","./File-legacy.7eb28ba5.js","./icon-legacy.e97b9f2b.js","./index-legacy.1b5a1ff3.js","./index-legacy.35d1bb8a.js","./Layout-legacy.5d7e56e5.js","./index-legacy.bed995a3.js","./FolderTree-legacy.718aea82.js","./index-legacy.19a27fc4.js"],(function(e){"use strict";var t,r,i,a,o,c,l,u,f,s,d;return{setters:[function(n){t=n.a,r=n.k,i=n.a4,a=n.e,o=n.ab,c=n.B,l=n.d3,u=n.d4,f=n.a0,s=n.d2},function(n){d=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),y=n(r(!1),2),g=y[0],m=y[1],b=n(r(!1),2),p=b[0],h=b[1],j=i().currentObjLink;return a(d,{get children(){return a(o,{spacing:"$2",get children(){return[a(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(l,"/i/").concat(u(encodeURIComponent(f.raw_url)+"/"+s(encodeURIComponent(f.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),a(c,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){h(!0)},get children(){return e("home.preview.".concat(p()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
