
$('.card-columns').on('click',".btn", function () {
    console.log('button')

    let currentId = $(this).attr("data-id");
    // currentId = parseInt(currentId);
    console.log(currentId)
    $(this).addClass("hide");
    $(this).siblings('.alert').removeClass('hide');
    // var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/newseller/" + currentId
    }).then(function(response){
      console.log("Delete",response)
      getTodos();
    });
});


function getTodos(){

var posts;
var blogContainer = $(".card-columns");

$.get("/api/newseller", function(data) {
  console.log("Data",data)
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
        console.log(data[i],"for loop")
  
        let newItem = 
        `
              <div class="card">
              <div class="card-body">
                  <h5 class="item-name">${data[i].item_name}</h5>
                  <h6 class="item-price">${data[i].item_price}</h6>
                  <p class="card-text">${data[i].sellers_bio}</p>
                  <p class="contact-info"><small class="text-muted">${data[i].sellers_email}></p>
                <button type="button"  data-id ='${data[i].id}' class="btn btn-outline-success">Purchase</button>
              </div>
            </div>
            `
  
        blogContainer.prepend(newItem );
  
      }
  
    }
  
  });
}

getTodos()

  