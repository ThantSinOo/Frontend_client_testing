

<template>
    <div class="container form_control">
        <div class="text-center">
            <div class="col-12 mb-5 notice_and_aggrement">
                <h3 class="pagetitle text-center">ကိုယ်ရေးအချက်အလက်များ စစ်ဆေးအတည်ပြုခြင်း</h3>

                <!-- Reminder  -->
                    <div class="reminder_control mt-5 text-justify">
                        <p class="text-justify">အောက်ဖော်ပြပါ ကိုယ်ရေးကိုယ်တာအချက်အလက်များ  မှန်ကန်ခြင်းရှိမရှိ၊အချိန်နှင့်တပြေးညီဖြစ်မဖြစ် စစ်ဆေးအတည်ပြုပါ။</p>
                    </div>
            </div>

            <!-- Form  -->
            <form @submit.prevent="submit">
                <!-- Name Section  -->
                <div class="name text-start">
                    <label for="name" class="form-label text-start">အမည်</label>
                    <p class="form-control name_value"> {{ name_mm }} </p>
                </div>
                <!-- Date of Birth Section  -->
                <div class="dateofbirth text-start">
                    <label for="dob" class="form-label">မွေးသက္ကရာဇ် (ရက် / လ / ခုနှစ်)</label>
                    <p class="form-control dob_value"> {{ dob }}</p>
                </div>
                <!-- NRC Number Section  -->
                <div class="nrc_number text-start">
                    <label for="nrcno" class="form-label">နိုင်ငံသားစီစစ်ရေးကဒ်ပြားအမှတ်</label>
                    <p class="form-control nrcno_value"> {{ nrc }}</p>
                </div>
                <!-- Male of Female Sectio  -->
                <div class="gender text-start">
                    <label for="gender" class="form-label">ကျား / မ</label>
                    <p class="form-control gender_value">{{gender}}</p>
                </div>
                <!-- Father Name Section  -->
                <div class="fathername text-start">
                    <label for="fathername" class="form-label">အဘအမည်</label>
                    <p class="form-control fathername_value"> {{ father_name_mm }}</p>
                </div>
                 <!-- Mother Name Section  -->
                 <div class="mothername text-start">
                    <label for="mothername" class="form-label">အမိအမည်</label>
                    <p class="form-control mothername_value"> {{ mother_name_mm }}</p>
                </div>
                <!-- Warning popup -->
                <div v-if="isPopupVisible">
                  <div  class="popup row ">
                    <div class="col-12">
                      <p class="col-10 text-center ms-5 p-3">မှားယွင်းနေသော ကိုယ်ရေးကိုယ်တာ အချက်အလက်များအား ပြန်လည်ပြင်ဆင်ရန် တာဝန်ရှိသူအား အကြောင်းကြားပါ။</p>
                    </div>
                    <div class="col-12 ">
                       <button class="col-6 text-center btn bg-info" @click="hidePopup">OK</button>
                    </div>
                  </div>
                </div>
                <!-- Submit and Cancel Btn Section  -->
                <div class="col-12 d-flex mt-5 text-center submitbtn_control">
                  <div class="col-5  cancelbtn" @click="contact_staff">
                    <button class=" btn btn-outline-danger">မမှန်ကန်ပါ</button>
                  </div>
                  <div class="col-1"></div>
                  <div class="col-5  submitbtn">
                    <button type="submit" class="btn btn-outline-primary" @click="nextPage">မှန်ကန်ပါသည်</button>
                  </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';

export default{
  setup(){
    const store = useStore();
    const router = useRouter();
    let dob = ref('');
    let gender = ref('');
    let father_name_mm = ref('');
    let name_mm = ref('');
    let mother_name_mm = ref('');
    let nrc = ref('');
    const isPopupVisible = ref(false);

    let userid = store.state.auth.id;
    let usertoken = store.state.auth.token;
      
      const showPopup = () => {
        isPopupVisible.value = true;
        console.log("Show Popup Work");
      };

      const hidePopup = () => {
        isPopupVisible.value = false;
        console.log('Hide is also working');
      };

      const contact_staff = () => {
        showPopup();
        console.log("Cancle Btn Works")
      };

    const getPrimaryInfos = async () =>{
        try {
            let response = await axios.get(`/employees/${userid}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${usertoken}`
                }
            });

            const { gender: userGender, dob: userDob, father_name_mm: userFatherNameMm, mother_name_mm: userMotherNameMm, name_mm: userNameMm, nrc: userNrc } = response.data.data;

            gender.value = userGender;
            dob.value = userDob;
            father_name_mm.value = userFatherNameMm;
            mother_name_mm.value = userMotherNameMm;
            name_mm.value = userNameMm;
            nrc.value = userNrc;

            
        } catch (error) {
            if (error.response) {
                // The request was made, but the server responded with an error status code
                console.log("Error status:", error.response.status);
                console.log("Error data:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.log("No response received:", error.request);
            } else {
                // An error occurred during the request setup
                console.log("Error:", error.message);
            }
        }
    };

    onMounted(getPrimaryInfos);

      const nextPage = () =>{
        router.push('/cvform');
      }
    

    return {
        nextPage,
        isPopupVisible,
        getPrimaryInfos,
        contact_staff,
        hidePopup,
        showPopup,
        dob,
        name_mm,
        nrc,
        father_name_mm,
        mother_name_mm,
        gender
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

  .pagetitle{
    color: #0439DE;
    text-align: center;
    

  }

  .reminder_control{
    text-align: justify;
    font-size: 14px;
    width: 300px;
  }

  .form_control{
    margin-top: 3%;
    width: 350px;
    padding: 3rem;
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

.popup{
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #f5f5f5;
    border: 2px solid orange;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 25%;
    /* background-color: rgba(0, 0, 0, 0.5); semi-transparent background */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }

</style>