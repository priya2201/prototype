// let arr=["Akshya","pia"];
let object={
    name:"tushi",
    city:"bangalore",
    getIntro : function(){
        console.log(this.name + "from" + this.city)
    }
}
// function fun(){

// }
let object2={
    name:"sayali"
}
//Never Do this
//prototypal inheritance
object2.__proto__= object;


// In console

// object2.__proto__
// {name: 'tushi', city: 'bangalore', getIntro: ƒ}city: "bangalore"getIntro: ƒ ()name: "tushi"[[Prototype]]: Object
// object2.city
// 'bangalore'
// object.getIntro();
// basic.js:6 tushifrombangalore
// undefined
// object2.getIntro();
// basic.js:6 sayalifrombangalore
// undefined

//accessing bind method in another functions
Function.prototype.mybind=function(){
    console.log("Hieee");
}
function fun(){

}
function fun2(){

}
//in console
// fun.__proto__.mybind()
// basic.js:35 Hieee
// undefined
// fun2.mybind();
// basic.js:35 Hieee
