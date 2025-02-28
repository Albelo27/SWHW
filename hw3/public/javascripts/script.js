$(document).ready(function(){
    initializePage();
    $("#order_button").click(processOrder);
    $(".month").click(dropDownLabelHandler);
});
   
// //onclick handler for the order button
processOrder = function() {
    var txt = document.getElementById("notes_box").value;
        if (txt.toLowerCase().includes("vegan")) {
            alert("Cheesecake contains dairy!!");
        } else { //as long as no vegan requests were made, display the order summary
            $("#thankyou_text").show();
            $("#order_form").hide()
            $("#topping_summary").text($('input[name=topping_choice]:checked', '#order_form').val());
            $("#quantity_summary").text($("#quantity_choice").val());
            $("#notes_summary").text($("#notes_box").val())
        }
}

//change the month currently being displayed
dropDownLabelHandler = function() {
    $("#droptitle").text($(this).text());
}


//helper function to ensure page is setup correctly
initializePage = function() {
    $("#droptitle").text("Jan");
    $("#order_form").show();
    $("#thankyou_text").hide();
}