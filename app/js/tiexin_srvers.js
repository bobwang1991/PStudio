$(function () {
    $(".shitizhanting").click(function () {
        $(".zhanting").show().siblings().hide();
        $(".zhezhao").show();
    });
    $(".zhuanyekongjian").click(function () {
        $(".kongjian").show().siblings().hide();
        $(".zhezhao").show();
    });
    $(".notice>div.close").click(function () {
        $(".zhanting").hide().siblings().hide();
        $(".zhezhao").hide();
    });
});
