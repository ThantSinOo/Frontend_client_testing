import axios from "axios";

const infoModule = {
  namespaced: true,
  state() {
    return {
      employeesinfo: "",
      singleemployeesinfo: "",
      errorMessage: null,
    };
  },
  getters: {},
  mutations: {
    getEmployeesinfo(state, data) {
      state.employeesinfo = data;
    },
    getsingleEmployeesinfo(state, data) {
      state.singleemployeesinfo = data;
    },
    // Error
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    clearErrorMessage(state) {
      state.errorMessage = null;
    },
  },
  actions: {
    async getEmployees(content) {
      try {
        content.commit("clearErrorMessage"); // Clear any previous error messages
        let res = await axios.get("employee_infos");
        if (res) {
          //   console.log(res.data);
          content.commit("getEmployeesinfo", res.data);
        }
      } catch (error) {
        content.commit("setErrorMessage", error.response.data.message);
      }
      // console.log("does");
    },
    async getsingleEmployees(content, data) {
      try {
        content.commit("clearErrorMessage"); // Clear any previous error messages
        let res = await axios.get(`employee_infos/${data}`);
        if (res) {
          //   console.log(res.data);
          content.commit("getsingleEmployeesinfo", res.data);
        }
      } catch (error) {
        content.commit("setErrorMessage", error.response.data.message);
      }
      // console.log("does");
    },
  },
};

export default infoModule;
