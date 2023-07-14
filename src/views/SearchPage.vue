<template>
    <Navbar/>
    <div class="container">
      <div class="row align-items-center justify-content-center h-100">
        <div class="col-12 text-center">
          <div>
            <p class="cute-text">This Page is Currently Unavailable</p>
          </div>
          <div>
            <p class="cute-text">It is Under Development Stage.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue'

  export default {
    components:{Navbar},
    setup() {
       
    }
  }
  </script>
  
  <style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }
  
  .cute-text {
    font-family: 'Comic Sans MS', cursive;
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
    overflow: hidden;
    white-space: nowrap;
    animation: textAnimation 2s steps(50) 1;
  }
  
  @keyframes textAnimation {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  </style>
  