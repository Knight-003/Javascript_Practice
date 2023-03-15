const func2 = function(str){


    return (str[0].toUpperCase()+ str.slice(1))




}
const func1 = function(st , func){



  console.log(func(st));
}


func1("hellow i am nikhil" , func2)