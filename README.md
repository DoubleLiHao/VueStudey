# vue笔记

### vue.config.js配置文件
> 使用vue inspect > output.js 额可以查看到Vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化的定制

### ref属性
    1. 被用来给元素或子组件注册引用信息(id的替代者)
    2. 应用在html标签上获取的是真实dom元素，应用在组件上获取的是组件的实例对象
    3. 使用方式：
        打标识： <Demo ref='xxx' />
        获取： this.$refs.xxx

### 配置项props
    功能：让组件接收外部传过来的数据
    (1).传递数据
        <Demo name="xxx"/>
    (2).接受数据
        1. 简单接收
            props:['name']
        2. 限制类型接收
            props:{
                name: String
            }
        3. 限制类型、必要性、指定默认值
            props:{
                name:{
                    type: String,
                    required； true,
                    default: '老王'
                }
            }

### mixin(混入)
    功能：可以把多个组件公用的配置抽离为一个混入对象
    使用方式：
        第一步定义混合：
            {
                data(){...},
                methods{...},
                ....
            }
        第二步使用混合：
            1.局部混入： mixins:['xxx']
            2.全局混入： Vue.mixin(xxx)
    注意：如果混入的是data、methods以本身有的属性为主 如果重复不会被混入所替代
          如果混入的是Vue的生命周期则两者同时发生

### 插件
    功能：增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue的构造函数，第二个以后的参数是使用者传递的参数
    定义插件：
        对象.install = function(){
            // 1、添加全局过滤器
            Vue.filter(...)

            // 2、添加全局指令
            Vue.directive(...)

            // 3、配置全局混入
            Vue.mixin(....)

            // 4、添加实例方法
            Vue.prototype.$myMethod = function(){}
        }
    使用插件： Vue.use(...)