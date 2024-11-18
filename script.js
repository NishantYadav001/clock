// script.js
function updateClock() {
    const timeElement = document.getElementById('time');
    
    // Get current date and time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be displayed as '12'

    // Format minutes and seconds with leading zeros if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Set the time in the div
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Call the function initially to set the clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
