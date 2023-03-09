import{_ as s,c as n,o as a,a as l}from"./app.96a69404.js";const u=JSON.parse('{"title":"节流","description":"","frontmatter":{},"headers":[],"relativePath":"articles/thtottle.md","lastUpdated":1678332149000}'),p={name:"articles/thtottle.md"},e=l(`<h1 id="节流" tabindex="-1">节流 <a class="header-anchor" href="#节流" aria-hidden="true">#</a></h1><hr><p>持续触发事件，每隔一段时间，只执行一次事件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;"> * throttle:函数节流</span></span>
<span class="line"><span style="color:#A6ACCD;"> *  @params</span></span>
<span class="line"><span style="color:#A6ACCD;"> *    func:自己最终要执行的任务</span></span>
<span class="line"><span style="color:#A6ACCD;"> *    wait:触发的频率「默认值:500ms」</span></span>
<span class="line"><span style="color:#A6ACCD;"> *  @return</span></span>
<span class="line"><span style="color:#A6ACCD;"> *    operate处理函数</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const throttle = function throttle(func, wait) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof func !== &quot;function&quot;) throw new TypeError(&#39;func must be an function!&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof wait !== &quot;number&quot;) wait = 500;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let timer = null,</span></span>
<span class="line"><span style="color:#A6ACCD;">        previous = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function operate(...params) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let now = +new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">            remaining = wait - (now - previous),</span></span>
<span class="line"><span style="color:#A6ACCD;">            result;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (remaining &lt;= 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 两次间隔时间超过500ms了,让方法立即执行</span></span>
<span class="line"><span style="color:#A6ACCD;">            timer = clearTimer(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">            result = func.call(this, ...params);</span></span>
<span class="line"><span style="color:#A6ACCD;">            previous = +new Date();</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (!timer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 没设置过定时器等待，则我们设置一个去等待即可</span></span>
<span class="line"><span style="color:#A6ACCD;">            timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                timer = clearTimer(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">                func.call(this, ...params);</span></span>
<span class="line"><span style="color:#A6ACCD;">                previous = +new Date();</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, remaining);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),t=[e];function o(c,r,i,C,A,y){return a(),n("div",null,t)}const m=s(p,[["render",o]]);export{u as __pageData,m as default};
