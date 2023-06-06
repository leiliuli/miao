let leiliuli = {
  dropright: function(ary,values = 1) {
    if (values > ary.length){
      return []
    }else {
      return ary.slice(0 , ary.length - values)
    }
  },

  drop: function(ary,values = 1) {
    if (values > ary.length){
      return []
    }else {
      return ary.slice(values)
    }
  },
  compact: function(ary) {
    let result = [];
    for(let i = 0; i < ary.length; i++) {
      if(ary[i] === false || 
         ary[i] === null || 
         ary[i] === 0 || 
         ary[i] === "" || 
        isNaN(ary[i]) ||
        typeof ary[i] === 'undefined') {
        continue;
      }
      result.push(ary[i]);
    }
    return result;
  },
  chunk : function  (ary ,size){
    let result =  []
    for(let i  = 0 ;i < ary.length ; i += size){
      result.push(ary.slice(i , i +size))
    }
    return result 
  },
  difference: function(ary, values) {
    for (let i = 0; i < ary.length; i++) {
      if (values.includes(ary[i])) {
        ary.splice(i, 1);
        i--;
      }
    }
    return ary;
  }

}



  







