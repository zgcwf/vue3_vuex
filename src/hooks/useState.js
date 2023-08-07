// 在setup中使用mapState映射计算属性，简化读取操作
import { computed } from 'vue'
import { mapState, useStore } from 'vuex'

// mapper可以是对象形式的参数，也可以是数组形式的参数
export default function useState(mapper) {
  const store = useStore()
  const state = mapState(mapper)
  const result = {}

  Object.keys(state).forEach(key => {
    result[key] = computed(state[key].bind({ $store: store }))
  })

  return result
}