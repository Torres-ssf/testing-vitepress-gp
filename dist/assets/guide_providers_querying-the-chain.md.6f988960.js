import{_ as s,o as n,c as a,a as l}from"./app.a85cfb4e.js";const C=JSON.parse('{"title":"Interacting with the blockchain","description":"","frontmatter":{},"headers":[{"level":2,"title":"Set up","slug":"set-up","link":"#set-up","children":[]},{"level":2,"title":"Get all coins from an address","slug":"get-all-coins-from-an-address","link":"#get-all-coins-from-an-address","children":[]},{"level":2,"title":"Get spendable resources from an address","slug":"get-spendable-resources-from-an-address","link":"#get-spendable-resources-from-an-address","children":[]},{"level":2,"title":"Get balances from an address","slug":"get-balances-from-an-address","link":"#get-balances-from-an-address","children":[]}],"relativePath":"guide/providers/querying-the-chain.md"}'),e={name:"guide/providers/querying-the-chain.md"},p=l(`<h1 id="interacting-with-the-blockchain" tabindex="-1">Interacting with the blockchain <a class="header-anchor" href="#interacting-with-the-blockchain" aria-hidden="true">#</a></h1><p>Once you have set up a provider, you&#39;re ready to interact with the Fuel blockchain. Here are a few examples of what you can do with a provider; for a more in-depth overview of the API, check the <a href="https://docs.rs/fuels/latest/fuels/signers/provider/struct.Provider.html" target="_blank" rel="noreferrer">official provider API documentation</a>.</p><h2 id="set-up" tabindex="-1">Set up <a class="header-anchor" href="#set-up" aria-hidden="true">#</a></h2><p>You might need to set up a test blockchain first. You can skip this step if you&#39;re connecting to an external blockchain.</p><p>See <a href="./connection.html">connection</a></p><h2 id="get-all-coins-from-an-address" tabindex="-1">Get all coins from an address <a class="header-anchor" href="#get-all-coins-from-an-address" aria-hidden="true">#</a></h2><p>This method returns all coins (of an optional given asset ID) from a wallet, including spent ones.</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Provider</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fuels</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">generateTestWallet</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fuel-ts/wallet/test-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> provider </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Provider</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:4000/graphql</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> assetIdA </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0x0101010101010101010101010101010101010101010101010101010101010101</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wallet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateTestWallet</span><span style="color:#A6ACCD;">(provider</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">42</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> NativeAssetId]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> assetIdA]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// get single coin</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> coin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCoins</span><span style="color:#A6ACCD;">(NativeAssetId)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// get all coins</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> coins </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCoins</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(coin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(coin)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  expect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">objectContaining</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NativeAssetId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(coins)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  expect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">objectContaining</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NativeAssetId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  expect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">objectContaining</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> assetIdA</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L284-L318" target="_blank" rel="noreferrer">See code in context </a><h2 id="get-spendable-resources-from-an-address" tabindex="-1">Get spendable resources from an address <a class="header-anchor" href="#get-spendable-resources-from-an-address" aria-hidden="true">#</a></h2><p>The last argument says how much you want to spend. This method returns only spendable, i.e., unspent coins (of a given asset ID). If you ask for more spendable than the amount of unspent coins you have, it returns an error.</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> spendableResources </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getResourcesToSpend</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NativeAssetId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">max</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> assetIdA </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(spendableResources[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amount)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(spendableResources[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amount)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L328-L335" target="_blank" rel="noreferrer">See code in context </a><h2 id="get-balances-from-an-address" tabindex="-1">Get balances from an address <a class="header-anchor" href="#get-balances-from-an-address" aria-hidden="true">#</a></h2><p>Get all the spendable balances of all assets for an address. This is different from getting the coins because we only return the numbers (the sum of UTXOs coins amount for each asset id) and not the UTXOs coins themselves.</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> walletBalances </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBalances</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(walletBalances)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NativeAssetId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assetId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> assetIdA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">amount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bn</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><a class="anchor-link" href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L320-L326" target="_blank" rel="noreferrer">See code in context </a>`,17),o=[p];function t(r,c,D,y,A,i){return n(),a("div",null,o)}const d=s(e,[["render",t]]);export{C as __pageData,d as default};