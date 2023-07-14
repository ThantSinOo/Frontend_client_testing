<template>
    <div class="bg-light mains"  :class="showModal === true ? 'red' : 'blue'">
        <Navbar/>
        <CvModal v-if="showModal" :id="userid" @closeModal="hidemodal" @passed="passed" @failed="failed" @pending="pending"/>
        <div class="page"> 
    <div class="containers py-4">
        <h4 class="py-2">Review Worker CVs</h4>

        <div class="row mt-4">
            <!-- chose DOE Num -->
            <div class="form-group col-3">
                    <label for="doenum">DOE Number</label>
                        <select class="form-select bg-light" id="doenum" v-model="doeId" @change="getdoeId(doeId)">
                            <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>     
                        </select>
            </div>
            <!-- choose status -->
            <div class="col-4 ">
                <label class="mx-4">Status</label>
                <div class="d-flex mx-3 mt-1 ">
                    <span class="badge status rounded-pill mx-2" :class="filterStatus === 'pending' ? 'red' : 'blue'" @click="getfilter('pending')"><span v-if="filterStatus==='pending'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Pending</span>
                    <span class="badge status rounded-pill mx-2" :class="filterStatus === 'passed' ? 'red' : 'blue'" @click="getfilter('passed')"><span v-if="filterStatus==='passed'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Passed</span>
                    <span class="badge status rounded-pill mx-2" :class="filterStatus === 'failed' ? 'red' : 'blue'" @click="getfilter('failed')"><span v-if="filterStatus==='failed'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Failed</span>
                </div>
               
            </div>
        </div>
        <!-- Worker Table -->
        <div class="mt-5 me-3">
            <h6>Worker CVs</h6>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Worker ID</th>
                        <th scope="col">Name(En)</th>
                        <th scope="col">NRC Number</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employees,index) in fillterEmployees" :key="employees.id">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ employees.employee_id }}</td>
                            <td>{{ employees.name_en }}</td>
                            <td>{{ employees.nrc }}</td>
                            <td>{{ employees.gender }}</td>
                            <td><span class="badge rounded-pill mx-2" :class="employees.cv_result">{{ employees.cv_result }}</span></td>
                            <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" @click="showmodal({id:employees.id,index})" /></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>

    </div>
        </div>
    </div>
  
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CvModal from '../components/Cvmodal.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import axios from "axios";
export default {
    components:{Navbar,CvModal},
    setup(){
        let store = useStore();
        let doeId=ref();
        let fillterEmployees = ref();
        let userid = ref();
        let statusindex = ref();
        let filterStatus=ref(null);

        const showModal = ref(false);


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


        console.log(employees.value);

        let getdoeId =(id)=>{
            // console.log(id);
            console.log(employees.value.data);
            fillterEmployees.value = employees.value.data.filter((employee)=>{
                if(employee.doe !== null){
                    return employee.doe.doe_id == id
                }
               
                // console.log(employee.doe);
            })
        }
        
        

        // modal function
        let showmodal = (id) => {
            userid.value = id;
            statusindex.value = id.index;
            showModal.value = true;
        };

        const hidemodal = () => {
            showModal.value = false;
        };

        let passed =()=>{
            console.log(statusindex.value);
            console.log('passed');
            console.log(fillterEmployees.value[statusindex.value].cv_result);
            fillterEmployees.value[statusindex.value].cv_result = 'passed'
        }

        let failed =()=>{
            console.log(statusindex.value);
            console.log('reject');
            console.log(fillterEmployees.value[statusindex.value].cv_result);
            fillterEmployees.value[statusindex.value].cv_result = 'failed'
        }

        let pending =()=>{
            console.log(statusindex.value);
            console.log('pending');
            console.log(fillterEmployees.value[statusindex.value].cv_result);
            fillterEmployees.value[statusindex.value].cv_result = 'pending'
        }

         //Filter Function
         let getfilter=async(value)=>{
            console.log(value);
            if(filterStatus.value===value){
                filterStatus.value=null;
                fillterEmployees.value=null;
            }else{
                filterStatus.value=value;
                fillterEmployees.value=employees.value.data.filter((employee)=>{
                if (doeId.value && employee.doe !== null) {  
                    return employee.doe.doe_id == doeId.value & employee.cv_result == value
                }else{
                    return employee.cv_result == value
                }
                    
            })
            }

            

            
        }


        return{
            does,employees,getEmployees,doeId,
            getdoeId,fillterEmployees,
            showModal,showmodal,hidemodal,userid,passed,failed,pending,statusindex,getfilter
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

.status{
    width: 150px;
    height: 30px;
    line-height: 19px;
}


</style>