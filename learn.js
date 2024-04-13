const getPlaceDisplayImage = document.getElementById("demo")

console.log(getPlaceDisplayImage)

function getProductSearch(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => getPlaceDisplayImage.innerHTML = `<img src=${data.message} />`)
    .catch(error => console.log(error));
}

getProductSearch()