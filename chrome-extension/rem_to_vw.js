document.querySelector('#doTrans').addEventListener('click', doTransFrom)

function doTransFrom() {
  let value = document.querySelector('#before').value
  let multiple = document.querySelector('#client-compute').value
  let divide = document.querySelector('#font-compute').value
  let oldtip = document.querySelector('#transform-before').value
  let newtip = document.querySelector('#transform-after').value
  let supplementValue = supplement(value)
  document.querySelector('#result').value = exchangeAllNew(supplementValue,
    oldtip,
    newtip,
    multiple,
    divide)
}

// 将小数点前的0补齐
function supplement(_s) {
  let reg = new RegExp("." + "((-?\\d+)(\\.\\d+)?)+", "gi") //匹配带rem单位的属性值
  let newStr = _s.replace(reg, function (_x) {
    if(_x.split('.')[0] === ''){
      return "0" + _x //计算vw的值
    }else{
      return _x
    }
  })
  return newStr
}

// 将某个单位全部转换为某个单位
function exchangeAllNew(_s, oldtip, newtip, multiple, divide) {
  let reg = new RegExp("((-?\\d+)(\\.\\d+)?)+" + "(" + oldtip + ")", "gi") //匹配带rem单位的属性值
  let regTwo = new RegExp("" + oldtip, "i")

  let newStr = _s.replace(reg, function (_x) {
    console.log(_x)
    _x = _x.replace(regTwo, '')
    return parseFloat(_x) * multiple / divide + newtip + "" //计算vw的值
  })
  return newStr
}
//
//
// // rem转vw的函数
// function remToVw(_s, exchangeList) {
//   let length = (exchangeList && exchangeList.length > 0) ? exchangeList.length : 0
//   let result = _s
//   for (let i = 0; i < length; i++) {
//     result = exchange(result, exchangeList[i])
//   }
//   return result
// }
//
// // 将某个属性的某个单位转为新单位
// function remToVwNew(_s, exchangeList, oldtip, newtip, multiple, divide) {
//   let length = (exchangeList && exchangeList.length > 0) ? exchangeList.length : 0
//   let result = _s
//   for (let i = 0; i < length; i++) {
//     result = exchangeNew(result, exchangeList[i], oldtip, newtip, multiple, divide)
//   }
//   return result
// }
//
// function exchangeNew(_s, attribute, oldtip, newtip, multiple, divide) {
//   let reg = new RegExp(attribute + "(\\:|: )+((-?\\d+)(\\.\\d+)?)+" + "(" + oldtip + ")", "gi") //匹配带rem单位的属性值
//   let regOne = new RegExp(attribute + "(\\:|: )")
//   let regTwo = new RegExp("" + oldtip, "i")
//
//   let newStr = _s.replace(reg, function (_x) {
//     console.log(_x)
//     _x = _x.replace(regOne, '').replace(regTwo, '')
//     return attribute + ":" + parseFloat(_x) * multiple / divide + newtip + '' //计算vw的值
//   })
//   return newStr
// }
//
// function exchange(_s, attribute) {
//   let reg = new RegExp(attribute + "(\\:|: )+((-?\\d+)(\\.\\d+)?)+(rem)", "gi") //匹配带rem单位的属性值
//   let regOne = new RegExp(attribute + "(\\:|: )")
//   let regTwo = new RegExp("rem", "i")
//
//   let newStr = _s.replace(reg, function (_x) {
//     console.log(_x)
//     _x = _x.replace(regOne, '').replace(regTwo, '')
//     return attribute + ":" + parseFloat(_x) * 16 * 100 / 375 + 'vw' //计算vw的值
//   })
//   return newStr
// }
//
// function exchangeAll(_s) {
//   let reg = new RegExp("((-?\\d+)(\\.\\d+)?)+(rem)", "gi") //匹配带rem单位的属性值
//   let regTwo = new RegExp("rem", "i")
//
//   let newStr = _s.replace(reg, function (_x) {
//     console.log(_x)
//     _x = _x.replace(regTwo, '')
//     return parseFloat(_x) * 16 * 100 / 375 + 'vw' //计算vw的值
//   })
//   return newStr
// }


// 解决margin的问题
