<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <div class="ms-content">
        <a-form layout="inline" :model="formInline" @submit="handleSubmit">
          <a-form-item>
            <a-input v-model:value="formInline.user" placeholder="Username">
              <template #prefix
                ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="formInline.password"
              type="password"
              placeholder="Password"
            >
              <template #prefix
                ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="formInline.user === '' || formInline.password === ''"
            >
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { reactive, getCurrentInstance } from "vue";
import { message } from "ant-design-vue";

export default {
  setup() {
    const formInline = reactive({
      username: "",
      password: "",
    });

    const { ctx } = getCurrentInstance();

    const handleSubmit = () => {
      message.info("登录成功！");

      setTimeout(() => {
        ctx.$router.push("/index");
      }, 1000);
    };

    return {
      formInline,
      handleSubmit,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(/@/assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #000;
  font-weight: bolder;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>