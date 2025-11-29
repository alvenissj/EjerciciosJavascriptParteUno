// Desarrolle una función que reciba como parámetros dos arreglos de números previamente ordenados de forma ascendente.
// La función debe implementar un algoritmo de fusión (merge) eficiente que integre ambos arreglos en uno solo, garantizando que el resultado final mantenga el orden ascendente sin utilizar métodos de ordenamiento adicionales.

// El objetivo de este ejercicio es aplicar la lógica del proceso de fusión utilizado en algoritmos como Merge Sort, optimizando el recorrido de los elementos y evitando operaciones de alto costo computacional. La solución debe asegurarse de recorrer ambos arreglos únicamente una vez y preservar la estabilidad y el orden de los datos.

// const isArrayUno = [10, 20, 30, 40, 45, 90, 200];
// const isArrayDos = [50, 60, 70, 80];

// function joinArray(arregloUno, arregloDos) {
//   if (!Array.isArray(arregloUno) || !Array.isArray(arregloDos)) {
//     throw new TypeError("Los argumento de la función DEBEN ser arreglos ordenados");
//   }

//   // CREAMOS LAS COPIAS CON EL SPREAD OPERATOR DESPUÉS DE VALIDAR SI LOS ARGUMENTOS SON ARREGLOS
//   const arrUno = [...arregloUno];
//   const arrDos = [...arregloDos];
//   let combineArray = [];

//   let i = 0;
//   let j = 0;

//   while (i < arrUno.length && j < arrDos.length) {
//     combineArray.push(arrUno[i] < arrDos[j] ? arrUno[i++] : arrDos[j++]);
//   }

//   return combineArray.concat(arrUno.slice(i), arrDos.slice(j));
// }

// try {
//   const print = joinArray(isArrayUno, isArrayDos);
//   console.log(print);
// } catch (err) {
//   console.error(err.message);
// }

// ****************************************************************

// Implemente una función en JavaScript que ordene un arreglo de números utilizando el algoritmo Bubble Sort. La función debe incluir validaciones para garantizar que el argumento recibido sea un arreglo y que no esté vacío. En caso de incumplir estas condiciones, deberá lanzar errores personalizados que describan claramente el tipo de falla. Finalmente, ejecute la función sobre un conjunto de datos y gestione las excepciones utilizando un bloque try/catch. Durante la entrevista, explique la lógica aplicada en el algoritmo, el propósito de las validaciones, la implementación de las clases de error personalizadas y el manejo de excepciones.

// const isArrayNumber = [10, 40, 35, 12, 1, 13, 50];
// class InvalidArrayTypeError extends TypeError {
//   constructor(value) {
//     super(
//       `Argumento recibido con error, se esperaba un arreglo y se recibió: ${JSON.stringify(
//         value
//       )}`
//     );
//     this.name = "InvalidArrayTypeError";
//   }
// }

// class EmptyArrayError extends RangeError {
//   constructor(value) {
//     super(
//       `Argumento recibido con error, se esperaba un arreglo con elementos no vacío y se recibió: ${JSON.stringify(
//         value
//       )}`
//     );
//     this.name = "EmptyArrayError";
//   }
// }

// function bubbleSort(arreglo) {
//   if (!Array.isArray(arreglo)) {
//     throw new InvalidArrayTypeError(arreglo);
//   }

//   if (arreglo.length <= 0) {
//     throw new EmptyArrayError(arreglo);
//   }

//   let arrElementos = [...arreglo];
//   const n = arrElementos.length;
//   for (let i = 0; i < n - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arrElementos[j] > arrElementos[j + 1]) {
//         [arrElementos[j], arrElementos[j + 1]] = [
//           arrElementos[j + 1],
//           arrElementos[j],
//         ];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }

//   return arrElementos;
// }

// try {
//   const print = bubbleSort(isArrayNumber);
//   console.log(print);
// } catch (err) {
//   switch (err.name) {
//     case "InvalidArrayTypeError":
//       console.error("🚨 Tipo incorrecto: ", err.message);
//       break;
//     case "EmptyArrayError":
//       console.error("🚨 Arreglo vacío: ", err.message);
//       break;

//     default:
//       console.error("Error desconocido: ", err);
//       break;
//   }
// }

// ****************************************************************

// Crear una función que reciba una lista de números números y que se encargue de imprimir TIK si el número es múltiplo de 3, y que imprima TOOK si es multiplo de 5; en caso de que el número sea múltiplo de 3 y 5, debe imprimir TIKTOOK.

// class InvalidTypeError extends TypeError {
//   constructor(value) {
//     super(
//       `El argumento de la función DEBE ser un entero positivo mayor a cero y se recibió: ${JSON.stringify(
//         value
//       )}`
//     );
//     this.name = "InvalidTypeError";
//   }
// }

// function tikTook(n) {
//   let msg = "";

//   const divisible = (num, multiplo) => !(num % multiplo);

//   if (divisible(n, 3)) msg += "Tik";
//   if (divisible(n, 5)) msg += "Took";

//   return msg || n;
// }

