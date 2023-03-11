import{d as n}from"./chunks/versions.data.e5c6b772.js";import{o as d,c as s,x as e,a as t,U as c}from"./app.13a25981.js";import"./chunks/theme.c66773c8.js";const o=e("h1",{id:"predicates",tabindex:"-1"},[t("Predicates "),e("a",{class:"header-anchor",href:"#predicates","aria-hidden":"true"},"#")],-1),r=e("p",null,"Predicates, in Sway, are programs that return a Boolean value, and they do not have any side effects (they are pure).",-1),h=e("h2",{id:"instantiating-predicates",tabindex:"-1"},[t("Instantiating predicates "),e("a",{class:"header-anchor",href:"#instantiating-predicates","aria-hidden":"true"},"#")],-1),l=e("code",null,"forc build",-1),p=e("code",null,"predicate",-1),u=c('<p>The created <code>predicate</code> instance has two fields. The predicate <code>bytes (byte code)</code> and the predicate <code>address</code>. This address is generated from the byte code and is the same as the <code>P2SH</code> address used in Bitcoin. Users can seamlessly send assets to the predicate address as they do for any other address on the chain. To spend the predicate funds, the user has to provide the original <code>byte code</code> of the predicate together with the <code>predicate data</code>. The <code>predicate data</code> will be used when executing the <code>byte code</code>, and if the predicate is validated successfully, the funds will be accessible.</p><p>In the next section, we show how to interact with a predicate and explore an example where specific signatures are needed to spend the predicate funds.</p><h2 id="calling-a-predicate-with-a-main-function-that-takes-arguments" tabindex="-1">Calling a predicate with a <code>main</code> function that takes arguments <a class="header-anchor" href="#calling-a-predicate-with-a-main-function-that-takes-arguments" aria-hidden="true">#</a></h2><p>Suppose your Sway predicate <code>main</code> function is written using the arguments passed to the <code>main</code> function like so:</p><p>You can still create a <code>Predicate</code> in the same way as above, but you can pass in a <code>JsonAbi</code> using the JSON generated from <code>forc</code>.</p>',5),k=JSON.parse('{"title":"Predicates","description":"","frontmatter":{},"headers":[{"level":2,"title":"Instantiating predicates","slug":"instantiating-predicates","link":"#instantiating-predicates","children":[]},{"level":2,"title":"Calling a predicate with a main function that takes arguments","slug":"calling-a-predicate-with-a-main-function-that-takes-arguments","link":"#calling-a-predicate-with-a-main-function-that-takes-arguments","children":[]}],"relativePath":"guide/predicates/index.md","lastUpdated":1678564845000}'),g={name:"guide/predicates/index.md"},x=Object.assign(g,{setup(m){const{sway:a}=n,i=`https://fuellabs.github.io/sway/v${a}/book/introduction/index.html`;return(_,f)=>(d(),s("div",null,[o,r,h,e("p",null,[t("Similar to contracts, once you've written a predicate in Sway and compiled it with "),l,t(" (read "),e("a",{href:i,target:"_blank",rel:"noreferrer"},"here"),t(" for more on how to work with Sway), you'll get the predicate binary. Using the binary, you can instantiate a "),p,t(" as shown in the code snippet below:")]),u]))}});export{k as __pageData,x as default};