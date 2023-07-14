

<template>


  <div class="container form_control ">
    <div class="text-center">
      <div class="col-12 mb-5 notice_and_aggrement">
      <p class="pagetitle text-center mb-5">ဖြည့်သွင်းထားသော ကိုယ်ရေးအချက်အလက်များ</p>
      
      
      <!-- Reminder  -->
      <div class="col-12">
        <p class="reminder_for_check">ဖြည့်သွင်းထားသော ကိုယ်ရေးကိုယ်တာ အချက်အလက်များ မှန်ကန်ခြင်းရှိမရှိ စစ်ဆေးအတည်ပြုပါ။</p>
      </div>
      <div class="reminder_control mt-5 text-justify">
        <p class="text-justify">သင်၏ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို
<span class="company_name">INTERNATIONAL FOCUS GENERAL SERVICES CO.,LTD</span> မှ လုပ်ငန်း လိုအပ်ချက်အရ သိမ်းဆည်းထားမည်ကို လက်ခံသဘောတူပါသလား။</p>
      </div>
      <!-- User Agreement  -->
      <div class="col-12 agrement_control">
        <label for="agrement" class="col-8 ">လက်ခံသဘောတူပါသည်။</label>
        <!-- <input type="checkbox" class="col-3 aggrement_checkbox" v-model="isChecked" /> -->
      </div>
    </div>
  </div>
    <div class="form">
       
      <!-- Image Section  -->
      <div class="image_control d-none">
        <div v-if="uploadedImage" class="image_container">
          <img :src="uploadedImageUrl" alt="Uploaded Image" class="image">
        </div>
      </div>
     
     
      <!-- Address Section  -->
      <div class="address_control">
                  <label for="address" class="form-label">နေရပ်လိပ်စာ</label>
                 <p class="form-control address_value text_value">{{ address }} </p>
        </div>
        <!-- Region / State Section  -->
        <div class="state_control">
          <label for="region_state" class="form-label">တိုင်းဒေသကြီး / ပြည်နယ်</label>
          <p class="form-control region_state_value text_value">{{ selectedRegionValue }}</p>
        </div>
        <!-- Body Weight And Height  -->
        <div class="col-12  d-flex weightheight_control">
                <!-- Weight -->
                <div class="col-5  weight_control">
                  <div>
                    <label for="weight" class="form-label">ကိုယ်အလေးချိန်</label>
                  </div>
                  <div class="col-12 d-flex">
                    <p class="col-6 mt-4 input_number_box text-start weight_value">{{ weight }}</p>
                    <span class="input-group-text col-4 labels">ပေါင်</span>
                  </div>
                </div>
                <!-- Height -->
                <div class="col-7  height_control">
                  <div>
                    <label for="height" class="form-label">အရပ်အမြင့်</label>
                  </div>
                  <div class="col-12 d-flex">
                    <div class="col-6 d-flex">
                      <p class="col-6 mt-4 text-start input_number_box height_feet_value">{{ heightFeet }}</p>
                      <span class="col-6 input-group-text labels">ပေ</span>
                    </div>
                    <div class="col-6 d-flex">
                      <p class="col-8 mt-4 text-start input_number_box height_inches_value">{{ heightInches }}</p>
                      <span class="col-4 input-group-text labels">လက်မ</span>
                    </div>
                  </div>
                </div>
        </div>
         <!-- Education Section  -->
         <div class="edeucation_control">
          <label for="education" class="form-label">ပညာအရည်အချင်း</label>
          <p class="form-control education_value text_value">{{ selectedEducationValue }}</p>
        </div>
        <!-- Experience  -->
        <div class="experience_control">
            <label for="experience" class="form-label">လုပ်ငန်းအတွေ့အကြုံ</label>
    
            <p class="form-control experience_value text-start" id="experience">{{ experience }}</p>
        </div>
       
      <!-- Have Family Tree  -->
          <div class="col-12 familyTree_control" disabled style="pointer-events: none; opacity: 1;">
      <label class="col-12 form-label mb-3">အိမ်ထောင်စု စာရင်း</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle group">
        <input type="radio" class="btn-check" name="familyTree" id="familyTreeYes" autocomplete="off" value="1" v-model="familyTree" />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary' : familyTree == 1}" for="familyTreeYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="familyTree" id="familyTreeNo" autocomplete="off" value="0" v-model="familyTree" />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': familyTree == 0}" for="familyTreeNo">မရှိပါ</label>
      </div>
    </div>

        <!-- How do you know about this job  -->
        <div class="howdidyouknow_control">
            <label for="howdidyouknow" class="form-label">အလုပ်ခေါ်တာဘယ်လိုသိသလဲ။</label>
            <p class="form-control howdidyouknow_value">{{ howdidyouknow }}</p>
          </div>
        <!-- How do you get contact  -->
         <div class="howdidyoucontact_control">
            <label for="howdidyoucontact" class="form-label">မည်သို့အဆက်အသွယ် ရခဲ့သလဲ။</label>
            <p class="form-control howdidyoucontact_value ">{{ getContact }}</p>
        </div>
        <!-- Phone Number  -->
        <div class="phoneno_control">
          <label for="phoneno" class="form-label">ဖုန်းနံပါတ်</label>
            <div class="col-12 d-flex">
              <span class="col-3 input-group-text text-center phoneno_defaultno" id="">+95</span>
              <p class="col-9 text-start mt-4 input_number_box phoneno_value">{{ phoneNumber }}</p>
            </div>
        </div>
              <!-- Have Passport -->
