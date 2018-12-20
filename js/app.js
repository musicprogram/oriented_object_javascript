class Product{
	constructor(name,price,year) {  // Constructor metyodo para inicializar la clase , con los diferentes parametros
		this.name = name,
		this.price = price,
		this.year = year
	}
}

class UI { // clase de interfaz de usuario
	addProduct(product){ // metodos de la clase interfaz
		const productList = document.getElementById('product-list'); // coger el id de la lista 
		const element = document.createElement('div'); // crear  div
		element.innerHTML =  `  
			<div class="card text-center mb-4">
				<div class="card-body">
					<strong>Product name</strong>: ${product.name}
					<strong>Product price</strong>: ${product.price}
					<strong>Product year</strong>: ${product.year}
				</div>
			</div>		
		`
		productList.appendChild(element);
	}
	deleteProduct(){

	}
	showMessage(){

	}
}

// Dom events

form = document.getElementById('product-form');

form.addEventListener('submit', function(event){	

	const name = document.getElementById('name').value; // valores de las variables del formulario  
	const price = document.getElementById('price').value;
	const year = document.getElementById('year').value;

	const product = new Product(name,price,year); // iniciar un objeto product 

	const ui = new UI(); // inciar un objeto de interfaz

	ui.addProduct(product) // enviandole todo el producto al metodo agregar de UI

	event.preventDefault(); // evita que el navegador recargue la pagina

});
