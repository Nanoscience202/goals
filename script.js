async function Goals() {    
    const requestUrl = 'https://raw.githubusercontent.com/Nanoscience202/goals/main/data.json';
    const request = new Request(requestUrl);

    const response = await fetch(request);
    const data = await response.json();

    displayGoals(data);
}

function displayGoals(data) {
    const grid = document.querySelector('#grid-container'); // grid container
    
    // name of goal
    const name = data.webTutorial.name;
    const nameContainer = document.createElement('div'); // name container
    nameContainer.appendChild(document.createTextNode(name));
    nameContainer.className = 'name-container'; // add class name to name container: name-container
    grid.appendChild(nameContainer);

    // description
    const description = data.webTutorial.description;
    const descriptionContainer = document.createElement('div'); // description container
    descriptionContainer.appendChild(document.createTextNode(description));
    descriptionContainer.className = 'description-container'; // add class name to description container: description-container
    nameContainer.appendChild(descriptionContainer);
    
    // smart property
    const goalsContainer = document.createElement('div'); // list container
    const itemsContainer = document.createElement('ul'); // unordered list
    itemsContainer.className = 'list-container'; // add class name to list container: list-container
    for (let i = 0; i < data.webTutorial.smart.length; i++) {
        const item = data.webTutorial.smart[i];
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