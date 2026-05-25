'use client';
export const getLS=<T,>(k:string,d:T):T=>{if(typeof window==='undefined')return d;try{return JSON.parse(localStorage.getItem(k)||'null')??d}catch{return d}};
export const setLS=(k:string,v:unknown)=>{if(typeof window!=='undefined')localStorage.setItem(k,JSON.stringify(v));};
