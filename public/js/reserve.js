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
    var checklist = document.querySelectorAll('.apt-check')
    var timeSlot
    var timeName
    checklist.forEach(item => {
      if (item.checked) {
        timeSlot = item.value
        timeName = item.name
        console.log('timeslot',timeSlot)
      }
    })
    const first_name = document.querySelector('#first-name').value.trim();
    const last_name = document.querySelector('#last-name').value.trim();
    const pet_name = document.querySelector('#pet-name').value.trim()
    const phone_number = document.querySelector('#phone-input').value.trim()
    const notes = document.querySelector('#notes-input').value.trim()



    if (timeSlot && first_name && last_name && pet_name && phone_number) {
      // TODO: Add a comment describing the functionality of this expression
      const response = await fetch('/api/reserve/', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, pet_name, phone_number, notes, timeSlot }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('it worked!')
        changeAvailable(timeSlot)
        alert(`Appointment Created for ${timeName}!`)
        document.location.replace('/');
      } else {
        alert('Failed to reserve appt');
      }
    }
  };
  
const changeAvailable = async (timeSlot) => {
  const response = await fetch(`/api/reserve/${timeSlot}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  })
  if (response.ok) {
    console.log('it worked!')
  } else {
    alert('Failed to reserve appt');
  }
}
document
  .querySelector('.reserve-form')
  .addEventListener('submit', reserveFormHandler);