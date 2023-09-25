export default (domElement, endDate) => {
    if(!domElement || !endDate) return

    const dateTil = (endDate) => {
        const date1 = Date.now();
        const date2 = new Date(endDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = (diffTime / 864e5);
        const days = Math.floor(diffDays);
        const diffHours = (diffTime / 36e5) - (24 * days);
        const hours = Math.floor(diffHours);
        const diffMinutes = (diffTime / 6e4) - (1440 * days) - (60 * hours);
        const minutes = Math.floor(diffMinutes);
        const diffSeconds = (diffTime / 1e3) - (86400 * days) - (3600 * hours) - (60 * minutes);
        const seconds = Math.floor(diffSeconds);
        return {
            days, hours, minutes, seconds
        }
    }  

    const render = (el, endDate) => {
        const {days, hours, minutes, seconds} = dateTil(endDate);
        const daysDOM = el.querySelector(".js-days")
        const hoursDOM = el.querySelector(".js-hours")
        const minutesDOM = el.querySelector(".js-minutes")
        const secondsDOM = el.querySelector(".js-seconds")

        if(daysDOM.textContent != days){
            daysDOM.innerHTML = days;
            const cl = daysDOM.nextElementSibling.classList;
            if(days == 1){cl.add("singular")}else{cl.remove("singular")}
        }
        if(hoursDOM.textContent != hours){
            hoursDOM.innerHTML = hours;
            const cl = hoursDOM.nextElementSibling.classList;
            if(hours == 1){cl.add("singular")}else{cl.remove("singular")}            
        }
        if(minutesDOM.textContent != minutes){
            minutesDOM.innerHTML = minutes;
            const cl = minutesDOM.nextElementSibling.classList;
            if(minutes == 1){cl.add("singular")}else{cl.remove("singular")}
        }
        if(secondsDOM.textContent != seconds){
            secondsDOM.innerHTML = seconds;
            const cl = secondsDOM.nextElementSibling.classList;
            if(seconds == 1){cl.add("singular")}else{cl.remove("singular")}
        }        
    }

    setInterval(() => render(domElement, endDate), 1000)
    render(domElement, endDate)
}