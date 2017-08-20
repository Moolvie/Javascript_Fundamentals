$(function(){
	//shortcut for jQuery(document).ready(function())
	// Start up code goes here
	// alert("this works!");
	//$('#title').text("Yay, I can now get at the h1 immediately");
	//$('#first').html("<h2>Great Quotes</h2>");
	
	// append and prepend work INSIDE the given selection
	$('#first').prepend("<h2>Great Quotes</h2>");
	$("#first").append("<h3>... for you to ponder ... </h3>");
	
	// before, after, insertBefore, insertAfter work OUTSIDE
	// the given selection.
	
	//$("#myAnchor").attr("href", "http://channel9.msdn.com");
	$("#title").addClass("standout");

})
/*
$('.importantText');
$('#myFirstParagraph');
$('p').fadeOut(); // jQuery('p') 

jQuery('<div id="badge"><img src="badge.gif" alt="badge earned for achievement"</div>');
$.myCustomMethod = function () {alert('hi');};

$.listBox = {
	show: function(){  },
	hide: function(){  },
	position: function(){  },
	initiate: function () {  }
};

*/
// jQuery('p').fadeOut(500).fadeIn(500);