'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ReactSimpleModal = (props) => {
    const { open, onClose, children, extraTopElement } = props;
    const handleEscapeKey = React.useCallback((event) => {
        if (event.code === "Escape") {
            document.body.classList.remove("overflow-y-hidden");
            onClose();
        }
    }, [onClose]);
    React.useEffect(() => {
        document.addEventListener("keydown", handleEscapeKey);
        return () => document.removeEventListener("keydown", handleEscapeKey);
    }, [handleEscapeKey]);
    React.useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        }
        else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [open]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, open && (React__default["default"].createElement("div", { onClick: onClose },
        React__default["default"].createElement("div", { className: "fixed inset-0 bg-black bg-opacity-80 overflow-y-auto h-full w-full z-50" }),
        React__default["default"].createElement("div", { id: "modal-wrapper", className: "justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" },
            React__default["default"].createElement("div", { className: `flex absolute w-full ${extraTopElement ? "justify-between" : "justify-end"} top-4 md:top-10 px-4 md:px-10 z-50` },
                extraTopElement ? extraTopElement : React__default["default"].createElement(React__default["default"].Fragment, null),
                React__default["default"].createElement("img", { onClick: onClose, className: "w-6 h-6 md:w-8 md:h-8 cursor-pointer", src: "/assets/close.svg", alt: "Close" })),
            React__default["default"].createElement("div", { className: "w-full", onClick: (e) => e.stopPropagation() }, children))))));
};

module.exports = ReactSimpleModal;
//# sourceMappingURL=index.cjs.js.map
