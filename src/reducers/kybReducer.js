const iniTisalState = {kyb_coi: 'Pending',
kyb_moa: 'Pending',
kyb_aoa: 'Pending',
kyb_sRegister: 'Pending',
kyb_scs: 'Pending',
kyb_ccre: 'Pending',};

export const kybReducer = (state = iniTisalState, action) => {
  switch (action.type) {
    case "CREATE_KYB":
        // console.log(action.payload);
      return { ...state, state: action.payload };

    case "SET_pending":
      //   console.log("log from Reducer");
        console.log(action.payload);
      return { ...state, complete: action.payload };
    default:
      return state;
  }
};
