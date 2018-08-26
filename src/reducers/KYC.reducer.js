//import actions from actions families
import { SAVE_INFO } from '../actions/KYC.actions';
import { connect } from 'react-redux';



const initialState = {
  first : 'Redux initial State',
  last : 'Redux initial State',
  ico: '',
  amount:''
}

const portalData = JSON.parse(sessionStorage.getItem('portalData'));

const defaultKYC = portalData && portalData.kyc ? portalData.kyc : initialState;


const KYCReducer = (state = defaultKYC, action) => {
    switch (action.type) {
      case "SAVE_INFO":
        return {...state,
            first : action.values.first,
            last : action.values.last
          }

      default:
        return state;
  }
}



export default KYCReducer;