<div class="col-12 havepassport_control" disabled style="pointer-events: none; opacity: 1;">
  <label class="col-12 form-label mb-3">Passport</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="havePassport" id="havePassportYes" autocomplete="off" :value="1" v-model="havePassport"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': havePassport == 1}" for="havePassportYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="havePassport" id="havePassportNo" autocomplete="off" :value="0" v-model="havePassport"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': havePassport == 0}" for="havePassportNo">မရှိပါ</label>
    </div>
</div>
         <!-- How do you do a passport  -->
        <div class="dopassport_control">
            <label for="dopassport" class="form-label">Passport ဘယ်လိုလုပ်ခဲ့သလဲ။</label>
            <p class="form-control dopassport_value">{{ dopassport }}</p>
        </div>
        <!-- Passport Cost -->
        <div class="passportcost_control">
            <div>
              <label for="passportcost" class="form-label">Passport ကုန်ကျစရိတ်</label>
            </div>
            <div class="col-12 d-flex">
              <p class="col-10 mt-4 text-center input_number_box passportcost_value"> {{ passportCost }} </p>
              <span class=" input-group-text col-4 labels">ကျပ်</span>
            </div>
        </div>
        <!-- Vaccinated Covid - 19 -->
<div class="col-12 vaccinated_control" disabled style="pointer-events: none; opacity: 1;">
  <label class="col-12 form-label mb-3">Covid-19 ကာကွယ်ဆေး</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="vaccinated" id="vaccinatedYes" autocomplete="off" :value="1" v-model="vaccinated" />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': vaccinated == 1}" for="vaccinatedYes">ထိုးထားပါသည်</label>

        <input type="radio" class="btn-check" name="vaccinated" id="vaccinatedNo" autocomplete="off" :value="0" v-model="vaccinated"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': vaccinated == 0}" for="vaccinatedNo">မထိုးထားပါ</label>
    </div>
</div>
 <!-- First Vaccine Name Section  -->
 <div class="firstVaccineName_control">
          <label for="firstVaccineName" class="form-label">ပထမအကြိမ် ကာကွယ်ဆေးအမည်</label>
          <p class="form-control firstVaccineName_value text_value">{{ firstVaccineName }}</p>
        </div>
        <!-- First Vaccine Date Section  -->
 <div class="firstVaccineDate_control">
          <label for="firstVaccineDate" class="form-label">ပထမ အကြိမ် ကာကွယ်ဆေးထိုးသည့်ရက်စွဲ</label>
          <p class="form-control firstVaccineDate_value text_value">{{ firstVaccineDate }}</p>
        </div>
         <!-- Second Vaccine Name Section  -->
      <div class="secondVaccineName_control">
          <label for="secondVaccineName" class="form-label">ဒုတိယအကြိမ် ကာကွယ်ဆေးအမည်</label>
          <p class="form-control secondVaccineName_value text_value">{{ secondVaccineName }}</p>
        </div>
        <!-- Second Vaccine Date Section  -->
 <div class="secondVaccineDate_control">
          <label for="secondVaccineDate" class="form-label">ဒုတိယအကြိမ် ကာကွယ်ဆေးထိုးသည့်ရက်စွဲ</label>
          <p class="form-control secondVaccineDate_value text_value">{{ secondVaccineDate }}</p>
        </div>
         <!-- Third Vaccine Name Section  -->
      <div class="thirdVaccineName_control">
          <label for="thirdVaccineName" class="form-label">တတိယအကြိမ် ကာကွယ်ဆေးအမည်</label>
          <p class="form-control thirdVaccineName_value text_value">{{ thirdVaccineName }}</p>
        </div>
        <!-- Third Vaccine Date Section  -->
      <div class="thirdVaccineDate_control">
          <label for="thirdVaccineDate" class="form-label">တတိယအကြိမ် ကာကွယ်ဆေးထိုးသည့်ရက်စွဲ</label>
          <p class="form-control thirdVaccineDate_value text_value">{{ thirdVaccineDate }}</p>
        </div>
        <!-- Vaccine Note Section  -->
        <div class="vaccineNote_control">
            <label for="vaccineNote" class="form-label">မှတ်ချက်</label>
            <p class="form-control vaccineNote_value">{{ vaccineNote }}</p>
        </div>
<!-- Color Blind -->
<div class="col-12 colorblind_control" disabled style="pointer-events: none; opacity: 1;">
  <label class="col-12 form-label mb-3">အရောင်ကာလာခွဲခြားနိုင်ခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="colorBlind" id="colorBlindYes" autocomplete="off" :value="1" v-model="colorBlind" />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': colorBlind == 1}" for="colorBlindYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="colorBlind" id="colorBlindNo" autocomplete="off" :value="0" v-model="colorBlind"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': colorBlind == 0}" for="colorBlindNo">မရှိပါ</label>
    </div>
</div>


        <!-- English Skill -->
<div class="col-12 englishskill_control" disabled style="pointer-events: none; opacity: 1;">
  <label class="col-12 form-label mb-3">အင်္ဂလိပ်စာ အရည်အချင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="englishSkill" id="englishSkillYes" autocomplete="off" :value="1" v-model="englishSkill" />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': englishSkill == 1}" for="englishSkillYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="englishSkill" id="englishSkillNo" autocomplete="off" :value="0" v-model="englishSkill"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': englishSkill == 0}" for="englishSkillNo">မရှိပါ</label>
    </div>
</div>
<!-- Math Skill -->
<div class="col-12 mathskill_control" disabled style="pointer-events: none; opacity: 1;">
  <label class="col-12 form-label mb-3">သင်္ချာအပေါင်း/အနှုတ် အရည်အချင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="mathSkill" id="mathSkillYes" autocomplete="off" :value="1" v-model="mathSkill"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': mathSkill == 1}" for="mathSkillYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="mathSkill" id="mathSkillNo" autocomplete="off" :value="0" v-model="mathSkill"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': mathSkill == 0}" for="mathSkillNo">မရှိပါ</label>
    </div>
</div>
        <!-- Can Wait -->
        <div class="col-12 canwait_control" disabled style="pointer-events: none; opacity: 1;">
            <label class="col-12 form-label mb-3">ကြာချိန်စောင့်ဆိုင်းနိုင်ခြင်း</label>
            <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="canWait" id="canWaitYes" autocomplete="off" v-model="canWait" :value="1">
              <label :class="{'btn btn-outline-primary': true, 'btn-primary': canWait == 1}" for="canWaitYes">ရှိပါသည်</label>

              <input type="radio" class="btn-check" name="canWait" id="canWaitNo" autocomplete="off" v-model="canWait" :value="0">
              <label :class="{'btn btn-outline-primary': true, 'btn-primary': canWait == 0}" for="canWaitNo">မရှိပါ</label>
            </div>
        </div>


        <!-- Have Relatives -->
        <div class="col-12 haverelatives_control" disabled style="pointer-events: none; opacity: 1;">
          <label class="col-12 form-label mb-3">သွားရောက်လုပ်ကိုင်မည့်‌နေရာတွင် အဆက်အသွယ်/ဆွေမျိုးများ</label>
            <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="haveRelatives" id="haveRelativesYes" autocomplete="off" v-model="haveRelatives" :value="1"  />
                <label :class="{'btn btn-outline-primary': true, 'btn-primary': haveRelatives == 1}" for="haveRelativesYes">ရှိပါသည်</label>

                <input type="radio" class="btn-check" name="haveRelatives" id="haveRelativesNo" autocomplete="off" :value="0" v-model="haveRelatives"  />
                <label :class="{'btn btn-outline-primary': true, 'btn-primary': haveRelatives == 0}" for="haveRelativesNo">မရှိပါ</label>
            </div>
        </div>
