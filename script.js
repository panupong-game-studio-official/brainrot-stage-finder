let isRunning = false;
let bgPosition = 0;
let gameLoop;

const forestBg = document.getElementById('forestBg');
const btnAction = document.getElementById('btnAction');

function toggleMovement() {
    if (!isRunning) {
        isRunning = true;
        btnAction.innerText = "🛑 กดเพื่อให้ตัวละครหยุดวิ่ง";
        btnAction.style.backgroundColor = "#c62828"; 
        btnAction.style.boxShadow = "0 4px #7f0000";
        
        // ขยับพื้นหลังเพื่อสร้างแอนิเมชันตอนวิ่ง
        gameLoop = setInterval(() => {
            bgPosition -= 5; 
            forestBg.style.backgroundPosition = bgPosition + 'px 0px';
        }, 20);
        
    } else {
        isRunning = false;
        btnAction.innerText = "🏃 กดเพื่อให้ตัวละครวิ่งตะลุยป่า";
        btnAction.style.backgroundColor = "#2e7d32"; 
        btnAction.style.boxShadow = "0 4px #1b5e20";
        clearInterval(gameLoop);
    }
}
