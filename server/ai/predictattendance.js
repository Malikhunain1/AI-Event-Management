

function predictAttendance(event) {
    
    let base = 50;
    if (event.location.toLowerCase().includes("hall")) base += 20;
    if (event.name.length > 10) base += 10;
    if (event.resources && event.resources.length > 3) base += 15;

    // Random adjustment (simulate AI fluctuation)
    const randomOffset = Math.floor(Math.random() * 10);
    return base + randomOffset;
}

module.exports = predictAttendance;
