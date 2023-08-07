import { computed } from "vue";
import { mapGetters, useStore } from "vuex";

/**
 * 映射getters中的数据为计算属性
 * @param {} mapper - useGetters所需要的参数
 * @returns 返回值是映射完成的计算属性对象
 */
export default function useGetters(mapper) {
  const store = useStore();
  const getters = mapGetters(mapper);
  const result = {};

  Object.keys(getters).forEach((key) => {
    result[key] = computed(getters[key].bind({ $store: store }));
  });

  return result;
}
