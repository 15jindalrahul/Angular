export class Employee
{  /*
        public firstName:String;
        public lastName:String;
        public Salary:Number;
        public gender:String;
        public  email:String;

    
    constructor(f:String,l:String,s:Number,g:String,e:String)
    {
        this.firstName=f;
        this.lastName=l;
        this.Salary=s;
        this.gender=g;
        this.email=e;
    }
      */
    
    
    
    /*  here  we dont need to write attributes of class  and then constructor  with 
         attributes ,we can directly create a constructor with attributes.  **/ 
    constructor(
    
        public firstName:String,
        public lastName:String,
        public Salary:Number,
        public gender:String,
        public  email:String)
        {

        }
getFullName()
{
console.log(this.firstName +"  " +this.lastName)
}
    
}


var emp=new Employee("abc","def",100,"m","15@gmail.com");
console.log(emp);
emp.getFullName();
