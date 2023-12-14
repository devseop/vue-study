<script setup lang='ts'>
import { reactive } from 'vue'

interface ISignInForm {
  email: string;
  password: string;
}

const signInForm = reactive<ISignInForm>({
  email: '',
  password: '',
})

function handleSignIn()  {
  console.log(signInForm)
  alert('welcome!')
}

</script>

<template>
  <form @submit.prevent='handleSignIn'>
    <div>
      <label>email</label>
      <input v-model='signInForm.email' type='text' placeholder='email@example.com' />
    </div>
    <div>
      <label>password</label>
      <input v-model='signInForm.password' type='password' placeholder='password' />
    </div>
    <button type='submit'>SIGN IN</button>
  </form>
</template>

<style lang='scss'>

</style>