$(document).ready(() => {

    const purchaseButton = $(".btn-outline-success");
    const itemPrice = $(".item-price");
    const itemName = $(".item-name");
    const contactInfo = $("input.contact-info");

    purchaseButton.on("click", event => {
        event.preventDefault();
        const purchase = {
            itemName: itemName.val().trim(),
            price: itemPrice.val(),
            contactInfo: contactInfo.val().trim()
        };

        $.ajax("/api/newitem", {
            type: "GET",
            data: newitem
        }).then(function () {
            location.reload();
        },

        alert("For payment information, please contact seller at " + contactInfo)
    )
})


$.get("/api/all", function(data) {
    console.log("data: ", data);

    if (data.length !==0) {
        for (let i = 0; i < data.length; i++) {
            `
            <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h5 class="item-name">${data[i].item_name}</h5>
                    <h6 class="item-price">$${data[i].item_price}</h6>
                    <p class="card-text">Item condition OR seller rating? </p>
                    <p class="contact-info"><small class="text-muted">${data[i].seller_contact}</small></p>
                  <button type="button" class="btn btn-outline-success">Purchase</button>
                </div>
              </div>
              `
        }
      };
   });
});
           
