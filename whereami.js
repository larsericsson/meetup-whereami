(function(window) {
  var $waitlistEl = $('#rsvp-list-waitlist');
  var myId = Meetup.Data.meetstacheRsvpEvent.Member.memberId;
  var myRsvp = $waitlistEl.find($('#rsvp_' + myId)).eq(0);
  
  var myPos = $waitlistEl.children().index(myRsvp);

  if (myRsvp && myPos && myPos >= 0)
    alert(myPos + " people are ahead of you on the waitlist");
  else if (myRsvp)
    alert("You're going!")
  else 
    alert("You did not RSVP.");

})(window);
