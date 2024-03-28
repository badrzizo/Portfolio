//this is the function to set a cookie
setCookie = (cName, cValue, expdays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expdays * 24 * 60 * 60 * 1000));//set the expiration date
    const expires = "expires=" + date.toUTCString();//convert the date to a string
    document.cookie = cName+ "=" + cValue +";" + expires + "; path=/";//set the cookie
}

getCookie = (cName) => {
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.addEventListener('DOMContentLoaded', (event) => {
    //this is the script for the cookies banner
    //this script will hide the cookies banner when the user clicks the button
    const cookiesBtn = document.querySelector('#cookies-btn');
    cookiesBtn.addEventListener('click', () => {
        console.log('Button clicked'); // Should log when the button is clicked
        document.querySelector('#cookies').style.display = "none";
        //set a cookie to remember the user's choice
        setCookie('cookie', 'true', 30);
        console.log(document.cookie);
    })

    //this script will check if the cookie is set
    cookieMessage = () => {
        const cookieValue = getCookie('cookie');
        console.log(cookieValue);
        if(getCookie('cookie') !== 'true') 
            document.querySelector('#cookies').style.display = "block";
    }

    window.addEventListener('load', () => {
        cookieMessage();
    });
});