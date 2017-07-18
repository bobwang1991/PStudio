/*点击轮播1*/
$(function () {
    var $pointLi = $(".point ul li");
    var $picUl = $(".banner ul.long");
    var $banner = $(".point");
    var imgWidth = $(".banner ul li").width();
    var index = 0;
    $pointLi.click(function () {
        index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $picUl.animate({marginLeft: -imgWidth * (index) + 'px'},300);
    });
    $banner.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            index ++;
            autoBanner();
        },5000);
    });
    var timer = setInterval(function(){
        index ++;
        autoBanner();
    },5000);
    function autoBanner(){
        var liIndex = index;
        var runend = true;
        if ( liIndex >= $pointLi.length )
        {
            liIndex = 0;
        }
        else if ( liIndex < 0 )
        {
            liIndex = $pointLi.length-1;
        }
        $pointLi.eq(liIndex).addClass('on').siblings().removeClass('on');
        $picUl.animate({
            marginLeft : -imgWidth*(index) + 'px'
        },300,function(){
            if ( index == $pointLi.length )
            {
                $picUl.css('marginLeft' , -imgWidth+'px');
                index = 0;
            }
            else if ( index < 0 )
            {
                $picUl.css('marginLeft' , -imgWidth*($pointLi.length)+'px');
                index = $pointLi.length-1;
            }
        });
    }
});
/*$(function () {
    var p = 0;
    var runend = true;
    var myTimer = setInterval(function(){
        console.log("--> mytimer triggle。");
        if (runend) {
            //autoBanner();
            //changeDian();
        }
    },2000);
    $(".banner>div.point ul li").click(function () {
        //delMyTimer();
        //startAlarmTimer();
        a = $(this).index();
        $(".banner>ul").animate({"margin-left": (-$(".banner>ul>li").width()) * $(this).index()});
        $(this).addClass("on").siblings().removeClass("on");
    });
    function autoBanner() {
        if (p > 3) {
            p = 0;
        }
        else {
            p = p + 1;
        }
        runend = false;
        $(".banner>ul").animate({"margin-left": (-$(".banner>ul>li").width()) * p},300,"linear",function(){
            console.log("next, animate end.");
            runend = true;
        });
        //changeDian();
    }
    function changeDian(){
        var bool = $(".point>ul>li").hasClass("on") && (!$(".point li:last-child").hasClass("on"))
        if(bool){
            $(".on").removeClass("on").next().addClass("on")
        }else{
            $(".point>ul>li:first-child").addClass("on").siblings().removeClass("on")
        }
    }
    /!*清除定时器*!/
    function delMyTimer()
    {
        clearInterval(myTimer);
        myTimer = null;
    }
    /!*一定时间后唤醒setTimeout*!/
    var alarmTimer = null;
    function startAlarmTimer()
    {
        if (alarmTimer)
        {
            console.log("has alarmTimer");       //增加一个日志
        }else
        {
            console.log("no alarmTimer,create it.");
            alarmTimer = setTimeout(function(){
                startMyTimer();
                alarmTimer = null;
            },2000);
        }
    }
    function startMyTimer()
    {
        if (myTimer)
        {
            console.log("has timer. ");          //增加一个日志
        }else
        {
            console.log("no timer. create it. ");            //增加一个日志
            myTimer = setInterval(function(){
                console.log("--> mytimer triggle.");
                if (runend) {
                    autoBanner();
                    changeDian();
                }
            },5000);
        }
    }
});*/
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
/*    if(imga.length>4){
        if (or == true){
            ad = setInterval(function() { flag == "left" ? next.click() : prev.click()},s*1000);
            wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() {flag == "left" ? next.click() : prev.click()},s*1000);});
        }
    }*/

}
DY_scroll('.hl_main5_content','.hl_scrool_leftbtn','.hl_scrool_rightbtn','.hl_main5_content1','.hl_main5_content1',2,true);// trueΪ�Զ����ţ����Ӵ˲�����false��Ĭ�ϲ��Զ�
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
