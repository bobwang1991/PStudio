/*$(function(){
    $(".leftsidebar_box dt").css({"background-color":"#000000"});
    $(".leftsidebar_box dt img").attr("src","images/product/add.png");
    $(".leftsidebar_box dd").hide();
    $(".leftsidebar_box dt").click(function(){
        $(".leftsidebar_box dt").css({"background-color":"#000000"})
        $(this).css({"background-color": "#000000"});
        $(this).parent().find('dd').removeClass("menu_chioce");
        $(".leftsidebar_box dt img").attr("src","images/product/add.png");
        $(this).parent().find('img').attr("src","images/product/remove.png");
        $(".menu_chioce").slideUp();
        $(this).parent().find('dd').slideToggle();
        $(this).parent().find('dd').addClass("menu_chioce");
    });
})*/
$(document).ready(function(){
    //$("#firstpane .menu_body:eq(0)").show();
    $("#firstpane h4.menu_head").toggle(function(){
        if ($(".div.menu_body").show()) {
            $(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
            $(this).siblings().removeClass("current");
        }
    },function() {
        if ($(".div.menu_body").hide()) {
            $(this).removeClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
            $(this).siblings().removeClass("current");
        }
    });
});