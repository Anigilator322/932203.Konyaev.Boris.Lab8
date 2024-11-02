function addInputFields() {
    const container = document.createElement('div');
    container.className = 'inputFields-container';

    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    
    const upButton = document.createElement('button');
    upButton.innerHTML = "&#8593;";
    upButton.onclick = () => moveUp(container);
    
    const downButton = document.createElement('button');
    downButton.innerHTML = '&#8595;';
    downButton.onclick = () => moveDown(container);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.onclick = () => deleteInputFields(container);
    
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(upButton);
    container.appendChild(downButton);
    container.appendChild(deleteButton);
    
    const buttons = document.querySelector('.buttons');
    buttons.parentNode.insertBefore(container, buttons);
  }

  function moveUp(container) {
    const previous = container.previousElementSibling;
    if (previous && previous.classList.contains('inputFields-container')) {
      container.parentNode.insertBefore(container, previous);
    }
  }

  function moveDown(container) {
    const next = container.nextElementSibling;
    const buttons = document.querySelector('.buttons');
    if (next && next !== buttons) {
      container.parentNode.insertBefore(next, container);
    }
  }

  function deleteInputFields(container) {
    container.remove();
  }

  function saveData() {
const output = document.getElementById('output');
const data = Array.from(document.querySelectorAll('.inputFields-container')).map(container => {
  const inputs = container.querySelectorAll('input');
  return `"${inputs[0].value}": "${inputs[1].value}"`;
});

output.textContent = `{ ${data.join(', ')} }`;
}