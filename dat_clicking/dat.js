let isBeforePet = true;
let petCount = 0;
const datSound = document.getElementById('pet-sound');

function petDat() {
    const dat = document.getElementById('dat-image');

    if (isBeforePet) {
        dat.src = '/dat/dat-after.png';
    } else {
        dat.src = '/dat/dat-before.jpg';
    }
    
    isBeforePet = !isBeforePet;
    petCount = 0;
    datSound.play();
}

document.getElementById('pet-dat').addEventListener('click', petDat);
document.getElementById('dat-image').addEventListener('click', () => {
    petCount++;
    console.log(`pet count: ${petCount}`);
});
