import axios from "axios";

const doeModule = {
  namespaced: true,
  state() {
    return {
      errorMessage: null,
      does: "",
      doe: "",
      token: "",  //store token from auth store file
    };
  },
  getters: {
    does(state) {
      return state.does;
    },
    doe(state) {
      return state.doe;
    },
    token(state) {
      return state.token;
    }
  },
  mutations: {
    // Get Token From auth.js store 
    updateTokenInDoeModule(state, token) {
      state.token = token;
      console.log('Token Value', state.token);
    },
    // Get All DOE Mutation
    getDoes(state, data) {
      state.does = data;
      
    },
    // Add New DOE Mutation
    addnewDoe(state, data) {
      state.does.unshift(data);
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
    // get All DOE Data
    async getDoes(content) {
      try {
        content.commit("clearErrorMessage"); // Clear any previous error messages
        let res = await axios.get("does");
        if (res) {
          content.commit("getDoes", res.data);
          console.log("It called!");
          // console.log("Response Data", res.data);
        // console.warn('Token value', token);

        }
      } catch (error) {
        // content.commit("setErrorMessage", error.response.data.message);
        console.warn('Token value', content.rootState.auth.token);
      }
      // console.log("does");
    },
    // Add New DOE
    async storeDoes(content, data) {
      try {
        content.commit("clearErrorMessage");
        let res = await axios.post("does", data);
        if (res) {
          content.commit("addnewDoe", res.data);
          let res = await axios.get("does");

          content.commit("getDoes", res.data);
            console.log("Response Data", res.data);
          console.warn('Token value', token);
          
        }
      } catch (error) {
        // content.commit("setErrorMessage", error.response.data.message);
      }
      // console.log("does");
    },
  },
};

export default doeModule;
