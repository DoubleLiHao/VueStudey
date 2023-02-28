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

    ### Todolist案例（第一版）
    1、组件化编码流程：
        (1)、拆分静态组件：组件按照功能点拆分，命名不要与html元素冲突
        (2)、实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件再用
            1). 一个组件在用：放在组件自身即可
            2). 一些组件在用：放在他们共同的父组件上
        (3)、实现交互: 从绑定事件开始
    2、props适用：
        (1). 父组件 ==> 子组件 通信
        (2). 子组件 ==> 父组件 通信(要求父组件提前给子组件传一个函数)
    3、使用v-model时要切记：v-model绑定的值不能时props传过来的值，因为props是不可以修改的
    4、props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做