import{_ as s,o as a,c as n,a as l}from"./app.a85cfb4e.js";const C=JSON.parse('{"title":"Bits256","description":"","frontmatter":{},"headers":[],"relativePath":"guide/types/bits256.md"}'),e={name:"guide/types/bits256.md"},p=l(`<h1 id="bits256" tabindex="-1">Bits256 <a class="header-anchor" href="#bits256" aria-hidden="true">#</a></h1><p>In Fuel, a type called <code>b256</code> represents hashes and holds a 256-bit value. The TypeScript SDK represents <code>b256</code> as <code>string</code> value for portability and can convert to <code>Uint8Array</code> as needed when the <a href="./bytes32.html">raw bytes</a> are required.</p><p>Here are some example tools in the SDK:</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrayify</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hexlify</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">randomBytes</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getRandomB256</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// here are some useful ways to generate random b256 values</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> randomB256Bytes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Bytes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">randomBytes</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> randomB256</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getRandomB256</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// a [u8; 32] (Uint8Array) b256 can be converted to hex string</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hexedB256</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hexlify</span><span style="color:#A6ACCD;">(randomB256Bytes)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// a string b256 can be converted to Uint8Array</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">arrayify</span><span style="color:#A6ACCD;">(randomB256Bytes))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">arrayify</span><span style="color:#A6ACCD;">(hexedB256))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// a string b256 can be safely passed into hexlify without mangling</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(randomB256)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">hexlify</span><span style="color:#A6ACCD;">(randomB256))</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L112-L127" target="_blank" rel="noreferrer">See code in context </a><hr><p>A Bit256 value is also supported as part of the <a href="./address.html">Address</a> libraries.</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Address</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> address </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Address</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromB256</span><span style="color:#A6ACCD;">(ADDRESS_B256)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(address</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toAddress</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(ADDRESS_BECH32)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(address</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toB256</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(ADDRESS_B256)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L64-L70" target="_blank" rel="noreferrer">See code in context </a>`,9),o=[p];function t(r,c,y,i,A,D){return a(),n("div",null,o)}const d=s(e,[["render",t]]);export{C as __pageData,d as default};