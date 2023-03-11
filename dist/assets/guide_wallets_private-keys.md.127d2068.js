import{_ as s,o as e,c as a,U as n}from"./app.13a25981.js";import"./chunks/theme.c66773c8.js";const C=JSON.parse('{"title":"Creating a wallet from a private key","description":"","frontmatter":{},"headers":[{"level":6,"title":"See code in context","slug":"see-code-in-context","link":"#see-code-in-context","children":[]},{"level":6,"title":"See code in context","slug":"see-code-in-context-1","link":"#see-code-in-context-1","children":[]},{"level":6,"title":"See code in context","slug":"see-code-in-context-2","link":"#see-code-in-context-2","children":[]}],"relativePath":"guide/wallets/private-keys.md","lastUpdated":1678564845000}'),l={name:"guide/wallets/private-keys.md"},t=n(`<h1 id="creating-a-wallet-from-a-private-key" tabindex="-1">Creating a wallet from a private key <a class="header-anchor" href="#creating-a-wallet-from-a-private-key" aria-hidden="true">#</a></h1><p>A new wallet with a randomly generated private key can be created by supplying <code>Wallet.generate</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Wallet</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">WalletLocked</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">WalletUnlocked</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// use the \`generate\` helper to make an Unlocked Wallet</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myWallet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WalletUnlocked</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">generate</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or use an Address to create a wallet</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someWallet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WalletLocked</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromAddress</span><span style="color:#A6ACCD;">(myWallet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h6 id="see-code-in-context" tabindex="-1"><a href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L155-L163" target="_blank" rel="noreferrer">See code in context</a> <a class="header-anchor" href="#see-code-in-context" aria-hidden="true">#</a></h6><hr><p>Alternatively, you can create a wallet from a Private Key:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// unlock an existing wallet</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> unlockedWallet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WalletUnlocked</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> lockedWallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unlock</span><span style="color:#A6ACCD;">(PRIVATE_KEY)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or directly from a private key</span></span>
<span class="line"><span style="color:#A6ACCD;">unlockedWallet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromPrivateKey</span><span style="color:#A6ACCD;">(PRIVATE_KEY)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h6 id="see-code-in-context-1" tabindex="-1"><a href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L169-L174" target="_blank" rel="noreferrer">See code in context</a> <a class="header-anchor" href="#see-code-in-context-1" aria-hidden="true">#</a></h6><hr><p>You can obtain an address to a private key using the <code>Signer</code> package</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> signer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Signer</span><span style="color:#A6ACCD;">(PRIVATE_KEY)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// validate address</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(wallet</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(signer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">address)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h6 id="see-code-in-context-2" tabindex="-1"><a href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L259-L263" target="_blank" rel="noreferrer">See code in context</a> <a class="header-anchor" href="#see-code-in-context-2" aria-hidden="true">#</a></h6>`,12),o=[t];function p(c,r,i,y,d,D){return e(),a("div",null,o)}const h=s(l,[["render",p]]);export{C as __pageData,h as default};