// function printNumber(limit) {
//   if (!Number.isInteger(limit) || limit <= 0) {
//     throw new InvalidTypeError(limit);
//   }

//   for (let i = 1; i <= limit; i++) {
//     console.log(`${tikTook(i)}`);
//   }
// }

// try {
//   printNumber(50);
// } catch (err) {
//   console.error("Error: ", err.message);
// }

// ****************************************************************

// Implemente una función denominada insertionSort que ordene un arreglo de números en forma ascendente utilizando el algoritmo Insertion Sort.

// La función debe:

// Validar que el parámetro recibido sea un arreglo y lanzar InvalidTypeArrayError si no lo es.

// Verificar que el arreglo no esté vacío y lanzar EmptyArrayError en caso contrario.

// Aplicar correctamente el algoritmo para insertar cada elemento en su posición correspondiente dentro de un nuevo arreglo ordenado.

// Retornar el arreglo resultante y manejar las excepciones mediante un bloque try...catch.

// El objetivo es evaluar la correcta aplicación del algoritmo de inserción y el manejo robusto de errores personalizados.

// const isArrayNumber = [5, 3, 4, 1, 2];
// class InvalidTypeArrayError extends TypeError {
//   constructor(value) {
//     super(`Se esperaba un arreglo y se recibió: ${JSON.stringify(value)}`);
//     this.name = "InvalidTypeArrayError";
//   }
// }
// class EmptyArrayError extends RangeError {
//   constructor() {
//     super("Se esperaba un array con elementos");
//     this.name = "EmptyArrayError";
//   }
// }
// function insertionSort(arreglo) {
//   if (!Array.isArray(arreglo)) {
//     throw new InvalidTypeArrayError(arreglo);
//   }
//   if (arreglo.length === 0) {
//     throw new EmptyArrayError();
//   }

//   const arrElements = [...arreglo];
//   const n = arrElements.length;
//   for (let i = 1; i < n; i++) {
//     let currentValue = arrElements[i];
//     let posValue = i;
//     while (posValue > 0 && arrElements[posValue - 1] > currentValue) {
//       arrElements[posValue] = arrElements[posValue - 1];
//       posValue--;
//     }
//     arrElements[posValue] = currentValue;
//   }
//   return arrElements;
// }

// try {
//   const print = insertionSort(isArrayNumber);
//   console.log(print);
// } catch (err) {
//   switch (err.name) {
//     case "InvalidTypeArrayError":
//       console.error("Error: ", err.message);
//       break;
//     case "EmptyArrayError":
//       console.error("Error: ", err.message);
//       break;
//     default:
//       console.error("Error desconocido: ", err);
//       break;
//   }
// }

// ****************************************************************

// Implemente una función llamada selectionSort que ordene un arreglo de números en forma ascendente utilizando el algoritmo Selection Sort. La función debe validar que el argumento sea un arreglo y que no esté vacío, lanzando los errores personalizados InvalidTypeError y EmptyError según corresponda.

// El objetivo del ejercicio es demostrar la correcta aplicación del algoritmo de selección, identificando el valor mínimo en cada iteración y realizando los intercambios necesarios, además de garantizar un manejo robusto de errores y un procesamiento seguro de los datos de entrada.

// const isArrayNumber = [80, 4, 20, 3, 1, 5, 2];
// class InvalidTypeError extends TypeError {
//   constructor(value) {
//     super(
//       `Se requiere un arreglo en el argumento de la función. Se recibió esto: ${JSON.stringify(
//         value
//       )}`
//     );
//     this.name = "InvalidTypeError";
//   }
// }

// class EmptyError extends RangeError {
//   constructor() {
//     super(`Se requiere un arreglo con elementos`);
//     this.name = "EmptyError";
//   }
// }

// function selectionSort(arreglo) {
//   if (!Array.isArray(arreglo)) {
//     throw new InvalidTypeError(arreglo);
//   }
//   if (arreglo.length === 0) {
//     throw new EmptyError();
//   }
//   const arrElements = [...arreglo];
//   const n = arrElements.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arrElements[j] < arrElements[min]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       [arrElements[i], arrElements[min]] = [arrElements[min], arrElements[i]];
//     }
//   }

//   return arrElements;
// }

// try {
//   const print = selectionSort(isArrayNumber);
//   console.log(print);
// } catch (err) {
//   switch (err.name) {
//     case "InvalidTypeError":
//       console.error("Error: ", err.message);
//       break;
//     case "EmptyError":
//       console.error("Error: ", err.message);
//       break;
//     default:
//       console.error("Error desconocido: ", err);
//       break;
//   }
// }

// ****************************************************************

// Implemente una función denominada secuentialSearch que realice una búsqueda lineal sobre un arreglo para determinar si un valor objetivo está presente.
// La solución debe incluir validación estricta del tipo de datos, manejo de excepciones personalizadas y una lógica de recorrido eficiente y clara.