<!-- Have Foreign Experience -->
<div class="col-12 haveforeignexperience_control" disabled style="pointer-events: none; opacity: 1;">
  <label class="col-12 form-label mb-3">ပြည်ပနိုင်ငံများသို့ သွားရောက်အလုပ်လုပ်ကိုင်ထားခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="haveForeignExperience" id="haveForeignExperienceYes" autocomplete="off" :value="1" v-model="foreignExp"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': foreignExp == 1}" for="haveForeignExperienceYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="haveForeignExperience" id="haveForeignExperienceNo" autocomplete="off" :value="0" v-model="foreignExp"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': foreignExp == 0}" for="haveForeignExperienceNo">မရှိပါ</label>
    </div>
</div>
<!-- Have to Pay Money for That Job -->
<div class="col-12 bribe_control" disabled style="pointer-events: none; opacity: 1;">
  <label class="col-12 form-label mb-3">အလုပ်ရှာဖွေရာတွင် တစ်စုံတစ်ယောက်အား အခကြေးငွေ ပေးခဲ့ရခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="haveToBribe" id="haveToBribeYes" autocomplete="off" :value="1" v-model="bribe"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': bribe == 1}" for="haveToBribeYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="haveToBribe" id="haveToBribeNo" autocomplete="off" :value="0" v-model="bribe"  />
        <label :class="{'btn btn-outline-primary': true, 'btn-primary': bribe == 0}" for="haveToBribeNo">မရှိပါ</label>
    </div>
</div>

<!-- Submit and Cancel Btn Section  -->
<div class="col-12 d-flex mt-5 text-center submitbtn_control">
  <div class="col-5 cancelbtn" @click="back_to_edit">
    <button class=" btn btn-outline-danger">ပယ်ဖျက်မည်</button>
  </div>
  <div class="col-1"></div>
  <div class="col-5 submitbtn" >
    <button type="submit" class="btn btn-outline-primary" @click.prevent="submitAllData">အတည်ပြုသည်</button>
  </div>
</div>


<!-- // THere  -->
</div>
  </div>
  <div v-if="responseStatus" class="popup">
      <div class="popup_content">
        <div class="warning">{{ notification }}</div>
        <span class="close_btn" @click="hidePopup">
          <font-awesome-icon class="fa-solid fa-times close_icon" icon="fa-solid fa-times"/>
        </span>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue'
// import { computed,ref } from 'vue';
// import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';
// import axios from 'axios';


