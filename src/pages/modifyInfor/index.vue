<template>
  <div class="register-context">
    <div class="hr-top"></div>
    <div class="hr-t"></div>
    <div class="form">
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">用户名</span>
        <input type="text" class="input disabled" v-model="information.username" disabled>
      </div>
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">姓名</span>
        <input type="text" class="input" v-model="information.name">
      </div>
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">手机号码</span>
        <input type="Number" class="input" v-model="information.phone">
      </div>
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">项目名称</span>
        <input
          type="text"
          @input="moneyControl"
          disabled
          class="input"
          v-model="information.projectname"
        >
        <i class="select" @click="setSeclect('projectsBool')"></i>
        <div class="projects" v-show="projectsBool">
          <div
            :key="item.ID"
            v-for="item in projects"
            @click="selectProject(item.ID, 'projectsBool', 'projectname')"
          >{{item.ID}}</div>
        </div>
      </div>
      <div class="form-item">
        <i class="item-i">*</i>
        <span class="text">公司名称</span>
        <input
          type="text"
          @input="moneyControl"
          disabled
          class="input"
          v-model="information.company"
        >
        <i class="select" @click="setSeclect('companysBool')"></i>
        <div class="projects" v-show="companysBool">
          <div
            :key="item._id"
            v-for="item in companys"
            @click="selectProject(item.companyName, 'companysBool', 'company')"
          >{{item.companyName}}</div>
        </div>
      </div>
      <div class="button">
        <button class="register" @click="modify">修改</button>
        <button class="register" @click="logout">注销</button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/card.vue";

export default {
  name: "modifyInfor",
  data() {
    return {
      information: {
        name: "",
        username: "",
        phone: "",
        company: "",
        projectname: "",
        _id: ""
      },
      closeSuccessBool: false,
      projects: [],
      projectsBool: false,
      companys: [],
      companysBool: false
    };
  },
  created() {},
  mounted() {
    let that = this;
    // 获取 用户数据
    that.getUserStorage().then(res => {
      // 赋值
      for (let item in res) {
        for (let nItem in that.information) {
          if (item === nItem) {
            that.information[nItem] = res[item];
          }
        }
      }
    });
    // 链接数据库
    const db = wx.cloud.database({});
    // 请求项目列表
    db.collection("project").get({
      success: function(res) {
        that.$store.dispatch("pushProjects", res.data);
        that.projects = that.$store.getters.getProjects;
      },
      fail: function(res) {
        console.log(res);
      }
    });
    // 请求公司名称列表
    db.collection("companys").get({
      success: function(res) {
        that.companys = res.data;
      },
      fail: function(res) {
        console.log(res);
      }
    });
  },
  methods: {
    // 更新 用户数据
    modify() {
      let that = this;
      let { name, phone, company, projectname } = this.information;
      const db = wx.cloud.database();
      db
        .collection("user")
        .doc(that.information._id)
        .update({
          data: {
            name: name,
            company: company,
            phone: phone,
            projectname: projectname
          },
          success: function(res) {
            that.getUserStorage().then(res => {
              wx.setStorage({
                key: "userInfo",
                data: { ...res, ...that.information }
              });
              that.$store.dispatch("setUserInfo", {
                ...res,
                ...that.information
              });
              wx.navigateTo({
                url: "../index/main"
              });
            });
          },
          fail: err => {
            console.log(err);
          }
        });
    },
    // 清空缓存 跳转
    logout() {
      // 清空本地缓存
      wx.clearStorage();
      // 路由跳转
      wx.redirectTo({
        url: "../login/main"
      });
      // 清空池子数据
      this.$store.dispatch("clearUserInfo");
    },
    moneyControl(e) {},
    // 关闭 注册成功弹板
    closeSuccess() {
      this.closeSuccessBool = false;
    },
    // 开挂 下拉列表
    setSeclect(value) {
      this[value] = !this[value];
    },
    // 选择项目 公司名字
    selectProject(item, value, name) {
      this[value] = !this[value];
      this.information[name] = item;
    },
    // 查找缓存
    getUserStorage() {
      return new Promise((resolve, reject) => {
        wx.getStorage({
          key: "userInfo",
          success(res) {
            if (res.errMsg === "getStorage:ok") {
              resolve(res.data);
            }
          },
          fail(re) {
            console.log(re);
          }
        });
      });
    }
  },
  components: {
    Card
  }
};
</script>

<style scoped>
/* 线 */
.hr-top {
  border: 0.5px solid #dddddd;
}

/* 渐变色线 */
.hr-t {
  width: 50%;
  height: 3px;
  margin: 0 auto;
  background: linear-gradient(to right, #27f29b, #08a4f8);
}

/* 表单 div */
.form {
  margin: 0 5%;
  margin-top: 8%;
}

/* 单个input div */
.form-item {
  height: 50px;
  position: relative;
}

/* input */
.form-item > input {
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  width: 235px;
  height: 35px;
  color: #f04e15;
  position: absolute;
  right: 0;
  top: 0;
  padding-left: 6px;
}
span.text {
  margin-left: 1px;
  line-height: 40px;
  font-size: 18px;
}
/* 星号 */
.item-i {
  color: #dc454b;
  display: initial;
}

/* 注册按钮 */
.register {
  background: linear-gradient(to right, #f47120, #f36121);
  color: white;
  width: 30%;
  margin-top: 35px;
  line-height: 35px;
}
/* 选择按钮 */
.select {
  width: 28px;
  height: 15px;
  background-image: url("./select.png");
  background-repeat: no-repeat;
  background-size: 90%;
  position: absolute;
  top: 15px;
  right: 5px;
  z-index: 1000;
}

.projects {
  position: absolute;
  top: 38px;
  right: 0px;
  border: 1px solid #cbcbcb;
  width: 230px;
  z-index: 3000;
  background-color: white;
  max-height: 150px;
  overflow: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
.projects > div {
  height: 25px;
  line-height: 25px;
}
.disabled {
  background-color: rgba(141, 138, 133, 0.1);
}
.button {
  display: flex;
}
</style>
