<template>
  <div class="bg-light mains">
      <Navbar/>
      <CvModalview v-if="showModal" :id="userid" @closeModal="hidemodal"/>
      <div class="page">
          <div class="containers pt-4 pb-5">
              <h4 class="text-bold py-2">Worker Information</h4>

              <div class="row mt-4">
                  <!-- chose DOE Num -->
                  <div class="form-group col-3">
                          <label for="doenum">DOE Number</label>
                              <select class="form-select bg-light" id="doenum" v-model="doeId" @change="getdoeId(doeId)">
                                  <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>     
                              </select>
                  </div>
                  <!-- choose status -->
                  <!-- <div class="col-4">
                      <label class="mx-4">Status</label>
                      <div class="d-flex mx-3 mt-1 ">
                          <span class="badge status rounded-pill mx-2" :class="filterStatus === 'pending' ? 'red' : 'blue'" @click="getfilter('pending')"><span v-if="filterStatus==='pending'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Pending</span>
                          <span class="badge status rounded-pill mx-2" :class="filterStatus === 'passed' ? 'red' : 'blue'" @click="getfilter('passed')"><span v-if="filterStatus==='passed'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Passed</span>
                          <span class="badge status rounded-pill mx-2" :class="filterStatus === 'failed' ? 'red' : 'blue'" @click="getfilter('failed')"><span v-if="filterStatus==='failed'"><font-awesome-icon icon="fa-solid fa-check" class="me-2" /></span>Failed</span>
                      </div>
                  
                  </div> -->

                   <!-- Worker Table -->
                  <div class="mt-5 me-3">
                      <h6>{{ workernum }} Workers Info</h6>
                      <div>
                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                  <th scope="col">No</th>
                                  <th scope="col">Worker ID</th>
                                  <th scope="col">Name(En)</th>
                                  <th scope="col">NRC Number</th>
                                  <th scope="col">Father Name(En)</th>
                                  <th scope="col">Dob</th>
                                  <th scope="col">Address</th>
                                  <th scope="col">Gender</th>
                                  <th scope="col">Contract</th>
                                  <th scope="col">Details</th>
                                  </tr>
                              </thead>
                              <tbody v-for="(employees,index) in fillterEmployees" :key="employees.id" >
                                  <tr class="">
                                      <th scope="row">{{ index + 1 }}</th>
                                      <td>{{ employees.employee_id }}</td>
                                      <td>{{ employees.employee_info.name_en }}</td>
                                      <td>{{ employees.employee_info.nrc }}</td>
                                      <td v-if="employees.cv_data">{{ employees.employee_info.father_name_en}}</td>
                                      <td>{{ employees.employee_info.dob }}</td>
                                      <td v-if="employees.cv_data">{{ employees.cv_data.address }}</td>
                                      <td v-if="employees.cv_data">{{ employees.employee_info.gender }}</td>
                                      <td v-if="employees.cv_data">{{ employees.employee_info.gender }}</td>
                                      <td><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" @click="showmodal({id:employees.employee_info.user_id,index})" /></td>
                                      
                                  </tr>   
                              </tbody>
                          </table>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import CvModalview from '../components/Cvmodalview.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axios from "axios";
import { useRouter } from 'vue-router';

export default {
  components:{Navbar,CvModalview},
  setup(){
      let router = useRouter();
      let store = useStore();
      let doeId=ref();
      let userid = ref();
      let fillterEmployees = ref();

      const showModal = ref(false);

        // get DOE Data
            
          let does = computed(()=>{
              return store.state.doeModule.does
          })

          let getData = ()=> store.dispatch('doeModule/getDoes');
          onMounted(()=>{
            getData();
            if(does){
                console.log(does.value.length);
                console.log(does.value[does.value.length - 1]);
            }
            
          })
          
        //   get employee
          let getEmployees = ()=> store.dispatch('infoModule/getEmployees');
          getEmployees();

          let employees = computed(()=> {
              return store.state.infoModule.employeesinfo
          })

         


          let getdoeId=(id)=>{
            console.log(doeId);
            fillterEmployees.value = employees.value.data.filter((employee)=>{
                if (employee.doe !== null) {  
                //     return employee.doe.doe_id == doeId.value & employee.medical_result == filterStatus.value
                // }else{
                //     return employee.doe.doe_id == id
                // }
                return employee.doe.doe_id == id
                }
                
            })

            console.log(fillterEmployees.value);
          }

          // modal function
        let showmodal = (id) => {
            userid.value = id;
            showModal.value = true;
        };

        const hidemodal = () => {
            showModal.value = false;
        };

          return{
              does,doeId,getdoeId,fillterEmployees,showModal,showmodal,hidemodal,userid
          }
  }
}
</script>

<style>

</style>