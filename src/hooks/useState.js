import { computed } from "vue";
import { mapState, useStore } from "vuex";

/**
 * 映射state中的数据为计算属性
 * @param {*} mapper - mapState所需要的参数
 * @returns 返回值是映射完成的计算属性对象
 */
export default function useState(mapper) {
  const store = useStore();
  const state = mapState(mapper);
  const result = {};

  Object.keys(state).forEach((key) => {
    result[key] = computed(state[key].bind({ $store: store }));
  });

  return result;
}
