(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-e78bf26e"], {
    "2b43": function(e, t, n) {
        "use strict";
        n("841a"),
        n("33ef"),
        n("11ed");
        var i = n("56d4")
          , o = n.n(i)
          , a = (n("df26"),
        n("42c2"))
          , s = (n("6770"),
        n("148d"),
        n("e3ca"))
          , r = n.n(s)
          , c = n("f5f2")
          , l = n("30c6")
          , u = n("ce37")
          , d = function() {
            function e() {
                Object(c["a"])(this, e),
                Object(u["a"])(this, "isLoaded", !1),
                Object(u["a"])(this, "follow", []),
                Object(u["a"])(this, "histroy", []),
                this.load()
            }
            return Object(l["a"])(e, [{
                key: "target",
                value: function(e) {
                    var t;
                    return "follow" === e && (t = this.follow),
                    "histroy" === e && (t = this.histroy),
                    t
                }
            }, {
                key: "find",
                value: function(e, t, n) {
                    var i = this.target(e);
                    if (!i)
                        return -1;
                    for (var o = -1, a = 0; a < i.length; a++)
                        if (i[a].code === t) {
                            o = a;
                            break
                        }
                    return o
                }
            }, {
                key: "has",
                value: function(e, t, n) {
                    return -1 !== this.find(e, t, n)
                }
            }, {
                key: "insert",
                value: function(e, t, n) {
                    var i = this.target(e);
                    if (i)
                        if (n = n || t,
                        "follow" === e && i.length > 200)
                            r.a.info("关注标的不可超过200个标的");
                        else {
                            if ("follow" === e) {
                                var o = this.find("follow", t, n);
                                if (-1 !== o)
                                    return;
                                i.unshift({
                                    code: t,
                                    name: n
                                })
                            }
                            if ("histroy" === e) {
                                var a = this.find("histroy", t, n);
                                -1 === a || i.splice(a, 1),
                                i.unshift({
                                    code: t,
                                    name: n
                                })
                            }
                            "histroy" === e && i.length > 50 && (i = i.slice(0, 50)),
                            this.save()
                        }
                }
            }, {
                key: "remove",
                value: function(e, t, n) {
                    var i = this.target(e);
                    if (i) {
                        var o = this.find(e, t, n);
                        -1 !== o && (i.splice(o, 1),
                        this.save())
                    }
                }
            }, {
                key: "load",
                value: function() {
                    var e = Object(a["a"])(o.a.mark((function e() {
                        var t, n;
                        return o.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    t = localStorage.getItem("TWIST_QUANT_WATCHLIST_DATA"),
                                    t && (n = JSON.parse(t),
                                    this.follow = n.follow,
                                    this.histroy = n.histroy),
                                    this.isLoaded = !0;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "save",
                value: function() {
                    var e = Object(a["a"])(o.a.mark((function e() {
                        return o.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", localStorage.setItem("TWIST_QUANT_WATCHLIST_DATA", JSON.stringify({
                                        follow: this.follow,
                                        histroy: this.histroy
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]),
            e
        }();
        t["a"] = new d
    },
    "33ef2": function(e, t, n) {},
    7086: function(e, t, n) {
        e.exports = function(e) {
            var t = {};
            function n(i) {
                if (t[i])
                    return t[i].exports;
                var o = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i
                })
            }
            ,
            n.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var i = Object.create(null);
                if (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var o in e)
                        n.d(i, o, function(t) {
                            return e[t]
                        }
                        .bind(null, o));
                return i
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "/dist/",
            n(n.s = 89)
        }({
            0: function(e, t, n) {
                "use strict";
                function i(e, t, n, i, o, a, s, r) {
                    var c, l = "function" === typeof e ? e.options : e;
                    if (t && (l.render = t,
                    l.staticRenderFns = n,
                    l._compiled = !0),
                    i && (l.functional = !0),
                    a && (l._scopeId = "data-v-" + a),
                    s ? (c = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                        e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                        o && o.call(this, e),
                        e && e._registeredComponents && e._registeredComponents.add(s)
                    }
                    ,
                    l._ssrRegister = c) : o && (c = r ? function() {
                        o.call(this, this.$root.$options.shadowRoot)
                    }
                    : o),
                    c)
                        if (l.functional) {
                            l._injectStyles = c;
                            var u = l.render;
                            l.render = function(e, t) {
                                return c.call(t),
                                u(e, t)
                            }
                        } else {
                            var d = l.beforeCreate;
                            l.beforeCreate = d ? [].concat(d, c) : [c]
                        }
                    return {
                        exports: e,
                        options: l
                    }
                }
                n.d(t, "a", (function() {
                    return i
                }
                ))
            },
            11: function(e, t) {
                e.exports = n("2200")
            },
            15: function(e, t) {
                e.exports = n("9c67")
            },
            4: function(e, t) {
                e.exports = n("0ba1")
            },
            89: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = function() {
                    var e = this
                      , t = e.$createElement
                      , n = e._self._c || t;
                    return n("transition", {
                        attrs: {
                            name: "dialog-fade"
                        },
                        on: {
                            "after-enter": e.afterEnter,
                            "after-leave": e.afterLeave
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.visible,
                            expression: "visible"
                        }],
                        staticClass: "el-dialog__wrapper",
                        on: {
                            click: function(t) {
                                return t.target !== t.currentTarget ? null : e.handleWrapperClick(t)
                            }
                        }
                    }, [n("div", {
                        key: e.key,
                        ref: "dialog",
                        class: ["el-dialog", {
                            "is-fullscreen": e.fullscreen,
                            "el-dialog--center": e.center
                        }, e.customClass],
                        style: e.style,
                        attrs: {
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": e.title || "dialog"
                        }
                    }, [n("div", {
                        staticClass: "el-dialog__header"
                    }, [e._t("title", [n("span", {
                        staticClass: "el-dialog__title"
                    }, [e._v(e._s(e.title))])]), e.showClose ? n("button", {
                        staticClass: "el-dialog__headerbtn",
                        attrs: {
                            type: "button",
                            "aria-label": "Close"
                        },
                        on: {
                            click: e.handleClose
                        }
                    }, [n("i", {
                        staticClass: "el-dialog__close el-icon el-icon-close"
                    })]) : e._e()], 2), e.rendered ? n("div", {
                        staticClass: "el-dialog__body"
                    }, [e._t("default")], 2) : e._e(), e.$slots.footer ? n("div", {
                        staticClass: "el-dialog__footer"
                    }, [e._t("footer")], 2) : e._e()])])])
                }
                  , o = [];
                i._withStripped = !0;
                var a = n(15)
                  , s = n.n(a)
                  , r = n(11)
                  , c = n.n(r)
                  , l = n(4)
                  , u = n.n(l)
                  , d = {
                    name: "ElDialog",
                    mixins: [s.a, u.a, c.a],
                    props: {
                        title: {
                            type: String,
                            default: ""
                        },
                        modal: {
                            type: Boolean,
                            default: !0
                        },
                        modalAppendToBody: {
                            type: Boolean,
                            default: !0
                        },
                        appendToBody: {
                            type: Boolean,
                            default: !1
                        },
                        lockScroll: {
                            type: Boolean,
                            default: !0
                        },
                        closeOnClickModal: {
                            type: Boolean,
                            default: !0
                        },
                        closeOnPressEscape: {
                            type: Boolean,
                            default: !0
                        },
                        showClose: {
                            type: Boolean,
                            default: !0
                        },
                        width: String,
                        fullscreen: Boolean,
                        customClass: {
                            type: String,
                            default: ""
                        },
                        top: {
                            type: String,
                            default: "15vh"
                        },
                        beforeClose: Function,
                        center: {
                            type: Boolean,
                            default: !1
                        },
                        destroyOnClose: Boolean
                    },
                    data: function() {
                        return {
                            closed: !1,
                            key: 0
                        }
                    },
                    watch: {
                        visible: function(e) {
                            var t = this;
                            e ? (this.closed = !1,
                            this.$emit("open"),
                            this.$el.addEventListener("scroll", this.updatePopper),
                            this.$nextTick((function() {
                                t.$refs.dialog.scrollTop = 0
                            }
                            )),
                            this.appendToBody && document.body.appendChild(this.$el)) : (this.$el.removeEventListener("scroll", this.updatePopper),
                            this.closed || this.$emit("close"),
                            this.destroyOnClose && this.$nextTick((function() {
                                t.key++
                            }
                            )))
                        }
                    },
                    computed: {
                        style: function() {
                            var e = {};
                            return this.fullscreen || (e.marginTop = this.top,
                            this.width && (e.width = this.width)),
                            e
                        }
                    },
                    methods: {
                        getMigratingConfig: function() {
                            return {
                                props: {
                                    size: "size is removed."
                                }
                            }
                        },
                        handleWrapperClick: function() {
                            this.closeOnClickModal && this.handleClose()
                        },
                        handleClose: function() {
                            "function" === typeof this.beforeClose ? this.beforeClose(this.hide) : this.hide()
                        },
                        hide: function(e) {
                            !1 !== e && (this.$emit("update:visible", !1),
                            this.$emit("close"),
                            this.closed = !0)
                        },
                        updatePopper: function() {
                            this.broadcast("ElSelectDropdown", "updatePopper"),
                            this.broadcast("ElDropdownMenu", "updatePopper")
                        },
                        afterEnter: function() {
                            this.$emit("opened")
                        },
                        afterLeave: function() {
                            this.$emit("closed")
                        }
                    },
                    mounted: function() {
                        this.visible && (this.rendered = !0,
                        this.open(),
                        this.appendToBody && document.body.appendChild(this.$el))
                    },
                    destroyed: function() {
                        this.appendToBody && this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
                    }
                }
                  , f = d
                  , h = n(0)
                  , p = Object(h["a"])(f, i, o, !1, null, null, null);
                p.options.__file = "packages/dialog/src/component.vue";
                var v = p.exports;
                v.install = function(e) {
                    e.component(v.name, v)
                }
                ;
                t["default"] = v
            }
        })
    },
    "7ada": function(e, t, n) {
        (function(n) {
            var i, o, a;
            (function(n, s) {
                o = [],
                i = s,
                a = "function" === typeof i ? i.apply(t, o) : i,
                void 0 === a || (e.exports = a)
            }
            )(0, (function() {
                "use strict";
                function t(e, t) {
                    return "undefined" == typeof t ? t = {
                        autoBom: !1
                    } : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"),
                    t = {
                        autoBom: !t
                    }),
                    t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e],{
                        type: e.type
                    }) : e
                }
                function i(e, t, n) {
                    var i = new XMLHttpRequest;
                    i.open("GET", e),
                    i.responseType = "blob",
                    i.onload = function() {
                        r(i.response, t, n)
                    }
                    ,
                    i.onerror = function() {
                        console.error("could not download file")
                    }
                    ,
                    i.send()
                }
                function o(e) {
                    var t = new XMLHttpRequest;
                    t.open("HEAD", e, !1);
                    try {
                        t.send()
                    } catch (e) {}
                    return 200 <= t.status && 299 >= t.status
                }
                function a(e) {
                    try {
                        e.dispatchEvent(new MouseEvent("click"))
                    } catch (i) {
                        var t = document.createEvent("MouseEvents");
                        t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                        e.dispatchEvent(t)
                    }
                }
                var s = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof n && n.global === n ? n : void 0
                  , r = s.saveAs || ("object" != typeof window || window !== s ? function() {}
                : "download"in HTMLAnchorElement.prototype ? function(e, t, n) {
                    var r = s.URL || s.webkitURL
                      , c = document.createElement("a");
                    t = t || e.name || "download",
                    c.download = t,
                    c.rel = "noopener",
                    "string" == typeof e ? (c.href = e,
                    c.origin === location.origin ? a(c) : o(c.href) ? i(e, t, n) : a(c, c.target = "_blank")) : (c.href = r.createObjectURL(e),
                    setTimeout((function() {
                        r.revokeObjectURL(c.href)
                    }
                    ), 4e4),
                    setTimeout((function() {
                        a(c)
                    }
                    ), 0))
                }
                : "msSaveOrOpenBlob"in navigator ? function(e, n, s) {
                    if (n = n || e.name || "download",
                    "string" != typeof e)
                        navigator.msSaveOrOpenBlob(t(e, s), n);
                    else if (o(e))
                        i(e, n, s);
                    else {
                        var r = document.createElement("a");
                        r.href = e,
                        r.target = "_blank",
                        setTimeout((function() {
                            a(r)
                        }
                        ))
                    }
                }
                : function(e, t, n, o) {
                    if (o = o || open("", "_blank"),
                    o && (o.document.title = o.document.body.innerText = "downloading..."),
                    "string" == typeof e)
                        return i(e, t, n);
                    var a = "application/octet-stream" === e.type
                      , r = /constructor/i.test(s.HTMLElement) || s.safari
                      , c = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((c || a && r) && "object" == typeof FileReader) {
                        var l = new FileReader;
                        l.onloadend = function() {
                            var e = l.result;
                            e = c ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"),
                            o ? o.location.href = e : location = e,
                            o = null
                        }
                        ,
                        l.readAsDataURL(e)
                    } else {
                        var u = s.URL || s.webkitURL
                          , d = u.createObjectURL(e);
                        o ? o.location = d : location.href = d,
                        o = null,
                        setTimeout((function() {
                            u.revokeObjectURL(d)
                        }
                        ), 4e4)
                    }
                }
                );
                s.saveAs = r.saveAs = r,
                e.exports = r
            }
            ))
        }
        ).call(this, n("7d15"))
    },
    "841a": function(e, t, n) {
        "use strict";
        var i = n("6b1d")
          , o = n("d054").find
          , a = n("ed2b")
          , s = n("ce71")
          , r = "find"
          , c = !0
          , l = s(r);
        r in [] && Array(1)[r]((function() {
            c = !1
        }
        )),
        i({
            target: "Array",
            proto: !0,
            forced: c || !l
        }, {
            find: function(e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        a(r)
    },
    "8c58": function(e, t, n) {
        "use strict";
        var i = n("e23e")
          , o = n.n(i);
        o.a
    },
    "9ddb": function(e, t, n) {},
    b0d1: function(e, t, n) {
        e.exports = function(e) {
            var t = {};
            function n(i) {
                if (t[i])
                    return t[i].exports;
                var o = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i
                })
            }
            ,
            n.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var i = Object.create(null);
                if (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var o in e)
                        n.d(i, o, function(t) {
                            return e[t]
                        }
                        .bind(null, o));
                return i
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "/dist/",
            n(n.s = 88)
        }({
            0: function(e, t, n) {
                "use strict";
                function i(e, t, n, i, o, a, s, r) {
                    var c, l = "function" === typeof e ? e.options : e;
                    if (t && (l.render = t,
                    l.staticRenderFns = n,
                    l._compiled = !0),
                    i && (l.functional = !0),
                    a && (l._scopeId = "data-v-" + a),
                    s ? (c = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                        e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                        o && o.call(this, e),
                        e && e._registeredComponents && e._registeredComponents.add(s)
                    }
                    ,
                    l._ssrRegister = c) : o && (c = r ? function() {
                        o.call(this, this.$root.$options.shadowRoot)
                    }
                    : o),
                    c)
                        if (l.functional) {
                            l._injectStyles = c;
                            var u = l.render;
                            l.render = function(e, t) {
                                return c.call(t),
                                u(e, t)
                            }
                        } else {
                            var d = l.beforeCreate;
                            l.beforeCreate = d ? [].concat(d, c) : [c]
                        }
                    return {
                        exports: e,
                        options: l
                    }
                }
                n.d(t, "a", (function() {
                    return i
                }
                ))
            },
            11: function(e, t) {
                e.exports = n("2200")
            },
            22: function(e, t) {
                e.exports = n("c86c")
            },
            4: function(e, t) {
                e.exports = n("0ba1")
            },
            88: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = function() {
                    var e = this
                      , t = e.$createElement
                      , n = e._self._c || t;
                    return n("div", {
                        staticClass: "el-switch",
                        class: {
                            "is-disabled": e.switchDisabled,
                            "is-checked": e.checked
                        },
                        attrs: {
                            role: "switch",
                            "aria-checked": e.checked,
                            "aria-disabled": e.switchDisabled
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(),
                                e.switchValue(t)
                            }
                        }
                    }, [n("input", {
                        ref: "input",
                        staticClass: "el-switch__input",
                        attrs: {
                            type: "checkbox",
                            id: e.id,
                            name: e.name,
                            "true-value": e.activeValue,
                            "false-value": e.inactiveValue,
                            disabled: e.switchDisabled
                        },
                        on: {
                            change: e.handleChange,
                            keydown: function(t) {
                                return !("button"in t) && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.switchValue(t)
                            }
                        }
                    }), e.inactiveIconClass || e.inactiveText ? n("span", {
                        class: ["el-switch__label", "el-switch__label--left", e.checked ? "" : "is-active"]
                    }, [e.inactiveIconClass ? n("i", {
                        class: [e.inactiveIconClass]
                    }) : e._e(), !e.inactiveIconClass && e.inactiveText ? n("span", {
                        attrs: {
                            "aria-hidden": e.checked
                        }
                    }, [e._v(e._s(e.inactiveText))]) : e._e()]) : e._e(), n("span", {
                        ref: "core",
                        staticClass: "el-switch__core",
                        style: {
                            width: e.coreWidth + "px"
                        }
                    }), e.activeIconClass || e.activeText ? n("span", {
                        class: ["el-switch__label", "el-switch__label--right", e.checked ? "is-active" : ""]
                    }, [e.activeIconClass ? n("i", {
                        class: [e.activeIconClass]
                    }) : e._e(), !e.activeIconClass && e.activeText ? n("span", {
                        attrs: {
                            "aria-hidden": !e.checked
                        }
                    }, [e._v(e._s(e.activeText))]) : e._e()]) : e._e()])
                }
                  , o = [];
                i._withStripped = !0;
                var a = n(4)
                  , s = n.n(a)
                  , r = n(22)
                  , c = n.n(r)
                  , l = n(11)
                  , u = n.n(l)
                  , d = {
                    name: "ElSwitch",
                    mixins: [c()("input"), u.a, s.a],
                    inject: {
                        elForm: {
                            default: ""
                        }
                    },
                    props: {
                        value: {
                            type: [Boolean, String, Number],
                            default: !1
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        width: {
                            type: Number,
                            default: 40
                        },
                        activeIconClass: {
                            type: String,
                            default: ""
                        },
                        inactiveIconClass: {
                            type: String,
                            default: ""
                        },
                        activeText: String,
                        inactiveText: String,
                        activeColor: {
                            type: String,
                            default: ""
                        },
                        inactiveColor: {
                            type: String,
                            default: ""
                        },
                        activeValue: {
                            type: [Boolean, String, Number],
                            default: !0
                        },
                        inactiveValue: {
                            type: [Boolean, String, Number],
                            default: !1
                        },
                        name: {
                            type: String,
                            default: ""
                        },
                        validateEvent: {
                            type: Boolean,
                            default: !0
                        },
                        id: String
                    },
                    data: function() {
                        return {
                            coreWidth: this.width
                        }
                    },
                    created: function() {
                        ~[this.activeValue, this.inactiveValue].indexOf(this.value) || this.$emit("input", this.inactiveValue)
                    },
                    computed: {
                        checked: function() {
                            return this.value === this.activeValue
                        },
                        switchDisabled: function() {
                            return this.disabled || (this.elForm || {}).disabled
                        }
                    },
                    watch: {
                        checked: function() {
                            this.$refs.input.checked = this.checked,
                            (this.activeColor || this.inactiveColor) && this.setBackgroundColor(),
                            this.validateEvent && this.dispatch("ElFormItem", "el.form.change", [this.value])
                        }
                    },
                    methods: {
                        handleChange: function(e) {
                            var t = this
                              , n = this.checked ? this.inactiveValue : this.activeValue;
                            this.$emit("input", n),
                            this.$emit("change", n),
                            this.$nextTick((function() {
                                t.$refs.input.checked = t.checked
                            }
                            ))
                        },
                        setBackgroundColor: function() {
                            var e = this.checked ? this.activeColor : this.inactiveColor;
                            this.$refs.core.style.borderColor = e,
                            this.$refs.core.style.backgroundColor = e
                        },
                        switchValue: function() {
                            !this.switchDisabled && this.handleChange()
                        },
                        getMigratingConfig: function() {
                            return {
                                props: {
                                    "on-color": "on-color is renamed to active-color.",
                                    "off-color": "off-color is renamed to inactive-color.",
                                    "on-text": "on-text is renamed to active-text.",
                                    "off-text": "off-text is renamed to inactive-text.",
                                    "on-value": "on-value is renamed to active-value.",
                                    "off-value": "off-value is renamed to inactive-value.",
                                    "on-icon-class": "on-icon-class is renamed to active-icon-class.",
                                    "off-icon-class": "off-icon-class is renamed to inactive-icon-class."
                                }
                            }
                        }
                    },
                    mounted: function() {
                        this.coreWidth = this.width || 40,
                        (this.activeColor || this.inactiveColor) && this.setBackgroundColor(),
                        this.$refs.input.checked = this.checked
                    }
                }
                  , f = d
                  , h = n(0)
                  , p = Object(h["a"])(f, i, o, !1, null, null, null);
                p.options.__file = "packages/switch/src/component.vue";
                var v = p.exports;
                v.install = function(e) {
                    e.component(v.name, v)
                }
                ;
                t["default"] = v
            }
        })
    },
    bbd5: function(e, t, n) {
        e.exports = function(e) {
            var t = {};
            function n(i) {
                if (t[i])
                    return t[i].exports;
                var o = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i
                })
            }
            ,
            n.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var i = Object.create(null);
                if (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var o in e)
                        n.d(i, o, function(t) {
                            return e[t]
                        }
                        .bind(null, o));
                return i
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "/dist/",
            n(n.s = 96)
        }({
            0: function(e, t, n) {
                "use strict";
                function i(e, t, n, i, o, a, s, r) {
                    var c, l = "function" === typeof e ? e.options : e;
                    if (t && (l.render = t,
                    l.staticRenderFns = n,
                    l._compiled = !0),
                    i && (l.functional = !0),
                    a && (l._scopeId = "data-v-" + a),
                    s ? (c = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                        e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                        o && o.call(this, e),
                        e && e._registeredComponents && e._registeredComponents.add(s)
                    }
                    ,
                    l._ssrRegister = c) : o && (c = r ? function() {
                        o.call(this, this.$root.$options.shadowRoot)
                    }
                    : o),
                    c)
                        if (l.functional) {
                            l._injectStyles = c;
                            var u = l.render;
                            l.render = function(e, t) {
                                return c.call(t),
                                u(e, t)
                            }
                        } else {
                            var d = l.beforeCreate;
                            l.beforeCreate = d ? [].concat(d, c) : [c]
                        }
                    return {
                        exports: e,
                        options: l
                    }
                }
                n.d(t, "a", (function() {
                    return i
                }
                ))
            },
            15: function(e, t) {
                e.exports = n("9c67")
            },
            4: function(e, t) {
                e.exports = n("0ba1")
            },
            96: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = function() {
                    var e = this
                      , t = e.$createElement
                      , n = e._self._c || t;
                    return n("transition", {
                        attrs: {
                            name: "el-drawer-fade"
                        },
                        on: {
                            "after-enter": e.afterEnter,
                            "after-leave": e.afterLeave
                        }
                    }, [n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.visible,
                            expression: "visible"
                        }],
                        staticClass: "el-drawer__wrapper",
                        attrs: {
                            tabindex: "-1"
                        }
                    }, [n("div", {
                        staticClass: "el-drawer__container",
                        class: e.visible && "el-drawer__open",
                        attrs: {
                            role: "document",
                            tabindex: "-1"
                        },
                        on: {
                            click: function(t) {
                                return t.target !== t.currentTarget ? null : e.handleWrapperClick(t)
                            }
                        }
                    }, [n("div", {
                        ref: "drawer",
                        staticClass: "el-drawer",
                        class: [e.direction, e.customClass],
                        style: e.isHorizontal ? "width: " + e.size : "height: " + e.size,
                        attrs: {
                            "aria-modal": "true",
                            "aria-labelledby": "el-drawer__title",
                            "aria-label": e.title,
                            role: "dialog",
                            tabindex: "-1"
                        }
                    }, [e.withHeader ? n("header", {
                        staticClass: "el-drawer__header",
                        attrs: {
                            id: "el-drawer__title"
                        }
                    }, [e._t("title", [n("span", {
                        attrs: {
                            role: "heading",
                            title: e.title
                        }
                    }, [e._v(e._s(e.title))])]), e.showClose ? n("button", {
                        staticClass: "el-drawer__close-btn",
                        attrs: {
                            "aria-label": "close " + (e.title || "drawer"),
                            type: "button"
                        },
                        on: {
                            click: e.closeDrawer
                        }
                    }, [n("i", {
                        staticClass: "el-dialog__close el-icon el-icon-close"
                    })]) : e._e()], 2) : e._e(), e.rendered ? n("section", {
                        staticClass: "el-drawer__body"
                    }, [e._t("default")], 2) : e._e()])])])])
                }
                  , o = [];
                i._withStripped = !0;
                var a = n(15)
                  , s = n.n(a)
                  , r = n(4)
                  , c = n.n(r)
                  , l = {
                    name: "ElDrawer",
                    mixins: [s.a, c.a],
                    props: {
                        appendToBody: {
                            type: Boolean,
                            default: !1
                        },
                        beforeClose: {
                            type: Function
                        },
                        customClass: {
                            type: String,
                            default: ""
                        },
                        closeOnPressEscape: {
                            type: Boolean,
                            default: !0
                        },
                        destroyOnClose: {
                            type: Boolean,
                            default: !1
                        },
                        modal: {
                            type: Boolean,
                            default: !0
                        },
                        direction: {
                            type: String,
                            default: "rtl",
                            validator: function(e) {
                                return -1 !== ["ltr", "rtl", "ttb", "btt"].indexOf(e)
                            }
                        },
                        modalAppendToBody: {
                            type: Boolean,
                            default: !0
                        },
                        showClose: {
                            type: Boolean,
                            default: !0
                        },
                        size: {
                            type: String,
                            default: "30%"
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        visible: {
                            type: Boolean
                        },
                        wrapperClosable: {
                            type: Boolean,
                            default: !0
                        },
                        withHeader: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: {
                        isHorizontal: function() {
                            return "rtl" === this.direction || "ltr" === this.direction
                        }
                    },
                    data: function() {
                        return {
                            closed: !1,
                            prevActiveElement: null
                        }
                    },
                    watch: {
                        visible: function(e) {
                            var t = this;
                            e ? (this.closed = !1,
                            this.$emit("open"),
                            this.appendToBody && document.body.appendChild(this.$el),
                            this.prevActiveElement = document.activeElement) : (this.closed || this.$emit("close"),
                            this.$nextTick((function() {
                                t.prevActiveElement && t.prevActiveElement.focus()
                            }
                            )))
                        }
                    },
                    methods: {
                        afterEnter: function() {
                            this.$emit("opened")
                        },
                        afterLeave: function() {
                            this.$emit("closed")
                        },
                        hide: function(e) {
                            !1 !== e && (this.$emit("update:visible", !1),
                            this.$emit("close"),
                            !0 === this.destroyOnClose && (this.rendered = !1),
                            this.closed = !0)
                        },
                        handleWrapperClick: function() {
                            this.wrapperClosable && this.closeDrawer()
                        },
                        closeDrawer: function() {
                            "function" === typeof this.beforeClose ? this.beforeClose(this.hide) : this.hide()
                        },
                        handleClose: function() {
                            this.closeDrawer()
                        }
                    },
                    mounted: function() {
                        this.visible && (this.rendered = !0,
                        this.open())
                    },
                    destroyed: function() {
                        this.appendToBody && this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
                    }
                }
                  , u = l
                  , d = n(0)
                  , f = Object(d["a"])(u, i, o, !1, null, null, null);
                f.options.__file = "packages/drawer/src/main.vue";
                var h = f.exports;
                h.install = function(e) {
                    e.component(h.name, h)
                }
                ;
                t["default"] = h
            }
        })
    },
    daeb: function(e, t, n) {},
    e23e: function(e, t, n) {},
    ead5: function(e, t, n) {
        "use strict";
        n("d6de"),
        n("8d0f"),
        n("ef1f"),
        n("defa");
        var i = n("56d4")
          , o = n.n(i)
          , a = (n("df26"),
        n("42c2"))
          , s = n("f5f2")
          , r = n("30c6")
          , c = n("ce37")
          , l = n("f1da")
          , u = window.top.__Walle_Devtools
          , d = function() {
            function e() {
                Object(s["a"])(this, e),
                Object(c["a"])(this, "url", void 0),
                Object(c["a"])(this, "state", !1),
                Object(c["a"])(this, "isKeepAlive", !1),
                this.getUrl()
            }
            return Object(r["a"])(e, [{
                key: "keepalive",
                value: function() {
                    var e = Object(a["a"])(o.a.mark((function e() {
                        return o.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.isKeepAlive) {
                                        e.next = 4;
                                        break
                                    }
                                    return this.isKeepAlive = !0,
                                    e.next = 4,
                                    n.e("chunk-2d225842").then(n.bind(null, "e573"));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "setState",
                value: function(e) {
                    this.state = e,
                    this.state && this.keepalive()
                }
            }, {
                key: "setUrl",
                value: function(e) {
                    this.url = e,
                    localStorage.setItem("TWSIT_QUANT_WEBHOOK_URL", this.url)
                }
            }, {
                key: "getUrl",
                value: function() {
                    return this.url = localStorage.getItem("TWSIT_QUANT_WEBHOOK_URL") || "",
                    this.url
                }
            }, {
                key: "send",
                value: function(e) {
                    try {
                        if (!this.url)
                            return;
                        var t = JSON.stringify(e);
                        (this.url.startsWith("https://qyapi.weixin.qq.com/cgi-bin/webhook") || this.url.startsWith("https://oapi.dingtalk.com/robot")) && (t = JSON.stringify({
                            msgtype: "text",
                            text: {
                                content: e.description
                            }
                        })),
                        (u || this.state) && Object(l["a"])("POST", this.url, t)
                    } catch (n) {
                        console.warn("#Webhook#", n)
                    }
                }
            }]),
            e
        }();
        t["a"] = new d
    },
    ec2b: function(e, t, n) {},
    fba7: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("el-drawer", {
                attrs: {
                    "custom-class": "twist-drawer",
                    visible: e.isVisible,
                    direction: "ltr"
                },
                on: {
                    "update:visible": function(t) {
                        e.isVisible = t
                    },
                    close: function(t) {
                        return e.$emit("update:visible", !1)
                    }
                }
            }, [n("div", {
                staticClass: "drawer-box"
            }, [e.user.id ? n("ul", {
                staticClass: "user"
            }, [n("li", {
                attrs: {
                    title: "用户名"
                }
            }, [n("i", {
                staticClass: "el-icon-user"
            }), e._v(" " + e._s(e.user.id) + " "), "user" !== e.user.vip ? n("span", {
                attrs: {
                    title: "用户等级"
                }
            }, [n("i", {
                staticClass: "el-icon-medal vip"
            }), e._v(" " + e._s(e.user.vip.toUpperCase()) + " " + e._s(e.date >= e.user.edate ? "(已到期)" : ""))]) : e._e(), "user" === e.user.vip ? n("span", {
                attrs: {
                    title: "用户等级"
                }
            }, [n("i", {
                staticClass: "el-icon-medal vip"
            }), e._v(" " + e._s(e.user.vip.toUpperCase()))]) : e._e()]), e.user.sdate ? n("li", {
                attrs: {
                    title: "服务起止时间"
                }
            }, [n("i", {
                staticClass: "el-icon-date"
            }), e._v(" " + e._s(e.user.sdate) + "~" + e._s(e.user.edate) + " ")]) : e._e()]) : e._e(), n("h4", [n("span", {
                staticClass: "title"
            }, [e._v("关注标的 ( " + e._s(e.follow.length) + " )")]), n("ul", {
                staticClass: "markets"
            }, [n("li", {
                class: {
                    selected: "all" === e.market
                },
                on: {
                    click: function(t) {
                        e.market = "all"
                    }
                }
            }, [e._v("全市场")]), n("li", {
                class: {
                    selected: "cn" === e.market
                },
                on: {
                    click: function(t) {
                        e.market = "cn"
                    }
                }
            }, [e._v("沪深")]), n("li", {
                class: {
                    selected: "hk" === e.market
                },
                on: {
                    click: function(t) {
                        e.market = "hk"
                    }
                }
            }, [e._v("港股")]), n("li", {
                class: {
                    selected: "us" === e.market
                },
                on: {
                    click: function(t) {
                        e.market = "us"
                    }
                }
            }, [e._v("美股")]), n("li", {
                class: {
                    selected: "coin" === e.market
                },
                on: {
                    click: function(t) {
                        e.market = "coin"
                    }
                }
            }, [e._v("加密货币")]), n("li", {
                class: {
                    selected: "other" === e.market
                },
                on: {
                    click: function(t) {
                        e.market = "other"
                    }
                }
            }, [e._v("期货和其他")])])]), n("ul", {
                staticClass: "watchlist"
            }, e._l(e.follow, (function(t) {
                return n("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isCurMarket(t.code),
                        expression: "isCurMarket(item.code)"
                    }],
                    key: t.code,
                    class: {
                        selected: e.code === t.code
                    }
                }, [n("span", {
                    staticClass: "name-wrap"
                }, [n("span", {
                    staticClass: "name",
                    attrs: {
                        title: "点击访问标的走势"
                    },
                    on: {
                        click: function(n) {
                            return e.$emit("switchTarget", t.code)
                        }
                    }
                }, [e._v(e._s(t.name.toUpperCase()))])]), n("span", {
                    attrs: {
                        title: "点击访问标的走势"
                    },
                    on: {
                        click: function(n) {
                            return e.$emit("switchTarget", t.code)
                        }
                    }
                }, [e._v(e._s(t.code.toUpperCase()))]), n("span", {
                    attrs: {
                        title: "取消关注"
                    },
                    on: {
                        click: function(n) {
                            return e.watchlist.remove("follow", t.code)
                        }
                    }
                }, [n("i", {
                    staticClass: "el-icon-close star"
                })])])
            }
            )), 0), n("h4", [n("span", {
                staticClass: "title"
            }, [e._v("近期浏览 ( " + e._s(e.histroy.length) + " )")])]), n("ul", {
                staticClass: "histroy"
            }, e._l(e.histroy, (function(t) {
                return n("li", {
                    key: t.code
                }, [n("span", {
                    staticClass: "name-wrap"
                }, [n("span", {
                    staticClass: "name",
                    attrs: {
                        title: "点击访问标的走势"
                    },
                    on: {
                        click: function(n) {
                            return e.$emit("switchTarget", t.code)
                        }
                    }
                }, [e._v(e._s(t.name.toUpperCase()))])]), n("span", {
                    attrs: {
                        title: "点击访问标的走势"
                    },
                    on: {
                        click: function(n) {
                            return e.$emit("switchTarget", t.code)
                        }
                    }
                }, [e._v(e._s(t.code.toUpperCase()))]), n("span", {
                    attrs: {
                        title: "关注标的"
                    },
                    on: {
                        click: function(n) {
                            return e.watchlist.insert("follow", t.code, t.name)
                        }
                    }
                }, [n("i", {
                    class: {
                        "el-icon-star-off": !e.watchlist.has("follow", t.code, t.name),
                        "el-icon-star-on": e.watchlist.has("follow", t.code, t.name),
                        star: !0
                    }
                })])])
            }
            )), 0), "svip" === e.user.vip ? n("div", {
                staticClass: "webhook"
            }, [n("h4", [n("span", {
                staticClass: "title"
            }, [e._v("Webhook地址")]), n("a", {
                on: {
                    click: function(t) {
                        e.isShowWebhookDoc = !e.isShowWebhookDoc
                    }
                }
            }, [e._v("Webhook订阅接入说明")])]), n("el-input", {
                attrs: {
                    placeholder: "https://",
                    clearable: ""
                },
                on: {
                    input: e.setWebhook
                },
                model: {
                    value: e.webhook,
                    callback: function(t) {
                        e.webhook = t
                    },
                    expression: "webhook"
                }
            }), n("p", [e._v("用于浏览标的买卖点状态变化时推送信号 监控标的限制5个")]), n("h4", {
                staticStyle: {
                    "margin-top": "20px"
                }
            }, [n("span", {
                staticClass: "title"
            }, [e._v("Webhook监控状态")]), e._v(" "), n("a", [e._v("( 当前可监控标的 - "), n("b", [e._v(e._s(e.code.toUpperCase()))]), e._v(" 监控状态 - "), n("b", [e._v(e._s(e.webhookState ? "打开" : "关闭"))]), e._v(" ) "), n("el-switch", {
                staticStyle: {
                    "padding-left": "10px"
                },
                attrs: {
                    "active-color": "#FFC82C"
                },
                on: {
                    change: e.setWebhookState
                },
                model: {
                    value: e.webhookState,
                    callback: function(t) {
                        e.webhookState = t
                    },
                    expression: "webhookState"
                }
            })], 1)]), n("el-dialog", {
                staticClass: "webhook-doc",
                attrs: {
                    title: "壹缠Webhook订阅接入说明",
                    visible: e.isShowWebhookDoc,
                    width: "60%",
                    modal: !1,
                    "append-to-body": !0
                },
                on: {
                    "update:visible": function(t) {
                        e.isShowWebhookDoc = t
                    }
                }
            }, [n("h4", [e._v("订阅接入须知")]), n("p", [e._v("壹缠Webhook 用于监控标的买卖点状态变化时 实时推送信号")]), n("p", [e._v("壹缠Webhook 打开"), n("b", [e._v("Webhook监控状态")]), e._v("开关 即可开始当前标的买卖点监控 (注意监控状态下当前页不可切换标的 否则监控标的将自动切换)")]), n("p", [e._v("壹缠Webhook 信号监控过程 "), n("b", [e._v("当前监控标的页面不可关闭(需确保浏览器不后台运行 电脑不休眠)")]), e._v(" 否则后台会释放当前标的缠论分析进程资源")]), n("p", [e._v("壹缠Webhook 支持多个标的监控 "), n("b", [e._v("监控标的限制5个")]), e._v(" 打开多个标的页面 即可多个标的监控 (多周期页面不支持标的监控)")]), n("p", [e._v("壹缠Webhook 使用前必须安装 "), n("b", [n("a", {
                attrs: {
                    href: "/plugin/壹缠浏览器插件安装说明.pdf",
                    target: "_blank"
                }
            }, [e._v("壹缠浏览器插件")])])]), n("h4", [e._v("支持通知到企业微信")]), n("p", [e._v("壹缠Webhook 兼容支持企业微信webhook地址 用于直接将买卖点信号实时通知到用户 推送数据为数据结构中的description字段 即语义化内容 ")]), n("h4", [e._v("Webhook推送数据结构")]), n("p", [e._v("Webhook推送方式为 POST, 数据类型为 JSON, 数据结构示例如下: ")]), n("pre", [e._v('{\n  "symbol": "SH000001",\n  "name": "上证指数",\n  "level": "DAY", // 标的K线周期\n  "signal": {\n    "type": "3", // 缠论买卖点类型 \n    "direction": "up", // 买卖点方向\n    "isConfirm": false, // 买卖点是否确认\n    "timestamp": 1597708800000, // 信号时间戳\n    "tip": "3买准备"\n  },\n  "kline": {\n    "day": "2020-09-28",\n    "close": "3217.535",\n    "open": "3224.977",\n    "high": "3238.183",\n    "low": "3210.893",\n    "volume": "15598278300"\n  },\n  "description": "SH000001 上证指数 3589.75 DAY 3买准备(向下新段成立)"\n}\n            ')])])], 1) : e._e(), n("ul", {
                staticClass: "opration"
            }, [n("li", {
                attrs: {
                    title: "导出全站数据 包括账户、自选表、筛选器等数据"
                },
                on: {
                    click: e.downloadData
                }
            }, [n("i", {
                staticClass: "el-icon-download"
            }), e._v(" 数据导出 ")]), n("li", {
                attrs: {
                    title: "导入全站数据 包括账户、自选表、筛选器等数据"
                },
                on: {
                    click: e.importData
                }
            }, [n("i", {
                staticClass: "el-icon-upload2"
            }), e._v(" 数据导入 ")])])])])
        }
          , o = []
          , a = (n("8d0d"),
        n("868d"),
        n("9a51"),
        n("c78b"),
        n("defa"),
        n("56d4"))
          , s = n.n(a)
          , r = (n("df26"),
        n("42c2"))
          , c = (n("6770"),
        n("148d"),
        n("e3ca"))
          , l = n.n(c)
          , u = (n("33ef2"),
        n("b0d1"))
          , d = n.n(u)
          , f = (n("daeb"),
        n("7086"))
          , h = n.n(f)
          , p = (n("ec2b"),
        n("52e5"))
          , v = n.n(p)
          , b = (n("9ddb"),
        n("bbd5"))
          , _ = n.n(b)
          , m = n("f9b5")
          , w = n("2b43")
          , y = (n("d6de"),
        n("8d0f"),
        n("68b8"),
        n("ef1f"),
        n("f3b8"),
        n("918c"),
        n("b151"),
        n("f5f2"))
          , k = n("30c6")
          , g = n("ce37")
          , C = n("7ada")
          , S = n.n(C)
          , x = function() {
            function e() {
                Object(y["a"])(this, e),
                Object(g["a"])(this, "keys", ["TWIST_QUANT_JOINQUANT_DATA", "TWIST_QUANT_WATCHLIST_DATA", "TWIST_QUANT_SEARCH_DATA"])
            }
            return Object(k["a"])(e, [{
                key: "toFile",
                value: function() {
                    var e = Object(r["a"])(s.a.mark((function e(t, n) {
                        var i;
                        return s.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = new Blob([JSON.stringify(n, null, "\t")],{
                                        type: "application/json;charset=utf-8"
                                    }),
                                    e.abrupt("return", S.a.saveAs(i, t));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "upload",
                value: function() {
                    var e = Object(r["a"])(s.a.mark((function e() {
                        var t, n = this;
                        return s.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    t = document.createElement("input"),
                                    t.type = "file",
                                    t.onchange = function() {
                                        n.recover(t.files)
                                    }
                                    ,
                                    t.click();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "download",
                value: function() {
                    var e = Object(r["a"])(s.a.mark((function e() {
                        var t, n, i, o, a, r, c, l;
                        return s.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    for (t = {},
                                    n = !0,
                                    i = !1,
                                    o = void 0,
                                    e.prev = 4,
                                    a = this.keys[Symbol.iterator](); !(n = (r = a.next()).done); n = !0)
                                        c = r.value,
                                        l = localStorage.getItem(c),
                                        l && (t[c] = l);
                                    e.next = 12;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e["catch"](4),
                                    i = !0,
                                    o = e.t0;
                                case 12:
                                    e.prev = 12,
                                    e.prev = 13,
                                    n || null == a["return"] || a["return"]();
                                case 15:
                                    if (e.prev = 15,
                                    !i) {
                                        e.next = 18;
                                        break
                                    }
                                    throw o;
                                case 18:
                                    return e.finish(15);
                                case 19:
                                    return e.finish(12);
                                case 20:
                                    this.toFile("twist-quant.json", t);
                                case 21:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[4, 8, 12, 20], [13, , 15, 19]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "recover",
                value: function() {
                    var e = Object(r["a"])(s.a.mark((function e(t) {
                        var n, i, o, a, r, c, u, d;
                        return s.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    t[0]) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5,
                                    t[0].text();
                                case 5:
                                    if (n = e.sent,
                                    n) {
                                        e.next = 9;
                                        break
                                    }
                                    return l.a.info("数据异常"),
                                    e.abrupt("return");
                                case 9:
                                    i = JSON.parse(n),
                                    o = !0,
                                    a = !1,
                                    r = void 0,
                                    e.prev = 13,
                                    c = this.keys[Symbol.iterator]();
                                case 15:
                                    if (o = (u = c.next()).done) {
                                        e.next = 23;
                                        break
                                    }
                                    if (d = u.value,
                                    i[d]) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.abrupt("continue", 20);
                                case 19:
                                    localStorage.setItem(d, i[d]);
                                case 20:
                                    o = !0,
                                    e.next = 15;
                                    break;
                                case 23:
                                    e.next = 29;
                                    break;
                                case 25:
                                    e.prev = 25,
                                    e.t0 = e["catch"](13),
                                    a = !0,
                                    r = e.t0;
                                case 29:
                                    e.prev = 29,
                                    e.prev = 30,
                                    o || null == c["return"] || c["return"]();
                                case 32:
                                    if (e.prev = 32,
                                    !a) {
                                        e.next = 35;
                                        break
                                    }
                                    throw r;
                                case 35:
                                    return e.finish(32);
                                case 36:
                                    return e.finish(29);
                                case 37:
                                    l.a.info("导入成功"),
                                    setTimeout((function() {
                                        window.top.location.reload()
                                    }
                                    ), 3e3),
                                    e.next = 45;
                                    break;
                                case 41:
                                    throw e.prev = 41,
                                    e.t1 = e["catch"](0),
                                    l.a.info("导入异常"),
                                    e.t1;
                                case 45:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 41], [13, 25, 29, 37], [30, , 32, 36]])
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]),
            e
        }()
          , T = new x
          , O = n("ead5")
          , $ = n("c206")
          , j = n.n($)
          , E = n("4f2b");
        E["default"].component(_.a.name, _.a),
        E["default"].component(v.a.name, v.a),
        E["default"].component(h.a.name, h.a),
        E["default"].component(d.a.name, d.a);
        var W = window.top.__Walle_Devtools
          , B = {
            props: ["visible", "code"],
            data: function() {
                return {
                    date: j()().format("YYYYMMDD"),
                    user: {
                        id: "",
                        sdate: "",
                        edate: "",
                        vip: ""
                    },
                    webhook: O["a"].url,
                    webhookState: !1,
                    market: "all",
                    follow: [],
                    histroy: [],
                    watchlist: w["a"],
                    isVisible: !1,
                    isShowWebhookDoc: !1,
                    isDevtools: W
                }
            },
            watch: {
                visible: function(e) {
                    this.isVisible = e
                },
                code: function(e, t) {
                    this.webhookState && e !== t && (this.msgInstance && this.msgInstance.close(),
                    this.msgInstance = l.a.info({
                        message: "Webhook监控标的为 " + this.$props.code.toUpperCase() + " 注意监控状态下当前页 不可切换标的 不可关闭",
                        showClose: !0,
                        duration: 0,
                        offset: 50
                    }))
                }
            },
            mounted: function() {
                this.follow = w["a"].follow,
                this.histroy = w["a"].histroy,
                this.user.id = m["a"].user.id,
                this.user.sdate = m["a"].user.sdate,
                this.user.edate = m["a"].user.edate,
                this.user.vip = m["a"].vip()
            },
            methods: {
                isCurMarket: function(e) {
                    return "all" === this.market || this.market === this.marketType(e)
                },
                marketType: function(e) {
                    return e = e.toUpperCase(),
                    e.startsWith("SH") || e.startsWith("SZ") || e.endsWith(".XSHG") || e.endsWith(".XSHE") ? "cn" : e.startsWith("HK") ? "hk" : e.startsWith("$") ? "us" : e.includes("-") ? "coin" : "other"
                },
                downloadData: function() {
                    return Object(r["a"])(s.a.mark((function e() {
                        return s.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    T.download();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                importData: function() {
                    return Object(r["a"])(s.a.mark((function e() {
                        return s.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    T.upload();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                setWebhook: function() {
                    var e = this;
                    return Object(r["a"])(s.a.mark((function t() {
                        return s.a.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    O["a"].setUrl(e.webhook);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                setWebhookState: function() {
                    var e = this;
                    return Object(r["a"])(s.a.mark((function t() {
                        return s.a.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    e.webhookState ? e.msgInstance = l.a.info({
                                        message: "Webhook监控标的为 " + e.$props.code.toUpperCase() + " 注意监控状态下当前页 不可切换标的 不可关闭",
                                        showClose: !0,
                                        duration: 0,
                                        offset: 50
                                    }) : e.msgInstance && e.msgInstance.close(),
                                    O["a"].setState(e.webhookState);
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        }
          , A = B
          , U = (n("8c58"),
        n("2be6"))
          , D = Object(U["a"])(A, i, o, !1, null, null, null);
        t["default"] = D.exports
    }
}]);
