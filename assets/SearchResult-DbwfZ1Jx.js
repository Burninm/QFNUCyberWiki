import{j as W,u as X,k as U,l as Z,y as ee,t as se,m as le,n as A,p as S,q as l,v as te,w as ae,x as ie,R as b,z as ue,A as re,B as ne,D as ce,E as oe,F,G as j,H as ve,J as de,K as he,L as me,M as ye,N as pe,O as ge,Q as fe,S as O,T as He,U as Q}from"./app-B4OOxfHH.js";const Re=["/","/Net/AuditCriteria.html","/Net/","/Study/","/Study/debate-competition.html","/404.html"],ke="SLIMSEARCH_QUERY_HISTORY",p=O(ke,[]),Se=()=>{const{queryHistoryCount:a}=Q;return{enabled:a>0,queryHistories:p,addQueryHistory:r=>{p.value=Array.from(new Set([r,...p.value.slice(0,a-1)]))},removeQueryHistory:r=>{p.value=[...p.value.slice(0,r),...p.value.slice(r+1)]}}},E=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),Qe="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:M}=Q,g=O(Qe,[]),qe=()=>({enabled:M>0,resultHistories:g,addResultHistory:u=>{{const r={link:E(u),display:u.display};"header"in u&&(r.header=u.header),g.value=[r,...g.value.slice(0,M-1)]}},removeResultHistory:u=>{g.value=[...g.value.slice(0,u),...g.value.slice(u+1)]}}),we=a=>{const u=ve(),r=U(),q=de(),n=A(0),f=S(()=>n.value>0),v=he([]);return me(()=>{const{search:w,terminate:h}=ye(),H=ge(m=>{const{resultsFilter:x=t=>t,querySplitter:y,suggestionsFilter:I,...i}=u.value;m?(n.value+=1,w(m,r.value,i).then(t=>x(t,m,r.value,q.value)).then(t=>{n.value-=1,v.value=t}).catch(t=>{console.warn(t),n.value-=1,n.value||(v.value=[])})):v.value=[]},Q.searchDelay-Q.suggestDelay,{maxWait:5e3});pe([a,r],([m])=>H(m.join(" "))),fe(()=>{h()})}),{isSearching:f,results:v}};var Ce=W({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:u}){const r=X(),q=U(),n=Z(ee),{addQueryHistory:f,queryHistories:v,removeQueryHistory:w}=Se(),{resultHistories:h,addResultHistory:H,removeResultHistory:m}=qe(),x=se(a,"queries"),{results:y,isSearching:I}=we(x),i=le({isQuery:!0,index:0}),t=A(0),d=A(0),T=S(()=>v.value.length>0||h.value.length>0),C=S(()=>y.value.length>0),L=S(()=>y.value[t.value]||null),P=()=>{const{isQuery:e,index:s}=i;s===0?(i.isQuery=!e,i.index=e?h.value.length-1:v.value.length-1):i.index=s-1},_=()=>{const{isQuery:e,index:s}=i;s===(e?v.value.length-1:h.value.length-1)?(i.isQuery=!e,i.index=0):i.index=s+1},N=()=>{t.value=t.value>0?t.value-1:y.value.length-1,d.value=L.value.contents.length-1},Y=()=>{t.value=t.value<y.value.length-1?t.value+1:0,d.value=0},B=()=>{d.value<L.value.contents.length-1?d.value+=1:Y()},z=()=>{d.value>0?d.value-=1:N()},D=e=>e.map(s=>He(s)?s:l(s[0],s[1])),G=e=>{if(e.type==="customField"){const s=ce[e.index]||"$content",[c,k=""]=oe(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(o=>l("div",D([c,...o,k])))}return e.display.map(s=>l("div",D(s)))},R=()=>{t.value=0,d.value=0,u("updateQuery",""),u("close")},J=()=>l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},n.value.queryHistory),v.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:i.isQuery&&i.index===s}],onClick:()=>{u("updateQuery",e)}},[l(F,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:j,onClick:c=>{c.preventDefault(),c.stopPropagation(),w(s)}})]))])),K=()=>l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},n.value.resultHistory),h.value.map((e,s)=>l(b,{to:e.link,class:["slimsearch-result-item",{active:!i.isQuery&&i.index===s}],onClick:()=>{R()}},()=>[l(F,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>D(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:j,onClick:c=>{c.preventDefault(),c.stopPropagation(),m(s)}})]))]));return te("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")B();else if(e.key==="Enter"){const s=L.value.contents[d.value];f(a.queries.join(" ")),H(s),r.push(E(s)),R()}}else if(e.key==="ArrowUp")P();else if(e.key==="ArrowDown")_();else if(e.key==="Enter"){const{index:s}=i;i.isQuery?(u("updateQuery",v.value[s]),e.preventDefault()):(r.push(h.value[s].link),R())}}}),ae([t,d],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:a.queries.length?!C.value:!T.value}],id:"slimsearch-results"},a.queries.length?I.value?l(ie,{hint:n.value.searching}):C.value?l("ul",{class:"slimsearch-result-list"},y.value.map(({title:e,contents:s},c)=>{const k=t.value===c;return l("li",{class:["slimsearch-result-list-item",{active:k}]},[l("div",{class:"slimsearch-result-title"},e||n.value.defaultTitle),s.map((o,V)=>{const $=k&&d.value===V;return l(b,{to:E(o),class:["slimsearch-result-item",{active:$,"aria-selected":$}],onClick:()=>{f(a.queries.join(" ")),H(o),R()}},()=>[o.type==="text"?null:l(o.type==="title"?ue:o.type==="heading"?re:ne,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[o.type==="text"&&o.header?l("div",{class:"content-header"},o.header):null,l("div",G(o))])])})])})):n.value.emptyResult:T.value?[J(),K()]:n.value.emptyHistory)}});export{Ce as default};
