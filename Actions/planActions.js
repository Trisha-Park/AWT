// 메인화면에서 plan 가져오기
export const PLAN_LOADING_START = 'PLAN_LOADING_START';
export const PLAN_LOADING_END = 'PLAN_LOADING_END';

// plan 저장
export const STORE_PLANS = 'STORE_PLANS';
export const DELETE_PLANS = 'DELETE_PLANS';
export const CHECK_PLAN = 'CHECK_PLAN';

// 수정중 plan 저장 / 비우기
export const STORE_EDITING_PLAN = 'STORE_EDITING_PLAN';
export const EDIT_EDITING_PLAN = 'EDIT_EDITING_PLAN';
export const DELETE_EDITING_PLAN = 'DELETE_EDITING_PLAN';

export const planLoadingStart = (isPlanLoading) => ({
    type: PLAN_LOADING_START,
    isPlanLoading,
});

export const planLoadingEnd = (isPlanLoading, plan) => ({
    type: PLAN_LOADING_END,
    isPlanLoading,
    plan,
});

export const storePlans = (plan) => ({
    type: STORE_PLANS,
    plan,
});

export const checkPlan = (isPlanExist) => ({
    type: CHECK_PLAN,
    isPlanExist,
});

export const deletePlans = () => ({
    type: DELETE_PLANS,
});

export const storeEditingPlan = (editingPlan) => ({
    type: STORE_EDITING_PLAN,
    editingPlan,
});

export const deleteEditingPlan = () => ({
    type: DELETE_EDITING_PLAN,
});
