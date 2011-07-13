/*
 * jQuery tjoetjoep
 *    Converts a link to a youtube movie to a youtube player
 *    pauses other players in the page when you start a player
 *
 * Version: 1.0.1
 * Author: Yves Van Broekhoven
 * Created at: 2011/07/12
 * https://github.com/yvesvanbroekhoven/jquery-tjoetjoep
 * 
 */

(function($){
  
  var _init, _changePlayerState;
  
  _init = function(opts){
    
    var youtube_id  = $(this).attr("href").replace("http://www.youtube.com/watch?v=", "")
    ,   youtube_url = "http://www.youtube.com/v/" + youtube_id + "&enablejsapi=1&playerapiid=" + youtube_id
    ,   flashvars   = {}
    ,   params      = {}
    ,   attributes  = {}
    ;
    
    params.allowScriptAccess = "always";
    attributes.Class         = "tjoetjoep";
    
    $(this).attr("id", youtube_id);
    
    swfobject.embedSWF(youtube_url, youtube_id, opts.width, opts.height, "8", null, flashvars, params, attributes);
    
    $(this).siblings(".control").click(_changePlayerState);
    
  };
  
  window.onPlayerStateChange = function(new_state, id){
    if (new_state == 1 || new_state == 3) {
      var $other_players = $("object.tjoetjoep").not("#" + id);
      $other_players.each(function(){
        this.pauseVideo();
      });
    }
  };
  
  window.onYouTubePlayerReady = function(id){
    var player = $("#" + id)[0];
    if (player.attachEvent) {
      player.attachEvent("onStateChange", "(function(new_state){ return window.onPlayerStateChange(new_state, '" + id + "'); })");
    } else {
      player.addEventListener("onStateChange", "(function(new_state){ return window.onPlayerStateChange(new_state, '" + id + "'); })");
    }
  };
  
  $.fn.tjoetjoep = function(options){
    var opts = options ? $.extend({}, $.fn.tjoetjoep.defaults, options) : $.fn.tjoetjoep.defaults;
    $(this).each(function(){
      _init.call($(this), opts);
    });
  };
  
  $.fn.tjoetjoep.defaults = {
    "width"   : 350,
    "height"  : 255
  };
  
  $.fn.tjoetjoep.kill = function(){
    $("object.tjoetjoep").each(function(){
      swfobject.removeSWF(this.id);
    });
  };
  
}(jQuery));