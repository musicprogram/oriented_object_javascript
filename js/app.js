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
					<a href="#" class="btn btn-danger" name="delete">delete</a>
				</div>
			</div>		
		`
		productList.appendChild(element);
	}

	resetForm(){ // resetear los inputs del formulario
		document.getElementById('product-form').reset(); // get id form y resetearlo
	}

	deleteProduct(element){	
		if(element.name === 'delete'){ // se comprueba que haya un name=delete
			element.parentElement.parentElement.parentElement.remove();  // se elimina el padres del padre.... co remove()
		}
		
	}
	showMessage(){

	}
}

// Dom events formulario

form = document.getElementById('product-form');

form.addEventListener('submit', function(event){	// asignar evento al metodo submit del formulario con addEvent...

	const name = document.getElementById('name').value; // valores de las variables del formulario  
	const price = document.getElementById('price').value;
	const year = document.getElementById('year').value;

	const product = new Product(name,price,year); // iniciar un objeto product 

	const ui = new UI(); // inciar un objeto de interfaz

	ui.addProduct(product) // enviandole todo el producto al metodo agregar de UI

	ui.resetForm()

	event.preventDefault(); // evita que el navegador recargue la pagina

});


// otro evento del formulario eliminar


list = document.querySelector('#product-list'); // selecciono el id de product-list

list.addEventListener('click', function (e) { // evento click 
  ui = new UI;  //se crea un objeto de interfaz y se llama al metodo delete
  ui.deleteProduct(e.target); 
});