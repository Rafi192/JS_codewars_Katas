//Took help from these websites for the jQuery DOM manipulation
//https://www.learnhowtoprogram.com/fidgetech-2-intermediate-javascript-with-jquery/2-1-object-oriented-javascript/2-1-1-2-address-book-user-interface
//https://www.w3schools.com/js/js_validation.asp
//https://www.youtube.com/watch?v=r35GSFI2THA
//https://stackoverflow.com/questions/59708399/creating-a-flexible-contact-database-in-javascript-adding-deleting-and-findin

function validateForm() {
    let x = document.forms["add-contact-form"]["name"].value;
    let x2 = document.forms["add-contact-form"]["surname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if(x2==""){
        alert("Surname Can not be Empty");
        return false
    }
   
  }

$(document).ready(function() {
    // Contact functionality
    $('#add-contact-form').submit(function(event) {
      event.preventDefault(); 
  
      // Get input values
      var name = $('#name').val();
      var surname = $('#surname').val();
      var phone = $('#phone').val();
      var address = $('#address').val();
  
      // Create a new contact entry
      var newContact = `
        <tr>
          <td>${name}</td>
          <td>${surname}</td>
          <td>${phone}</td>
          <td>${address}</td>
          <td><a href="#" class="btn-danger">Delete</a></td>
        </tr>
      `;
  
      // Appending the new contacts to th HTML table
      $('#contact-display table tbody').append(newContact);
  
      
      $('#name').val('');
      $('#surname').val('');
      $('#phone').val('');
      $('#address').val('');
    });
  
    // Search functionality
    $('#search-btn').click(function() {
      var searchValue = $('#search').val().toLowerCase();
  
      // Iterating through each contact entry
      $('#contact-display table tbody tr').each(function() {
        var name = $(this).find('td:eq(0)').text().toLowerCase();
  
        // Check if the name matches the search value
        if (name.includes(searchValue)) {
          $(this).show(); 
        } else {
          $(this).hide(); 
        }
      });
    });
    
    $(document).on('click', '.btn-danger', function() {
        if (confirm('Do you Want to delete this contact')) {
          $(this).closest('tr').remove();
        }
      });

  });
  