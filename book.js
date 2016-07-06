/**
 * Created by liuwenju on 2016/5/14.
 */

console.log('hellow book!');
function Book( bookname, author, pages, press, summary, date_press1, date_press2 ,author_introduct){

    this.bookname = bookname;
    this.author = author;
    this.pages = pages;
    this.press = press;
    this.date_press1 = date_press1;
    this.date_press2 = date_press2;
    this.author_introduct = author_introduct;
    this.summary = summary;
    this.isreading = false;
    this.isfinish = false;
    this.ismark = false;
}

Book.prototype.reading = function(){

    this.isreading = true;

};

Book.prototype.finished= function(){

    this.isfinish = true;

};

Book.prototype.marked = function(){

    this.ismark = true;

};


Book.prototype.toHTML = function( planDate ){

    var readPlanString = planDate.getFullYear() + '年' + planDate.getMonth() + '月' + planDate.getDay() + '日,'+ '开始阅享《'+this.bookname +'》，' + this.autor + ',' + this.press + ',共计' + this.pages +'页，特此见证，感谢坚持读！';
    var htmlString ='<li>';
    htmlString +='书名：';
    htmlString += this.bookname;
    htmlString +='</br>';
    htmlString +='作者：';
    htmlString += this.author;
    htmlString +='</br>';
    htmlString +='出版社：';
    htmlString += this.press;
    htmlString +='</br>';
    htmlString +='总页数：';
    htmlString += this.pages;
    htmlString +='</br>';
    htmlString +='简介：';
    htmlString += this.summary;
    htmlString +='</br>';
    htmlString +='</br>';
    htmlString +='阅享计划';
    htmlString +='</br>';
    htmlString +='</br>';
    htmlString += readPlanString;
    htmlString += '</li>';
    htmlString +='</br>';
    return htmlString;

};
