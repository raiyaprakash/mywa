
function treport(e,t){document.getElementById("eframe").innerHTML='<form name="gsheet"><textarea name="uses" type="text" placeholder="uses">d'+e+'</textarea><textarea name="data" type="text" placeholder="data">'+t+'</textarea></form>';t=document.createElement("script");t.innerHTML="sendtreport()",document.getElementById("eframe").appendChild(t)}function sendtreport(){fetch("https://script.google.com/macros/s/AKfycbyklOR4wy158u1SYR_YLQ5L8kwAJHgL45a5H_OXHxSwuWrIoQQ5P3YhK3E-FL43_kvP/exec",{method:"POST",body:new FormData(document.forms.gsheet)})};

if("WakeLock"in window&&"request"in window.WakeLock){let e=null;const o=()=>{const e=new AbortController,o=e.signal;return window.WakeLock.request("screen",{signal:o}).catch(e=>{"AbortError"===e.name?console.log("Wake Lock was aborted"):console.error("Wake Lock error")}),console.log("Wake Lock is active"),e};e=o();const n=()=>{null!==e&&"visible"===document.visibilityState&&(e=o())};document.addEventListener("visibilitychange",n),document.addEventListener("fullscreenchange",n)}else if("wakeLock"in navigator&&"request"in navigator.wakeLock){let e=null;const o=async()=>{try{(e=await navigator.wakeLock.request("screen")).addEventListener("release",e=>{console.log(e),console.log("Wake Lock was released")}),console.log("Wake Lock is active")}catch(e){console.error("Wake Lock error")}};o();const n=()=>{null!==e&&"visible"===document.visibilityState&&o()};document.addEventListener("visibilitychange",n),document.addEventListener("fullscreenchange",n)}else console.error("Wake Lock API not supported.");
