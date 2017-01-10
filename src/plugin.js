function plugin(Vue, Toast) {
    let component, container, propsData

    propsData = {
        type: '',
        text: '',
        visible: false
    }

    container = document.createElement('div')
    document.getElementsByTagName('body')[0].appendChild(container)
    component = new Toast({
        propsData
    }).$mount(container)

    function method(type, text, time) {
        if (typeof text === 'number') {
            time = text
            text = ''
        }

        if (['success', 'error', 'warn'].indexOf(type) === -1) {
            text = type
            type = ''
        }

        if (time) {
            component.time = time
        } else {
            component.time = 2000
        }

        if (type) {
            component.type = type
        } else {
            component.type = ''
        }

        component.text = text
        component.visible = true
        component.$on('hide', () => {
            component.visible = false
        })
    }

    Vue.toast = method
    Vue.prototype.$toast = method
}

module.exports = plugin