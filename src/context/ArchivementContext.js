import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";
import {navigate} from '../navigationRef'

const archivementReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_archivements':
            return action.payload;
        default :
            return state;
    }
};

const fetchArchivements = (dispatch) => async () => {
    const response = await swimApi.get('/archivements2?category=speed', {});
    const response2 = await swimApi.get('/archivements2?category=distance', {});
    console.log("response.data", response.data);
    dispatch({
        type   : 'fetch_archivements',
        payload: [...response.data,...response2.data],
    });

    // navigate('mainFlow');
}

export const {
    Provider,
    Context
} = createDataContext(archivementReducer, {
    fetchArchivements,
}, []);
