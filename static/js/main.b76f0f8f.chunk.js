(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{11:function(e,t,a){e.exports={wrapper:"BlinkView_wrapper__2DYeT"}},13:function(e,t,a){e.exports={wrapper:"FadeInView_wrapper__jsXEg"}},15:function(e,t,a){e.exports={wrapper:"CRIPage_wrapper__1_qhZ"}},16:function(e,t,a){e.exports={wrapper:"ContactPage_wrapper__2-tq6"}},18:function(e,t,a){e.exports=a(37)},2:function(e,t,a){e.exports={animationWrapper:"ReversChangePage_animationWrapper__Zj3oC",blackBlock:"ReversChangePage_blackBlock__tWiUt",whiteBlock:"ReversChangePage_whiteBlock__2kafI",mainContentWrapper:"ReversChangePage_mainContentWrapper__Orp5d"}},23:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);var l=a(1),o=a(6),m=a.n(o),s=function(){return Object(n.useEffect)((function(){var e=new Image;e.src="/image/profile-image.jpg",e.onload=function(){var t=document.getElementById("profile-image-canvas");t.getContext("2d").drawImage(e,0,0,t.width,t.height)}}),[]),r.a.createElement("canvas",{width:500,height:500,id:"profile-image-canvas",className:m.a.profileImage})},u=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window,t=e.scrollY,a=e.innerHeight;i(Math.max(0,1-2*t/a))}))}),[]),r.a.createElement("div",{className:m.a.introducePage,style:{opacity:a}},r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement("h1",null,"Hwang Seung-hyun")))},h=a(4),g=a.n(h),d=a(11),p=a.n(d),f=function(e){var t=e.title,a=Object(n.useState)(g.a.generate()+Date.now()),i=Object(l.a)(a,1)[0],c=Object(n.useState)(0),o=Object(l.a)(c,2),m=o[0],s=o[1];return Object(n.useEffect)((function(){function e(){var e=document.getElementById(i).getBoundingClientRect(),t=window.innerHeight,a=e.top;a/t>=-.5&&s(+Math.min(1,Math.pow(1-a/t,10)).toFixed(5))}return e(),window.addEventListener("scroll",e),window.addEventListener("resize",e),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}),[]),r.a.createElement("div",{className:p.a.wrapper,style:{opacity:m},id:i},r.a.createElement("h2",null,t))},w=a(2),v=a.n(w),E=a(12),b=a.n(E),_=a(13),k=a.n(_),j=function(e){var t=e.children,a=e.className,i=Object(n.useState)(g.a.generate()+Date.now()),c=Object(l.a)(i,1)[0],o=Object(n.useState)(0),m=Object(l.a)(o,2),s=m[0],u=m[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function e(){document.getElementById(c).getBoundingClientRect().y<window.innerHeight/2&&(u(1),window.removeEventListener("scroll",e))}))}),[]),r.a.createElement("div",{className:b()(k.a.wrapper,a),id:c},r.a.createElement("div",{style:{opacity:s}},t))};var O=function(e,t){var a=Object(n.useState)(0),r=Object(l.a)(a,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){function a(){var a=document.getElementById(e),n=document.getElementById(t),r=a.getBoundingClientRect().top;if(Math.abs(r)<100){var i=n.getBoundingClientRect(),l=i.height,o=i.y,m=window.innerHeight,s=(l+o-m)/(2*m),u=1-Math.max(0,Math.min(1,s));c(u)}}a(),window.addEventListener("scroll",a),window.addEventListener("resize",a),setInterval(a,30)}),[]),i},y=function(){var e=O("reverse-change-animatin-section","reverse-change-wrapper"),t=Object(n.useMemo)((function(){var t=Math.pow(5,2)*e;return Object.keys(Array(Math.pow(5,2)).fill(null)).map((function(e){return r.a.createElement("div",{key:e+"-reverse-change-animation-block",style:{height:window.innerHeight/5+"px"},className:t>+e?v.a.blackBlock:v.a.whiteBlock})}))}),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.a.animationWrapper,id:"reverse-change-wrapper"},r.a.createElement("div",{id:"reverse-change-animatin-section",style:{gridTemplateColumns:"1fr ".repeat(5)}},t)),r.a.createElement(j,{className:v.a.mainContentWrapper},r.a.createElement("h2",null,"Reverse Change"),r.a.createElement("h3",null,"Simple play board game"),r.a.createElement("img",{src:"/image/reverse-change-mac-book.png",alt:"Reverse change on laptop"}),r.a.createElement("a",{href:"https://hsh-game.github.io/reverse-change",target:"_blank",rel:"noopener noreferrer"},"Play")," / ",r.a.createElement("a",{href:"https://github.com/hsh-game/reverse-change",target:"_blank",rel:"noopener noreferrer"},"Github")))},I=a(7),S=a.n(I),C=new Image;function P(e,t,a){var n=e.width,r=e.height;t.strokeStyle="#000",t.lineWidth=Math.max(7,n/300),t.beginPath(),t.moveTo(0,r/2),t.lineTo(n*a,r/2),t.moveTo(n/2,0),t.lineTo(n/2,r*a),t.stroke(),t.fillStyle="#000",t.beginPath(),t.arc(n/2,r/2,n/30,0,2*Math.PI*a),t.fill(),t.strokeStyle="#ddd",t.beginPath(),t.arc(n/2,r/2,n/30,0,2*Math.PI*a),t.stroke()}C.src="/image/omok.jpg";var W=function(){var e=Object(n.useState)(window.innerWidth),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(window.innerHeight),o=Object(l.a)(c,2),m=o[0],s=o[1],u=Object(n.useState)("0"),h=Object(l.a)(u,2),g=h[0],d=h[1],p=O("ai-omok-animatin-section","ai-omok-wrapper");return Object(n.useEffect)((function(){var e=document.getElementById("ai-omok-animatin-section"),t=e.getContext("2d");if(p<.5){var a=e.width,n=e.height;t.fillStyle="#000",t.fillRect(0,0,a,n),t.fillStyle="rgba(240, 198, 143, ".concat(p/.5,")"),t.fillRect(0,0,a,n),P(e,t,Math.min(1,p/.5*2));var r=window,c=r.innerWidth,l=r.innerHeight;a===c&&n===l||(i(c),s(l),d("0"))}else{var o=e.width,m=e.height;t.fillStyle="#f0c68f",t.fillRect(0,0,o,m),P(e,t,1),t.globalAlpha=(p-.5)/.5,t.drawImage(C,0,0,o,m),t.globalAlpha=1;var u=Math.min(.9*window.innerWidth,500);o===u&&m===u||(i(u),s(u),d("1rem"))}}),[a,m,p]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:S.a.animationWrapper,id:"ai-omok-wrapper"},r.a.createElement("canvas",{id:"ai-omok-animatin-section",width:2*a,height:2*m,style:{width:a+"px",height:m+"px",top:g}})),r.a.createElement("div",{className:S.a.mainContentWrapper},r.a.createElement("h2",null,"AI Omok"),r.a.createElement("h3",null,"Play Omok With AI"),r.a.createElement("a",{href:"https://hsh-game.github.io/omok",target:"_blank",rel:"noopener noreferrer"},"Play")," / ",r.a.createElement("a",{href:"https://github.com/hsh-game/omok",target:"_blank",rel:"noopener noreferrer"},"Github")))},B=a(14),R=a.n(B),x=a(15),M=a.n(x),H=Array(101).fill(null).map((function(e,t){var a=new Image;return a.src="/image/cri-frames/"+((t+1)/1e4).toFixed(4).split(".")[1]+".jpg",{image:a,promise:new Promise((function(e){a.onload=function(){return e(a)}}))}})),N=function(){var e=O("cri-animatin-section","cri-wrapper"),t=Object(n.useState)(window.innerWidth),a=Object(l.a)(t,2),i=a[0],c=a[1],o=Object(n.useState)(window.innerHeight),m=Object(l.a)(o,2),s=m[0],u=m[1],h=Object(n.useState)(0),g=Object(l.a)(h,2),d=g[0],p=g[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){c(window.innerWidth),u(window.innerHeight)}))}),[]),Object(n.useEffect)((function(){var t=document.getElementById("cri-animatin-section"),a=t.getContext("2d"),n=t.width,r=t.height,i=H[Math.floor((H.length-1)*Math.min(1,1.3*e))].image,c=R()(i.naturalWidth,i.naturalHeight,t.width,t.height);a.globalAlpha=5*e,a.clearRect(0,0,n,r),a.drawImage(i,c.offsetLeft,c.offsetTop,c.width,c.height),p(e>.5?1:0)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:M.a.wrapper,id:"cri-wrapper"},r.a.createElement("canvas",{id:"cri-animatin-section",width:i,height:s}),r.a.createElement("div",{style:{opacity:d}},r.a.createElement("h1",null,"Cultural Resources"))))},L=["HTML","CSS","JavaScript","PHP","C","Git","Perl","SCSS","NodeJS","TypeScript","React","React Native","React with Typescript"],T=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){setInterval((function(){i((function(e){return++e>=L.length?0:e}))}),500)}),[]),r.a.createElement(f,{title:"I can use ".concat(L[a],".")})},A=a(16),D=a.n(A),F=a(17),G=function(){return r.a.createElement("div",{className:D.a.wrapper},r.a.createElement("div",null,r.a.createElement("h2",null,"I can create whatever you want."),r.a.createElement("h2",null,"Contact me."),r.a.createElement("p",null,"GitHub: ",r.a.createElement("a",{href:"https://github.com/hsh2001",target:"_blank",rel:"noopener noreferrer"},"github.com/hsh2001"),r.a.createElement("br",null),"Instagram: ",r.a.createElement("a",{href:"https://www.instagram.com/dev_hsh",target:"_blank",rel:"noopener noreferrer"},"@dev_hsh"),r.a.createElement("br",null),"e-mail: ",r.a.createElement("a",{href:"mailto:tmdgus0084@naver.com"},"tmdgus0084@naver.com"),r.a.createElement("br",null),"Disqus:"),r.a.createElement(F.DiscussionEmbed,{shortname:"who-am-i-1",config:{url:"http://dev.hsh.kr",identifier:"1",title:"HSH developer"}})))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(f,{title:"I am a Game Developer."}),r.a.createElement(y,null),r.a.createElement(W,null),r.a.createElement(f,{title:"I am a Web Developer."}),r.a.createElement(N,null),r.a.createElement(T,null),r.a.createElement("hr",null),r.a.createElement(G,null))},J=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null))};c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={profileImage:"IntroducePage_profileImage__29Rak",introducePage:"IntroducePage_introducePage__2c8PG"}},7:function(e,t,a){e.exports={animationWrapper:"AIOmokPage_animationWrapper__3GUUK",mainContentWrapper:"AIOmokPage_mainContentWrapper__2NTuI"}}},[[18,1,2]]]);
//# sourceMappingURL=main.b76f0f8f.chunk.js.map