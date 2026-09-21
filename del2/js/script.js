// Skapar variabler för de olika elementen
const bild = document.getElementById('slide-img');
const nummer = document.getElementById('slide-nr');
const rubrik = document.getElementById('slide-heading');
const text = document.getElementById('slide-text');
const back = document.getElementById('back');
const forward = document.getElementById('forward');

// Skapar innehåll för bildspelet
const animals = [
    {
        kalla: 'img/hund.jpg',
        rubrik: 'Hund',
        text: 'Hunden kallas ofta för människans bästa vän',
    },
    {
        kalla: 'img/hast.jpg',
        rubrik: 'Häst',
        text: 'Hästen har varit ett viktigt djur under krigstiden i Finland',
    },
    {
        kalla: 'img/varg.jpg',
        rubrik: 'Varg',
        text: 'Vargen har under de senaste året rört sig nära bebyggelser i Finland',
    },
];

// Skapar index för bildspelet 
let index = 0;

// Funktion för att byta bild
function bytBild (steg) {
    index = index + steg;
    console.log('Index är: ' + index);
    if (index < 0) index = animals.length - 1;
    if (index >= animals.length) index = 0;
    
    bild.src = animals[index].kalla;
    nummer.textContent = 'Bild ' + (index + 1) + ' / ' + animals.length;
    rubrik.textContent = animals[index].rubrik;
    text.textContent = animals[index].text;
};

// Programmerar knapparna att lyssna för clicks
forward.addEventListener('click', function () { bytBild(1) } );
back.addEventListener('click', function () { bytBild(-1) } );

// Kallar på funktionen när sidan laddas in
bytBild(0);
