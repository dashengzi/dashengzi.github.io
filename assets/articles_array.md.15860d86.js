import{_ as s,c as n,o as a,a as l}from"./app.837c4edc.js";const h=JSON.parse('{"title":"数组","description":"","frontmatter":{},"headers":[],"relativePath":"articles/array.md","lastUpdated":1677568061000}'),p={name:"articles/array.md"},e=l(`<h1 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-hidden="true">#</a></h1><hr><h4 id="at" tabindex="-1">at <a class="header-anchor" href="#at" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let arr = [1, 2, 4, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * at - 接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param index</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return 匹配给定索引的数组中的元素。如果找不到指定的索引，则返回 undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.prototype._at = function (index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let n = Math.trunc(index) || 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(n&lt;0) n+=this.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (n &lt; 0 || n &gt;= this.length) return undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return this[n];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr._at(-3.62222222))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="contact" tabindex="-1">contact <a class="header-anchor" href="#contact" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let arr = [1, 2, 4, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * concat - 不会改变原数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param args - 数组和/或值，将被合并到一个新的数组中。如果省略了所有 valueN 参数，则 concat 会返回调    </span></span>
<span class="line"><span style="color:#A6ACCD;"> * 用此方法的现存数组的一个浅拷贝。</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return - 返回1个新数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.prototype._contact = function (...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if(args.length==0) return this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let newArray = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; args.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(Array.isArray(args[i])){</span></span>
<span class="line"><span style="color:#A6ACCD;">      newArray.push(...args[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">    }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">      newArray.push(args[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return newArray</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let res = arr._contact();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="foreach" tabindex="-1">forEach <a class="header-anchor" href="#foreach" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let arr = [1, 2, 4, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * forEach - 不会改变原数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Function} callback - 有3个参数，数组中正在处理的当前元素、数组中正在处理的当前元素的索引、</span></span>
<span class="line"><span style="color:#A6ACCD;"> * forEach()方法正在操作的数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Any} thisArg - 可选参数。当执行回调函数callback时，用作 this 的值。如果 thisArg 参数有值，则每次 callback函数被    </span></span>
<span class="line"><span style="color:#A6ACCD;"> * 调用时，this 都会指向 thisArg 参数。如果省略了 thisArg 参数，或者其值为 null 或 undefined，this 则指向全局对象。</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.prototype._forEach = function (callback, thisArg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(thisArg,this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 判断callback是否为函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof callback !== &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(\`\${callback} is not a function\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 判断当前调用对象是不是数组</span></span>
<span class="line"><span style="color:#A6ACCD;">  //if (!Array.isArray(this)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //throw new Error(\`\${this} is not a Array\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //}</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    callback.call(thisArg, this[i], i, this);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">arr._forEach((m) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(m);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let arr = [1, 2, 4, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * filter - 不会改变原数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Function} callback - 有3个参数，数组中当前正在处理的元素、正在处理的元素在数组中的索引、调     </span></span>
<span class="line"><span style="color:#A6ACCD;"> * 用了 filter() 的数组本身</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Any} thisArg - 可选参数。执行 callback 时，用于 this 的值。如果为 filter() 提供一个 </span></span>
<span class="line"><span style="color:#A6ACCD;"> * thisArg 参数，则它会被作为callback被调用时的 this 值。否则，callback的 this 值在非严格模式下将是全 </span></span>
<span class="line"><span style="color:#A6ACCD;"> * 局对象，严格模式下为 undefined。</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {Array} - 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.prototype._filter = function (callback, thisArg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 判断callback是否为函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof callback !== &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(\`callback is not a function\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 存储通过测试的元素</span></span>
<span class="line"><span style="color:#A6ACCD;">  let newArray = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (callback.call(thisArg, this[i], i, this)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      newArray.push(this[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return newArray;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let res = arr._filter(function (m) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return m&gt;=2</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="map" tabindex="-1">map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let arr = [1, 2, 4, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * map - 不会改变原数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Function} callback - 有3个参数，数组中当前正在处理的元素、正在处理的元素在数组中的索引、</span></span>
<span class="line"><span style="color:#A6ACCD;"> * 调用了 filter() 的数组本身</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Any} thisArg</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {Array} - 一个新数组，每个元素都是回调函数的返回值。</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.prototype._map = function (callback,thisArg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 判断callback是否为函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof callback !== &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(\`callback is not a function\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  let newArray = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    newArray[i] = callback.call(thisArg, this[i], i, this)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return newArray;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let res = arr._map((m)=&gt; ++m)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="every" tabindex="-1">every <a class="header-anchor" href="#every" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let arr = [1, 2, 4, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * every - 不会改变原数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param callback</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param thisArg</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return 如果回调函数的每一次返回都为 truthy 值，返回 true，否则返回 false。</span></span>
<span class="line"><span style="color:#A6ACCD;"> * require(&#39;../internals/array-iteration&#39;).every</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.prototype._every = function (callback, thisArg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 判断callback是否为函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof callback !== &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(\`callback is not a function\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let res = callback.call(thisArg, this[i], i, this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr._every(x =&gt; x &gt;= 2))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">注意：传入一个空数组，无论如何都会返回 true</p></div><h4 id="some" tabindex="-1">some <a class="header-anchor" href="#some" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * some - 不会改变原数组</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param callback</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param thisArg</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return 数组中有至少一个元素通过回调函数的测试就会返回 true；所有元素都没有通过回调函数的测试返回值才会为 false。</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.prototype._some = function (callback, thisArg) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 判断callback是否为函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (Object.prototype.toString.call(callback)  !== &quot;[object Function]&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(\`callback is not a function\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; this.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let res = callback.call(thisArg, this[i], i, this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let res = arr._some(m=&gt;m&lt;2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),c=[e];function o(t,r,i,A,C,y){return a(),n("div",null,c)}const d=s(p,[["render",o]]);export{h as __pageData,d as default};
