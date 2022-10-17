import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";
import {navigate} from '../navigationRef'

const swimReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            };
        case 'setLevel':
            return {
                ...state,
                errorMessage: '',
                level       : action.payload
            };
        case 'setGender':
            return {
                ...state,
                gender: action.payload,
            };
        case 'setHeight':
            return {
                ...state,
                height: action.payload,
            };
        case 'setWeight':
            return {
                ...state,
                weight: action.payload,
            };
        case 'clear_error_message':
            return {
                ...state,
                errorMessage: ''
            };
        default :
            return state;
    }
};
const setGender = dispatch => (gender) => {
    console.log('setGender', gender);
    dispatch({
        type   : 'setGender',
        payload: gender,
    });
}

const setHeight = dispatch => (height) => {
    console.log('setHeight', height);
    dispatch({
        type   : 'setHeight',
        payload: height,
    });
}
const setWeight = dispatch => (weight) => {
    console.log("setWeight",weight);
    dispatch({
        type   : 'setWeight',
        payload: weight,
    });
}


const tryLocalGetLevel = dispatch => async () => {
    // await AsyncStorage.removeItem('level');
    const level = await AsyncStorage.getItem('level');
    console.log("level", level);
    if (level) {
        dispatch({
            type   : 'setLevel',
            payload: level
        });
        navigate('mainFlow');
    } else {
        try {
            const response = await swimApi.get('/userLevels');
            console.log("response.data", response.data);
            console.log("response.data.length", response.data.length);
            if (response.data.length > 0) {
                await AsyncStorage.setItem('level', `${response.data.level}`);
                dispatch({
                    type: 'setLevel',
                    data: response.data.level
                });
                navigate('mainFlow');
            } else {
                navigate('questionFlow');
            }
        } catch (err) {
            console.error("ERROR: ", err.message)
            dispatch({
                type   : 'add_error',
                payload: 'Something went wrong set level'
            });
        }
    }


}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}

const setLevel = (dispatch) => async (level) => {
    console.log("level", level);
    try {
        const response = await swimApi.post('/userLevels', {
            level: level,
        });
        console.log("response.data", response.data);
        console.log("response.data.level", response.data.level);
        await AsyncStorage.setItem('level', `${response.data.level}`);

        dispatch({
            type: 'setLevel',
            data: response.data.level
        });

        // navigate('mainFlow');
    } catch (err) {
        console.error("ERROR: ", err.message)
        dispatch({
            type   : 'add_error',
            payload: 'Something went wrong set level'
        });
    }
}

export const {
    Provider,
    Context
} = createDataContext(
    swimReducer,
    {
        setLevel,
        clearErrorMessage,
        tryLocalGetLevel,
        setGender,
        setHeight,
        setWeight,
    },
    {
        token       : null,
        errorMessage: ''
    }
);
