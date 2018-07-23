//import actions from actions families
import { SAVE_INFO } from '../actions/KYC.actions';


const initialState = {
  ico: 'None',
  amount:'0'
}
const KYCReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_INFO":
      let newState = {...state};
      newState.ico = action.ico;
      newState.amount = action.amount;
      return newState;

    default:
      return state;

  }
}

export default KYCReducer;
