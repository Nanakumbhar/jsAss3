1. Find the number of digits


const Find_Digits = (N) => 
{
	  let a = N;
	 let b = 1;
	 for(let i=0; i<=5;i++){
	   a =a/10;
	   if(a>=1){
	     b++;
	   }
	 }
	 return b;
};

2.Find the Fives.
const Find_Five = (N) => 
{let x=0;
	 while(N !=0){
	   if(N%10==5)
	   x=x+1;
	   N=parseInt(N/10);
	 }
	 return x;
	 
};
3.Find Sum

const findSum = (n) => {
    let sum=0;
    for(let i=2; i<=n; i=i+2){
      sum=sum+i
    }
    return sum
};

 4.Find the sum of the digits of a given number.

 const Number_Sum = (N) => 
{
	let sum=0,x;
	while(N>0)
	{
	  x =N%10
	  sum =sum+x
	  N=parseInt(N/10)
	}
	return sum;
};

5.Print the Odds.

const Print_Odd = (N) => 
{
	 
	 let x=0;
	 for(x=2;x<=N;x++)
	 if(x==2|| x%2!==0)
	 console.log(x)

};

6.Print the Pattern.

const Print_pattern = (N) => 
{
let x= "";
  for(y=1; y<=N;y++){
    x += "*";
    console.log(x);
  }
};

7.Check whether a Number is a prime or not.


const Prime_Check = (N) => 
{
	  let num =0;
	 for(let x=1; x<=N; x++){
	   if(N%x ===0)
	   num++;
	 }
	 if(num ==2)
    return "YES"
   else
    return "NO"
	
};

8.Print Numbers

const printNumbers = (n) => {
    for( let x = 1; x <= n; x++){
     console.log(x);
   }  
};

9.Print the Table

const Print_Table = (N) => 
{
	for(let x=1; x<=10; x++){
	  console.log(N +" " +"*"+" " + x +" " +"="+" " + N*x);
	}
};
