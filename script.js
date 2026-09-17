// ===== PERSONALIZA AQUÍ =====
const FECHA_INICIO = "2024-06-24T00:00:00"; // AAAA-MM-DDTHH:MM:SS
// =============================

const screens=[...document.querySelectorAll(".screen")];
let current=0;

function go(n){
  screens[current].classList.remove("active");
  current=n;
  screens[current].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function updateCounter(){
  const start=new Date(FECHA_INICIO);
  let diff=Math.max(0,Date.now()-start.getTime());
  const sec=Math.floor(diff/1000);
  document.getElementById("days").textContent=Math.floor(sec/86400);
  document.getElementById("hours").textContent=Math.floor(sec%86400/3600);
  document.getElementById("mins").textContent=Math.floor(sec%3600/60);
  document.getElementById("secs").textContent=sec%60;
}
setInterval(updateCounter,1000); updateCounter();

// QR visual decorativo para la demo

function toggleMusic() {
    const musica = document.getElementById("musica");

    if (musica.paused) {
        musica.play();
        document.getElementById("musicBtn").textContent = "❚❚";
    } else {
        musica.pause();
        document.getElementById("musicBtn").textContent = "♫";
    }
}
