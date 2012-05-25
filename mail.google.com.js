$(document).ready(function() {
  $("textarea[name=to], textarea[name=cc], textarea[name=bcc]").live('blur', function(e){
    var text = $(this).val();
    text = text.replace(" at ", "@");
    text = text.replace("_at_", "@");
    text = text.replace("[at]", "@");
    text = text.replace(" dot ", ".");
    text = text.replace("_dot_", ".");
    text = text.replace("[dot]", ".");
    text = text.replace(" daught ", ".");
    text = text.replace("_daught_", ".");
    text = text.replace("[daught]", ".");
    $(this).val(text);
  });
});