import { createStore } from "vuex";
import doeModule from "./doe/index";
import registerModule from "./register/index";
import infoModule from "./employeeinfo/index";
import auth from "./auth";
import cvform from "./cvform";

const store = createStore({
  modules: {
    doeModule: doeModule,
    registerModule: registerModule,
    infoModule: infoModule,
    auth,
    cvform,
  },
});

export default store;
