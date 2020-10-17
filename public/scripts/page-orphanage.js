const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-15.7968694,-47.8754027], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
}) 

// create and add marker
L.marker([-15.7968694,-47.8754027], { icon })
.addTo(map)

// image galery

function selectImage(){
    const button = event.currentTarget;

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    // Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    imageContainer.src = image.src;

    // Atualizar o container da imagem

    // Adicionar a classe .active para esse botão
    button.classList.add('active');
}