//this is the function to set a cookie
setCookie = (cName, cValue, expdays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expdays * 24 * 60 * 60 * 1000));//set the expiration date
    const expires = "expires=" + date.toUTCString();//convert the date to a string
    document.cookie = cName+ "=" + cValue +";" + expires + "; path=/";//set the cookie
}

//this is the function to get a cookie
getCookie = (cName) => {
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);//decode the cookie
    const ca = decodedCookie.split(';');//split the cookie into an array
    let value;
    //loop through the array to find the cookie
    ca.forEach(val => {
        val = val.trim();
        if(val.indexOf(name)  === 0) value = val.substring(name.length);  
    })
    return value;
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
    })

    //this script will check if the cookie is set
    cookieMessage = () => {
        if(!getCookie('cookie')) 
            document.querySelector('#cookies').style.display = "block";
    }

    window.addEventListener('load', cookieMessage);
});