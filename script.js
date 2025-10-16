const titulo = document.getElementById('cabecalho');
console.log(titulo);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
console.log(gridSection[0]);

const listas = document.getElementsByTagName('img');
console.log(listas);
console.log(listas.length);

const primeiro = document.querySelector('.grid-section p');
console.log(primeiro);

const primeiro2 = document.querySelector('#contato a')
console.log(primeiro2);

const todos = document.querySelectorAll('h2')
console.log(todos);

const todos2 = document.querySelectorAll('footer > p, main > p');
console.log(todos2);

todos.forEach((gridItem) => {
    gridItem.classList.add('h2');
    const conteudo = gridItem.innerText;
    console.log(conteudo);
});

