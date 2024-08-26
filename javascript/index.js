function getEvenNumbers(numbers) {
    const even = [];
    for (const num of numbers) {
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    return even;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);

const button = document.getElementById('changeText');
button.addEventListener('click', function() {
    const textElement = document.getElementById('myText');
    textElement.textContent = 'Hello, Check!';
});

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        const todoList = document.getElementById('todo-list');

        for (let i = 0; i < 5; i++) {
            const todo = data[i];
            let li = document.createElement("li");
            li.textContent = todo.title;
            todoList.appendChild(li);
        }
    })
    .catch(error => alert("Error : ", error));