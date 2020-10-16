/**
 * 是否发布
 * @type {{}}
 */
const IfPublic = {
  YES: "1",
  NO: "0"
}

export default {
  install(Vue,options){
    Vue.prototype.$IfPublic = IfPublic;
  }
}
