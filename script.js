let isRunning = false;
let bgPosition = 0;
let gameLoop;

const forestBg = document.getElementById('forestBg');
const btnAction = document.getElementById('btnAction');

function toggleMovement() {
    if (!isRunning) {
        // เปลี่ยนสถานะเป็นกำลังวิ่ง
        isRunning = true;
        btnAction.innerText = "🛑 กดเพื่อให้ตัวละครหยุดวิ่ง";
        btnAction.style.backgroundColor = "#f44336"; // เปลี่ยนปุ่มเป็นสีแดง
        btnAction.style.boxShadow = "0 4px #b0281f";
        
        // สั่งให้ฉากหลังขยับไปทางซ้ายเรื่อยๆ ทุกๆ 20 มิลลิวินาที
        gameLoop = setInterval(() => {
            bgPosition -= 5; // ความเร็วในการวิ่ง
            forestBg.style.backgroundPosition = bgPosition + 'px 0px';
        }, 20);
        
    } else {
        // เปลี่ยนสถานะเป็นหยุดวิ่ง
        isRunning = false;
        btnAction.innerText = "🏃 กดเพื่อให้ตัวละครวิ่ง";
        btnAction.style.backgroundColor = "#4CAF50"; // เปลี่ยนกลับเป็นสีเขียว
        btnAction.style.boxShadow = "0 4px #2e6131";
        clearInterval(gameLoop); // ล้างลูปเพื่อให้ฉากหยุดนิ่ง
    }
}
