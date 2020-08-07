const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
};

const getCurrentMonth = () => {
    const date = new Date();
    return date.getMonth() + 1;
};

const getCurrentDate = () => {
    const date = new Date();
    return date.getDate();
};

const getCurrentDay = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const date = new Date();
    return days[date.getDay()];
};

export const transferMonth = (mon) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const month = months.indexOf(mon) + 1;

    return month > 10 ? month : `0${month}`;
};

export const makeCurrentDate = () => {
    return `${getCurrentYear()}-${
        getCurrentMonth() > 10
            ? getCurrentMonth()
            : `0${getCurrentMonth()}-${
                  getCurrentDate() > 10
                      ? getCurrentDate()
                      : `0${getCurrentDate()}`
              }`
    }`;
};

export const sliceTitle = (title) => {
    return title.length <= 25 ? title : `${title.slice(0, 25)}...`;
};

export const sliceText = (text) => {
    return text.length <= 80 ? text : `${text.slice(0, 80)}...`;
};
