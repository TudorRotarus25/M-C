$(document).ready(function () {
    $("#contact-us-anchor").on("click", function (e) {
        $(".modal").toggle("fold", {}, 500);
        e.preventDefault();
    });
    
    $(".wrapper").on("click", function (e) {
        $(".modal").hide("fold", {}, 500);
    });
   
});


