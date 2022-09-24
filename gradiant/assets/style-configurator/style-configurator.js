jQuery(function($) {
	jQuery(document).ready(function($) {
		$("#style-configurator > a").click(function(e){
			var div = $("#style-configurator");
			if (div.css("left") === "-255px") {
				$("#style-configurator").animate({
					left: "0px"
				});
			} else {
				$("#style-configurator").animate({
					left: "-255px"
				});
			}
		});
	});
});
! function(t) {
    if (t("body").hasClass("front_configurator_enable")) {
        t(document).on("click", ".color-changer", function(e) {
            a();
            var l = t(this).attr("id"),
                r = t(this).attr("data-myvalone"),
                s = t(this).attr("data-myvaltwo");
            t(".style-palette li a").removeClass("active"), t("#" + l).addClass("active");
            var o = {
                id: l,
                one: r,
                two: s
            };
            localStorage.setItem("stylesheet", JSON.stringify(o));
            var i = ":root {--sp-primary:" + r + ";--sp-primary2:" + s + ";}";
            t("#gradiantCustomCss").html(i)
        });
        t(".front_configurator_enable").each(function() {
            if ("" != localStorage.getItem("stylesheet") && "undefined" != localStorage.getItem("stylesheet") && null != localStorage.getItem("stylesheet")) {
                a();
                var e = JSON.parse(localStorage.getItem("stylesheet")).id,
                    l = JSON.parse(localStorage.getItem("stylesheet")).one,
                    r = JSON.parse(localStorage.getItem("stylesheet")).two;
                t("#" + e).addClass("active");
                var s = ":root {--sp-primary:" + l + ";--sp-primary2:" + r + ";}";
                t("#gradiantCustomCss").html(s)
            } else t(".style-palette li a").removeClass("active"), t(this).attr("data-myvalone", "var(--sp-primary)"), t(this).attr("data-myvaltwo", "var(--sp-primary2)")
        });
        function a() {
            t(".bbtn").show()
        }
        t(document).on("click", ".clr_localStorage", function(a) {
            localStorage.clear(), t(".style-palette li a").removeClass("active"), t("#gradiantCustomCss").html(""), t(".bbtn").hide()
        })
    }
}(jQuery);