import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";

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
    const response = await swimApi.get('/activities');
    // console.log("response.data", response.data);
    dispatch({
        type   : 'fetch_activities',
        payload: response.data
    });
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
}, []);
