//clicking of the submit button. To do this, you'll need to listen for a submit event on the <form> element. In order to prevent the default behavior of the submit event, when our event listener "sees" the event, it needs to invoke the preventDefault() method on it.

document.addEventListener("DOMContentLoaded", myFunction1);

function myFunction1() {
  document.addEventListener("click", myFunction2);

  function myFunction2() {
    document.getElementById('create-task-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      document.addEventListener("click", function(event) {
        // console.log("YOU CLICKED IT");
        event.preventDefault();
      });


  })
  
}
}


