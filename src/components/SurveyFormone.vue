<template>
    <div class="container form_control">
        <div class="text-center">
            <div class="col-12 mb-5 notice_and_arrangement">
                <h5 class="pagetitle text-center">မူဝါဒအရ ကိုယ်စားလှယ်များ၏ လုပ်ငန်းစဉ်များကို စောင့်ကြပ်ခြင်း ပုံစံမေးခွန်းများ</h5>

                <!-- Reminder  -->
                <div class="reminder_control mt-5 text-justify">
                    <p class="text-justify">သင်၏ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို
                    <span class="company_name">INTERNATIONAL FOCUS GENERAL SERVICES CO.,LTD</span> မှ လုပ်ငန်း လိုအပ်ချက်အရ သိမ်းဆည်းထားမည်ကို လက်ခံသဘောတူပါသလား။</p>
                </div>
                <!-- User Agreement  -->
                <div class="col-12 agrement_control">
                    <label for="agrement" class="col-8 aggrement_text">လက်ခံသဘောတူပါသည်။</label>
                    <input type="checkbox" class="col-3 aggrement_checkbox" v-model="isChecked" />
                </div>
            </div>
            <form @submit.prevent="submitSurvey" method="post">
                <!-- Question 1 -->
                <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q11" id="q11Yes" autocomplete="off" value="1" v-model="surveyFormData.q11" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q11Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q11" id="q11No" autocomplete="off" value="0" v-model="surveyFormData.q11" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q11No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q11Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q11Note" class="q11Note_input input_text_box" v-model="surveyFormData.q11Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q12" id="q12Yes" autocomplete="off" value="1" v-model="surveyFormData.q12" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q12Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q12" id="q12No" autocomplete="off" value="0" v-model="surveyFormData.q12" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q12No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q12Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q12Note" class="q12Note_input input_text_box" v-model="surveyFormData.q12Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q13" id="q13Yes" autocomplete="off" value="1" v-model="surveyFormData.q13" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q13Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q13" id="q13No" autocomplete="off" value="0" v-model="surveyFormData.q13" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q13No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q13Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q13Note" class="q13Note_input input_text_box" v-model="surveyFormData.q13Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q14" id="q14Yes" autocomplete="off" value="1" v-model="surveyFormData.q14" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q14Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q14" id="q14No" autocomplete="off" value="0" v-model="surveyFormData.q14" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q14No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q14Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q14Note" class="q14Note_input input_text_box" v-model="surveyFormData.q14Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q15" id="q15Yes" autocomplete="off" value="1" v-model="surveyFormData.q15" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q15Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q15" id="q15No" autocomplete="off" value="0" v-model="surveyFormData.q15" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q15No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q15Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q15Note" class="q15Note_input input_text_box" v-model="surveyFormData.q15Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q16" id="q16Yes" autocomplete="off" value="1" v-model="surveyFormData.q16" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q16Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q16" id="q16No" autocomplete="off" value="0" v-model="surveyFormData.q16" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q16No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q16Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q16Note" class="q16Note_input input_text_box" v-model="surveyFormData.q16Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q17" id="q17Yes" autocomplete="off" value="1" v-model="surveyFormData.q17" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q17Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q17" id="q17No" autocomplete="off" value="0" v-model="surveyFormData.q17" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q17No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q17Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q17Note" class="q17Note_input input_text_box" v-model="surveyFormData.q17Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q18" id="q18Yes" autocomplete="off" value="1" v-model="surveyFormData.q18" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q18Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q18" id="q18No" autocomplete="off" value="0" v-model="surveyFormData.q18" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q18No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q18Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q18Note" class="q18Note_input input_text_box" v-model="surveyFormData.q18Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q19" id="q19Yes" autocomplete="off" value="1" v-model="surveyFormData.q19" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q19Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q19" id="q19No" autocomplete="off" value="0" v-model="surveyFormData.q19" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q19No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q19Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q19Note" class="q19Note_input input_text_box" v-model="surveyFormData.q19Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                
                <!-- Submit and Cancel Btn Section  -->
                <div class="col-12 mt-5 d-flex text-center submitbtn_control">
                    <div class="col-5   cancelbtn">
                    <button class=" btn btn-outline-danger" @click="clearAll">ပယ်ဖျက်မည်</button>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-5   submitbtn">
                    <button type="submit" class="btn btn-outline-primary" @click.prevent="submitSurveyForm">ရှေ့ဆက်မည်</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
    export default{
        setup(){
            let isChecked = ref(false);
            let submitSurvey = ref({});
            const surveyFormData = ref({
                q11: '',
                q12: '',
                q13: '',
                q14: '',
                q15: '',
                q16: '',
                q17: '',
                q18: '',
                q19: '',
                q11Note: '',
                q12Note: '',
                q13Note: '',
                q14Note: '',
                q15Note: '',
                q16Note: '',
                q17Note: '',
                q18Note: '',
                q19Note: ''

            });

            let submitSurveyForm = async function(){
                let userid = localStorage.getItem('userid');
                let data = surveyFormData.value;
                submitSurvey.value = {
                    user_id:userid,
                    answer_1:data.q11,
                    answer_1_note:data.q11Note,
                    answer_2:data.q12,
                    answer_2_note:data.q12Note,
                    answer_3:data.q13,
                    answer_3_note:data.q13Note,
                    answer_4:data.q14,
                    answer_4_note:data.q14Note,
                    answer_5:data.q15,
                    answer_5_note:data.q15Note,
                    answer_6:data.q16,
                    answer_6_note:data.q16Note,
                    answer_7:data.q17,
                    answer_7_note:data.q17Note,
                    answer_8:data.q18,
                    answer_8_note:data.q18Note,
                    answer_9:data.q19,
                    answer_9_note:data.q19Note,
                }

                console.log('1 Survey One Answer =>', submitSurvey.value);
                console.log('2 Survey One Answer Type =>', typeof(submitSurvey.value));
                try{
                    const response = await axios.post('survey/first', submitSurvey.value);
                    if(response){
                        console.log('Response =>', response.data);
                    }
                }catch (err){
                    console.log("Error =>", err.message);
                }

            };
            return{
                isChecked,
                submitSurvey,
                surveyFormData,
                submitSurveyForm
            }
        }
    }
</script>

<style scoped>

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

    .pagetitle{
        line-height: 2.2rem;
    }
    .aggrement_text{
        font-size: 15px;
    }
    .input_text_box{
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


    .input_text_box:focus{
        color: #212529;
        background-color: #fff;
        border: 2px solid #0439DE;
        outline: 0;
    }

    .answer_box{
        font-size: 10px;
    }

    .small-label {
    font-size: 12px;
  }

    .form_question{
        font-size: 14px;
        text-align: justify;
        line-height: 20pt;
    }

    .note_container{
        position: relative;
    }
    
    label.note_title{
        position: absolute;
        top: -30%;
        left: 0;

        font-size: 13px;
    }

    .note_container textarea{
        border-radius: 15px;
    }
    
</style>