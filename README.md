# jQuery tjoetjoep

Converts a link to a youtube movie to a youtube player
Pauses other players in the page when you start a player

# How to use:

* (Be sure you end your href url with the youtube ID, no other parameters)

## HTML:
```
<a href="http://www.youtube.com/watch?v=0Bmhjf0rKe8" class="your-selector">Watch this video</a>
```

## JS:
```
$(".your-selector").tjoetjoep();
```

# Public methods

## Kill all players in the page:
```
$.fn.tjoetjoep.kill();
```