// let isArrayNumber = [3, 4, 2, 1, 5];
// class InvalidTypeError extends TypeError {
//   constructor(value) {
//     super(
//       `El argumento de la función debe ser un arreglo. Se recibió esto: ${JSON.stringify(
//         value
//       )}`
//     );
//     this.name = "InvalidTypeError";
//   }
// }

// class EmptyError extends RangeError {
//   constructor() {
//     super("El arreglo recibido debe tener elementos");
//     this.name = "EmptyError";
//   }
// }

// class NumberIntegerError extends TypeError {
//   constructor(value) {
//     super(
//       `El argumento de la función debe ser un número entero. Se recibió: ${JSON.stringify(
//         value
//       )}`
//     );
//     this.name = "NumberIntegerError";
//   }
// }

// function secuentialSearch(arreglo, target) {
//   if (!Array.isArray(arreglo)) throw new InvalidTypeError(arreglo);
//   if (arreglo.length === 0) throw new EmptyError();
//   if (!Number.isInteger(target)) throw new NumberIntegerError(target);

//   const n = arreglo.length;
//   let band = false;
//   let i = 0;
//   while (band === false && i < n) {
//     if (arreglo[i] === target) return i;
//     i++;
//   }

//   return -1;
// }

// try {
//   const print = secuentialSearch(isArrayNumber, 5);
//   console.log(print);
// } catch (err) {
//   switch (err.name) {
//     case "InvalidTypeError":
//       console.error("Error: ", err.message);
//       break;
//     case "EmptyError":
//       console.error("Error: ", err.message);
//       break;
//     case "NumberIntegerError":
//       console.error("Error: ", err.message);
//       break;
//     default:
//       console.error("Error desconocido: ", err);
//   }
// }

// ****************************************************************

// Desarrolle una función que implemente el algoritmo de búsqueda binaria sobre un arreglo estrictamente ordenado de forma ascendente.
// La función debe validar rigurosamente los tipos de entrada, gestionar errores personalizados y retornar el índice del elemento buscado o -1 si no se encuentra. Su solución debe reflejar buenas prácticas, eficiencia y una estructura coherente con algoritmos de complejidad O(log n).

// class InvalidTypeError extends TypeError {
//   constructor(value) {
//     super(
//       `El primer argumento de la función debe recibir un arreglo ordenado ascendente, se recibió: ${JSON.stringify(
//         value
//       )}`
//     );
//     this.name = "InvalidTypeError";
//   }
// }

// class EmptyError extends RangeError {
//   constructor() {
//     super("El arreglo no puede estar vacío");
//     this.name = "EmptyError";
//   }
// }

// class NumberIntegerError extends TypeError {
//   constructor(value) {
//     super(
//       `El segundo argumento de la función DEBE ser un numero entero, se recibió: ${value}`
//     );
//     this.name = "NumberIntegerError";
//   }
// }

// let isArrayNumber = [1, 2, 3, 4, 10, 20, 30, 40];
// function binarySearch(arreglo, target) {
//   if (!Array.isArray(arreglo)) throw new InvalidTypeError(arreglo);
//   if (arreglo.length === 0) throw new EmptyError();
//   if (!Number.isInteger(target)) throw new NumberIntegerError(target);

//   let n = arreglo.length - 1;
//   let inf = 0;
//   let sup = n;

//   while (inf <= sup) {
//     const mitad = Math.floor((inf + sup) / 2);
//     if (arreglo[mitad] === target) return mitad;

//     if (arreglo[mitad] < target) {
//       inf = mitad + 1;
//     } else {
//       sup = mitad - 1;
//     }
//   }

//   return -1;
// }

// try {
//   const print = binarySearch(isArrayNumber, 40);
//   console.log(print);
// } catch (err) {
//   switch (err.name) {
//     case "InvalidTypeError":
//       console.error("Error: ", err.message);
//       break;
//     case "EmptyError":
//       console.error("Error: ", err.message);
//       break;
//     case "NumberIntegerError":
//       console.error("Error: ", err.message);
//       break;
//     default:
//       console.log("Error desconocido: ", err);
//       break;
//   }
// }

// ****************************************************************

// Algoritmo que busca el camino más corto en un grafo ponderado dirigido, utilizando el algoritmo de Dijkstra. Este algoritmo es útil para encontrar la ruta más corta entre dos nodos en un grafo con aristas de peso no negativo.

// Ejemplo de uso
// const grafo = {
//   A: { B: 2, C: 5 },
//   B: { A: 2, C: 6, D: 1, E: 3 },
//   C: { A: 5, B: 6, D: 2, F: 8 },
//   D: { B: 1, C: 2, E: 4, F: 3 },
//   E: { B: 3, D: 4, G: 7 },
//   F: { C: 8, D: 3, G: 1 },
//   G: { E: 7, F: 1 },
// };
// const nodoInicial = "A";

// function dijkstra(grafo, nodoInicial) {
//   if (typeof grafo !== "object" || grafo === null || Array.isArray(grafo)) {
//     throw new TypeError(`El grafo DEBE ser un objeto válido y no un arreglo.`);
//   }

//   if (!grafo.hasOwnProperty(nodoInicial)) {
//     throw new Error(`El nodo inicial: ${nodoInicial} no existe en el grafo`);
//   }

