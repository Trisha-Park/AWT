import {
    STORE_PLANS,
    CHECK_PLAN,
    DELETE_PLANS,
    STORE_EDITING_PLAN,
    DELETE_EDITING_PLAN,
} from '../Actions/planActions';

const initialState = {
    isPlanLoading: false,
    plan: {},
    editingPlan: {},
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
        case STORE_EDITING_PLAN: {
            return {
                ...state,
                editingPlan: { ...action.editingPlan },
            };
        }
        case DELETE_EDITING_PLAN: {
            return {
                ...state,
                editingPlan: {},
            };
        }

        default: {
            return state;
        }
    }
};
