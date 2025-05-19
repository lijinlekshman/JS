const measureKelvin = function(){
    const measurement = {
        type : 'temp',
        unit : 'celcious',
        value : prompt('Degree Celcious'),
    };

    console.log(measurement);

    console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    //  console.table(measurement);


    const kelvin = measurement.value + 273; // entered number 10 = 10237
    return kelvin;
}

console.log(measureKelvin());