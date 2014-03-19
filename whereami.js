(function(window) {
  var $waitlistEl = $('#rsvp-list-waitlist');
  var myId = Meetup.Data.meetstacheRsvpEvent.Member.memberId;
  var $myRsvpEl = $waitlistEl.find($('[data-memberid="' + myId + '"')).eq(0);
  var myPos = $waitlistEl.children().index($myRsvpEl) + 1;

  if (myPos >= 1) {
    alert("You're number " + myPos + " on the waitlist");
  } else {
    alert("Couldn't find you on the waitlist");
  }
})(window);
