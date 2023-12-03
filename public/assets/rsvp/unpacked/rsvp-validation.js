/* _______________  Custom Validation and Form Submission Script ________________ */
jQuery.validator.addMethod('answercheck', function(value, element) {
    return this.optional(element) || /^\bblue\b$/.test(value); //
}, "type the correct answer to the question (case matters)");

// validate contact form
$(function() {
    $('#rsvpform').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            attending: {
                required: true
            },
            guests: {
                required: true
            },
            answer: {
                required: true,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "name is required",
                minlength: "longer please"
            },
            email: {
                required: "email required"
            },
            guests: {
                required: "how many guests?",
            },
            answer: {
                required: "please fill this in"
            }
        },
        submitHandler: function(form) {
            $('#spinner').show().html('<div class="heartbeat-loader"><span class="ti ti-heart ti-3x"></span></div>');
            $(".slide-panel").animate({
                scrollTop: 0
            }, "slow");
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "assets/rsvp/rsvpfunction.php",
                success: function(responseText, statusText) {
                    $('#rsvpform :input').attr('disabled', 'disabled');
                    $('#rsvpform').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('#success').html(responseText);
                        $('#success').fadeIn();
                        $(".slide-panel").animate({
                            scrollTop: 0
                        }, "slow");
                        $('#spinner').fadeOut();
                    });
                },
                error: function(responseText, statusText) {
                    $('#rsvpform').fadeTo("slow", 0.15, function() {
                        $('#error').html(responseText);
                        $('#error').fadeIn();
                        $(".slide-panel").animate({
                            scrollTop: 0
                        }, "slow");
                    });
                }
            });
        }
    });
});