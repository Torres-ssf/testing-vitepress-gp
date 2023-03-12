import{_ as s,o as a,c as n,a as p}from"./app.1b12a468.js";const d=JSON.parse('{"title":"Structs","description":"","frontmatter":{},"headers":[],"relativePath":"guide/types/structs.md","lastUpdated":1678647917000}'),e={name:"guide/types/structs.md"},t=p(`<h1 id="structs" tabindex="-1">Structs <a class="header-anchor" href="#structs" aria-hidden="true">#</a></h1><p>A <code>struct</code> in Sway is equivalent to an <code>Object</code> in TypeScript, where the property names and types must match what is defined in Sway.</p><p>Here is an example of the <code>struct</code> in Sway:</p><p>And the same structure represented in TypeScript:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComplexStruct</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    foo: u8,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bar: u64,</span></span>
<span class="line"><span style="color:#A6ACCD;">    baz: str[9],</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> myStruct</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComplexStruct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11337</span><span style="color:#C792EA;">n</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">baz</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123456789</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),l=[t];function o(c,r,y,i,C,D){return a(),n("div",null,l)}const F=s(e,[["render",o]]);export{d as __pageData,F as default};
