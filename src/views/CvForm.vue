<template>
    <div class="container form_control">
      <div class="text-center">
        <div class="col-12 mb-5 notice_and_aggrement">
        <h3 class="pagetitle text-start">အကြိုအင်တာဗျူးစစ်ဆေးခြင်း</h3>
        
        
        <!-- Reminder  -->
        <div class="reminder_control mt-5 text-justify">
          <p class="text-justify">သင်၏ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို
  <span class="company_name">INTERNATIONAL FOCUS GENERAL SERVICES CO.,LTD</span> မှ လုပ်ငန်း လိုအပ်ချက်အရ သိမ်းဆည်းထားမည်ကို လက်ခံသဘောတူပါသလား။</p>
        </div>
        <!-- User Agreement  -->
        <div class="col-12 agrement_control">
          <label for="agrement" class="col-8 ">လက်ခံသဘောတူပါသည်။</label>
          <input type="checkbox" class="col-3 aggrement_checkbox" v-model="isChecked" />
        </div>
      </div>
    </div>
      <div class="form" >
        
        <!-- Upload User Photo Section  -->
        <!-- <div class="photo_upload_control">
      <label for="photo" class="form-label">ဓာတ်ပုံ</label>
  
      <button @click="uploadImage" class="photo_upload_button d-none">ဓာတ်ပုံတင်ရန်</button>
  
      <div v-if="selectedImage" class="image_container">
        <img :src="selectedImage" alt="Uploaded Image" class="image">
      </div>
        </div>
      <input type="file" ref="file" accept="image/jpeg, image/png" class="btn btn-danger image_input" @input="handleFileChange" /> -->
           <!-- <div class="photo_upload_control">
            <label for="photo" class="form-label">ဓာတ်ပုံ</label>
            <div v-if="uploadedImage" class="image_container">
              <img :src="uploadedImage" alt="Uploaded Image" class="image">
            </div>
          </div>
          <input type="file" class="btn btn-info image_input" @change="handleImageUpload" /> -->
  
          <!-- Address Section  -->
          <div class="address_control">
              <label for="address" class="form-label">နေရပ်လိပ်စာ</label>
              <textarea type="text" id="address" rows="3"  class=" address_input input_text_box" v-model="formData.address" :disabled="!isChecked"></textarea>  
          </div>
          <!-- Select Region / State Section  -->
          <div class="region_control" >
              <label for="region" class="form-label">တိုင်းဒေသကြီး / ပြည်နယ်</label>
              <select class="form-select" aria-label="Default select example" :disabled="!isChecked" v-model="formData.selectedRegionValue">
                <option selected>Open this select menu</option>
                <option value="ဧရာဝတီ">ဧရာဝတီ</option>
                <option value="ပဲခူး">ပဲခူး</option>
                <option value="ချင်း">ချင်း</option>
                <option value="ကချင်">ကချင်</option>
                <option value="ကယား">ကယား</option>
                <option value="ကရင်">ကရင်</option>
                <option value="မကွေး">မကွေး</option>
                <option value="မန္တလေး">မန္တလေး</option>
                <option value="မွန်">မွန်</option>
                <option value="နေပြည်တော်">နေပြည်တော်</option>
                <option value="ရခိုင်">ရခိုင်</option>
                <option value="စစ်ကိုင်း">စစ်ကိုင်း</option>
                <option value="ရှမ်း">ရှမ်း</option>
                <option value="တနင်္သာရီ">တနင်္သာရီ</option>
                <option value="ရန်ကုန်">ရန်ကုန်</option>
              </select>
          </div>
          <!-- Body Weight And Height  -->
          <div class="col-12  d-flex weightheight_control">
            <!-- Weight -->
            <div class="col-5  weight_control">
              <div>
                <label for="weight" class="form-label">ကိုယ်အလေးချိန်</label>
              </div>
              <div class="col-12 d-flex">
                <input type="text" class=" col-6 text-center input_number_box" v-model="formData.weight" :disabled="!isChecked" />
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
                  <input type="text" class="col-6 text-center input_number_box" v-model="formData.heightFeet" :disabled="!isChecked" />
                  <span class="col-6 input-group-text labels">ပေ</span>
                </div>
                <div class="col-6 d-flex">
                  <input type="text" class=" col-8 text-center input_number_box" v-model="formData.heightInches" :disabled="!isChecked" />
                  <span class="col-4 input-group-text labels">လက်မ</span>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Education  -->
          <div class="col-12 education_control">
            <label for="education" class="form-label">ပညာအရည်အချင်း</label>
              <select class="form-select" aria-label="Default select example" :disabled="!isChecked" v-model="formData.selectedEducationValue">
                <option selected>Open this select menu</option>
                <option value="Grade - 1">Grade - 1</option>
                <option value="Grade - 2">Grade - 2</option>
                <option value="Grade - 3">Grade - 3</option>
                <option value="Grade - 4">Grade - 4</option>
                <option value="Grade - 5">Grade - 5</option>
                <option value="Grade - 6">Grade - 6</option>
                <option value="Grade - 7">Grade - 7</option>
                <option value="Grade - 8">Grade - 8</option>
                <option value="Grade - 9">Grade - 9</option>
                <option value="Grade - 10">Grade - 10</option>
                <option value="Passed Matriculation Exam">Passed Matriculation Exam</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduated">Grduated</option>
                
              </select>
          </div>
          <!-- Experience  -->
           <div class="experience_control">
              <label for="experience" class="form-label">လုပ်ငန်းအတွေ့အကြုံ</label>
              <textarea type="text" rows="3" id="experience" class="experience_input input_text_box" v-model="formData.experience" :disabled="!isChecked"></textarea>
          </div>
          
          <!-- Have Family Tree  -->
          <div class="col-12 familyTree_control">
            <label class="col-12 form-label mb-3">အိမ်ထောင်စု စာရင်း</label>
            <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="familyTree" id="familyTreeYes" autocomplete="off" value="1" v-model="formData.familyTree" :disabled="!isChecked" />
              <label class="btn btn-outline-primary" for="familyTreeYes">ရှိပါသည်</label>
  
              <input type="radio" class="btn-check" name="familyTree" id="familyTreeNo" autocomplete="off" value="0" v-model="formData.familyTree" :disabled="!isChecked" checked/>
              <label class="btn btn-outline-primary" for="familyTreeNo">မရှိပါ</label>
            </div>
          </div>
          <!-- How do you know about this job  -->
          <div class="howdidyouknow_control">
              <label for="howdidyouknow" class="form-label">အလုပ်ခေါ်တာဘယ်လိုသိသလဲ။</label>
              <textarea type="text" rows="3" id="howdidyouknow" class="howdidyouknow_input input_text_box" v-model="formData.howdidyouknow" :disabled="!isChecked"></textarea>
          </div>
          <!-- How do you get contact  -->
  
           <div class="howdidyoucontact_control">
              <label for="howdidyoucontact" class="form-label">မည်သို့အဆက်အသွယ် ရခဲ့သလဲ။</label>
              <textarea type="text" rows="3" id="howdidyoucontact" class="howdidyoucontact_input input_text_box" v-model="formData.getContact" :disabled="!isChecked"></textarea>
          </div>
          <!-- Phone Number  -->
          <div class="phoneno_control">
            <label for="phoneno" class="form-label">ဖုန်းနံပါတ်</label>
              <div class="col-12 d-flex">
                <span class="col-3 input-group-text text-start phoneno_defaultno" id="">+95</span>
                <input type="text" class="col-9 input_number_box" v-model="formData.phoneNumber" :disabled="!isChecked" />
              </div>
          </div>
         <!-- Have Passport -->
  <div class="col-12 havepassport_control">
    <label class="col-12 form-label mb-3">Passport</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="havePassport" id="havePassportYes" autocomplete="off"  value="1" v-model="formData.havePassport" :disabled="!isChecked"/>
          <label class="btn btn-outline-primary" for="havePassportYes">ရှိပါသည် </label>
  
          <input type="radio" class="btn-check" name="havePassport" id="havePassportNo" autocomplete="off" value="0" v-model="formData.havePassport" checked :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="havePassportNo">မရှိပါ</label>
      </div>
  </div>
        <!-- How do you do a passport  -->
        <div class="dopassport_control">
              <label for="dopassport" class="form-label">Passport ဘယ်လိုလုပ်ခဲ့သလဲ။</label>
              <textarea type="text" rows="3" id="dopassport" class="dopassport_input  input_text_box" v-model="formData.dopassport" :disabled="!isChecked"></textarea>
          </div>
        <!-- Passport Cost -->
        <div class="passportcost_control">
              <div>
                <label for="passportcost" class="form-label">Passport ကုန်ကျစရိတ်</label>
              </div>
              <div class="col-12 d-flex">
                <input type="text" class=" col-10 text-end input_number_box" v-model="formData.passportCost" :disabled="!isChecked" />
                <span class="input-group-text col-4 labels">ကျပ်</span>
              </div>
            </div>
     
  <!-- Vaccinated Covid - 19 -->
  <div class="col-12 vaccinated_control">
    <label class="col-12 form-label mb-3">Covid-19 ကာကွယ်ဆေး</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="covidVaccinated" id="covidVaccinatedYes" autocomplete="off" value="1" v-model="formData.vaccinated" :disabled="!isChecked"/>
          <label class="btn btn-outline-primary" for="covidVaccinatedYes">ထိုးထားပါသည်</label>
  
          <input type="radio" class="btn-check" name="covidVaccinated" id="covidVaccinatedNo" autocomplete="off" value="0" v-model="formData.vaccinated" checked :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="covidVaccinatedNo">မထိုးထားပါ</label>
      </div>
  </div>

    <!-- Select Region / State Section  -->
    <div class="firstVaccineName_control" >
              <label for="firstVaccineName" class="form-label">ပထမအကြိမ် ကာကွယ်ဆေးအမည်</label>
              <select class="form-select" aria-label="Default select example"  v-model="formData.firstVaccineName">
                <!-- <option selected>Open this select menu</option> -->
                <option value="Covidshield">Covidshield</option>
                <option value="Sinopharm">Sinopharm</option>
                <option value="Sputnik">Sputnik</option>
              </select>
          </div>

   <!-- First Covid Vaccine Date  -->
   <div class="firstVaccineDate_control">
              <label for="firstVaccineDate" class="form-label">ပထမအကြိမ် ကာကွယ်ဆေးထိုးသည့်ရက်စွဲ</label>
              <input id="firstVaccineDate" class="firstVaccineDate_input  input_text_box dates" placeholder="DD-MM-YYYY" type="date" min="1950-12-17" max="2030-01-01" v-model="formData.firstVaccineDate" autocomplete="off" /> 
    </div>

     <!-- Select Region / State Section  -->
     <div class="secondVaccineName_control" >
              <label for="secondVaccineName" class="form-label">ဒုတိယအကြိမ် ကာကွယ်ဆေးအမည်</label>
              <select class="form-select" aria-label="Default select example"  v-model="formData.secondVaccineName">
                <!-- <option selected>Open this select menu</option> -->
                <option value="Covidshield">Covidshield</option>
                <option value="Sinopharm">Sinopharm</option>
                <option value="Sputnik">Sputnik</option>
              </select>
          </div>

     <!-- Second Covid Vaccine Date  -->
   <div class="firstVaccineDate_control">
              <label for="secondVaccineDate" class="form-label">ဒုတိယအကြိမ် အကြိမ် ကာကွယ်ဆေးထိုးသည့်ရက်စွဲ</label>
              <input id="firstVaccineDate" class="firstVaccineDate_input  input_text_box dates" placeholder="DD-MM-YYYY" type="date" min="1950-12-17" max="2030-01-01" v-model="formData.secondVaccineDate" autocomplete="off" /> 
    </div>

     <!-- Select Region / State Section  -->
     <div class="thirdVaccineName_control" >
              <label for="thirdVaccineName" class="form-label">တတိယအကြိမ် ကာကွယ်ဆေးအမည်</label>
              <select class="form-select" aria-label="Default select example"  v-model="formData.thirdVaccineName">
                <!-- <option selected>Open this select menu</option> -->
                <option value="Covidshield">Covidshield</option>
                <option value="Sinopharm">Sinopharm</option>
                <option value="Sputnik">Sputnik</option>
              </select>
          </div>

     <!-- First Covid Vaccine Date  -->
   <div class="firstVaccineDate_control">
              <label for="firstVaccineDate" class="form-label">တတိယအကြိမ် ကာကွယ်ဆေးထိုးသည့်ရက်စွဲ</label>
              <input id="firstVaccineDate" class="firstVaccineDate_input  input_text_box dates" placeholder="DD-MM-YYYY" type="date" min="1950-12-17" max="2030-01-01" v-model="formData.thirdVaccineDate" autocomplete="off" /> 
    </div>

    <!-- COvid Vaccine Note Section  -->
    <div class="vaccineNote_control">
              <label for="vaccineNote" class="form-label">မှတ်ချက်</label>
              <textarea type="text" id="vaccineNote" rows="3"  class=" vaccineNote_input input_text_box" v-model="formData.vaccineNote" :disabled="!isChecked"></textarea>  
          </div>
  
  <!-- Color Blind -->
  <div class="col-12 colorblind_control">
    <label class="col-12 form-label mb-3">အရောင်ကာလာခွဲခြားနိုင်ခြင်း</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="colorBlind" id="colorBlindYes" autocomplete="off" value="1" v-model="formData.colorBlind" :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="colorBlindYes">ရှိပါသည် </label>
  
          <input type="radio" class="btn-check" name="colorBlind" id="colorBlindNo" autocomplete="off" value="0" v-model="formData.colorBlind" checked :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="colorBlindNo">မရှိပါ</label>
      </div>
  </div>
  
  <!-- English Skill -->
  <div class="col-12 englishskill_control">
    <label class="col-12 form-label mb-3">အင်္ဂလိပ်စာ အရည်အချင်း</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="englishSkill" id="englishSkillYes" autocomplete="off" value="1" v-model="formData.englishSkill" :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="englishSkillYes">ရှိပါသည်</label>
  
          <input type="radio" class="btn-check" name="englishSkill" id="englishSkillNo" autocomplete="off" value="0" v-model="formData.englishSkill" checked :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="englishSkillNo">မရှိပါ</label>
      </div>
  </div>
  <!-- Math Skill -->
  <div class="col-12 mathskill_control">
    <label class="col-12 form-label mb-3">သင်္ချာအပေါင်း/အနှုတ် အရည်အချင်း</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="mathSkill" id="mathSkillYes" autocomplete="off" value="1" v-model="formData.mathSkill" :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="mathSkillYes">ရှိပါသည်</label>
  
          <input type="radio" class="btn-check" name="mathSkill" id="mathSkillNo" autocomplete="off" value="0" v-model="formData.mathSkill" checked :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="mathSkillNo">မရှိပါ</label>
      </div>
  </div>
  <!-- Can Wait -->
  <div class="col-12 canwait_control">
    <label class="col-12 form-label mb-3">ကြာချိန်စောင့်ဆိုင်းနိုင်ခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="canWait" id="canWaitYes" autocomplete="off" value="1" v-model="formData.canWait" :disabled="!isChecked" />
      <label class="btn btn-outline-primary" for="canWaitYes">ရှိပါသည်</label>
  
      <input type="radio" class="btn-check" name="canWait" id="canWaitNo" autocomplete="off" value="0" v-model="formData.canWait" checked :disabled="!isChecked" />
      <label class="btn btn-outline-primary" for="canWaitNo">မရှိပါ</label>
    </div>
  </div>
  <!-- Have Relatives -->
  <div class="col-12 haverelatives_control">
    <label class="col-12 form-label mb-3">သွားရောက်လုပ်ကိုင်မည့်‌နေရာတွင် အဆက်အသွယ်/ဆွေမျိုးများ</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="haveRelatives" id="haveRelativesYes" autocomplete="off" value="1" v-model="formData.haveRelatives" :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="haveRelativesYes">ရှိပါသည်</label>
  
          <input type="radio" class="btn-check" name="haveRelatives" id="haveRelativesNo" autocomplete="off" value="0" v-model="formData.haveRelatives" checked :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="haveRelativesNo">မရှိပါ</label>
      </div>
  </div>
  <!-- Have Foreign Experience -->
  <div class="col-12 haveforeignexperience_control">
    <label class="col-12 form-label mb-3">ပြည်ပနိုင်ငံများသို့ သွားရောက်အလုပ်လုပ်ကိုင်ထားခြင်း</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="haveForeignExperience" id="haveForeignExperienceYes" autocomplete="off" value="1" v-model="formData.foreignExp" :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="haveForeignExperienceYes">ရှိပါသည်</label>
  
          <input type="radio" class="btn-check" name="haveForeignExperience" id="haveForeignExperienceNo" autocomplete="off" value="0" v-model="formData.foreignExp" checked :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="haveForeignExperienceNo">မရှိပါ</label>
      </div>
  </div>
  <!-- Have to Pay Money for That Job -->
  <div class="col-12 bribe_control">
    <label class="col-12 form-label mb-3">အလုပ်ရှာဖွေရာတွင် တစ်စုံတစ်ယောက်အား အခကြေးငွေ ပေးခဲ့ရခြင်း</label>
      <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="haveToBribe" id="haveToBribeYes" autocomplete="off" value="1" v-model="formData.bribe"  :disabled="!isChecked"/>
          <label class="btn btn-outline-primary" for="haveToBribeYes">ရှိပါသည်</label>
  
          <input type="radio" class="btn-check" name="haveToBribe" id="haveToBribeNo" autocomplete="off" value="0" v-model="formData.bribe" checked :disabled="!isChecked" />
          <label class="btn btn-outline-primary" for="haveToBribeNo">မရှိပါ</label>
      </div>
  </div>
  
  <!-- Submit and Cancel Btn Section  -->
  <div class="col-12 mt-5 d-flex text-center submitbtn_control">
    <div class="col-5   cancelbtn">
      <button class=" btn btn-outline-danger" @click="clearAll">ပယ်ဖျက်မည်</button>
    </div>
    <div class="col-1"></div>
    <div class="col-5   submitbtn">
      <button type="submit" class="btn btn-outline-primary" @click.prevent="submitForm">ရှေ့ဆက်မည်</button>
    </div>
  </div>
  
  </div>
    </div>
  </template>

<script>
import axios from 'axios';
// import store from '@/store';
// import store from '@/store';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    setup(){
        const router = useRouter();
        const store = useStore();
        const isChecked = ref(false);
        let submitToDb = ref({});
       
        const formData = ref({
            userid:'',
            address: '',
            selectedRegionValue: '',
            weight: '',
            heightFeet: '',
            heightInches:'',
            selectedEducationValue: '',
            experience: '',
            familyTree: '',
            howdidyouknow: '',
            getContact: '',
            phoneNumber: '',
            havePassport: '',
            dopassport: '',
            passportCost: '',
            vaccinated: '',
            firstVaccineName: '',
            firstVaccineDate: '',
            secondVaccineName: '',
            secondVaccineDate: '',
            thirdVaccineName: '',
            thirdVaccineDate: '',
            vaccineNote: '',
            colorBlind: '',
            englishSkill: '',
            mathSkill: '',
            canWait: '',
            haveRelatives: '',
            foreignExp: '',
            bribe: ''
        });
        
      

        
        let submitForm = async function() {
            let userid = localStorage.getItem('userid');
            let data = formData.value;
           
            // Convert Boolean and String Value into Number 
            let weightNumber = Number(data.weight);
            let heightFeetNumber = Number(data.heightFeet);
            let heightInchesNumber = Number(data.heightInches);
            let passportCostNumber = Number(data.passportCost);
            let familyTreeNumber = Number(data.familyTree);
            let havePassportNumber = Number(data.havePassport);
            let vaccinatedNumber = Number(data.vaccinated);
            let colorBlindNumber = Number(data.colorBlind);
            let englishSkillNumber = Number(data.englishSkill);
            let mathSkillNumber = Number(data.mathSkill);
            let canWatiNumber = Number(data.canWait);
            let haveRelativesNumber = Number(data.haveRelatives);
            let foreignExpNumber = Number(data.foreignExp);
            let bribeNumber = Number(data.bribe);

            submitToDb.value = {
              user_id:userid,
              address: data.address,
              state:data.selectedRegionValue,
              weight:weightNumber,
              height:`${heightFeetNumber}.${heightInchesNumber}`,
              education:data.selectedEducationValue,
              work_exp:data.experience,
              has_family_list: familyTreeNumber,
              answer_1:data.howdidyouknow,
              answer_2:data.getContact,
              phone_number:data.phoneNumber,
              has_passport:havePassportNumber,
              answer_3:data.dopassport,
              passport_cost:passportCostNumber,
              has_covid_vaccine:vaccinatedNumber,
              first_covid_vaccine_name:data.firstVaccineName,
              first_vaccinated_date:data.firstVaccineDate,
              second_covid_vaccine_name:data.secondVaccineName,
              second_vaccinated_date:data.secondVaccineDate,
              third_covid_vaccine_name:data.thirdVaccineName,
              third_vaccinated_date:data.thirdVaccineDate,
              vaccinated_note:data.vaccineNote,
              is_color_blind:colorBlindNumber,
              has_e_skill:englishSkillNumber,
              has_math_skill:mathSkillNumber,
              can_wait:canWatiNumber,
              has_family_in_foreign:haveRelativesNumber,
              has_workexp_in_foreign:foreignExpNumber,
              has_paid_forJob:bribeNumber
             }
             localStorage.setItem('submitToDb', JSON.stringify(submitToDb.value));
             router.push('/checkcvinfo');
            // try {
            //   const response = await axios.post('cv', submitToDb.value);
            //   console.log("Response", response.data);
            // } catch (err) {
            //   console.log(err.message);
            // }
               
            // Send data to vuex to store 
            // store.dispatch('cvform/storeCvData',data);
            // console.log("Submit function callled",typeof(formData));
            // console.log('Form Data Value =>', formData.value, "Data Type =>", typeof(formData.value));
            // Send CV Form data to server function        
           
            
        }

      
    return{
        submitToDb,
        isChecked,
        formData,
        submitForm
        
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

  .notice_and_aggrement{
    /* margin-top: 3rem; */
    
  }

.form_control {
  margin-top: 3%;
    width: 370px;
    /* height: 400vh; */
    /* border: 1px solid blue; */
    padding: 3rem;

    /* display: flex; */
    justify-content: center;
    align-items: center;
}

.form > div{
  margin-bottom: 2rem !important;
}

.pagetitle{
  text-align: center;
  color: blue;
}

.aggrement_checkbox{
  margin-top: 10px;
  margin-left: 30px !important;
  border: 10px solid black !important;
  width: 20px;
  height: 20px;
}

.company_name{
  color: blue;
}

.photo_upload_control {
    height: 250px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    padding: 1rem;
    border-radius: 15px;
    background-color: #f5f5f5;

    position: relative;
  }

  .photo_upload_control label {
    font-size: 18px;
    font-weight: bold;
  }

  .photo_upload_control input[type="file"] {
    display: none;
  }

  .photo_upload_button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: #0439DE;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .photo_upload_button:hover {
    background-color: #0000DD;
  }

  .photo_upload_button i {
    margin-right: 5px;
  }

  .image_container{
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    border-radius: 15px;
  }

  .image{
    width: 250px;
    height: 250px;
    border-radius: 15px;
  }



.form > div > .input_text_box {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #f6f6f6;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form > div > .input_text_box:focus {
  color: #212529;
  background-color: #fff;
  /* border-color: ; */
  border: 2px solid #0439DE;
  outline: 0;
  /* box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25); */
}

.input_number_box{
  background-color: #f6f6f6;
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.labels{
  border: none;
  background-color: transparent;
}

.phoneno_defaultno{
  background-color: #fff !important;
}

.btn-outline-primary{
  /* background-color: #0439DE !important; */

}

.image_input{
  z-index: 10000;
  background-color: red;
}

.submitbtn_control button{
  font-size: 14px;
}
</style>