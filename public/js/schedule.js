const createApt = async (event) => {
    const date_time = document.querySelector('#datetime-input').value
    console.log(date_time)

    if (date_time) {
        const response = await fetch('/api/schedule/', {
            method: 'POST',
            body: JSON.stringify({date_time}),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            console.log('it worked!')
        }else {
            alert('Failed to reserve appt');
        }
    }


}

document.querySelector('#apt-btn').addEventListener('click', createApt)