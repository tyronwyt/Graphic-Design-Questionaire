// fast + quality
// cheap + fast
// cheap quality
var cheap = false;
var fast = false;
var quality = false;


$("input").change(function() {
  var id = $(this).attr('id');

  if (id == "cmn-toggle-1") {
   cheap = true;
   if (fast && quality) {
     $('#cmn-toggle-3').prop('checked', false);
     quality = false;
   }

  } else if (id == "cmn-toggle-2") {
    fast = true;
    if (cheap && quality) {
      $('#cmn-toggle-1').prop('checked', false);
      cheap = false;
    }

  } else if (id == "cmn-toggle-3") {
    quality = true;
    if (cheap && fast) {
      $('#cmn-toggle-2').prop('checked', false);
      fast = false;
    }

  }
});
