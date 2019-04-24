/* eslint-disable indent */
import CryptoJS from 'crypto-js'

class Util {
  // eslint-disable-next-line space-before-function-paren
  decryptByDES(ciphertext, key) {
    let keyHex = CryptoJS.enc.Utf8.parse(key)
    let decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
      },
      keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }
    )
    return decrypted.toString(CryptoJS.enc.Utf8)
  }
}

export default new Util()
