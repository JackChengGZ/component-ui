// 导入组件，组件必须声明 name
import componentHeader from './src/header.vue'

// 为组件提供 install 安装方法，供按需引入
componentHeader.install = function (Vue) {
  Vue.component(componentHeader.name, componentHeader)
}

// 默认导出组件
export default componentHeader