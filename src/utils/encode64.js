export { strUnicode2Ansi, strAnsi2Unicode } from './UnicodeAnsi'

let keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

// 将Ansi编码的字符串进行Base64编码
function encode64 (input) {
  let output = ''
  let chr1
  let chr2
  let chr3 = ''
  let enc1
  let enc2
  let enc3
  let enc4 = ''
  let i = 0
  do {
    chr1 = input.charCodeAt(i++)
    chr2 = input.charCodeAt(i++)
    chr3 = input.charCodeAt(i++)
    enc1 = chr1 >> 2
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
    enc4 = chr3 & 63
    if (isNaN(chr2)) {
      enc3 = enc4 = 64
    } else if (isNaN(chr3)) {
      enc4 = 64
    }
    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4)
    chr1 = chr2 = chr3 = ''
    enc1 = enc2 = enc3 = enc4 = ''
  } while (i < input.length)
  return output
}

// 将Base64编码字符串转换成Ansi编码的字符串
function decode64 (input) {
  let output = ''
  let chr1
  let chr2
  let chr3 = ''
  let enc1
  let enc2
  let enc3
  let enc4 = ''
  let i = 0
  if (input.length % 4 != 0) {
    return ''
  }
  // eslint-disable-next-line no-useless-escape
  let base64test = /[^A-Za-z0-9\+\/\=]/g
  if (base64test.exec(input)) {
    return ''
  }
  do {
    enc1 = keyStr.indexOf(input.charAt(i++))
    enc2 = keyStr.indexOf(input.charAt(i++))
    enc3 = keyStr.indexOf(input.charAt(i++))
    enc4 = keyStr.indexOf(input.charAt(i++))
    chr1 = (enc1 << 2) | (enc2 >> 4)
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
    chr3 = ((enc3 & 3) << 6) | enc4
    output = output + String.fromCharCode(chr1)
    if (enc3 != 64) {
      output += String.fromCharCode(chr2)
    }
    if (enc4 != 64) {
      output += String.fromCharCode(chr3)
    }
    chr1 = chr2 = chr3 = ''
    enc1 = enc2 = enc3 = enc4 = ''
  } while (i < input.length)
  return output
}

export { decode64, encode64 }
