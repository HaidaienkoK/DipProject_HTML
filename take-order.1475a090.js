("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6.register("iYFef",(function(e,t){const n=document.querySelectorAll(".selected"),o=document.querySelectorAll(".options-container"),l=function(e){o.forEach((function(t){if(e.target.dataset.selected===t.dataset.cont){t.classList.toggle("active");t.querySelectorAll(".option").forEach((n=>{n.addEventListener("click",(()=>{e.target.innerHTML=n.querySelector("label").innerHTML,t.classList.remove("active")}))}))}}))};n.forEach((function(e){e.addEventListener("click",l)}))}));
//# sourceMappingURL=take-order.1475a090.js.map