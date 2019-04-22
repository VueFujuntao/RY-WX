<template>
  <div class="list-content">
    <div class="user-name" @click="goModifyInfor">{{name}}</div>
    <div class="table">
      <div class="tr">
        <div class="th">序号</div>
        <div class="th">SN</div>
      </div>
      <div :class="{'color': index%2 == 0}" class="tr" v-for="(item, index) in sn" :key="item._id">
        <div class="th">{{index + 1 + (pageNumber -1) * 10}}</div>
        <div class="th">{{item.sn}}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="now-number">
        第
        <div class="number">{{pageNumber}}</div>
        页
      </div>
      <div class="go jian" @click="getList('-')">上一页</div>
      <div class="go add" @click="getList('+')">下一页</div>
      <div class="jump-to">跳转至</div>
      <input class="jump" v-model="sumpNumber">
      <div>页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      name: '用户名',
      sn: [],
      sumpNumber: 1,
      pageNumber: 1,
      pageSize: 10,
      total: 0
    }
  },
  onShow () {
    let { name } = this.$store.getters.getUserInfo
    if (this.$store.getters.getUserInfo) {
      this.name = name
    }
  },
  mounted () {
    let that = this
    let { name, _id } = that.$store.getters.getUserInfo
    if (that.$store.getters.getUserInfo) {
      that.name = name
    }
    if (_id != undefined) {
      this.getTotal(_id).then(res => {
        wx.cloud.callFunction({
          name: 'limit',
          data: {
            dbName: 'sn',
            pageIndex: that.pageNumber,
            pageSize: that.pageSize,
            total: res,
            filter: {userid: _id}
          }
        }).then(response => {
          that.sn = response.result.data
        })
      })
    }
  },
  methods: {
    // 获取列表
    getList (value) {
      let that = this
      if (value === '+' && that.pageNumber !== Math.ceil(that.total.total / that.pageSize)) {
        that.sn = []
        that.pageNumber += 1
        wx.cloud.callFunction({
          name: 'limit',
          data: {
            dbName: 'sn',
            pageIndex: that.pageNumber,
            pageSize: that.pageSize,
            total: that.total.total,
            filter: {userid: that.$store.getters.getUserInfo._id}
          }
        }).then(response => {
          that.sn = response.result.data
        })
      } else if (value === '-' && that.pageNumber !== 1) {
        that.sn = []
        that.pageNumber -= 1
        wx.cloud.callFunction({
          name: 'limit',
          data: {
            dbName: 'sn',
            pageIndex: that.pageNumber,
            pageSize: that.pageSize,
            total: that.total.total,
            filter: {userid: that.$store.getters.getUserInfo._id}
          }
        }).then(response => {
          that.sn = response.result.data
        })
      }
    },
    // 获取总页数
    async getTotal (userid) {
      let that = this
      const db = wx.cloud.database({})
      that.total = await db.collection('sn').where({userid: userid}).count()
      return that.total.total
    },
    // 跳转至修改数据
    goModifyInfor () {
      wx.navigateTo({
        url: '../modifyInfor/main'
      })
    }
  }
}
</script>

<style scoped>
.list-content {
  position: absolute;
  height: 100%;
  width: 100%;
}
.user-name {
  border-bottom: 1px solid #bcbcbc;
  padding-bottom: 5px;
  padding-left: 5px;
}
.table {
  width: 300px;
  margin: auto;
  margin-top: 25px;
  border-top: 1px solid #c6c6c6;
  border-right: 1px solid #c6c6c6;
  border-left: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;
}
.tr {
  display: flex;
  background-color: #e6e6e6;
}
.tr>div {
  text-align: center;
  padding: 5px;
  border: 1px solid #c6c6c6;
}
.tr>div:nth-child(1) {
  border-right: 1px solid #c6c6c6;
  width: 80px;
}
.tr>div:nth-child(2) {
  width: 220px;
}
.bottom {
  position: absolute;
  bottom: 20px;
  width: 100%;
  font-size: 15px;
  display: flex;
  justify-content: space-around;
}
.bottom>div{
  height:23px;
  line-height: 23px;
  text-align: center;
}
.go {
  width: 60px;
  background-color: #f0f0f0;
}
.jump {
 background-color: #f0f0f0;
 width: 30px;
 margin-right: -20px;
 text-align: center;
}
.jump-to {
  margin-right: -20px;
}
.add {
  margin-right: -10px;
}
.jian {
  margin-right: -20px;
}
.now-number {
  width: 60px;
  display: flex;
}
.number {
  color: #a7907e;
  margin-left: 10px;
  margin-right: 10px;
}
.color {
  background-color: white;
}
</style>
