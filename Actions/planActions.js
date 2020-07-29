// 메인화면에서 plan 가져오기
export const PLAN_LOADING_START = 'PLAN_LOADING_START';
export const PLAN_LOADING_END = 'PLAN_LOADING_END';

// plan 저장
export const POST_PLANS = 'POST_PLANS';

export const planLoadingStart = (isPlanLoading) => ({
    type: PLAN_LOADING_START,
    isPlanLoading,
});

export const planLoadingEnd = (isPlanLoading, plans) => ({
    type: PLAN_LOADING_END,
    isPlanLoading,
    plans,
});

export const postPlans = (plans, planId) => ({
    type: POST_PLANS,
    plans,
    planId,
});
