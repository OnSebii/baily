$(window).on('keydown', function () {
    if (event.keyCode == 123)
        return false;
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
        return false;
    else if (event.ctrlKey && event.keyCode == 73)
        return false;
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 74)
        return false;
    else if (event.ctrlKey && event.keyCode == 74)
        return false;
});

$(document).bind("contextmenu",function(e) {  
    e.preventDefault(); 
});

window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
};

document.addEventListener('contextmenu', event => event.preventDefault());