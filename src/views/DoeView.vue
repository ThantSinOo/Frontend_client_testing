<template>
    <div class="bg-light mains">
        <Navbar/>
        <div class="page">
            <div class="containers py-4">
                <!-- title -->
                <h4 class="py-2">Create New DOE</h4>
                <!-- Add DOE Form -->
                <div class="pt-2">
                    <form class="row col-10">
                        <!-- <div class="row"> -->
                            <div class="form-group col-4">
                                <label for="doenumber">DOE Number</label>
                                <input type="text" class="form-control bg-light" id="doenumber" v-model="doesId">
                            </div>

                            <div class="form-group col-8">
                                <label for="factory">Factory</label>
                                    <select class="form-select" id="factory" v-model="factoryName">
                                        <option value="Thai Union Co.Ltd" selected>Thai Union Co.Ltd</option>
                                        <option value="Super Steel Co.Ltd">Super Steel Co.Ltd</option>
                                    </select>
                            </div>

                            <div class="form-group col-4 mt-4">
                                <label for="category">Category</label>
                                    <select class="form-select" id="category" v-model="factoryCategory">
                                        <option value="Food Packing" >Food Packing</option>
                                        <option value="Steel Manufacturing">Steel Manufacturing</option>
                                    </select>
                            </div>

                            <div class="form-group col-4 mt-4">
                                <label for="location">Location</label>
                                <input type="text" class="form-control bg-light" id="location" v-model="factoryLocation">
                            </div>

                            <div class="form-group col-4 mt-4" >
                                <label for="country">Country</label>
                                    <select class="form-select" id="country" v-model="factoryCountry">
                                        <option value="Thai" >Thai</option>
                                        <option value="Malaysia">Malaysia</option>
                                    </select>
                            </div>

                            <div class="btn-containers mt-4 d-flex justify-content-end">
                                <button class="btn mx-5 shadow-sm " @click="clearForm">Clear All</button>
                                <button class="btn btn-primary" @click.prevent="handleSubmit" >Create</button>
                            </div>
                        <!-- </div> -->
                        
                    </form>
                </div>
                
            </div>
        </div>

        <div class="page">
            <!-- alert -->
            <div v-if="errorMessage" class="alert alert-danger container" role="alert">
                    <h3>{{ errorMessage }}</h3>
            </div>
            <div class="containers">
                <!-- title -->
                <h4 class="py-4">Existing DOEs</h4>
                <!-- DOE Table-->
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">No<font-awesome-icon class="mx-1 reverse" icon="fa-solid fa-arrow-down" style="color:blue" @click="reverseData" /></th>
                        <th scope="col">DOE Number</th>
                        <th scope="col">Factory</th>
                        <th scope="col">Category</th>
                        <th scope="col">Location</th>
                        <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="reverse" v-for="(doe,index) in does" :key="doe.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <th>{{ doe.doe_id }}</th>
                        <td>{{ doe.factory_name }}</td>
                        <td>{{ doe.factory_category }}</td>
                        <td>{{ doe.factory_location }}</td>
                        <td>{{ doe.factory_country }}</td>
                        </tr>
                        <tr v-if="!reverse" v-for="(doe,index) in does.slice().reverse()" :key="doe.id">
                        <th scope="row">{{does.length - index}}</th>
                        <th>{{ doe.doe_id }}</th>
                        <td>{{ doe.factory_name }}</td>
                        <td>{{ doe.factory_category }}</td>
                        <td>{{ doe.factory_location }}</td>
                        <td>{{ doe.factory_country }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { computed , ref } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue'
export default {
    components:{Navbar},
    setup(){
        let router = useRouter();
        let reverse = ref(false);
        let store = useStore();
  
        let doesId = ref("");
        let factoryName = ref("");
        let factoryCategory = ref("");
        let factoryLocation = ref("");
        let factoryCountry = ref("");

        let doesData = ref({
            doe_id : doesId,
            factory_name : factoryName,
            factory_category : factoryCategory,
            factory_location : factoryLocation,
            factory_country : factoryCountry
        })
        let does = computed(()=>{
            return store.state.doeModule.does
          console.log(doesData.value, typeof(doesData.value))

        })

        let errorMessage = computed(()=>{
            return store.state.doeModule.errorMessage
        })

        let getData = ()=> store.dispatch('doeModule/getDoes');
        getData();

        // storeDoe //
        let handleSubmit =async function(){
          console.log(doesData.value, typeof(doesData.value))

          await store.dispatch('doeModule/storeDoes',doesData.value)
         
          router.go({name:"doesView"})
        }

        // Clear Form Data
        let clearForm =()=>{
            doesId.value = "",
            factoryLocation.value = "";

        }

        // Reverse data
        let reverseData = ()=>{
           reverse.value = !reverse.value
        }

        reverseData();

        return{
            doesId,factoryName,factoryCategory,factoryLocation,factoryCountry,
            doesData,handleSubmit,
            does,getData,errorMessage,clearForm,reverse,reverseData
        }

    }
}
</script>

<style>
.page{
  /* height: 100vh; */
  background-color: white;

  margin-top: 25px;
  margin-left: 85px;
  margin-right:25px ;
}

.containers{
    margin-left: 20px;
    /* margin-top: 50px; */
    /* background-color: red; */
}

.btn-containers .btn{
    width: 250px;
}

.reverse{
    cursor: pointer;
}

.reverse:active{
    transform: scale(0.95);
}
</style>