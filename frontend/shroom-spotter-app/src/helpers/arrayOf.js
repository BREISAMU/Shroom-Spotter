const transform = (arr, ele) => {
    arr.push(ele);
}

export default function arrayOf(st){
    let ret = [];
    for (let value of st) {
        transform(ret, value);
      }
    return ret;
}