//   let distancias = {};
//   let visitados = {};
//   let prev = {};

//   for (let nodo in grafo) {
//     distancias[nodo] = Infinity;
//     visitados[nodo] = false;
//     prev[nodo] = null;
//   }

//   distancias[nodoInicial] = 0;

//   while (true) {
//     let nodoActual = null;
//     for (let nodo in grafo) {
//       if (
//         !visitados[nodo] &&
//         (nodoActual === null || distancias[nodoActual] > distancias[nodo])
//       ) {
//         nodoActual = nodo;
//       }
//     }
//     if (nodoActual === null) break;
//     visitados[nodoActual] = true;

//     for (let vecino in grafo[nodoActual]) {
//       let distToVecino = distancias[nodoActual] + grafo[nodoActual][vecino];
//       if (distToVecino < distancias[vecino]) {
//         distancias[vecino] = distToVecino;
//         prev[vecino] = nodoActual;
//       }
//     }
//   }

//   return {
//     distancias,
//     prev,
//   };
// }

// try {
//   const print = dijkstra(grafo, nodoInicial);
//   console.log(print);
// } catch (err) {
//   console.error("Error: ", err.message);
// }

// ****************************************************************

// Dado un array de objetos paddockType, que contiene los tipos de cultivos con su id y name, y un array de objetos paddocks, que indica para cada parcela su paddockTypeId y su area en hectáreas, desarrollar una función que:

// 1.- Calcule el total de hectáreas por tipo de cultivo.
// 2.- Combine esta información con el nombre de cada tipo de cultivo.
// 3.- Retorne un array con cada tipo de cultivo (id, name, totalHectareas) ordenado de mayor a menor según las hectáreas totales.

// const paddockType = [
//   { id: 1, name: "PALTOS" },
//   { id: 2, name: "AVELLANOS" },
//   { id: 3, name: "CEREZAS" },
//   { id: 4, name: "NOGALES" },
// ];

// const paddocks = [
//   {
//     paddockManagerId: 6,
//     farmId: 1,
//     paddockTypeId: 1,
//     harvestYear: 2019,
//     area: 1200,
//   },
//   {
//     paddockManagerId: 1,
//     farmId: 3,
//     paddockTypeId: 4,
//     harvestYear: 2019,
//     area: 500,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 3,
//     paddockTypeId: 2,
//     harvestYear: 2020,
//     area: 20000,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 2,
//     paddockTypeId: 3,
//     harvestYear: 2021,
//     area: 8401,
//   },
//   {
//     paddockManagerId: 3,
//     farmId: 1,
//     paddockTypeId: 1,
//     harvestYear: 2020,
//     area: 2877,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 2,
//     paddockTypeId: 2,
//     harvestYear: 2017,
//     area: 15902,
//   },
//   {
//     paddockManagerId: 3,
//     farmId: 3,
//     paddockTypeId: 2,
//     harvestYear: 2018,
//     area: 1736,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 3,
//     paddockTypeId: 3,
//     harvestYear: 2020,
//     area: 2965,
//   },
//   {
//     paddockManagerId: 4,
//     farmId: 3,
//     paddockTypeId: 4,
//     harvestYear: 2018,
//     area: 1651,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 1,
//     paddockTypeId: 1,
//     harvestYear: 2018,
//     area: 700,
//   },
//   {
//     paddockManagerId: 1,
//     farmId: 2,
//     paddockTypeId: 1,
//     harvestYear: 2019,
//     area: 7956,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 3,
//     paddockTypeId: 2,
//     harvestYear: 2020,
//     area: 3745,
//   },
//   {
//     paddockManagerId: 6,
//     farmId: 1,
//     paddockTypeId: 3,
//     harvestYear: 2021,
//     area: 11362,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 3,
//     paddockTypeId: 3,
//     harvestYear: 2021,
//     area: 300,
//   },
//   {
//     paddockManagerId: 3,
//     farmId: 2,
//     paddockTypeId: 2,
//     harvestYear: 2020,
//     area: 19188,
//   },
//   {
//     paddockManagerId: 3,
//     farmId: 1,
//     paddockTypeId: 1,
//     harvestYear: 2019,
//     area: 17137,
//   },
//   {
//     paddockManagerId: 4,
//     farmId: 3,
//     paddockTypeId: 2,
//     harvestYear: 2020,
//     area: 100,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 1,
//     paddockTypeId: 3,
//     harvestYear: 2019,
//     area: 11845,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 2,
//     paddockTypeId: 1,
//     harvestYear: 2018,
//     area: 15969,
//   },
//   {
//     paddockManagerId: 1,
//     farmId: 3,
//     paddockTypeId: 1,
//     harvestYear: 2029,
//     area: 10420,
//   },
//   {
//     paddockManagerId: 5,
//     farmId: 2,
//     paddockTypeId: 3,
//     harvestYear: 2010,
//     area: 3200,
//   },
//   {
//     paddockManagerId: 6,
//     farmId: 1,
//     paddockTypeId: 2,
//     harvestYear: 2012,
//     area: 10587,
//   },
//   {
//     paddockManagerId: 2,
//     farmId: 2,
//     paddockTypeId: 2,
//     harvestYear: 2018,
//     area: 16750,
//   },
// ];

