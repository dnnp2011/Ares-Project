import { configuredKYC } from '../config';

//import actions from actions families
import { SAVE_INFO } from '../actions/KYC.actions';
import { SAVE_ICOINFO } from '../actions/KYC.actions';
import { connect } from 'react-redux';



const initialState = {
  first : 'Redux initial State',
  last : 'Redux initial State',
  ico: '',
  amount:''
}

const portalData = JSON.parse(sessionStorage.getItem('portalData'));

const defaultKYC = portalData && portalData.kyc ? portalData.kyc : configuredKYC;


const KYCReducer = (state = defaultKYC, action) => {
    switch (action.type) {
      case "SAVE_INFO":
        return {...state,
            first : action.values.first,
            last : action.values.last,
            email: action.values.email,
            phoneNo: action.values.phoneNo
          }

          case "SAVE_ICOINFO":
            return {...state,
                ico : action.values.ico
              }
      default:
        return state;
  }
}



export default KYCReducer;
