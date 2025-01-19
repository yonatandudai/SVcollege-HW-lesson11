document.addEventListener('DOMContentLoaded', async () => {
  try {
      const response = await axios.get('http://localhost:3000/getUsername');
      const data = response.data;

      // Ensure username is present
      if (data && data.username) {
          const username = data.username;

          // Create and style the title
          const title = document.createElement('h1');
          title.textContent = `Hello, ${username}`;
          title.style.fontFamily = 'Arial, sans-serif';
          title.style.textAlign = 'center';
          title.style.marginTop = '20px';
          document.getElementById('app').appendChild(title);
      } else {
          throw new Error('Username not found in the response.');
      }
  } catch (error) {
      console.error('Error fetching username:', error);

      // Display an error message to the user
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Unable to load username. Please try again later.';
      errorMessage.style.color = 'red';
      errorMessage.style.textAlign = 'center';
      document.getElementById('app').appendChild(errorMessage);
  }
});