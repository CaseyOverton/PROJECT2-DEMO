$(document).ready(() => {
    // Getting references to our form and inputs
    const sellerform = $("form.item");
    const sellername = $("input#seller-name-input");
    const itemdescription = $("input#item-input");
    const askingprice = $("input#price-input");
  
    // When the form is submitted, we validate there's an sellername and password entered
    sellerform.on("submit", event => {
      event.preventDefault();
      const newitem = {
        sellername: sellername.val().trim(),
        itemforsale: itemdescription.val().trim(),
        askingprice: askingprice.val().trim(),
      };
  
      console.log(newitem)
  
      $.ajax("/api/newitem", {
        type: "POST",
        data: newitem
    }).then(function () {
        console.log("Added a New Item");
        location.reload();
    })
  
  
  });
  
    // Empty each input box by replacing the value with an empty string
   
  
      // If we have an sellername and password we run the loginUser function and clear the form
    
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page