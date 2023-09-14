const randomColour = ["green", "blue", "red", "green", "blue", "red"]


function getColour(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const colourChoice = arr[randomIndex];
    return colourChoice;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

document.querySelector('.main-title').addEventListener('mouseenter', function(){
    const container = document.querySelector(".colour-title");
    container.style.display = "flex"
    for (let i = 0; i < randomColour.length; i++){
        addColourTitle()
    }
})

document.querySelector('.main-title').addEventListener('mouseleave', function(){
    const container = document.querySelector(".colour-title");
    container.style.display = "none"
})

function addColourTitle(){
    colourChoice = getColour(randomColour);
    const colourTitle = document.createElement("div");
    colourTitle.style.color = colourChoice;
    colourTitle.textContent = 'Hello';
    const container = document.querySelector(".colour-title");
    container.appendChild(colourTitle);
    xTranslation = getRandomNumber(1,50);
    yTranslation = getRandomNumber(1,200);
    colourTitle.style.transform = 'translate(' + xTranslation + 'px,' + yTranslation + 'px)';
}


