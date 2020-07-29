//? 리덕스 리팩토링을 위한 리듀서 파일입니다.
const reducerSample = (state = {}, action) => {
    switch (action.type) {
        case 'sample': {
            return {
                ...state,
                value: action.value,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducerSample;
