(self.webpackChunkcindyeke_portfolio=self.webpackChunkcindyeke_portfolio||[]).push([[148],{148:()=>{var e,t,n=document.querySelectorAll("[data-project-list]"),o=!1,c=function(n,c){var u;u=n.type.includes("touch")?n.changedTouches[0].pageX:n.pageX,o=!0,c.classList.add("active"),e=u-c.offsetLeft,t=c.scrollLeft},u=function(e){o=!1,e.classList.remove("active")},a=function(n,c){var u;if(u=n.type.includes("touch")?n.changedTouches[0].pageX:n.pageX,o){n.preventDefault();var a=u-c.offsetLeft-e;c.scrollLeft=t-a}};n&&n.forEach((function(e){e.addEventListener("touchstart",(function(t){c(t,e)})),e.addEventListener("touchmove",(function(t){a(t,e)})),e.addEventListener("touchend",(function(){u(e)})),e.addEventListener("mousedown",(function(t){c(t,e)})),e.addEventListener("mousemove",(function(t){a(t,e)})),e.addEventListener("mouseleave",(function(){u(e)})),e.addEventListener("mouseup",(function(){u(e)}))}))}}]);