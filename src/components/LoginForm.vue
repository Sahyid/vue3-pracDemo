<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="loginUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item>

      <router-link to="/index">
        <el-button
            @click="handleLogin('loginForm')"
            type="primary"
            class="submit-btn"
        >提交</el-button
        >
      </router-link>

    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a @click="findPWD()" style="cursor:pointer;">立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import {useRouter} from 'vue-router'
export default {
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          router.push('/');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    //找回密码
    const findPWD = () => {
        //router.push('/');
    };
    return { handleLogin,findPWD};
  },
};
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>