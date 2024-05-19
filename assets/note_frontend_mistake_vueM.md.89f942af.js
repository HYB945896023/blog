import{_ as e,o as l,c as o,g as p,w as r,a as s,b as a,d as t,r as c}from"./app.92214221.js";const v=JSON.parse('{"title":"Vue2坑","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. vue动态添加路由，跳转页面时，页面报错路由重复：","slug":"_1-vue动态添加路由-跳转页面时-页面报错路由重复","link":"#_1-vue动态添加路由-跳转页面时-页面报错路由重复","children":[]},{"level":2,"title":"2. 二进制转blob不可直接用img直接展示：","slug":"_2-二进制转blob不可直接用img直接展示","link":"#_2-二进制转blob不可直接用img直接展示","children":[]},{"level":2,"title":"3. axios的responType:blob","slug":"_3-axios的respontype-blob","link":"#_3-axios的respontype-blob","children":[]},{"level":2,"title":"4. vue项目创建","slug":"_4-vue项目创建","link":"#_4-vue项目创建","children":[{"level":3,"title":"1.Vue3 对象直接替换 丢失了响应式","slug":"_1-vue3-对象直接替换-丢失了响应式","link":"#_1-vue3-对象直接替换-丢失了响应式","children":[]}]}],"relativePath":"note/frontend/mistake/vueM.md","lastUpdated":1686823571000}'),i={name:"note/frontend/mistake/vueM.md"},y=s("h1",{id:"vue2坑",tabindex:"-1"},[a("Vue2坑 "),s("a",{class:"header-anchor",href:"#vue2坑","aria-hidden":"true"},"#")],-1),F=s("h2",{id:"_1-vue动态添加路由-跳转页面时-页面报错路由重复",tabindex:"-1"},[a("1. vue动态添加路由，跳转页面时，页面报错路由重复： "),s("a",{class:"header-anchor",href:"#_1-vue动态添加路由-跳转页面时-页面报错路由重复","aria-hidden":"true"},"#")],-1),D=t(`<p>  这是因为在permission中，动态挂载路由时使用了下面这句 <code>next({ ...to, replace: true })</code> 该句会不断触发路由守卫，直到所有的动态路由挂载完毕，每一次进入路由都是会去获取路由，并添加路由： <code>accessRoutes.forEach(routes =&gt; router.addRoute(routes))</code><br> 所以需要判断让该语句不重复执行去重复挂载路由 最终方案：<code>firstLogin &amp;&amp; accessRoutes.forEach(routes =&gt; router.addRoute(routes))</code></p><h2 id="_2-二进制转blob不可直接用img直接展示" tabindex="-1">2. 二进制转blob不可直接用img直接展示： <a class="header-anchor" href="#_2-二进制转blob不可直接用img直接展示" aria-hidden="true">#</a></h2><p>拿到二进制转化成bolb不可直接给img展示，需要在接口那里设置responseType :&#39;blob&#39;,再拿到blob然后createURL才可以展示</p><h2 id="_3-axios的respontype-blob" tabindex="-1">3. axios的responType:blob <a class="header-anchor" href="#_3-axios的respontype-blob" aria-hidden="true">#</a></h2><p>起初一直以为是http中的配置项，后来以为是请求参数为responType:blob,然后拼在后面，最后发现是axios自己的配置项，如果直接写在请求体对象中，会被直接序列化拼接在后面。 最终解决：另外配置一个请求类型</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> get </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">responseType</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">service</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">responseType</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">([</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_4-vue项目创建" tabindex="-1">4. vue项目创建 <a class="header-anchor" href="#_4-vue项目创建" aria-hidden="true">#</a></h2><p>vue create project时，对于使用哪个包管理工具是有顺序的，npm是最低优先级，如果电脑中有安装pnpm与yarn则优先使用这两个，如果想要直接选中自己要的包管理工具进行安装就使用以下指令：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">vue create project </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">packageManager</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">npm</span><span style="color:#A6ACCD;"> (替换想要的包管理工具)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="vue3坑" tabindex="-1">Vue3坑 <a class="header-anchor" href="#vue3坑" aria-hidden="true">#</a></h1><h3 id="_1-vue3-对象直接替换-丢失了响应式" tabindex="-1">1.Vue3 对象直接替换 丢失了响应式 <a class="header-anchor" href="#_1-vue3-对象直接替换-丢失了响应式" aria-hidden="true">#</a></h3><p>这是因为proxy的缘故，不能像vue2直接替换整个对象，解决方法有：</p><ol><li>使用ref定义对象</li><li>Reactive，将那个需要被覆盖的对象作为对象属性，赋值时直接对象.属性 即可成功赋值</li><li>使用object.assign(原对象，目标对象)</li></ol>`,13);function d(u,b,A,h,C,m){const n=c("font");return l(),o("div",null,[y,F,p(n,{color:"#dd0000"},{default:r(()=>[a('vue-router.esm.js?8c4f:16 [vue-router] Duplicate named routes definition: { name: "Login", path: "/login" }')]),_:1}),D])}const g=e(i,[["render",d]]);export{v as __pageData,g as default};
