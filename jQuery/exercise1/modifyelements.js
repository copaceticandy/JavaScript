$(document).ready(function() {
    var $footer = $("footer");
    console.log($footer);
    var $container = $("#container");
    console.log($container);
    var $navList = $(".nav-item");
    console.log($navList);
    var $thirdLi = $navList[2];
    console.log($thirdLi);
    var $uls = $("ul");
    var $lastUls = [];
    for (var i = 0; i < $uls.length; i++) {
        $lastUls[i] = $uls.eq(i)[$uls.eq(i).length];
    }
    console.log($lastUls);
});