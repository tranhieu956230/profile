$(document).ready(function () {
    let current = 0;
    let nodes = [];
    $(".header__content").each(function () {
        nodes.push($(this));
    })


    animateHeader();
    var timer = setInterval(animateHeader, 10000);

    $(".header__navigate input").click(function () {
        current = parseInt($(this).val()) - 1;
        animateHeader();
        clearInterval(timer);
        timer = setInterval(animateHeader, 10000);
    })

    function animateHeader() {
        for (let i = 0; i < nodes.length; i++) {
            if (i != current) {
                nodes[i].css({
                    "display": "none"
                });
                nodes[i].removeClass("header__animate");
            }
        }
        nodes[current].css({
            display: "initial"
        })
        nodes[current].addClass("header__animate");
        $(".header").css({
            "background-image": `url(/img/img_bg_${current + 1}.jpg)`
        })
        $(`#r${current + 1}`).prop("checked", true);

        current++;
        if (current == nodes.length) current = 0;
    }

})