const { clipboard } = require('electron')

/**
 * TODO TMP !
 */
const baseURL = 'http://localhost:4564'

window.onload = function () {
  const panelURL = document.getElementById('panel-url')
  panelURL.value = baseURL + '/panel'
  panelURL.addEventListener('focus', focusInput)

  const projectNameURL = document.getElementById('project_name-url')
  projectNameURL.value = baseURL + '/components/project_name'
  projectNameURL.addEventListener('focus', focusInput)
  document.getElementById('project_name-preview').url =
    baseURL + '/components/project_name'

  const currentTaskURL = document.getElementById('current_task-url')
  currentTaskURL.value = baseURL + '/components/current_task'
  currentTaskURL.addEventListener('focus', focusInput)
  document.getElementById('current_task-preview').url =
    baseURL + '/components/current_task'

  const tasksURL = document.getElementById('tasks-url')
  tasksURL.value = baseURL + '/components/tasks'
  tasksURL.addEventListener('focus', focusInput)
  document.getElementById('tasks-preview').url = baseURL + '/components/tasks'
}

/**
 * Focus input
 * @param {FocusEvent} event The event when focus
 */
function focusInput (event) {
  this.select()
}

/**
 * Copy field value on clipboard
 * @param {MouseEvent} event The event when click
 * @param {string} field The field id to copy value
 */
function copyClipboard (event, field) {
  event.preventDefault()

  clipboard.writeText(document.getElementById(field).value, field + ' value')
  event.srcElement.innerHTML = 'Copied !'
  setTimeout(function () {
    event.srcElement.innerHTML = 'Copy'
  }, 500)
}
