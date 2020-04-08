const DAY_SHORT_NAME = {
    0: 'M',
    1: 'T',
    2: 'W',
    3: 'T',
    4: 'F',
    5: 'S',
    6: 'S',
}

const MONTH_SHORT_NAME = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
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