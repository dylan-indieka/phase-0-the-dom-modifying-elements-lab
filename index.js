// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new <h1> element to the body
document.body.appendChild(newHeader);