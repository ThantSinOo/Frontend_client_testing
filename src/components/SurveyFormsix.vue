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
                    <input type="radio" class="btn-check" name="q61" id="q61Yes" autocomplete="off" value="true" v-model="surveyFormData.q61" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q61Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q61" id="q61No" autocomplete="off" value="false" v-model="surveyFormData.q61" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q61No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q61Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q61Note" class="q61Note_input input_text_box" v-model="surveyFormData.q61Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q62" id="q62Yes" autocomplete="off" value="true" v-model="surveyFormData.q62" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q62Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q62" id="q62No" autocomplete="off" value="false" v-model="surveyFormData.q62" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q62No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q62Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q62Note" class="q62Note_input input_text_box" v-model="surveyFormData.q62Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q63" id="q63Yes" autocomplete="off" value="true" v-model="surveyFormData.q63" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q63Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q63" id="q63No" autocomplete="off" value="false" v-model="surveyFormData.q63" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q63No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q63Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q63Note" class="q63Note_input input_text_box" v-model="surveyFormData.q63Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q64" id="q64Yes" autocomplete="off" value="true" v-model="surveyFormData.q64" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q64Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q64" id="q64No" autocomplete="off" value="false" v-model="surveyFormData.q64" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q64No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q64Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q64Note" class="q64Note_input input_text_box" v-model="surveyFormData.q64Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q65" id="q65Yes" autocomplete="off" value="true" v-model="surveyFormData.q65" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q65Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q65" id="q65No" autocomplete="off" value="false" v-model="surveyFormData.q65" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q65No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q65Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q65Note" class="q65Note_input input_text_box" v-model="surveyFormData.q65Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q66" id="q66Yes" autocomplete="off" value="true" v-model="surveyFormData.q66" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q66Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q66" id="q66No" autocomplete="off" value="false" v-model="surveyFormData.q66" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q66No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q66Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q66Note" class="q66Note_input input_text_box" v-model="surveyFormData.q66Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q67" id="q67Yes" autocomplete="off" value="true" v-model="surveyFormData.q67" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q67Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q67" id="q67No" autocomplete="off" value="false" v-model="surveyFormData.q67" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q67No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q67Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q67Note" class="q67Note_input input_text_box" v-model="surveyFormData.q67Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q68" id="q68Yes" autocomplete="off" value="true" v-model="surveyFormData.q68" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q68Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q68" id="q68No" autocomplete="off" value="false" v-model="surveyFormData.q68" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q68No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q68Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q68Note" class="q68Note_input input_text_box" v-model="surveyFormData.q68Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q69" id="q69Yes" autocomplete="off" value="true" v-model="surveyFormData.q69" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q69Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q69" id="q69No" autocomplete="off" value="false" v-model="surveyFormData.q69" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q69No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q69Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q69Note" class="q69Note_input input_text_box" v-model="surveyFormData.q69Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q610" id="q610Yes" autocomplete="off" value="true" v-model="surveyFormData.q610" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q610Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q610" id="q610No" autocomplete="off" value="false" v-model="surveyFormData.q610" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q610No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q610Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q610Note" class="q610Note_input input_text_box" v-model="surveyFormData.q610Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q611" id="q611Yes" autocomplete="off" value="true" v-model="surveyFormData.q611" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q611Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q611" id="q611No" autocomplete="off" value="false" v-model="surveyFormData.q611" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q611No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q611Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q611Note" class="q611Note_input input_text_box" v-model="surveyFormData.q611Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q612" id="q612Yes" autocomplete="off" value="true" v-model="surveyFormData.q612" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q612Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q612" id="q612No" autocomplete="off" value="false" v-model="surveyFormData.q612" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q612No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q612Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q612Note" class="q612Note_input input_text_box" v-model="surveyFormData.q612Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                  <!-- Question 13 -->
                  <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q613" id="q613Yes" autocomplete="off" value="true" v-model="surveyFormData.q613" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q613Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q613" id="q613No" autocomplete="off" value="false" v-model="surveyFormData.q613" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q613No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q613Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q613Note" class="q613Note_input input_text_box" v-model="surveyFormData.q613Note" :disabled="!isChecked"></textarea>
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
                q61: '',
                q62: '',
                q63: '',
                q64: '',
                q65: '',
                q66: '',
                q67: '',
                q68: '',
                q69: '',
                q610: '',
                q611: '',
                q612: '',
                q613: '',
                q61Note: '',
                q62Note: '',
                q63Note: '',
                q64Note: '',
                q65Note: '',
                q66Note: '',
                q67Note: '',
                q68Note: '',
                q69Note: '',
                q610Note: '',
                q611Note: '',
                q612Note: '',
                q613Note: ''

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