<template>
    
      <!-- Example modal -->
      <div class="mymodal bg-light">
        <div class="">
          <div class="modalheader py-4">
            <h5 class="modaltitle text-center">New Worker Registered</h5>
          </div>
          <div class="modalbody text-center py-2">
            <p>{{id}}</p>
            <p>{{pw}}</p>
          </div>
        </div>
        <button class="btn btn-primary" @click="$emit('closeModal')">Close</button>
    </div>
    
  </template>

<script>
import { ref } from 'vue';
export default{
  props:["data"],
  setup(props){
    let id=ref('');
    let pw = ref('');

    id.value = props.data.id;
    pw.value = props.data.pw
    console.log(props.data);

    return{id,pw}
  }
}
</script>

<style>
.mymodal{
  width: 400px;
  height: 250px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index:200;
}



</style>
  