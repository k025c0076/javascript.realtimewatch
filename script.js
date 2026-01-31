// 1. 時計を動かす関数
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// 1秒ごとにupdateClock関数を実行する
setInterval(updateClock, 1000);
updateClock(); 

// 2. 背景色を変える機能
const button = document.getElementById('changeColorBtn');

button.addEventListener('click', () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    document.body.style.backgroundColor = color;
});