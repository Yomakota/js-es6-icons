// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// BONUS
// 1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2 - popolare le options della select della milestone 3 dinamicamente.

const allIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// Richiamo il mio elemento HTML a cui voglio inserire tutte le mie cards
const iconContainer = document.querySelector('.js-all-card');

// Richiamo il mio elemento HTML select
const selectCategory = document.querySelector('#category');

// GENERATORE COLORE RANDOM PER OGNI ELEMENTO DELLE CARDS 
allIcons.forEach((element) => {
	element.color = generateColor();
});

// FUNCTION PER POPOLARE IL DOM
printCards(allIcons, iconContainer);


//POPOLARE OPTION NELLA SELECT
// appendere le option alla mia select #category
const iconForType = getIconTypes(allIcons);
printOption(iconForType);


// ----------------------
//     EVENT CHANGE
// ----------------------


// Reset dei valori a All per ogni volta che l'utente fa refresh della pagina
selectCategory.value = 'all';

selectCategory.addEventListener('change',
	function () {

		// Rendo leggibile la scelta dell'utente
		const userValue = this.value;
		// Svuoto il popolamento delle pagine ogni volta che l'utente cambia la sua categoria
		iconContainer.innerHTML = '';

		// Se nei dati dell'oggetto non e' compreso il type ALL allora 
		if (userValue !== 'all') {
			const filteredIcons = allIcons.filter((element) => {
				return element.type === userValue;
			});

			// Popolazione DOM
			printCards(filteredIcons, iconContainer);
		} else {
			// Popolazione DOM
			printCards(allIcons, iconContainer);
		}
	}
);


// --------------------
// 		FUNCTION
// --------------------


// Popolazione DOM
function printCards(array, container) {
	array.forEach((element) => {
		const { name, prefix, type, family, color } = element;

		const newCard = `
		<div class="card flex" style="color: ${color}">
			<i class="${family} ${prefix}${name}"></i>
			<span>${name}</span>
		</div>
		`
		container.innerHTML += newCard;
	});
};

// Generatore colore casuale
function generateColor() {
	let color = '#';

	// Generiamo una stringa che sia della stessa lunghezza di: #1b2b3a (esadecimale) 
	// Variante a stringa con tutti i numeri a nostra disposizione
	const symbols = '0123456789abcdef';

	for (let i = 0; i < 6; i++) {
		const randomIndex = getRndInteger(0, symbols.length - 1);

		const randomSymbol = symbols[randomIndex];

		color += randomSymbol;
	}
	return color;
};


// Generatore numero random
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};


//BONUS
// 2 - popolare le options della select della milestone 3 dinamicamente.

// funzione per prendere le icon per tipo
function getIconTypes (array) {

	// dove salvare le icon per type solo se non gia compreso
	const types = [];

	array.forEach((object) => {

		if(!types.includes(object.type)) {
			types.push(object.type);
		}
	});
	return types;
}

// funzione per stampare le option nella select
function printOption (array) {

	const selectCategory = document.querySelector('#category');
	array.forEach((element)=>{

	const newOption =`<option value = ${element}> ${element} </option>`;

	selectCategory.innerHTML += newOption;

});

}