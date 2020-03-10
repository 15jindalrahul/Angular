class Rectangle
{
    private length:Number;
    private height:Number;



    constructor (l,h)
    {
        this.length=l;
        this.height=h;
    }


 getArea():Number{
     let area=Number(this.length)*Number(this.height);
     return area;
 }
}
    var obj=new Rectangle(10,20);
   var area1= obj.getArea();
    console.log(area1);
    

