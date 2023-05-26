async function Goals() {    
    const requestUrl = 'https://raw.githubusercontent.com/Nanoscience202/goals/main/data.json';
    const request = new Request(requestUrl);

    const response = await fetch(request);
    const data = await response.json();
}

function displayGoals() {
    const main = document.querySelector('main');
    const goalsContainer = document.createElement('div');
    const itemsContainer = document.createElement('ul');

    itemsContainer.appendChild(document.createElement('li').appendText(data.goals.Webtutorial));



    main.appendChild(goalsContainer);
}