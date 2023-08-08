import { mapActions, useStore } from "vuex";

/**
 * 生成与actions对话的方法
 * @param { object | string[] } mapper mapActions所需要的参数
 * @returns 返回值是触发actions的方法对象
 */
export default function useActions(mapper) {
  const store = useStore();
  const actions = mapActions(mapper);
  const result = {};

  Object.keys(actions).forEach((key) => {
    result[key] = actions[key].bind({ $store: store });
  });

  return result;
}
