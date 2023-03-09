import{_ as s,c as n,o as a,a as l}from"./app.96a69404.js";const D=JSON.parse('{"title":"防抖","description":"","frontmatter":{},"headers":[],"relativePath":"articles/debounce.md","lastUpdated":1678269270000}'),e={name:"articles/debounce.md"},p=l(`<h1 id="防抖" tabindex="-1">防抖 <a class="header-anchor" href="#防抖" aria-hidden="true">#</a></h1><hr><p>在用户频繁触发某个行为的时候，我们只识别一次即可「开始边界：第一次点击触发</p><h4 id="版本1" tabindex="-1">版本1 <a class="header-anchor" href="#版本1" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;"> * debounce:函数防抖</span></span>
<span class="line"><span style="color:#A6ACCD;"> *  @params</span></span>
<span class="line"><span style="color:#A6ACCD;"> *    func:自己最终要执行的任务</span></span>
<span class="line"><span style="color:#A6ACCD;"> *    wait:多久操作一次算是频繁触发「默认值:500ms」</span></span>
<span class="line"><span style="color:#A6ACCD;"> *    immediate:控制触发的边界 「默认值:false结束边界  true开始边界」（值为true，立即触发一次后，等到停止触发 n 秒后，才可以重新触发执行）</span></span>
<span class="line"><span style="color:#A6ACCD;"> *  @return</span></span>
<span class="line"><span style="color:#A6ACCD;"> *    operate处理函数，处理函数会在频繁触发的时候，频繁执行；函数内部，控制我们想要操作的func只执行一次；</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const debounce = function debounce(func, wait, immediate) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof func !== &quot;function&quot;) throw new TypeError(&#39;func must be an function!&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof wait === &quot;boolean&quot;) immediate = wait;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof wait !== &quot;number&quot;) wait = 500;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof immediate !== &quot;boolean&quot;) immediate = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let timer = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function operate(...params) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let now = !timer &amp;&amp; immediate,</span></span>
<span class="line"><span style="color:#A6ACCD;">            result;</span></span>
<span class="line"><span style="color:#A6ACCD;">        timer = clearTimer(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">        timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            timer = clearTimer(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 结束边界触发</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!immediate) func.call(this, ...params);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, wait);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 开始边界触发</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (now) result = func.call(this, ...params);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 清除指定的定时器，并且让timer=null</span></span>
<span class="line"><span style="color:#A6ACCD;">const clearTimer = function clearTimer(timer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (timer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        clearTimeout(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return null;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="版本2" tabindex="-1">版本2 <a class="header-anchor" href="#版本2" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function debounce(func, wait, immediate) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let timeout, args, context, previous, result</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const later = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 据上一次触发时间间隔</span></span>
<span class="line"><span style="color:#A6ACCD;">    const last = +new Date() - previous</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (last &lt; wait) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      timeout = setTimeout(later, wait - last)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      timeout = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!immediate) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        result = func.apply(context, args)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!timeout) context = args = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return function(...rest) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    context = this</span></span>
<span class="line"><span style="color:#A6ACCD;">    previous = +new Date()</span></span>
<span class="line"><span style="color:#A6ACCD;">    args = rest</span></span>
<span class="line"><span style="color:#A6ACCD;">    const callNow = immediate &amp;&amp; !timeout</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果延时不存在，重新设定延时</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!timeout) timeout = setTimeout(later, wait)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (callNow) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      result = func.apply(context, args)</span></span>
<span class="line"><span style="color:#A6ACCD;">      context = args = null</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return result</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),t=[p];function o(c,i,r,C,A,u){return a(),n("div",null,t)}const m=s(e,[["render",o]]);export{D as __pageData,m as default};