// function hallarPaddockType(paddocksTipo, namePaddocks) {
//   const hectareasPaddocks = paddocksTipo.reduce(
//     (acc, { paddockTypeId, area }) => {
//       acc[paddockTypeId] ??= 0;
//       acc[paddockTypeId] += area;
//       return acc;
//     },
//     {}
//   );

//   const mostrarPaddocks = namePaddocks.map(({ id, name }) => ({
//     id,
//     name,
//     totalHectareas: hectareasPaddocks[id] || 0,
//   }));

//   return mostrarPaddocks.sort((a, b) => b.totalHectareas - a.totalHectareas);
// }

// const print = hallarPaddockType(paddocks, paddockType);
// console.log(print);

// ****************************************************************

// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
// const giftIds2 = [1, 2, 3, 4] // output -1
// const giftIds3 = [5, 1, 5, 1]; // output 5
// const giftIds = [2, 1, 3, 5, 3, 2]; // output: 3 Aunque el 2 y el 3 se repiten el 3 aparece primero por segunda vez.

// function firstElementRepeated(arrElements) {
//   if (!Array.isArray(arrElements) || arrElements.length === 0) {
//     throw new Error("El argumento de la función DEBE ser un arreglo no vacío...")
//   }
//   const map = new Set();
//   for (let elements of arrElements) {
//     if (map.has(elements)) {
//       return elements;
//     }
//     map.add(elements);
//   }

//   return -1;
// }

// try {
//   const print = firstElementRepeated(giftIds);
//   console.log(print);
// } catch (err) {
//   console.error("Error", err.message);
// }

// ****************************************************************

// Dada una lista de compras donde cada elemento contiene una categoría, el monto pagado y la cantidad de productos adquiridos, implementa una función que:
//1.- Filtre todas las compras cuya cantidad (quantity) sea estrictamente mayor que un valor mínimo especificado.
//2.- Agrupe las compras resultantes por categoría.
//3.- Calcule para cada categoría:
// - El monto total acumulado (totalAmount)
// - La cantidad total acumulada de productos (totalQuantity)

// La función debe retornar un objeto donde cada clave sea el nombre de una categoría y su valor un objeto con las estadísticas calculadas.

// Ejemplo de salida esperada:
// {
//   Groceries: { totalAmount: 125, totalQuantity: 30 },
//   Clothing: { totalAmount: 100, totalQuantity: 6 }
// }

// Datos de ejemplo
// const purchases = [
//   { category: "Electronics", amount: 200, quantity: 1 },
//   { category: "Groceries", amount: 50, quantity: 10 },
//   { category: "Clothing", amount: 100, quantity: 5 },
//   { category: "Clothing", amount: 100, quantity: 6 },
//   { category: "Electronics", amount: 150, quantity: 2 },
//   { category: "Groceries", amount: 75, quantity: 20 },
// ];

// function calculatePurchaseStats(compras, minCantidad) {
//   const filterPurchases = compras.filter(
//     ({ quantity }) => quantity > minCantidad
//   );

//   const groupPurchases = filterPurchases.reduce(
//     (acc, { category, amount, quantity }) => {
//       if (!acc[category]) {
//         acc[category] = { TotalAmount: 0, TotalQuantity: 0 };
//       }
//       acc[category].TotalAmount += amount;
//       acc[category].TotalQuantity += quantity;
//       return acc;
//     },
//     {}
//   );

//   return groupPurchases
// }

// Ejemplo de uso de la función
// const minQuantity = 5;
// const result = calculatePurchaseStats(purchases, minQuantity);
// console.log(result);

// ****************************************************************

// La empresa desea optimizar los productos que se muestran en la página principal de su tienda en línea. Para ello, se te solicita implementar una función que procese un conjunto de productos y retorne únicamente aquellos que cumplen criterios avanzados de visibilidad comercial.

// La función debe:
//Filtrar los productos válidos atendiendo a los siguientes criterios:

//1.- El producto debe tener stock disponible (stock > 0).
//2.- Debe tener una calificación mínima de 4 estrellas (rating >= 4).
//3.- Su categoría debe estar incluida en una lista de categorías permitidas.

// Adicionalmente, un producto es elegible si:
//1.- Está marcado como destacado (isFeatured === true), o
//2.- Su precio es estrictamente menor que un valor máximo establecido.

// Agrupar los productos filtrados por categoría, retornando un objeto donde cada clave representa una categoría y su valor es un arreglo con los productos correspondientes.

