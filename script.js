async function Goals() {    
    // const requestUrl = 'https://raw.githubusercontent.com/Nanoscience202/goals/main/data.json';
    // const request = new Request(requestUrl);

    const response = await fetch('./data.json');
    window.data = await response.json();

    displayGoals(data);
}

function displayGoals(data) {
    const grid = document.querySelector('.grid-container'); // grid container
    
    for (let i = 0; i < data.length; i++) {

        // name of goal
        const name = data[i].name;
        const nameContainer = document.createElement('div'); // name container
        nameContainer.className = 'name-container'; // add class name to name container: name-container
        const nameParagraph = document.createElement('p'); // name paragraph
        nameParagraph.appendChild(document.createTextNode(name));
        nameParagraph.className = 'name-paragraph'; // add class name to name paragraph: name-paragraph
        nameContainer.appendChild(nameParagraph);
        grid.appendChild(nameContainer);

        // description
        const description = data[i].description;
        const descriptionContainer = document.createElement('p'); // description container
        descriptionContainer.appendChild(document.createTextNode(description));
        descriptionContainer.className = 'description-container'; // add class name to description container: description-container
        nameParagraph.appendChild(descriptionContainer);
        
        // smart property
        const goalsContainer = document.createElement('div'); // list container
        const itemsContainer = document.createElement('ul'); // unordered list
        itemsContainer.className = 'list-container'; // add class name to list container: list-container
        for (let j = 0; j < data[i].smart.length; j++) {
            const item = data[i].smart[j];
            const itemElement = document.createElement('li'); // add item to list
            itemElement.className = 'list-item'; // add class name to list item: list-item
            const itemText = document.createTextNode(item);

            itemElement.appendChild(itemText);
            itemsContainer.appendChild(itemElement);
        }

        goalsContainer.appendChild(itemsContainer);
        goalsContainer.className = 'goals-container'; // add class name to goals container: goals-container
        grid.appendChild(goalsContainer);
    }
}

function addGoal() {
    const form = document.getElementById('form');
    form.style.display = 'grid';
    form.addEventListener('submit', onsubmitForm);
}

function onsubmitForm(e) {
    const form = document.getElementById('form');
    form.style.display = 'none';
    e.preventDefault();
    

    const goalName = document.getElementById('goalName').value;
    const description = document.getElementById('Description').value;
    const specificGoal = document.getElementById('specificGoal').value;
    const measurable = document.getElementById('Measurable').value;
    const action = document.getElementById('Action').value;
    const time = document.getElementById('Time').value;

    const newGoal = [{
        name: goalName,
        description: description,
        smart: [specificGoal, measurable, action, time]
    }]

    displayGoals(newGoal);
    form.reset();
    form.removeEventListener('submit', onsubmitForm);
}
