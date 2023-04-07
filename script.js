const url = "http://localhost:8080/quadros"
const section = document.querySelector('.quadros')

const get = url =>{
    fetch(url)
        .then((response) => response.json())
        .then((data) => mostraQuadros(data));
}

const mostraQuadros = quadros =>{
    for(let quadro of quadros){
        section.innerHTML += `
        <div class="quadro">
            <h4>${quadro.titulo}</h4>
            <div class="tooltip hidden">
                <p>${quadro.descricao}</p>
            </div>
            <img src="imagens/${quadro.imagem}.webp" id=${quadro.id}><br>
            <span>${quadro.autoria}</span><br>
            <span>${quadro.ano}</span><br>
        </div>
        `
    }
}

get(url)


const mostrarDesc = e =>{
    const tag = e.target.tagName
    if(tag === 'IMG'){
        const tooltip = e.target.parentNode.children[1]
        tooltip.classList.contains('hidden') ?
        tooltip.classList.remove('hidden') :
        tooltip.classList.add('hidden')
    }
}

section.addEventListener('click',mostrarDesc)
