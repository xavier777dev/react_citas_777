/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {// este es nuestro template
    this.head = null// null: la lista esta vacia 
}
function Node(value){
    this.value = value
    this.next = null
}
LinkedList.prototype.add = function(value){
    let node=new Node(value)
    let current = this.head// esta es mi referencia 
    if(!current){// solamente entra si curren esta vacio
        this.head = node//agrega un nuevo nodo como cabeza
        return node
    }
    while (current.next) {// si el current tiene una propiedad next es pq el nodo existe y entra al while
        current=current.next// mientras current tenga una propiedad next cambiamos la referencia de current al siguiente nodo
    }
    current.next=node//al current le asignamos el siguiente nodo con el nuevo valor mirando pero en la propiedad next  a null
    return node
}
LinkedList.prototype.remove = function(){}
LinkedList.prototype.search = function(){}

// console.log(add(5));


4 < 5 && (
    console.log("date 1"),
    console.log("date 2") 
    )
