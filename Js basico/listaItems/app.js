
// agregar un elemento a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//Evento submit del formulario
form.addEventListener('submit', agregarItem);
// Evento click de la lista
lista.addEventListener('click', eliminarItem);
// Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtarItems);

function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    if (newItem != ''){
    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));
            
    li.appendChild(botonDel);
    console.log(li);

    lista.appendChild(li);
    }
}

function eliminarItem(e){
    var deleteItem = document.getElementById('item');
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar este elemento?')){

            var li = e.target.parentElement;
        lista.removeChild(li);
        }
        
    }
}

function filtarItems(e){
    var texto = e.target.value.toLowerCase();
    var items= lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if (itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}

