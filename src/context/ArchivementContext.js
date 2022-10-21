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
    const results = [...response.data,...response2.data];
    // console.log("results", results);
    for (const archive of results) {
        if (archive.category === "speed") {
            console.log('archive.value * 1000', archive.value * 1000);
            archive.value = new Date(archive.value * 1000).toISOString().substr(14, 5);
        } else if (archive.category === "distance"){
            archive.value += " km";
        }
    }
    console.log("results", results);
    dispatch({
        type   : 'fetch_archivements',
        payload:results,
    });



    // navigate('mainFlow');
}

export const {
    Provider,
    Context
} = createDataContext(archivementReducer, {
    fetchArchivements,
}, []);
