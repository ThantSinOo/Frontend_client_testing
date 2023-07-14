import axios from "axios";

const registerModule = {
  namespaced: true,
  state() {
    return {
      employees: "",
      showModal: false,
      errorMessage: null,
    };
  },
  gettters: {},
  mutations: {
    getEmployees(state, data) {
      state.employees = data;
    },
    addnewEmployee(state, data) {
      state.employees.unshift(data);
    },
    updateEmployeess(state, data) {
      state.employees.forEach((employee) => {
        if (employee.id == data.id) {
          employee = data;
        }
      });
    },
    // Response Data
    setresponseData(state, data) {
      state.showModal = data;
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
        let res = await axios.get("employees");
        if (res) {
          content.commit("getEmployees", res.data);
        }
      } catch (error) {
        content.commit("setErrorMessage", error.response.data.message);
      }
      // console.log("does");
    },
    async getfilterEmployees(content, data) {
      try {
        content.commit("clearErrorMessage"); // Clear any previous error messages
        let res = await axios.get(`employee_infos?medical=${data}`);
        if (res) {
          content.commit("getEmployees", res.data);
        }
      } catch (error) {
        content.commit("setErrorMessage", error.response.data.message);
      }
      // console.log("does");
    },

    // Add New DOE
    async storeEmployees(content, data) {
      try {
        content.commit("clearErrorMessage");
        let res = await axios.post("employees", data);
        if (res.data.stauscode == 200) {
          content.commit("addnewEmployee", res.data);
          content.commit("setresponseData", true);
          console.log(res.data.stauscode);
        }
      } catch (error) {
        // content.commit("setErrorMessage", error.response.data);
        console.log("error");
      }
      // console.log("does");
    },
    // Update Worker Doe
    async updateEmployee(content, payload) {
      const { id, data } = payload;
      try {
        content.commit("clearErrorMessage"); // Clear any previous error messages
        let res = await axios.post(`employees/${id}?_method=patch`, data);
        if (res.data.status == "success") {
          content.commit("updateEmployeess", res.data);
        }
      } catch (error) {
        content.commit("setErrorMessage", error.data);
      }
      // console.log("does");
    },
    // Update Worker Status
    async updateEmployee(content, data) {
      try {
        content.commit("clearErrorMessage"); // Clear any previous error messages
        await axios.post("worker_result", data);
      } catch (error) {
        content.commit("setErrorMessage", error.data);
      }
      // console.log("does");
    },
  },
};

export default registerModule;
