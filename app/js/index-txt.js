/**
 * Created by ms on 2016/5/24.
 */
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