(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d21f84a"], {
        d9ba: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, "EastMoneyCrawler", (function() {
                return Dt
            }));
            var n = a("f5f2"),
                r = a("30c6"),
                i = (a("d6de"), a("8d0f"), a("68b8"), a("d86f"), a("8d0d"), a("868d"), a("ef1f"), a("c78b"), a("f3b8"), a("918c"), a("56d4")),
                s = a.n(i),
                c = (a("df26"), a("42c2")),
                o = a("ce37"),
                f = a("f1da"),
                u = (a("7004"), a("cf28")),
                l = function() {
                    function t() {
                        Object(n["a"])(this, t), Object(o["a"])(this, "blocks", {
                            concept: [],
                            industry: []
                        }), Object(o["a"])(this, "timestamp", void 0)
                    }
                    return Object(r["a"])(t, [{
                        key: "getConceptUrl",
                        value: function() {
                            return "http://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=20&po=1&np=1&fltt=2&invt=2&fid=f3&fs=m:90+t:3&fields=f12,f14,f104,f105"
                        }
                    }, {
                        key: "getIndustryUrl",
                        value: function() {
                            return "http://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=20&po=1&np=1&fields=f12,f13,f14,f62&fid=f62&fs=m:90+t:2"
                        }
                    }, {
                        key: "createConceptBlocks",
                        value: function(t) {
                            var e = JSON.parse(t);
                            if (e.data && e.data.diff) {
                                var a = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (var i, s = e.data.diff[Symbol.iterator](); !(a = (i = s.next()).done); a = !0) {
                                        var c = i.value,
                                            o = ["????????????", "????????????"];
                                        o.includes(c.f14) || this.blocks.concept.push({
                                            code: c.f12,
                                            name: c.f14,
                                            up: c.f104,
                                            down: c.f105
                                        })
                                    }
                                } catch (f) {
                                    n = !0, r = f
                                } finally {
                                    try {
                                        a || null == s["return"] || s["return"]()
                                    } finally {
                                        if (n) throw r
                                    }
                                }
                            }
                        }
                    }, {
                        key: "createIndustryBlocks",
                        value: function(t) {
                            var e = JSON.parse(t);
                            if (e.data && e.data.diff) {
                                var a = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (var i, s = e.data.diff[Symbol.iterator](); !(a = (i = s.next()).done); a = !0) {
                                        var c = i.value;
                                        this.blocks.industry.push({
                                            code: c.f12,
                                            name: c.f14
                                        })
                                    }
                                } catch (o) {
                                    n = !0, r = o
                                } finally {
                                    try {
                                        a || null == s["return"] || s["return"]()
                                    } finally {
                                        if (n) throw r
                                    }
                                }
                            }
                        }
                    }, {
                        key: "capture",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e, a, n, r, i;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, e = (new Date).getTime(), !(this.timestamp && e - this.timestamp < 3e5)) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", this.blocks);
                                        case 4:
                                            return this.timestamp = e, t.next = 7, Promise.all([f["b"].get(this.getConceptUrl(), null), f["b"].get(this.getIndustryUrl(), null)]);
                                        case 7:
                                            return a = t.sent, n = Object(u["a"])(a, 2), r = n[0], i = n[1], this.createConceptBlocks(r), this.createIndustryBlocks(i), console.log("#EastMoneyBlockCrawler# capture ..."), t.abrupt("return", this.blocks);
                                        case 17:
                                            t.prev = 17, t.t0 = t["catch"](0), console.warn("#EastMoneyBlockCrawler# capture fail", t.t0);
                                        case 20:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 17]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                p = new l,
                h = (a("cfce"), {
                    key: "change-top10",
                    name: "??????"
                }),
                d = {
                    key: "change-last10",
                    name: "??????"
                },
                v = {
                    key: "volume-top10",
                    name: "?????????"
                },
                m = {
                    key: "turnover-top10",
                    name: "?????????"
                },
                k = {
                    key: "qrr-top10",
                    name: "??????"
                },
                y = {
                    key: "amount-top10",
                    name: "???????????????"
                },
                b = {
                    key: "netinflow-top10",
                    name: "???????????????"
                },
                w = {
                    key: "supinflow-top10",
                    name: "??????????????????"
                },
                O = {
                    key: "biginflow-top10",
                    name: "???????????????"
                },
                j = {
                    key: "midinflow-top10",
                    name: "???????????????"
                },
                g = {
                    key: "supinflowrate-top10",
                    name: "????????????????????????"
                },
                x = {
                    key: "biginflowrate-top10",
                    name: "?????????????????????"
                },
                S = {
                    key: "midinflowrate-top10",
                    name: "?????????????????????"
                },
                M = {
                    key: "netinflowrate-top10",
                    name: "????????????????????????"
                },
                C = {
                    key: "netinflowrate-3days-top10",
                    name: "3???????????????????????????"
                },
                q = {
                    key: "netinflowrate-5days-top10",
                    name: "5???????????????????????????"
                },
                F = {
                    key: "netinflowrate-10days-top10",
                    name: "10???????????????????????????"
                },
                E = {
                    key: "hgt-top10",
                    name: "?????????"
                },
                B = {
                    key: "sgt-top10",
                    name: "?????????"
                },
                U = {
                    key: "concept-blocka-top10",
                    name: "????????????A"
                },
                D = {
                    key: "concept-blockb-top10",
                    name: "????????????B"
                },
                J = {
                    key: "concept-blockc-top10",
                    name: "????????????C"
                },
                N = {
                    key: "industry-blocka-top10",
                    name: "????????????A"
                },
                z = {
                    key: "industry-blockb-top10",
                    name: "????????????B"
                },
                K = {
                    key: "industry-blockc-top10",
                    name: "????????????C"
                },
                T = {
                    key: "bonds-change-top10",
                    name: "???????????????"
                },
                I = {
                    key: "bonds-netinflow-top10",
                    name: "??????????????????"
                },
                L = {
                    key: "bonds-netinflowrate-top10",
                    name: "??????????????????"
                },
                Y = {
                    key: "bonds-change2-top10",
                    name: "???????????????(??????)"
                },
                A = {
                    key: "bonds-netinflow2-top10",
                    name: "??????????????????(??????)"
                },
                W = {
                    key: "bonds-netinflowrate2-top10",
                    name: "??????????????????(??????)"
                },
                G = {
                    key: "market-index",
                    name: "????????????"
                },
                P = {
                    key: "market-top10",
                    name: "??????"
                },
                R = {
                    key: "price-top10",
                    name: "??????"
                },
                V = {
                    key: "ma-top10",
                    name: "????????????"
                },
                _ = {
                    key: "macd-top10",
                    name: "MACD??????"
                },
                H = {
                    key: "kdj-top10",
                    name: "KDJ??????"
                },
                Q = {
                    key: "rsi-top10",
                    name: "RSI??????"
                },
                X = {
                    key: "boll-top10",
                    name: "BOLL????????????"
                },
                Z = {
                    key: "compond-top10",
                    name: "????????????"
                },
                $ = {
                    key: "dragon-tiger-top10",
                    name: "????????????"
                },
                tt = {
                    key: "hot-top10",
                    name: "??????"
                },
                et = {
                    key: "trend-pattern-top10",
                    name: "????????????"
                },
                at = {
                    key: "trend-netinflow-top10",
                    name: "????????????"
                },
                nt = {
                    key: "trend-bonds-top10",
                    name: "???????????????"
                },
                rt = {
                    key: "trend-indicator-digger",
                    name: "??????-????????????"
                },
                it = {
                    key: "trend-ma-digger",
                    name: "??????-????????????"
                },
                st = {
                    key: "trend-netinflow-digger",
                    name: "??????-????????????"
                },
                ct = {
                    key: "trend-twist-g3-digger",
                    name: "??????-G3"
                },
                ot = {
                    key: "trend-twist-g2-digger",
                    name: "??????-G2"
                },
                ft = {
                    key: "trend-twist-g1-digger",
                    name: "??????-G1"
                },
                ut = function() {
                    function t() {
                        var e, a;
                        Object(n["a"])(this, t), Object(o["a"])(this, "normalMap", (e = {}, Object(o["a"])(e, G.key, G), Object(o["a"])(e, P.key, P), Object(o["a"])(e, R.key, R), Object(o["a"])(e, h.key, h), Object(o["a"])(e, v.key, v), Object(o["a"])(e, m.key, m), Object(o["a"])(e, k.key, k), Object(o["a"])(e, y.key, y), Object(o["a"])(e, b.key, b), Object(o["a"])(e, M.key, M), Object(o["a"])(e, V.key, V), Object(o["a"])(e, _.key, _), Object(o["a"])(e, H.key, H), Object(o["a"])(e, Q.key, Q), Object(o["a"])(e, X.key, X), Object(o["a"])(e, Z.key, Z), Object(o["a"])(e, et.key, et), Object(o["a"])(e, at.key, at), Object(o["a"])(e, nt.key, nt), Object(o["a"])(e, E.key, E), Object(o["a"])(e, B.key, B), Object(o["a"])(e, U.key, U), Object(o["a"])(e, D.key, D), Object(o["a"])(e, J.key, J), Object(o["a"])(e, N.key, N), Object(o["a"])(e, z.key, z), Object(o["a"])(e, K.key, K), Object(o["a"])(e, $.key, $), Object(o["a"])(e, tt.key, tt), e)), Object(o["a"])(this, "intervalMap", (a = {}, Object(o["a"])(a, ft.key, ft), Object(o["a"])(a, ot.key, ot), Object(o["a"])(a, ct.key, ct), Object(o["a"])(a, rt.key, rt), Object(o["a"])(a, it.key, it), Object(o["a"])(a, st.key, st), a)), Object(o["a"])(this, "map", Object.assign({}, this.normalMap, this.intervalMap))
                    }
                    return Object(r["a"])(t, [{
                        key: "getBondKeys",
                        value: function() {
                            return [T.key, I.key, L.key, Y.key, A.key, W.key]
                        }
                    }, {
                        key: "getNormalKeys",
                        value: function() {
                            var t = [];
                            for (var e in this.normalMap) t.push(this.key(e));
                            return t
                        }
                    }, {
                        key: "getIntervalKeys",
                        value: function() {
                            var t = [];
                            for (var e in this.intervalMap) t.push(this.key(e));
                            return t
                        }
                    }, {
                        key: "getNormalNames",
                        value: function() {
                            var t = [];
                            for (var e in this.normalMap) t.push(this.name(e));
                            return t
                        }
                    }, {
                        key: "getIntervalNames",
                        value: function() {
                            var t = [];
                            for (var e in this.intervalMap) t.push(this.name(e));
                            return t
                        }
                    }, {
                        key: "all",
                        value: function() {
                            return this.map
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            return this.map[t]
                        }
                    }, {
                        key: "keys",
                        value: function() {
                            var t = [];
                            for (var e in this.map) t.push(this.key(e));
                            return t
                        }
                    }, {
                        key: "names",
                        value: function() {
                            var t = {};
                            for (var e in this.map) t.push(this.name(e));
                            return t
                        }
                    }, {
                        key: "key",
                        value: function(t) {
                            return this.map[t].key
                        }
                    }, {
                        key: "name",
                        value: function(t) {
                            return this.map[t].name
                        }
                    }, {
                        key: "keyOf",
                        value: function(t) {
                            for (var e in this.map) {
                                var a = this.name(e);
                                if (a === t) return e
                            }
                        }
                    }]), t
                }(),
                lt = (new ut, function() {
                    function t(e) {
                        Object(n["a"])(this, t), Object(o["a"])(this, "name", void 0), Object(o["a"])(this, "blocks", {
                            concept: [],
                            industry: []
                        }), Object(o["a"])(this, "count", 0), Object(o["a"])(this, "stocks", []), this.name = e
                    }
                    return Object(r["a"])(t, [{
                        key: "getUrl",
                        value: function() {
                            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                a = "f8,f10,f12,f14,f3,f2,f37,f62,f112,f113,f184",
                                n = (t = {}, Object(o["a"])(t, P.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f20&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23"), Object(o["a"])(t, R.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f2&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23"), Object(o["a"])(t, h.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23"), Object(o["a"])(t, d.key, "http://push2.eastmoney.com/api/qt/clist/get?po=0&np=1&fltt=2&invt=2&fid=f3&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23"), Object(o["a"])(t, v.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f5&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23"), Object(o["a"])(t, m.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f8&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23"), Object(o["a"])(t, k.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f10&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23"), Object(o["a"])(t, w.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f66&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"), Object(o["a"])(t, O.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f72&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"), Object(o["a"])(t, j.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f78&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"), Object(o["a"])(t, g.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f69&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"), Object(o["a"])(t, x.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f75&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"), Object(o["a"])(t, S.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f81&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"), Object(o["a"])(t, b.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f62&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"), Object(o["a"])(t, M.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f184&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"), Object(o["a"])(t, C.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f268&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=3"), Object(o["a"])(t, q.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f165&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=5"), Object(o["a"])(t, F.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f175&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=10"), Object(o["a"])(t, E.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0707"), Object(o["a"])(t, B.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0804"), Object(o["a"])(t, U.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f62&fs=b:".concat(this.blocks.concept[0])), Object(o["a"])(t, D.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f62&fs=b:".concat(this.blocks.concept[1])), Object(o["a"])(t, J.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f62&fs=b:".concat(this.blocks.concept[2])), Object(o["a"])(t, N.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f62&fs=b:".concat(this.blocks.industry[0])), Object(o["a"])(t, z.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f62&fs=b:".concat(this.blocks.industry[1])), Object(o["a"])(t, K.key, "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f62&fs=b:".concat(this.blocks.industry[2])), t);
                            return "".concat(n[this.name], "&pn=").concat(e, "&pz=", 400, "&fields=").concat(a)
                        }
                    }, {
                        key: "createStocks",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t(e) {
                                var a, n, r, i, c, o, f, u, l, p, h, d, v, m, k, y, b, w;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (a = JSON.parse(e), a.data && a.data.diff) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            for (n = !0, r = !1, i = void 0, t.prev = 6, c = a.data.diff[Symbol.iterator](); !(n = (o = c.next()).done); n = !0) f = o.value, u = f["f12"], l = f["f14"], p = +f["f2"], h = +f["f3"], d = +f["f62"], v = +f["f184"], m = +f["f112"], k = +f["f113"], y = +f["f37"], b = +f["f8"], w = +f["f10"], this.stocks.push({
                                                code: u,
                                                name: l,
                                                price: p,
                                                change: h,
                                                netinflow: d,
                                                rate: v,
                                                eps: m,
                                                bvps: k,
                                                roe: y,
                                                turnover: b,
                                                qrr: w
                                            });
                                            t.next = 14;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](6), r = !0, i = t.t0;
                                        case 14:
                                            t.prev = 14, t.prev = 15, n || null == c["return"] || c["return"]();
                                        case 17:
                                            if (t.prev = 17, !r) {
                                                t.next = 20;
                                                break
                                            }
                                            throw i;
                                        case 20:
                                            return t.finish(17);
                                        case 21:
                                            return t.finish(14);
                                        case 22:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [6, 10, 14, 22],
                                    [15, , 17, 21]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "captureBlocks",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e, a, n, r, i, c, o, f, u, l, h, d, v;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, p.capture();
                                        case 2:
                                            for (e = t.sent, a = !0, n = !1, r = void 0, t.prev = 6, i = e.concept[Symbol.iterator](); !(a = (c = i.next()).done); a = !0) o = c.value, this.blocks.concept.push(o.code);
                                            t.next = 14;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](6), n = !0, r = t.t0;
                                        case 14:
                                            t.prev = 14, t.prev = 15, a || null == i["return"] || i["return"]();
                                        case 17:
                                            if (t.prev = 17, !n) {
                                                t.next = 20;
                                                break
                                            }
                                            throw r;
                                        case 20:
                                            return t.finish(17);
                                        case 21:
                                            return t.finish(14);
                                        case 22:
                                            for (f = !0, u = !1, l = void 0, t.prev = 25, h = e.industry[Symbol.iterator](); !(f = (d = h.next()).done); f = !0) v = d.value, this.blocks.industry.push(v.code);
                                            t.next = 33;
                                            break;
                                        case 29:
                                            t.prev = 29, t.t1 = t["catch"](25), u = !0, l = t.t1;
                                        case 33:
                                            t.prev = 33, t.prev = 34, f || null == h["return"] || h["return"]();
                                        case 36:
                                            if (t.prev = 36, !u) {
                                                t.next = 39;
                                                break
                                            }
                                            throw l;
                                        case 39:
                                            return t.finish(36);
                                        case 40:
                                            return t.finish(33);
                                        case 41:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [6, 10, 14, 22],
                                    [15, , 17, 21],
                                    [25, 29, 33, 41],
                                    [34, , 36, 40]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "capture",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, ![U.key, D.key, J.key, N.key, z.key, K.key].includes(this.name)) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 4, this.captureBlocks();
                                        case 4:
                                            return t.next = 6, f["b"].get(this.getUrl(), null);
                                        case 6:
                                            return e = t.sent, t.next = 9, this.createStocks(e);
                                        case 9:
                                            return console.log("#EastMoneyListCrawler# capture ".concat(this.name, " ...")), t.abrupt("return", this.stocks);
                                        case 13:
                                            t.prev = 13, t.t0 = t["catch"](0), console.warn("#EastMoneyListCrawler# capture ".concat(this.name, " fail"), t.t0);
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 13]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }()),
                pt = (a("33ef"), a("11fd"), function t(e) {
                    var a = e.code,
                        r = e.name,
                        i = e.price,
                        s = e.change,
                        c = e.rate,
                        f = e.turnover,
                        u = e.qrr,
                        l = e.inflow,
                        p = e.outflow,
                        h = e.netinflow,
                        d = e.volume,
                        v = e.amount,
                        m = e.open,
                        k = e.close,
                        y = e.high,
                        b = e.low,
                        w = e.prevclose,
                        O = e.roe,
                        j = e.eps,
                        g = e.bvps,
                        x = e.hot,
                        S = e.block;
                    Object(n["a"])(this, t), Object(o["a"])(this, "code", "000000"), Object(o["a"])(this, "name", void 0), Object(o["a"])(this, "price", void 0), Object(o["a"])(this, "change", void 0), Object(o["a"])(this, "rate", void 0), Object(o["a"])(this, "open", void 0), Object(o["a"])(this, "close", void 0), Object(o["a"])(this, "high", void 0), Object(o["a"])(this, "low", void 0), Object(o["a"])(this, "prevclose", void 0), Object(o["a"])(this, "turnover", void 0), Object(o["a"])(this, "qrr", void 0), Object(o["a"])(this, "volume", void 0), Object(o["a"])(this, "amount", void 0), Object(o["a"])(this, "inflow", void 0), Object(o["a"])(this, "outflow", void 0), Object(o["a"])(this, "netinflow", void 0), Object(o["a"])(this, "roe", void 0), Object(o["a"])(this, "eps", void 0), Object(o["a"])(this, "bvps", void 0), Object(o["a"])(this, "hot", void 0), Object(o["a"])(this, "block", void 0), this.code = a, this.name = r, this.price = +i, this.change = +s, this.rate = +c, this.open = +m, this.close = +k || +i, this.high = +y, this.low = +b, this.prevclose = +w, this.turnover = +f, this.qrr = +u, this.inflow = +l, this.outflow = +p, this.netinflow = +h, this.volume = +d, this.amount = +v, this.roe = +O, this.eps = +j, this.bvps = +g, this.hot = x, this.block = S
                }),
                ht = (a("2aa5"), a("32f5"), a("62c8"), a("ef14"), a("2bfc")),
                dt = a("b111"),
                vt = a("a56c"),
                mt = a("f0ad"),
                kt = function() {
                    function t() {
                        Object(n["a"])(this, t)
                    }
                    return Object(r["a"])(t, [{
                        key: "start",
                        value: function() {}
                    }, {
                        key: "stop",
                        value: function() {}
                    }, {
                        key: "isAlive",
                        value: function() {}
                    }, {
                        key: "url",
                        value: function() {}
                    }, {
                        key: "state",
                        value: function() {}
                    }, {
                        key: "getAllStocks",
                        value: function() {
                            return {}
                        }
                    }, {
                        key: "getStocks",
                        value: function(t) {
                            return {}
                        }
                    }, {
                        key: "getStock",
                        value: function(t) {
                            return {}
                        }
                    }, {
                        key: "has",
                        value: function(t) {
                            return !1
                        }
                    }]), t
                }(),
                yt = a("86bf"),
                bt = a.n(yt),
                wt = function(t) {
                    function e() {
                        var t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                isCapture: !1,
                                interval: void 0
                            };
                        return Object(n["a"])(this, e), t = Object(ht["a"])(this, Object(dt["a"])(e).call(this)), Object(o["a"])(Object(vt["a"])(t), "codes", []), Object(o["a"])(Object(vt["a"])(t), "stocks", {}), Object(o["a"])(Object(vt["a"])(t), "decimal", {}), Object(o["a"])(Object(vt["a"])(t), "map", {}), Object(o["a"])(Object(vt["a"])(t), "exStocks", {}), Object(o["a"])(Object(vt["a"])(t), "sse", void 0), Object(o["a"])(Object(vt["a"])(t), "isCapture", void 0), Object(o["a"])(Object(vt["a"])(t), "interval", 30), Object(o["a"])(Object(vt["a"])(t), "timestamp", (new Date).getTime()), t.isCapture = r.isCapture, r.interval && (t.interval = r.interval), t.codes = a, t
                    }
                    return Object(mt["a"])(e, t), Object(r["a"])(e, [{
                        key: "symbol",
                        value: function(t) {
                            if (t.includes(".")) return t;
                            var e = gt.marketCode(t);
                            return "".concat(e, ".").concat(t)
                        }
                    }, {
                        key: "getSecids",
                        value: function() {
                            var t = [],
                                e = !0,
                                a = !1,
                                n = void 0;
                            try {
                                for (var r, i = this.codes[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                                    var s = r.value;
                                    t.push(this.symbol(s))
                                }
                            } catch (c) {
                                a = !0, n = c
                            } finally {
                                try {
                                    e || null == i["return"] || i["return"]()
                                } finally {
                                    if (a) throw n
                                }
                            }
                            return t
                        }
                    }, {
                        key: "getUrl",
                        value: function() {
                            var t = "f1,f2,f3,f4,f5,f6,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f19,f37,f45,f62,f64,f65,f69,f70,f71,f75,f112,f113,f184",
                                e = this.getSecids(),
                                a = 1e3 * this.interval,
                                n = Math.floor(98 * Math.random()) + 1;
                            return "https://".concat(n, ".push2.eastmoney.com/api/qt/ulist/sse?invt=3&po=1&pi=0&pz=").concat(e.length, "&mpi=").concat(a, "&secids=").concat(e.join(","), "&fields=").concat(t)
                        }
                    }, {
                        key: "listen",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e = this;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", new Promise((function(t, a) {
                                                e.timestamp = (new Date).getTime();
                                                try {
                                                    var n = e.getUrl();
                                                    e.sse = new EventSource(n), e.sse.onmessage = function(a) {
                                                        a.event;
                                                        var n = a.data;
                                                        a.id, a.retry;
                                                        if (e.isCapture || (e.timestamp = (new Date).getTime()), n && (n = JSON.parse(n), n.data)) {
                                                            var r = n.data.diff;
                                                            for (var i in r) {
                                                                var s = r[i],
                                                                    c = s["f12"],
                                                                    o = s["f13"],
                                                                    f = s["f14"],
                                                                    u = s["f1"],
                                                                    l = "".concat(o, ".").concat(c);
                                                                c && f && (e.map[i] = l, e.decimal[l] = +u), e.mergeStock(e.map[i], s)
                                                            }
                                                            console.log("#EastMoneySSECrawler# sse message: ", n), e.isCapture && e.stop(), e.isCapture && t(e.stocks)
                                                        }
                                                    }, e.sse.onerror = function(t) {
                                                        e.stop(), e.isCapture && a(t)
                                                    }
                                                } catch (r) {
                                                    console.warn("#EastMoneySSECrawler# sse error ...", r)
                                                }
                                            })));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "start",
                        value: function() {
                            var t = this;
                            try {
                                this.stop(), Object(c["a"])(s.a.mark((function e() {
                                    return s.a.wrap((function(e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0, !t.codes.length) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.next = 4, t.listen();
                                            case 4:
                                                e.next = 8;
                                                break;
                                            case 6:
                                                e.prev = 6, e.t0 = e["catch"](0);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 6]
                                    ])
                                })))(), console.log("#EastMoneySSECrawler# sse start ...", this.url())
                            } catch (e) {
                                console.warn("#EastMoneySSECrawler# sse fail", e)
                            }
                            return this
                        }
                    }, {
                        key: "isAlive",
                        value: function() {
                            var t = (new Date).getTime();
                            return t - this.timestamp < 3 * this.interval * 1e3
                        }
                    }, {
                        key: "url",
                        value: function() {
                            return this.sse.url
                        }
                    }, {
                        key: "state",
                        value: function() {
                            return this.sse.readyState
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.sse && this.sse.close()
                        }
                    }, {
                        key: "mergeStock",
                        value: function(t, e) {
                            var a = this.stocks[t];
                            if (!a) return this.updateExStcok(t, null, e), void(this.stocks[t] = this.createStock(t, e));
                            this.updateExStcok(t, a, e), void 0 !== e["f2"] && (a.price = +(+e["f2"] / Math.pow(10, this.decimal[t])).toFixed(2), a.close = +(+e["f2"] / Math.pow(10, this.decimal[t])).toFixed(2)), void 0 !== e["f3"] && (a.change = +(+e["f3"] / 100).toFixed(2)), void 0 !== e["f15"] && (a.high = +(+e["f15"] / Math.pow(10, this.decimal[t])).toFixed(2)), void 0 !== e["f16"] && (a.low = +(+e["f16"] / Math.pow(10, this.decimal[t])).toFixed(2)), void 0 !== e["f17"] && (a.open = +(+e["f17"] / Math.pow(10, this.decimal[t])).toFixed(2)), void 0 !== e["f8"] && (a.turnover = +(+e["f8"] / 100).toFixed(2)), void 0 !== e["f10"] && (a.qrr = +(+e["f10"] / 100).toFixed(2)), void 0 !== e["f62"] && (a.netinflow = +e["f62"]), void 0 !== e["f184"] && (a.rate = +(+e["f184"] / 100).toFixed(2)), void 0 !== e["f5"] && (a.volume = +e["f5"]), void 0 !== e["f6"] && (a.amount = +e["f6"])
                        }
                    }, {
                        key: "updateExStcok",
                        value: function(t, e, a) {
                            var n = this.exStocks[t] || {},
                                r = a["f64"],
                                i = a["f65"],
                                s = a["f69"],
                                c = a["f70"],
                                o = a["f71"],
                                f = a["f75"];
                            void 0 !== r && (n.supinflow = +(+r).toFixed(2)), void 0 !== i && (n.supoutflow = +(+i).toFixed(2)), void 0 !== s && (n.supinflowrate = +(+s / 100).toFixed(2)), void 0 !== c && (n.biginflow = +(+c).toFixed(2)), void 0 !== o && (n.bigoutflow = +(+o).toFixed(2)), void 0 !== f && (n.biginflowrate = +(+f / 100).toFixed(2)), this.exStocks[t] = n, e && (e.inflow = +(n.supinflow + n.biginflow).toFixed(2), e.outflow = +(n.supoutflow + n.bigoutflow).toFixed(2))
                        }
                    }, {
                        key: "createStock",
                        value: function(t, e) {
                            var a = {
                                code: e["f12"],
                                name: e["f14"],
                                price: +(+e["f2"] / Math.pow(10, this.decimal[t])).toFixed(2),
                                change: +(+e["f3"] / 100).toFixed(2),
                                rate: +(+e["f184"] / 100).toFixed(2),
                                roe: +(+e["f37"]).toFixed(2),
                                eps: +(+e["f112"]).toFixed(2),
                                bvps: +(+e["f113"]).toFixed(2),
                                open: +(+e["f17"] / Math.pow(10, this.decimal[t])).toFixed(2),
                                close: +(+e["f2"] / Math.pow(10, this.decimal[t])).toFixed(2),
                                high: +(+e["f15"] / Math.pow(10, this.decimal[t])).toFixed(2),
                                low: +(+e["f16"] / Math.pow(10, this.decimal[t])).toFixed(2),
                                prevclose: +(+e["f18"] / Math.pow(10, this.decimal[t])).toFixed(2),
                                turnover: +(+e["f8"] / 100).toFixed(2),
                                qrr: +(+e["f10"] / 100).toFixed(2),
                                inflow: +(+e["f64"] + +e["f70"]).toFixed(2),
                                outflow: +(+e["f65"] + +e["f71"]).toFixed(2),
                                netinflow: +e["f62"],
                                volume: +e["f5"],
                                amount: +e["f6"]
                            };
                            return new pt(a)
                        }
                    }, {
                        key: "has",
                        value: function(t) {
                            var e = !0,
                                a = !1,
                                n = void 0;
                            try {
                                for (var r, i = t[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                                    var s = r.value,
                                        c = this.symbol(s);
                                    if (!this.stocks[c]) return !1
                                }
                            } catch (o) {
                                a = !0, n = o
                            } finally {
                                try {
                                    e || null == i["return"] || i["return"]()
                                } finally {
                                    if (a) throw n
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "getAllExStocks",
                        value: function() {
                            return this.exStocks
                        }
                    }, {
                        key: "getAllStocks",
                        value: function() {
                            return this.stocks
                        }
                    }, {
                        key: "getStock",
                        value: function(t) {
                            var e = this.symbol(t);
                            if (this.stocks[e]) {
                                var a = bt()(this.stocks[e]);
                                return a.code = t, a
                            }
                        }
                    }, {
                        key: "getStocks",
                        value: function(t) {
                            var e = {},
                                a = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, s = t[Symbol.iterator](); !(a = (i = s.next()).done); a = !0) {
                                    var c = i.value,
                                        o = this.getStock(c);
                                    o && (e[c] = o)
                                }
                            } catch (f) {
                                n = !0, r = f
                            } finally {
                                try {
                                    a || null == s["return"] || s["return"]()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            return e
                        }
                    }]), e
                }(kt),
                Ot = function() {
                    function t() {
                        Object(n["a"])(this, t)
                    }
                    return Object(r["a"])(t, [{
                        key: "capture",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t(e) {
                                var a, n;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, e.length) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return", []);
                                        case 3:
                                            return a = new wt(e, {
                                                isCapture: !0
                                            }), t.next = 6, a.listen();
                                        case 6:
                                            return n = a.getStocks(e), console.log("#EastMoneyStocksCrawler# EastMoneyStocksCrawler capture: ", n), t.abrupt("return", n);
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), console.warn("#EastMoneyStocksCrawler# EastMoneyStocksCrawler capture fail", t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 11]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                jt = function() {
                    function t() {
                        Object(n["a"])(this, t)
                    }
                    return Object(r["a"])(t, [{
                        key: "index",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e, a;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, (new Ot).capture(["1.000001"]);
                                        case 2:
                                            return e = t.sent, a = e["1.000001"], a.code = "1.000001", t.abrupt("return", [a]);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "marketCode",
                        value: function(t) {
                            if (t.includes(".")) return t.split(".")[0];
                            var e = t.slice(0, 2).toLowerCase();
                            if (["00", "30", "39", "12", "15", "16", "18", "20"].includes(e)) return "0";
                            if (["60", "68", "11", "50", "51", "52", "90"].includes(e)) return "1";
                            e = t.replace(/\d+/g, "").toLowerCase();
                            var a = ["ss", "zn", "al", "cu", "rb", "bu", "pb", "hc", "fu", "ni", "au", "ru", "wr", "ag", "sp", "sn"],
                                n = ["nr", "sc", "lu", "bc"],
                                r = ["m", "b", "a", "i", "v", "l", "jd", "eb", "pp", "c", "cs", "jm", "rr", "j", "y", "pg", "fb", "p", "eg", "lh", "bb"],
                                i = ["rm", "ma", "sa", "cj", "cy", "fg", "rs", "ri", "cf", "wh", "jr", "sm", "sr", "ta", "zc", "pf", "oi", "sf", "ap", "pk", "ur"],
                                s = ["tm", "tf", "ts", "ic", "if", "ih"];
                            return a.includes(e) ? "113" : n.includes(e) ? "142" : r.includes(e) ? "114" : i.includes(e) ? "115" : s.includes(e) ? "220" : void 0
                        }
                    }, {
                        key: "isTrading",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e, a, n, r;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e = "http://push2.eastmoney.com/api/qt/ulist.np/get?secids=1.000001&fields=f1,f2,f3,f4,f12,f13,f14,f107,f152", t.next = 4, f["b"].get(e, null);
                                        case 4:
                                            if (a = t.sent, n = JSON.parse(a), r = n.data.diff[0].f107, ![1, 2, 4].includes(r)) {
                                                t.next = 12;
                                                break
                                            }
                                            return console.log("#EastMoneyMarketIndexListCrawler# market open ..."), t.abrupt("return", !0);
                                        case 12:
                                            return console.log("#EastMoneyMarketIndexListCrawler# market close ..."), t.abrupt("return", !1);
                                        case 14:
                                            t.next = 20;
                                            break;
                                        case 16:
                                            return t.prev = 16, t.t0 = t["catch"](0), console.warn("#EastMoneyMarketIndexListCrawler# isTrading : ", t.t0), t.abrupt("return", !0);
                                        case 20:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 16]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                gt = new jt,
                xt = function() {
                    function t(e) {
                        Object(n["a"])(this, t), Object(o["a"])(this, "originCode", "000001"), Object(o["a"])(this, "code", "000001"), Object(o["a"])(this, "type", void 0), this.originCode = e, this.code = e, this.type = gt.marketCode(this.code), "1.000001" === e && (this.code = "000001", this.type = "1")
                    }
                    return Object(r["a"])(t, [{
                        key: "getCodeWithArea",
                        value: function() {
                            var t = gt.marketCode(this.code);
                            return "1.000001" === this.originCode && (t = "1"), "".concat(this.code).concat(t)
                        }
                    }, {
                        key: "getExUrl",
                        value: function() {
                            return "http://push2.eastmoney.com/api/qt/ulist.np/get?secids=".concat(this.type, ".").concat(this.code, "&fields=f14,f37,f112,f113,f184")
                        }
                    }, {
                        key: "getFlowUrl",
                        value: function() {
                            return "http://push2.eastmoney.com/api/qt/stock/get?secid=".concat(this.type, ".").concat(this.code, "&fields=f58,f135,f136,f137,f138,f139,f141,f142,f144,f145,f147,f148")
                        }
                    }, {
                        key: "getUrl",
                        value: function() {
                            var t = this.getCodeWithArea();
                            return "http://nuff.eastmoney.com/EM_Finance2015TradeInterface/JS.ashx?id=".concat(t)
                        }
                    }, {
                        key: "createStock",
                        value: function(t, e, a) {
                            t = t.slice("callback(".length, -1);
                            var n = JSON.parse(t)["Value"],
                                r = JSON.parse(e).data || {},
                                i = JSON.parse(a).data || {},
                                s = i.diff ? i.diff[0] : {},
                                c = {
                                    code: this.originCode,
                                    name: n[2] || "",
                                    price: n[25] || 0,
                                    change: n[29] || 0,
                                    rate: +(+s["f184"] / 100).toFixed(2) || 0,
                                    roe: +(+s["f37"]).toFixed(2) || 0,
                                    eps: +(+s["f112"]).toFixed(2) || 0,
                                    bvps: +(+s["f113"]).toFixed(2) || 0,
                                    open: n[28] || 0,
                                    turnover: n[37] || 0,
                                    qrr: n[36] || 0,
                                    inflow: r["f135"] || 0,
                                    outflow: r["f136"] || 0,
                                    netinflow: r["f137"] || 0,
                                    volume: n[31] || 0
                                };
                            return new pt(c)
                        }
                    }, {
                        key: "capture",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e, a, n, r, i;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Promise.all([f["b"].get(this.getUrl(), null), f["b"].get(this.getFlowUrl(), null), f["b"].get(this.getExUrl(), null)]);
                                        case 3:
                                            return e = t.sent, a = Object(u["a"])(e, 3), n = a[0], r = a[1], i = a[2], console.log("#EastMoneyStockCrawler# capture ".concat(this.code, " ")), t.abrupt("return", this.createStock(n, r, i));
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), console.warn("#EastMoneyStockCrawler# capture ".concat(this.code, " fail"), t.t0);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                St = (a("f8a5"), function t() {
                    Object(n["a"])(this, t), Object(o["a"])(this, "sse-50", []), Object(o["a"])(this, "sse-180", []), Object(o["a"])(this, "sse-380", []), Object(o["a"])(this, "szse-100", []), Object(o["a"])(this, "szse-300", []), Object(o["a"])(this, "hs-300", []), Object(o["a"])(this, "zz-500", []), Object(o["a"])(this, "sub-new", []), Object(o["a"])(this, "bond", {}), Object(o["a"])(this, "future", []), Object(o["a"])(this, "all", [])
                }),
                Mt = function() {
                    function t() {
                        Object(n["a"])(this, t), Object(o["a"])(this, "markets", new St), Object(o["a"])(this, "urls", {
                            "sse-50": "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0611",
                            "sse-180": "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0612",
                            "sse-380": "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0705",
                            "szse-100": "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0743",
                            "hs-300": "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0500",
                            "zz-500": "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0701",
                            "sub-new": "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:BK0501",
                            bond: "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid=f3&fs=b:MK0354",
                            future: "",
                            all: "http://push2.eastmoney.com/api/qt/clist/get?po=1&np=1&fltt=2&invt=2&fid0=f4001&fid=f62&fs=m:0+t:6+f:!2,m:0+t:13+f:!2,m:0+t:80+f:!2,m:1+t:2+f:!2,m:1+t:23+f:!2&stat=1"
                        })
                    }
                    return Object(r["a"])(t, [{
                        key: "getUrl",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3,
                                n = "f12,f14,f232,f234",
                                r = this.urls[t];
                            return "".concat(r, "&pn=").concat(e, "&pz=").concat(a, "&fields=").concat(n)
                        }
                    }, {
                        key: "createMarkets",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t(e) {
                                var a, n, r, i, c, o, u, l, p;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, f["b"].get(this.getUrl(e), null);
                                        case 2:
                                            if (a = t.sent, n = JSON.parse(a), n.data) {
                                                t.next = 6;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 6:
                                            for (this.markets[e] || (this.markets[e] = []), r = !0, i = !1, c = void 0, t.prev = 10, o = n.data.diff[Symbol.iterator](); !(r = (u = o.next()).done); r = !0) l = u.value, p = l["f12"], this.markets[e].push(p);
                                            t.next = 18;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t["catch"](10), i = !0, c = t.t0;
                                        case 18:
                                            t.prev = 18, t.prev = 19, r || null == o["return"] || o["return"]();
                                        case 21:
                                            if (t.prev = 21, !i) {
                                                t.next = 24;
                                                break
                                            }
                                            throw c;
                                        case 24:
                                            return t.finish(21);
                                        case 25:
                                            return t.finish(18);
                                        case 26:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [10, 14, 18, 26],
                                    [19, , 21, 25]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "createBondsOfMarkets",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t(e) {
                                var a, n, r, i, c, o, u, l, p;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, f["b"].get(this.getUrl(e), null);
                                        case 2:
                                            if (a = t.sent, n = JSON.parse(a), n.data) {
                                                t.next = 6;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 6:
                                            for (this.markets[e] || (this.markets[e] = {}), r = !0, i = !1, c = void 0, t.prev = 10, o = n.data.diff[Symbol.iterator](); !(r = (u = o.next()).done); r = !0) l = u.value, p = l["f12"], this.markets[e][p] = l["f232"];
                                            t.next = 18;
                                            break;
                                        case 14:
                                            t.prev = 14, t.t0 = t["catch"](10), i = !0, c = t.t0;
                                        case 18:
                                            t.prev = 18, t.prev = 19, r || null == o["return"] || o["return"]();
                                        case 21:
                                            if (t.prev = 21, !i) {
                                                t.next = 24;
                                                break
                                            }
                                            throw c;
                                        case 24:
                                            return t.finish(21);
                                        case 25:
                                            return t.finish(18);
                                        case 26:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [10, 14, 18, 26],
                                    [19, , 21, 25]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "createFutureOfMarkets",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t(e) {
                                var a, n, r, i, c, o, u, l, p, h, d, v, m, k;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            this.markets[e] || (this.markets[e] = []), a = ["113", "142", "114", "115", "220"], n = 0, r = a;
                                        case 3:
                                            if (!(n < r.length)) {
                                                t.next = 34;
                                                break
                                            }
                                            return i = r[n], c = "http://futsse.eastmoney.com/list/main/".concat(i, "?orderBy=zdf&sort=desc&pageSize=1000&pageIndex=0"), t.next = 8, f["b"].get(c, null);
                                        case 8:
                                            if (o = t.sent, u = JSON.parse(o), u.list) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.abrupt("continue", 31);
                                        case 12:
                                            for (l = !0, p = !1, h = void 0, t.prev = 15, d = u.list[Symbol.iterator](); !(l = (v = d.next()).done); l = !0) m = v.value, k = m.dm.slice(0, -1), this.markets[e].push(k);
                                            t.next = 23;
                                            break;
                                        case 19:
                                            t.prev = 19, t.t0 = t["catch"](15), p = !0, h = t.t0;
                                        case 23:
                                            t.prev = 23, t.prev = 24, l || null == d["return"] || d["return"]();
                                        case 26:
                                            if (t.prev = 26, !p) {
                                                t.next = 29;
                                                break
                                            }
                                            throw h;
                                        case 29:
                                            return t.finish(26);
                                        case 30:
                                            return t.finish(23);
                                        case 31:
                                            n++, t.next = 3;
                                            break;
                                        case 34:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [15, 19, 23, 31],
                                    [24, , 26, 30]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "capture",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t(e) {
                                var a, n, r, i, c, o;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            t.prev = 0, e = e || Object.keys(this.urls), a = !0, n = !1, r = void 0, t.prev = 5, i = e[Symbol.iterator]();
                                        case 7:
                                            if (a = (c = i.next()).done) {
                                                t.next = 25;
                                                break
                                            }
                                            if (o = c.value, "bond" !== o) {
                                                t.next = 14;
                                                break
                                            }
                                            return t.next = 12, this.createBondsOfMarkets(o);
                                        case 12:
                                            t.next = 21;
                                            break;
                                        case 14:
                                            if ("future" !== o) {
                                                t.next = 19;
                                                break
                                            }
                                            return t.next = 17, this.createFutureOfMarkets(o);
                                        case 17:
                                            t.next = 21;
                                            break;
                                        case 19:
                                            return t.next = 21, this.createMarkets(o);
                                        case 21:
                                            console.log("#EastMoneyWhitelistCrawler# capture ".concat(o, " ... "), this.markets[o]);
                                        case 22:
                                            a = !0, t.next = 7;
                                            break;
                                        case 25:
                                            t.next = 31;
                                            break;
                                        case 27:
                                            t.prev = 27, t.t0 = t["catch"](5), n = !0, r = t.t0;
                                        case 31:
                                            t.prev = 31, t.prev = 32, a || null == i["return"] || i["return"]();
                                        case 34:
                                            if (t.prev = 34, !n) {
                                                t.next = 37;
                                                break
                                            }
                                            throw r;
                                        case 37:
                                            return t.finish(34);
                                        case 38:
                                            return t.finish(31);
                                        case 39:
                                            return t.abrupt("return", this.markets);
                                        case 42:
                                            t.prev = 42, t.t1 = t["catch"](0), console.warn("#EastMoneyWhitelistCrawler# capture fail", t.t1);
                                        case 45:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 42],
                                    [5, 27, 31, 39],
                                    [32, , 34, 38]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                Ct = function t(e) {
                    var a = e.code,
                        r = e.name,
                        i = e.date,
                        s = e.price,
                        c = e.change,
                        f = e.netinflow,
                        u = e.netinflowrate,
                        l = e.high,
                        p = e.low,
                        h = e.open,
                        d = e.close,
                        v = e.volume;
                    Object(n["a"])(this, t), Object(o["a"])(this, "code", "000000"), Object(o["a"])(this, "name", void 0), Object(o["a"])(this, "date", void 0), Object(o["a"])(this, "price", void 0), Object(o["a"])(this, "change", void 0), Object(o["a"])(this, "netinflow", void 0), Object(o["a"])(this, "rate", void 0), Object(o["a"])(this, "netinflowrate", void 0), Object(o["a"])(this, "high", void 0), Object(o["a"])(this, "low", void 0), Object(o["a"])(this, "open", void 0), Object(o["a"])(this, "close", void 0), Object(o["a"])(this, "volume", void 0), this.code = a, this.name = r, this.date = i, this.price = +s, this.change = +c, this.netinflow = +f, this.rate = +u, this.netinflowrate = +u, this.open = +h, this.close = +d, this.high = +l, this.low = +p, this.volume = +v
                },
                qt = a("c206"),
                Ft = a.n(qt),
                Et = function() {
                    function t(e) {
                        Object(n["a"])(this, t), Object(o["a"])(this, "code", void 0), Object(o["a"])(this, "flows", []), this.code = e
                    }
                    return Object(r["a"])(t, [{
                        key: "getUrl",
                        value: function() {
                            var t = gt.marketCode(this.code),
                                e = "".concat(t, ".").concat(this.code);
                            "1.000001" === this.code && (e = "1.000001");
                            var a = Math.floor(98 * Math.random()) + 1;
                            return "http://".concat(a, ".push2his.eastmoney.com/api/qt/stock/fflow/daykline/get?secid=").concat(e, "&fields1=f1,f2,f3,f7&fields2=f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63,f64,f65")
                        }
                    }, {
                        key: "createFlows",
                        value: function(t) {
                            var e = JSON.parse(t);
                            if (e.data) {
                                var a = e.data.klines,
                                    n = e.data.name,
                                    r = e.data.code,
                                    i = !0,
                                    s = !1,
                                    c = void 0;
                                try {
                                    for (var o, f = a[Symbol.iterator](); !(i = (o = f.next()).done); i = !0) {
                                        var u = o.value,
                                            l = u.split(","),
                                            p = Ft()(l[0]).format("YYYYMMDD"),
                                            h = l[11],
                                            d = l[12],
                                            v = l[1],
                                            m = l[6],
                                            k = l[5],
                                            y = l[10],
                                            b = l[4],
                                            w = l[9],
                                            O = new Ct({
                                                code: r,
                                                name: n,
                                                date: p,
                                                price: h,
                                                change: d,
                                                netinflow: v,
                                                netinflowrate: m,
                                                supinflow: k,
                                                supinflowrate: y,
                                                biginflow: b,
                                                biginflowrate: w
                                            });
                                        this.flows.push(O)
                                    }
                                } catch (j) {
                                    s = !0, c = j
                                } finally {
                                    try {
                                        i || null == f["return"] || f["return"]()
                                    } finally {
                                        if (s) throw c
                                    }
                                }
                            }
                        }
                    }, {
                        key: "capture",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, f["b"].get(this.getUrl(), null);
                                        case 3:
                                            return e = t.sent, this.createFlows(e), console.log("#EastMoneyStockFlowsCrawler# capture flows ".concat(this.code, " ...")), t.abrupt("return", this.flows);
                                        case 9:
                                            t.prev = 9, t.t0 = t["catch"](0), console.warn("#EastMoneyStockFlowsCrawler# capture ".concat(this.code, " fail"), t.t0);
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 9]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                Bt = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $.key;
                        Object(n["a"])(this, t), Object(o["a"])(this, "name", void 0), this.name = e
                    }
                    return Object(r["a"])(t, [{
                        key: "getUrl",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e, a;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = Ft()().subtract(1, "day").format("YYYY-MM-DD"), 1 === +Ft()().day() && (e = Ft()().subtract(3, "days").format("YYYY-MM-DD")), a = "http://data.eastmoney.com/DataCenter_V3/stock2016/TradeDetail/pagesize=200,page=1,sortRule=-1,sortType=JmMoney,startDate=".concat(e, ",endDate=").concat(e, ",gpfw=0,js=.html"), t.abrupt("return", a);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "createStocks",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t(e) {
                                var a, n, r, i, c, o, f, u, l, p, h;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            for (a = JSON.parse(e), n = [], r = !0, i = !1, c = void 0, t.prev = 5, o = a.data[Symbol.iterator](); !(r = (f = o.next()).done); r = !0) u = f.value, l = u["SCode"], p = u["SName"], h = +u["Chgradio"], n.push({
                                                code: l,
                                                name: p,
                                                change: h
                                            });
                                            t.next = 13;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t["catch"](5), i = !0, c = t.t0;
                                        case 13:
                                            t.prev = 13, t.prev = 14, r || null == o["return"] || o["return"]();
                                        case 16:
                                            if (t.prev = 16, !i) {
                                                t.next = 19;
                                                break
                                            }
                                            throw c;
                                        case 19:
                                            return t.finish(16);
                                        case 20:
                                            return t.finish(13);
                                        case 21:
                                            return t.abrupt("return", n);
                                        case 22:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [5, 9, 13, 21],
                                    [14, , 16, 20]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "capture",
                        value: function() {
                            var t = Object(c["a"])(s.a.mark((function t() {
                                var e, a, n;
                                return s.a.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.getUrl();
                                        case 3:
                                            return e = t.sent, t.next = 6, f["b"].get(e, null);
                                        case 6:
                                            return a = t.sent, t.next = 9, this.createStocks(a);
                                        case 9:
                                            return n = t.sent, console.log("#EastMoneyDragonTigerListCrawler# capture ".concat(this.name, " ...")), t.abrupt("return", n);
                                        case 14:
                                            t.prev = 14, t.t0 = t["catch"](0), console.warn("#EastMoneyDragonTigerListCrawler# capture ".concat(this.name, " fail"), t.t0);
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 14]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                Ut = new Bt,
                Dt = function() {
                    function t() {
                        Object(n["a"])(this, t)
                    }
                    return Object(r["a"])(t, [{
                        key: "marketCode",
                        value: function(t) {
                            return gt.marketCode(t)
                        }
                    }, {
                        key: "isTrading",
                        value: function() {
                            return gt.isTrading()
                        }
                    }, {
                        key: "captureBlock",
                        value: function() {
                            return p.capture()
                        }
                    }, {
                        key: "captureList",
                        value: function(t) {
                            return t === $.key ? Ut.capture() : t === G.key ? gt.index() : new lt(t).capture()
                        }
                    }, {
                        key: "captureStocks",
                        value: function(t) {
                            return (new Ot).capture(t)
                        }
                    }, {
                        key: "captureStock",
                        value: function(t) {
                            return new xt(t).capture()
                        }
                    }, {
                        key: "captureWhitelist",
                        value: function(t) {
                            return (new Mt).capture(t)
                        }
                    }, {
                        key: "captureFlows",
                        value: function(t) {
                            return new Et(t).capture()
                        }
                    }, {
                        key: "sseStart",
                        value: function(t, e) {
                            return new wt(t, e).start()
                        }
                    }]), t
                }();
            e["default"] = new Dt
        }
    }
]);