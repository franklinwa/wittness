/**
 * Created by liuwenju on 2016/5/14.
 */

console.log('hellow readplan!');

function ReadPlan(){
    this.planDate = [];
    this.books = [];
    this.planIndex = 0;
    this.readMethod = true;
}

ReadPlan.prototype.addPlan = function(book){
    var planDate = new Date()
    this.books.push(book);
    this.planDate.push(planDate);
    console.log( planDate.getFullYear() + '年' + planDate.getMonth() + '月' + planDate.getDay() + '日' + '，增加了一本书!');

};
ReadPlan.prototype.setReadMethord = function(){

    this.readMethod = false;

};

ReadPlan.prototype.renderInElement = function(list){

    list.innerHTML ='';
    for(var i = 0;  i <this.books.length; i++){
        list.innerHTML += this.books[i].toHTML(this.planDate[i]);
    }

    console.log('已经进行格式化!');
    console.log( list.innerHTML);

};

