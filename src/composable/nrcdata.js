import { getNrcStates, getNrcTownshipsByStateId, getNrcTypes } from "mm-nrc";
import { ref } from "vue";

let getAllStates = ref([]);
let getAlltownships = ref([]);
let getAlltypes = ref([]);

let nrcdata = () => {
  getAllStates.value = getNrcStates();
  getAlltypes.value = getNrcTypes();
  return { getAllStates, getStateid, getAlltypes, getAlltownships };
};

function getStateid(id) {
  return (getAlltownships.value = getNrcTownshipsByStateId(id));

  // console.log(getAlltownships);

  // console.log(id);
}

export default nrcdata;
