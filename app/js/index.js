/*点击轮播1*/
$(function () {
    //alert($);
    var $tabLi = $('#banner .point ul li');
    var $picUl = $('#banner .banner ul');
    var $point = $('#banner .point');
    var imgWidth = $('#banner .banner ul li').width();
    var index = 0;
    var nowTime = new Date();
    /*点击按钮事件*/
    $tabLi.click(function () {
        index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $picUl.animate({
            marginLeft: -imgWidth*index + 'px'
        },500);
    });
    /*左右按钮事件*/
    $point.hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            fn();
        },5000);
    }).click(function(){
        clearInterval(timer);
    });
    var timer = setInterval(function () {
        fn();
    },5000);
    function fn() {
        var i = $(this).index();
        if (i) {
            index++;
            if (index>=$tabLi.length) {
                index = 0;
            }
        }else {
            index--;
            if (index<0) {
                index = 4;
            }
        }
        $tabLi.eq(index).addClass("on").siblings().removeClass("on");
        $picUl.animate({
            marginLeft: -imgWidth*index + 'px'
        },500);
    }
});
/*点击轮播2*/
$(function () {
    var p = 0;
    $(".screen>div.point ul li").click(function(){
        a=$(this).index();
        $(".screen>ul").animate({"margin-left": (-$(".screen>ul>li").width()) *$(this).index()});
        $(this).css({"background": "#7b7b7b"}).siblings().css({"background": "#b5b5b5"});
    });
});
/*选项卡头部切换*/
var flag = "left";
function DY_scroll(wraper,prev,next,img,imga,speed,or){
    var wraper = $(wraper);
    var prev = $(prev);
    var next = $(next);
    var img = $(img).find('ul');
    var imga = $(imga).find('ul li');
    var w = img.find('li').outerWidth(true);
    var s = speed;
    next.click(function(){
        img.animate({'margin-left':-w}/*,1500,'easeOutBounce'*/,function(){
            img.find('li').eq(0).appendTo(img);
            img.css({'margin-left':0});
        });
        flag = "left";
    });
    prev.click(function(){
        img.find('li:last').prependTo(img);
        img.css({'margin-left':-w});
        img.animate({'margin-left':0}/*,1500,'easeOutBounce'*/);
        flag = "right";
    });
    if(imga.length>4){
        if (or == true){
            ad = setInterval(function() { flag == "left" ? next.click() : prev.click()},s*1000);
            wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() {flag == "left" ? next.click() : prev.click()},s*1000);});
        }
    }

}
DY_scroll('.hl_main5_content','.hl_scrool_leftbtn','.hl_scrool_rightbtn','.hl_main5_content1','.hl_main5_content1',2,false);// true为锟皆讹拷锟斤拷锟脚ｏ拷锟斤拷锟接此诧拷锟斤拷锟斤拷false锟
/*选项卡切换*/
$(function () {
    $(".choose_01").click(function () {
        $(this).css("border", "1px solid #7E7E7E").siblings().css("border", "1px solid #f6f6f6");
        $(".screen_show").children().eq(0).show().siblings().hide();
    });
    $(".choose_02").click(function () {
        $(this).css("border", "1px solid #7E7E7E").siblings().css("border", "1px solid #f6f6f6");
        $(".screen_show").children().eq(1).show().siblings().hide();
    });
    $(".choose_03").click(function () {
        $(this).css("border", "1px solid #7E7E7E").siblings().css("border", "1px solid #f6f6f6");
        $(".screen_show").children().eq(2).show().siblings().hide();
    });
    $(".choose_04").click(function () {
        $(this).css("border", "1px solid #7E7E7E").siblings().css("border", "1px solid #f6f6f6");
        $(".screen_show").children().eq(3).show().siblings().hide();
    });
    $(".choose_05").click(function () {
        $(this).css("border", "1px solid #7E7E7E").siblings().css("border", "1px solid #f6f6f6");
        $(".screen_show").children().eq(4).show().siblings().hide();
    });
    $(".choose_06").click(function () {
        $(this).css("border", "1px solid #7E7E7E").siblings().css("border", "1px solid #f6f6f6");
        $(".screen_show").children().eq(5).show().siblings().hide();
    });
    $(".choose_07").click(function () {
        $(this).css("border", "1px solid #7E7E7E").siblings().css("border", "1px solid #f6f6f6");
        $(".screen_show").children().eq(6).show().siblings().hide();
    });
    $(".choose_08").click(function () {
        $(this).css("border", "1px solid #7E7E7E").siblings().css("border", "1px solid #f6f6f6");
        $(".screen_show").children().eq(7).show().siblings().hide();
    });
});
