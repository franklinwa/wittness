/**
 * Created by liuwenju on 2016/6/3.
 */
function Wittness( book, code_name, nick_name, wittness_declaration, wittness_content,about_us, forward_content ,donation ,evaluate ){

    this.book = book;
    this.code_name = code_name;
    this.nick_name = nick_name;
    this.wittness_declaration = wittness_declaration;
    this.about_us = about_us;
    this.forward_content = forward_content;
    this.wittness_content = wittness_content;
    this.donation = donation;
    this.evaluate = evaluate;
    this.wittness_html = '';
    this.wittness_source =[];
    this.simple_wittness_lists_all = [];
    this.extract_wittness_lists = [];
    this.gnosis_wittness_lists =[];
    this.wittness_type = ['simple','extract_lable','extract','page_one','page_tow','gnosis_lable','gnosis',];






};

Wittness.prototype.total_nuts = function(simple_num , extract_num , gnosis_num, other_num ){

    var total_nut;
    this.simple_num = [];
    this.simple_num = simple_num;
    this.extract_num = [];
    //this.extract_num = extract_num;
    this.gnosis_num = gnosis_num;
    this.other_num = other_num;

    function extract_number (){

        var i = 0;
        for( var j= 0 ; j < extract_num.length ; j++){
        if (!(extract_num[j] ===  '')){
            i = i+1;
        }
    }
            return i;
    }
    function gnosis_number (){

        var i = 0;
        for( var j= 0 ; j < gnosis_num.length ; j++){
        if ( gnosis_num[j] ===  ''){
            console.log(gnosis_num[j] ===  '');
        }else{

            i = i+1;
        }

    }

        console.log(i);
        return i;

    }


    total_nut = this.simple_num.length + extract_number() + gnosis_number() + this.other_num;
    return total_nut;

}


Wittness.prototype.reading_day= function( simple_wittness_lists_all, extract_wittness_lists , gnosis_wittness_lists ) {
    var reading_day = [[1,1],[1,8],[2,8],[3,20],[4,7],[5,1],[5,4],[6,1],[6,2],[7,23],[8,15],[9,10],[10,1],[10,10],[11,11],[12,12]];


    var reg = /(\d{4})\W+(\d+)\W+(\d+)\W+?/;
    var nut_num = 0;
    var plag = [];
    var wittness_day = [];
    console.time('开始循环');
    for ( var i = 0 ; i < simple_wittness_lists_all.length ; i++){


        var str = reg.exec(simple_wittness_lists_all[i]);

        wittness_day.push([parseInt(str[2]),parseInt(str[3])]);

    }
    console.timeEnd('循环结束');


    for ( var i = 0 ; i < wittness_day.length ; i++ ){

        for(var j = 0; j < reading_day.length; j++){


            if ( wittness_day[i][0] === reading_day[j][0] && wittness_day[i][1] === reading_day[j][1] ){

                plag.push(i);

            }

        }


    }

    if(plag.length === 0){



    }else{

        for(var k = 0; k < plag.length; k++){

            if (!(extract_wittness_lists[plag[k]] === null) ){
                nut_num += 9;
            }

            if (!(gnosis_wittness_lists[plag[k]] === null) ){
                nut_num += 9;
            }

        }
        nut_num += plag.length * 9;
    }


    return  nut_num;


}



//生成需要的html代码。图标
Wittness.prototype.auto_html_icon = function( arg ){

    var html;
    switch ( arg )
    {
        case 0:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 14px;">▼</span></p>';
            break;
        case 1:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 20px;">☰</span></p>';
            break;
        case 2:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 20px;">✍</span></p>';

            break;
        case 3:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☷</span></p>';

            break;
        case 4:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☑</span></p>';

            break;
        case 5:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">▤</span></p>';

            break;
        case 6:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">☀</span></p>';

            break;
        case 7:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">✄</span></p>';

            break;
        case 8:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">ღ</span></p>';

            break;
        case 9:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">♔</span></p>';

            break;
        case 10:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">₪</span></p>';

            break;
        case 11:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: red;  font-family: 微软雅黑;font-size: 16px;">❤</span></p>';

            break;
        case 12:
            html = '<p style="text-align: center; line-height: 2em;"><span style="color: #D8D8D8;  font-family: 微软雅黑;font-size: 16px;">✎</span></p>';

            break;

    }

    console.log(html);

    return html;
};

