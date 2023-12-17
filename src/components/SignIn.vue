<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { reactive } from 'vue'

interface ISignInForm {
  email: string;
  password: string;
}

const router = useRouter()

const signInForm = reactive<ISignInForm>({
  email: '',
  password: '',
})

function handleSignIn()  {
  console.log(signInForm)
  alert('welcome!')
  router.push({path: '/'})
}

</script>

<template>
  <section class='loginContainer'>
  <h1>로그인</h1>
  <form class='formWrapper' @submit.prevent='handleSignIn'>
    <div class='inputWrapper'>
      <label>이메일</label>
      <input v-model='signInForm.email' type='text' placeholder='email@example.com' />
    </div>
    <div class='inputWrapper'>
      <label>비밀번호</label>
      <input v-model='signInForm.password' type='password' placeholder='8자리 이상' />
    </div>
    <button class='submitBtn' type='submit'>SIGN IN</button>
  </form>
</section>
</template>

<style lang='scss'>
.loginContainer {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 80px 20px;
}

h1 {
  color: rgba(255,255,255,1);
  font-size: 32px;
  margin: 0;
}

.formWrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    color: rgba(255,255,255,0.8);
    font-size: 16px;
  }

  input {
    color: rgba(255,255,255,1);
    font-size: 16px;
    height: 48px;
    padding: 0 16px;
    border: 1px solid rgba(255,255,255,0);
    border-radius: 4px;
    background-color: rgba(255,255,255,0.1);

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(255,255,255,0.4);
      font-size: 16px;
    }
  }
}

.submitBtn {
  color: rgba(255,255,255,1);
  font-size: 18px;
  font-weight: 600;
  background-color: #2F6AFE;
  border: none;
  border-radius: 4px;
  height: 48px;
  margin-top: 16px;
}
</style>