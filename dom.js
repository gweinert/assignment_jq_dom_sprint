// Change heading
$("h1").html("Something Cheeky");

// Add list below Upcoming Traversals
$first = $("h4");
$newLiArr = [];
$newLiArr.push($('<li> This is new 1! </li>'));
$newLiArr.push($('<li> This is new 2! </li>'));
$newLiArr.push($('<li> This is new 3! </li>'));
$newLiArr.push($('<li> This is new 4! </li>'));

for(var i=0; i < $newLiArr.length; i++) {
  $newLiArr[i].insertAfter($first);
}

// Convert class of items from sad to happy
var $sadItems = $('.sad');
$sadItems.removeClass('sad');
$sadItems.addClass('happy');

// Change link of flash msg
var $link = $('#annoying-popup a');
$link.attr('href', 'http://www.cashcats.biz');

var $popUp = $('#annoying-popup');

$popUp.css({'left': '80%', "top": "30px" });

$div = $(".suggested-topics");
//I dont get chainging!
$children = $div.children();
$targetList = $children.first().next();
$target = $targetList.children().eq(6);
$target.html("CHANGED");

$form = $('form');
$targetTextArea = $form.children().eq(0);
$targetTextArea.replaceWith('<textarea>');

