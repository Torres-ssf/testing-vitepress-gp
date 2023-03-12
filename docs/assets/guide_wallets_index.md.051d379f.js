import{_ as e,o as t,c as a,a as n}from"./app.1b12a468.js";const f=JSON.parse('{"title":"Managing wallets","description":"","frontmatter":{},"headers":[],"relativePath":"guide/wallets/index.md","lastUpdated":1678647917000}'),s={name:"guide/wallets/index.md"},o=n('<h1 id="managing-wallets" tabindex="-1">Managing wallets <a class="header-anchor" href="#managing-wallets" aria-hidden="true">#</a></h1><p>You can use wallets for many important things, for instance:</p><ol><li>Checking your balance;</li><li>Transferring coins to a destination address or contract;</li><li>Signing messages and transactions;</li><li>Paying for network fees when sending transactions or deploying smart contracts.</li></ol><p>The SDK gives you many different ways to create and access wallets. Let&#39;s explore these different approaches in the following sub-chapters.</p><blockquote><p><strong>Note:</strong> Keep in mind that you should never share your private/secret key. And in the case of wallets that were derived from a mnemonic phrase, never share your mnemonic phrase. If you&#39;re planning on storing the wallet on disk, do not store the plain private/secret key and do not store the plain mnemonic phrase. Instead, use <code>WalletManager</code> to encrypt its content first before saving it to disk.</p></blockquote>',5),r=[o];function i(l,c,d,p,h,g){return t(),a("div",null,r)}const m=e(s,[["render",i]]);export{f as __pageData,m as default};
