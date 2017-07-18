$(document).ready(function(){

    $(".sub_nav .menu_body:eq(0)").show();
    $(".sub_nav h3.menu_head").click(function(){
        $(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
        $(this).siblings().removeClass("current");
    });

    $(".sub_nav .menu_body:eq(0)").show();
    $(".sub_nav h3.menu_head").click(function(){
        $(this).addClass("current").next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp("slow");
        $(this).siblings().removeClass("current");
    });

});