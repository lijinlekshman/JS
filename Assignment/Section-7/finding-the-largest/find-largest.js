//What is temp amplitude ? Answer: the difference between highest and lowest temp.


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temp2 = [2 ,1 ,0 , 5 , -5 , 18, 25, 32, -2, -8, 10]


const calcAmplitude = function(temps){
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        const crntTemp = temps[i];

        if(typeof crntTemp !== 'number') continue;
        if(crntTemp > max) max = crntTemp;
        if(crntTemp < min) min = crntTemp;  

    }
    console.log(max, min);
    return max - min;
}
const amplitude = calcAmplitude(temperatures);
console.log(amplitude);

//23  

// Merging 2 arrays
const tempCheck = temperatures.concat(temp2);


console.log(tempCheck); 

const amplitude1 = calcAmplitude(tempCheck)

console.log(amplitude1);


// with 2 arrays calculation
const calcAmplitudeNew = function(t1, t2){

    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        const crntTemp = temps[i];

        if(typeof crntTemp !== 'number') continue;
        if(crntTemp > max) max = crntTemp;
        if(crntTemp < min) min = crntTemp;  

    }
    console.log(max, min);
    return max - min;
}
const amplitudeNew = calcAmplitudeNew([3, 5, 1], [5, 8, 2]);
console.log(amplitudeNew);


