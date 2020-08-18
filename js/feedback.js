"use strict";
var _extends = Object.assign || function (a) {
        for (var c, b = 1; b < arguments.length; b++)
            for (var d in c = arguments[b], c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
        return a
    },
    _createClass = function () {
        function a(b, c) {
            for (var e, d = 0; d < c.length; d++) e = c[d], e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(b, e.key, e)
        }
        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
}
var FeedbackForm = function () {
        function a(b) {
            _classCallCheck(this, a), this.props = {
                handleSubmitSuccess: function handleSubmitSuccess() {},
                handleSubmitError: function handleSubmitError() {
                    return console.log("ERROR SUBMIT")
                }
            }, this.props = _extends({}, this.props, b.props), this.url = b.url, this.element = b.element
        }
        return _createClass(a, [{
            key: "init",
            value: function init() {
                var b = this;
                return console.log("INITED FORM", this), $(this.element).find("form").on("submit", function (c) {
                    c.preventDefault();
                    var d = $(c.target).serializeArray(),
                        e = {};
                    d.forEach(function (f) {
                        return e[f.name] = f.value
                    }), b.submit(e)
                }), this
            }
        }, {
            key: "submit",
            value: function submit(b) {
                var c = this;
                console.log(b), console.log(location.pathname), $.post(this.url, b).then(function (d) {
                    console.log(d);
                    var e = JSON.parse(d);
                    "success" == e.status ? c.props.handleSubmitSuccess(e) : c.props.handleSubmitError(e)
                })
            }
        }]), a
    }(),
    Metrika = function () {
        function a() {
            _classCallCheck(this, a)
        }
        return _createClass(a, null, [{
            key: "fire",
            value: function fire(b) {
                window.yaCounter50340610.reachGoal(b)
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Robotics',
                    eventAction: b
                });
            }
        }, {
            key: "generateSubmitId",
            value: function generateSubmitId(b) {
                var c = b.split("/").join("");
                return c.charAt(0).toUpperCase() + c.slice(1)
            }
        }]), a
    }();
window.__feedbackForms = [], $(".feedback-form").each(function (a, b) {
    window.__feedbackForms.push(new FeedbackForm({
        element: $(b),
        url: "/endpoints/mail.php",
        props: {
            handleSubmitSuccess: function handleSubmitSuccess() {
                $(b).html("\n                    <span>\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0432\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430!</span> \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F\n                "), Metrika.fire("Request" + Metrika.generateSubmitId(location.pathname) + "Submit")
            }
        }
    }).init())
});