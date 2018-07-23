export const SAVE_INFO = 'SAVE_INFO';


export const saveInfo = (ico, amount) => ({
  type: SAVE_INFO,
  ico ,
  amount
});
