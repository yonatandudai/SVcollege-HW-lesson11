// Create the form element
const form = document.createElement('form');
form.id = 'signupForm';

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.maxWidth = '400px';
form.style.margin = '0 auto';
form.style.padding = '20px';
form.style.border = '1px solid #ccc';
form.style.borderRadius = '5px';
form.style.backgroundColor = '#fff';
form.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

// Function to create input fields and labelslabels
function createField(labelText, inputType, inputName, placeholderText) {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.style.marginBottom = '15px';

    const label = document.createElement('label');
    label.textContent = labelText;
    label.style.display = 'block';
    label.style.marginBottom = '5px';
    label.style.fontFamily = 'Arial, sans-serif';
    label.style.fontSize = '14px';
    label.style.color = '#333';

    const input = document.createElement('input');
    input.type = inputType;
    input.name = inputName;
    input.placeholder = placeholderText;
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.fontSize = '14px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '5px';
    input.style.boxSizing = 'border-box';

    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);
    form.appendChild(fieldWrapper);

    return input;
}

// Create input fields for username, email, password, and confirm password
const usernameInput = createField('Username', 'text', 'username', 'Enter a username...');
const emailInput = createField('Email address', 'email', 'email', 'Enter your email address...');
const passwordInput = createField('Password', 'password', 'password', 'Enter your password...');
const confirmPasswordInput = createField('Confirm Password', 'password', 'confirmPassword', 'Enter your password again...');

// Create and style the submit button
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Sign up';
button.style.width = '100%';
button.style.padding = '10px';
button.style.fontSize = '16px';
button.style.color = '#fff';
button.style.backgroundColor = '#28a745';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

// Add hover effects to the submit button
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#218838';
});

// Append the submit button to the form
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#28a745';
});

// Append the submit button to the form
form.appendChild(button);
// Append the form to the app element
const myApp = document.getElementById('app');
myApp.appendChild(form);

// Style the app element
myApp.style.fontFamily = 'Arial, sans-serif';
myApp.style.backgroundColor = '#f8f9fa';
myApp.style.display = 'flex';
myApp.style.justifyContent = 'center';
myApp.style.alignItems = 'center';
myApp.style.minHeight = '100vh';
myApp.style.margin = '0';

// Add event listener to handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate input fields
    if (username.length < 4 || username.length > 8) {
        alert('Username must be 4-8 characters long');
        return;
    }
    if (!email.includes('@')) {
        alert('Email must include @');
        return;
    }
    if (password.length < 5 || password.length > 10 || !password.includes('$')) {
        alert('Password must be 5-10 characters long and include $');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    try {
      // Send a POST request to save user data from the server
        const response = await axios.post('http://localhost:3000/saveUser', {
          username,
          email,
          password,
        });
        // Handle the response
        if (response.status === 200) {
          window.location.href = '/client/public/home.html';
        } else {
          alert('Error: Could not save user details.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error: Could not save user details.');
      }
});