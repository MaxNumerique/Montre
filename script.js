// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function afficherHeure () {
    const dateActuelle = new Date();
    let heures = dateActuelle.getHours();
    let minutes = dateActuelle.getMinutes();
    let secondes = dateActuelle.getSeconds();
    const heuresDegre = (heures % 12) * 30 + (minutes / 60) * 30;
    const minutesDegre = minutes * 6 + (secondes / 60) * 6;
    const secondesDegre = secondes * 6;
    const aiguilleHeures = document.querySelector('.aiguilleHeures');
    const aiguilleMinutes = document.querySelector('.aiguilleMinutes');
    const aiguilleSecondes = document.querySelector('.aiguilleSecondes');
    aiguilleHeures.style.transform =  `rotate(${heuresDegre}deg)`;
    aiguilleMinutes.style.transform =  `rotate(${minutesDegre}deg)`;
    aiguilleSecondes.style.transform =  `rotate(${secondesDegre}deg)`;
}
setInterval(afficherHeure, 1000);

function afficherHeureNum() {
    const dateNum = new Date();
    let heuresNum = dateNum.getHours();
    let minutesNum = dateNum.getMinutes();
    let secondesNum = dateNum.getSeconds();
    heuresNum = heuresNum < 10 ? '0' + heuresNum : heuresNum; 
    minutesNum = minutesNum < 10 ? '0' + minutesNum : minutesNum;
    secondesNum = secondesNum < 10 ? '0' + secondesNum : secondesNum;
    let heureNumerique = heuresNum + ' : ' + minutesNum + ' : ' + secondesNum;
    document.getElementById('horloge_numeriques').innerText = heureNumerique;
}
setInterval(afficherHeureNum, 1000);

for (let i = 1; i <= 100; i++) {
    const divi = document.createElement('div');
    divi.style.display = "flex";
    divi.style.marginBottom = "0px";
    setTimeout(function () {
        for (let j = 1; j <= 100; j++) {
            setTimeout(function () {
                const divj = document.createElement('div');
                divj.style.width = "70px";
                divj.style.height = "10px";
                // div.textContent = "ok";
                divj.style.backgroundColor = `hsl(${Math.random() * 360}deg,40%,40%)`;
                console.log(divj);
                divi.appendChild(divj);
            }, 600 * j);
        }
    }, 100 * i);
    document.querySelector('body').appendChild(divi);
}


