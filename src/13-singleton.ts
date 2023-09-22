/* Patron singleton*/

export class MyService{

  static instance: MyService | null = null;

  private constructor(private name:string){

  }
  getName(){
    return this.name;
  }

  static create(name:string){
    if(MyService.instance==null)
      MyService.instance = new MyService(name);
    return MyService.instance;
  }
}

// const myService1 = new MyService('service 1');
// const myService2 = new MyService('service 2');
const myService1 =  MyService.create('service 1');
const myService2 =  MyService.create('service 2');
console.log(myService1.getName())
console.log(myService2.getName())
console.log(myService1 === myService2)