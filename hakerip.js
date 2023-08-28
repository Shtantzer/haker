const vrijednost = document.getElementById("coordoutput");

const getLocation = () => {

    fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
            vrijednost.value = `${data.latitude}, ${data.longitude}`; 
        });
    };

    document.querySelector('.koordinate').addEventListener('click', getLocation);