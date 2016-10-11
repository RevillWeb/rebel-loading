"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Leon Revill on 07/03/16.
 * Blog: http://www.revilweb.com
 * GitHub: https://github.com/RevillWeb
 * Twitter: @RevillWeb
 */
var RebelLoading = function (_HTMLElement) {
    _inherits(RebelLoading, _HTMLElement);

    function RebelLoading() {
        _classCallCheck(this, RebelLoading);

        return _possibleConstructorReturn(this, (RebelLoading.__proto__ || Object.getPrototypeOf(RebelLoading)).apply(this, arguments));
    }

    _createClass(RebelLoading, [{
        key: "connectedCallback",
        value: function connectedCallback() {
            this._hidden = true;
            this.attachShadow({ "mode": "open" });
            this.backgroundColor = this.getAttribute("background-color") || "#FFF";
            this.color = this.getAttribute("color") || "#000";
            this.shadowRoot.innerHTML = "\n        <style>\n        .loader {\n                position: absolute;\n                background-color: " + this.backgroundColor + ";\n                top: 0;\n                bottom: 0;\n                width: 100%;\n                color: " + this.color + ";\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                font-size: 32px;\n        }\n        .loader.hidden {\n                display: none;\n        }\n        .spinner {\n                width: 40px;\n                height: 40px;\n                margin: 100px auto;\n                background-color: " + this.color + ";\n                border-radius: 100%;\n                -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n                animation: sk-scaleout 1.0s infinite ease-in-out;\n        }\n        @-webkit-keyframes sk-scaleout {\n            0% {\n                -webkit-transform: scale(0);\n            }\n            100% {\n                -webkit-transform: scale(1.0);\n                opacity: 0;\n            }\n        }\n        @keyframes sk-scaleout {\n            0% {\n                -webkit-transform: scale(0);\n                transform: scale(0);\n            }\n            100% {\n                -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n                opacity: 0;\n            }\n        }\n        </style>\n        <div class=\"loader hidden\">\n            <div class=\"spinner\"></div>\n        </div>\n    ";
        }
    }, {
        key: "show",
        value: function show() {
            this.shadowRoot.querySelector(".loader").className = "loader";
            this._hidden = false;
        }
    }, {
        key: "hide",
        value: function hide() {
            this.shadowRoot.querySelector('.loader').className = "loader hidden";
            this._hidden = true;
        }
    }, {
        key: "toggle",
        value: function toggle() {
            if (this._hidden === true) {
                this.show();
            } else {
                this.hide();
            }
        }
    }, {
        key: "ishidden",
        value: function ishidden() {
            return this._hidden;
        }
    }]);

    return RebelLoading;
}(HTMLElement);

window.customElements.define('rebel-loading', RebelLoading);
