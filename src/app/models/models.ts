export class Product {
    public Id:Number;
    public Name:string;
    public Description:string;
    public Cost:Number;

    constructor(){
        this.Cost=0;
        this.Description="";
        this.Id=0;
        this.Name="";
    }
}

export class NavigationItem{
    public Name:string="";
    public Path:string="";

    constructor(name:string,path:string){
this.Name=name;
this.Path=path;
    }
}

export interface LoaderState {
    show: boolean;
}