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
        
        // ฉากหลังเลื่อนเร็วขึ้นให้สมกับความเร็วในการวิ่ง
        gameLoop = setInterval(() => {
            bgPosition -= 7; 
            forestBg.style.backgroundPosition = bgPosition + 'px 0px';
        }, 20);
        
        stickman.classList.add('running');
        
    } else {
        isRunning = false;
        btnAction.innerText = "🏃 กดเพื่อเริ่มวิ่งแบบ Anger of Stick";
        btnAction.style.backgroundColor = "#2e7d32"; 
        btnAction.style.boxShadow = "0 4px #1b5e20";
        
        clearInterval(gameLoop);
        stickman.classList.remove('running');
    }
}
