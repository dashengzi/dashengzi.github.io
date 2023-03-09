import{_ as s,c as n,o as a,a as l}from"./app.96a69404.js";const h=JSON.parse('{"title":"函数","description":"","frontmatter":{},"headers":[],"relativePath":"articles/this.md","lastUpdated":1678341142000}'),p={name:"articles/this.md"},e=l(`<h1 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-hidden="true">#</a></h1><hr><h4 id="instanceof" tabindex="-1">instanceof <a class="header-anchor" href="#instanceof" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * instanceof 用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param left</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param right</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">function _instanceof(left, right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let proto = left.__proto__,</span></span>
<span class="line"><span style="color:#A6ACCD;">    prototype = right.prototype;</span></span>
<span class="line"><span style="color:#A6ACCD;">  while (true) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 判断是否找到头了</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(proto === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 相等</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(proto === prototype) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不相等</span></span>
<span class="line"><span style="color:#A6ACCD;">    proto = proto.__proto__;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = []</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(_instanceof(arr,Array))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="call" tabindex="-1">call <a class="header-anchor" href="#call" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * call - 使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param thisArg</span></span>
<span class="line"><span style="color:#A6ACCD;"> *  -可选的。在 function 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">Function.prototype._call = function (thisArg, ...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof this !== &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new TypeError(&#39;not function&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  const context = thisArg || window;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 构造唯一 key</span></span>
<span class="line"><span style="color:#A6ACCD;">  const fn = Symbol();</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 组装成&quot;对象.方法&quot;形式并调用，来改变 this</span></span>
<span class="line"><span style="color:#A6ACCD;">  context[fn] = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const res = context[fn](...args);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 删掉临时加的 key，复原 thisArg</span></span>
<span class="line"><span style="color:#A6ACCD;">  delete context[fn]</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(thisArg)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return res</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function sum(num1, num2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return this.val + num1 + num2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = { val: 1 };</span></span>
<span class="line"><span style="color:#A6ACCD;">let res = sum._call(obj, 2, 3);  // 6</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),o=[e];function t(c,r,i,A,C,y){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{h as __pageData,d as default};
