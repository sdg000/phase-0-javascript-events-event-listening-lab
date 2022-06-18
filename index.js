//function to display alert
function clickAlert(){
    alert('I have been clicked')
}

// function to add event listener to user input
function addingEventListener(){
    const userinput = document.getElementById('input')

    userinput.addEventListener('click', clickAlert)
}