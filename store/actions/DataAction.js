import {SERVER_REQUEST} from '../../shared/Backend';
import {ApiEndpoints} from '../../shared/Endpoint'
import {FETCH_DATA} from '../ActionTypes';

export const fetchData = () => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.GET_DATA, 'get');
   dispatch({type: FETCH_DATA, payload: response})
}