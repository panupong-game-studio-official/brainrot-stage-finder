let isRunning = false;
let bgPosition = 0;
let gameLoop;

const forestBg = document.getElementById('forestBg');
const btnAction = document.getElementById('btnAction');

function toggleMovement() {
    if (!isRunning) {
        // เริ่มวิ่ง
        isRunning = true;
        btnAction.innerText = "🛑 กดเพื่อให้ตัวละครหยุดวิ่ง";
        btnAction.style.backgroundColor = "#c62828"; // เปลี่ยนปุ่มเป็นสีแดงตอนวิ่ง
        btnAction.style.boxShadow = "0 5px #7f0000";
        
        // ฉากหลังจะสไลด์ไปทางซ้ายเรื่อยๆ เพื่อให้เกิดมิติการวิ่งไปข้างหน้า
        gameLoop = setInterval(() => {
            bgPosition -= 6; // ความเร็วในการวิ่ง
            forestBg.style.backgroundPosition = bgPosition + 'px 0px';
        }, 20);
        
    } else {
        // หยุดวิ่ง
        isRunning = false;
        btnAction.innerText = "🏃 กดเพื่อให้ตัวละครวิ่งตะลุยป่า";
        btnAction.style.backgroundColor = "#2e7d32"; // เปลี่ยนกลับเป็นสีเขียว
        btnAction.style.boxShadow = "0 5px #1b5e20";
        clearInterval(gameLoop);
    }
}
