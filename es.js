var uwire=function(e){"use strict";const{indexOf:t,slice:n}=[];return e.diffable=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,e.persistent=e=>{const{childNodes:t}=e,{length:r}=t;if(1===r)return t[0];const l=n.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:l[0],lastChild:l[r-1],valueOf(){if(t.length!==r){let t=0;for(;t<r;)e.appendChild(l[t++])}return e}}},e}({});