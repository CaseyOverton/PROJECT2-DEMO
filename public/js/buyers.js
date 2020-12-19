$('.btn').on('click', function () {
    console.log('button')

    let currentId = $(this).parent().attr("id");
    currentId = parseInt(currentId);
    console.log($(this).parent())
    $(this).addClass("hide");
    $(this).siblings('.alert').removeClass('hide');
    
});
var posts;
var blogContainer = $(".card-columns");

$.get("/api/item", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("card");
  
        row.append("<p>" + data[i].item_name + " chirped.. </p>");
        row.append("<p>" + data[i].item_price + "</p>");
       
  
        blogContainer.prepend(row);
  
      }
  
    }
  
  });
  

  