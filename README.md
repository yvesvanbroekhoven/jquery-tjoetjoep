# jQuery tjoetjoep

Converts a link to a youtube movie to a youtube player
Pauses other players in the page when you start a player

# How to use:

* (Be sure you end your href url with the youtube ID, no other parameters)
* Add swfobject 2 to your page, otherwise this won't work

## HTML:
```
<a href="http://www.youtube.com/watch?v=0Bmhjf0rKe8" class="your-selector">Watch this video</a>
```

## JS:
```
$(".your-selector").tjoetjoep();
```

# Options

* width (default 350) - set the width of the youtube player
* height (default 255) - set the height of the youtube player

# Public methods

## Kill all players in the page:
```
$.fn.tjoetjoep.kill();
```