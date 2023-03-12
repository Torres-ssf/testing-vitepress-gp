import{d as i}from"./chunks/versions.data.e5c6b772.js";import{o as y,c as D,b as s,d as a,t as l,u as n,a as o}from"./app.1b12a468.js";const F=s("h2",{id:"version",tabindex:"-1"},[a("Version "),s("a",{class:"header-anchor",href:"#version","aria-hidden":"true"},"#")],-1),C=o('<h2 id="developer-quickstart-guide" tabindex="-1">Developer Quickstart Guide <a class="header-anchor" href="#developer-quickstart-guide" aria-hidden="true">#</a></h2><p>We recommend starting with the <a href="https://fuellabs.github.io/fuel-docs/master/quickstart/developer-quickstart.html" target="_blank" rel="noreferrer">Developer Quickstart</a> for a walk through on building your first DApp on Fuel.</p><ul><li><a href="./guide/">Guide</a></li><li><a href="https://github.com/FuelLabs/beta2-quickstart" target="_blank" rel="noreferrer">Sample Application</a></li><li><a href="https://github.com/FuelLabs/sway-applications" target="_blank" rel="noreferrer">Other examples and projects</a></li></ul><h2 id="the-fuel-ecosystem" tabindex="-1">The Fuel Ecosystem <a class="header-anchor" href="#the-fuel-ecosystem" aria-hidden="true">#</a></h2><p>Learn more about the Fuel Ecosystem.</p>',5),A=s("li",null,[s("a",{href:"https://fuellabs.github.io/sway/",target:"_blank",rel:"noreferrer"},"🌴 Sway"),a(" the new language. Empowering everyone to build reliable and efficient smart contracts.")],-1),d=s("li",null,[s("a",{href:"https://github.com/FuelLabs/fuel-core",target:"_blank",rel:"noreferrer"},"⚙️ Fuel Core"),a(" the new FuelVM, a blazingly fast blockchain VM.")],-1),u=s("li",null,[s("a",{href:"https://github.com/FuelLabs/fuel-specs",target:"_blank",rel:"noreferrer"},"🔗 Fuel Specs"),a(" the Fuel protocol specifications.")],-1),h=s("li",null,[s("a",{href:"https://github.com/FuelLabs/fuels-rs",target:"_blank",rel:"noreferrer"},"🦀 RUST SDK"),a(" a robust SDK in rust.")],-1),f=s("li",null,[s("a",{href:"https://fuel.network/",target:"_blank",rel:"noreferrer"},"⚡ Fuel Network"),a(" the project.")],-1),g=o(`<h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><h4 id="yarn" tabindex="-1">YARN <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fuels</span></span>
<span class="line"></span></code></pre></div><h4 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fuels</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save</span></span>
<span class="line"></span></code></pre></div><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Wallet</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Random Wallet</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">generate</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Using privateKey Wallet</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Wallet</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x0000...0000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="calling-contracts" tabindex="-1">Calling Contracts <a class="header-anchor" href="#calling-contracts" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Wallet</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Contract</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BigNumberish</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BN</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> abi </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./abi.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wallet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Wallet</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// private key with coins</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> contractId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> contract </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Contract</span><span style="color:#A6ACCD;">(contractId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> abi</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> wallet)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// All contract methods are available under functions</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> transactionId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> contract</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">functions</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">BigNumberish</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BN</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(transactionId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><a href="./guide/contracts/">READ MORE</a></p><h2 id="deploying-contracts" tabindex="-1">Deploying Contracts <a class="header-anchor" href="#deploying-contracts" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Provider</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Contract</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Byte code generated using: forc build</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> bytecode </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./bytecode.bin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> factory </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ContractFactory</span><span style="color:#A6ACCD;">(bytecode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> wallet)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> contract </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> factory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deployContract</span><span style="color:#A6ACCD;">(factory)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(contract</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-hidden="true">#</a></h2><p>The primary license for this repo is <code>Apache 2.0</code>, see <a href="https://github.com/FuelLabs/fuels-ts/blob/master/LICENSE" target="_blank" rel="noreferrer"><code>LICENSE</code></a>.</p>`,14),x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Version","slug":"version","link":"#version","children":[]},{"level":2,"title":"Developer Quickstart Guide","slug":"developer-quickstart-guide","link":"#developer-quickstart-guide","children":[]},{"level":2,"title":"The Fuel Ecosystem","slug":"the-fuel-ecosystem","link":"#the-fuel-ecosystem","children":[]},{"level":2,"title":"Install","slug":"install","link":"#install","children":[{"level":4,"title":"YARN","slug":"yarn","link":"#yarn","children":[]},{"level":4,"title":"NPM","slug":"npm","link":"#npm","children":[]}]},{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Calling Contracts","slug":"calling-contracts","link":"#calling-contracts","children":[]},{"level":2,"title":"Deploying Contracts","slug":"deploying-contracts","link":"#deploying-contracts","children":[]},{"level":2,"title":"License","slug":"license","link":"#license","children":[]}],"relativePath":"index.md","lastUpdated":1678647917000}'),b={name:"index.md"},q=Object.assign(b,{setup(m){const{forc:t,sway:e,fuels:p,fuelCore:r}=i,c=`https://fuellabs.github.io/sway/v${e}/book/forc/index.html`;return(_,v)=>(y(),D("div",null,[F,s("p",null,[a("This doc was generated using Fuels "),s("code",null,"v"+l(n(p)),1),a(", Fuel Core "),s("code",null,"v"+l(n(r)),1),a(", Sway "),s("code",null,"v"+l(n(e)),1),a(", and Forc "),s("code",null,"v"+l(n(t)),1),a(".")]),C,s("ul",null,[A,s("li",null,[s("a",{href:c,target:"_blank",rel:"noreferrer"},"🧰 Forc"),a(" the Fuel toolbox. Build, deploy and manage your sway projects.")]),d,u,h,f]),g]))}});export{x as __pageData,q as default};
