import{_ as e,o as i,c as o,d as l}from"./app.92214221.js";const u=JSON.parse('{"title":"网络请求知识","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.session","slug":"_1-session","link":"#_1-session","children":[]},{"level":2,"title":"2.cookie","slug":"_2-cookie","link":"#_2-cookie","children":[]},{"level":2,"title":"3.jwt","slug":"_3-jwt","link":"#_3-jwt","children":[]}],"relativePath":"note/program/network/request.md","lastUpdated":1689242607000}'),a={name:"note/program/network/request.md"},s=l('<h1 id="网络请求知识" tabindex="-1">网络请求知识 <a class="header-anchor" href="#网络请求知识" aria-hidden="true">#</a></h1><h2 id="_1-session" tabindex="-1">1.session <a class="header-anchor" href="#_1-session" aria-hidden="true">#</a></h2><ul><li><p>Session 是一种在服务器端存储和管理用户状态和会话信息的机制。</p></li><li><p>Session 的工作原理是在用户访问应用程序时，服务器为每个用户创建一个唯一的会话标识（session ID），并将该会话标识关联到该用户的会话数据。</p></li><li><p>在登录验证通过后给前端返回一个 <strong>Session-Id</strong>，一般通过响应头<code>set-cookie</code>来自动存储到浏览器的cookie当中，后续该页面请求会自带cookie。 该方式的缺点就是：需要将所有的会话信息存在服务端，对服务器有很大负担。</p></li></ul><h2 id="_2-cookie" tabindex="-1">2.cookie <a class="header-anchor" href="#_2-cookie" aria-hidden="true">#</a></h2><p>总结一下Cookie的要点：</p><ul><li>Cookie是一种存储在客户端（浏览器）的小型文本文件，用于在浏览器和服务器之间传递数据。</li><li>服务器通过在HTTP响应中设置&quot;Set-Cookie&quot;头部字段来发送Cookie给客户端，浏览器将其存储在本地。</li><li>Cookie通常由键值对组成，例如<code>key=value</code>。</li><li>Cookie具有以下属性： <ul><li>名称（Name）：标识Cookie的名称。</li><li>值（Value）：存储在Cookie中的数据。</li><li>域（Domain）：指定Cookie所属的域名。</li><li>路径（Path）：指定Cookie有效的路径。</li><li>过期时间（Expires/Max-Age）：指定Cookie的过期时间。</li><li>安全标记（Secure）：指定Cookie只能通过安全连接（HTTPS）发送。</li><li>HttpOnly标记（HttpOnly）：指定Cookie只能通过HTTP协议发送，无法通过客户端的脚本访问。</li></ul></li></ul><h2 id="_3-jwt" tabindex="-1">3.jwt <a class="header-anchor" href="#_3-jwt" aria-hidden="true">#</a></h2><p>在 JWT 中，通常使用签名而不是加密来保证令牌的完整性和真实性。签名使用密钥来生成和验证，而不是进行加密和解密。</p><p>下面是生成和验证 JWT 的过程：</p><ol><li><p>生成 JWT：</p><ul><li>构建头部（Header）：包含指定的算法和令牌类型。将头部转换为 JSON 格式，并使用 Base64 编码。</li><li>构建载荷（Payload）：包含需要传输的数据，如用户身份、权限、过期时间等。将载荷转换为 JSON 格式，并使用 Base64 编码。</li><li>将编码后的头部和载荷用点号连接起来，形成一个没有空格的字符串，即：base64UrlEncode(头部) + &#39;.&#39; + base64UrlEncode(载荷)。</li><li>使用密钥和指定的签名算法（如 HMAC、RSA）对上述字符串进行签名，生成签名。</li><li>将签名加入到之前的字符串后面，形成最终的 JWT：base64UrlEncode(头部) + &#39;.&#39; + base64UrlEncode(载荷) + &#39;.&#39; + 签名。</li></ul></li><li><p>验证 JWT：</p><ul><li>将接收到的 JWT 使用点号进行分割，分别获取头部、载荷和签名。</li><li>使用相同的密钥和签名算法对头部和载荷进行签名，生成一个新的签名。</li><li>将新生成的签名与接收到的签名进行比较，如果两者一致，则表示 JWT 是有效的。</li></ul></li></ol><p>签名的生成和验证过程都依赖于使用的密钥和签名算法。生成和验证的密钥必须是相同的，否则无法验证签名的有效性。</p>',11),t=[s];function r(n,d,c,_,p,h){return i(),o("div",null,t)}const T=e(a,[["render",r]]);export{u as __pageData,T as default};
