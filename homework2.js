const inventors=[
    { first: 'Albert', last: 'Einstein', year: 1879, sex: 'male' },
    { first: 'Isaac', last: 'Newton', year: 1643, sex: 'male' },
    { first: 'Galileo', last: 'Galilei', year: 1564, sex: 'male' },
    { first: 'Marie', last: 'Curie', year: 1867, sex: 'male' },
    { first: 'Johannes', last: 'Kepler', year: 1571, sex: 'male' },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, sex: 'male' },
    { first: 'Max', last: 'Planck', year: 1858, sex: 'male' },
];


//return all array items
exports.getAll = () => { 
    return inventors; 
   
}; 



//return single item in array

exports.get = (first) => { 
    //test code

    let data = inventors.find((first) => {
        console.log(inventors[0].first);
        return inventors.first.toLowercase() === first;
    });
    console.log(data);
    //end test code
    //return inventors.find((inventors) => { return inventors.first == first}); 
}; 



exports.remove = function (investors){ 
    return false; 
}

