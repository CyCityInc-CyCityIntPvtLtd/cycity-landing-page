$(document).ready(function () {

    $("#send_message").click(function (e) {
        e.preventDefault();

        let error = false;
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let message = $("#message").val().trim();

        $("#name, #email, #phone, #message").removeClass("error_input");

        if (name.length === 0) { error = true; $("#name").addClass("error_input"); }
        if (email.length === 0 || email.indexOf('@') === -1) { error = true; $("#email").addClass("error_input"); }
        if (phone.length === 0) { error = true; $("#phone").addClass("error_input"); }
        if (message.length === 0) { error = true; $("#message").addClass("error_input"); }

        if (!error) {

            $("#send_message").attr({ 'disabled': true }).val("Sending...");

            $.post("contact.php", $("#contact_form").serialize(), function (result) {

                result = result.trim(); // Clean whitespace

                if (result === "sent") {
                    $("#contact_form_wrap").fadeOut(300);
                    $("#success_message").fadeIn(500);
                } else {
                    $("#mail_fail").fadeIn(500);
                    $("#send_message").removeAttr("disabled").val("Send Message");
                }

            });
        }
    });
});
