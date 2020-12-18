$(document).ready(() => {
  // Getting references to our form and inputs
  
  const sellername = $("input#seller-name-input");
  const selleraddress = $("input#seller-address");
  const selleremail = $("input#seller-email");
  const sellerbio = $("input#seller-bio");

  // When the form is submitted, we validate there's an sellername and password entered
  ('#sellerform').on("submit", event => {
    event.preventDefault();
    const newseller= {
      sellername: sellername.val().trim(),
      selleaddress: selleraddress.val().trim(),
      selleremail: selleremail.val().trim(),
      sellerbio: sellerbio.val().trim(),
     
    };

    console.log(newseller)

    $.ajax("/api/newseller", {
      type: "POST",
      data: newseller
  }).then(function () {
      console.log("Added a New Item");
      location.reload();
  })


});

 
  
});

