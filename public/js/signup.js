const signupFormHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    event.preventDefault();
  
    // TODO: Add a comment describing the functionality of these expressions
    const username = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      // TODO: Add a comment describing the functionality of this expression
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/groomer/');
      } else {
        alert('Failed signup');
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  