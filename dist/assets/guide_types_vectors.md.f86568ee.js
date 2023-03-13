import{_ as s,o as a,c as n,a as e}from"./app.a85cfb4e.js";const u=JSON.parse('{"title":"Vectors","description":"","frontmatter":{},"headers":[{"level":2,"title":"Passing in vectors","slug":"passing-in-vectors","link":"#passing-in-vectors","children":[]},{"level":2,"title":"Returning vectors","slug":"returning-vectors","link":"#returning-vectors","children":[]}],"relativePath":"guide/types/vectors.md"}'),l={name:"guide/types/vectors.md"},p=e(`<h1 id="vectors" tabindex="-1">Vectors <a class="header-anchor" href="#vectors" aria-hidden="true">#</a></h1><h2 id="passing-in-vectors" tabindex="-1">Passing in vectors <a class="header-anchor" href="#passing-in-vectors" aria-hidden="true">#</a></h2><p>You can pass a JavaScript <code>Array</code> into your contract method transparently, allowing passthrough of expected data via the type regardless of Array type.</p><p>A basic Vector is just a Typed Array:</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// aka Vec&lt;u8&gt;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> basicNumberVector </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Here is an example of a sample <code>struct</code> in Sway:</p><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComplexStruct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u64</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    baz</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/test-projects/coverage-contract/src/main.sw#L29-L35" target="_blank" rel="noreferrer">See code in context </a><hr><p>And the contract method using this <code>struct</code> in a <code>Vector</code>:</p><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo_struct_vector_last</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">vector</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vec</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ComplexStruct</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComplexStruct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    vector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">vector</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/test-projects/coverage-contract/src/main.sw#L317-L321" target="_blank" rel="noreferrer">See code in context </a><hr><p>The following code calls this Sway contract method which accepts a <code>Vec&lt;ComplexStruct&gt;</code>.</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11337</span><span style="color:#C792EA;">n</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">baz</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456789</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">21337</span><span style="color:#C792EA;">n</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">baz</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alphabet!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  last</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/coverage-contract.test.ts#L339-L353" target="_blank" rel="noreferrer">See code in context </a><hr><p>You can use a vector just like you would use any other type -- e.g. a <code>[Vec&lt;u32&gt;; 2]</code> or a <code>SomeStruct&lt;Vec&lt;Bits256&gt;&gt;</code> etc.</p><h2 id="returning-vectors" tabindex="-1">Returning vectors <a class="header-anchor" href="#returning-vectors" aria-hidden="true">#</a></h2><p>This is currently not supported. If you try returning a type that is or contains a vector you will get a compile time error.</p>`,20),o=[p];function t(r,c,i,y,D,F){return a(),n("div",null,o)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};