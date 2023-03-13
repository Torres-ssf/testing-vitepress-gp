import{_ as s,o as a,c as n,a as l}from"./app.a85cfb4e.js";const F=JSON.parse('{"title":"Calling external contracts","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contracts/calling-external-contracts.md"}'),o={name:"guide/contracts/calling-external-contracts.md"},e=l(`<h1 id="calling-external-contracts" tabindex="-1">Calling external contracts <a class="header-anchor" href="#calling-external-contracts" aria-hidden="true">#</a></h1><p>Your contract method might be calling other contracts. To do so, you must feed the external contract IDs that your contract depends on to the method you&#39;re calling.</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> contract </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setupContract</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> otherContract </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setupContract</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scope </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> contract</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">functions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call_external_foo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1336</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> otherContract</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> results </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> scope</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(results</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toHex</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">toHex</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1338</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/contract.test.ts#L133-L144" target="_blank" rel="noreferrer">See code in context </a>`,4),p=[e];function t(c,r,D,y,A,C){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{F as __pageData,u as default};