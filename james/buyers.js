$(document).ready(() => {
    const yardsaleCat = [
        "Apparel",
        "Appliances",
        "Automotive",
        "Electronics",
        "Furniture",
        "Gaming",
        "Home Decor",
        "Jewelry",
        "Miscellaneous",
        "Outdoor & Garden",
        "Sporting Goods",
        "Toys & Toddler"
    ];

    const buttonEl = $(".list-group-item")
    for (let i = 0; i < yardsaleCat.length; i++){
        const element = array[j];
        buttonEl.append(yardsaleCat[j]);
    };


$.get("/api/newseller", function(data) {
    console.log("data: ", data);
    const container = $(".card-columns")
    if (data.length !==0) {
        for (let i = 0; i < data.length; i++) {
            container.append(
            `
            <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h5 class="item-name">${data[i].item_name}</h5>
                    <h6 class="item-price">$${data[i].item_price}</h6>
                    <p class="contact-info"><small class="text-muted">${data[i].seller_contact}</small></p>
                  <button type="button" class="btn btn-outline-success">Purchase</button>
                </div>
              </div>
              `
            )
        }
      };
   });
});
           
