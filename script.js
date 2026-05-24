let isRunning = false;
let bgPosition = 0;
let gameLoop;

const forestBg = document.getElementById('forestBg');
const stickman = document.getElementById('stickman');
const btnAction = document.getElementById('btnAction');

function toggleMovement() {
    if (!isRunning) {
        isRunning = true;
        btnAction.innerText = "🛑 กดเพื่อหยุดแบบ Stickman";
        btnAction.style.backgroundColor = "#c62828"; 
        btnAction.style.boxShadow = "0 4px #7f0000";
        
        // 🏃 เริ่มให้ฉากหลังขยับ (ทำให้ดูเหมือนวิ่งไปข้างหน้า)
        gameLoop = setInterval(() => {
            bgPosition -= 5; 
            forestBg.style.backgroundPosition = bgPosition + 'px 0px';
        }, 20);
        
        // 🔄 เริ่มให้สติกแมนขยับขา (ใช้ Class CSS)
        stickman.classList.add('running');
        
    } else {
        isRunning = false;
        btnAction.innerText = "🏃 กดเพื่อเริ่มวิ่งแบบ Stickman";
        btnAction.style.backgroundColor = "#2e7d32"; 
        btnAction.style.boxShadow = "0 4px #1b5e20";
        
        // 🛑 หยุดฉากหลัง
        clearInterval(gameLoop);
        
        // 🛑 หยุดสติกแมนขยับขา
        stickman.classList.remove('running');
    }
}
