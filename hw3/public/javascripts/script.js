$(document).ready(function(){
    $("#order_button").click(function(){ //onclick handler for the order button
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
    });
    $(".month").click(function(){ //change the month currently being displayed
        $("#droptitle").text($(this).text());
    })
});