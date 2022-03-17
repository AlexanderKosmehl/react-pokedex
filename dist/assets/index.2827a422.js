import{j as W,r as N,R as v,a as C}from"./vendor.4d89b089.js";const w=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}};w();const b="_appWrapper_k1p1y_1",I="_header_k1p1y_11",T="_headerTitle_k1p1y_23",P="_container_k1p1y_31";var _={appWrapper:b,header:I,headerTitle:T,container:P};const S="_detailsWrapper_1m0xs_1",$="_splitViewContainer_1m0xs_19",L="_entryWrapper_1m0xs_33",R="_imageWrapper_1m0xs_47",A="_detailImage_1m0xs_61",E="_title_1m0xs_71",H="_description_1m0xs_81",V="_typeWrapper_1m0xs_91",j="_type_1m0xs_91";var t={detailsWrapper:S,splitViewContainer:$,entryWrapper:L,imageWrapper:R,detailImage:A,title:E,description:H,typeWrapper:V,type:j};const r=W.exports.jsx,c=W.exports.jsxs;function U({pokemon:e}){return c("div",{className:t.detailsWrapper,children:[c("div",{className:t.splitViewContainer,children:[r("div",{className:t.imageWrapper,children:r("img",{className:t.detailImage,src:e==null?void 0:e.imgUrl})}),r("div",{className:t.entryWrapper,children:r("h1",{className:t.title,children:e==null?void 0:e.name})}),c("div",{className:t.entryWrapper,children:[r("h2",{className:t.title,children:"Description"}),r("p",{className:t.description,children:e==null?void 0:e.description})]})]}),c("div",{className:t.splitViewContainer,children:[r("div",{className:t.entryWrapper,children:r("h2",{className:t.title,children:"Info"})}),c("div",{className:t.entryWrapper,children:[r("h2",{className:t.title,children:"Types"}),r("div",{className:t.typeWrapper,children:e==null?void 0:e.types.map((n,a)=>r("h3",{className:`${t.type} ${n.toLowerCase()}`,children:n},a))})]}),c("div",{className:t.entryWrapper,children:[r("h2",{className:t.title,children:"Abilities"}),e==null?void 0:e.abilities.map((n,a)=>r("h3",{className:t.type,children:n},a))]}),c("div",{className:t.entryWrapper,children:[r("h2",{className:t.title,children:"Details"}),c("p",{className:t.description,children:["Height: ",e==null?void 0:e.height," cm"]}),c("p",{className:t.description,children:["Weight: ",e==null?void 0:e.weight," kg"]})]})]})]})}const M="_sidebarContainer_1i9b9_1",q="_scrollContainer_1i9b9_17",B="_sidebarHeader_1i9b9_29";var f={sidebarContainer:M,scrollContainer:q,sidebarHeader:B};function x(e){const[n,a]=N.exports.useState(null),d=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase();return N.exports.useEffect(()=>{async function s(){var g,y;const l=await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`),h=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${e}`),i=await l.json(),u=await h.json();a({id:i==null?void 0:i.id,name:d(i==null?void 0:i.name),imgUrl:i==null?void 0:i.sprites.front_default,types:i==null?void 0:i.types.map(p=>{var m;return d((m=p==null?void 0:p.type)==null?void 0:m.name)}),description:(g=u==null?void 0:u.flavor_text_entries[0])==null?void 0:g.flavor_text.replace(/\n|\f/g," "),height:Number(i==null?void 0:i.height)*10,weight:Number(i==null?void 0:i.weight)/10,abilities:(y=i==null?void 0:i.abilities)==null?void 0:y.map(p=>{var m;return d((m=p==null?void 0:p.ability)==null?void 0:m.name)})})}s()},[e]),n}const F="_tileContainer_16d16_1",K="_selected_16d16_25",O="_imageWrapper_16d16_33",z="_pokemonImage_16d16_47",G="_textWrapper_16d16_55",J="_tileText_16d16_69";var o={tileContainer:F,selected:K,imageWrapper:O,pokemonImage:z,textWrapper:G,tileText:J};function Q({id:e,isSelected:n}){const a=x(e);return c("div",{className:`${o.tileContainer} ${n?o.selected:""}`,children:[r("div",{className:o.imageWrapper,children:r("img",{className:o.pokemonImage,src:a==null?void 0:a.imgUrl})}),c("div",{className:o.textWrapper,children:[c("h2",{className:o.tileText,children:["No. ",String(e).padStart(3,"0")]}),r("h2",{className:o.tileText,children:a===null?"Loading...":a.name})]})]})}function X({selectedPokemonID:e,setSelectedPokemonID:n}){const a=new Array(151).fill(0).map((d,s)=>s+1);return c("div",{className:f.sidebarContainer,children:[r("h1",{className:f.sidebarHeader,children:"Pok\xE9dex Entries"}),r("div",{className:f.scrollContainer,children:a.map(d=>r("div",{onClick:()=>n(d),children:r(Q,{id:d,isSelected:d===e})},d))})]})}function Y(){const[e,n]=N.exports.useState(1),a=x(e);return c("div",{className:_.appWrapper,children:[r("div",{className:_.header,children:r("h1",{className:_.headerTitle,children:"Pokedex"})}),c("div",{className:_.container,children:[r(U,{pokemon:a}),r(X,{selectedPokemonID:e,setSelectedPokemonID:n})]})]})}v.render(r(C.StrictMode,{children:r(Y,{})}),document.getElementById("root"));