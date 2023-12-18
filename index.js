// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

for(let i=0; i<=5; i++){
  appDiv.innerHTML = `<h1>*</h1>`;
}
