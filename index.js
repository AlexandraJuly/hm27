//1

const arrTest = [8,5,0,4,9,6,7,8,9,9];
let userTest = {
    id: 8596,
    name: 'ALex',
    age: '20',
    sex: 'female',
};

function mappingOne (objectArray, callback) {
    if ((typeof objectArray === 'object' && objectArray !== null) && !Array.isArray(objectArray)) {
        const resObj = {};
        for (let key in objectArray) {
            Object.assign(resObj,callback(objectArray[key], key, objectArray));
        }
        return resObj;
    } else if (Array.isArray(objectArray)) {
        const resArr = [];
        for (let i = 0; i < objectArray.length; i++) {
            resArr.push(callback(objectArray[i], i, objectArray));
        }
        return resArr;
    }  else {
        return alert('First argument is not Array or Object');
    }

}

function callbackObjAddValue (value, key, obj) {
    return {[key] : (value += '__new')};
}
function callbackObjAddValueAndKey (value, key, obj) {
    return {[key += '_q'] : (value += '__new')};
}
function callbackObjUpperCase (value, key, obj) {
    if (isNaN(value)) {
        return {[key] : value.toUpperCase()};
    } else {
        return {[key] : value};
    }
}

console.log('---Работа функции mappingOne с Оbject---');
console.log(mappingOne(userTest, callbackObjAddValue));
console.log(mappingOne(userTest, callbackObjAddValueAndKey));
console.log(mappingOne(userTest, callbackObjUpperCase));

function callbackArrAdd (item, _, arr) {
    return item + arr.length;
}
function callbackArrStrIndex (item, index) {
    return item + ` - index #${index}`;
}
console.log('---Работа функции mappingOne с Arrey---');
console.log('Arr : ' + mappingOne(arrTest, callbackArrAdd));
console.log('Arr : ' + mappingOne(arrTest, callbackArrStrIndex));
console.log('Arr : ' + mappingOne(arrTest, item => item + "!"));


function callbackObjAddValueTwo (value, key, obj) {
    return value += '__new';
}
function callbackObjUpperCaseTwo (value, key, obj) {
    if (isNaN(value)) {
        return value.toUpperCase();
    } else {
        return value;
    }
}
console.log('---Работа функции mappingTwo с Оbject---');
console.log(mappingTwo(userTest, callbackObjAddValueTwo));
console.log(mappingTwo(userTest, callbackObjUpperCaseTwo));

//2

function filter (array, callback) {
    let resObj = {right: [], wrong: [],};
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array) ? resObj.right.push(array[i]) : resObj.wrong.push(array[i]);
    }
    return resObj;
}

const {right, wrong} = filter(arrTest, el => el<5);
console.log(`--- работа функции filter ---`);
console.log(right);
console.log(wrong);
console.log(filter(arrTest, el => el<5));