"use strict";(self.webpackChunkcindyeke_portfolio=self.webpackChunkcindyeke_portfolio||[]).push([[300],{300:(e,t,s)=>{s.r(t),s.d(t,{navListItemsArray:()=>c});var a=document.querySelector("[data-nav-list]"),n=document.querySelector("[data-nav-toggle]"),i=document.querySelector(".fa"),o=document.querySelector("[data-nav-theme-toggle-control]"),c=function(){var e=document.createTextNode("about"),t=document.createElement("a"),s=document.createElement("li");t.href="#",s.className="nav__item nav__item--toggle open",t.className="nav__link",t.appendChild(e),s.appendChild(t);var a=document.createTextNode("projects"),n=document.createElement("li"),i=document.createElement("a");return i.href="#projects",n.className="nav__item nav__item--toggle open",i.className="nav__link",i.appendChild(a),n.appendChild(i),[s,t,n,i]}(),d=function(e){a.insertBefore(e[0],a.children[1]),a.insertBefore(e[2],a.children[2])};screen.width<1008&&(n.style.display="none",d(c));var l=!0;n.addEventListener("click",(function(){l?(i.classList.add("fa-spin"),i.classList.add("ease-display"),setTimeout((function(){i.classList.remove("ease-display"),i.classList.remove("fa-bars"),i.classList.add("fa-times"),i.classList.remove("fa-spin")}),[500]),d(c),function(e){a.classList.add("expand"),setTimeout((function(){o.classList.add("expand")}),[700]),setTimeout((function(){e[0].classList.remove("open")}),[1e3]),setTimeout((function(){e[2].classList.remove("open")}),[1500])}(c),l=!l):(i.classList.add("fa-counter-spin"),i.classList.add("ease-display"),setTimeout((function(){i.classList.remove("ease-display"),i.classList.remove("fa-times"),i.classList.add("fa-bars"),i.classList.remove("fa-counter-spin")}),[500]),setTimeout((function(){a.children[2].classList.add("open")}),[200]),setTimeout((function(){a.children[1].classList.add("open")}),[700]),setTimeout((function(){o.classList.remove("expand")}),[1200]),setTimeout((function(){a.classList.remove("expand")}),[2500]),setTimeout((function(){a.removeChild(a.children[1]),a.removeChild(a.children[1])}),[3e3]),l=!l)}))}}]);