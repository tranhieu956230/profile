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
                        "max-height": "0",
                        "margin-bottom": "0rem"
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
                "max-height": "15rem",
                "border": "1px solid rgb(233, 234, 235)",
                "margin-bottom": "0.8rem"
            })

        } else {
            element.find("span").html("&plus;");
            element.next().css({
                "max-height": "0",
                "margin-bottom": "0"
            });

            setTimeout(function () {
                element.next().css({
                    "border": "none"
                })
            }, 400);
        }
    })
})