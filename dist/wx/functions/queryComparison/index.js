// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  const res = await db.collection(event.dbName).where({ sn: event.result.sn }).get()
  if (res.data.length > 0) {
    if (event.result.mac != undefined) {
      // 判断是否为用过
      if (event.result.mac === res.data[0].mac) {
        return {
          msg: '',
          ok: 1,
          result: res.data[0].actuvatuion
        }
      }
      // 判断 sn 是否被启用
      if (res.data[0].mac === undefined) {
        // 插入 mac
        const result = await db.collection(event.dbName).where({ sn: event.result.sn }).update({
          data: {
            mac: event.result.mac,
            actuvatuion: event.result.actuvatuion
          }
        })
        const resul = await db.collection(event.dbName).where({ sn: event.result.sn }).get()
        return {
          result: resul.data[0].actuvatuion
        }
      }
      // 判断 mac 是否被占用
      if (event.result.mac !== res.data[0].mac && res.data[0].mac !== undefined) {
        return {
          msg: '已经被占用',
          ok: 0
        }
      }
    } else {
      return {
        msg: 'mac kong',
        ok: 0
      }
    }
  } else {
    return {
      msg: 'sn nonthing',
      ok: 0
    }
  }
}