// const allowedCategories = ["Electronics", "Groceries", "Clothing"];
// const maxPrice = 100;
// // Datos de ejemplo
// const products = [
//   {
//     id: 1,
//     category: "Electronics",
//     price: 299,
//     rating: 4.5,
//     stock: 10,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     category: "Groceries",
//     price: 5,
//     rating: 3.5,
//     stock: 50,
//     isFeatured: false,
//   },
//   {
//     id: 3,
//     category: "Clothing",
//     price: 49,
//     rating: 4.0,
//     stock: 4,
//     isFeatured: true,
//   },
//   {
//     id: 4,
//     category: "Electronics",
//     price: 199,
//     rating: 3.8,
//     stock: 5,
//     isFeatured: false,
//   },
//   {
//     id: 5,
//     category: "Groceries",
//     price: 3,
//     rating: 4.8,
//     stock: 30,
//     isFeatured: true,
//   },
//   {
//     id: 6,
//     category: "Clothing",
//     price: 120,
//     rating: 4.2,
//     stock: 20,
//     isFeatured: false,
//   },
// ];

// function selectProductsToShow(productos, categoriasPermitidas, precioMaximo) {
//   const filteredProducts = productos.filter(
//     ({ id, category, price, rating, stock, isFeatured }) => {
//       return (
//         stock > 0 &&
//         rating >= 4 &&
//         categoriasPermitidas.includes(category) &&
//         (isFeatured || price < precioMaximo)
//       );
//     }
//   );

//   // Agrupamos por categorías
//   const groupProductsCategory = filteredProducts.reduce(
//     (acc, p) => ({
//       ...acc,
//       [p.category]: [...(acc[p.category] || []), p],
//     }),
//     {}
//   );

//   return groupProductsCategory;
// }

// const print = selectProductsToShow(products, allowedCategories, maxPrice);
// console.log(print);

// ****************************************************************

// La compañía requiere diseñar un módulo que permita identificar y seleccionar los productos más relevantes para mostrar en la sección “Recomendados para ti”.
// La función debe procesar una lista de productos y generar un subconjunto optimizado basado en un puntaje de recomendación obtenido por criterios de calidad, confiabilidad y comportamiento del consumidor.

//La función DEBE:
// 1. Evaluar la calidad del producto
// 2.- Considerar el rating utilizando un promedio ponderado por número de reviews.
// 3.- Rechazar productos con reviews muy bajos (< 5).
// 4.- Considerar señales reales de intención de compra

// A cada producto se le asignará un puntaje adicional basado en:
// 1.- Número de veces añadido al carrito (addToCart)
// 2.- Número de veces añadido a wishlist (wishList)
// 3.- Tasa de conversión estimada (conversionRate)
// 4.- Controlar el volumen de inventario

// Solo se recomendarán productos con:
// 1.- stock >= MIN_STOCK_THRESHOLD (por ejemplo, 10 unidades)
// 2.- Manejo de productos nuevos

// Los productos nuevos podrán ser recomendados solo si:
// 1.- Tienen engagement inicial (clicks, vistas, etc.)
// 2.- Cumplen con un score mínimo de relevancia
// 3.- Retornar solo los productos con mayor score
// 4.- Ordenados por recommendationScore
// 5.- Limitados a un máximo de 10

