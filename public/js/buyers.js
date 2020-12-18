$('.btn').on('click', function () {
    console.log('button')

    let currentId = $(this).parent().attr("id");
    currentId = parseInt(currentId);
    console.log($(this).parent())
    $(this).addClass("hide");
    $(this).siblings('.alert').removeClass('hide');
    
});

$(".btn").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/newseller" + id, {
        type: "DELETE",
    }).then(
    function() {
        console.log("deleted post", id);
        location.reload();
    }
    );
});
