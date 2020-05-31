jQuery(document).ready(function() {
    jQuery("h2").click(function() {
      alert("This is a header.");
    });
  
    $("button").click(function() {
      $(".notification").toggle();
    });
  });