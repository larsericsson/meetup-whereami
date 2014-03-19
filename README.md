meetup-whereami
===============

Bookmarklet that finds your position on the waitlist.

Add this bookmark:
```javascript
javascript:(function(a){var b=a.createElement("script");b.src="https://raw.github.com/larsericsson/meetup-whereami/master/whereami.js";a.getElementsByTagName("head")[0].appendChild(b)})(document);
```

Go to the specific meetup page and hit the bookmark.

This gives you a rough estimate on where you are on the waitlist. It doesn't account for +1's right now and since it's quite a hacky way to get the info it might break when meetup.com decides to change things.
