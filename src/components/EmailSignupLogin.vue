<template>
  <div>
    emailAdress: {{ emailAdress }}
    password: {{ password }}
  </div>
</template>
<script>
import * as firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      password: '1234',
      passwordReenter: '1234',
      emailAdress: 'john@gmail.com',
    }
  },
  methods: {
    ...mapActions(['setUser']),
    registerViaEmail() {
      return new Promise((resolve, reject) => {
        if (this.password.length > 0 && this.password === this.passwordReenter) {
          firebase.auth().createUserWithEmailAndPassword(this.emailAdress, this.password).then((result) => {
            const { user } = result;
            console.log(result);
            this.setUser(user);
            this.$router.push('/stocks');
            resolve()
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.error = errorMessage;
            console.error({ errorCode, errorMessage, error });
            reject(errorMessage)
          });
        } else {
          this.error = 'passwords not matching';
          reject(this.error)
        }
      })
    },
  },
}
</script>