// const products = [
//   {
//     id: 1,
//     category: "Electronics",
//     rating: 4.5,
//     reviews: 120,
//     stock: 50,
//     addToCart: 300,
//     wishList: 120,
//     conversionRate: 0.12,
//     isNew: false,
//   },
//   {
//     id: 2,
//     category: "Groceries",
//     rating: 4.1,
//     reviews: 800,
//     stock: 300,
//     addToCart: 1000,
//     wishList: 200,
//     conversionRate: 0.22,
//     isNew: false,
//   },
//   {
//     id: 3,
//     category: "Clothing",
//     rating: 4.9,
//     reviews: 15,
//     stock: 10,
//     addToCart: 60,
//     wishList: 20,
//     conversionRate: 0.05,
//     isNew: true,
//   },
//   {
//     id: 4,
//     category: "Electronics",
//     rating: 4.7,
//     reviews: 450,
//     stock: 80,
//     addToCart: 500,
//     wishList: 300,
//     conversionRate: 0.18,
//     isNew: false,
//   },
//   {
//     id: 5,
//     category: "Clothing",
//     rating: 4.3,
//     reviews: 220,
//     stock: 120,
//     addToCart: 150,
//     wishList: 90,
//     conversionRate: 0.11,
//     isNew: false,
//   },
//   {
//     id: 6,
//     category: "Groceries",
//     rating: 4.8,
//     reviews: 90,
//     stock: 40,
//     addToCart: 200,
//     wishList: 80,
//     conversionRate: 0.25,
//     isNew: true,
//   },
//   {
//     id: 7,
//     category: "Home",
//     rating: 4.0,
//     reviews: 300,
//     stock: 200,
//     addToCart: 350,
//     wishList: 140,
//     conversionRate: 0.15,
//     isNew: false,
//   },
//   {
//     id: 8,
//     category: "Home",
//     rating: 3.9,
//     reviews: 50,
//     stock: 15,
//     addToCart: 45,
//     wishList: 12,
//     conversionRate: 0.04,
//     isNew: true,
//   },
//   {
//     id: 9,
//     category: "Beauty",
//     rating: 4.6,
//     reviews: 700,
//     stock: 150,
//     addToCart: 900,
//     wishList: 350,
//     conversionRate: 0.28,
//     isNew: false,
//   },
//   {
//     id: 10,
//     category: "Beauty",
//     rating: 4.2,
//     reviews: 180,
//     stock: 60,
//     addToCart: 110,
//     wishList: 55,
//     conversionRate: 0.1,
//     isNew: false,
//   },
//   {
//     id: 11,
//     category: "Sports",
//     rating: 4.9,
//     reviews: 350,
//     stock: 95,
//     addToCart: 420,
//     wishList: 210,
//     conversionRate: 0.32,
//     isNew: true,
//   },
//   {
//     id: 12,
//     category: "Sports",
//     rating: 3.8,
//     reviews: 80,
//     stock: 30,
//     addToCart: 70,
//     wishList: 25,
//     conversionRate: 0.06,
//     isNew: false,
//   },
//   {
//     id: 13,
//     category: "Electronics",
//     rating: 4.4,
//     reviews: 500,
//     stock: 25,
//     addToCart: 260,
//     wishList: 100,
//     conversionRate: 0.14,
//     isNew: false,
//   },
//   {
//     id: 14,
//     category: "Groceries",
//     rating: 4.0,
//     reviews: 900,
//     stock: 200,
//     addToCart: 850,
//     wishList: 160,
//     conversionRate: 0.2,
//     isNew: false,
//   },
//   {
//     id: 15,
//     category: "Clothing",
//     rating: 4.7,
//     reviews: 60,
//     stock: 35,
//     addToCart: 55,
//     wishList: 28,
//     conversionRate: 0.08,
//     isNew: true,
//   },
//   {
//     id: 16,
//     category: "Home",
//     rating: 4.5,
//     reviews: 200,
//     stock: 80,
//     addToCart: 210,
//     wishList: 90,
//     conversionRate: 0.16,
//     isNew: false,
//   },
//   {
//     id: 17,
//     category: "Beauty",
//     rating: 4.9,
//     reviews: 1200,
//     stock: 500,
//     addToCart: 1800,
//     wishList: 500,
//     conversionRate: 0.35,
//     isNew: false,
//   },
//   {
//     id: 18,
//     category: "Sports",
//     rating: 4.3,
//     reviews: 250,
//     stock: 60,
//     addToCart: 200,
//     wishList: 80,
//     conversionRate: 0.12,
//     isNew: false,
//   },
//   {
//     id: 19,
//     category: "Electronics",
//     rating: 3.7,
//     reviews: 40,
//     stock: 20,
//     addToCart: 30,
//     wishList: 10,
//     conversionRate: 0.03,
//     isNew: true,
//   },
//   {
//     id: 20,
//     category: "Clothing",
//     rating: 4.6,
//     reviews: 310,
//     stock: 70,
//     addToCart: 260,
//     wishList: 130,
//     conversionRate: 0.18,
//     isNew: false,
//   },
// ];

// function getRecommendedProducts(productos) {
//   const MIN_REVIEWS = 5;
//   const MIN_STOCK = 10;

//   // 1. Filtrar productos no válidos
//   const validProducts = productos.filter(
//     (p) => p.reviews >= MIN_REVIEWS && p.stock >= MIN_STOCK
//   );

//   // 2. Calcular score ponderado
//   const scoredProducts = validProducts.map((p) => {
//     const weightedRating = p.rating * Math.log10(p.reviews + 1);

//     const engagementScore =
//       p.addToCart * 0.4 + p.wishList * 0.2 + p.conversionRate * 100 * 0.4;

//     const newProductBoost = p.isNew ? 1.15 : 1;

//     const recommendationScore =
//       (weightedRating * 0.5 + engagementScore * 0.5) * newProductBoost;

//     return {
//       ...p,
//       recommendationScore: Number(recommendationScore.toFixed(2)),
//     };
//   });

//   // 3. Ordenar por score
//   const sorted = scoredProducts.sort(
//     (a, b) => b.recommendationScore - a.recommendationScore
//   );

//   // 4. Tomar top 10
//   return sorted.slice(0, 10);
// }

// const print = getRecommendedProducts(products);
// console.log(print);

// ****************************************************************

// Desarrolle una función altamente eficiente que genere la colección de números pares dentro del rango 1 hasta n, donde n es un entero positivo proporcionado por el usuario.

// La solución debe centrarse en:
// 1.- Optimización del recorrido, evitando operaciones innecesarias.
// 2.- Buena gestión de memoria, evitando estructuras redundantes.
// 3.- Código limpio, expresivo y mantenible, siguiendo principios de Clean Code.
// 4.-  Manejo de errores robusto que asegure que el parámetro cumpla con los requisitos del dominio.

// La función debe retornar un arreglo con todos los números pares del rango, garantizando consistencia, claridad en la intención y un diseño orientado a buenas prácticas de desarrollo profesional.

// function getNumberPair(n) {
//   if (!Number.isInteger(n) || n < 1) {
//     throw new Error(
//       `El argumento de la función "${n}" DEBE ser un número entero positivo mayor a cero...`
//     );
//   }

