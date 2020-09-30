//
// Lista de tareas
//


//
// MODELO
//

//Lista de tareas
//parse convierte de string a array
let tareas = [];
const datosLocalStorage = JSON.parse(localStorage.getItem(tareas));
if (datosLocalStorage) {
  tareas = JSON.parse(datosLocalStorage);
}

//contador de tareas
let contador = 0

function addTask(nombreTarea, fechaTarea, completoTarea) {
  const miTarea = {
    id: contador,
    nombre: nombreTarea,
    completo: completoTarea,
    fecha: fechaTarea
  }
  tareas.push(miTarea);

  contador++;
  console.log(tareas);

  appendTaskDOM(miTarea);
//convierte en string, JSON
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

//
///VISTA
//

const list = document.getElementById('task-list');

function appendTaskDOM(tarea) {
  const newTodo = document.createElement('li');
  newTodo.classList.add('task-list-todo');
  //checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  //checkbox.setAttribute('id', `tarea-${contador++}`); EL +++ AFECTA ACA POR CAMBIA EL CONTADOR Y DESPUES NO CALZA CON LABEL
  checkbox.setAttribute('id', `tarea-${tarea.id}`);
  //label
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea.id}`);
  //contador++; SE PASA HASTA EL FINAL
  label.innerHTML =`${tarea.nombre} - ${tarea.fecha}` ;

  //se AGREGA ELEMENTOS
  newTodo.appendChild(checkbox);
  newTodo.appendChild(label);
  list.appendChild(newTodo);
}


for (let i = 0; i < tareas.length; i++) {
  appendTaskDOM(tareas[i]);
}

//
/////CONTROLADOR
//


const form = document.getElementById('new-task-form');

form.addEventListener('submit', (event) => {
  //se cancela el comportamiento default del formulario.
  event.preventDefault();
  console.log('form enviaado!');
  //texto introducido por el usuario
  console.log(form.elements[0].value);
  //lista
  addTask(form.elements[0].value, form.elements[1].value, false);
 
  //console.log(tarea);

  //reseteamos //ES MEJOR QUE SIEMPRE ESTE AL FINAL, PORQUE O SINO OCACIONA ERROR
  form.elements[0].value = '';
  form.elements[1].value = '';
})


