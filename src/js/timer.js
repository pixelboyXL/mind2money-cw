// document.addEventListener('DOMContentLoaded', () => {
//     const countdownEl = document.querySelector('.hero__timer');
//     const initialDurationHours = 5;
//     const timerKey = 'customTimerStart';
//     const durationKey = 'customTimerDuration';
//     let startTime = localStorage.getItem(timerKey);
//     const initialDurationMs = initialDurationHours * 60 * 60 * 1000;
//     if (!startTime || localStorage.getItem(durationKey) !== String(initialDurationMs)) {
//         startTime = Date.now();
//         localStorage.setItem(timerKey, startTime);
//         localStorage.setItem(durationKey, initialDurationMs);
//     } else {
//         startTime = parseInt(startTime, 10);
//     };
//     const endTime = startTime + initialDurationMs;
//     function formatTime(ms) {
//         if (ms < 0) ms = 0;
//         const totalSeconds = Math.floor(ms / 1000);
//         const hours = Math.floor(totalSeconds / 3600);
//         const minutes = Math.floor((totalSeconds % 3600) / 60);
//         const seconds = totalSeconds % 60;
//         const pad = (num) => String(num).padStart(2, '0');
//         return `${hours}:${pad(minutes)}:${pad(seconds)}`;
//     };
//     function updateCountdown() {
//         const now = Date.now();
//         const timeLeft = endTime - now;
//         countdownEl.textContent = formatTime(timeLeft);
//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             countdownEl.textContent = '0:00:00';
//         };
//     };
//     updateCountdown();
//     const timerInterval = setInterval(updateCountdown, 1000);
// });

document.addEventListener('DOMContentLoaded', () => {
    const countdownEl = document.querySelector('.hero__timer');
    const initialDurationHours = 5; // Початкова тривалість 5 годин
    const timerKey = 'customTimerStart'; // Ключ для localStorage
    const durationKey = 'customTimerDuration'; // Ключ для збереження тривалості (на випадок змін)
    // Встановлюємо початковий час або відновлюємо його
    let startTime = localStorage.getItem(timerKey);
    const initialDurationMs = initialDurationHours * 60 * 60 * 1000; // 5 годин у мілісекундах
    // Перевіряємо, чи є збережений час початку та чи не закінчився термін
    if (!startTime || localStorage.getItem(durationKey) !== String(initialDurationMs)) {
        // Якщо таймер запускається вперше або змінилася тривалість
        startTime = Date.now();
        localStorage.setItem(timerKey, startTime);
        localStorage.setItem(durationKey, initialDurationMs);
    } else {
        startTime = parseInt(startTime, 10);
    }
    const endTime = startTime + initialDurationMs;
    function formatTime(ms) {
        // Перетворення мілісекунд у формат ГГ:ХХ:СС
        if (ms < 0) ms = 0;
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        // Додаємо нуль попереду, якщо число менше 10
        const pad = (num) => String(num).padStart(2, '0');
        return `${hours}:${pad(minutes)}:${pad(seconds)}`;
    }
    function updateCountdown() {
        const now = Date.now();
        const timeLeft = endTime - now;
        countdownEl.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            countdownEl.textContent = '0:00:00';
            // Додаткова логіка після закінчення таймера (наприклад, приховати елемент)
            // alert('Час вийшов!'); 
        }
    }
    // Запускаємо оновлення кожну секунду
    updateCountdown(); // Перше оновлення, щоб відобразити час відразу
    const timerInterval = setInterval(updateCountdown, 1000);
});