import{_ as s,c as a,o as n,a as l}from"./app.837c4edc.js";const g=JSON.parse('{"title":"js小数计算丢失精度问题","description":"","frontmatter":{},"headers":[],"relativePath":"articles/lossPrecision.md","lastUpdated":1677576288000}'),t={name:"articles/lossPrecision.md"},e=l(`<h1 id="js小数计算丢失精度问题" tabindex="-1">js小数计算丢失精度问题 <a class="header-anchor" href="#js小数计算丢失精度问题" aria-hidden="true">#</a></h1><hr><h4 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-hidden="true">#</a></h4><p>js在计算小数计算如0.1 + 0.2 的时候会丢失精度，即0.1 + 0.2= 0.30000000000000004;</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console.log( 1 - 0.8 );  //输出 0.19999999999999996 </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( 6 * 0.7 );  //输出 4.199999999999999 </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( 0.1 + 0.2 );  //输出 0.30000000000000004 </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( 0.1 + 0.7 );  //输出 0.7999999999999999 </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( 1.2 / 0.2 );  //输出 5.999999999999999 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="产生原因" tabindex="-1">产生原因 <a class="header-anchor" href="#产生原因" aria-hidden="true">#</a></h4><p>计算机能读懂的是二进制，进行运算的时候，实际上是把数字转换为了二进制进行的 这个过程 丢失了精度</p><h4 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-hidden="true">#</a></h4><ul><li>加法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function floatAdd(arg1,arg2){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var r1,r2,m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try{r1=arg1.toString().split(&quot;.&quot;)[1].length}catch(e){r1=0}</span></span>
<span class="line"><span style="color:#A6ACCD;">    try{r2=arg2.toString().split(&quot;.&quot;)[1].length}catch(e){r2=0}</span></span>
<span class="line"><span style="color:#A6ACCD;">    m=Math.pow(10,Math.max(r1,r2));</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (arg1*m+arg2*m)/m;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>减法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function floatSub(arg1,arg2){</span></span>
<span class="line"><span style="color:#A6ACCD;">    var r1,r2,m,n;</span></span>
<span class="line"><span style="color:#A6ACCD;">    try{r1=arg1.toString().split(&quot;.&quot;)[1].length}catch(e){r1=0}</span></span>
<span class="line"><span style="color:#A6ACCD;">    try{r2=arg2.toString().split(&quot;.&quot;)[1].length}catch(e){r2=0}</span></span>
<span class="line"><span style="color:#A6ACCD;">    m=Math.pow(10,Math.max(r1,r2));</span></span>
<span class="line"><span style="color:#A6ACCD;">    //动态控制精度长度</span></span>
<span class="line"><span style="color:#A6ACCD;">    n=(r1&gt;=r2)?r1:r2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return ((arg1*m-arg2*m)/m).toFixed(n);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>乘法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function floatMul(arg1,arg2)   {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var m=0,s1=arg1.toString(),s2=arg2.toString();</span></span>
<span class="line"><span style="color:#A6ACCD;">  try{m+=s1.split(&quot;.&quot;)[1].length}catch(e){}</span></span>
<span class="line"><span style="color:#A6ACCD;">  try{m+=s2.split(&quot;.&quot;)[1].length}catch(e){}</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Number(s1.replace(&quot;.&quot;,&quot;&quot;)) * Number(s2.replace(&quot;.&quot;,&quot;&quot;)) /Math.pow(10,m);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>除法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function floatDiv(arg1,arg2){</span></span>
<span class="line"><span style="color:#A6ACCD;">  var t1=0,t2=0,r1,r2;</span></span>
<span class="line"><span style="color:#A6ACCD;">  try{t1=arg1.toString().split(&quot;.&quot;)[1].length}catch(e){}</span></span>
<span class="line"><span style="color:#A6ACCD;">  try{t2=arg2.toString().split(&quot;.&quot;)[1].length}catch(e){}</span></span>
<span class="line"><span style="color:#A6ACCD;">  r1=Number(arg1.toString().replace(&quot;.&quot;,&quot;&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">  r2=Number(arg2.toString().replace(&quot;.&quot;,&quot;&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (r1/r2)*Math.pow(10,t2-t1);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),p=[e];function o(r,c,i,C,A,u){return n(),a("div",null,p)}const h=s(t,[["render",o]]);export{g as __pageData,h as default};
