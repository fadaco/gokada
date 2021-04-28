import {FETCH_DATA} from '../ActionTypes';

const INIT_VALUES = {
    data: []
}

const DataReducer = (state = INIT_VALUES, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default DataReducer;