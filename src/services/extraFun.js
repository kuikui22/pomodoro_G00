const DAY_SHORT_NAME = {
    0: 'S',
    1: 'M',
    2: 'T',
    3: 'W',
    4: 'T',
    5: 'F',
    6: 'S'
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

/**
 * 取出這個禮拜的Date物件
 * @param {new Date()} date 實例化的Date
 * @returns {array[new Date()]} Date陣列
 */
export const getWeekDate = (date) => {
    let weekList = [];
    let newDate = new Date();
    let resetDay = date.getDay();
    date.setDate(date.getDate() - resetDay);

    for(let i = 0; i < 7; i++) {
        newDate.setDate(date.getDate() + i);
        weekList.push(parseDate(newDate));
    }

    return weekList;
}

/**
 * 轉換date為int
 * @param {new Date()} new_date 實例化的Date
 * @returns {int} 轉成 int 的 date
 */
export const parseDate = (new_date) => {
    let year = new_date.getFullYear();
    let month = new_date.getMonth() + 1;
    let date = new_date.getDate();

    return Date.parse(year + '/' + month + '/' + date);
}

export const getDefaultTaskList = () => {
    let weekList = getWeekDate(new Date());
    let taskList = [];

    for(let i = 0; i < 7; i++) {
        taskList.push({
            finish: false, 
            name: 'Work on Project '+(i + 1), 
            date: weekList[i], 
            priority: 'normal'
        });
    }

    //  taskList Sample
    //  { finish: true, name: 'Work on Project A', date: new Date(), priority: 'normal'},
	// 	{ finish: false, name: 'Work on Project B', date: new Date(), priority: 'normal' },
	// 	{ finish: false, name: 'Work on Project C', date: new Date(), priority: 'important' },
	// 	{ finish: false, name: 'Work on Project D', date: new Date(), priority: 'normal' },
	// 	{ finish: false, name: 'Work on Project E', date: new Date(), priority: 'normal'},

    return taskList;
}