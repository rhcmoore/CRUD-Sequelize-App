// Await
$(function () {
    
    // POST request
    $(".create-form").on("submit", function (event) {
        // Don't refresh yet
        event.preventDefault();

        // create object to send in POST request
        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            // Reload the page to hit GET route
            location.reload();
        });
    });

    // PUT request
    $(".change-status").on("click", function(event) {
        // Don't refresh yet
        event.preventDefault();
        // Get ID of button clicked
        var id = $(this).data("id");
        // Get devoured state of button clicked
        var burgerState = {
          devoured: $(this).data("devoured")
        };

        // PUT request
        $.ajax(`/api/burgers/${id}`, {
          type: "PUT",
          data: burgerState
        }).then(function() {
            // Reload the page to hit GET route
            location.reload();
        });
    });

    // DELETE request
    $(".delete-item").on("click", function(event) {
        // Don't refresh yet
        event.preventDefault();
        // Get ID of button clicked
        var id = $(this).data("id");
        // DELETE request
        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
          }).then(function() {
              // Reload the page to hit GET route
              location.reload();
          });
    });

});