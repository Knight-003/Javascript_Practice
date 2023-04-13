const greet = function(grt){


       return function(nam){
            

        console.log(grt +" "+ nam);
        

       }


}

const grt_fnc =  greet("hello")


grt_fnc("nikhil")

// or we can also do this 
greet("hello")("nikhil")


