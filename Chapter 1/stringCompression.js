// answer for question 1.6 of CTCI
const helper = (str) => {
  let res = '';
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]+=1;
    }
    if (str[i] !== str[i+1]) {
      res = res.concat(str[i]).concat(obj[str[i]]);
      delete obj[str[i]];
    }
  }
  return res;
}

let str = 'aabcccaaa';
console.log('yeet',helper('aabcccaaa'));
