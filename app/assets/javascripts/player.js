$(document).on("turbolinks:load", function(){
  const player = $("audio#song-player");
  let currentSong = null;

  $("div.play-button a").click(function(){
    button = $(this);
    if ($(this).closest("div.song-item").is(currentSong)) {
      if (player[0].paused) {
        resumeSong(button);
      } else {
        pauseSong(button)
      }  
    } else {
      playNewSong(button);
    }
  });


  $("button#play-all").click(function(){
    button = $("div.song-item:eq(0) div.play-button a");
    playNewSong(button);
  });


  player.on('ended', function(){
    playing = $("div.song-item.playing");
    next = playing.next();
    if (next.length > 0) {
      play_button = $(next[0]).find('div.play-button a');
      playNewSong(play_button);
    }
  });

  

  function playNewSong(button) {
    $("div.song-item").removeClass("playing");
    $(button).closest("div.song-item").addClass("playing");
    $("div.song-item div.play-button i").removeClass("fa-pause-circle").addClass("fa-play-circle");
    player.prop("src", $(button).data("song"));
    resumeSong(button);
    sendRecentlyHeard(button);
    currentSong = button.closest("div.song-item");
  }

  function pauseSong(button) {
    $(button).children().filter("div.play-button i").removeClass("fa-pause-circle").addClass("fa-play-circle");
    player[0].pause();
  }

  function resumeSong(button) {
    $(button).children().filter("i").removeClass("fa-play-circle").addClass("fa-pause-circle");
    player[0].play();
  }

  function sendRecentlyHeard(button) {
    token = $('meta[name="csrf-token"]').attr('content');
    $.ajax({
      type: "POST",
      url: button.data('url'),
      headers: { 'X-CSRF-Token': token },
      success: () => {}
    });
  }
});