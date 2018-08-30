export const SAVE_INFO = 'SAVE_INFO';
export const SAVE_ICOINFO = 'SAVE_ICOINFO';


export const saveInfo = (values) => ({
  type: SAVE_INFO,
  values
});


export const saveIcoInfo = (values) => ({
  type: SAVE_ICOINFO,
  values
});
