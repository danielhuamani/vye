<template>
  <div class=''>
    <amplify-authenticator
      v-if="authState !== 'signedin'"
    ></amplify-authenticator>
    <div v-if="authState === 'signedin' && user">
      <amplify-sign-out></amplify-sign-out>
      <div>Hello, {{user.email}}</div>
    </div>
    <amplify-auth-container>
      <amplify-authenticator username-alias="email">
        <amplify-sign-up
          slot="sign-up"
          username-alias="email"
          :formFields="formFields"
        ></amplify-sign-up>
      </amplify-authenticator>
    </amplify-auth-container>
  </div>
</template>
<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
export default {
  name: 'RegisterView',
  created () {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
      console.log('consoleaaa', authData, authState)
      if (authState === 'signedin') {
        this.$store.commit('setUser', authData.storage)
        this.$router.push({ name: 'dashboard' })
      }
    })
  },
  data () {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      email: '',
      password: '',
      formFields: [
        {
          type: 'email'
        },
        {
          typle: 'password'
        }
      ]
    }
  }
}
</script>
