// 导入组件，组件必须声明 name
import componentButton from './src/button.vue'

// 为组件提供 install 安装方法，供按需引入
componentButton.install = function (Vue) {
  Vue.component(componentButton.name, componentButton)
}

// 默认导出组件
export default componentButton