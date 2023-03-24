document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let x = document.querySelector('#create-task-form')
  x.addEventListener('submit' , (e) => {
    e.preventDefault()
    toDo(e.target.description.value)
    x.reset()
  })
});
 
function toDo(task){
  let btn = document.createElement('button')
  let p = document.createElement('p')
  btn.addEventListener('click' , Delete)
  btn.textContent = 'x'
  p.textContent = task
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
  console.log(toDo)
}

function Delete(e){
  e.target.parentNode.remove()
}