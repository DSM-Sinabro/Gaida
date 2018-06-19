import { CONTROL_SIDEMENU } from '../action/app';

const initialState = {
  isSideMenuOpen : 1
};

export default function reducer(state = initialState, action){
  switch(action.type)
  {
    case CONTROL_SIDEMENU:
      return {
        isSideMenuOpen : state.isSideMenuOpen ? 0 : 1
      }
    default : return state;
  }
}
