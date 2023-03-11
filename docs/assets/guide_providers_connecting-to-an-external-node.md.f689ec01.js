import{_ as e,o as t,c as n,U as o}from"./app.13a25981.js";import"./chunks/theme.c66773c8.js";const g=JSON.parse('{"title":"Connecting to the Testnet or an external node","description":"","frontmatter":{},"headers":[],"relativePath":"guide/providers/connecting-to-an-external-node.md","lastUpdated":1678564845000}'),a={name:"guide/providers/connecting-to-an-external-node.md"},r=o('<h1 id="connecting-to-the-testnet-or-an-external-node" tabindex="-1">Connecting to the Testnet or an external node <a class="header-anchor" href="#connecting-to-the-testnet-or-an-external-node" aria-hidden="true">#</a></h1><p>We can interact with the <code>Testnet</code> node by using the following example.</p><p>In the code example, we connected a new provider to the Testnet node and created a new wallet from a private key.</p><blockquote><p><strong>Note:</strong> New wallets on the Testnet will not have any assets! They can be obtained by providing the wallet address to the faucet at</p><p><a href="https://faucet-beta-1.fuel.network" target="_blank" rel="noreferrer">faucet-beta-1.fuel.network</a></p><p>Once the assets have been transferred to the wallet, you can reuse it in other tests by providing the private key!</p><p>In addition to the faucet, there is a block explorer for the Tesnet at</p><p><a href="https://fuellabs.github.io/block-explorer-v2" target="_blank" rel="noreferrer">block-explorer</a></p></blockquote><p>If you want to connect to another node just change the url or IP and port. For example, to connect to a local node that was created with <code>fuel-core</code> you can use:</p>',5),c=[r];function s(d,l,i,p,h,_){return t(),n("div",null,c)}const b=e(a,[["render",s]]);export{g as __pageData,b as default};