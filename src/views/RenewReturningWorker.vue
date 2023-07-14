<template>
  <div class="bg-light mains" :class="showModal === true ? 'red' : 'blue'">
    <Navbar/>
    <div class="page pb-5">
        <div class="containers pt-4 pb-5">
            <ReturnModal v-if="showModal" :data="employeeData" @closeModal="hidemodal"/>
             <!-- title -->
             <h4 class="pt-2 pb-3">Renew Returning Worker</h4>
            
             <h6>Search by NRC Number</h6>
              <!-- nrc -->
              <div class="nrcContainer">
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
                                <button class="searchs" type="button" @click="getClick"><font-awesome-icon icon="magnifying-glass" flip="horizontal" style="color:fff" class="searchIcon"/></button>
                            </div>
              </div>

              <!-- Check and Update -->
              <h5 class="text-primary pt-4  ">Check and Update for Worker Details</h5>
              <div class="pt-2">
                <div v-if="!fillterEmployees" class="text-center py-5">
                    <p class=" messages">Pls insert NRC to find worker data </p>
                </div>
                <div v-if="fillterEmployees" class="row">
                    <div class="col-3">
                        <p class="bold">Name (En)</p>
                        <p class="trans">{{ fillterEmployees[0].name_en }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Name (Mm)</p>
                        <p class="trans">{{ fillterEmployees[0].name_mm }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Date of Birth</p>
                        <p class="trans">{{  fillterEmployees[0].name_mm }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Gender</p>
                        <p class="trans">{{ fillterEmployees[0].gender }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Father Name (En)</p>
                        <p class="trans">{{ fillterEmployees[0].father_name_en }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Father Name (Mm)</p>
                        <p class="trans">{{ fillterEmployees[0].father_name_mm }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Mother Name (En)</p>
                        <p class="trans">{{ fillterEmployees[0].mother_name_en }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Mother Name (Mm)</p>
                        <p class="trans">{{ fillterEmployees[0].mother_name_mm }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Worker ID</p>
                        <p class="trans" v-if="fillterEmployees">{{ fillterEmployees[0].employee_id }}</p>
                    </div>

                    <div class="col-3">
                        <p class="bold">Old Doe Number</p>
                        <p class="trans">{{ fillterEmployees[0].doe.doe_id }}</p>
                    </div>

                     <!-- doe -->
                     <div class="col-3">
                            <label for="doe" class="bold pb-2">New Doe Number</label>
                                <select class="form-select" id="doe" v-model="doeId">
                                    <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>   
                                </select>
                        </div>

                </div>
              </div>
              <!-- btn -->
              <div class="btn-containers py-3">
                            <button class="btn clear" @click="clearData" >Reset</button>
                            <button class="btn" @click="updateSubmit" >Update and Renew</button>
              </div>



        </div>
    </div>
  </div>
</template>

<script>
import nrcdata from '../composable/nrcdata'
import Navbar from '../components/Navbar.vue'
import ReturnModal from '../components/ReturnModal.vue';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {    
    components:{Navbar,ReturnModal},
    setup(){
        let store = useStore();
        const showModal = ref(false);
        let employeeData = ref();
        let router =useRouter();

        let doeId=ref();
        let stateId = ref({});
        let nrctownship = ref();
        let nrctype = ref();
        let nrcnumber = ref();
        let fillterEmployees = ref(null);
        let formData = ref();

          // modal function
        let showmodal = () => {
            showModal.value = true;
        };

        const hidemodal = () => {
            showModal.value = false;
        };

        let {getAllStates,getStateid, getAlltownships, getAlltypes} = nrcdata(stateId.id);

        // get DOE Data
        let does = computed(()=>{
            return store.state.doeModule.does
        })

        let getData = ()=> store.dispatch('doeModule/getDoes');
        getData();

        // get All Employees Data
        let employees = computed(()=> {
            return store.state.registerModule.employees
        })

        let getEmployees = ()=> store.dispatch('registerModule/getEmployees');
        getEmployees();

        let getClick=()=>{
            let nrc =`${stateId.value.no}/${nrctownship.value}${nrctype.value}${nrcnumber.value}`;
            // let nrc = '1/'
            // console.log(nrc);
            // console.log(employees.value.data[8].nrc);
            fillterEmployees.value = employees.value.data.filter((employee)=>{
                if(employee.nrc !== null){
                    if(employee.nrc == nrc){
                        return employee
                    }else{
                        return null;
                        console.log("Wrong Number");
                    }
                    
                }     
            })

            console.log(fillterEmployees.value);
        }

        // update Doe
        async function updateSubmit(){
            let updateid = fillterEmployees.value[0].id
            console.log(updateid);
            formData.value={
                employee_id:fillterEmployees.value[0].employee_id ,
                password:nrcnumber.value,
                name_mm: fillterEmployees.value[0].name_mm,
                name_en: fillterEmployees.value[0].name_en,
                father_name_mm:fillterEmployees.value[0].father_name_mm,
                father_name_en:fillterEmployees.value[0].father_name_en,
                mother_name_mm:fillterEmployees.value[0].mother_name_mm,
                mother_name_en:fillterEmployees.value[0].mother_name_en,
                nrc :fillterEmployees.value[0].nrc,
                dob: fillterEmployees.value[0].dob,
                gender:fillterEmployees.value[0].gender,
                doe_id : doeId.value
    
            }  
            let data= formData.value;
            console.log(data);
            await store.dispatch('registerModule/updateEmployee',{id:updateid,data});
            employeeData.value = {
                        id:fillterEmployees.value[0].employee_id ,
                        pw:doeId.value
                    }
                    console.log(employeeData.value);
            showmodal();
            setTimeout(() => {
                    hidemodal()
                }, 3000); 

            // router.go({name:"doesView"})
        }

        let clearData=()=>{
                router.go({name:'returnworker'})
         }
        

        


        return{
            stateId,nrctownship,nrctype,nrcnumber,clearData,
            getAllStates,getAlltownships,getAlltypes,getStateid,
            doeId,does,getClick,fillterEmployees,
            updateSubmit,showModal,hidemodal,showmodal,employeeData
        }
    }

}
</script>

<style>
.bold{
    font-weight: bold;
}

.trans{
    color:rgb(152, 148, 148)
}

.searchs{
    /* border-radius: 0 5px 5px 0; */
    width: 70px;
    border:none;
    background: blue;
    padding: 5px;
}

.searchs:active{
    transform:scale(1.09);
}

.searchIcon{
    color: #fff;
}

.messages{
    /* width: 50%; */
    border: 2px solid blue;
    border-radius: 15px;
    padding: 10px;
    margin-left: 30%;
    margin-right: 30%;
    font-size: 20px;
    font-weight:thin ;

    display: flex;
    justify-content: center;
    align-items: center;
}

</style>