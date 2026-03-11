$(document).ready(function () {
            $(".accordion .ques:first").addClass("active");
            $(".accordion .ans:not(:first)").hide();
            $(".accordion .ques").click(function () {
                $(this).next(".ans").slideToggle("slow")
.siblings(".ans:visible").slideUp("slow");
                $(this).toggleClass("active");
                $(this).siblings(".ques").removeClass("active");
            });//accordion


    $( ".header" ).css( "display", "none" );
      $(window).scroll(function(){
        //more then or equals to
        if($(window).scrollTop() >= 100){
            $( ".header" ).css( "display", "block" );
       
        //less then 100px from top
        } else {
           
       $( ".header" ).css( "display", "none" );
        }
      });


        });

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


// Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }