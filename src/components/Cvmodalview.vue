<template>
    <div class="cvModal bg-light">
        <div class="cv">
           <div class="container"> 
            <div class="modalHeader text-center py-3">
                <h3 class="">Worker Cv Details</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="$emit('closeModal')">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div v-if="employees" class="modalBody">
                <!-- status -->
                <div class="status">
                    <p>Status <span class="badge rounded-pill mx-2 " :class="employees.data.employee_info.cv_result">{{ employees.data.employee_info.cv_result }}</span></p>
                </div>
                <!-- Personal Information -->
                <h5 class="text-primary">Personal Information</h5>
                <div class="d-flex justify-content-between align-items-center personalinform bolds">
                    <div class="">
                        <p>Worker ID</p>
                        <p>{{ employees.data.employee_id }}</p>
                    </div>
                    <div class="">
                        <p>Name(En)</p>
                        <p>{{ employees.data.employee_info.name_en }}</p>
                    </div>
                    <div class="">
                        <p>NRC Number</p>
                        <p>{{ employees.data.employee_info.nrc }}</p>
                    </div>
                    <div class="">
                        <p>Date of Birth</p>
                        <p>{{ employees.data.employee_info.dob }}</p>
                    </div>
                    <div class="">
                        <p>Gender</p>
                        <p>{{ employees.data.employee_info.gender }}</p>
                    </div>
                    <div class="">
                        <p>Father Name(En)</p>
                        <p>{{ employees.data.employee_info.father_name_en }}</p>
                    </div>
                    <div class="">
                        <p>DOE Number</p>
                        <p>{{ employees.data.doe.doe_id }}</p>
                    </div>
                    
                    
                </div>
                <!-- user Photo -->
                <div class="userPhoto bg-info">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRRNhPDfP_n9gWbDrSMba6bR4dgsxSRE353R59IPfQIx_ypmeOt1sXNMKCHRmYuLPRrk&usqp=CAU" alt="userPhoto" width="130px" height="130px">
                </div>
                <!-- CV Details -->
                <h5 class="text-primary pt-3">Submitted CV Details</h5>
                <div >
                    <div class="d-flex justify-content-between align-items-center bolds">
                        <div class="">
                            <p>နေရပ်လိပ်စာ</p>
                            <p>{{ employees.data.cv_data.address }}</p>
                        </div>
                        <div class="">
                            <p>တိုင်းဒေသကြီး/ပြည်နယ်</p>
                            <p>{{ employees.data.cv_data.state }}</p>
                        </div>
                        <div class="">
                            <p>ကိုယ်အလေးချိန်</p>
                            <p>{{ employees.data.cv_data.weight }}<span>ပေါင်</span></p>
                        </div>
                        <div class="">
                            <p>အရပ်အမြင့်</p>
                            <p>{{ employees.data.cv_data.height }}</p>
                        </div>
                        <div class="">
                            <p>ပညာအရည်အချင်း</p>
                            <p>{{ employees.data.cv_data.education }}</p>
                        </div>
                        <div class="">
                            <p>အိမ်ထောင်စုစာရင်း</p>
                            <p>{{family}}</p>
                        </div>
                        <div class="">
                            <p>ဖုန်းနံပါတ်</p>
                            <p>{{ employees.data.cv_data.phone_number }}</p>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center bolds">
                        <div class="">
                            <p>လုပ်ငန်းအတွေ့အကြုံ</p>
                            <p>{{ employees.data.cv_data.work_exp }}</p>
                        </div>
                        <div class="margins">
                            <p>အလုပ်ခေါ်တာကိုဘယ်လိုသိပါသလဲ</p>
                            <p>{{ employees.data.cv_data.answer_1 }}</p>
                        </div>
                        <div class="margin_end">
                            <p>မည်သို့အဆက်အသွယ်ရခဲ့သလဲ</p>
                            <p>{{ employees.data.cv_data.education.answer_2 }}</p>
                        </div>
                    </div>
                    
                    
                </div>
                <!-- Other Information -->
                <h5 class="text-primary pt-3">Other Information</h5>
                <div class="row">
                    <div class="col-7">
                        <div class="bolds">
                            <!-- passport start -->
                            <div class="d-flex align-items-center bolds">
                                    <div class="pe-5">
                                        <p>Passport</p>
                                        <p>{{ passport }}</p>
                                    </div>
                                    <div class="ps-5">
                                        <p>Passprt ဘယ်လိုလုပ်ခဲ့သလဲ</p>
                                        <p>{{ employees.data.cv_data.answer_3 }}</p>
                                    </div>

                                    <div class="ps-5">
                                        <p>passport ကုန်ကျစရိတ်</p>
                                        <p>{{ employees.data.cv_data.passport_cost}}</p>
                                    </div>

                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                    <div class="col-4">
                                        <p>အရောင်ကာလာခွဲခြားနိုင်ခြင်း</p>
                                        <p>{{ colorBlind }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla dolores labore consequatur? Minus qui in vero voluptatem assumenda illo, quisquam, beatae ea voluptatum, officiis dignissimos? Perferendis optio ex culpa!</p>
                                    </div>
                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                    <div class="col-4">
                                        <p>English စာအရည်အချင်း</p>
                                        <p>{{ englishSkill }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla dolores labore consequatur? Minus qui in vero voluptatem assumenda illo, quisquam, beatae ea voluptatum, officiis dignissimos? Perferendis optio ex culpa!</p>
                                    </div>

                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                    <div class="col-4">
                                        <p>သင်္ချာအပေါင်း/အနှုတ် အရည်အချင်း</p>
                                        <p>{{ mathSkill }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla dolores labore consequatur? Minus qui in vero voluptatem assumenda illo, quisquam, beatae ea voluptatum, officiis dignissimos? Perferendis optio ex culpa!</p>
                                    </div>
                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                <div class="col-4">
                                        <p>ကြာချိန်စောင့်ဆိုင်းနိုင်ခြင်း</p>
                                        <p>{{ canwait }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla dolores labore consequatur? Minus qui in vero voluptatem assumenda illo, quisquam, beatae ea voluptatum, officiis dignissimos? Perferendis optio ex culpa!</p>
                                    </div>
                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                <div class="col-4">
                                        <p>သွားရောက်လုပ်ကိုင်မည့်နေရာတွင် အဆက်အသွယ်/ဆွေမျိုးများ</p>
                                        <p>{{ familyForegin }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla dolores labore consequatur? Minus qui in vero voluptatem assumenda illo, quisquam, beatae ea voluptatum, officiis dignissimos? Perferendis optio ex culpa!</p>
                                    </div>
                            </div>
                            <!-- passport end -->

                            <!-- passport start -->
                            <div class="d-flex bolds">
                                <div class="col-4">
                                        <p>ပြည်ပနိုင်ငံများသို့ သွားရောက်အလုပ်လုပ်ကိုင်ထားခြင်း</p>
                                        <p>{{ workexpForegin }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla dolores labore consequatur? Minus qui in vero voluptatem assumenda illo, quisquam, beatae ea voluptatum, officiis dignissimos? Perferendis optio ex culpa!</p>
                                    </div>
                            </div>
                            <!-- passport end -->
                            <!-- passport start -->
                            <div class="d-flex bolds">
                                <div class="col-4">
                                        <p>အလုပ်ရှာဖွေရာတွင် တစ်စုံတစ်ယောက်အား အခကြေးငွေ ပေးခဲ့ရခြင်းရှိမရှိ</p>
                                        <p>{{ paid }}</p>
                                    </div>
                                    <div class="col-8">
                                         <p>မှတ်ချက်</p>
                                         <p class="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla dolores labore consequatur? Minus qui in vero voluptatem assumenda illo, quisquam, beatae ea voluptatum, officiis dignissimos? Perferendis optio ex culpa!</p>
                                    </div>
                            </div>
                            <!-- passport end -->
                        </div>

                        <div class="">

                        </div>


                    </div>

                    <div  class="col-5 bolds">
                        <div class="d-flex align-items-center bolds">
                                <div class="me-5">
                                    <p>Covid-19 ကာကွယ်ဆေး</p>
                                    <p>{{ covid }}</p>
                                </div>
                        </div>
                        <div>
                            <div class="d-flex align-items-center bolds">
                                <div class="me-5">
                                        <p>ပထမအကြိမ် ကာကွယ်ဆေးအမည်</p>
                                        <p>{{ employees.data.cv_data.first_covid_vaccine_name }}</p>
                                </div>

                                <div class="px-2">
                                        <p>ရက်ဆွဲ</p>
                                        <p>{{ employees.data.cv_data.first_vaccinated_date }}</p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center bolds">
                                <div class="me-5">
                                        <p>ဒုတိယအကြိမ် ကာကွယ်ဆေးအမည်</p>
                                        <p>{{ employees.data.cv_data.second_covid_vaccine_name }}</p>
                                </div>

                                <div class="px-1">
                                        <p>ရက်ဆွဲ</p>
                                        <p>{{ employees.data.cv_data.second_vaccinated_date }}</p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center bolds">
                                <div class="me-5">
                                        <p>တတိယအကြိမ် ကာကွယ်ဆေးအမည်</p>
                                        <p>{{ employees.data.cv_data.third_covid_vaccine_name }}</p>
                                </div>

                                <div class="">
                                        <p>ရက်ဆွဲ</p>
                                        <p>{{ employees.data.cv_data.third_vaccinated_date }}</p>
                                </div>
                            </div>

                            <div>
                                <div class="">
                                        <p>မှတ်ချက်</p>
                                        <p class="bg-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex nam dolore laboriosam doloribus voluptas quam totam placeat quibusdam soluta. Provident sunt sapiente quaerat repellendus totam corrupti, nam molestias? Incidunt?</p>
                                </div>
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
import { computed, onMounted, ref } from 'vue';
import { defineEmits,defineComponent } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
export default {
    props:["id"],
    setup(props){
        let store = useStore();
        let family = ref();
        let passport = ref();
        let colorBlind = ref();
        let covid = ref();
        let englishSkill = ref();
        let mathSkill = ref();
        let canwait = ref();
        let familyForegin = ref();
        let workexpForegin = ref();
        let paid = ref();
        const emit = defineEmits(['passed'])

        console.log(props);

        //   get employee
        let getsingleEmployees = (id)=> store.dispatch('infoModule/getsingleEmployees',id);
            getsingleEmployees(props.id.id);

        let employees = computed(()=> {
              return store.state.infoModule.singleemployeesinfo
          })

        
            

          console.log(employees.value);

         let checkfn = (data)=>{
                if(data.column == 1){
                    data.value.value = "ရှိပါတယ်"
                }else{
                    data.value.value = "မရှိပါ"
                }
          }

          let x = ()=>{
            if(employees.value){
                checkfn({column:employees.value.data.cv_data.has_family_list,value:family});
                checkfn({column:employees.value.data.cv_data.has_passport,value:passport});
                checkfn({column:employees.value.data.cv_data.is_color_blind,value:colorBlind});
                checkfn({column:employees.value.data.cv_data.has_covid_vaccine,value:covid});
                checkfn({column:employees.value.data.cv_data.has_e_skill,value:englishSkill});
                checkfn({column:employees.value.data.cv_data.has_math_skill,value:mathSkill});
                checkfn({column:employees.value.data.cv_data.can_wait,value:canwait});
                checkfn({column:employees.value.data.cv_data.has_family_in_foregin,value:familyForegin});
                checkfn({column:employees.value.data.cv_data.has_workexp_in_foregin,value:workexpForegin});
                checkfn({column:employees.value.data.cv_data.has_paid_forjob,value:paid});
            }   
          }

          x()

          

        
          return{employees,family,passport,colorBlind,covid,englishSkill,mathSkill,
                 canwait,familyForegin,workexpForegin,paid
        }
    }
}
</script>

<style>
.cvModal{
  width: 88vw;
  height: 88vh;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index:200;
}

.cv{
    width: inherit;
    overflow-y: scroll;
    position: relative;
}

.close{
    background-color: transparent;
    border: none;
    float: right;
    /* margin-bottom: 120px; */
    font-size: 40px;

    position: absolute;
    top: -10px;
    right: 10px;
}

.modalBody{
    position: relative;
}

.personalinform{
    width: 87%;
    /* background-color: red; */
}

.bolds div p:first-child{
    font-weight: bold;
}

.userPhoto{
    position: absolute;
    top: 2%;
    right: 0%;

    background-color: aqua;

}

.margins{
    margin-left:150px ;
}

.margin_end{
    margin-right: 50px;
}

.btnContainer{
    display: flex;
    justify-content: center;
    align-items: center;
}

.btnContainer .btn{
    margin: 0 20px;
    padding: 5px 30px;
    
}

.reject{
    background: rgba(255, 0, 0,0.2);
}

.accept{
    background: rgba(0, 255, 0, 0.2);
}

.pending:hover{
    background: orange;
}
</style>