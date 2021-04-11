$(document).ready(function(){
    WidthChange();

    $('.desktop').on({
        'click': function(){
            console.log("plplllp")
            $('#changing-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });

    $('.mega-plasma-video').on({
        'click': function(){
            $('#changing-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });

    $('.mega-plasma').on({
        'click': function(){

            $('#changing-image').attr('src','../israelHayom/assets/adHere.jpeg');
        }
    });

    $('.inner-box').on({
        'click': function(){
            $('#changing-image').attr('src','../israelHayom/assets/ad.jpeg');
        }
    });
    $('.mega-migdal').on({
        'click': function(){
            $('#changing-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });
    $('.ozen-migdal').on({
        'click': function(){
            $('#changing-image').attr('src','../israelHayom/assets/adHere.jpeg');
        }
    });
    $('.qube').on({
        'click': function(){
            $('#changing-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });
    $('.free-roll').on({
        'click': function(){
            $('#changing-image').attr('src','../israelHayom/assets/adHere.jpeg');
        }
    });
    $('.slider').on({
        'click': function(){
            $('#changing-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });
    $('.native-promotions').on({
        'click': function(){
            $('#changing-image').attr('src','../israelHayom/assets/adHere.jpeg');
        }
    });

    $('.maavaron').on({
        'click': function(){
            $('#change-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });

    $('.booster-video').on({
        'click': function(){

            $('#change-image').attr('src','../israelHayom/assets/adHere.jpeg');
        }
    });

    $('.booster').on({
        'click': function(){
            $('#change-image').attr('src','../israelHayom/assets/ad.jpeg');
        }
    });
    $('.inner-box1').on({
        'click': function(){
            $('#change-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });
    $('.strip-sticky').on({
        'click': function(){
            $('#change-image').attr('src','../israelHayom/assets/adHere.jpeg');
        }
    });
    $('.slider1').on({
        'click': function(){
            $('#change-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });
    $('.free-roll1').on({
        'click': function(){
            $('#change-image').attr('src','../israelHayom/assets/adHere.jpeg');
        }
    });
    $('.native-promotions1').on({
        'click': function(){
            $('#change-image').attr('src','../israelHayom/assets/adversiting.jpeg');
        }
    });
    $(window).resize(function(){
        WidthChange();
    });
    function WidthChange() {
        if($(window).width() < 500){
            $( "ul.mobile-buttons").replaceWith( "<select></select>" );
        $("li").replaceWith("<option></option>")

        }
    }
});









