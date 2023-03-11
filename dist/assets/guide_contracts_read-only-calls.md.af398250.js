import{_ as e,o as t,c as a,U as o}from"./app.13a25981.js";import"./chunks/theme.c66773c8.js";const m=JSON.parse('{"title":"Read-only calls","description":"","frontmatter":{},"headers":[{"level":2,"title":"When to use get() vs call()","slug":"when-to-use-get-vs-call","link":"#when-to-use-get-vs-call","children":[]}],"relativePath":"guide/contracts/read-only-calls.md","lastUpdated":1678564845000}'),n={name:"guide/contracts/read-only-calls.md"},c=o('<h1 id="read-only-calls" tabindex="-1">Read-only calls <a class="header-anchor" href="#read-only-calls" aria-hidden="true">#</a></h1><p>Sometimes you want to call a contract method that does not change the state of the blockchain. For instance, a method that only <em>reads</em> a value from storage and returns it without making any changes to storage.</p><p>In this case, there is no need to create an actual blockchain transaction; you only want to read a value quickly.</p><p>You can do this with the SDK. Instead of <code>.call()</code>ing the method, use <code>.get()</code>:</p><p><code>get()</code> doesn&#39;t take funding, as it is a read-only call that doesn&#39;t alter the chain state.</p><p>If you want to dry run a transaction call that takes funding without altering the chain state, use <code>dryRun()</code>.</p><h2 id="when-to-use-get-vs-call" tabindex="-1">When to use <code>get()</code> vs <code>call()</code> <a class="header-anchor" href="#when-to-use-get-vs-call" aria-hidden="true">#</a></h2><p>Anytime you want to call a method that does <em>not</em> change the state of the blockchain, use <code>get()</code>. If you want to call a method that <em>does</em> change the state of the blockchain, use <code>call()</code>.</p><p><code>get()</code> is intended to be used only for read-only calls.</p>',9),s=[c];function l(d,h,r,i,u,p){return t(),a("div",null,s)}const y=e(n,[["render",l]]);export{m as __pageData,y as default};
