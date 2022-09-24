! function(t) {
    "use strict";
    t(window).on("load", (function() {
        t(".prealoader").delay(1e3).fadeOut("slow")
    })), t(document).ready((function() {
        var e, a = t(".main-slider");

        function i(e) {
            var a = t(".about-toggle"),
                i = t(".author-close");
            t("body").toggleClass("author-popup-active"), t("body").toggleClass("overlay-enabled"), t("body").hasClass("author-popup-active") ? i.focus() : a.focus(),
                function() {
                    var t, e, a, i = document.querySelector(".author-popup"),
                        o = document.querySelector(".author-close");
                    let n = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
                        s = o,
                        r = i.querySelectorAll(n),
                        l = r[r.length - 1];
                    if (!i) return !1;
                    for (t = i.getElementsByTagName("button"), e = 0, a = t.length; e < a; e++) t[e].addEventListener("focus", c, !0), t[e].addEventListener("blur", c, !0);

                    function c() {
                        for (var t = this; - 1 === t.className.indexOf("author-anim");) "input" === t.tagName.toLowerCase() && (-1 !== t.className.indexOf("focus") ? t.className = t.className.replace("focus", "") : t.className += " focus"), t = t.parentElement
                    }
                    document.addEventListener("keydown", (function(t) {
                        ("Tab" === t.key || 9 === t.keyCode) && (t.shiftKey ? document.activeElement === s && (l.focus(), t.preventDefault()) : document.activeElement === l && (s.focus(), t.preventDefault()))
                    }))
                }()
        }
        a.owlCarousel({
            rtl: "rtl" == t("html").attr("dir"),
            items: 1,
            autoplay: !1,
            autoplayTimeout: 5e3,
            animateOut: !1,
            animateIn: !1,
            margin: 0,
            loop: !0,
            dots: !1,
            nav: !0,
            navText: ['<i class="fa fa-chevron-left"></i> <span>SLIDE</span>', '<span>SLIDE</span> <i class="fa fa-chevron-right"></i>'],
            singleItem: !0,
            touchDrag: !0,
            mouseDrag: !1,
            responsive: {
                0: {
                    nav: !1
                },
                768: {
                    nav: !0
                },
                992: {
                    nav: !0
                }
            }
        }), a.owlCarousel(), a.on("translate.owl.carousel", (function(e) {
            t("[data-animation]").each((function() {
                var e = t(this).data("animation");
                t(this).removeClass("animated " + e).css("opacity", "0")
            }))
        })), t("[data-delay]").each((function() {
            var e = t(this).data("delay");
            t(this).css("animation-delay", e)
        })), t("[data-duration]").each((function() {
            var e = t(this).data("duration");
            t(this).css("animation-duration", e)
        })), a.on("translated.owl.carousel", (function() {
            a.find(".owl-item.active").find("[data-animation]").each((function() {
                var e = t(this).data("animation");
                t(this).addClass("animated " + e).css("opacity", "1")
            }))
        })), a.on("translated.owl.carousel", (function() {
            ! function() {
                t(".owl-item").removeClass("prev next");
                var e = t(".main-slider .owl-item.active");
                e.next(".owl-item").addClass("next"), e.prev(".owl-item").addClass("prev");
                var a = t(".owl-item.next").find(".item img").attr("data-img-url"),
                    i = t(".owl-item.prev").find(".item img").attr("data-img-url");
                t(".owl-nav .owl-prev").css({
                    backgroundImage: "url(" + i + ")"
                }), t(".owl-nav .owl-next").css({
                    backgroundImage: "url(" + a + ")"
                })
            }()
        })), t(document).on("click", ".about-toggle", i), t(document).on("click", ".author-close", i), t(document).on("click", (function(e) {
            var a = t(".about-toggle"),
                i = t(".author-popup");
            t(e.target).closest(a).length || t(e.target).closest(i).length || t("body").hasClass("author-popup-active") && (t("body").removeClass("author-popup-active"), t("body").removeClass("overlay-enabled"), a.focus(), e.stopPropagation())
        })), e = t(".av-filter-init"), t.each(e, (function(e, a) {
            var i = t(this),
                o = t(this).parent().parent().parent().attr("class"),
                n = t("#" + i.attr("id"));
            t(n).imagesLoaded((function() {
                var e = t(n).isotope({
                        itemSelector: ".av-filter-item",
                        layout: "masonry",
                        percentPosition: !0,
                        masonry: {
                            columnWidth: 0,
                            gutter: 0
                        }
                    }),
                    a = {
                        numberGreaterThan50: function() {
                            var e = t(this).find(".number").text();
                            return parseInt(e, 10) > 20
                        },
                        ium: function() {
                            return t(this).find(".name").text().match(/ium$/)
                        }
                    };
                if (t(document).on("click", "." + o + " .av-tab-filter.filters-theme a", (function() {
                        var i = t(this).attr("data-filter");
                        i = a[i] || i, e.isotope({
                            filter: i
                        })
                    })), t("." + o + " .av-tab-filter").hasClass("filters-load")) {
                    var i = 3,
                        s = e.data("isotope");

                    function r(a) {
                        e.find(".hidden").removeClass("hidden");
                        var i = s.filteredItems.slice(a, s.filteredItems.length).map((function(t) {
                            return t.element
                        }));
                        t(i).addClass("hidden"), e.isotope("layout"), 0 == i.length && t("#load-more").text("No Item")
                    }
                    r(3), e.after('<div class="av-column-12 text-center mt-6"><button id="load-more" class="av-btn av-btn-secondary av-btn-bubble">Load More <i class="fa fa-spinner"></i><span class="bubble_effect"><span class="circle top-left"></span> <span class="circle top-left"></span> <span class="circle top-left"></span> <span class="button effect-button"></span> <span class="circle bottom-right"></span> <span class="circle bottom-right"></span> <span class="circle bottom-right"></span></span></button></div>'), t("#load-more").click((function() {
                        t("." + o + " .av-tab-filter.filters-load").data("clicked") && (i = 3, t("." + o + " .av-tab-filter.filters-load").data("clicked", !1)), r(i += 3)
                    })), t("." + o + " .av-tab-filter.filters-load").click((function() {
                        t(this).data("clicked", !0), r(3)
                    }))
                }
            }))
        })), t(document).on("click", ".av-tab-filter.filters-theme a", (function() {
            t(this).siblings().removeClass("active"), t(this).addClass("active")
        })), t(".mgf-popup").magnificPopup({
            delegate: "a.image",
            type: "image",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            callbacks: {
                elementParse: function(t) {
                    "video" == t.el[0].className ? (t.type = "iframe", t.iframe = {
                        patterns: {
                            youtube: {
                                index: "youtube.com/",
                                id: "v=",
                                src: "//www.youtube.com/embed/%id%?autoplay=1"
                            },
                            vimeo: {
                                index: "vimeo.com/",
                                id: "/",
                                src: "//player.vimeo.com/video/%id%?autoplay=1"
                            },
                            gmaps: {
                                index: "//maps.google.",
                                src: "%id%&output=embed"
                            }
                        }
                    }) : (t.type = "image", t.tLoading = "Loading image #%curr%...", t.mainClass = "mfp-img-mobile", t.image = {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                    })
                }
            }
        }), t(".partner-carousel").owlCarousel({
            rtl: "rtl" == t("html").attr("dir"),
            loop: !0,
            dots: !1,
            center: !0,
            nav: !0,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            margin: 30,
            autoplay: !1,
            autoplayTimeout: 1e4,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        }), t(".team-carousel").owlCarousel({
            rtl: "rtl" == t("html").attr("dir"),
            loop: !0,
            dots: !1,
            nav: !0,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            margin: 30,
            autoplay: !1,
            autoplayTimeout: 1e4,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            responsive: {
                0: {
                    items: 1
                },
                601: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        }), t(".post-carousel").owlCarousel({
            rtl: "rtl" == t("html").attr("dir"),
            loop: !0,
            dots: !1,
            nav: !0,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            margin: 30,
            stagePadding: 15,
            autoplay: !1,
            autoplayTimeout: 1e4,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            responsive: {
                0: {
                    items: 1
                },
                601: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), t(".testimonial-carousel").owlCarousel({
            rtl: "rtl" == t("html").attr("dir"),
            items: 1,
            loop: !0,
            dots: !1,
            nav: !0,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            autoplay: !1,
            autoplayTimeout: 1e4,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            thumbs: !0,
            thumbImage: !0,
            thumbContainerClass: "owl-thumbs",
            thumbItemClass: "owl-thumb-item",
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1,
                    center: !0
                },
                992: {
                    items: 1
                }
            }
        }), t(".contactoffice-carousel").owlCarousel({
            rtl: "rtl" == t("html").attr("dir"),
            loop: !0,
            dots: !1,
            nav: !0,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            margin: 30,
            autoplay: !1,
            autoplayTimeout: 1e4,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            responsive: {
                0: {
                    items: 1
                },
                601: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        }), t(".av-load-3").slice(0, 6).show(), t(".av-load-4").slice(0, 8).show(), t(".av-load-more").on("click", (function(e) {
            e.preventDefault(), t(".av-load-more").addClass("loadspinner"), t(".av-load-more").animate({
                display: "block"
            }, 2e3, (function() {
                t(".av-load-3:hidden").slice(0, 3).slideDown(), t(".av-load-4:hidden").slice(0, 4).slideDown(), 0 === t(".av-load-item:hidden").length && t(".av-load-more").text("No more"), t(".av-load-more").removeClass("loadspinner")
            }))
        })), t(".widget_social_widget").find("li a").each((function() {
            t(this).on("mouseenter focus", (function() {
                var t = this.querySelector("i");
                if (t) {
                    var e = new mojs.Burst({
                        radius: {
                            15: 45
                        },
                        parent: t,
                        children: {
                            fill: ["var(--sp-primary)", "var(--sp-primary2)", "var(--sp-primary)"]
                        }
                    });
                    new mojs.Shape({
                        parent: t,
                        type: "circle",
                        radius: {
                            0: 30
                        },
                        fill: "transparent",
                        stroke: "var(--sp-primary)",
                        strokeWidth: {
                            15: 0
                        },
                        opacity: .6,
                        duration: 1e3,
                        easing: mojs.easing.sin.out
                    }).play(), e.play()
                }
            }))
        })), t(".av-btn-bubble").each((function() {
            var e = t(this).find(".circle.top-left"),
                a = t(this).find(".circle.bottom-right"),
                i = new TimelineLite,
                o = new TimelineLite,
                n = new TimelineLite({
                    paused: !0
                });
            i.to(e, 1.2, {
                x: -25,
                y: -25,
                scaleY: 2,
                ease: SlowMo.ease.config(.1, .7, !1)
            }), i.to(e.eq(0), .1, {
                scale: .2,
                x: "+=6",
                y: "-=2"
            }), i.to(e.eq(1), .1, {
                scaleX: 1,
                scaleY: .8,
                x: "-=10",
                y: "-=7"
            }, "-=0.1"), i.to(e.eq(2), .1, {
                scale: .2,
                x: "-=15",
                y: "+=6"
            }, "-=0.1"), i.to(e.eq(0), 1, {
                scale: 0,
                x: "-=5",
                y: "-=15",
                opacity: 0
            }), i.to(e.eq(1), 1, {
                scaleX: .4,
                scaleY: .4,
                x: "-=10",
                y: "-=10",
                opacity: 0
            }, "-=1"), i.to(e.eq(2), 1, {
                scale: 0,
                x: "-=15",
                y: "+=5",
                opacity: 0
            }, "-=1");
            var s = new TimelineLite,
                r = new TimelineLite;
            s.set(e, {
                x: 0,
                y: 0,
                rotation: -45
            }), s.add(i), o.set(a, {
                x: 0,
                y: 0
            }), o.to(a, 1.1, {
                x: 30,
                y: 30,
                ease: SlowMo.ease.config(.1, .7, !1)
            }), o.to(a.eq(0), .1, {
                scale: .2,
                x: "-=6",
                y: "+=3"
            }), o.to(a.eq(1), .1, {
                scale: .8,
                x: "+=7",
                y: "+=3"
            }, "-=0.1"), o.to(a.eq(2), .1, {
                scale: .2,
                x: "+=15",
                y: "-=6"
            }, "-=0.2"), o.to(a.eq(0), 1, {
                scale: 0,
                x: "+=5",
                y: "+=15",
                opacity: 0
            }), o.to(a.eq(1), 1, {
                scale: .4,
                x: "+=7",
                y: "+=7",
                opacity: 0
            }, "-=1"), o.to(a.eq(2), 1, {
                scale: 0,
                x: "+=15",
                y: "-=5",
                opacity: 0
            }, "-=1"), r.set(a, {
                x: 0,
                y: 0,
                rotation: 45
            }), r.add(o), n.add(s), n.to(t(this).find(".button.effect-button"), .8, {
                scaleY: 1.1
            }, .1), n.add(r, .2), n.to(t(this).find(".button.effect-button"), 1.8, {
                scale: 1,
                ease: Elastic.easeOut.config(1.2, .4)
            }, 1.2), n.timeScale(2.6), t(this).on("mouseenter focus", (function() {
                n.restart()
            }))
        })), t(".faq-type").isotope({
            itemSelector: ".faq-item",
            layoutMode: "fitRows",
            stagger: 30
        });
        var o = {
            numberGreaterThan50: function() {
                var e = t(this).find(".number").text();
                return parseInt(e, 10) > 50
            },
            ium: function() {
                return t(this).find(".name").text().match(/ium$/)
            }
        };

        function n() {
            t(".faq-type").isotope("layout")
        }

        function s() {
            if (t("body").hasClass("footer-parallax") && window.matchMedia("(min-width: 992px)").matches) {
                var e = 0;
                t(".footer-section").each((function() {
                    t(this).outerHeight(!0) > e && (e = t(this).outerHeight(!0))
                })), t("#content").css("margin-bottom", e)
            } else t("#content").css("margin-bottom", "0")
        }
        t(".filters-faq").on("click", "a", (function() {
            var e = t(this).attr("data-filter");
            e = o[e] || e, t(".faq-type").isotope({
                filter: e
            })
        })), t(".av-tab-filter.filters-faq").each((function(e, a) {
            var i = t(a);
            i.on("click", "a", (function() {
                i.find(".active").removeClass("active"), t(this).addClass("active")
            }))
        })), t(".faq-type").on("click", ".accordion-title", (function(e) {
            var a = t(e.currentTarget).parents(".faq-item"),
                i = a.hasClass("is-accordion-open");
            t(".faq-type").find(".is-accordion-open").removeClass("is-accordion-open").find(".accordion-content").slideUp("normal", n), t(".faq-type").find(".fa-minus").removeClass("fa-minus").addClass("fa-plus"), i || (a.addClass("is-accordion-open").find(".accordion-content").slideDown("normal", n), a.find(".fa-plus").removeClass("fa-plus").addClass("fa-minus"))
        })), t(window).on("resize", s), t(window).on("load", s), t(".pricing-two .pricing-item").each((function() {
            t(this).hover((function() {
                t(this).parents(".pricing-row").find(".pricing-item").removeClass("active"), t(this).addClass("active")
            }))
        })), t(".funfact-wrapper .funfact-item").each((function() {
            t(this).hover((function() {
                t(this).parents(".funfact-wrapper").find(".funfact-item").removeClass("active"), t(this).addClass("active")
            }))
        })), t(".contactinfo-row .contactinfo-item").each((function() {
            t(this).hover((function() {
                t(this).parents(".contactinfo-row").find(".contactinfo-item").removeClass("active"), t(this).addClass("active")
            }))
        })), t(".skillbar").each((function() {
            t(this).find(".skillbar-bar").animate({
                width: t(this).attr("data-percent")
            }, 6e3), t(this).find(".skill-bar-percent").animate({
                left: t(this).attr("data-percent")
            }, 6e3)
        })), t(".count-bar").each((function() {
            var e = t(this);
            t({
                Counter: 0
            }).animate({
                Counter: e.text()
            }, {
                duration: 6e3,
                easing: "swing",
                step: function() {
                    e.text(Math.ceil(this.Counter))
                }
            })
        })), t(".counter").counterUp({
            delay: 10,
            time: 1e3
        }), t(".pricing-tab a").click((function() {
            var e = t(this).attr("data-tab");
            t(".pricing-tab a").removeClass("active"), t(".tab-content .tab-pane").removeClass("active").removeClass("show"), t(this).addClass("active"), setTimeout((function() {
                t("#" + e).addClass("active").addClass("show")
            }), 100)
        }))
    })), t(".footer-section, .cta-section, .breadcrumb-area").ripples({
        resolution: 500,
        dropRadius: 20,
        perturbance: .04
    });
    var e = t(this).dels = [],
        a = {
            attribute: "data-roller",
            classNames: ["roller", "rollerstart", "rollerended"],
            start: .75,
            end: .75,
            autoInit: !0
        };

    function i() {
        document.addEventListener("scroll", o);
        for (var t = document.querySelectorAll("[" + a.attribute + "]"), i = 0; i < t.length; i++) {
            var n = t[i],
                s = n.getAttribute(a.attribute, 2).split(";"),
                r = {};
            r.start = a.start, r.end = a.end;
            for (var l = 0; l < s.length; l++) {
                var c = s[l].split(":"),
                    d = c[0],
                    u = isNaN(1 * c[1]) ? c[1] : 1 * c[1];
                d && (r[d] = void 0 === u || u)
            }
            r.el = n, r.id = e.length, e.push(r), n.classList.add(a.classNames[0]), r.debug && (n.style.outline = "solid red 4px")
        }
        o()
    }

    function o() {
        for (var t = window.innerHeight, i = 0; i < e.length; i++) {
            var o = e[i],
                n = o.el.getBoundingClientRect(),
                s = n.top / t,
                r = n.bottom / t;
            o.debug && (s >= 0 && s <= 1 && (o.startLine || (o.startLine = document.createElement("div"), document.body.appendChild(o.startLine), o.startLine.style = "position:fixed;height:0;width:100%;border-bottom:dotted red 2px;top:" + 100 * o.start + "vh")), (r < o.end || s > 1) && o.startLine && (o.startLine.parentNode.removeChild(o.startLine), delete o.startLine)), s < o.start && !o.rollerstart ? (o.rollerstart = !0, o.el.classList.add(a.classNames[1])) : s > o.start && o.rollerstart && (o.rollerstart = !1, o.el.classList.remove(a.classNames[1])), r < o.end && !o.rollerended ? (o.rollerended = !0, o.el.classList.add(a.classNames[2])) : r > o.end && o.rollerended && (o.rollerended = !1, o.el.classList.remove(a.classNames[2]))
        }
    }
    document.addEventListener("DOMContentLoaded", (function() {
        a.autoInit && i()
    })), t(this).init = i, t(this).config = function(t) {
        for (var e in t) a[e] = t[e]
    }
}(jQuery);