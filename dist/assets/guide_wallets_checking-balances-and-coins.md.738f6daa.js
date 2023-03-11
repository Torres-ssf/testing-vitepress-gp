import{_ as s,o as a,c as e,U as n}from"./app.13a25981.js";import"./chunks/theme.c66773c8.js";const C=JSON.parse('{"title":"Checking balances and coins","description":"","frontmatter":{},"headers":[{"level":6,"title":"See code in context","slug":"see-code-in-context","link":"#see-code-in-context","children":[]},{"level":6,"title":"See code in context","slug":"see-code-in-context-1","link":"#see-code-in-context-1","children":[]}],"relativePath":"guide/wallets/checking-balances-and-coins.md","lastUpdated":1678564845000}'),l={name:"guide/wallets/checking-balances-and-coins.md"},o=n(`<h1 id="checking-balances-and-coins" tabindex="-1">Checking balances and coins <a class="header-anchor" href="#checking-balances-and-coins" aria-hidden="true">#</a></h1><p>First, one should remember that, with UTXOs, each <em>coin</em> is unique. Each UTXO corresponds to a unique <em>coin</em>, and said <em>coin</em> has a corresponding <em>amount</em> (the same way a dollar bill has either 10$ or 5$ face value). So, when you want to query the balance for a given asset ID, you want to query the sum of the amount in each unspent coin. This querying is done very easily with a wallet:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Wallet</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">WalletUnlocked</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BigNumberish</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> balance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BigNumberish</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> myWallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBalance</span><span style="color:#A6ACCD;">(NativeAssetId)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h6 id="see-code-in-context" tabindex="-1"><a href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L181-L184" target="_blank" rel="noreferrer">See code in context</a> <a class="header-anchor" href="#see-code-in-context" aria-hidden="true">#</a></h6><hr><p>If you want to query all the balances (i.e., get the balance for each asset ID in that wallet), then it is as simple as:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Wallet</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">WalletUnlocked</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CoinQuantity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> balances</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CoinQuantity</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> myWallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBalances</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h6 id="see-code-in-context-1" tabindex="-1"><a href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L186-L189" target="_blank" rel="noreferrer">See code in context</a> <a class="header-anchor" href="#see-code-in-context-1" aria-hidden="true">#</a></h6>`,8),t=[o];function c(p,r,i,y,D,d){return a(),e("div",null,t)}const A=s(l,[["render",c]]);export{C as __pageData,A as default};
