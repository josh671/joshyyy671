const InventorDB = require("./models/inventor");

// return one records///////////////GET METHOD////////////////////////////
exports.get = (inventorFirst) => { 
  InventorDB.findOne({'first': inventorFirst}, (err, items)=>{ 
    if (err){ 
      return err
    } 
    return items; 
  }
  )};