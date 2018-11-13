$(document).on("turbolinks:load", function(){
  $("div.tabs.shared li").click(function(){
    let target = $(this).children("a").prop("target");
    $("div.tabs.shared li").removeClass("is-active");
    $(this).addClass("is-active");
    $("div.tabs-content div.tab-item").removeClass("active");
    $(`div.tabs-content div${target}`).addClass("active");
  });
});