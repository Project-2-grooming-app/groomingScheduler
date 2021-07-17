const reserveFormHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    event.preventDefault();
  
    // TODO: Add a comment describing the functionality of these expressions
    const first_name = document.querySelector('#first-name').value.trim();
    const last_name = document.querySelector('#last-name').value.trim();
    const pet_name = document.querySelector('#pet-name').value.trim()
    const phone_number = document.querySelector('#phone-input').value.trim()
    const notes = document.querySelector('#notes-input').value.trim()



    if (first_name && last_name && pet_name && phone_number) {
      // TODO: Add a comment describing the functionality of this expression
      const response = await fetch('/api/reserve/', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, pet_name, phone_number, notes }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('it worked!')
        document.location.replace('homepage');
      } else {
        alert('Failed to reserve appt');
      }
    }
  };
  
  document
    .querySelector('.reserve-form')
    .addEventListener('submit', reserveFormHandler);