import{g as L,m as oe,i as se,r as ie,k as ae,P as le,l as ce,n as de,C as _,c as E,p as pe,u as F,q as ue,s as me,h as ge,v as fe,w as ve,x as xe,o as ye,A as K,j as d,T as A}from"./index-ub0bM9Eu.js";import{r as s,R as q}from"./index-Dl6G-zuu.js";import{A as be,E as U,a as he,p as S,e as T,u as Ce,b as we,I as Oe,P as Pe,H as Ee,D as je}from"./useDrop-CVOrror2.js";import{c as z,C as $e}from"./ce-Dde21WR3.js";import{_ as X}from"./assertThisInitialized-B7W8eO4F.js";import"./index-Dpv8hMKE.js";import{B as M,c as ke}from"./button-COiBtWNl.js";const P=e=>e?typeof e=="function"?e():e:null,Se=e=>{const{componentCls:n,popoverColor:o,titleMinWidth:t,fontWeightStrong:r,innerPadding:i,boxShadowSecondary:a,colorTextHeading:l,borderRadiusLG:p,zIndexPopup:u,titleMarginBottom:m,colorBgElevated:g,popoverBg:f,titleBorderBottom:w,innerContentPadding:h,titlePadding:x}=e;return[{[n]:Object.assign(Object.assign({},ie(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:u,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":g,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:f,backgroundClip:"padding-box",borderRadius:p,boxShadow:a,padding:i},[`${n}-title`]:{minWidth:t,marginBottom:m,color:l,fontWeight:r,borderBottom:w,padding:x},[`${n}-inner-content`]:{color:o,padding:h}})},ae(e,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},_e=e=>{const{componentCls:n}=e;return{[n]:le.map(o=>{const t=e[`${o}6`];return{[`&${n}-${o}`]:{"--antd-arrow-background-color":t,[`${n}-inner`]:{backgroundColor:t},[`${n}-arrow`]:{background:"transparent"}}}})}},Re=e=>{const{lineWidth:n,controlHeight:o,fontHeight:t,padding:r,wireframe:i,zIndexPopupBase:a,borderRadiusLG:l,marginXS:p,lineType:u,colorSplit:m,paddingSM:g}=e,f=o-t,w=f/2,h=f/2-n,x=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:a+30},ce(e)),de({contentRadius:l,limitVerticalRadius:!0})),{innerPadding:i?0:12,titleMarginBottom:i?0:p,titlePadding:i?`${w}px ${x}px ${h}px`:0,titleBorderBottom:i?`${n}px ${u} ${m}`:"none",innerContentPadding:i?`${g}px ${x}px`:0})},G=L("Popover",e=>{const{colorBgElevated:n,colorText:o}=e,t=oe(e,{popoverBg:n,popoverColor:o});return[Se(t),_e(t),se(t,"zoom-big")]},Re,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var Ne=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const Te=(e,n,o)=>!n&&!o?null:s.createElement(s.Fragment,null,n&&s.createElement("div",{className:`${e}-title`},P(n)),s.createElement("div",{className:`${e}-inner-content`},P(o))),Ie=e=>{const{hashId:n,prefixCls:o,className:t,style:r,placement:i="top",title:a,content:l,children:p}=e;return s.createElement("div",{className:E(n,o,`${o}-pure`,`${o}-placement-${i}`,t),style:r},s.createElement("div",{className:`${o}-arrow`}),s.createElement(pe,Object.assign({},e,{className:n,prefixCls:o}),p||Te(o,a,l)))},Be=e=>{const{prefixCls:n,className:o}=e,t=Ne(e,["prefixCls","className"]),{getPrefixCls:r}=s.useContext(_),i=r("popover",n),[a,l,p]=G(i);return a(s.createElement(Ie,Object.assign({},t,{prefixCls:i,hashId:l,className:E(o,p)})))},Y=Be;var De=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const ze=e=>{let{title:n,content:o,prefixCls:t}=e;return s.createElement(s.Fragment,null,n&&s.createElement("div",{className:`${t}-title`},P(n)),s.createElement("div",{className:`${t}-inner-content`},P(o)))},qe=s.forwardRef((e,n)=>{var o;const{prefixCls:t,title:r,content:i,overlayClassName:a,placement:l="top",trigger:p="hover",children:u,mouseEnterDelay:m=.1,mouseLeaveDelay:g=.1,onOpenChange:f,overlayStyle:w={}}=e,h=De(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:x}=s.useContext(_),c=x("popover",t),[y,O,j]=G(c),$=x(),I=E(a,O,j),[k,B]=F(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible}),R=(C,N)=>{B(C,!0),f==null||f(C,N)},v=C=>{C.keyCode===fe.ESC&&R(!1,C)},b=C=>{R(C)};return y(s.createElement(ue,Object.assign({placement:l,trigger:p,mouseEnterDelay:m,mouseLeaveDelay:g,overlayStyle:w},h,{prefixCls:c,overlayClassName:I,ref:n,open:k,onOpenChange:b,overlay:r||i?s.createElement(ze,{prefixCls:c,title:r,content:i}):null,transitionName:me($,"zoom-big",h.transitionName),"data-popover-inject":!0}),ge(u,{onKeyDown:C=>{var N,D;s.isValidElement(u)&&((D=u==null?void 0:(N=u.props).onKeyDown)===null||D===void 0||D.call(N,C)),v(C)}})))}),Z=qe;Z._InternalPanelDoNotUseOrYouWillBeFired=Y;const Me=Z,We=e=>{const{componentCls:n,iconCls:o,antCls:t,zIndexPopup:r,colorText:i,colorWarning:a,marginXXS:l,marginXS:p,fontSize:u,fontWeightStrong:m,colorTextHeading:g}=e;return{[n]:{zIndex:r,[`&${t}-popover`]:{fontSize:u},[`${n}-message`]:{marginBottom:p,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${o}`]:{color:a,fontSize:u,lineHeight:1,marginInlineEnd:p},[`${n}-title`]:{fontWeight:m,color:g,"&:only-child":{fontWeight:"normal"}},[`${n}-description`]:{marginTop:l,color:i}},[`${n}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:p}}}}},He=e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}},J=L("Popconfirm",e=>We(e),He,{resetStyle:!1});var Ae=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const Q=e=>{const{prefixCls:n,okButtonProps:o,cancelButtonProps:t,title:r,description:i,cancelText:a,okText:l,okType:p="primary",icon:u=s.createElement(U,null),showCancel:m=!0,close:g,onConfirm:f,onCancel:w,onPopupClick:h}=e,{getPrefixCls:x}=s.useContext(_),[c]=ve("Popconfirm",xe.Popconfirm),y=P(r),O=P(i);return s.createElement("div",{className:`${n}-inner-content`,onClick:h},s.createElement("div",{className:`${n}-message`},u&&s.createElement("span",{className:`${n}-message-icon`},u),s.createElement("div",{className:`${n}-message-text`},y&&s.createElement("div",{className:E(`${n}-title`)},y),O&&s.createElement("div",{className:`${n}-description`},O))),s.createElement("div",{className:`${n}-buttons`},m&&s.createElement(M,Object.assign({onClick:w,size:"small"},t),a||(c==null?void 0:c.cancelText)),s.createElement(be,{buttonProps:Object.assign(Object.assign({size:"small"},ke(p)),o),actionFn:f,close:g,prefixCls:x("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},l||(c==null?void 0:c.okText))))},Ve=e=>{const{prefixCls:n,placement:o,className:t,style:r}=e,i=Ae(e,["prefixCls","placement","className","style"]),{getPrefixCls:a}=s.useContext(_),l=a("popconfirm",n),[p]=J(l);return p(s.createElement(Y,{placement:o,className:E(l,t),style:r,content:s.createElement(Q,Object.assign({prefixCls:l},i))}))},Le=Ve;var Fe=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const Ke=s.forwardRef((e,n)=>{var o,t;const{prefixCls:r,placement:i="top",trigger:a="click",okType:l="primary",icon:p=s.createElement(U,null),children:u,overlayClassName:m,onOpenChange:g,onVisibleChange:f}=e,w=Fe(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:h}=s.useContext(_),[x,c]=F(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),y=(v,b)=>{c(v,!0),f==null||f(v),g==null||g(v,b)},O=v=>{y(!1,v)},j=v=>{var b;return(b=e.onConfirm)===null||b===void 0?void 0:b.call(void 0,v)},$=v=>{var b;y(!1,v),(b=e.onCancel)===null||b===void 0||b.call(void 0,v)},I=(v,b)=>{const{disabled:C=!1}=e;C||y(v,b)},k=h("popconfirm",r),B=E(k,m),[R]=J(k);return R(s.createElement(Me,Object.assign({},ye(w,["title"]),{trigger:a,placement:i,onOpenChange:I,open:x,ref:n,overlayClassName:B,content:s.createElement(Q,Object.assign({okType:l,icon:p},e,{prefixCls:k,close:O,onConfirm:j,onCancel:$})),"data-popover-inject":!0}),u))}),ee=Ke;ee._InternalPanelDoNotUseOrYouWillBeFired=Le;const Ue=ee;var Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};const Ge=Xe;var Ye=function(n,o){return s.createElement(K,X({},n,{ref:o,icon:Ge}))},Ze=s.forwardRef(Ye);const Je=Ze;var Qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"};const et=Qe;var tt=function(n,o){return s.createElement(K,X({},n,{ref:o,icon:et}))},nt=s.forwardRef(tt);const rt=nt,W=q.createContext({}),V=(e={})=>({id:crypto.randomUUID(),key:"",value:"",...e}),te=({children:e})=>{const n=s.useMemo(()=>he(o=>({configurable:!0,disabled:!1,addRowAbove:(t=0)=>{o(S(r=>(r.expressions.splice(t,0,V()),r)))},addRowBelow:t=>{o(S(r=>(t=t??r.expressions.length-1,r.expressions.splice(t+1,0,V()),r)))},expressions:[],setExpressions:t=>{o({expressions:t})},swapRows:(t,r)=>{o(S(i=>{const[a]=i.expressions.splice(t,1);return i.expressions.splice(r,0,a),i}))},removeRow:t=>{o(S(r=>(r.expressions.splice(t,1),r)))},updateRow:(t,r)=>{o(S(i=>(i.expressions[t]={...i.expressions[t],...r},i)))}})),[]);return d.jsx(W.Provider,{value:n,children:e})};function H(e,n=T){return q.useContext(W)(e,n)}const ot=()=>q.useContext(W);te.__docgenInfo={description:"",methods:[],displayName:"ExpressionStoreProvider"};const st=({value:e,onChange:n,defaultValue:o=[],configurable:t=!0,disabled:r=!1})=>{const i=s.useRef(!1),a=ot(),{setExpressions:l,expressions:p}=H(({setExpressions:u,expressions:m})=>({setExpressions:u,expressions:m}));return s.useEffect(()=>{a.setState({configurable:t,disabled:r})},[t,r]),s.useEffect(()=>{if(n)return a.subscribe((u,m)=>{T(u.expressions,m.expressions)||n==null||n(u.expressions)})},[a,n]),s.useEffect(()=>{i.current&&e&&!T(e,p)&&l(e)},[e]),s.useEffect(()=>{e?l(e):o&&l(o),i.current=!0},[]),null},ne=({expression:e,index:n})=>{const o=s.useRef(null),{updateRow:t,removeRow:r,swapRows:i,disabled:a,configurable:l}=H(({updateRow:c,removeRow:y,swapRows:O,disabled:j,configurable:$})=>({updateRow:c,removeRow:y,swapRows:O,disabled:j,configurable:$})),p=c=>{t(n,c)},u=()=>{r(n)},[{isDropping:m,direction:g},f]=Ce({accept:"row",collect:c=>{var y;return{isDropping:c.isOver({shallow:!0}),direction:(((y=c.getDifferenceFromInitialOffset())==null?void 0:y.y)||0)>0?"down":"up"}},drop:c=>{i(c.index,n)}}),[{isDragging:w},h,x]=we({canDrag:l&&!a,item:()=>({...e,index:n}),type:"row",collect:c=>({isDragging:c.isDragging()})});return x(f(o)),d.jsxs("div",{ref:o,className:z("expression-list-item","expression-list__item",m&&g==="down"&&"dropping-down",m&&g==="up"&&"dropping-up"),style:{opacity:w?.5:1},children:[d.jsx("div",{ref:h,className:"expression-list-item__drag","aria-disabled":!l||a,children:d.jsx(rt,{})}),d.jsx("div",{children:d.jsx(Oe,{placeholder:"Key",disabled:!l||a,value:e==null?void 0:e.key,onChange:c=>p({key:c.target.value}),autoComplete:"off"})}),d.jsx("div",{children:d.jsx($e,{placeholder:"Expression",maxRows:6,disabled:a,value:e==null?void 0:e.value,onChange:c=>p({value:c})})}),d.jsx("div",{children:d.jsx(Ue,{title:"Remove selected row?",okText:"Remove",onConfirm:u,disabled:!l||a,children:d.jsx(M,{type:"text",icon:d.jsx(Je,{}),danger:!0,disabled:!l||a})})})]})};ne.__docgenInfo={description:"",methods:[],displayName:"ExpressionItem",props:{expression:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  key: string;
  value: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const re=({})=>{const{expressions:e,addRowBelow:n,configurable:o,disabled:t}=H(({expressions:r,addRowBelow:i,configurable:a,disabled:l})=>({expressions:r,addRowBelow:i,configurable:a,disabled:l}),T);return d.jsxs("div",{className:"expression-list",children:[d.jsxs("div",{className:z("expression-list__item","expression-list__item--heading"),children:[d.jsx("div",{}),d.jsx(A.Text,{type:"secondary",children:"Key"}),d.jsx(A.Text,{type:"secondary",children:"Expression"}),d.jsx("div",{})]}),(e||[]).map((r,i)=>d.jsx(ne,{expression:r,index:i},r.id)),o&&!t&&d.jsx("div",{className:z("expression-list__item"),children:d.jsx(M,{className:"expression-list__button",icon:d.jsx(Pe,{}),type:"dashed",onClick:()=>n(),children:"Add row"})})]})};re.__docgenInfo={description:"",methods:[],displayName:"ExpressionList"};const it=({manager:e,...n})=>{const[o,t]=s.useState(!1),r=s.useRef(null);s.useEffect(()=>{t(!0)},[]);const i=s.useMemo(()=>e?{manager:e}:{backend:Ee,options:{rootElement:r.current}},[r.current,e]);return d.jsx("div",{ref:r,children:r.current&&d.jsx(je,{...i,children:d.jsxs(te,{children:[d.jsx(st,{...n}),d.jsx(re,{})]})})})};it.__docgenInfo={description:"",methods:[],displayName:"Expression",props:{manager:{required:!1,tsType:{name:"DragDropManager"},description:""},configurable:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  key: string;
  value: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ExpressionEntry[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  key: string;
  value: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ExpressionEntry[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ExpressionEntry[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  key: string;
  value: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ExpressionEntry[]"},name:"value"}],return:{name:"void"}}},description:""}}};export{Je as D,it as E,Me as P};