
! function($) {
    "use strict";

    var Ubold = function() {};

    Ubold.prototype.initContact = function() {
        
        $('#contact-form').submit(function() {

            var action = $(this).attr('action');
        
            $("#message").slideUp(750, function() {
                $('#message').hide();
        
                $('#submit')
                    .before('')
                    .attr('disabled', 'disabled');
        
                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );
        
            });
        
            return false;
        
        });
    },

    Ubold.prototype.initBacktoTop = function() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 
        $('.back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },


    Ubold.prototype.init = function() {
        this.initContact();
        this.initBacktoTop();
    },
    //init
    $.Ubold = new Ubold, $.Ubold.Constructor = Ubold
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Ubold.init();
}(window.jQuery);