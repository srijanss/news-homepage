(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=':after,:before,:host *{box-sizing:border-box}:host{font-family:var(--default-font-family);font-variation-settings:"wght" var(--fw-regular)}:host h1,:host h2,:host h3,:host p{margin:0;padding:0}:host ul{list-style-type:none;margin:0;padding:0}:host button{background:none;border:none;cursor:pointer}:host a{color:var(--color-very-dark-blue);font-family:var(--default-font-family);font-size:1.125rem;line-height:1.3;-webkit-text-decoration:none;text-decoration:none}:host a:hover{color:var(--color-soft-red)}@media (min-width:768px){:host a{color:var(--color-dark-grayish-blue);font-size:.9375rem;line-height:1.8}}:host #close-icon{position:absolute;right:20.8px;top:27.3px}:host nav{height:100%;position:fixed;right:0;top:0;transform:translate(100%);transition:transform .3s ease-in-out;width:256px}:host nav .overlay{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.5)));background-image:linear-gradient(90deg,#00000080,#00000080);height:100%;opacity:0;transition:opacity .1s linear .3s;width:0}:host nav #menu-content{background-color:var(--color-off-white);height:100%;position:absolute;right:0;top:0;width:256px}:host nav #menu-content ul{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:1.5rem;margin-left:1.5rem;margin-top:144px}:host nav.open{transform:translate(0);width:100%}:host nav.open .overlay{opacity:1;width:100%}@media (min-width:768px){:host nav{height:100%;position:relative;transform:none;transition:none;width:100%}:host nav .overlay{display:none}:host nav #menu-content{position:relative;width:100%}:host nav #menu-content ul{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:row;gap:2.5rem;margin:0}}@media (min-width:768px){:host #close-icon,:host #hamburger-icon{display:none}}',l="data:image/svg+xml,%3csvg%20width='32'%20height='31'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2300001A'%20fill-rule='evenodd'%3e%3cpath%20d='m2.919.297%2028.284%2028.284-2.122%202.122L.797%202.419z'/%3e%3cpath%20d='M.797%2028.581%2029.081.297l2.122%202.122L2.919%2030.703z'/%3e%3c/g%3e%3c/svg%3e",h="data:image/svg+xml,%3csvg%20width='40'%20height='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2300001A'%20fill-rule='evenodd'%3e%3cpath%20d='M0%200h40v3H0zM0%207h40v3H0zM0%2014h40v3H0z'/%3e%3cpath%20d='M0%200h40v3H0z'/%3e%3c/g%3e%3c/svg%3e";class d extends HTMLElement{constructor(){super()}connectedCallback(){this.shadow=this.attachShadow({mode:"open"}),this.render(),this.hamburgerIcon=this.shadow.getElementById("hamburger-icon"),this.closeIcon=this.shadow.getElementById("close-icon"),this.menu=this.shadow.getElementById("menu"),this.linkList=this.shadow.querySelectorAll("nav a"),this.setFocusableElements(),this.handleEvents()}render(){this.shadow.innerHTML=`
      <style>
        ${a}
      </style>
      <button id="hamburger-icon" aria-expanded="false" aria-controls="menu">
        <img src="${h}" alt="Menu" width="40" height="17" />
      </button>
      <nav id="menu" aria-label="Primary">
        <div class="overlay"></div>
        <div id="menu-content">
          <button id="close-icon" aria-expanded="false" aria-controls="menu">
            <img src="${l}" alt="Close Menu" />
          </button>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#new-heading"> New </a>
            </li>
            <li>
              <a href="#popular"> Popular </a>
            </li>
            <li>
              <a href="#"> Trending </a>
            </li>
            <li>
              <a href="#"> Categories </a>
            </li>
          </ul>
        </div>
      </nav>
    `}openMenu(){this.menu.classList.add("open"),this.addFocusToMenuItems()}closeMenu(){this.menu.classList.remove("open"),this.removeFocusFromMenuItems()}addFocusToMenuItems(){this.hamburgerIcon.setAttribute("aria-expanded","true"),this.hamburgerIcon.setAttribute("aria-hidden","true"),this.closeIcon.setAttribute("aria-expanded","true"),this.closeIcon.setAttribute("aria-hidden","false"),this.closeIcon.setAttribute("tabindex","0"),Array.from(this.linkList).forEach(o=>{o.setAttribute("tabindex","0"),o.setAttribute("aria-hidden","false")})}removeFocusFromMenuItems(){this.hamburgerIcon.setAttribute("aria-expanded","false"),this.hamburgerIcon.setAttribute("aria-hidden","false"),this.closeIcon.setAttribute("aria-expanded","false"),this.closeIcon.setAttribute("aria-hidden","true"),this.closeIcon.setAttribute("tabindex","-1"),Array.from(this.linkList).forEach(o=>{o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true")})}setFocusableElements(){getComputedStyle(this.hamburgerIcon).display!=="none"?this.removeFocusFromMenuItems():this.addFocusToMenuItems()}handleEvents(){window.addEventListener("resize",()=>{this.setFocusableElements()}),this.hamburgerIcon.addEventListener("click",()=>{this.openMenu()}),this.closeIcon.addEventListener("click",()=>{this.closeMenu()})}}customElements.define("news-nav-bar",d);
