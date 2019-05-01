$(document).ready(function () {
    $(".collapse__item-header").click(function () {
        let element = $(this);
        element.toggleClass("collapse__item-header--active");
        if (element.find("span").html() == "+") {
            $(".collapse__item-header--active").each(function () {
                let current = $(this);
                if (!element.is(current)) {
                    current.find("span").html("&plus;");
                    current.next().css({
                        "height": "0rem",
                        "margin-bottom": "0rem",
                        "border": "none"
                    });

                    current.removeClass("collapse__item-header--active");

                    setTimeout(function () {
                        current.next().css({
                            "border": "none",
                        });
                    }, 400);
                }
            })

            element.find("span").html("&minus;");
            element.next().css({
                "border": "1px solid rgb(233, 234, 235)",
                "margin-bottom": "0.8rem",
                "height": element.next().prop('scrollHeight')
            })

        } else {
            element.find("span").html("&plus;");
            element.next().css({
                "margin-bottom": "0",
                "border": "0",
                "height": "0"
            });


        }
    })
})