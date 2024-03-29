<!--
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-02-22 18:52:27
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-03-03 11:22:27
 * @FilePath: \test\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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

### 自定义事件
    1、一种组件中通信的方式：子 => 父
    2、使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)
    3、绑定自定义事件：
        (1). 第一种方式：在父组件中<Demo @Event="test"> || <Demo v-on:Event="test">
        (2). 第二种方式：在父组件中<Demo ref='cmName'>
                        mounted(){
                            this.$refs.cmName.on('Event',this.function)
                        }
        (3). 想让自定义事件只触发一次，可以使用once修饰符，或$once方法
    4、触发自定义事件：this.$emit('Event',数据)
    5、解绑自定义事件：this.$off('Event')
    6、组件上绑定原生事件需要native修饰符
    7、通过 this.$refs.xxx.$on('Event',回调) 绑定自定义事件时，回调要么配置在methods中要么就用箭头函数，否则会存在this指向问题

### 事件总线
    1、一种组件间的通信方式，适用于任意组件的通信
    2、安装全局事件总线：
        ```javascript
        new Vue({
            ....
            beforeCreate(){
                Vue.prototype.$bus = this
            }
        })
        ```
    3、使用事件总线
        1_ 接收数据：如果A组件想接收数据就在A组件中绑定自定义事件，事件的回调要留在A中

        methods:{
            demo(data){}
        },
        mounted(){
            this.$bus.$on('xxx',this.demo)
        }
        
        2_ 提供数据: 在发送数据的组件中触发自定义事件
        this.$bus.$emit('xxx',data)
    4、最好在beforeDestory钩子中用$off解绑当前组件绑定的自定义事件

### 消息订阅与发布
    1、一种组件间的通讯方式，适用于任意组件通信
    2、使用步骤
        1_ 安装订阅发布库（pubsub-js） npm i pubsub-js
        2_ 引入pubsub    import pubsub from "pubsub-js"
        3_ 接收数据 A想拿到数据 就在A中订阅消息 回调函数留在A中 回调会有两个参数第一个参数为订阅消息的名称 第二个参数为携带的数据
            > methods:{
                    demo(subName,data){
                        ....
                    }
                }
                mounted(){
                    this.pubId = pubsub.subscribe('xxx',this.demo)
                }
        4_ 发送数据  pubsub.publish('xxx',数据)
        5_ 最好在beforeDestory钩子中取消订阅 pubsub.unscribe(this.pubId)