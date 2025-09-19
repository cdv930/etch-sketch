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
    mkBox.addEventListener('mouseenter',() => mkBox.classList.add("colored"));
    currentRow.appendChild(mkBox);   
    }
    }
}

mkRows(initialResolution);
mkBoxes(initialResolution);