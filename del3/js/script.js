const calendarBody = document.getElementById('calendar-body');

for (let i = 1; i <= 24; i++) {
  // Vi skapar HTML för varje lucka här
   const doorHTML = `<div class="calendar-door" id="door${i}" onclick="openDoor(${i})">
    <p class="door-number">${i}</p>
  </div>`;
  
  calendarBody.innerHTML += doorHTML;
}

function openDoor(doorNumber) {
  // Funktionen kör när man klickar på en lucka
   const today = new Date();
  const currentDay = today.getDate(); // Hämtar dagen i månaden (1-31)
  
  if (doorNumber > currentDay) {
    alert(`Du kan inte öppna lucka ${doorNumber} förrän den ${doorNumber} december!`);
    return;
  }
  
  // Om vi kommer hit, är det okej att öppna luckan
  showReward(doorNumber);
}

const rewards = [
  { 
    doorNumber: 1, 
    image: 'url-till-bild1.jpg', 
    message: 'Grattis!', 
    coupon: 'ASDJKL9023' 
  },
  { 
    doorNumber: 2, 
    image: 'url-till-bild2.jpg', 
    message: 'Du vann!', 
    coupon: 'VNKJDO0987' 
  },
  // ... och så vidare för alla 24 luckor
];

function showReward(doorNumber) {
  const reward = rewards.find(r => r.doorNumber === doorNumber);
  
  const door = document.getElementById(`door${doorNumber}`);
  door.style.backgroundImage = `url('${reward.image}')`;
  
  alert(`${reward.message}\n\nRabattkupong: ${reward.coupon}`);
}