//对原始数据内容进行固定格式的分割。形成每一条数据内容。
Wittness.prototype.ready_data = function(content){

    var regular = /.*?@@@/g;
    //通过空格进行分割各个字段
    if (content.match(/<b>/g)){

        content = content.replace(/<b>/g, '<strong>');
        content = content.replace(/<\/b>/g, '</strong>');
    }

    if (content.match(/<c>/g)){

        content = content.replace(/<c>/g, '<span style="color:red">');
        content = content.replace(/<\/c>/g, '</span>');

    }

    if (content.match(/<h>/g)){

        content = content.replace(/<h>/g, '<p style="color:#00B050; line-height: 3em;font-weight:bold; text-align: center">');
        content = content.replace(/<\/h>/g, '</p>');

    }


    var content_lists = content.match(regular);

    console.log(content_lists.length);

    for ( var i = 0; i < content_lists.length; i++) {

        content_lists[i] = content_lists[i].replace(/@{3}/g, "");

    }

    return content_lists;
};





Wittness.prototype.auto_bulid = function() {

    var simple_wittness_lists_all = [];
    var simple_wittness_lists = [];
    var simple_wittness = [];
    var extract_wittness = '';
    var gnosis_wittness = [];
    var extract_wittness_lists = [];
    var gnosis_wittness_lists = [];
    var wittnesss_evaluate_lists = [];
    var book_author_lists = [];
    var page_wittness = [];
    var wittness_plain = '';
    var book_content_lists = [];
    var forward_content_lists = [];
    var donation_lists =[];
    var about_us_lists =[];

   var  wittness_lists = this.ready_data(this.wittness_content);


    console.log(wittness_lists);
    this.wittness_html += this.auto_html_icon(1) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>关于坚持读</strong></span></p>'+ this.auto_html_icon(0) ;
    about_us_lists = this.ready_data(this.about_us);

    for( var i = 0 ; i <= about_us_lists.length-1; i++ ) {

        this.wittness_html += '<p style="margin-top: 15px; margin-bottom: 15px; font-family: sans-serif; text-indent: 2em; line-height: 2em;">        <span style="color: #7F7F7F; font-family: 微软雅黑;">' + about_us_lists[i] + '</span></p>';

    }


    this.wittness_html += this.auto_html_icon(12) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>阅享宣言</strong></span></p>'+ this.auto_html_icon(0) +  '<p style="line-height: 2em; font-family: 微软雅黑;text-align: center; color: rgb(0, 176, 80);"><span style="font-size: 16px; color: #262626;">'+ this.wittness_declaration +'</span></p>'+ '<p style="line-height: 2em; text-align: right;"><span style="color: #A5A5A5; font-family: 微软雅黑;font-size: 14px;">'+ '——'+ this.code_name + '——</span></p>';



//书籍介绍
    console.log(wittness_lists[0]);
    this.wittness_html += this.auto_html_icon(3) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>书籍介绍</strong></span></p>'+ this.auto_html_icon(0);
    book_content_lists = this.ready_data(this.book.summary);

    for( var i = 0 ; i <= book_content_lists.length-1; i++ ) {

        this.wittness_html += '<p style="margin-top: 15px; margin-bottom: 15px; font-family: sans-serif; text-indent: 2em; line-height: 2em;">        <span style="color: #262626; font-family: 微软雅黑;">' + book_content_lists[i] + '</span></p>';

    }


//作者介绍

    this.wittness_html += this.auto_html_icon(2) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>作者介绍</strong></span></p>'+ this.auto_html_icon(0);
    book_author_lists = this.ready_data(this.book.author_introduct);

    for( var i = 0 ; i <= book_author_lists.length-1; i++ ) {

        this.wittness_html += '<p style="margin-top: 15px; margin-bottom: 15px; font-family: sans-serif; text-indent: 2em; line-height: 2em;">        <span style="color: #7F7F7F; font-family: 微软雅黑;">' + book_author_lists[i] + '</span></p>';

    }




//坚持读评价
    this.wittness_html += this.auto_html_icon(4) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>坚持读评价</strong></span></p>'+ this.auto_html_icon(0);

    wittnesss_evaluate_lists = this.ready_data(this.evaluate);

    for( var i = 0 ; i <= wittnesss_evaluate_lists.length-1; i++ ) {

        this.wittness_html += '<p style="margin-top: 15px; margin-bottom: 15px; font-family: sans-serif; text-indent: 2em; line-height: 2em;">        <span style="color: #262626; font-family: 微软雅黑;">' + this.code_name + '是' + wittnesss_evaluate_lists[i] + '</span></p>';

    }


    var flag = [];
//循环生成阅享见证内容
    for (var i = 0; i < wittness_lists.length; i++) {

        if (wittness_lists[i].match(/\d{4}\s*\年\s*\d+\s*\月\d+\s*\日?/)) {

            flag.push(i);
            if( flag.length - 1 === 0){

                //阅享计划上边
                this.wittness_html += this.auto_html_icon(5) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>阅享计划</strong></span></p>'+ this.auto_html_icon(0);

                //阅享计划
                this.wittness_html += '<p style="margin-top: 1em; margin-bottom: 1em; text-indent: 2em; color: rgb(0, 176, 80); line-height: 2em;"><span style="color: #7F7F7F; font-family: 微软雅黑;">' + /(\d{4}[年-]*\d+[月-]*\d+[日]*)/.exec(wittness_lists[i])[1]+ '，开始阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，'+ '特此见证，感谢坚持读！（QQ群：16805139） '+'</span></p>';

            }

            var simple = /(\d{4}[年-]*\d+[月-]*\d+[日]*)(?:.*[pP]\s*[\.]*\s*)(\d+)\s*[-—－]\s*[Pp]*[\.]*(\d+)/.exec(wittness_lists[i]);
            var simple_single = /(\d{4}[年-]*\d+[月-]*\d+[日]*)(?:.*[pP]\s*[\.]*\s*)(\d+)/.exec(wittness_lists[i]);
            //从匹配的基本阅享见证中摘取见证日期、起始页码、主题等内容。

            if( simple){
                //当阅享见证的页码是单页的情况，2016年5月3日，阅享《在人间》  高尔基著，李蟠译  光明日报出版社，2012年5月第2版，2012年5月第1次印刷，P.153—160，特此见证，感谢坚持读！
                simple_wittness_lists.push(simple);


                this.wittness_html += this.auto_html_icon(6) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>'+ '第 ' + simple_wittness_lists.length + ' 天'+ '</strong></span></p>'+ this.auto_html_icon(0);

                //基本阅享见证
                this.wittness_html += '<p style="margin-top: 1em; margin-bottom: 1em; text-indent: 2em; color: rgb(0, 176, 80); line-height: 2em;"><span style="color: #7F7F7F; font-family: 微软雅黑;">' + simple_wittness_lists[simple_wittness_lists.length - 1][1] +'，阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，' + 'P.'+simple_wittness_lists[simple_wittness_lists.length - 1][2] + '—' + simple_wittness_lists[simple_wittness_lists.length - 1][3]+ '，特此见证，感谢坚持读！（QQ群：16805139） '+'</span></p>';

                wittness_plain += simple_wittness_lists[simple_wittness_lists.length - 1][1]+'，阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，' + 'P.'+simple_wittness_lists[simple_wittness_lists.length - 1][2] + '—' + simple_wittness_lists[simple_wittness_lists.length - 1][3]+ '，特此见证，感谢坚持读！（QQ群：16805139） '+'@@@';

            }else if(simple_single)
            {
            //当阅享见证的页码是单页的情况，2016年5月2日，悦读《在人间》，高尔基著李蟠译，光明日报出版社，2012年5月第1次印刷。我今天悦读P.152，感谢坚持读。
                simple_wittness_lists.push(simple_single);

                this.wittness_html += this.auto_html_icon(6) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>'+ '第 ' + simple_wittness_lists.length + ' 天'+ '</strong></span></p>'+ this.auto_html_icon(0);

                //基本阅享见证
                this.wittness_html += '<p style="margin-top: 1em; margin-bottom: 1em; text-indent: 2em; color: rgb(0, 176, 80); line-height: 2em;"><span style="color: #7F7F7F; font-family: 微软雅黑;">' + simple_wittness_lists[simple_wittness_lists.length - 1][1]+'，阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，' + 'P.'+simple_wittness_lists[simple_wittness_lists.length - 1][2]+ '，特此见证，感谢坚持读！（QQ群：16805139） '+'</span></p>';
                wittness_plain += simple_wittness_lists[simple_wittness_lists.length - 1][1]+'，阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，' + 'P.'+simple_wittness_lists[simple_wittness_lists.length - 1][2] + '，特此见证，感谢坚持读！（QQ群：16805139） '+'@@@';

            } else
            {
                //当基本阅享见证的格式不标准的时候，直接显示原来的阅享见证，不再提取见证日期和阅享页码。
                simple_wittness_lists.push(wittness_lists[i]);
                console.log(simple_wittness_lists.length);
                console.log(simple_wittness_lists);
                if( flag.length-2 >=0 ){
                    //从第二个阅享见证开始，如果上一个没有阅享见证阅享见证就不显示上边图片，如果有就显示上边图片。
                    var site = flag[flag.length-2];
                    if(wittness_lists[site + 1].match(/[\[【]\W+摘[录要][\[【]?/)|| wittness_lists[site + 1].match(/[\[【]\W+[(感悟)(后语)(心得)][\[【]?/)){

                        //当上一个阅享见证存在阅享见证，那么就显示上边，如果没有就不显示任何上边。
                        this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';

                    }

                }else
                    {
                    //第一个阅享见证的上边是默认要显示的。
                    this.wittness_html += this.auto_html_icon(6) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>第 '+ simple_wittness_lists.length +' 天</strong></span></p>'+ this.auto_html_icon(0);
                }
                //基本阅享见证
                this.wittness_html += '<p style="margin-top: 1em; margin-bottom: 1em; text-indent: 2em; color: rgb(0, 176, 80); line-height: 2em;"><span style="color: #7F7F7F; font-family: 微软雅黑;">' + simple_wittness_lists[simple_wittness_lists.length - 1]+ '</p>';
                wittness_plain += simple_wittness_lists[simple_wittness_lists.length - 1] +'@@@';
            }


        } else if (wittness_lists[i].match(/[\[【].+摘[录要][\]】]?/)) {
            console.log(wittness_lists[i].match(/[[【]\W+摘[录要][]】]?/));
            console.log('310【阅享见证-' + this.code_name + '摘录】');

            this.wittness_source.push(this.wittness_type[1], simple_wittness[simple_wittness.length - 1]);
            //    阅享见证，精彩摘录。
            wittness_plain += '【阅享见证-' + this.nick_name + '摘录】@@@';

            //精彩摘录
            this.wittness_html += this.auto_html_icon(7) + '<p style="text-align: center; line-height: 1em;"><span style="color: #00B050;font-family: 微软雅黑;">' + this.nick_name + '摘录</span></p>'+ this.auto_html_icon(0);



        } else if (wittness_lists[i].match(/[\[【].+[(感悟)(后语)(心得)][\]】]?/)) {

            console.log('【阅享见证-' + this.nick_name  + '感悟】');

            this.wittness_source.push(this.wittness_type[5], simple_wittness[simple_wittness.length - 1]);
            //    阅享见证，心得感悟。
            wittness_plain += '【阅享见证-' + this.nick_name + '感悟】@@@';


            //心得感悟
            this.wittness_html += this.auto_html_icon(8) + '<p style="text-align: center; line-height: 1em;"><span style="color: #00B050;font-family: 微软雅黑;">' + this.nick_name + '感悟</span></p>'+ this.auto_html_icon(0);

        } else if (wittness_lists[i].match(/\W+[Pp]+.\s*\d+/)) {


            var preface = wittness_lists[i].match(/[(序言)(前言)]+/);
            console.log('test'+ preface);
            //匹配——P.序1
            if (preface) {

                var page = wittness_lists[i].match(/[-—__―]+[Pp]+\s*[\.]*(\s*.+)/);

                page = page[1].replace(/[-_]/g, "～");
                page = page.replace(/\s+/g, '');
                page = page.replace(/\./g, '');

                this.wittness_html += '<p style="margin-top: 0em; margin-bottom: 1em; font-size: 16px; widows: auto; font-family: sans-serif; color: rgb(0, 176, 80);text-align: right;">' + '——P.' + page + '</p>';



                wittness_plain += page + '@@@';

                //    见证类型，摘录日期。


            } else {
                page = wittness_lists[i].match(/[-—____―]+[Pp]*\s*[\.]*\s*(\d+)(\s*[-—_至]+\s*[Pp]*\s*[\.]*\s*)(\d+)/);
                console.log('329'+page);
                if (page) {


                    //选择——P 2——P5等格式的页码。

                    console.log('——P.' + page[1].replace(/\s*/, '') + "～" + page[2]);
                    //显示页码

                    var page1 = page[1].replace(/\s*/, "");
                    var page2 = page[3];

                    this.wittness_html += '<p style="margin-top: 0em; margin-bottom: 1em; font-size: 16px; widows: auto; font-family: sans-serif; color: rgb(0, 176, 80);text-align: right;">' + '——P.' + page[1] + '～' + page[3] + '</p>';
                    wittness_plain += page[1] + '～' + page[3] + '@@@'


                    //    见证类型，摘录日期。


                } else {
                    var page = /[-—____―]+\s*[Pp]+\s*\.\s*(\d+)/.exec(wittness_lists[i]);
                    //选择——  P.12的页码格式
                    console.log('351'+page);
                    if (page) {
                        console.log('——P.' + page[1].replace(/\s*/, ''));
                        //显示页码
                        page = page[1].replace(/\s*/, '');

                        this.wittness_html += '<p style="margin-top: 0em; margin-bottom: 1em; font-size: 16px; widows: auto; font-family: sans-serif; color: rgb(0, 176, 80);text-align: right;">' + '——P.' + page + '</p>';
                        wittness_plain += page + '@@@';


                        //    见证类型，摘录日期。


                    }
                }

            }


        } else {

            this.wittness_html += '<p style="margin-top: 15px; margin-bottom: 15px; text-indent: 2em; line-height: 2em;">        <span style="color: #262626; font-family: 微软雅黑;">' + wittness_lists[i] + '</span></p>';

            wittness_plain += wittness_lists[i] + '@@@';
         }
    }
    this.wittness_html += this.auto_html_icon(9) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>'+ '阅享奖励'+ '</strong></span></p>'+ this.auto_html_icon(0);

    this.wittness_html += '<p id = "nuts" style="margin-top: 15px; margin-bottom: 15px;  line-height: 2em;font-family: 微软雅黑;text-align: center;color: #7F7F7F; "></p>';

    this.wittness_html += this.auto_html_icon(10) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>'+ '为啥转发？'+ '</strong></span></p>'+ this.auto_html_icon(0);

    forward_content_lists = this.ready_data(this.forward_content);
    for( var i = 0 ; i<=forward_content_lists.length-1; i++ ){

        this.wittness_html += '<p id = "nuts" style="margin-top: 15px; margin-bottom: 15px;  line-height: 2em;font-family: 微软雅黑;text-align: center;color: #7F7F7F; ">'+ forward_content_lists[i] +'</p>';

    }

    this.wittness_html += this.auto_html_icon(11) + '<p style=" padding: 10px; text-align: center; font-size: 16px; color: #ffffff; font-family: 微软雅黑; background-color: #00B050;"><strong>'+ '捐赠坚持读'+ '</strong></span></p>'+ this.auto_html_icon(0);
    donation_lists = this.ready_data(this.donation);

    for( var i = 0 ; i<= donation_lists.length-1; i++ ){

        if(i === 0){
            this.wittness_html += '<p id = "nuts" style="margin-top: 15px;text-indent: 2em; margin-bottom: 15px;  line-height: 2em;font-family: 微软雅黑;text-align: left;color: #7F7F7F; ">'+ donation_lists[i] +'</p>';

        }else{

            this.wittness_html += '<p id = "nuts" style="margin-top: 15px; margin-bottom: 15px;  line-height: 2em;font-family: 微软雅黑;text-align: center;color: #7F7F7F; ">'+ donation_lists[i] +'</p>';

        }


    }



    //document.getElementById("book").innerHTML = this.wittness_html;

    var regular = /.*?@@@/g;
//通过空格进行分割各个字段

    var wittness_plain = wittness_plain.match(regular);
    for(i = 0; i < wittness_plain.length; i++ ){
        wittness_plain[i] = wittness_plain[i].replace(/@{3}/g, "");
      }


    for(i = 0; i < wittness_plain.length; i++ ){

        //生成基本阅享见证数组
        if(wittness_plain[i].match(/\d{4}[年-]+\d+[月-]+\d+[日]+?/)){

            simple_wittness_lists_all.push(wittness_plain[i]);

            if(i <= wittness_plain.length-2 ){

                if (!wittness_plain[i+1].match(/[\[【]\W+摘录[\[【]?/)&& !wittness_plain[i+1].match(/[\[【]\W+感悟[\[【]?/)){
                    extract_wittness_lists.push('');
                    gnosis_wittness_lists.push('');

                }else
                {
                    var j = -1;
                    extract_wittness = '';
                    gnosis_wittness = '';
                    j = i+1;
                    while ( wittness_plain[j].match(/\d{4}\s*\年\s*\d+\s*\月\d+\s*\日?/) === null && j<= wittness_plain.length - 2){
                        if ( wittness_plain[j].match(/[[【]\W+摘录[】]]?/) ){
                            while (wittness_plain[j].match(/[\[【]\W+感悟[\[【]?/)=== null && j<= wittness_plain.length - 2)
                            {
                                j = j + 1;
                                console.log( j+ ':' +wittness_plain[j]);
                                extract_wittness += wittness_plain[j-1].replace(/\s*/g, "");


                                if (wittness_plain[j].match(/\d{4}\s*\年\s*\d+\s*\月\d+\s*\日?/ )){
                                    break;
                                }
                            }

                        }else  {

                            if (wittness_plain[j].match(/感悟/)){

                                while (  wittness_plain[j].match(/[[【]\W+摘录[]】]?/)  === null && j<= wittness_plain.length - 2 )
                                {

                                    console.log(j + ':' + wittness_plain[j]);
                                    gnosis_wittness += wittness_plain[j].replace(/\s*/g, "");
                                    j = j + 1 ;
                                    if (wittness_plain[j].match(/\d{4}\s*\年\s*\d+\s*\月\d+\s*\日?/ )){
                                        //extract_wittness_lists.push('');
                                        break;
                                    }

                                }
                                if(wittness_plain[j+1] === undefined){

                                    gnosis_wittness += wittness_plain[j].replace(/\s*/g, "");

                                }

                            }

                        }




                    }
                    extract_wittness_lists.push(extract_wittness);
                    gnosis_wittness_lists.push(gnosis_wittness);

                }
            }


        }





    }



    this.simple_wittness_lists_all = simple_wittness_lists_all;
    this.extract_wittness_lists = extract_wittness_lists;
    this.gnosis_wittness_lists = gnosis_wittness_lists;
    var total_nuts = this.total_nuts(simple_wittness_lists_all, extract_wittness_lists, gnosis_wittness_lists,27);

    console.log(simple_wittness_lists_all);
    console.log(extract_wittness_lists);
    console.log(gnosis_wittness_lists);

};


