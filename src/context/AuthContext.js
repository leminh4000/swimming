import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {...state, errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signout':
            return {...state, token: null, errorMessage: ''};
        default :
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate('ResolveQuest');
    } else {
        navigate('loginFlow');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}

const signup = dispatch => async ({email, password}) => {
        try {
            const response = await swimApi.post('/signup', {
                email,
                password
            });
            await  AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', data: response.data.token});

            navigate('questionFlow');
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
        }
    }


const signin = (dispatch)  => async ({email, password}) => {
    try {
        const response = await swimApi.post('/signin', {
            email,
            password
        });
        await  AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', data: response.data.token});

        navigate('questionFlow');
    } catch (err) {
        console.error(err.message);
        dispatch({type: 'add_error', payload: 'Something went wrong with sign in'});
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup,clearErrorMessage,tryLocalSignin},
    {token: null, errorMessage: ''}
);