const free_color = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#8lecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afco",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
}

const url = "https://pokeapi.co/api/v2/pokemon/";



let get_pokemon = () => {
    const random = Math.floor(Math.random() * 150 + 1);
    const final = url + random;
    fetch(final)
        .then((Response) => Response.json())
        .then(data => {
            pokemon(data);
        });
};

let pokemon = data => {
    const color = free_color[data.types[0].type.name];
    card.innerHTML = `
            <p id="HP">
                <span>HP : </span>${data.stats[0].base_stat}
            </p>
            <img id='poke-img' src="${data.sprites.other.dream_world.front_default}">
            <h2 class="poke-name">${data.name[0].toUpperCase()+data.name.slice(1)}</h2>
            
            <div class="types">
            </div>


            <div class="stats">
                <div>
                    <h3>${data.stats[1].base_stat}</h3>
                    <p>Attack</p>
                </div>

                <div>
                    <h3>${data.stats[2].base_stat}</h3>
                    <p>Defence</p>
                </div>

                <div>
                    <h3>${data.stats[5].base_stat}</h3>
                    <p>Speed</p>
                </div>
            </div>

    `;
    pok_types(data.types);
    pok_style(color);
};


let pok_types = (types) => {
    types.forEach((item) => {
        let span = document.createElement("span");
        span.textContent = item.type.name

        document.querySelector(".types").appendChild(span);
    })

}

let pok_style = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #fff 36%)`;
    card.querySelectorAll(".types span").forEach(free_color=>{
        free_color.style.backgroundColor=color;
    });
}



btn.addEventListener("click", get_pokemon);

