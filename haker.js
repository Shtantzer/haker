

const nadiMojuLokaciju = () => {
    const status = document.querySelector('.status');
    const vrijednost = document.getElementById("coordoutput");

    const success = (position) => {
        console.log(position)
        const zemljopisnaSirina = position.coords.latitude;
        const zemljopisnaDuzina = position.coords.longitude;

        vrijednost.value = `${zemljopisnaSirina}, ${zemljopisnaDuzina}`;
        status.textContent = '';
    }

    const error = () => {
        status.textContent = "Tak ću ti dovod zraka u grkljan blokat. \r\n Aj sad lijepo osvježi stranicu i klinki na 'Dopusti' ili 'Allow.'";
    }
    
    navigator.geolocation.getCurrentPosition(success, error);

   
}


document.querySelector('.koordinate').addEventListener('click', nadiMojuLokaciju);