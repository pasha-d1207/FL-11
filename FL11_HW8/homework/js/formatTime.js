 let formatTime = (time) => {
    let days = Math.floor(time / 1440);
    let hour = Math.floor((time - (1440 * days))/60);
    let minute = Math.floor((time - (1440 * days)) - (60 * hour));
    return `${days} day(s) ${hour} hour(s) ${minute} minute(s)`
}

formatTime(59);