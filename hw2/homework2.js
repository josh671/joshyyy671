let inventors=[
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

        return inventors.find((item) => { 
            return item.first.toLowerCase() === first.toLowerCase(); 

        }); 
    
    };
   
console.log(this.get('max'));


//deleting a single item from array, Return new array 

//change filter method to delete mehtod 

exports.delete = (first) =>{ 
    let oldLength = inventors.length; 
    let newLength = inventors.filter((item)=>{ 
        return item.first !== first;
    }); 
    newInventors = inventors;
    return { deleted: first, total: inventors.length};
};
console.log(this.delete("Max"));

exports.removeItem = (first) => { 
    console.log(first);
        return inventors.filter((item) => { 
            return item.first.toLowerCase() !== first.toLowerCase();
        });
     };  
