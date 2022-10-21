import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";
import {useState} from "react";

const activityReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_activities':
            return action.payload;
        case 'add_activities':
            return [
                action.payload,
                ...state
            ];
        default :
            return state;
    }
};


const fetchActivities = (dispatch) => async () => {
    const response = await swimApi.get(`/activities`);
    // console.log("response.data", response.data);
    dispatch({
        type   : 'fetch_activities',
        payload: response.data
    });
}
const fetchActivities2 = (dispatch) => async () => {

}

async function setActivities3(firstDay, dispatch) {
    const response = await swimApi.get(`/activities2?from=${firstDay.toISOString()}`);
    dispatch({
        type   : 'fetch_activities',
        payload: response.data
    });
}

const fetchWeekActivities = (dispatch) => async () => {
    console.log("fetchWeekActivities");
    const curr = new Date; // get current date
    const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

    const firstDay = new Date(curr.setDate(first));
    firstDay.setHours(0,0,0,0);
    console.log("firstDay", firstDay.toISOString());

    await setActivities3(firstDay, dispatch);
}
const fetchMonthActivities = (dispatch) => async () => {
    console.log("fetchMonthActivities");
    const date = new Date(), y = date.getFullYear(), m = date.getMonth();
    const firstDay = new Date(y, m, 1);
    firstDay.setHours(0,0,0,0);
    console.log("firstDay", firstDay.toISOString());

    await setActivities3(firstDay, dispatch);
}
const addActivities = (dispatch) => async (activity) => {
    const response = await swimApi.post('/activities', activity);
    console.log("response.data", response.data);
    dispatch({
        type   : 'add_activities',
        payload: response.data
    });

}

export const {
    Provider,
    Context
} = createDataContext(activityReducer, {
    fetchActivities,
    addActivities,
    fetchWeekActivities,
    fetchMonthActivities,
}, []);
