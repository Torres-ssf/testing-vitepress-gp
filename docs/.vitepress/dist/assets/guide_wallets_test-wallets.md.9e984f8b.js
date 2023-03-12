import{_ as s,o as a,c as l,a as n}from"./app.1b12a468.js";const i=JSON.parse('{"title":"Setting up test wallets","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create a single wallet","slug":"create-a-single-wallet","link":"#create-a-single-wallet","children":[{"level":6,"title":"See code in context","slug":"see-code-in-context","link":"#see-code-in-context","children":[]}]},{"level":2,"title":"Setting up multiple test wallets","slug":"setting-up-multiple-test-wallets","link":"#setting-up-multiple-test-wallets","children":[{"level":6,"title":"See code in context","slug":"see-code-in-context-1","link":"#see-code-in-context-1","children":[]}]}],"relativePath":"guide/wallets/test-wallets.md","lastUpdated":1678640713000}'),e={name:"guide/wallets/test-wallets.md"},o=n(`<h1 id="setting-up-test-wallets" tabindex="-1">Setting up test wallets <a class="header-anchor" href="#setting-up-test-wallets" aria-hidden="true">#</a></h1><p>You&#39;ll often want to create one or more test wallets when testing your contracts. Here&#39;s how to do it.</p><h2 id="create-a-single-wallet" tabindex="-1">Create a single wallet <a class="header-anchor" href="#create-a-single-wallet" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Wallet</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">WalletLocked</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">WalletUnlocked</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// use the \`generate\` helper to make an Unlocked Wallet</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myWallet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WalletUnlocked</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">generate</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or use an Address to create a wallet</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someWallet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WalletLocked</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromAddress</span><span style="color:#A6ACCD;">(myWallet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h6 id="see-code-in-context" tabindex="-1"><a href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L155-L163" target="_blank" rel="noreferrer">See code in context</a> <a class="header-anchor" href="#see-code-in-context" aria-hidden="true">#</a></h6><h2 id="setting-up-multiple-test-wallets" tabindex="-1">Setting up multiple test wallets <a class="header-anchor" href="#setting-up-multiple-test-wallets" aria-hidden="true">#</a></h2><p>If you need multiple test wallets, they can be set up as follows:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Provider</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">generateTestWallet</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@fuel-ts/wallet/test-utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> provider </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Provider</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://127.0.0.1:4000/graphql</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> assetIdA </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x0101010101010101010101010101010101010101010101010101010101010101</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> assetIdB </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0x0202020202020202020202020202020202020202020202020202020202020202</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// single asset</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> walletA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateTestWallet</span><span style="color:#A6ACCD;">(provider</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [[</span><span style="color:#F78C6C;">42</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NativeAssetId]])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// multiple assets</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> walletB </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateTestWallet</span><span style="color:#A6ACCD;">(provider</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// [Amount, AssetId]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> assetIdA]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> assetIdB]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NativeAssetId]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// this wallet has no assets</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> walletC </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateTestWallet</span><span style="color:#A6ACCD;">(provider)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// retrieve balances of wallets</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> walletABalances </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> walletA</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBalances</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> walletBBalances </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> walletB</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBalances</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> walletCBalances </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> walletC</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBalances</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// validate balances</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(walletABalances)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NativeAssetId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(walletBBalances)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NativeAssetId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> assetIdA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> assetIdB</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(walletCBalances)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h6 id="see-code-in-context-1" tabindex="-1"><a href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L212-L246" target="_blank" rel="noreferrer">See code in context</a> <a class="header-anchor" href="#see-code-in-context-1" aria-hidden="true">#</a></h6>`,9),p=[o];function t(c,r,D,y,A,F){return a(),l("div",null,p)}const d=s(e,[["render",t]]);export{i as __pageData,d as default};