//   const totalPairs = Math.floor(n / 2);
//   const results = new Array(totalPairs)

//   for (let i = 0, value = 2; i < totalPairs; i++, value += 2) {
//     results[i] = value;
//   }

//   return results

// }

// try {
//   const print = getNumberPair(100);
//   console.log(print);
// } catch (err) {
//   console.error(err.message);
// }

// ****************************************************************

// Desarrolle una función altamente eficiente que genere la colección de números impares dentro del rango 1 hasta n, donde n es un entero positivo proporcionado por el usuario.

// La solución debe centrarse en:
// 1.- Optimización del recorrido, evitando operaciones innecesarias.
// 2.- Buena gestión de memoria, evitando estructuras redundantes.
// 3.- Código limpio, expresivo y mantenible, siguiendo principios de Clean Code.
// 4.-  Manejo de errores robusto que asegure que el parámetro cumpla con los requisitos del dominio.

// La función debe retornar un arreglo con todos los números impares del rango, garantizando consistencia, claridad en la intención y un diseño orientado a buenas prácticas de desarrollo profesional.

// function getNumbersOdds(n) {
//   if (!Number.isInteger(n) || n < 1) {
//     throw new TypeError(
//       `El argumento de la función: "${n}" DEBE ser un entero positivo mayor a cero...`
//     );
//   }

//   const totalOdds = Math.ceil(n / 2);
//   const results = new Array(totalOdds);

//   for (let i = 0, value = 1; i < totalOdds; i++, value += 2) {
//     results[i] = value;
//   }

//   return results;
// }

// try {
//   const print = getNumbersOdds(50);
//   console.log(print);
// } catch (err) {
//   console.error(err.message);
// }

// ****************************************************************

// Implemente una función que valide si una cadena compuesta por delimitadores —paréntesis (), corchetes [] y llaves {}— está correctamente balanceada y anidada. La solución debe evaluar la correspondencia exacta entre los caracteres de apertura y cierre, asegurando que cada símbolo de cierre coincida en tipo y orden con el último símbolo aún no cerrado. Utilice una estructura tipo stack para mantener el control del flujo de apertura/cierre, garantizando una complejidad temporal O(n). La solución debe ser lo suficientemente robusta para integrarse en un módulo de validación sintáctica utilizado por motores de análisis y sistemas de procesamiento de expresiones estructuradas.

// Por ejemplo:
// "()" es válido.
// "()[]{}" es válido.
// "(]" no es válido.
// "([)]" no es válido.
// "{[]}" es válido.

// const pairs = {
//   "(": ")",
//   "[": "]",
//   "{": "}",
// };

// function isValid(objeto, caracteres) {
//   // Si la longitud es impar, es imposible que sea válida
//   if (caracteres.length % 2 !== 0) return false;
//   let stack = [];

//   for (const char of caracteres) {
//     if (char in objeto) {
//       stack.push(char);
//       continue;
//     }
//     const last = stack.pop();
//     if (objeto[last] !== char) return false;
//   }

//   return stack.length === 0;
// }

// const print = isValid(pairs, "()[]{}");
// console.log(print);

// ****************************************************************

// **Dado un string "caracteres", implemente un algoritmo óptimo que determine la longitud de la subcadena más larga que no contiene caracteres repetidos.

// Su solución debe tener complejidad temporal O(n) y utilizar únicamente memoria adicional O(k), donde k es el tamaño del alfabeto utilizado.
// Debe demostrar una implementación robusta, limpia y fácilmente mantenible, que incorpore validaciones y un enfoque profesional.**

// Ejemplo:
// Entrada: "abcabcbb"
// Salida: 3
// (Subcadena más larga sin repetir: "abc")

/**
 * Retorna la longitud de la subcadena más larga sin caracteres repetidos.
 * Enfoque: Sliding Window + HashMap → O(n)
 */
// function lengthOfLongestSubstring(caracteres) {
//   if (typeof caracteres !== "string") {
//     throw new TypeError(
//       `El argumento debe ser un string. Se recibió: ${typeof caracteres}`
//     );
//   }

//   const map = new Map(); // almacena la última posición de cada carácter
//   let left = 0; // inicio de la ventana -->
//   let maxLength = 0; // mejor resultado encontrado -->
//   const n = caracteres.length; // 8

//   for (let i = 0; i < n; i++) {
//     const char = caracteres[i]; //b
//     if (map.has(char) && map.get(char) >= left) {
//       left = map.get(char) + 1;
//     }
//     map.set(char, i);

//     // actualizar el máximo
//     maxLength = Math.max(maxLength, i - left + 1); // (3)
//   }

//   return maxLength;
// }

// // Ejemplo de uso:
// try {
//   const print = lengthOfLongestSubstring("abcabcbb");
//   console.log(print); // → 3
// } catch (err) {
//   console.error(err.message);
// }

// console.log(lengthOfLongestSubstring("bbbbb")); // → 1
// console.log(lengthOfLongestSubstring("pwwkew")); // → 3
