(function(window) {
  var $waitlistEl = $('#rsvp-list-waitlist');
  var myId = Meetup.Data.meetstacheRsvpEvent.Member.memberId;
  var $myRsvpEl = $('[data-memberid="' + myId + '"');
  var myPos = $waitlistEl.children().index($myRsvpEl) + 1;

  if (myPos >= 0) {
    alert("You're number " + myPos + " on the waitlist");
  } else {
    alert("Couldn't find you on the waitlist");
  }
})(window);
