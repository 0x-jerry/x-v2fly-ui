import{d as h,a as w,u as x,r as b,o as V,w as C,c as k,b as d,_ as S,e as N,f as c,g as a,h as u,i as y,j as T,k as L,l as $,m as B}from"./vendor.053f07d9.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};O();const p=new h.exports.Socket("ws://127.0.0.1:7999"),i=new h.exports.ProtocolClient;i.setSender(s=>p.send(s));p.on("message",s=>i.resolve(s));function P(s){i.send("start-v2fly",{b64:s})}function j(){i.send("stop-v2fly")}function A(){return i.send("get-v2fly-conf")}const I={class:"size"},M={flex:"~",justify:"end",items:"center"},U=a("span",{m:"x-2"},"Port: ",-1),z=a("hr",{m:"y-2"},null,-1),E={flex:"~ col"},q=y(" Restart "),F=y(" Stop "),K=w({setup(s){x(t=>({"20dad486":r.w,"20dad477":r.h}));const r={w:"800px",h:"600px"},o=b({port:"7999",b64:""});V(async()=>{const t=await A();o.b64=t.b64}),C(()=>{p.url=`ws://127.0.0.1:${o.port}`});function l(){j()}function e(){P(o.b64)}return(t,n)=>{const _=T,m=L,v=$,g=S;return N(),k(g,{class:"app",w:"min-content",m:"auto"},{default:d(()=>[c(v,{title:"V2fly UI"},{default:d(()=>[a("div",I,[a("div",M,[U,c(_,{placeholder:"port",type:"number",modelValue:u(o).port,"onUpdate:modelValue":n[0]||(n[0]=f=>u(o).port=f),disabled:"",m:"x-2"},null,8,["modelValue"])]),z,a("div",E,[c(_,{placeholder:"VMess url",modelValue:u(o).b64,"onUpdate:modelValue":n[1]||(n[1]=f=>u(o).b64=f)},null,8,["modelValue"]),c(m,{m:"t-2",onClick:e},{default:d(()=>[q]),_:1}),c(m,{m:"t-2",onClick:l},{default:d(()=>[F]),_:1})])])]),_:1})]),_:1})}}});B(K).mount("#app");
