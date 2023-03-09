import{_ as s,c as a,o as n,a as e}from"./app.96a69404.js";const _=JSON.parse('{"title":"工具函数","description":"","frontmatter":{},"headers":[],"relativePath":"articles/utils.md","lastUpdated":1677750997000}'),t={name:"articles/utils.md"},l=e(`<h1 id="工具函数" tabindex="-1">工具函数 <a class="header-anchor" href="#工具函数" aria-hidden="true">#</a></h1><hr><h4 id="检测是否是空对象" tabindex="-1">检测是否是空对象 <a class="header-anchor" href="#检测是否是空对象" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let isEmptyObject = function isEmptyObject(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let keys = Object.keys(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof Symbol !== &quot;undefined&quot;) keys = keys.concat(Object.getOwnPropertySymbols(obj));</span></span>
<span class="line"><span style="color:#A6ACCD;">  return keys.length === 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = Symbol()</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [b]: &#39;asd&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let keys = Object.keys(obj); //[&#39;a&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>symbol作为键名时，不被常规方法遍历出来</p></div>`,5),p=[l];function o(c,i,r,d,y,C){return n(),a("div",null,p)}const b=s(t,[["render",o]]);export{_ as __pageData,b as default};
