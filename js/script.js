//
// Lista de tareas
//

const form = document.getElementById('new-task-form');
const list = document.getElementById('task-list');
let contador = 0
const works = [];

form.addEventListener('submit', (event) => {
  //se cancela el comportamiento default del formulario.
  event.preventDefault();
  console.log('form enviaado!');
  //texto introducido por el usuario
  console.log(form.elements[0].value);
  //lista
  const newTodo = document.createElement('li');
  newTodo.classList.add('task-list-todo');
  //checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  //checkbox.setAttribute('id', `tarea-${contador++}`); EL +++ AFECTA ACA POR CAMBIA EL CONTADOR Y DESPUES NO CALZA CON LABEL
  checkbox.setAttribute('id', `tarea-${contador}`);
  //label
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${contador}`);
  //contador++; SE PASA HASTA EL FINAL
  label.innerHTML = form.elements[0].value;

  //se AGREGA ELEMENTOS
  newTodo.appendChild(checkbox);
  newTodo.appendChild(label);
  list.appendChild(newTodo);

  //reseteamos ES MEJOR QUE SIEMPRE ESTE AL FINAL, PORQUE O SINO OCACIONA ERROR
  //form.elements[0].value = '';

  //crear variable para el objeto
  const miTarea = {
    id: contador,
    nombre: form.elements[0].value,
    completo: false,
    //fecha: form.elements[1].value,
  }
  tareas.push(miTarea);
  console.log(tareas)
  contador++;

  //reseteamos //ES MEJOR QUE SIEMPRE ESTE AL FINAL, PORQUE O SINO OCACIONA ERROR
  form.elements[0].value = '';
})