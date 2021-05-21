/**
 * @name 数组去重
 * @param {arr} -- 数组
 * @param {key} -- 去重属性
 */
function unique(arr, key) {
  const res = new Map();
  return arr.filter((a) => !res.has(a.key) && res.set(a.key, 1));
}
export default unique;
