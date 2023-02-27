export default {
    install(Vue) {
        console.log("@@@install", Vue)
        
        // 全局过滤器
        Vue.filter('myslice', function (value) {
            return value.slice(2)
        })

        // 全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时
            bind(element,binding) {
                element.value = binding.value
            },
            // 元素插入页面时
            inserted(element,binding) { 
                element.value = binding.value 
            },
            // 指令所在模板被重新解析时
            update(element, binding) { 
                element.value = binding.value 
            }
        })

        Vue.prototype.hello = () => {
            alert('你好')
        }
    },
    
}