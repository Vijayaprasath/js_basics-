let index = 1;
function* increament() {
    try{
        yield index++;
        yield index+2;
        return index;
        yield index+3;
        yield index+4;
    } catch (error) {
        console.log(error)
    }
     
  }
//   console.log(increament().next());
//   console.log(increament().next());
   
  const gen = increament();
  
  console.log(gen.next());  
//   console.log(gen.next().value);  
//   console.log(gen.next().done);  
//   console.log(gen.return()); 
  console.log(gen.throw(new Error ("Something went wrong"))); 
  console.log(gen.return()); 
  console.log(gen.return()); 
  
  