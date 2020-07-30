import { STORE_PLANS, CHECK_PLAN, DELETE_PLANS } from '../Actions/planActions';

const initialState = {
    isPlanLoading: false,
    plan: {},
    isPlanExist: false,
    isEditPlanLoading: true,
};

export const planReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_PLANS: {
            return {
                ...state,
                plan: { ...action.plan },
            };
        }
        case CHECK_PLAN: {
            return {
                ...state,
                isPlanExist: action.isPlanExist,
            };
        }
        case DELETE_PLANS: {
            return {
                ...state,
                plan: {},
            };
        }

        default: {
            return state;
        }
    }
};
