import { POST_PLANS } from '../Actions/PlanActions';

const initialState = {
    isPlanLoading: false,
    plans: [],
    planId: '',
};

export const postPlanReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_PLANS: {
            return {
                ...state,
                plans: action.plans,
                planId: action.planId,
            };
        }
        default: {
            return state;
        }
    }
};
