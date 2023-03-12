import{_ as s,o as a,c as n,a as o}from"./app.1b12a468.js";const i=JSON.parse('{"title":"Using Generated Types","description":"","frontmatter":{},"headers":[],"relativePath":"guide/abi-typegen/using-generated-types.md","lastUpdated":1678647917000}'),l={name:"guide/abi-typegen/using-generated-types.md"},p=o(`<h1 id="using-generated-types" tabindex="-1">Using Generated Types <a class="header-anchor" href="#using-generated-types" aria-hidden="true">#</a></h1><p>See also <a href="./generate-contract-types-from-abi.html">Generate Contract Types from ABI</a>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Wallet</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MyContract__factory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> contractId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wallet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Wallet</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> contract </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MyContract__factory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#A6ACCD;">(contractId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> wallet)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// All contract methods are available under functions with the correct types</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> transactionId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> contract</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">functions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">my_fn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#C792EA;">n</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(transactionId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,3),t=[p];function e(c,r,y,D,F,A){return a(),n("div",null,t)}const d=s(l,[["render",e]]);export{i as __pageData,d as default};
