// 계획이 있을 때의 테스트를 위한 더미데이터입니다.
export const planDummy = [
    {
        day: 1,
        region: '서울',
        toDos: ['일어나기', '집에가기', '저녁먹기', '잠자기', '밥먹기'],
    },
    {
        day: 2,
        region: '영지',
        toDos: ['다키스트던전 하기', '골드 파밍하기'],
    },
    {
        day: 3,
        region: '로드란',
        toDos: ['다크소울 하기', '몬스터잡기'],
    },
];

export const plansData = {
    userId: 1,
    list: [
        {
            day01: {
                date: '2020-07-31',
                tasks: [
                    {
                        region: '서울',
                        toDos: [
                            '일어나기',
                            '집에가기',
                            '저녁먹기',
                            '잠자기',
                            '밥먹기',
                        ],
                    },
                    {
                        region: '부산',
                        toDos: ['숙소가기', '밥먹기', '택시타기'],
                    },
                ],
            },
        },
        {
            day02: {
                date: '2020-08-01',
                tasks: [
                    {
                        region: '부산',
                        toDos: ['기차타기'],
                    },
                    {
                        region: '서울',
                        toDos: ['기차내리기', '집에가기'],
                    },
                ],
            },
        },
        {
            day03: {
                date: '2020-08-02',
                tasks: [
                    {
                        region: '우리집',
                        toDos: ['궤에에엑'],
                    },
                ],
            },
        },
    ],
};

// 계획의 없을 때의 테스트를 위한 더미데이터입니다.
export const noPlanDummy = [
    {
        day: null,
        region: '기차여행을 시작하세요!',
        toDos: ['카드를 옆으로 넘겨 계획을 설정해 보세요!'],
    },
];

// 추천지역 그거입니다 더미데이터
export const regionDummy = ['서울', '단양', '대구', '부산', '전주'];

// 추천코스 테스트를 위한 더미데이터입니다.
export const courseDummy = [
    {
        region: '서울',
        hashTag: ['#서울', '#미세먼지', '#도망가', '#배고파요', '#피곤해요'],
    },
    {
        region: '영지',
        hashTag: ['#영지', '#다키스트던전', '#갓겜', '#서커스', '#같이해요'],
    },
];

// select 페이지에서 보여줄 더미데이터
export const stationDummy = {
    currentSelected: ['서울', '여수엑스포', '광주'],
    allResult: ['우분투', '조아', '절대', '우분투', '해'],
};

export const courseDetailDummy = [
    {
        region: '서울',
        day: '1',
        title: '우리집 투어',
        course: [
            '멋있는 현관문',
            '아주멋있는 베란다',
            '정말정말 멋있는 씽크대',
            '우리집 명물 바다오징어',
        ],
    },
    {
        region: '서울',
        day: '2',
        title: '너네집 투어',
        course: [
            '멋있는 현관문',
            '아주멋있는 베란다',
            '정말정말 멋있는 씽크대',
            '우리집 명물 바다오징어',
        ],
    },
    {
        region: '서울',
        day: '3',
        title: '쟤네집 투어',
        course: [
            '멋있는 현관문',
            '아주멋있는 베란다',
            '정말정말 멋있는 씽크대',
            '우리집 명물 바다오징어',
        ],
    },
    {
        region: '서울',
        day: '4',
        title: '쟤네집 투어',
        course: [
            '멋있는 현관문',
            '아주멋있는 베란다',
            '정말정말 멋있는 씽크대',
            '우리집 명물 바다오징어',
        ],
    },
    {
        region: '서울',
        day: '5',
        title: '쟤네집 투어',
        course: [
            '멋있는 현관문',
            '아주멋있는 베란다',
            '정말정말 멋있는 씽크대',
            '우리집 명물 바다오징어',
        ],
    },
];

export const staitonDetailDummy = {
    sookBak: ['숙박1', '숙박2', '숙박3'],
    gwanGwang: ['관광1', '관광2', '관광3'],
    foods: ['마싯는거', '먹고싶어요', '짱마싯는거'],
};

export const stationData = {
    coord: { lon: 35.1145855, lat: 129.039662 },
    station: '서울역',
    stationNumber: 1,
    info: '서울의 중심지입니다.',
    lodging: [
        {
            name: '1호점',
            phone: '010-444-4444',
            address: '서울시 종로구',
            info: '좋은곳입니다.',
        },
    ],
    tourism: [
        {
            name: '인사동',
            phone: '010-333-3334',
            address: '인사동 어디엔가',
            info: '문화를 느낄 수 있는 인사동입니다.',
        },
    ],
    food: [
        {
            name: '닭한마리',
            phone: '010-555-5555',
            address: '종로5가 닭한마리 골목',
            info: '원조가 100군데',
        },
    ],
};

export const bestStationList = [
    { region: '서울역', id: '5f27c68a601eff4f1fc45893' },
    { region: '서울역', id: '5f27c68a601eff4f1fc45893' },
    { region: '서울역', id: '5f27c68a601eff4f1fc45893' },
    { region: '서울역', id: '5f27c68a601eff4f1fc45893' },
    { region: '서울역', id: '5f27c68a601eff4f1fc45893' },
];

export const bestPlanDummy = [
    {
        num: 2,
        list: ['#서울', '#미세먼지', '#도망가', '#배고파요', '#피곤해요'],
        plan: [
            {
                region: '서울',
                day: '1',
                title: '우리집 투어',
                course: [
                    '멋있는 현관문',
                    '아주멋있는 베란다',
                    '정말정말 멋있는 씽크대',
                    '우리집 명물 바다오징어',
                ],
            },
            {
                region: '서울',
                day: '2',
                title: '너네집 투어',
                course: [
                    '멋있는 현관문',
                    '아주멋있는 베란다',
                    '정말정말 멋있는 씽크대',
                    '우리집 명물 바다오징어',
                ],
            },
            {
                region: '서울',
                day: '3',
                title: '쟤네집 투어',
                course: [
                    '멋있는 현관문',
                    '아주멋있는 베란다',
                    '정말정말 멋있는 씽크대',
                    '우리집 명물 바다오징어',
                ],
            },
            {
                region: '서울',
                day: '4',
                title: '쟤네집 투어',
                course: [
                    '멋있는 현관문',
                    '아주멋있는 베란다',
                    '정말정말 멋있는 씽크대',
                    '우리집 명물 바다오징어',
                ],
            },
            {
                region: '서울',
                day: '5',
                title: '쟤네집 투어',
                course: [
                    '멋있는 현관문',
                    '아주멋있는 베란다',
                    '정말정말 멋있는 씽크대',
                    '우리집 명물 바다오징어',
                ],
            },
        ],
    },
];

export const newStationDummy = {
    coord: [35.1145855, 129.039662],
    station: '서울역',
    stationNumber: 1,
    info: '서울의 중심지입니다.',
};
