<template>
  <div class=''>
    <form action='' @submit.prevent='register' >
      <input type='text' v-model='email' />
      <input type='text' v-model='password' />
      <button type='submit'>Registrar</button>
    </form>
    <amplify-auth-container>
      <amplify-authenticator></amplify-authenticator>
    </amplify-auth-container>
  </div>
</template>
<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'RegisterView',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await Auth.signUp({
        username: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>
