(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-38ad5a16"], {
        a735: function(e, i, t) {
            "use strict";
            var s = t("c548"),
                l = t.n(s);
            l.a
        },
        c548: function(e, i, t) {},
        cf18: function(e, i, t) {
            "use strict";
            t.r(i);
            var s = function() {
                    var e = this,
                        i = e.$createElement,
                        t = e._self._c || i;
                    return t("div", {
                        staticClass: "cube"
                    }, [3 === e.levels.length && e.isVip ? t("div", {
                        staticClass: "wrap-portrait"
                    }, [t("iframe", {
                        staticClass: "element",
                        attrs: {
                            src: "#/" + e.symbol + "?isCube=true&level=" + e.levels[0] + (e.key ? "&key=" + e.key : ""),
                            frameborder: "0",
                            marginheight: "0",
                            marginwidth: "0",
                            scrolling: "no",
                            width: "100%",
                            height: "100%"
                        }
                    }), t("iframe", {
                        staticClass: "element",
                        attrs: {
                            src: "#/" + e.symbol + "?isCube=true&level=" + e.levels[1] + (e.key ? "&key=" + e.key : ""),
                            frameborder: "0",
                            marginheight: "0",
                            marginwidth: "0",
                            scrolling: "no",
                            width: "100%",
                            height: "100%"
                        }
                    }), t("iframe", {
                        staticClass: "element",
                        attrs: {
                            src: "#/" + e.symbol + "?isCube=true&level=" + e.levels[2] + (e.key ? "&key=" + e.key : ""),
                            frameborder: "0",
                            marginheight: "0",
                            marginwidth: "0",
                            scrolling: "no",
                            width: "100%",
                            height: "100%"
                        }
                    })]) : e._e(), 4 === e.levels.length && e.isVip ? t("div", {
                        staticClass: "wrap-lanscape"
                    }, [t("iframe", {
                        staticClass: "element",
                        attrs: {
                            src: "#/" + e.symbol + "?isCube=true&level=" + e.levels[0] + (e.key ? "&key=" + e.key : ""),
                            frameborder: "0",
                            marginheight: "0",
                            marginwidth: "0",
                            scrolling: "no",
                            width: "100%",
                            height: "100%"
                        }
                    }), t("iframe", {
                        staticClass: "element",
                        attrs: {
                            src: "#/" + e.symbol + "?isCube=true&level=" + e.levels[1] + (e.key ? "&key=" + e.key : ""),
                            frameborder: "0",
                            marginheight: "0",
                            marginwidth: "0",
                            scrolling: "no",
                            width: "100%",
                            height: "100%"
                        }
                    }), t("iframe", {
                        staticClass: "element",
                        attrs: {
                            src: "#/" + e.symbol + "?isCube=true&level=" + e.levels[2] + (e.key ? "&key=" + e.key : ""),
                            frameborder: "0",
                            marginheight: "0",
                            marginwidth: "0",
                            scrolling: "no",
                            width: "100%",
                            height: "100%"
                        }
                    }), t("iframe", {
                        staticClass: "element",
                        attrs: {
                            src: "#/" + e.symbol + "?isCube=true&level=" + e.levels[3] + (e.key ? "&key=" + e.key : ""),
                            frameborder: "0",
                            marginheight: "0",
                            marginwidth: "0",
                            scrolling: "no",
                            width: "100%",
                            height: "100%"
                        }
                    })]) : e._e()])
                },
                l = [],
                r = (t("2aa5"), t("62c8"), t("f9b5")),
                a = {
                    data: function() {
                        return {
                            symbol: null,
                            levels: ["min1", "min5", "min30", "day"],
                            key: "",
                            isVip: !1
                        }
                    },
                    created: function() {
                        if (this.symbol = this.$route.params.code || "sh000300", this.isVip = r["a"].isSVip(), this.isVip) {
                            if (window.top.__Walle_Devtools && (this.levels = ["min1", "min5", "min30"]), this.$route.query.levels) {
                                var e = this.$route.query.levels.split(",");
                                3 !== e.length && 4 !== e.length || (this.levels = e)
                            }
                            this.key = this.$route.query.key || ""
                        } else r["a"].notification("??????????????? ?????????SVIP?????? ?????????????????????")
                    }
                },
                n = a,
                h = (t("a735"), t("2be6")),
                o = Object(h["a"])(n, s, l, !1, null, "faf807b0", null);
            i["default"] = o.exports
        }
    }
]);