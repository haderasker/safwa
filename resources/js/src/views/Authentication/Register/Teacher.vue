<template>
  <div class="clearfix">
    <vs-input
        v-validate="'required|email'"
        data-vv-validate-on="blur"
        name="email"
        type="email"
        label-placeholder="Email"
        placeholder="Email"
        v-model="email"
        class="w-full mt-6"/>
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

    <vs-input
        ref="password"
        type="password"
        data-vv-validate-on="blur"
        v-validate="'required|min:6'"
        name="password"
        label-placeholder="Password"
        placeholder="Password"
        v-model="password"
        class="w-full mt-6"/>
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <vs-input
        type="password"
        v-validate="'min:6|max:10|confirmed:password'"
        data-vv-validate-on="blur"
        data-vv-as="password"
        name="confirm_password"
        label-placeholder="Confirm Password"
        placeholder="Confirm Password"
        v-model="confirm_password"
        class="w-full mt-6"/>
    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

    <vs-button type="border" :to="{ name: 'login' }" class="mt-6">Back To Login</vs-button>
    <vs-button class="float-right mt-6" @click="registerTeacher" :disabled="!validateForm">Register</vs-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirm_password: ''
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.email !== '' && this.password !== '' && this.confirm_password !== ''
    }
  },
  methods: {
    async registerTeacher() {
      if (!this.validateForm) return

      this.$vs.loading()

      await this.$store.dispatch('auth/registerUserJWT', {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirm_password
      })

      this.$vs.loading.close()

      this.$router.push({name: 'login'}).catch(() => {
      })
    }
  }
}
</script>
