function getHole(index) {
    return document.getElementById(`hole${index}`);
}

const hitCounterElem = document.getElementById("dead");
const missCounterElem = document.getElementById("lost");
let hitCounter = 0;
let missCounter = 0;
for (let i = 1; i < 10; i++) {
    let holeElem = getHole(i);
    holeElem.onclick = () => {
        if (holeElem.className.includes("hole_has-mole")) {
            hitCounter++;
            if (hitCounter < 10) {
                hitCounterElem.textContent = hitCounter;
            } else {
                alert("Победа!");
                hitCounter = 0;
                missCounter = 0;
                hitCounterElem.textContent = 0;
                missCounterElem.textContent = 0;                
            }            
        } else {
            missCounter++;
            if (missCounter < 5) {
                missCounterElem.textContent = missCounter;
            } else {
                alert("Вы проиграли");
                hitCounter = 0;
                missCounter = 0;
                hitCounterElem.textContent = 0;
                missCounterElem.textContent = 0; 
            }            
        }        
    }
}


