const endDate ="22 may 2026 11:00 AM";
const inputs =document.querySelectorAll("input");

function timer() {
    const end = new Date(endDate);
    const news = new Date();
    const diff =(end - news)/1000;
    //here (end-news)is divided by 1000 to covert it in millisecond to seconds

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
timer();

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        timer()
    },
    1000
)
