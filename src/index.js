console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// getBreeds();
// addDogsToPage(allBreeds);

fetch(imgUrl)
.then(function(response) {
  return response.json();
}).then(function(json) {
    let images = json['message']

for (const im of images) {
    let el = document.createElement('img');
    el.src = im;
    let con = document.getElementById('dog-image-container');
    con.appendChild(el);
}
});

    fetch(breedUrl)
        .then(function(response) {
        return response.json();
        }).then(function(json) {
            allBreeds = json['message'];
            addDogsToPage(allBreeds)
        })
    

// getBreeds();

function addDogsToPage(dogList) {
        for (const dog in dogList) {
            let tempLi = document.createElement('li');
                tempLi.innerHTML = dog;
                tempLi.className = "breed-response";
                tempLi.onclick = function() {
                    tempLi.style.color = "blue";
                    // tempLi.innerText.fontColor("blue");
            }
            let con = document.getElementById('dog-breeds');
                con.appendChild(tempLi);
        }
    }

let breedSelection = document.querySelector('#breed-dropdown');

// console.log("breedSelection", breedSelection);

breedSelection.addEventListener('change', (event) => {
    if (event.target.value == "a") {
        event.preventDefault;
        let contain = document.getElementById('dog-breeds');
        contain.innerHTML = ""
        let aDogs = getAdogs(allBreeds);
        addDogsToPage(aDogs);
    }
    if (event.target.value == "b") {
        event.preventDefault;
        let contain = document.getElementById('dog-breeds');
        contain.innerHTML = ""
        let bDogs = getBdogs(allBreeds);
        addDogsToPage(bDogs);
    }
    if (event.target.value == "c") {
        event.preventDefault;
        let contain = document.getElementById('dog-breeds');
        contain.innerHTML = ""
        let cDogs = getCdogs(allBreeds);
        addDogsToPage(cDogs);
    }
    if (event.target.value == "d") {
        event.preventDefault;
        let contain = document.getElementById('dog-breeds');
        contain.innerHTML = ""
        let dDogs = getDdogs(allBreeds);
        addDogsToPage(dDogs);
    }
    
  });


function getAdogs(dogList) {
    newOb = {};
    for (const breed in dogList) {
        if (breed[0] == "a" ){
            newOb[breed] = null;
        }
    }
    return newOb;
}

function getBdogs(dogList) {
    newOb = {};
    for (const breed in dogList) {
        if (breed[0] == "b" ){
            newOb[breed] = null;
        }
    }
    return newOb;
}

function getCdogs(dogList) {
    newOb = {};
    for (const breed in dogList) {
        if (breed[0] == "c" ){
            newOb[breed] = null;
        }
    }
    return newOb;
}

function getDdogs(dogList) {
    newOb = {};
    for (const breed in dogList) {
        if (breed[0] == "d" ){
            newOb[breed] = null;
        }
    }
    return newOb;
}




