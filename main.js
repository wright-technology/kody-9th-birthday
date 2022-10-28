let guests = ["Kody I", "Jackie", "Kody II", "Eli", "Isaiah", "Za'Nia", "Za'Nilah", "Janya", "Kamarion", "Karter", "Jackson"];

const guestList = document.getElementById("guest-list");

let newGuest = document.getElementById("your-name");

const addGuestBtn = document.getElementById("add-guest-btn");

function renderGuests() {
  let guest = "";

  for (let i = 0; i < guests.length; i++) {
    guest += `<ul>

    <li>${guests[i]}</li>
        </ul>`;
    guestList.innerHTML = guest;
  }
}

renderGuests();


addGuestBtn.addEventListener("click", function() {
    var audio = new Audio('audio/kamehameha.mp3')
    audio.play();
    if (newGuest.value) {
        guests.push(newGuest.value);
        newGuest.value = '';
        renderGuests();
    }
})