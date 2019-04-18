// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let dbName = event.dbName;
  let filter = event.filter ? event.filter : null;
  let pageIndex = event.pageIndex ? event.pageIndex : 1;
  let pageSize = event.pageSize ? event.pageSize : 10;
  let total = event.total;
  let totalPage = Math.ceil(total / pageSize);
  let hasMore;
  if (pageIndex > totalPage || pageIndex == totalPage) {
    hasMore = false;
  } else {
    hasMore = true;
  }

  return db.collection(dbName).where(filter).skip((pageIndex - 1) * pageSize).limit(pageSize).get().then(response => {
    response.hasMore = hasMore;
    response.pageIndex = pageIndex;
    return response;
  })
}