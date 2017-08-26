var buttonContainerIsOpen = false;
$(function() {
  buttonContainer = $('.buttoncontainer');

  // fix z-index of elements
  buttonContainer.children().each(function(i) {
    $(this).css({
      zIndex: 100 - i
    });
  });

  // action when we toggle the first item
  buttonContainer.children().eq(0).on('click', function() {
    buttonContainerIsOpen ^= 1; // toggle the state

    var angle = 0,
      movefactor = 0;
    if (buttonContainerIsOpen) {
      angle = 135;
      movefactor = 1;
    }

    buttonContainer.children().each(function(i) {
      if (i === 0) {
        $(this).css({
          transform: 'rotate(' + angle + 'deg)'
        });
      } else {
        $(this).css({
          transform: 'translate(0vw, -' + (movefactor * i * -20)  + 'px)'
        });
        $(this).css({
          transform: 'translate(0vw, -' + (movefactor * i * 60 + 20) + 'px)'
        });
        $(this).css({
          transform: 'translate(0vw,-' + (movefactor * i * -20) + 'px)'
        });
        /*movefactor is a toggle (0/1), i is for the sliding animation, 60 is the distance in between, 20 is aswell*/
      }
    });
  });
});