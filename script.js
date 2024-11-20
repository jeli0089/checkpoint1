const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const nameList = document.getElementById('nameList');
const clearButton = document.getElementById('clearButton');

let names = [];

// Lägg till namn i listan
addButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    names.push(name);
    renderList();
    nameInput.value = '';
  }
});

function renderList() {
    nameList.innerHTML = '';
    names.forEach((name, index) => {
      const li = document.createElement('li');
      
      const nameSpan = document.createElement('span');
      nameSpan.textContent = name;
      nameSpan.className = 'name'; // Tillämpar CSS för namn
  
      // Redigera-knapp
      const editButton = document.createElement('button');
      editButton.textContent = 'Redigera';
      editButton.className = 'edit';
      editButton.addEventListener('click', () => {
        const newName = prompt('Redigera namn:', name);
        if (newName) {
          names[index] = newName;
          renderList();
        }
      });
  
      // Ta bort-knapp
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Radera';
      deleteButton.className = 'delete';
      deleteButton.addEventListener('click', () => {
        names.splice(index, 1);
        renderList();
      });
  
      li.appendChild(nameSpan); // Lägg till namn-texten först
      li.appendChild(editButton); // Lägg till redigera-knappen
      li.appendChild(deleteButton); // Lägg till radera-knappen
      nameList.appendChild(li);
    });
  }
  

// Rensa hela listan
clearButton.addEventListener('click', () => {
  names = [];
  renderList();
});
