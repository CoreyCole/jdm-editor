var m=Object.create,v=Object.defineProperty,j=Object.getOwnPropertyDescriptor,A=Object.getOwnPropertyNames,d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,P=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),S=(r,e,i,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of A(e))!x.call(r,a)&&a!==i&&v(r,a,{get:()=>e[a],enumerable:!(u=j(e,a))||u.enumerable});return r},$=(r,e,i)=>(i=r!=null?m(d(r)):{},S(e||!r||!r.__esModule?v(i,"default",{value:r,enumerable:!0}):i,r)),E=P(r=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isEqual=function(){var e=Object.prototype.toString,i=Object.getPrototypeOf,u=Object.getOwnPropertySymbols?function(a){return Object.keys(a).concat(Object.getOwnPropertySymbols(a))}:Object.keys;return function(a,c){return function f(t,n,o){var y,p,l,s=e.call(t),h=e.call(n);if(t===n)return!0;if(t==null||n==null)return!1;if(o.indexOf(t)>-1&&o.indexOf(n)>-1)return!0;if(o.push(t,n),s!=h||(y=u(t),p=u(n),y.length!=p.length||y.some(function(O){return!f(t[O],n[O],o)})))return!1;switch(s.slice(8,-1)){case"Symbol":return t.valueOf()==n.valueOf();case"Date":case"Number":return+t==+n||+t!=+t&&+n!=+n;case"RegExp":case"Function":case"String":case"Boolean":return""+t==""+n;case"Set":case"Map":y=t.entries(),p=n.entries();do if(!f((l=y.next()).value,p.next().value,o))return!1;while(!l.done);return!0;case"ArrayBuffer":t=new Uint8Array(t),n=new Uint8Array(n);case"DataView":t=new Uint8Array(t.buffer),n=new Uint8Array(n.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(t.length!=n.length)return!1;for(l=0;l<t.length;l++)if((l in t||l in n)&&(l in t!=l in n||!f(t[l],n[l],o)))return!1;return!0;case"Object":return f(i(t),i(n),o);default:return!1}}(a,c,[])}}()}),b=$(E()),w=r=>r.map(e=>typeof e<"u").filter(Boolean).length,U=(r,e)=>{let{exists:i,eq:u,neq:a,truthy:c}=r;if(w([i,u,a,c])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:i,eq:u,neq:a})}`);if(typeof u<"u")return(0,b.isEqual)(e,u);if(typeof a<"u")return!(0,b.isEqual)(e,a);if(typeof i<"u"){let f=typeof e<"u";return i?f:!f}return typeof c>"u"||c?!!e:!e},I=(r,e,i)=>{if(!r.if)return!0;let{arg:u,global:a}=r.if;if(w([u,a])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:u,global:a})}`);let c=u?e[u]:i[a];return U(r.if,c)},q=r=>r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),g=(r,e)=>{let i=q(r);if(i==="")throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);return i},N=(r,e)=>`${g(r,"kind")}${e?`--${g(e,"name")}`:""}`;export{N,I as O,q as k};