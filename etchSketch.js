const displayWindow = document.getElementById("sketch-window");

const initialResolution = 16;


function mkRows(sideLength){
    let qtyRows =sideLength;
    let i = 0;
    while(i < qtyRows){
        const mkRow = document.createElement("div");
        mkRow.classList.add("row");
        mkRow.id =`row${i+1}`;
        displayWindow.appendChild(mkRow);
    i++;
    }
}


function mkBoxes(sideLength) {
    let boxesPerRow = sideLength;
    
    for(i = 0; i<boxesPerRow; i++){
    const currentRow = document.getElementById(`row${i+1}`)
   
    for(z = 0; z < boxesPerRow; z++){
    const mkBox = document.createElement("div");
    mkBox.classList.add("box");
    mkBox.id =`${i},${z}`;
    mkBox.addEventListener('mouseenter',() => mkBox.style.backgroundColor='black');
    currentRow.appendChild(mkBox);   
    }
    }
}

function makeDisplay(length){
    mkRows(length);
    mkBoxes(length);
}

makeDisplay(initialResolution);


const referenceHeader = document.querySelector("header");

const resizeBtn = document.createElement("button");
 
resizeBtn.textContent='Grid Size Adjust';
resizeBtn.addEventListener('click', () => {
    let whatSize = prompt("To resize the grid, input a positive integer value less than or equal to 100.");
        if (whatSize === null){
            alert("fine.keep.it.");}
        else if (whatSize <1 || whatSize>100){
            alert("Try again. Enter a valid integer please.")
        }
        else{displayWindow.replaceChildren();
             makeDisplay(whatSize)};
        }
        );
referenceHeader.appendChild(resizeBtn);

