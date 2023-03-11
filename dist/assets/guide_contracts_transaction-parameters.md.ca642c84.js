import{_ as t,o as e,c as a,U as s}from"./app.13a25981.js";import"./chunks/theme.c66773c8.js";const f=JSON.parse('{"title":"Transaction parameters","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contracts/transaction-parameters.md","lastUpdated":1678564845000}'),o={name:"guide/contracts/transaction-parameters.md"},n=s('<h1 id="transaction-parameters" tabindex="-1">Transaction parameters <a class="header-anchor" href="#transaction-parameters" aria-hidden="true">#</a></h1><p>Transaction parameters are:</p><ol><li>Gas price;</li><li>Gas limit;</li><li>Maturity.</li></ol><p>You can configure these parameters by using the optional <code>TxParams</code> and passing it to a chain method called <code>txParams</code>:</p><p>If you do not pass the <code>TxParams</code>, the values default to those of the chainConfig provided to your Fuel node.</p><p>As you might have noticed already, <code>TxParams</code> can also be specified when deploying contracts or transferring assets by passing it to the respective methods.</p><blockquote><p><strong>Note:</strong> whenever you perform an action that results in a transaction (contract deployment, contract call, asset transfer), the SDK will automatically estimate the fee based on the set gas limit and the transaction&#39;s byte size. This estimation is used when building the transaction. A side-effect of this is that your wallet must at least own a single coin of the base asset of any amount.</p></blockquote>',7),r=[n];function i(c,d,l,p,h,m){return e(),a("div",null,r)}const g=t(o,[["render",i]]);export{f as __pageData,g as default};
