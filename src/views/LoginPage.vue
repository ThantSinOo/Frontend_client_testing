
<template>
  
 <div class="container">
     <h3>INTERNATIONAL FOCUS GENERAL SERVICES CO.,LTD</h3>
     <h2 class="welcome">မှကြိုဆိုပါတယ်</h2>
     <form @submit.prevent="submit" class="form">
    <div class="input_wrapper">
      <input type="text" name="employee_id" id="employee_id" placeholder="User ID" v-model="form.employee_id" class="custom_input" required />
    </div>
    <div class="input_wrapper">
      <div class="password_wrapper">
        <input type="password" name="password" id="password" placeholder="Password" v-model="form.password" class="custom_input password_input" required />
        <span class="password_toggle" :class="{ 'show_password': showPassword }" @click="togglePasswordVisibility">
          <font-awesome-icon v-if="showPassword" class="fa-eye" icon="fa-solid fa-eye" />
        
          <font-awesome-icon v-else  class="fa-eye-slash" icon="fa-solid fa-eye-slash" />
        </span>
      </div>
    </div>
    <div class="button_wrapper">
      <button type="submit" class="login_button">Login</button>
    </div>
    <router-link to="forgetpassword">Forget Password ?</router-link>
  </form>
 </div>

 <div v-if="warning" class="popup">
      <div class="popup_content">
        <div class="warning">{{ warning }}</div>
        <span class="close_btn" @click="hidePopup">
          <font-awesome-icon class="fa-solid fa-times close_icon" icon="fa-solid fa-times"/>
        </span>
      </div>
  </div>

</template>


<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'login',
  components: { FontAwesomeIcon },

  setup() {
    const store = useStore();
    const form = ref({
      employee_id: '',
      password: '',
    });
    const warning = computed(() => store.state.auth.warning);

    const hidePopup = () =>{
      // warning.value = null;
      let popup = document.querySelector('.popup');
      popup.style.display = 'none';
      form.value = '';
    }
    const showPassword = ref(false);
    const togglePasswordVisibility = () =>{
      showPassword.value = !showPassword.value;
      const passwordInput = document.getElementById('password');
      if(showPassword.value){
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    }

    const login = () => {
      store
        .dispatch('auth/login', form.value)
        .then(() => {
          console.log('Login Successful!');
        })
        .catch((error) => {
          console.log(error, 'error occurred');
        });
      console.log(form.value.employee_id, form.value.password);
      console.log('Submitted');
    };

    const submit = (event) => {
      event.preventDefault(); // Prevent form submission if validation fails
      login();
    };


    return {
      hidePopup,
      form,
      warning,
      submit,
      login,
      showPassword,
      togglePasswordVisibility
    };
  },
};
</script>



<style scoped>

.welcome{
  font-family: "Pyidaungsu-Regular";
  font-size: 20px;
}
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;

    position: relative;
  }

   .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .fa-eye, .fa-eye-slash{
    cursor: pointer;
  }


  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    padding: 20px;
    border-radius: 5px;
  }

  .password_wrapper{
    position: relative;
  }

  .password_toggle{

    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -60%);
  }

  .warning {
    color: red;
    margin-bottom: 10px;
    text-align: center;
  }

  .close_icon{
    cursor: pointer;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  .input_wrapper {
    width: 100%;
    margin-bottom: 15px;
  }

  .custom_input {
    background-color: #f5f5f5;
    width: 100%;
    padding: 10px;
    outline: none;
     border: none;
    border-radius: 10px;
  }

  .button_wrapper {
    width: 100%;
    margin-top: 15px;
  }

  .login_button {
    width: 100%;
    padding: 10px;
    background-color: #0000FF;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .login_button:hover {
    background-color: #0000DD;
  }

  a {
    display: block;
    margin-top: 30px;
    text-align: center;
    color: #333;
    text-decoration: none;
    color: blue;
    cursor: pointer;
  }

  .popup{
    position: absolute;
    top: 50%;
    left: 50%   ;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;

  }

.popup_content{
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  text-align: center;
    border-radius: 15px;

}
</style>
