<template>
  <form @submit.prevent="submitHandler">
    <h1>{{'Feedback' | localize}}</h1>
    <label for="name">{{'YourName' | localize}}</label> <br/>
    <input type="text" id="name" v-model.trim="name"/> <br/>
    <small class="red" v-if="!this.$v.name.required && this.$v.name.$anyDirty"
    >{{'EnterName' | localize}}</small
    >
    <label for="email">{{'YourEmail' | localize}}</label> <br/>
    <input type="text" id="email" v-model.trim="email"/> <br/>
    <small
        class="red"
        v-if="
        (!this.$v.email.required || !this.$v.email.email) &&
          this.$v.email.$anyDirty
      "
    >{{'EnterYourEmail' | localize}}</small
    >
    <label for="text">{{'Textarea' | localize}}</label> <br/>
    <textarea id="text" v-model.trim="text"></textarea> <br/>
    <small class="red" v-if="!this.$v.text.required && this.$v.text.$anyDirty"
    >{{'EnterTextarea' | localize}}</small
    >
    <small class="red" v-if="!this.$v.text.minLength && this.$v.text.$anyDirty"
    >{{'MinLength1' | localize}}
      {{ this.$v.text.$params.minLength.min }} {{'MinLength2' | localize}}</small
    >
    <button type="submit">{{'Submit' | localize}}</button>
  </form>
</template>

<script>
  import {required, minLength, email} from 'vuelidate/lib/validators'

  export default {
    name: 'Feedback',
    data: () => ({
      name: '',
      text: '',
      email: ''
    }),
    methods: {
      submitHandler() {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          try {
            let obj = {name: this.name, text: this.text, email: this.email}
            this.$store.dispatch('addFeedbackItem', obj)
          } catch (e) {
            console.error('Error')
          }
        }
      }
    },
    validations: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      text: {
        required,
        minLength: minLength(20)
      }
    }
  }
</script>

<style scoped>
  small {
    display: block;
    margin-bottom: 10px;
  }

  .red {
    color: red;
  }

  form {
    margin-left: 90px;
    /*margin-top: 30px;*/
    padding-top: 30px;
  }

  h1 {
    margin-bottom: 15px;
  }

  input {
    width: 300px;
    height: 25px;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  textarea {
    margin-top: 5px;
    width: 300px;
    height: 150px;
    margin-bottom: 15px;
    resize: none;
  }

  button {
    width: 120px;
    height: 30px;
  }
</style>
