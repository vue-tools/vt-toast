'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue, Toast) {
    var Component = void 0,
        component = void 0,
        container = void 0,
        propsData = void 0;

    propsData = {
        type: '',
        text: '',
        visible: false
    };

    Component = Vue.extend(Toast);
    container = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(container);
    component = new Component({
        propsData: propsData
    }).$mount(container);

    function method(_ref) {
        var _ref$type = _ref.type,
            type = _ref$type === undefined ? '' : _ref$type,
            text = _ref.text,
            _ref$time = _ref.time,
            time = _ref$time === undefined ? 2000 : _ref$time,
            _ref$hide = _ref.hide,
            hide = _ref$hide === undefined ? function () {} : _ref$hide;


        if (['success', 'error', 'warn'].indexOf(type) === -1) {
            type = '';
        }

        (0, _assign2.default)(component, {
            type: type,
            text: text,
            time: time,
            visible: true
        });

        component.$on('hide', function () {
            if (component.visible) {
                component.visible = false;
                if (typeof hide === 'function') {
                    hide();
                }
            }
        });
    }

    Vue.toast = method;
    Vue.prototype.$toast = method;
}

module.exports = plugin;