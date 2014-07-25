var add_facebook_comments = function() {
  $("#fb-comments").empty();
  var disclaimer = '<div class="fb-comment-disclaimer">The Tribune is using Facebook comments on stories. To post a comment, log into Facebook and then add your comment. To report spam or abuse, click the "X" in the upper right corner of the comment box. In certain circumstances, we will take down entire comment boards. Our commenting guidelines can be found <a href="http://www.chicagotribune.com/about/chi-discussions-faq,0,980840.htmlstory">here &#187;</a>.</div>';
  var width = $('#fb-comments').width();
  if ( $(window).width() <= 680 )
    width = $(window).width() - 40;
  var fbml = disclaimer + '<fb:comments href="' +
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '" num_posts="10" width="' + width + '"></fb:comments>';
  $("#fb-comments").append(fbml);
};

var wayOffset= 90;

$(document).ready(function(){
	//ACTIVATE TOOLTIPS ON DOT BAR NAV
	$('a.dot').tooltip({
		'placement':'bottom',
		'container':'body'
	});
	
	//ACTIVATE THE WAYPOINTS ON DOT BAR NAV
	$('.timeline-wrapper').waypoint(function(direction){
		var current = $(this).attr('id');
		$('a.dot').each(function(){
			var dot = $(this).attr('href');
			if (dot == '#'+current){
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
	}, {offset:wayOffset});

	// make the dot nav a smooth scroll
	$('a.dot').click(function(e){
		e.preventDefault();
		var clicked = $(this).attr('href');
		var scrollTo = $(clicked).position().top-wayOffset;
		var currentPosition = $(window).scrollTop();
		
		if(scrollTo < currentPosition){
			//GIVE THE SCROLLING A LITTLE EXTRA NUDGE SO THE WAYPOINT TRIGGERS THE RIGHT DOT
			scrollTo-=25;
		}
		$('html, body').animate(
			{scrollTop: scrollTo}
		);
	});
	
  // Load FB comments
  if ( $('meta[property="fb:app_id"]').length > 0 )
    add_facebook_comments();
});