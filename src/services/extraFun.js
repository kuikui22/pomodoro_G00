const DAY_SHORT_NAME = {
    1: 'M',
    2: 'T',
    3: 'W',
    4: 'T',
    5: 'F',
    6: 'S',
    7: 'S',
}

const MONTH_SHORT_NAME = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
}

/**
 * 轉換數字為英文的星期
 * @param {number} day
 *  
 * @returns {string} 英文星期字串
 */
export const getDay_En = (day) => {
    return DAY_SHORT_NAME[day];
};

/**
 * 轉換數字為英文的月
 * @param {number} month
 *  
 * @returns {string} 英文星期字串
 */
export const getMonth_En = (month) => {
    return MONTH_SHORT_NAME[month];
}