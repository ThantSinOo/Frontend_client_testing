<template>
    <div class="bg-light mains" :class="showModal === true ? 'red' : 'blue'">
        <Navbar/>
        <div class="page">
        <div class="containers pt-4 pb-5">
            <Modal v-if="showModal" :data="employeeData" @closeModal="hidemodal"/>
            <h4 class="text-bold py-2">Register New Worker</h4>
            <div class=""> 
                <div class="pt-1">
                <!-- nrc & doe -->
                    <div class="d-flex col-8">
                        <!-- nrc -->
                        <div class="nrcContainer">
                        <label>NRC Number</label>
                            <div class="nrcForm d-flex">
                                <select v-model="stateId" @change="getStateid(stateId.id)">
                                    <option v-for="state in getAllStates" :key="state.id" :value="{id:state.id,no:state.number.mm}">{{ state.number.mm }}</option>
                                </select>
                                <p> / </p>
                                <select class="town" v-model="nrctownship">
                                    <option v-for="town in getAlltownships" :key="town.id" :value="town.short.mm">{{ town.short.mm}}</option>
                                </select>
                                <select class="" v-model="nrctype">
                                    <option v-for="types in getAlltypes" :key="types.id" :value="types.name.mm">{{ types.name.mm }}</option>
                                </select>
                                <input type="text" class="nrcNumber" v-model="nrcnumber">
                            </div>
                        </div>
                        
                        <!-- doe -->
                        <div class="col-5">
                            <label for="doe">DOE Number</label>
                                <select class="form-select" id="doe" v-model="doeId">
                                    <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>   
                                </select>
                        </div>
                    </div>
                <!-- cv -->
                <!-- upper row -->
                    <div class="d-flex my-4">
                        <div class="row cv">
                            <div class="col-3">
                                <label for="nameen" class="d-block">Name (En)</label>
                                <input type="text" name="nameen" v-model="nameEn">
                            </div>
                            
                            <div class="col-3">
                                <label for="namemm">Name (Mm)</label>
                                <input type="text" name="namemm" v-model="nameMm">
                            </div>

                                    <div class="col-6 d-flex">
                                        <div>
                                            <label for="MoveInDate" class="d-block">Date Of Birth</label>
                                        <input autocomplete="off" class="dates" name="MoveInDate" placeholder="DD-MM-YYYY" type="date" min="1950-12-17" max="2030-01-01" spellcheck="false" v-model="dob">
                                        </div>
                                        
                                        <div class="ms-5">
                                            <label class="d-block">Gender</label>
                                            <div class="btn-group">
                                                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"  value="male" v-model="selectedGender" @change="handleGenderChange" checked />
                                                <label class="btn btn-outline-primary" for="option1">male</label>

                                                <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"  value="female" v-model="selectedGender" @change="handleGenderChange" />
                                                <label class="btn btn-outline-primary" for="option3">female</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-3 my-4">
                                        <label for="fanameen">Father Name (En)</label>
                                        <input type="text" name="fanameen" v-model="fatherEn">
                                    </div>

                                    <div class="col-3 my-4">
                                        <label for="fanamemm">Father Name (Mm)</label>
                                        <input type="text" name="fanamemm" v-model="fatherMm" >
                                    </div>

                                    <div class="col-3 my-4">
                                        <label for="monameen">Mother Name (En)</label>
                                        <input type="text" name="monameen" v-model="motherEn">
                                    </div>

                                    <div class="col-3 my-4">
                                        <label for="monamemm">Mother Name (Mm)</label>
                                        <input type="text" name="monamemm" v-model="motherMm">
                                    </div>

                                    
                                </div>
                    </div>
                    <!-- lower row -->
                    <div class="btn-containers">
                            <button class="btn clear" @click="clearData">Clear All</button>
                            <button class="btn" @click="showForm">Register</button>
                    </div>
                </div>
            </div>
                    
                    
        </div>
        </div>
    </div>
   
  
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import nrcdata from '../composable/nrcdata'
import Navbar from '../components/Navbar.vue'
import axios from "axios";
import Modal from '../components/Modal.vue';
import { useRouter } from 'vue-router';
export default {
    components:{Navbar,Modal},
    setup(){
        let store = useStore();
        let router =useRouter();

        const showModal = ref(false);

        let employeeData = ref()




        let doeId=ref();
        let stateId = ref({});
        let nrctownship = ref();
        let nrctype = ref();
        let nrcnumber = ref();
        let nameEn = ref();
        let nameMm= ref();
        let fatherEn = ref();
        let fatherMm = ref();
        let motherEn = ref();
        let motherMm = ref();
        let dob = ref();
        let selectedGender = ref('male');

        let formData = ref({})

        // modal function
        let showmodal = () => {
            showModal.value = true;
        };

        const hidemodal = () => {
            showModal.value = false;
        };




        // get DOE Data
        let does = computed(()=>{
            return store.state.doeModule.does
        })

        let getData = ()=> store.dispatch('doeModule/getDoes');
        getData();



        // get NRC Data
        let {getAllStates,getStateid, getAlltownships, getAlltypes} = nrcdata(stateId.id);
    
        let showForm =async function(){
          formData.value={
                employee_id:nrcnumber.value + nameEn.value,
                password:nrcnumber.value,
                name_mm:nameMm.value,
                name_en:nameEn.value,
                father_name_mm:fatherMm.value,
                father_name_en:fatherEn.value,
                mother_name_mm:motherMm.value,
                mother_name_en:motherEn.value,
                nrc :`${stateId.value.no}/${nrctownship.value}${nrctype.value}${nrcnumber.value}`,
                dob:dob.value,
                gender:selectedGender.value,
                doe_id : doeId.value
            }  
        //   await store.dispatch('registerModule/storeEmployees',formData.value)
            let res = await axios.post("employees",formData.value)
            if (res.data.status == "success"){
                console.log(res.data);
                    employeeData.value = {
                        id:nrcnumber.value + nameEn.value,
                        pw:nrcnumber.value
                    }
                    showmodal();

                setTimeout(() => {
                    hidemodal()
                    router.go({name:"register"})
                }, 3000);    
                
                
            }else{
                console.log("error");
            }
        
        }

        
        let clearData=()=>{
                router.go({name:'register'})
         }
        


        return {
            does,getData,doeId,
            stateId,nrctownship,nrctype,nrcnumber,
            getAllStates,getAlltownships,getAlltypes,getStateid,
            nameEn,nameMm,fatherEn,fatherMm,motherEn,motherMm,
            dob,selectedGender,formData,
            showForm,
            showModal,showmodal,hidemodal,employeeData,clearData
        }
    }
 } 
