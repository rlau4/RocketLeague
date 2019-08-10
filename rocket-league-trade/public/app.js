$(document).on("click", "#tradeSubmit", function(){
    var thisId = $(this).attr("data-id");

    $.ajax({
        method: "POST",
        url: "/trades/" +thisId,
        data: {
            haveItem: $("#haveItem").val(),
            haveColor: $("#haveColor").val(),
            haveCert: $("#haveCert").val(),
            wantItem: $("#wantItem").val(),
            wantColor: $("#wantColor").val(),
            wantCert: $("#wantCert").val(),
        }
    })
})