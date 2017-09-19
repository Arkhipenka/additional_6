module.exports = function zeros(expression) {
    this.j=0;
    this.zeroes=0;
    this.numbers;
    this.countFive=0;
    this.evenNumbers=0;
        for(let i=0; i<expression.length; i++)
        {
           if( expression[i]==="!")
           {
               if(expression[i+1]==="!")                            
               {

                   numbers = Number(expression.slice(j, i));
                   if(numbers%2===0){                               
                       for(let x=2; x<=numbers; x=x+2){
                           if(x%10===0){
                               zeroes=zeroes+1;
                           }
                           if(x%50===0){
                               zeroes=zeroes+1;                    
                           }
                           evenNumbers=evenNumbers+1;
                       }
                   }
                   else{                                            
                       for(let z=1; z<=numbers; z=z+2){
                           if(z%5===0){
                               countFive=countFive+1;
                           }
                           if(z%25===0){
                               countFive=countFive+1;
                           }
                       }
                   }
                   i = i + 3;
                   j = i;
               }
               else {
                   numbers = Number(expression.slice(j, i));        
                   for(let k=1; k<=numbers; k++)
                   {    if(k%5===0)
                        {
                            zeroes=zeroes+1;
                        }
                       if(k%25===0)
                       {
                           zeroes=zeroes+1;
                       }
                       if(k%2===0)
                       {
                           evenNumbers=evenNumbers+1;
                       }
                   }
                   i = i + 2;
                   j = i;
               }
           }

        }
        if(evenNumbers<countFive)
        {
            zeroes=zeroes+evenNumbers;
        }
        else
        {
            zeroes=zeroes+countFive;
        }

    return zeroes;
}