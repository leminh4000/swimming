import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";
import {navigate} from '../navigationRef'

const swimReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'setLevel':
            return {...state, errorMessage: '', level: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        default :
            return state;
    }
};

const tryLocalGetLevel = dispatch => async () => {
    //await  AsyncStorage.removeItem('level');
    const level = await AsyncStorage.getItem('level');
    if (level) {
        dispatch({type: 'setLevel', payload: level});
        navigate('mainFlow');
    } else {
        navigate('questionFlow');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}

const setLevel = (dispatch)  => async ({level}) => {
    console.log("level",level);
    try {
        const response = await swimApi.post('/userLevels', {
            level:level,
        });
        console.log("response.data", response.data);
        console.log("response.data.level", response.data.level);
        await  AsyncStorage.setItem('level', `${response.data.level}`);

        dispatch({type: 'setLevel', data: response.data.level});

        navigate('mainFlow');
    } catch (err) {
        console.error("ERROR: ",err.message)
        dispatch({type: 'add_error', payload: 'Something went wrong set level'});
    }
}

export const {Provider, Context} = createDataContext(
    swimReducer,
    {setLevel,clearErrorMessage,tryLocalGetLevel},
    {token: null, errorMessage: ''}
);
