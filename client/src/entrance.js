const myForm = document.createElement('form');
myForm.style.display = 'flex';
myForm.style.flexDirection = 'column';
myForm.style.alignItems = 'flex-start'; // Align items to the start (left)
myForm.style.marginTop = '20px';

const nameText = document.createElement('label');
nameText.textContent = 'Name';
nameText.style.fontFamily = 'Arial';
nameText.style.marginBottom = '5px'; // Add some space between label and input
myForm.appendChild(nameText);

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Enter your full name...';
nameInput.style.backgroundColor = 'lightgray';
nameInput.style.border = 'none';
nameInput.style.borderRadius = '2px';
nameInput.style.width = '250px';
nameInput.style.height = '30px';
nameInput.style.marginBottom = '30px'; // Add some space between input and button
myForm.appendChild(nameInput);

const submitButton = document.createElement('button');
submitButton.innerText = 'Start';
submitButton.type = 'submit';
submitButton.style.width = '100px';
submitButton.style.height = '30px';
submitButton.style.color = 'white';
submitButton.style.borderWidth = '1px';
submitButton.style.backgroundColor = '#0CAFFF';

myForm.appendChild(submitButton);
const myApp = document.getElementById('app');
myApp.appendChild(myForm);

myApp.style.display = 'flex';
myApp.style.justifyContent = 'center';
myApp.style.alignItems = 'flex-start';
myApp.style.height = '100vh';
myApp.style.margin = '0';

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    if (name.length < 2) {
      alert('Name must be at least 2 characters long');
      return;
    }
    window.location.href = '/client/public/signup.html';
  });