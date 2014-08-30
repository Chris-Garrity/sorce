
// http://www.jquery4u.com/snippets/jquery-scramble-web-page-email-addresses/

$(document).ready(function($) {
    //email spam protection - Example Markup: <span class="email">name[at]domain[dot]com</span>
    $('.email').each(function() {
        var $email = $(this);
        var address = $email.text()
        .replace(/\s*\[at\]\s*/, '@')
        .replace(/\s*\[dot\]\s*/g, '.');
        $email.html('<a href="mailto:' + address + '">Email</a>');
    });
});