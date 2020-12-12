$(document).ready(() => {
    const purchaseButton = $("purchase-button");
    const itemPrice = $(".item-price");
    const itemName = $(".item-name");
    const contactInfo = $(".contact-info");

    purchaseButton.on("click", event => {
        event.preventDefault();
        const purchase = {
            itemName: itemName.val().trim(),
            price: itemPrice.val(),
            contactInfo: contactInfo.val().trim()
        };

        $.ajax("/api/purchase/", {
            type: "PUT",
            data: purchase
        }).then(function () {
            location.reload();
        },

        alert("For payment information, please contact seller at " + contactInfo);
    })

})


module.exports = function(sequelize, DataTypes) {
    const Buyer = sequelize.define('Buyer', {
       buyer_name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       buyer_budget: {
           type: DataTypes.INTEGER,
           allowNull: false,
       },
       purchased: {
           type: DataTypes.BOOLEAN,
           defaultValue: false
       },
       buyer_rating: {
           type: DataTypes.DECIMAL(2),
           allowNull: true,
           defaultValue: 0.0
       }
    })
};