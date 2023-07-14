// import axios from '../config/axios';
import axios from "axios";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    warning: null,
    id: null,
  },
  getters: {},
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      // console.log("TOKEN", token);
    },
    SET_ID(state, id) {
      state.id = id;
    },
    SET_WARNING(state, message) {
      state.warning = message;
      console.log("Warning", state.warning);
    },
  },
  actions: {
    async login({ commit, dispatch }, credentials) {
      try {
        let response = await axios.post("/login", credentials);
        let token = response.data.authorisation.token;
        let role = response.data.user.role;
        let id = response.data.user.id;
        localStorage.setItem("token", token);
        localStorage.setItem("userid",id);
        dispatch("attempt", token);
        if (role === "admin") {
          router.push("/doe");
        } else if (role === "employee") {
          commit("SET_ID", id);
          commit("SET_TOKEN", token);
          router.push("/checkprimaryinfo");
          console.log("User Id is =", id);
          console.log("User Token is =", token);
        }
        console.log("Response", response.data, response.data.user.role);
      } catch (error) {
        console.log(error);
        commit(
          "SET_WARNING",
          "The Information You Have Entered is Incorrect, Please Try Again"
        );
        console.log("Error Response:", error.response);
      }
    },

    async attempt({ commit }, token) {
      commit("SET_TOKEN", token);
    },
  },
};
