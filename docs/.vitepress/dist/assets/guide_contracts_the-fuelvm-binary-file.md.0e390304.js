import{_ as s,o as n,c as a,a as l}from"./app.1b12a468.js";const i=JSON.parse('{"title":"The FuelVM binary file","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contracts/the-fuelvm-binary-file.md","lastUpdated":1678640713000}'),p={name:"guide/contracts/the-fuelvm-binary-file.md"},o=l(`<h1 id="the-fuelvm-binary-file" tabindex="-1">The FuelVM binary file <a class="header-anchor" href="#the-fuelvm-binary-file" aria-hidden="true">#</a></h1><p>The command <code>forc build</code> compiles your Sway code and generates the bytecode: the binary code that the Fuel Virtual Machine will interpret. For instance, the smart contract below:</p><div class="language-rust"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">contract</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">abi </span><span style="color:#FFCB6B;">MyContract</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bool</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">impl</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyContract</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Contract</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>After <code>forc build</code>, will have a binary file that contains:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">out/debug/my-test.bin</span></span>
<span class="line"><span style="color:#FFCB6B;">G4</span><span style="color:#A6ACCD;">]�]D</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">I</span><span style="color:#C3E88D;">]C�As@</span></span>
<span class="line"><span style="color:#C3E88D;">           </span><span style="color:#FFCB6B;">6</span><span style="color:#C3E88D;">]C�</span><span style="color:#A6ACCD;font-style:italic;">$@</span><span style="color:#89DDFF;">!</span><span style="color:#FFCB6B;">QK%</span></span>
<span class="line"></span></code></pre></div><p>This seems very unreadable! But, <code>forc</code> has a nice interpreter for this bytecode: <code>forc </code>parse-bytecode\`, which will interpret that binary data and output the equivalent FuelVM assembly:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">forc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parse-bytecode</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">out/debug/my-test.bin</span></span>
<span class="line"><span style="color:#FFCB6B;">half-word</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">byte</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">op</span><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">raw</span><span style="color:#A6ACCD;">           </span><span style="color:#C3E88D;">notes</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">0</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">JI</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">             </span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">04</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">jump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">byte</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">NOOP</span><span style="color:#A6ACCD;">              </span><span style="color:#F78C6C;">47</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">Undefined</span><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">section</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">offset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">Undefined</span><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">34</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">section</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">offset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hi</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">52</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">LW</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">63</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">12</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">5d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">01</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">ADD</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">63</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">63</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">24</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">LW</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">17</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">73</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">5d</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">49</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">28</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">LW</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">63</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">5d</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">43</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">01</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">32</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">EQ</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">17</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">41</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">9</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">36</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">JNZI</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">73</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">0b</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">conditionally</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">byte</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">10</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">RVRT</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">           </span><span style="color:#F78C6C;">36</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">11</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">44</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">LW</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">63</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">5d</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">43</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">12</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">48</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">RET</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">           </span><span style="color:#F78C6C;">24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">13</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">52</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">Undefined</span><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">14</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">56</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">Undefined</span><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">01</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">15</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">Undefined</span><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">16</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">64</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">XOR</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">27</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">53</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">51</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">4b</span></span>
<span class="line"></span></code></pre></div><p>If you want to deploy your smart contract using the SDK, this binary file is important; it&#39;s what we&#39;ll be sending to the FuelVM in a transaction.</p>`,8),C=[o];function e(t,c,r,y,A,D){return n(),a("div",null,C)}const d=s(p,[["render",e]]);export{i as __pageData,d as default};
