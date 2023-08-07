import { mapMutations, useStore } from "vuex";

/**
 * 生成与mutations对话的方法
 * @param {*} mapper - mapMutations所需要的参数
 * @returns 返回值是触发mutations的方法对象
 */
export default function useState(mapper) {
  const store = useStore();
  const mutations = mapMutations(mapper);
  const result = {};

  Object.keys(mutations).forEach((key) => {
    result[key] = mutations[key].bind({ $store: store });
  });

  return result;
}
