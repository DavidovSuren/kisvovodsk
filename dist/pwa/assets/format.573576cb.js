function a(n,t,e){return e<=t?t:Math.min(e,Math.max(t,n))}function o(n,t=2,e="0"){if(n==null)return n;const r=""+n;return r.length>=t?r:new Array(t-r.length+1).join(e)+r}export{a as b,o as p};
