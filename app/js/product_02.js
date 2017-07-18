$(function () {
    var p = 0;
    $(".small_pic_banner ul li").click(function(){
        a=$(this).index();
        $(".big_pic>ul").animate({"margin-left": (-$(".big_pic>ul>li").width()) *$(this).index()});
        $(this).css({"outline":"3px solid #E5E5E5"}).siblings().css({"outline":"1px solid #ececec"})
    });
    $(".prev").click(function () {
        if (p > 0) {
            p = p - 1;
        } else {
            p = 7;
        }
        $(".big_pic>ul").animate({"margin-left": (-$(".big_pic>ul>li").width()) * p});
        $(".small_pic_banner ul li").eq(p).css({"outline": "3px solid #aaaaaa"}).siblings().css({"outline": "1px solid #aaaaaa"});
    });
    $(".next").click(function () {
        if (p > 6) {
            p = 0;
        } else {
            p = p + 1;
        }
        $(".big_pic>ul").animate({"margin-left": (-$(".big_pic>ul>li").width()) * p});
        $(".small_pic_banner ul li").eq(p).css({"outline": "3px solid #aaaaaa"}).siblings().css({"outline": "1px solid #aaaaaa"});
    });
});
/*tab*/
$(function () {
    var $p = $(".editor>div.editor_nav>ul>li");
    $p.eq(0).click(function () {
        $(this).addClass("black").siblings().removeClass("black");
        $(".arrow>div").css("margin-left", "5px");
        $("#product_about").show().siblings().hide();
    });
    $p.eq(1).click(function () {
        $(this).addClass("black").siblings().removeClass("black");
        $(".arrow>div").css("margin-left", "125px");
        $("#technology").show().siblings().hide();
    });
    $p.eq(2).click(function () {
        $(this).addClass("black").siblings().removeClass("black");
        $(".arrow>div").css("margin-left", "240px");
        $("#dimension").show().siblings().hide();
    });
});
