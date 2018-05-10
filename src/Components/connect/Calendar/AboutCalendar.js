const InfoOfDate = {
  getAllDays(year, month) {
    let days = null;

    let numbers = getNumberOfDay(year, month);
    let first = getFirstDay(year, month);
    let ff = 1 - first;

    //将days数组填充好固定长度的数组
    if(numbers === 31 && first >= 5) {
      days = new Array(6).fill({});
    } else if(numbers === 30 && first >= 6) {
      days = new Array(6).fill({});
    } else {
      days = new Array(5).fill({});
    }

    let ret = [];
    for(let i in days) {
      let fwd = new Date(year, month - 1, 7 * i + ff);
      let arr = [];
      for(let k = 0; k < 7; k++) {
        let fst = new Date(fwd);
        let day = fst.setDate(fst.getDate() + k);
        let mm = new Date(day).getMonth() + 1;
        let dd = new Date(day).getDate();
        let _ret = {
          day: dd,
          month: mm
        }
        arr.push(_ret);
      }

      ret.push(arr);
    }

    return ret;
  }
}

// 获取指定月的天数
const getNumberOfDay = (year, month) => {
  let numbers = 0;

  if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    numbers = 31;
  } else if(month === 2) {
    numbers = 28 + isLeapYear(year);
  } else {
    numbers = 30;
  }

  return numbers;
}

// 获取制定月第一天的星期
const getFirstDay = (year, month) => {
    let m = month - 1;
    let first = new Date(year, m, 1);
    let date = first.getDay();

    return date;
}

const isLeapYear = (year) => {
  return year % 100 === 0 ? (year % 400 === 0 ? 1 : 0) : (year % 4 === 0 ? 1 : 0);
}

export default InfoOfDate;
