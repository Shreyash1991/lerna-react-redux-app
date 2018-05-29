/*
{
    title : 'Welcome to React'
}

*/
import { INTRO_INIT } from '../actionCreators/introActionCreators';

const  introReducer = (state={},action) =>{
    switch (action.type){
        case INTRO_INIT: 
            const title = 'Welcome to React';
            const welcomeMessage = 'Welcome From Redux';
            return { ...state, title,welcomeMessage }
            break;
        default:
            return { ...state};
        
    }
}; 

export default introReducer;

