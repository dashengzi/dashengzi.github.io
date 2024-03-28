(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{333:function(n,t,a){"use strict";a.r(t);var r=a(8),e=Object(r.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"手写lazyman"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手写lazyman"}},[n._v("#")]),n._v(" 手写LazyMan")]),n._v(" "),t("ul",[t("li",[n._v("支持sleep和eat两个方法")]),n._v(" "),t("li",[n._v("支持链式调用")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// LazyMan示例\nconst me = new LazyMan('张三')\nme.eat('苹果').eat('香蕉').sleep(5).eat('葡萄')\n// 打印\n// 张三 eat 苹果\n// 张三 eat 香蕉\n// 等待5秒\n// 张三 eat 葡萄\n\n")])])]),t("p",[n._v("实现思路")]),n._v(" "),t("ul",[t("li",[n._v("由于有sleep功能，函数不能直接在调用时触发")]),n._v(" "),t("li",[n._v("初始化一个队列，把函数注册进去")]),n._v(" "),t("li",[n._v("由每个item触发next执行（遇到sleep则异步触发，使用setTimeout）")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class LazyMan {\n  constructor(name) {\n    this.name = name\n      this.tasks = []\n      setTimeout(() => {\n        this.next()\n      });\n  }\n  next() {\n    const task = this.tasks.shift()\n    task && task()\n  }\n  eat(food) {\n    const task = () => {\n      console.info(`${this.name} eat ${food}`)\n      this.next() // 立刻执行下一个任务\n    }\n    this.tasks.push(task)\n    return this // 链式调用\n  }\n  sleep(seconds) {\n    const task = () => {\n      console.info(`${this.name} 开始睡觉`)\n      setTimeout(() => {\n        console.info(`${this.name} 已经睡完了 ${seconds}s，开始执行下一个任务`)\n        this.next() // xx 秒之后再执行下一个任务\n      }, seconds * 1000)\n  } \n    this.tasks.push(task)\n    return this // 链式调用\n  }\n}\n")])])]),t("h2",{attrs:{id:"手写gettype函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手写gettype函数"}},[n._v("#")]),n._v(" 手写getType函数")]),n._v(" "),t("ul",[t("li",[n._v("获取详细的数据类型")])]),n._v(" "),t("p",[n._v("方法1：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function getType(x) {\n  const originType = Object.prototype.toString.call(x) // '[object String]'\n  const spaceIndex = originType.indexOf(' ')\n  const type = originType.slice(spaceIndex + 1, -1) // 'String' -1不要右边的]\n  return type.toLowerCase() // 'string'\n}\n")])])]),t("p",[n._v("方法2：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function toType(obj) {\n  if (obj == null) return obj + "";\n  var reg = /^\\[object ([a-zA-Z0-9]+)\\]$/i;\n  return typeof obj === "object" || typeof obj === "function" ?\n    reg.exec(toString.call(obj))[1].toLowerCase() :\n    typeof obj;\n};\n')])])]),t("h2",{attrs:{id:"数组相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组相关"}},[n._v("#")]),n._v(" 数组相关")]),n._v(" "),t("h3",{attrs:{id:"at"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#at"}},[n._v("#")]),n._v(" at")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let arr = [1, 2, 4, 5];\n\n/**\n * at - 接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数\n * @param index\n * @return 匹配给定索引的数组中的元素。如果找不到指定的索引，则返回 undefined\n */\nArray.prototype._at = function (index) {\n  let n = Math.trunc(index) || 0\n  if(n<0) n+=this.length;\n  if (n < 0 || n >= this.length) return undefined;\n  return this[n];\n}\nconsole.log(arr._at(-3.62222222))\n")])])]),t("h3",{attrs:{id:"contact"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contact"}},[n._v("#")]),n._v(" contact")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let arr = [1, 2, 4, 5];\n\n/**\n * concat - 不会改变原数组\n * @param args - 数组和/或值，将被合并到一个新的数组中。如果省略了所有 valueN 参数，则 concat 会返回调    \n * 用此方法的现存数组的一个浅拷贝。\n * @return - 返回1个新数组\n */\nArray.prototype._contact = function (...args) {\n\n  if(args.length==0) return this;\n  let newArray = this;\n  for (let i = 0; i < args.length; i++) {\n    if(Array.isArray(args[i])){\n      newArray.push(...args[i])\n    }else{\n      newArray.push(args[i])\n    }\n  }\n  return newArray\n\n}\nlet res = arr._contact();\n")])])]),t("h3",{attrs:{id:"foreach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[n._v("#")]),n._v(" forEach")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('let arr = [1, 2, 4, 5];\n\n/**\n * forEach - 不会改变原数组\n * @param {Function} callback - 有3个参数，数组中正在处理的当前元素、数组中正在处理的当前元素的索引、\n * forEach()方法正在操作的数组\n * @param {Any} thisArg - 可选参数。当执行回调函数callback时，用作 this 的值。如果 thisArg 参数有值，则每次 callback函数被    \n * 调用时，this 都会指向 thisArg 参数。如果省略了 thisArg 参数，或者其值为 null 或 undefined，this 则指向全局对象。\n * @return undefined\n */\nArray.prototype._forEach = function (callback, thisArg) {\n  console.log(thisArg,this);\n  // 判断callback是否为函数\n  if (typeof callback !== "function") {\n    throw new Error(`${callback} is not a function`);\n  }\n  // 判断当前调用对象是不是数组\n  //if (!Array.isArray(this)) {\n    //throw new Error(`${this} is not a Array`);\n  //}\n  for (let i = 0; i < this.length; i++) {\n    callback.call(thisArg, this[i], i, this);\n  }\n};\narr._forEach((m) => {\n  console.log(m);\n});\n')])])]),t("h3",{attrs:{id:"filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[n._v("#")]),n._v(" filter")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('let arr = [1, 2, 4, 5];\n\n/**\n * filter - 不会改变原数组\n * @param {Function} callback - 有3个参数，数组中当前正在处理的元素、正在处理的元素在数组中的索引、调     \n * 用了 filter() 的数组本身\n * @param {Any} thisArg - 可选参数。执行 callback 时，用于 this 的值。如果为 filter() 提供一个 \n * thisArg 参数，则它会被作为callback被调用时的 this 值。否则，callback的 this 值在非严格模式下将是全 \n * 局对象，严格模式下为 undefined。\n * @return {Array} - 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。\n */\nArray.prototype._filter = function (callback, thisArg) {\n  // 判断callback是否为函数\n  if (typeof callback !== "function") {\n    throw new Error(`callback is not a function`);\n  }\n  // 存储通过测试的元素\n  let newArray = [];\n  for (let i = 0; i < this.length; i++) {\n    if (callback.call(thisArg, this[i], i, this)) {\n      newArray.push(this[i])\n    }\n  }\n  return newArray;\n}\nlet res = arr._filter(function (m) {\n  return m>=2\n})\n')])])]),t("h3",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[n._v("#")]),n._v(" map")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('let arr = [1, 2, 4, 5];\n/**\n * map - 不会改变原数组\n * @param {Function} callback - 有3个参数，数组中当前正在处理的元素、正在处理的元素在数组中的索引、\n * 调用了 filter() 的数组本身\n * @param {Any} thisArg\n * @return {Array} - 一个新数组，每个元素都是回调函数的返回值。\n */\nArray.prototype._map = function (callback,thisArg) {\n  // 判断callback是否为函数\n  if (typeof callback !== "function") {\n    throw new Error(`callback is not a function`);\n  }\n  let newArray = [];\n  for (let i = 0; i < this.length; i++) {\n    newArray[i] = callback.call(thisArg, this[i], i, this)\n  }\n  return newArray;\n}\nlet res = arr._map((m)=> ++m)\n')])])]),t("h3",{attrs:{id:"every"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#every"}},[n._v("#")]),n._v(" every")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let arr = [1, 2, 4, 5];\n\n/**\n * every - 不会改变原数组\n * @param callback\n * @param thisArg\n * @return 如果回调函数的每一次返回都为 truthy 值，返回 true，否则返回 false。\n * require('../internals/array-iteration').every\n */\nArray.prototype._every = function (callback, thisArg) {\n  // 判断callback是否为函数\n  if (typeof callback !== \"function\") {\n    throw new Error(`callback is not a function`);\n  }\n  for (let i = 0; i < this.length; i++) {\n    let res = callback.call(thisArg, this[i], i, this);\n    if (!res) {\n      return false\n    }\n  }\n  return true\n}\nconsole.log(arr._every(x => x >= 2))\n\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[n._v("注意：传入一个空数组，无论如何都会返回 true")])]),n._v(" "),t("h3",{attrs:{id:"some"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#some"}},[n._v("#")]),n._v(" some")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('/**\n * some - 不会改变原数组\n * @param callback\n * @param thisArg\n * @return 数组中有至少一个元素通过回调函数的测试就会返回 true；所有元素都没有通过回调函数的测试返回值才会为 false。\n */\nArray.prototype._some = function (callback, thisArg) {\n  // 判断callback是否为函数\n  if (Object.prototype.toString.call(callback)  !== "[object Function]") {\n    throw new Error(`callback is not a function`);\n  }\n  for (let i = 0; i < this.length; i++) {\n    let res = callback.call(thisArg, this[i], i, this);\n    if (res) {\n      return true\n    }\n  }\n  return false\n}\nlet res = arr._some(m=>m<2)\nconsole.log(res)\n')])])]),t("h3",{attrs:{id:"flat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flat"}},[n._v("#")]),n._v(" flat")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/**\n * flat - 不会改变原数组\n * @param depth 指定要提取嵌套数组的结构深度，默认值为 1。\n * @return 一个新的数组，其中包含拼接后的子数组元素\n * \n*/\n1.不控制嵌套\n思路：循环判断数组的每一项是否为数组，是数组就递归调用方法，否则push到新数组里\nlet arr = [1, [2, [3, [4, 5]]], 6];\nfunction _flat(arr) {\n  let result = []\n  for (let i = 0; i < arr.length; i++) {\n    if(Array.isArray(arr[i])){\n      result = result.concat(_flat(arr[i]));\n    }else{\n      result.push(arr[i])\n    }\n  }\n  return result;\n}\n//输出：[1, 2, 3, 4, 5, 6]\n\n2.控制嵌套\nfunction _flat(arr, deepth = 1) {\n  // 如果是 无穷大，默认20层\n  // if (deepth === Infinity) {\n  //   deepth = 20;\n  // }\n  // // 校验参数\n  // if (deepth <= 0) {\n    //   return nums;\n  // }\n  let result = [];\n  arr.forEach(el => {\n  // 控制递归条件\n    if (Array.isArray(el) && deepth > 0) {\n      result = result.concat(_flat(el, deepth - 1));\n    } else {\n        result.push(el)\n    }\n  });\n    return result;\n}\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);