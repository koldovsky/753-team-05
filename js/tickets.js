const countdown = document.querySelector(".sale-timer__countdown");
const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // поточна дата + 5 днів
const updateCountdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = `
    <span style="font-size: 32px">${days}</span> days 
    <span style="font-size: 32px">${hours}</span> hours 
    <span style="font-size: 32px">${minutes}</span> minutes 
    <span style="font-size: 32px">${seconds}</span> seconds 
  `;
  if (distance <= 0) {
    clearInterval(updateCountdown);
    countdown.innerHTML = "Sale has ended!";
  }
}, 1000);