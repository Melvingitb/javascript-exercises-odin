const removeFromArray = function(arr, ...rest) {
    let count = 0;
    let answer = [];

    for (let i = 0; i < arr.length; i++){
        if (!rest.includes(arr[i])){
            answer[count] = arr[i];
            count++;
        }
    }

    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
