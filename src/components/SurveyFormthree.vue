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
                    <input type="radio" class="btn-check" name="q31" id="q31Yes" autocomplete="off" value="true" v-model="surveyFormData.q31" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q31Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q31" id="q31No" autocomplete="off" value="false" v-model="surveyFormData.q31" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q31No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q31Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q31Note" class="q31Note_input input_text_box" v-model="surveyFormData.q31Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q32" id="q32Yes" autocomplete="off" value="true" v-model="surveyFormData.q32" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q32Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q32" id="q32No" autocomplete="off" value="false" v-model="surveyFormData.q32" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q32No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q32Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q32Note" class="q32Note_input input_text_box" v-model="surveyFormData.q32Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q33" id="q33Yes" autocomplete="off" value="true" v-model="surveyFormData.q33" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q33Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q33" id="q33No" autocomplete="off" value="false" v-model="surveyFormData.q33" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q33No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q33Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q33Note" class="q33Note_input input_text_box" v-model="surveyFormData.q33Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q34" id="q34Yes" autocomplete="off" value="true" v-model="surveyFormData.q34" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q34Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q34" id="q34No" autocomplete="off" value="false" v-model="surveyFormData.q34" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q34No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q34Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q34Note" class="q34Note_input input_text_box" v-model="surveyFormData.q34Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q35" id="q35Yes" autocomplete="off" value="true" v-model="surveyFormData.q35" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q35Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q35" id="q35No" autocomplete="off" value="false" v-model="surveyFormData.q35" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q35No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q35Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q35Note" class="q35Note_input input_text_box" v-model="surveyFormData.q35Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q36" id="q36Yes" autocomplete="off" value="true" v-model="surveyFormData.q36" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q36Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q36" id="q36No" autocomplete="off" value="false" v-model="surveyFormData.q36" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q36No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q36Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q36Note" class="q36Note_input input_text_box" v-model="surveyFormData.q36Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q37" id="q37Yes" autocomplete="off" value="true" v-model="surveyFormData.q37" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q37Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q37" id="q37No" autocomplete="off" value="false" v-model="surveyFormData.q37" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q37No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q37Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q37Note" class="q37Note_input input_text_box" v-model="surveyFormData.q37Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q38" id="q38Yes" autocomplete="off" value="true" v-model="surveyFormData.q38" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q38Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q38" id="q38No" autocomplete="off" value="false" v-model="surveyFormData.q38" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q38No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q38Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q38Note" class="q38Note_input input_text_box" v-model="surveyFormData.q38Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q39" id="q39Yes" autocomplete="off" value="true" v-model="surveyFormData.q39" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q39Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q39" id="q39No" autocomplete="off" value="false" v-model="surveyFormData.q39" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q39No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q39Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q39Note" class="q39Note_input input_text_box" v-model="surveyFormData.q39Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q310" id="q310Yes" autocomplete="off" value="true" v-model="surveyFormData.q310" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q310Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q310" id="q310No" autocomplete="off" value="false" v-model="surveyFormData.q310" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q310No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q310Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q310Note" class="q310Note_input input_text_box" v-model="surveyFormData.q310Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q311" id="q311Yes" autocomplete="off" value="true" v-model="surveyFormData.q311" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q311Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q311" id="q311No" autocomplete="off" value="false" v-model="surveyFormData.q311" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q311No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q311Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q311Note" class="q311Note_input input_text_box" v-model="surveyFormData.q311Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q312" id="q312Yes" autocomplete="off" value="true" v-model="surveyFormData.q312" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q312Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q312" id="q312No" autocomplete="off" value="false" v-model="surveyFormData.q312" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q312No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q312Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q312Note" class="q312Note_input input_text_box" v-model="surveyFormData.q312Note" :disabled="!isChecked"></textarea>
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
                q31: '',
                q32: '',
                q33: '',
                q34: '',
                q35: '',
                q36: '',
                q37: '',
                q38: '',
                q39: '',
                q310: '',
                q311: '',
                q312: '',
                q31Note: '',
                q32Note: '',
                q33Note: '',
                q34Note: '',
                q35Note: '',
                q36Note: '',
                q37Note: '',
                q38Note: '',
                q39Note: '',
                q310Note: '',
                q311Note: '',
                q312Note: ''

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