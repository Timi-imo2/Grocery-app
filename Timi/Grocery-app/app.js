$(function() {
    var $ul = $("ul");
  
    function addItem(name, quantity) {
      $ul.append("<li>" + quantity + " " + name + "</li>");
    }
  
    $("form").submit(function(e) {
      e.preventDefault();
  
      var $f = $(this)
          item = $f.find("#item_name").val(),
          quantity = $f.find("#quantity").val() || 1;
  
      addItem(item, quantity);
      $f.get(0).reset();
    });
  });