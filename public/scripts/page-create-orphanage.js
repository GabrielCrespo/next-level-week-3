// create map
const map = L.map('mapid').setView([-15.7968694,-47.8754027], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68], 
}) 

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover iconAnchor
    marker && map.removeLayer(marker);

    //add icon tileLayer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});


// add photos fields

function addPhotoField() {
    // pegar o container de fotos
    const container = document.querySelector('#images');
    // pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // Realizar o clone da última imagem
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    // verificar se o campo está vazio
    const input = newFieldContainer.children[0];
    if(input.value == "") {
        return;
    }
    // limpar o campo
    input.value = "";
    // Adicionar o clone ao container
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = "";
        return;
    }

    span.parentNode.remove();

}

// Trocar valor do botão 

function toggleSelect(event) {
    // retirar a classe active 
    document.querySelectorAll('.button-select button').forEach( button => button.classList.remove('active'));
    // colocar a classe active
    const button = event.currentTarget;
    button.classList.add('active');
    // Atualizar o valor do input hidden
    const input = document.querySelector('[name="opening_on_weekends"]');
    input.value = button.dataset.value;
    // verificar sim ou não
}

function validate(event) {

    const lat = document.getElementsByName('lat')[0].value;
    const lng = document.getElementsByName('lng')[0].value;

    if(lat == '' &&  lng == ''){
        event.preventDefault();
        alert("Escolha uma localização no mapa")
    }
}