</script>

<style>
.red.mains:after{
    content:"";
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);

    position: absolute;
    top: 0;
    left: 0;

    z-index: 100;
}
.nrcForm{
    width: 350px;
    height: 38px;
    border: 2px solid  #dedede;
    margin-right:20px;
    border-radius: 8px;
    overflow: hidden;
    /* background-color: red; */
}

.nrcForm select{
    width: 50px;
    height: inherit;
    border-color: #dedede;
    background-color: transparent;
    /* border-left:none;
    border-right:none;
    border:none */
    text-align: center;
    margin-top: -2px;
}


.nrcForm .town{
    width: 120px;
    letter-spacing: 5px;
}

.nrcForm p{
    width: 20px;
    height: 38px;
    font-size: 24px;
    text-align: center;
    /* font-weight: bold; */
    background-color:  #F8F9FA;
    margin-top:-2px ;
}

.nrcNumber{
    width: 125px;
    background-color:  #F8F9FA;
    border: none;
    font-size: 16px;
    font-weight: thin;
}



.cv label{
    padding-bottom: 2px;
}

.cv input{
    background-color:  #F8F9FA;
    border: 1px solid #dedede;
    height: 38px;
    width: 250px;
    font-size: 15px;
    border-radius: 8px;
}

.cv .dates{
    width: 200px;
    border: solid 1px #dedede;
    -webkit-appearance: none;
    font-size: 18px;
    text-align: center;
    letter-spacing: 2px;
    padding-right: 10px;
    border-radius: 8px;
    
}

.btn-group label{
    height: 38px;
    /* font-size: px; */
    line-height: 28px;
}

.btn-containers{
    float: right;
}

.btn-containers .btn{
    width: 200px;
    background-color: blue;
    color:white;
    margin: 0 20px;
}

.btn-containers .clear{
    background-color:  #F8F9FA;
    color: black;
    box-shadow:0 4px 4px #dedede;
}

input:focus{
    padding-left: 5px;
    outline: 0;
}
</style>