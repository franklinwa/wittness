/**
 * Created by liuwenju on 2016/5/14.
 */
function SimpleWittness() {

    this.bookName = '';
    this.wittnesses = [];
    this.wittnessDate = '';
    this.beginPage = 2;
    this.endPage = 2;
    this.wittnessIndex = 0;

};
SimpleWittness.prototype.renderWittness = function(bookname,p1,p2){


    var plan = '2015年5月16日，阅读' + bookname + '，作者埃利.威塞尔，袁筱一翻译，2014年8月第1版，南海出版公司出版。阅读P.' + p1 + '-' + p2 + '，阅读完毕，特此见证，感谢坚持读！' ;

    for( var i = 1; i < 10; i++ ){

        console.log('阅享见证'+ i);


    }


    console.log( plan );
    return plan;
};

SimpleWittness.prototype.addWittness = function( bookname,arr,fn ){


        var list = [];
        for(var i = 0; i < arr.length-1; i++){

            list[i] = fn(bookname,arr[i],arr[i+1]);

        }
        return list;

};

