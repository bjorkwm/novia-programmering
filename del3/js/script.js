const calendarBody = document.getElementById('calendar-body');

let rewards = [];

fetch('assets/tarjoukset.json')
  .then(response => response.json())
  .then(data => {
    rewards = data.christmasSpecials.map((item, index) => ({
      doorNumber: index + 1,
      message: 'Grattis!',
      label: item.label,
      coupon: item.code
    }));
    createDoors();
    shuffleDoors();
  })
  .catch(error => {
    console.error('JSON-filen:', error);
  });

function createDoors() {
  for (let i = 1; i <= 24; i++) {
    const doorHTML = `
      <div class="calendar-door" id="door${i}" onclick="openDoor(${i})">
        <p class="door-number">${i}</p>
      </div>
    `;

    calendarBody.innerHTML += doorHTML;
  }
}

function shuffleDoors() {
  const doors = Array.from(calendarBody.children);

  for (let i = doors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doors[i], doors[j]] = [doors[j], doors[i]];
  }

  doors.forEach(door => calendarBody.appendChild(door));
}

function openDoor(doorNumber) {
  const today = new Date();
  const currentDay = today.getDate();

  if (doorNumber > currentDay) {
    alert(`Du kan inte öppna lucka ${doorNumber} förrän den ${doorNumber} december!`);
    return;
  }

  showReward(doorNumber);
}

function showReward(doorNumber) {
  const reward = rewards[doorNumber - 1];

  if (!reward) {
    alert('Belöning.');
    return;
  }

  const door = document.getElementById(`door${doorNumber}`);
  door.classList.add('opened');

  alert(`${reward.message}\n\n${reward.label}\n\nRabattkupong: ${reward.coupon}`);
}