export default {
setup(){
  let submitToDb = ref({});
  const storedData = localStorage.getItem('submitToDb');
  let notification = ref('');
  let responseStatus = ref('');
  if (storedData) {
    submitToDb.value = JSON.parse(storedData);
    
  }
  let userid = submitToDb.value.user_id;
  let address = submitToDb.value.address;
  let selectedRegionValue = submitToDb.value.state;
  let weight = Number(submitToDb.value.weight);
  let height = Number(submitToDb.value.height);
  let selectedEducationValue = submitToDb.value.education;
  let experience = submitToDb.value.work_exp;
  let familyTree = Number(submitToDb.value.has_family_list);
  let howdidyouknow = submitToDb.value.answer_1;
  let getContact= submitToDb.value.answer_2;
  let phoneNumber = submitToDb.value.phone_number;
  let havePassport = Number(submitToDb.value.has_passport);
  let dopassport = submitToDb.value.answer_3;
  let passportCost = Number(submitToDb.value.passport_cost);
  let vaccinated = Number(submitToDb.value.has_covid_vaccine);
  let firstVaccineName = submitToDb.value.first_covid_vaccine_name;
  let firstVaccineDate = submitToDb.value.first_vaccinated_date;
  let secondVaccineName = submitToDb.value.second_covid_vaccine_name;
  let secondVaccineDate = submitToDb.value.second_vaccinated_date;
  let thirdVaccineName = submitToDb.value.third_covid_vaccine_name;
  let thirdVaccineDate = submitToDb.value.third_vaccinated_date;
  let vaccineNote = submitToDb.value.vaccinated_note;
  let colorBlind = Number(submitToDb.value.is_color_blind);
  let englishSkill = Number(submitToDb.value.has_e_skill);
  let mathSkill = Number(submitToDb.value.has_math_skill);
  let canWait = Number(submitToDb.value.can_wait);
  let haveRelatives = Number(submitToDb.value.has_family_in_foreign);
  let foreignExp = Number(submitToDb.value.has_workexp_in_foreign);
  let bribe = Number(submitToDb.value.has_paid_forJob);
  
  const hidePopup = () =>{
      // warning.value = null;
      let popup = document.querySelector('.popup');
      popup.style.display = 'none';
    };
  const submitAllData = () =>{
    axios.post('cv',submitToDb.value)
    .then(res=> {
      console.log("1 Response", res.data);
      console.log("2 Response status", res.data.status);
      console.log("3 Response status", res.status);
      if(res.status === 200){
        responseStatus.value = res.status;
        notification.value = "Your Data Have Successfully Submitted";
        console.log("Notification =>", notification.value);
      }
    })
    .catch(err =>{
      console.log("Errro", err.message);
    })
  }

 

  // console.log("Weight", weight, "Type of weight =>", typeof(weight));
  // console.log("Weight Number", weightNumber, "Type of weight =>", typeof(weightNumber));

  return{
    hidePopup,
    submitAllData,
    submitToDb,
    notification,
    responseStatus,
    address,
    userid,
    selectedRegionValue,
    weight,
    height,
    selectedEducationValue,
    experience,
    familyTree,
    howdidyouknow,
    getContact,
    phoneNumber,
    havePassport,
    dopassport,
    passportCost,
    vaccinated,
    firstVaccineName,
    firstVaccineDate,
    secondVaccineName,
    secondVaccineDate,
    thirdVaccineName,
    thirdVaccineDate,
    vaccineNote,
    colorBlind,
    englishSkill,
    mathSkill,
    canWait,
    haveRelatives,
    foreignExp,
    bribe
  }
}
 
  
}
</script>

<style scoped>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .form_control {
    margin-top: 3%;
    width: 370px;
    
    padding: 3rem;

    justify-content: center;
    align-items: center;

    /* border: 1px solid blue;
    border-radius: 15px; */

    /* box-shadow: 0 0 10px #00ff00; Replace #00ff00 with your desired glow color */
  /*animation: glow 1.5s ease-in-out infinite;  Adjust the animation duration as needed */

}


.form > div{
  margin-bottom: 2rem !important;
}
  .form > div > p{
    /* background-color: #f5f5f5; */
    /* background-color: red; */
  }

  .reminder_for_check{
    font-size: 14px;
  }

  .pagetitle{
    font-size: 1.2rem;
    color: blue;
    text-align: center;
    line-height: 2.4rem;
  }

  .company_name{
    color: blue;
  }



.form-control{
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #f5f5f5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

}

.image_control{
  display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
  border-radius: 15px;

}

.image_container{
  width: 300px;
  height: 300px;
  border-radius: 15px;

}

.image{
  width: 300px;
  height: 300px;
  border-radius: 15px;
}

.aggrement_checkbox{
  margin-top: 20px;
  margin-left: 30px !important;
  border: 10px solid black !important;
  width: 20px;
  height: 20px;
}

form > div{
  margin-bottom: 1.8rem;
  /* background-color: red; */
}

.phoneno_defaultno{
  background-color: #fff !important;
  height: 3rem;
  margin-top:1.2rem;

}

.phoneno_value, .passportcost_value{
  text-align: center;
  /* border: 1px solid blue; */
}

.input_number_box{
  
  background-color: #f5f5f5;
  display: block;
  height: 3rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  

  /* border: 1px solid blue; */
  border-radius: 0.25rem;

  margin-top:1.2rem;
}

.input-group-text{
  height: 2rem;
  margin-top: 1.5rem;
  background-color: white;
  border: none;

}

.submitbtn_control button{
  font-size: 14px;
}

.popup{
    position: fixed;
    top: 50%;
    left: 50%   ;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 90%;
    background-color: rgba(102, 255, 82, 0.7); /* semi-transparent background */
    border: 2px solid lightgreen;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 100;
  }

.popup_content{
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  text-align: center;
    border-radius: 15px;

}
</style>