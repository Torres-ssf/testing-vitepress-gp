import{_ as s,o as a,c as n,a as e}from"./app.a85cfb4e.js";const u=JSON.parse('{"title":"String","description":"","frontmatter":{},"headers":[],"relativePath":"guide/types/string.md"}'),l={name:"guide/types/string.md"},t=e(`<h1 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-hidden="true">#</a></h1><p>Currently, all strings in Fuel and Sway are statically-sized, i.e., you must know the size of the string beforehand.</p><p>Here&#39;s how you can create a simple string using <code>TypeScript</code>:</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// aka str[2]</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> stringSize2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">st</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// aka str[8]</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> stringSize8 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuel-sdk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If your contract&#39;s method takes and returns, a <code>str[8]</code>, the SDK wrapper method will take and return a string of same length with validation. You can pass a string to it like this:</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> contractInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">functions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">echo_str_8</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fuel-sdk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(value)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fuel-sdk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/coverage-contract.test.ts#L107-L111" target="_blank" rel="noreferrer">See code in context </a>`,7),p=[t];function o(r,c,i,y,D,d){return a(),n("div",null,p)}const A=s(l,[["render",o]]);export{u as __pageData,A as default};