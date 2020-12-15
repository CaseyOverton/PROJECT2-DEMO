$(document).ready(() => {

    const purchaseButton = $(".btn-outline-success");
    const itemPrice = $("input.item-price");
    const itemName = $("input.item-name");
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


module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define('Item', {
       item_name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       item_price: {
           type: DataTypes.INTEGER,
           allowNull: false,
       },
       seller_contact: {
           type: DataTypes.STRING,
           defaultValue: false
       },
       purchased: {
           type: DataTypes.BOOLEAN,
           allowNull: false,
           defaultValue: false
       },
    });
    return Item;
};

$.get("/api/all", function(data) {
    console.log("data: ", data);

    if (data.length !==0) {
        for (let i = 0; i < data.length; i++) {
            const row = $("<div>");
            row.addClass("item");

            row.append("<p>" + data[i].item_name + " for sale.. </p>");
            row.append("<p>" + data[i].item_price + "</p>");
            row.append("<p>Please contact " + data[i].seller_contact + " for to exchange payment information</p>");

            $("#item-area").prepend(row);
        }
    }
});