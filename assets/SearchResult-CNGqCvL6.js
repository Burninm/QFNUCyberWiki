import{k as W,u as X,l as M,m as Z,y as ee,t as se,n as te,p as A,q as _,v as t,x as le,w as ae,z as ie,R as T,A as re,B as ue,D as ne,E as oe,F as ce,G as I,H as P,J as ve,K as me,L as he,M as de,N as ye,O as pe,Q as ge,S as fe,T as N,U as Se,V as k}from"./app-vfoo24f5.js";const He=["/","/ArtDepartment/","/ArtDepartment/piano.html","/DormSanitation/Dorm_Fire_Escape_and_Fire_Safety_Guide.html","/DormSanitation/","/Net/AuditCriteria.html","/Net/","/NewMedia/Photoshop.html","/NewMedia/","/Publicity/Camera_Secrets_From_Beginner_to_Pro.html","/Publicity/","/Rights/","/Rights/ai-impact-on-education.html","/Sports/","/Sports/Spring_Training_Strategies_for_Athletics.html","/Study/","/Study/debate-competition.html","/404.html"],Re="SLIMSEARCH_QUERY_HISTORY",p=N(Re,[]),_e=()=>{const{queryHistoryCount:a}=k;return{enabled:a>0,queryHistories:p,addQueryHistory:u=>{p.value=Array.from(new Set([u,...p.value.slice(0,a-1)]))},removeQueryHistory:u=>{p.value=[...p.value.slice(0,u),...p.value.slice(u+1)]}}},L=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:$}=k,g=N(ke,[]),we=()=>({enabled:$>0,resultHistories:g,addResultHistory:r=>{{const u={link:L(r),display:r.display};"header"in r&&(u.header=r.header),g.value=[u,...g.value.slice(0,$-1)]}},removeResultHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}),Qe=a=>{const r=ve(),u=M(),w=me(),n=A(0),f=_(()=>n.value>0),v=he([]);return de(()=>{const{search:Q,terminate:h}=ye(),S=ge(d=>{const{resultsFilter:q=l=>l,querySplitter:y,suggestionsFilter:F,...i}=r.value;d?(n.value+=1,Q(d,u.value,i).then(l=>q(l,d,u.value,w.value)).then(l=>{n.value-=1,v.value=l}).catch(l=>{console.warn(l),n.value-=1,n.value||(v.value=[])})):v.value=[]},k.searchDelay-k.suggestDelay,{maxWait:5e3});pe([a,u],([d])=>S(d.join(" "))),fe(()=>{h()})}),{isSearching:f,results:v}};var xe=W({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:r}){const u=X(),w=M(),n=Z(ee),{addQueryHistory:f,queryHistories:v,removeQueryHistory:Q}=_e(),{resultHistories:h,addResultHistory:S,removeResultHistory:d}=we(),q=se(a,"queries"),{results:y,isSearching:F}=Qe(q),i=te({isQuery:!0,index:0}),l=A(0),m=A(0),b=_(()=>v.value.length>0||h.value.length>0),x=_(()=>y.value.length>0),C=_(()=>y.value[l.value]||null),U=()=>{const{isQuery:e,index:s}=i;s===0?(i.isQuery=!e,i.index=e?h.value.length-1:v.value.length-1):i.index=s-1},j=()=>{const{isQuery:e,index:s}=i;s===(e?v.value.length-1:h.value.length-1)?(i.isQuery=!e,i.index=0):i.index=s+1},O=()=>{l.value=l.value>0?l.value-1:y.value.length-1,m.value=C.value.contents.length-1},B=()=>{l.value=l.value<y.value.length-1?l.value+1:0,m.value=0},Y=()=>{m.value<C.value.contents.length-1?m.value+=1:B()},G=()=>{m.value>0?m.value-=1:O()},D=e=>e.map(s=>Se(s)?s:t(s[0],s[1])),V=e=>{if(e.type==="customField"){const s=oe[e.index]||"$content",[o,R=""]=ce(s)?s[w.value].split("$content"):s.split("$content");return e.display.map(c=>t("div",D([o,...c,R])))}return e.display.map(s=>t("div",D(s)))},H=()=>{l.value=0,m.value=0,r("updateQuery",""),r("close")},z=()=>t("ul",{class:"slimsearch-result-list"},t("li",{class:"slimsearch-result-list-item"},[t("div",{class:"slimsearch-result-title"},n.value.queryHistory),v.value.map((e,s)=>t("div",{class:["slimsearch-result-item",{active:i.isQuery&&i.index===s}],onClick:()=>{r("updateQuery",e)}},[t(I,{class:"slimsearch-result-type"}),t("div",{class:"slimsearch-result-content"},e),t("button",{class:"slimsearch-remove-icon",innerHTML:P,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(s)}})]))])),J=()=>t("ul",{class:"slimsearch-result-list"},t("li",{class:"slimsearch-result-list-item"},[t("div",{class:"slimsearch-result-title"},n.value.resultHistory),h.value.map((e,s)=>t(T,{to:e.link,class:["slimsearch-result-item",{active:!i.isQuery&&i.index===s}],onClick:()=>{H()}},()=>[t(I,{class:"slimsearch-result-type"}),t("div",{class:"slimsearch-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>D(o)).flat())]),t("button",{class:"slimsearch-remove-icon",innerHTML:P,onClick:o=>{o.preventDefault(),o.stopPropagation(),d(s)}})]))]));return le("keydown",e=>{if(a.isFocusing){if(x.value){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const s=C.value.contents[m.value];f(a.queries.join(" ")),S(s),u.push(L(s)),H()}}else if(e.key==="ArrowUp")U();else if(e.key==="ArrowDown")j();else if(e.key==="Enter"){const{index:s}=i;i.isQuery?(r("updateQuery",v.value[s]),e.preventDefault()):(u.push(h.value[s].link),H())}}}),ae([l,m],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["slimsearch-result-wrapper",{empty:a.queries.length?!x.value:!b.value}],id:"slimsearch-results"},a.queries.length?F.value?t(ie,{hint:n.value.searching}):x.value?t("ul",{class:"slimsearch-result-list"},y.value.map(({title:e,contents:s},o)=>{const R=l.value===o;return t("li",{class:["slimsearch-result-list-item",{active:R}]},[t("div",{class:"slimsearch-result-title"},e||n.value.defaultTitle),s.map((c,K)=>{const E=R&&m.value===K;return t(T,{to:L(c),class:["slimsearch-result-item",{active:E,"aria-selected":E}],onClick:()=>{f(a.queries.join(" ")),S(c),H()}},()=>[c.type==="text"?null:t(c.type==="title"?re:c.type==="heading"?ue:ne,{class:"slimsearch-result-type"}),t("div",{class:"slimsearch-result-content"},[c.type==="text"&&c.header?t("div",{class:"content-header"},c.header):null,t("div",V(c))])])})])})):n.value.emptyResult:b.value?[z(),J()]:n.value.emptyHistory)}});export{xe as default};
