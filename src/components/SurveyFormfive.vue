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
                    <input type="radio" class="btn-check" name="q51" id="q51Yes" autocomplete="off" value="true" v-model="surveyFormData.q51" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q51Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q51" id="q51No" autocomplete="off" value="false" v-model="surveyFormData.q51" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q51No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q51Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q51Note" class="q51Note_input input_text_box" v-model="surveyFormData.q51Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q52" id="q52Yes" autocomplete="off" value="true" v-model="surveyFormData.q52" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q52Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q52" id="q52No" autocomplete="off" value="false" v-model="surveyFormData.q52" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q52No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q52Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q52Note" class="q52Note_input input_text_box" v-model="surveyFormData.q52Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q53" id="q53Yes" autocomplete="off" value="true" v-model="surveyFormData.q53" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q53Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q53" id="q53No" autocomplete="off" value="false" v-model="surveyFormData.q53" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q53No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q53Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q53Note" class="q53Note_input input_text_box" v-model="surveyFormData.q53Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q54" id="q54Yes" autocomplete="off" value="true" v-model="surveyFormData.q54" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q54Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q54" id="q54No" autocomplete="off" value="false" v-model="surveyFormData.q54" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q54No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q54Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q54Note" class="q54Note_input input_text_box" v-model="surveyFormData.q54Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q55" id="q55Yes" autocomplete="off" value="true" v-model="surveyFormData.q55" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q55Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q55" id="q55No" autocomplete="off" value="false" v-model="surveyFormData.q55" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q55No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q55Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q55Note" class="q55Note_input input_text_box" v-model="surveyFormData.q55Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q56" id="q56Yes" autocomplete="off" value="true" v-model="surveyFormData.q56" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q56Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q56" id="q56No" autocomplete="off" value="false" v-model="surveyFormData.q56" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q56No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q56Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q56Note" class="q56Note_input input_text_box" v-model="surveyFormData.q56Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q57" id="q57Yes" autocomplete="off" value="true" v-model="surveyFormData.q57" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q57Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q57" id="q57No" autocomplete="off" value="false" v-model="surveyFormData.q57" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q57No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q57Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q57Note" class="q57Note_input input_text_box" v-model="surveyFormData.q57Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q58" id="q58Yes" autocomplete="off" value="true" v-model="surveyFormData.q58" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q58Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q58" id="q58No" autocomplete="off" value="false" v-model="surveyFormData.q58" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q58No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q58Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q58Note" class="q58Note_input input_text_box" v-model="surveyFormData.q58Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q59" id="q59Yes" autocomplete="off" value="true" v-model="surveyFormData.q59" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q59Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q59" id="q59No" autocomplete="off" value="false" v-model="surveyFormData.q59" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q59No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q59Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q59Note" class="q59Note_input input_text_box" v-model="surveyFormData.q59Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q510" id="q510Yes" autocomplete="off" value="true" v-model="surveyFormData.q510" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q510Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q510" id="q510No" autocomplete="off" value="false" v-model="surveyFormData.q510" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q510No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q510Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q510Note" class="q510Note_input input_text_box" v-model="surveyFormData.q510Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q511" id="q511Yes" autocomplete="off" value="true" v-model="surveyFormData.q511" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q511Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q511" id="q511No" autocomplete="off" value="false" v-model="surveyFormData.q511" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q511No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q511Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q511Note" class="q511Note_input input_text_box" v-model="surveyFormData.q511Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q512" id="q512Yes" autocomplete="off" value="true" v-model="surveyFormData.q512" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q512Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q512" id="q512No" autocomplete="off" value="false" v-model="surveyFormData.q512" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q512No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q512Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q512Note" class="q512Note_input input_text_box" v-model="surveyFormData.q512Note" :disabled="!isChecked"></textarea>
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
import { ref } from 'vue';
    export default{
        setup(){
            let isChecked = ref(false);
            const surveyFormData = ref({
                q51: '',
                q52: '',
                q53: '',
                q54: '',
                q55: '',
                q56: '',
                q57: '',
                q58: '',
                q59: '',
                q510: '',
                q511: '',
                q512: '',
                q51Note: '',
                q52Note: '',
                q53Note: '',
                q54Note: '',
                q55Note: '',
                q56Note: '',
                q57Note: '',
                q58Note: '',
                q59Note: '',
                q510Note: '',
                q511Note: '',
                q512Note: ''

            });

            let submitSurveyForm = async function(){
                let userid = localStorage.getItem('userid');
                let data = surveyFormData.value;
                console.log('User Id =>', userid)
                console.log("Survey Form Result =>", data);
                console.log(" Type of Survey Form Result =>", typeof(data));
            };
            return{
                isChecked,
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