<template>
  <div class="bg-light mains">
    <!-- top navbar -->
    <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
              <a class="navbar-brand" href="#">
                
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item active">
                    <router-link class="nav-link"  to="/doe">Manage</router-link>
                  </li>
                  <li class="nav-item active">
                    <router-link class="nav-link"  to="/surveypage">Suvery</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/chat">Chat</router-link>
                  </li>
                </ul>
                <div class="my-2 my-lg-0 px-2">
                  <!-- <p>logo</p> -->
                    <router-link to=""> 
                      <font-awesome-icon icon="fa-solid fa-circle-user" size="2xl" style="color:black" />
                    </router-link>
                </div>
              </div>
            </nav>
    </div>

    <div class="">
      <div class="container-fluid pt-4 pb-5">
        <div class="row">
          <div class="col-3">
           <div class="suveryContainer">
              <button class="btn btn-primary mt-5 mb-3">View Survey Result</button>

              
            <div class="formContainer">
              <p class="">Suvery form</p>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">Suvery Form 1</option>
                <option value="2">Suvery Form 2</option>
                <option value="3">Suvery Form 3</option>
              </select>
            </div>
           </div>

          </div>
          <div class="col-9">
            {{allEmployees}}
            {{ selectedEmployees }}
            <div>
              <!-- chose DOE Num -->
              <div class="form-group col-3">
                          <label for="doenum">DOE Number</label>
                              <select class="form-select bg-light" id="doenum" v-model="doeId" @change="getdoeId(doeId)">
                                  <option v-for="doe in does" :key="doe.id" :value="doe.doe_id">{{ doe.doe_id }}</option>     
                              </select>
              </div>

               <!-- Worker Table -->
               <div class="mt-5 me-3">
                      <h6>{{ workernum }} Workers Info</h6>
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
                                  <th scope="col">Gender</th>
                                  <th scope="col">Birth of Date</th>
                                  <th scope="col">State</th>
                                  <th scope="col">Details</th>
                                  </tr>
                              </thead>
                              <tbody  v-for="(employees,index) in fillterEmployees" :key="employees.id" >
                                  <tr class="">
                                      <td>
                                          <input type="checkbox" v-model="selectedEmployees" :value="employees.employee_id" @change="selectNum">
                                      </td>
                                      <th scope="row">{{ index + 1 }}</th>
                                      <td>{{ employees.employee_id }}</td>
                                      <td>{{ employees.employee_info.name_en }}</td>
                                      <td>{{ employees.employee_info.gender }}</td>
                                      <td>{{ employees.employee_info.dob }}</td>
                                      <td v-if="employees.cv_data">{{ employees.cv_data.state }}</td>
                                      <td class="text-center"><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" @click="showmodal" /></td>
                                      
                                  </tr>   
                              </tbody>
                          </table>
                      </div>
               </div>
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
import axios from "axios";
import { useRouter } from 'vue-router';
export default {
  setup(){
    let store = useStore();
    let doeId=ref();
    let fillterEmployees = ref();
    let allEmployees = ref(false);
    let selectedEmployees = ref([]);

    // get DOE Data
    let does = computed(()=>{
        return store.state.doeModule.does
    })

    let getData = ()=> store.dispatch('doeModule/getDoes');
    getData();

    //   get employee
    let getEmployees = ()=> store.dispatch('infoModule/getEmployees');
    getEmployees();

    let employees = computed(()=> {
        return store.state.infoModule.employeesinfo
    })

    console.log(employees);


    let getdoeId=(id)=>{
      console.log(doeId);
      fillterEmployees.value = employees.value.data.filter((employee)=>{
            if(employee.doe !== null){
              return employee.doe.doe_id == id
              }     
            })                  
  }

  let selectedallEmployee =()=>{
            if(allEmployees.value == true){
                selectedEmployees.value=[];
                console.log(fillterEmployees.value);
            }else{
                selectedEmployees.value = [];
            }
  }

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

  return{
          does,doeId,getdoeId,fillterEmployees,allEmployees,selectedEmployees
        }
}

}
</script>

<style>
.suveryContainer{
  background: rgb(224, 220, 220);
  width: 80%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.suveryContainer .btn{
  width: 80%;
}

.formContainer{
  width: 80%;

}

.formContainer p{
  margin: 0;
}
</style>