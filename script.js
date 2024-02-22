// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function afficherHeure () {
    const dateActuelle = new Date();
    let heures = dateActuelle.getHours();
    console.log(heures);
    let minutes = dateActuelle.getMinutes();
    let secondes = dateActuelle.getSeconds();
    console.log(secondes);

    const heuresDegre = (heures % 12) * 30 + (minutes / 60) * 30;
    console.log(heuresDegre);
    const minutesDegre = minutes * 6 + (secondes / 60) * 6;
    const secondesDegre = secondes * 6;
    console.log(secondesDegre);
    const aiguilleHeures = document.querySelector('.aiguilleHeures');
    const aiguilleMinutes = document.querySelector('.aiguilleMinutes');
    const aiguilleSecondes = document.querySelector('.aiguilleSecondes');

    aiguilleHeures.style.transform =  `rotate(${heuresDegre}deg)`;
    aiguilleMinutes.style.transform =  `rotate(${minutesDegre}deg)`;
    aiguilleSecondes.style.transform =  `rotate(${secondesDegre}deg)`;
}


setInterval(afficherHeure, 1000);

