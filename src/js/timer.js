import { countdownEl } from "./refs";

document.addEventListener('DOMContentLoaded', () => {
    const initialDurationHours = 5; 
    const initialDurationMs = initialDurationHours * 60 * 60 * 1000;
    const timerEndKey = 'customTimerEndTime';
    let timerInterval; 
    function formatTime(ms) {
        if (ms < 0) ms = 0;
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const pad = (num) => String(num).padStart(2, '0');
        return `${hours}:${pad(minutes)}:${pad(seconds)}`;
    };
    function initTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
        };
        function updateCountdown() {
            const now = Date.now();
            let endTime = localStorage.getItem(timerEndKey);
            if (!endTime || now >= parseInt(endTime, 10)) {
                endTime = now + initialDurationMs;
                localStorage.setItem(timerEndKey, endTime);
                console.log(`Таймер перезапущено! Новий час закінчення: ${new Date(endTime)}`);
            } else {
                endTime = parseInt(endTime, 10);
            };
            const timeLeft = endTime - now;
            countdownEl.textContent = formatTime(timeLeft);
            if (timeLeft <= 0) {
                countdownEl.textContent = '0:00:00';
            };
        };
        updateCountdown(); 
        timerInterval = setInterval(updateCountdown, 1000);
    };
    initTimer();
});