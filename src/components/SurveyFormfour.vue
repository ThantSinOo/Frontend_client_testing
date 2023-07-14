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
                    <input type="radio" class="btn-check" name="q41" id="q41Yes" autocomplete="off" value="true" v-model="surveyFormData.q41" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q41Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q41" id="q41No" autocomplete="off" value="false" v-model="surveyFormData.q41" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q41No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q41Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q41Note" class="q41Note_input input_text_box" v-model="surveyFormData.q41Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 2 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q42" id="q42Yes" autocomplete="off" value="true" v-model="surveyFormData.q42" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q42Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q42" id="q42No" autocomplete="off" value="false" v-model="surveyFormData.q42" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q42No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q42Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q42Note" class="q42Note_input input_text_box" v-model="surveyFormData.q42Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 3 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q43" id="q43Yes" autocomplete="off" value="true" v-model="surveyFormData.q43" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q43Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q43" id="q43No" autocomplete="off" value="false" v-model="surveyFormData.q43" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q43No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q43Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q43Note" class="q43Note_input input_text_box" v-model="surveyFormData.q43Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 4 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q44" id="q44Yes" autocomplete="off" value="true" v-model="surveyFormData.q44" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q44Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q44" id="q44No" autocomplete="off" value="false" v-model="surveyFormData.q44" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q44No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q44Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q44Note" class="q44Note_input input_text_box" v-model="surveyFormData.q44Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 5 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q45" id="q45Yes" autocomplete="off" value="true" v-model="surveyFormData.q45" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q45Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q45" id="q45No" autocomplete="off" value="false" v-model="surveyFormData.q45" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q45No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q45Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q45Note" class="q45Note_input input_text_box" v-model="surveyFormData.q45Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 6 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q46" id="q46Yes" autocomplete="off" value="true" v-model="surveyFormData.q46" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q46Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q46" id="q46No" autocomplete="off" value="false" v-model="surveyFormData.q46" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q46No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q46Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q46Note" class="q46Note_input input_text_box" v-model="surveyFormData.q46Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 7 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q47" id="q47Yes" autocomplete="off" value="true" v-model="surveyFormData.q47" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q47Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q47" id="q47No" autocomplete="off" value="false" v-model="surveyFormData.q47" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q47No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q47Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q47Note" class="q47Note_input input_text_box" v-model="surveyFormData.q47Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 8 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q48" id="q48Yes" autocomplete="off" value="true" v-model="surveyFormData.q48" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q48Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q48" id="q48No" autocomplete="off" value="false" v-model="surveyFormData.q48" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q48No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q48Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q48Note" class="q48Note_input input_text_box" v-model="surveyFormData.q48Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 9 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q49" id="q49Yes" autocomplete="off" value="true" v-model="surveyFormData.q49" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q49Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q49" id="q49No" autocomplete="off" value="false" v-model="surveyFormData.q49" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q49No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q49Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q49Note" class="q49Note_input input_text_box" v-model="surveyFormData.q49Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 10 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q410" id="q410Yes" autocomplete="off" value="true" v-model="surveyFormData.q410" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q410Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q410" id="q410No" autocomplete="off" value="false" v-model="surveyFormData.q410" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q410No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q410Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q410Note" class="q410Note_input input_text_box" v-model="surveyFormData.q410Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 11 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q411" id="q411Yes" autocomplete="off" value="true" v-model="surveyFormData.q411" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q411Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q411" id="q411No" autocomplete="off" value="false" v-model="surveyFormData.q411" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q411No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q411Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q411Note" class="q411Note_input input_text_box" v-model="surveyFormData.q411Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 12 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q412" id="q412Yes" autocomplete="off" value="true" v-model="surveyFormData.q412" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q412Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q412" id="q412No" autocomplete="off" value="false" v-model="surveyFormData.q412" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q412No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q412Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q412Note" class="q412Note_input input_text_box" v-model="surveyFormData.q412Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 13 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q413" id="q413Yes" autocomplete="off" value="true" v-model="surveyFormData.q413" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q413Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q413" id="q413No" autocomplete="off" value="false" v-model="surveyFormData.q413" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q413No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q413Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q413Note" class="q413Note_input input_text_box" v-model="surveyFormData.q413Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 14 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q414" id="q414Yes" autocomplete="off" value="true" v-model="surveyFormData.q414" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q414Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q414" id="q414No" autocomplete="off" value="false" v-model="surveyFormData.q414" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q414No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q414Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q414Note" class="q414Note_input input_text_box" v-model="surveyFormData.q414Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 15 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q415" id="q415Yes" autocomplete="off" value="true" v-model="surveyFormData.q415" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q415Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q415" id="q415No" autocomplete="off" value="false" v-model="surveyFormData.q415" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q415No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q415Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q415Note" class="q415Note_input input_text_box" v-model="surveyFormData.q415Note" :disabled="!isChecked"></textarea>
                    </div>
                </div>
                 <!-- Question 16 -->
                 <div class="mb-4 ">
                    <div class="col-12 question_box_control mb-5">
                        <label class="col-12 form-label form_question mb-3">ကျင့်ဝတ်နဲ့အညီ လုပ်သားစုဆောင်းမှုတွင် သက်ဆိုင်ရာနယ်ကိုယ်စားလှယ်များမှ လုပ်သားစုဆောင်းမှု သတ်မှတ်ချက်နှင့်အညီ ရှိ-မရှိ ။</label>
                        <div class="col-12 btn-group answer_box" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="q416" id="q416Yes" autocomplete="off" value="true" v-model="surveyFormData.q416" :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q416Yes">မှန် </label>

                    <input type="radio" class="btn-check" name="q416" id="q416No" autocomplete="off" value="false" v-model="surveyFormData.q416" checked :disabled="!isChecked" />
                    <label class="btn btn-outline-primary small-label" for="q416No">မှား</label>
                        </div>
                    </div>
                    <div class="note_container">
                        <label for="q416Note" class="note_title">မှတ်ချက်</label>
                        <textarea type="text" rows="3" id="q416Note" class="q416Note_input input_text_box" v-model="surveyFormData.q416Note" :disabled="!isChecked"></textarea>
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
                q41: '',
                q42: '',
                q43: '',
                q44: '',
                q45: '',
                q46: '',
                q47: '',
                q48: '',
                q49: '',
                q410: '',
                q411: '',
                q412: '',
                q413: '',
                q414: '',
                q415: '',
                q416: '',
                
                q41Note: '',
                q42Note: '',
                q43Note: '',
                q44Note: '',
                q45Note: '',
                q46Note: '',
                q47Note: '',
                q48Note: '',
                q49Note: '',
                q410Note: '',
                q411Note: '',
                q412Note: '',
                q413Note: '',
                q414Note: '',
                q415Note: '',
                q416Note: ''

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