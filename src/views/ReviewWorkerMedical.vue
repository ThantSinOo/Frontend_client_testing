<template>
    <div class="bg-light mains">
        <Navbar/>
        <div class="page"> 
    <div class="containers py-4">
        <h4 class="py-2">Review Worker Medical Results</h4>

        <div class="row mt-4">
            <!-- chose DOE Num -->
            <div class="form-group col-3">
                    <label for="doenum">DOE Number</label>
                        <select class="form-select bg-light" id="doenum" v-model="doeId" @change="getdoeId(doeId)">
                            <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>     
                        </select>
            </div>
            <!-- choose status -->
            <div class="col-4">
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
            <h6>{{ workernum }} Worker Medical Result</h6>
            <div class="d-flex">
                <p>{{ selectednum }} itmes Selected</p>
                <div class="mx-2">
                    <button class="badge btn failed mx-2" @click="statuschgEmployee('failed')"><span>Fail Selected</span></button>
                    <button class="badge btn pending mx-2" @click="statuschgEmployee('pending')"><span>Reset to Pending</span></button>
                    <button class="badge btn passed mx-2" @click="statuschgEmployee('passed')"><span>Pass Selected</span></button>
                </div>
            </div>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th>
                            <input type="checkbox" v-model="allEmployees" @change="selectedallEmployee">
                        </th>
                        <th scope="col">No</th>
                        <th scope="col">Worker ID</th>
                        <th scope="col">Name(En)</th>
                        <th scope="col">NRC Number</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody  v-for="(employees,index) in fillterEmployees" :key="employees.id" >
                        <tr>
                            <td>
                                <input type="checkbox" v-model="selectedEmployees" :value="{id:employees.employee_id,index}" @change="selectNum">
                            </td>
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ employees.employee_id }}</td>
                            <td>{{ employees.name }}</td>
                            <td>{{ employees.nrc }}</td>
                            <td>{{ employees.gender }}</td>
                            <td><span class="badge rounded-pill mx-2" :class="employees.medical_result">{{ employees.medical_result }}</span></td>
                            <td data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" @click="getnote(employees.medical_result_note)" ><font-awesome-icon icon="fa-solid fa-angle-down" /></td>
                        </tr>   
                        <tr class="collapse accordion-collapse" :id="'collapse'+index" data-bs-parent=".table">
                            <td colspan="7"> 
                               <div class="col-6">
                                    <h6>Note</h6>
                                    <textarea class="d-block bg-light my-2" cols="75" rows="4" v-model="notetext"></textarea>
                                    <button class="notebtn"  @click="saveNote({id:employees.employee_id,status:employees.medical_result})">Save Note</button> 
                               </div>
                            </td>
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import axios from "axios";
import { useRouter } from 'vue-router';

export default {
    components:{Navbar},
    setup(){
        let router = useRouter();
        let store = useStore();
        let doeId=ref();
        let fillterEmployees = ref();
        let allEmployees = ref(false);
        let selectedEmployees = ref([]);
        let notetext = ref();
        let filterStatus=ref(null);
        let workernum = ref();
        let selectednum = ref();
        let datas = ref({
            result:[]
        })

         // get DOE Data
        let does = computed(()=>{
            return store.state.doeModule.does
        })

        let getData = ()=> store.dispatch('doeModule/getDoes');
        getData();

        // get All Employees Data
        let getEmployees = ()=> store.dispatch('registerModule/getEmployees');
        getEmployees();

        let employees = computed(()=> {
            return store.state.registerModule.employees
        })

        let getdoeId =(id)=>{
            // console.log(id);
            // console.log(employees.value.data[0].doe.doe_id);
            fillterEmployees.value = employees.value.data.filter((employee)=>{
                if (filterStatus.value && employee.doe !== null) {  
                    return employee.doe.doe_id == doeId.value & employee.medical_result == filterStatus.value
                }else if( employee.doe !== null){
                    return employee.doe.doe_id == id
                }
                
            })
            workernum.value=fillterEmployees.value.length
            // console.log(fillterEmployees);
        }

        let selectedallEmployee =()=>{
            if(allEmployees.value == true){
                selectedEmployees.value=[];
                console.log(fillterEmployees.value);
                fillterEmployees.value.forEach((allemployee,index)=>{
                    selectedEmployees.value.push({
                        id:allemployee.employee_id,
                        index

                    })
                })

                console.log(selectedEmployees.value);
            }else{
                selectedEmployees.value = [];
            }
            selectNum();
        }

        // status chg function
        let statuschgEmployee=async (status)=>{
            console.log(selectedEmployees.value[0]);
            selectedEmployees.value.forEach((select,index)=>{
                fillterEmployees.value[selectedEmployees.value[index].index].medical_result = status;
                datas.value.result.push({
                employee_id:select,
                status:status,
                note:""
             })
            })   
            await axios.post("medical_result", datas.value);
            
        }

        let selectNum = ()=>{
            selectednum.value=selectedEmployees.value.length
        }

        // Save Note Function
        let saveNote =async (data)=>{
            let savedata = {result:[
                {
                    status:data.status,
                    employee_id:data.id,
                    note:notetext.value
                }  
            ]}
            console.log(savedata);
            await axios.post("medical_result", savedata);
        }

        let getnote=(note)=>{
            if(note!==null){
                notetext.value = note
            }
          
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
                if (doeId.value && employee.doe!=null) {  
                    return employee.doe.doe_id == doeId.value & employee.medical_result == value
                }else{
                    return employee.medical_result == value
                }
                    
            })
            }

            

            
        }

        return{
            does,employees,getEmployees,doeId,getdoeId,fillterEmployees,
            allEmployees,selectedEmployees,statuschgEmployee,
            selectedallEmployee,datas,notetext,saveNote,getnote,getfilter,filterStatus,
            selectNum,selectednum,workernum
        }
    }
}
</script>

<style>
.status{
    width: 150px;
    height: 30px;
    line-height: 19px;
}

.notebtn{
    border: none;
    color:blue;
    display: block;
    float: right;
}

.badge{
    padding: 5px 20px;
    cursor: pointer;
}

.badge.blue{
    color:black;
    background: rgb(208, 207, 207);
}

.badge.red{
    color:blue;
    background: rgba(6, 14, 255,0.3);
}

.pending{
    background:rgba(242, 170, 13, 0.686);
}

.passed{
    background: rgba(32, 242, 13, 0.686);
}

.failed{
    background: rgba(242, 13, 13, 0.686);
}


</style>