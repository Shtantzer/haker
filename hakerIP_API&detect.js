const varijablaIP = document.getElementById("IP")
const varijablaKoordinate = document.getElementById("inputKoordinate");
const varijablaGrad = document.getElementById("inputGrad")
const varijablaOperater = document.getElementById("inputOperater")

const getLocation = () => {

    fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
            varijablaIP.value = `${data.ip}`
            varijablaKoordinate.value = `${data.latitude}, ${data.longitude}`;
            varijablaGrad.value = `${data.city}`
            varijablaOperater.value = `${data.org}`
            varijablaBrowser.value = ua.browser.family
            varijablaDevice.value = ua.device.family

        });
    };

    document.querySelector('.koordinategumb').addEventListener('click', getLocation);



const ua = detect.parse(navigator.userAgent)
const varijablaBrowser = document.getElementById("inputBrowser")
const varijablaDevice = document.getElementById("inputDevice")