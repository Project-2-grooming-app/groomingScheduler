var queue = [];
function checking(id){
   queue.push(id)
   if (queue.length===2){
    queue[0].checked = false
    queue.shift()
   }
}

const reserveFormHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    event.preventDefault();
  
    // TODO: Add a comment describing the functionality of these expressions
    var checklist = document.querySelectorAll('.apt-check').values()
    console.log(checklist)
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
        document.location.replace('/');
      } else {
        alert('Failed to reserve appt');
      }
    }
  };
  
document
  .querySelector('.reserve-form')
  .addEventListener('submit', reserveFormHandler);