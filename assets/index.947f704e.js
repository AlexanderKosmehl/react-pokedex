import{j as W,r as N,R as x,a as C}from"./vendor.4d89b089.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}};q();const w="_appWrapper_k1p1y_1",b="_header_k1p1y_11",I="_headerTitle_k1p1y_23",j="_container_k1p1y_31";var _={appWrapper:w,header:b,headerTitle:I,container:j};const T="_detailsWrapper_jtqrk_1",P="_splitViewContainer_jtqrk_19",S="_entryWrapper_jtqrk_33",$="_imageWrapper_jtqrk_47",L="_detailImage_jtqrk_65",R="_title_jtqrk_77",A="_description_jtqrk_87",E="_typeWrapper_jtqrk_97",H="_type_jtqrk_97";var t={detailsWrapper:T,splitViewContainer:P,entryWrapper:S,imageWrapper:$,detailImage:L,title:R,description:A,typeWrapper:E,type:H};const r=W.exports.jsx,l=W.exports.jsxs;function V({pokemon:e}){return l("div",{className:t.detailsWrapper,children:[l("div",{className:t.splitViewContainer,children:[r("div",{className:t.imageWrapper,children:r("img",{className:t.detailImage,src:e==null?void 0:e.imgUrl,alt:e==null?void 0:e.name})}),r("div",{className:t.entryWrapper,children:r("h1",{className:t.title,children:e==null?void 0:e.name})}),l("div",{className:t.entryWrapper,children:[r("h2",{className:t.title,children:"Description"}),r("p",{className:t.description,children:e==null?void 0:e.description})]})]}),l("div",{className:t.splitViewContainer,children:[r("div",{className:t.entryWrapper,children:r("h2",{className:t.title,children:"Info"})}),l("div",{className:t.entryWrapper,children:[r("h2",{className:t.title,children:"Types"}),r("div",{className:t.typeWrapper,children:e==null?void 0:e.types.map((n,a)=>r("h3",{className:`${t.type} ${n.toLowerCase()}`,children:n},a))})]}),l("div",{className:t.entryWrapper,children:[r("h2",{className:t.title,children:"Abilities"}),e==null?void 0:e.abilities.map((n,a)=>r("h3",{className:t.type,children:n},a))]}),l("div",{className:t.entryWrapper,children:[r("h2",{className:t.title,children:"Details"}),l("p",{className:t.description,children:["Height: ",e==null?void 0:e.height," cm"]}),l("p",{className:t.description,children:["Weight: ",e==null?void 0:e.weight," kg"]})]})]})]})}const U="_sidebarContainer_1i9b9_1",M="_scrollContainer_1i9b9_17",B="_sidebarHeader_1i9b9_29";var f={sidebarContainer:U,scrollContainer:M,sidebarHeader:B};function v(e){const[n,a]=N.exports.useState(null),d=i=>i.charAt(0).toUpperCase()+i.slice(1).toLowerCase();return N.exports.useEffect(()=>{async function i(){var g,y;const c=await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`),h=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${e}`),s=await c.json(),u=await h.json();a({id:s==null?void 0:s.id,name:d(s==null?void 0:s.name),imgUrl:s==null?void 0:s.sprites.front_default,types:s==null?void 0:s.types.map(p=>{var m;return d((m=p==null?void 0:p.type)==null?void 0:m.name)}),description:(g=u==null?void 0:u.flavor_text_entries[0])==null?void 0:g.flavor_text.replace(/\n|\f/g," "),height:Number(s==null?void 0:s.height)*10,weight:Number(s==null?void 0:s.weight)/10,abilities:(y=s==null?void 0:s.abilities)==null?void 0:y.map(p=>{var m;return d((m=p==null?void 0:p.ability)==null?void 0:m.name)})})}i()},[e]),n}const F="_tileContainer_lqm46_1",K="_selected_lqm46_25",O="_imageWrapper_lqm46_33",z="_pokemonImage_lqm46_51",G="_textWrapper_lqm46_61",J="_tileText_lqm46_75";var o={tileContainer:F,selected:K,imageWrapper:O,pokemonImage:z,textWrapper:G,tileText:J};function Q({id:e,isSelected:n}){const a=v(e);return l("div",{className:`${o.tileContainer} ${n?o.selected:""}`,children:[r("div",{className:o.imageWrapper,children:r("img",{className:o.pokemonImage,src:a==null?void 0:a.imgUrl,alt:a==null?void 0:a.name})}),l("div",{className:o.textWrapper,children:[l("h2",{className:o.tileText,children:["No. ",String(e).padStart(3,"0")]}),r("h2",{className:o.tileText,children:a===null?"Loading...":a.name})]})]})}function X({selectedPokemonID:e,setSelectedPokemonID:n}){const a=new Array(151).fill(0).map((d,i)=>i+1);return l("div",{className:f.sidebarContainer,children:[r("h1",{className:f.sidebarHeader,children:"Pok\xE9dex Entries"}),r("div",{className:f.scrollContainer,children:a.map(d=>r("div",{onClick:()=>n(d),children:r(Q,{id:d,isSelected:d===e})},d))})]})}function Y(){const[e,n]=N.exports.useState(1),a=v(e);return l("div",{className:_.appWrapper,children:[r("div",{className:_.header,children:r("h1",{className:_.headerTitle,children:"Pokedex"})}),l("div",{className:_.container,children:[r(V,{pokemon:a}),r(X,{selectedPokemonID:e,setSelectedPokemonID:n})]})]})}x.render(r(C.StrictMode,{children:r(Y,{})}),document.getElementById("root"));
