import{_ as a,o as e,c as n,a as s}from"./app.a85cfb4e.js";const h=JSON.parse('{"title":"Encrypting and storing wallets","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating a wallet and storing an encrypted JSON wallet on disk","slug":"creating-a-wallet-and-storing-an-encrypted-json-wallet-on-disk","link":"#creating-a-wallet-and-storing-an-encrypted-json-wallet-on-disk","children":[{"level":6,"title":"See code in context","slug":"see-code-in-context","link":"#see-code-in-context","children":[]}]},{"level":2,"title":"Encrypting and storing a wallet created from a mnemonic or private key","slug":"encrypting-and-storing-a-wallet-created-from-a-mnemonic-or-private-key","link":"#encrypting-and-storing-a-wallet-created-from-a-mnemonic-or-private-key","children":[]}],"relativePath":"guide/wallets/encrypting-and-storing-wallets.md"}'),t={name:"guide/wallets/encrypting-and-storing-wallets.md"},l=s(`<h1 id="encrypting-and-storing-wallets" tabindex="-1">Encrypting and storing wallets <a class="header-anchor" href="#encrypting-and-storing-wallets" aria-hidden="true">#</a></h1><h2 id="creating-a-wallet-and-storing-an-encrypted-json-wallet-on-disk" tabindex="-1">Creating a wallet and storing an encrypted JSON wallet on disk <a class="header-anchor" href="#creating-a-wallet-and-storing-an-encrypted-json-wallet-on-disk" aria-hidden="true">#</a></h2><p>You can also manage a wallet using <a href="https://cryptobook.nakov.com/symmetric-key-ciphers/ethereum-wallet-encryption" target="_blank" rel="noreferrer">JSON wallets</a> that are securely encrypted and stored on the disk. This makes it easier to manage multiple wallets, especially for testing purposes.</p><p>You can create a random wallet and, at the same time, encrypt and store it. Then, later, you can recover the wallet if you know the master password:</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> walletManager </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">WalletManager</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> password </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0b540281-f87b-49ca-be37-2264c7f260f7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wallet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Wallet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">generate</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> walletManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unlock</span><span style="color:#A6ACCD;">(password)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h6 id="see-code-in-context" tabindex="-1"><a href="https://github.com/FuelLabs/fuels-ts/blob/master/packages/wallet-manager/src/wallet-manager.test.ts#L123-L129" target="_blank" rel="noreferrer">See code in context</a> <a class="header-anchor" href="#see-code-in-context" aria-hidden="true">#</a></h6><h2 id="encrypting-and-storing-a-wallet-created-from-a-mnemonic-or-private-key" tabindex="-1">Encrypting and storing a wallet created from a mnemonic or private key <a class="header-anchor" href="#encrypting-and-storing-a-wallet-created-from-a-mnemonic-or-private-key" aria-hidden="true">#</a></h2><p>If you have already created a wallet Manager using a mnemonic phrase or a private key, you can also encrypt it and save it to disk:</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> walletManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lock</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9),r=[l];function o(p,c,i,d,y,g){return e(),n("div",null,r)}const u=a(t,[["render",o]]);export{h as __pageData,u as default};