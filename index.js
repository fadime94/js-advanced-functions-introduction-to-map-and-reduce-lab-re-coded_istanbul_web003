// Your code here

/* function mapToNegativize(arr){
    const negativeNums= arr.map(num => num*-1);
    return negativeNums;
 
} */
function mapToNegativize(sourceArray){
    const negativeNums=[];
    for(const el of sourceArray){
        negativeNums.push(-1*el);
    }
    return negativeNums;
}

/* function mapToNoChange(sourceArray){
    const newArr = sourceArray.map(element=>element);
    return newArr;
} */
function mapToNoChange(sourceArray){
    return sourceArray;
}


/* function mapToDouble(sourceArray){
    const newArr= sourceArray.map(num=>num*2);
    return newArr;
} */

function mapToDouble(sourceArray){
    const double=[];
    for(const el of sourceArray){
        double.push(2*el);
    }
    return double;
}


/* function mapToSquare(sourceArray){
    const newArr=sourceArray.map(num=>num**2);
    return newArr;
} */
function mapToSquare(sourceArray){
    const square=[];
    for(const el of sourceArray){
        square.push(el**2);
    }
    return square;
}

/* 
function reduceToTotal(sourceArray, startingPoint){
    const newArr= sourceArray.reduce(acc, num=> acc+num, startingPoint);
    return newArr;
}*/

function reduceToTotal(sourceArray, startingPoint=0){
    let total=startingPoint;
    for(const el of sourceArray){
        total+=el;
    }
    return total;
}


/* function reduceToAllTrue(sourceArray){
    const newArr = sourceArray.reduce((acc, el) => (el=> el? true:false)
    );

} */

function reduceToAllTrue(sourceArray){
    let result= sourceArray.every(el=> el? true:false);
    return result;
} 

function reduceToAnyTrue(sourceArray){
    let result = sourceArray.some(el=> el?true:false);
    return result;
}
