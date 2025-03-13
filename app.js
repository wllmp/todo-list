```javascript
// Function to add a new todo item
function addTodo() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    const text = input.value.trim();

    if (text === '') return;

    // Create the li element
    const li = document.createElement('li');
    li.innerHTML = `
        <div>${text}</div>
        <button class="delete-btn" onclick="removeTodo(this)">Delete</button>
    `;

    // Add to list and clear input
    list.appendChild(li);
    input.value = '';
}

// Function to remove a todo item
function removeTodo(button) {
    button.parentElement.remove();
}
```
