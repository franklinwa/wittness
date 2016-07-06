/**
 * Created by liuwenju on 2016/6/3.
 */
function Wittness( book, code_name, nick_name, wittness_declaration, wittness_content ){

    this.book = book;
    this.code_name = code_name;
    this.nick_name = nick_name;
    this.wittness_declaration = wittness_declaration;
    this.wittness_content = wittness_content;
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



Wittness.prototype.auto_bulid = function() {

    var simple_wittness_lists_all = [];
    var simple_wittness_lists = [];
    var simple_wittness = [];
    var extract_wittness = '';
    var gnosis_wittness = [];
    var extract_wittness_lists = [];
    var gnosis_wittness_lists = [];
    var page_wittness = [];
    var wittness_plain = '';



    var regular = /.*?@@@/g;
//通过空格进行分割各个字段

    var wittness_lists = this.wittness_content.match(regular);

    console.log(wittness_lists.length);

    for (i = 0; i < wittness_lists.length; i++) {
        wittness_lists[i] = wittness_lists[i].replace(/@{3}/g, "");

    }


    this.wittness_html += '<p style="font-size: 16px; line-height: 4em; text-align: center;"><strong>' + this.code_name + '</strong></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;text-align: center;"><img data-s="300,640" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSSDfXULwDCS67a2c4wZ5NKmwyQ4bMHZiaNv7455KEM0nGup4PPxsGRKw/0?wx_fmt=png" data-ratio="0.49430523917995445" data-w="439" style="margin: 0px; padding: 0px;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSIgU9P1FhJq8KJRsicku0ebosajKGvibucQmCyLzsyzQibyfbHZ5UPLribQ/0?wx_fmt=png" data-ratio="0.06175771971496437" data-w="421" style="margin: 0px; padding: 0px; float: none;"/>    </p>';


    this.wittness_html += '<p style="font-size: 16px; line-height: 2em; text-align: center;color: rgb(0, 176, 80)"><strong>' + this.wittness_declaration + '</strong></p><p style="font-size: 16px; line-height: 4em; text-align: right;">' + '——' + this.code_name + '——' + '</p>';


//阅享见证内容
//书籍介绍
    console.log(wittness_lists[0]);
    this.wittness_html += '<p style="font-size: 16px; line-height: 25.6px; text-align: center;"><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="margin: 0px; padding: 0px; float: right; width: auto !important; visibility: visible !important;"/><br style="margin: 0px; padding: 0px;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em; text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHibc8Uiaw7SiaGz7LMVDw14tzebricLS7XR5zI61w8zVFFpsOUSzTOf4QZw/640?" style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05952380952380952" data-w="420" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSduphnialBtuxUia0lUua7wO562jv0Gux8DlSIpkWU376OnibE97uY0JrA/640?" style="margin: 0px; padding: 0px; float: none; width: auto !important; visibility: visible !important;"/></p>';


    this.wittness_html += '<p style="margin-top: 15px; margin-bottom: 15px; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 2em; line-height: 2em;"><span style="margin: 0px; padding: 0px; font-family: 宋体; color: rgb(89, 89, 89);">' + wittness_lists[0] + '</span></p>';

//坚持读广告

    this.wittness_html += '<p style="margin-top: 2em; margin-bottom: 2em; font-size: 16px; widows: auto; font-family:sans-serif; text-indent: 2em; line-height: 2em;color: rgb(0, 176, 80);">不喜欢读书但想读书的朋友，想读书但坚持不了的朋友，想让阅读更享受的朋友可以加入公益坚持读群:16805139，坚持读微信订阅号:jianchidu。</p><p style="margin-top: 2em; margin-bottom: 2em; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 2em; line-height: 2em;color: rgb(112, 48, 160);">加入微群,有红包获得，每月的坚持读阅享见证日都会发坚持读祝福红包….如何加入详见QQ群和订阅号。</p>';

//坚持读评价

    this.wittness_html += '<p style="margin-top: 2em; margin-bottom: 2em; font-size: 16px; widows: auto; font-family:sans-serif; text-indent: 2em; line-height: 2em;"><strong style="color: red;">' + '坚持读评价：' + '</strong>' + wittness_lists[2]  + '</p>';


    var flag = [];
//循环生成阅享见证内容
    for (var i = 3; i < wittness_lists.length; i++) {

        if (wittness_lists[i].match(/\d{4}\s*\年\s*\d+\s*\月\d+\s*\日?/)) {

            flag.push(i);
            if( flag.length - 1 === 0){

                //阅享计划上边
                this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="margin: 0px; padding: 0px; text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHKqcFegfHatfYicibtEgXLNTbG9ib90EztHsLfsGBNIicx68pFRUofoz7TQ/640?" style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p><p><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDsoFwwbwpOhLrfKFfC0PSnAQxaQUXlibu51gJotCpLBeBmh6rd325icQ/640?" style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';

                //阅享计划
                this.wittness_html += '<p style="margin-top: 1em; margin-bottom: 1em; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 2em; line-height: 1.5em;color: rgb(0, 176, 80);">' + /(\d{4}[年-]*\d+[月-]*\d+[日]*)/.exec(wittness_lists[i])[1]+ ',开始阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，'+ '特此见证，感谢坚持读！（QQ群：16805139） '+'</p>';

            }

            var simple = /(\d{4}[年-]*\d+[月-]*\d+[日]*)(?:.*[pP]\s*[\.]*\s*)(\d+)\s*[-—－]\s*[Pp]*[\.]*(\d+)/.exec(wittness_lists[i]);
            var simple_single = /(\d{4}[年-]*\d+[月-]*\d+[日]*)(?:.*[pP]\s*[\.]*\s*)(\d+)/.exec(wittness_lists[i]);
            //从匹配的基本阅享见证中摘取见证日期、起始页码、主题等内容。

            if( simple){
                //当阅享见证的页码是单页的情况，2016年5月3日，阅享《在人间》  高尔基著，李蟠译  光明日报出版社，2012年5月第2版，2012年5月第1次印刷，P.153—160，特此见证，感谢坚持读！
                simple_wittness_lists.push(simple);


                if( flag.length-1 > 0 ){

                    var site = flag[flag.length-2];
                    if(wittness_lists[site + 1].match(/[\[【]\W+摘录[\[【]?/)|| wittness_lists[site + 1].match(/[\[【]\W+感悟[\[【]?/)) {
                        //阅享见证上边
                        this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';
                    }else{

                    }
                }else{

                    //阅享见证上边
                    this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/>111</p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';
                }






                //console.log(flag[flag.length-1] < i + 1);
                //if(false ){
                //    //阅享见证上边
                //    this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/>111</p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';
                //
                //    //如果没有阅享见证就不用上边边的修改图片了。
                //}else
                //{
                //    var site = flag[flag.length-2];
                //    if(wittness_lists[site + 1].match(/[\[【]\W+摘录[\[【]?/)|| wittness_lists[site + 1].match(/[\[【]\W+感悟[\[【]?/)) {
                //         //阅享见证上边
                //        this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';
                //    }else{
                //
                //    }
                //
                //}

                //基本阅享见证
                this.wittness_html += '<p style="margin-top: 1em; margin-bottom: 1em; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 2em; line-height: 1.5em;color: rgb(0, 176, 80);">' + simple_wittness_lists[simple_wittness_lists.length - 1][1]+'，阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，' + 'P.'+simple_wittness_lists[simple_wittness_lists.length - 1][2] + '—' + simple_wittness_lists[simple_wittness_lists.length - 1][3]+ '，特此见证，感谢坚持读！（QQ群：16805139） '+'</p>';
                wittness_plain += simple_wittness_lists[simple_wittness_lists.length - 1][1]+'，阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，' + 'P.'+simple_wittness_lists[simple_wittness_lists.length - 1][2] + '—' + simple_wittness_lists[simple_wittness_lists.length - 1][3]+ '，特此见证，感谢坚持读！（QQ群：16805139） '+'@@@';

            }else if(simple_single)
            {
            //当阅享见证的页码是单页的情况，2016年5月2日，悦读《在人间》，高尔基著李蟠译，光明日报出版社，2012年5月第1次印刷。我今天悦读P.152，感谢坚持读。
                simple_wittness_lists.push(simple_single);

                if(flag[flag.length-1] < i + 1  ){
                    //从第二个阅享见证开始，如果上一个没有阅享见证阅享见证就不显示上边图片，如果有就显示上边图片。
                    this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';

                    //如果没有阅享见证就不用上边边的修改图片了。
                }else{
                    var site = flag[flag.length-2];
                    if(wittness_lists[site + 1].match(/[\[【]\W+摘录[\[【]?/)|| wittness_lists[site + 1].match(/[\[【]\W+感悟[\[【]?/)) {
                        //当上一个阅享见证存在阅享见证，那么就显示上边，如果没有就不显示任何上边。
                        this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';
                    }
                }

                //基本阅享见证
                this.wittness_html += '<p style="margin-top: 1em; margin-bottom: 1em; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 2em; line-height: 1.5em;color: rgb(0, 176, 80);">' + simple_wittness_lists[simple_wittness_lists.length - 1][1]+'，阅享《'+ this.book.bookname +'》'+ ' '+ this.book.author + ' '+ this.book.press + '，'+ this.book.date_press1 + '，' + 'P.'+simple_wittness_lists[simple_wittness_lists.length - 1][2]+ '，特此见证，感谢坚持读！（QQ群：16805139） '+'</p>';
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
                    if(wittness_lists[site + 1].match(/[\[【]\W+摘录[\[【]?/)|| wittness_lists[site + 1].match(/[\[【]\W+感悟[\[【]?/)){

                        //当上一个阅享见证存在阅享见证，那么就显示上边，如果没有就不显示任何上边。
                        this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';

                    }

                }else
                    {
                    //第一个阅享见证的上边是默认要显示的。
                    this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p><p style="text-align: center;"><img data-s="300,640" data-ratio="0.29157175398633256" data-w="439" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjQVsicvOtMIqrF8EhM9z4dHbH6yOay7fo02jzrQmDvMRO7RibLzGyLvBFBxVxSo4UwvIAZicLt9icicLw/640?"  style=" width: auto !important; visibility: visible !important;"/></p><p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSa05VibzDczoJVvYEJBeJ0V2TRrzvNiblFXGy95wAtypZibBoCmmGIATww/640?"  style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';
                }
                //基本阅享见证
                this.wittness_html += '<p style="margin-top: 1em; margin-bottom: 1em; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 2em; line-height: 2em;color: rgb(0, 176, 80);">' + simple_wittness_lists[simple_wittness_lists.length - 1]+ '</p>';
                wittness_plain += simple_wittness_lists[simple_wittness_lists.length - 1] +'@@@';
            }

            if( (wittness_lists[i+1].match(/[\[【]\W+摘录[\[【]?/) || wittness_lists[i+1].match(/[\[【]\W+感悟[\[【]?/))&& i<= wittness_lists.length){
                //如果有阅享见证就显示下边的图片
                this.wittness_html += '<p><img data-s="300,640" data-ratio="0.9230769230769231" data-w="26" src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSDKQPiaxNG0SRHgWgibibbdcXdeZVAWF47jX0xjuVicjphYewoQj69Sic7vg/640?" style="text-align: right; float: right; width: auto !important; visibility: visible !important;"/></p>          <p style="font-size: 16px; line-height: 1.5em; min-height: 1em;"><img data-s="300,640" data-ratio="0.05463182897862233" data-w="421"src="https://mmbiz.qlogo.cn/mmbiz/wLia9bw4ntcjFbWdiaCanXV2G6DmuYYqicSZOyhhibENUsbvDRbyM2fTEBY45libciaS5YIia03H6tciauD9UnzdQDOreg/640?" style="margin: 0px; padding: 0px; width: auto !important; visibility: visible !important;"/></p>';
            }else{
                //如果没有阅享见证就不用下边的修改图片了。
            }

        } else if (wittness_lists[i].match(/[\[【]\W+摘录[\[【]?/)) {

            console.log('【阅享见证-' + this.code_name + '摘录】');

            this.wittness_source.push(this.wittness_type[1], simple_wittness[simple_wittness.length - 1]);
            //    阅享见证，精彩摘录。
            wittness_plain += '【阅享见证-' + this.nick_name + '摘录】@@@';

            //精彩摘录
            this.wittness_html += '<p style="margin-top: 0em; margin-bottom: 0em; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 0em; line-height: 3em;color: rgb(0, 176, 80)">' + '【阅享见证-' + this.nick_name + '摘录】' + '</p>';

        } else if (wittness_lists[i].match(/[\[【]\W+感悟[\[【]?/)) {

            console.log('【阅享见证-' + this.nick_name  + '感悟】');

            this.wittness_source.push(this.wittness_type[5], simple_wittness[simple_wittness.length - 1]);
            //    阅享见证，心得感悟。
            wittness_plain += '【阅享见证-' + this.nick_name + '感悟】@@@';


            //心得感悟
            this.wittness_html += '<p style="margin-top: 0em; margin-bottom: 0em; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 0em; line-height: 3em;color: rgb(0, 176, 80)">' + '【阅享见证-' + this.nick_name + '感悟】' + '</p>';

        } else if (wittness_lists[i].match(/\W+[Pp]/)) {


            var preface = wittness_lists[i].match(/[序前]/);
            console.log(preface);
            //匹配——P.序1
            if (preface) {

                var page = wittness_lists[i].match(/[-—]+[Pp]+\s*[\.]*(\s*.+)/);

                page = page[1].replace(/[-_]/g, "～");
                page = page.replace(/\s+/g, '');
                page = page.replace(/\./g, '');

                this.wittness_html += '<p style="margin-top: 0em; margin-bottom: 1em; font-size: 16px; widows: auto; font-family: sans-serif; color: rgb(0, 176, 80);text-align: right;">' + '——P.' + page + '</p>';

                wittness_plain += page + '@@@';

                //    见证类型，摘录日期。


            } else {
                page = wittness_lists[i].match(/[-—]+[Pp]*\s*[\.]*\s*(\d+)(\s*[-—至]+\s*[Pp]*\s*[\.]*\s*)(\d+)/);
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
                    var page = /[-—]+\s*[Pp][\s]*[\.]*[\s]*(\d+)/.exec(wittness_lists[i]);
                    //选择——  P.12的页码格式
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

            this.wittness_html += '<p style="margin-top: 0em; margin-bottom: 0em; font-size: 16px; widows: auto; font-family: sans-serif; text-indent: 2em; line-height: 2em;color: rgb(89, 89, 89);">' + wittness_lists[i] + '</p>';

            wittness_plain += wittness_lists[i] + '@@@';
         }
    }


    //document.getElementById("book").innerHTML = this.wittness_html;


    var wittness_plain = wittness_plain.match(regular);
    for(i = 0; i < wittness_plain.length; i++ ){
        wittness_plain[i] = wittness_plain[i].replace(/@{3}/g, "");
      }


    for(i = 0; i < wittness_plain.length; i++ ){

        //生成基本阅享见证数组
        if(wittness_plain[i].match(/\d{4}[年-]+\d+[月-]+\d+[日]+?/)){

            simple_wittness_lists_all.push(wittness_plain[i]);

            if (!wittness_plain[i+1].match(/[\[【]\W+摘录[\[【]?/)&& !wittness_plain[i+1].match(/[\[【]\W+感悟[\[【]?/)){
                extract_wittness_lists.push('');
                gnosis_wittness_lists.push('');

            }else {
                var j = -1;
                extract_wittness = '';
                gnosis_wittness = '';
                j = i+1;
                while ( wittness_plain[j].match(/\d{4}\s*\年\s*\d+\s*\月\d+\s*\日?/) === null && j<= wittness_plain.length - 2){
                    if ( wittness_plain[j].match(/[\[【]\W+摘录[\[【]?/) ){
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

                            while (  wittness_plain[j].match(/[\[【]\W+摘录[\[【]?/)  === null && j<= wittness_plain.length - 2 )
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



    this.simple_wittness_lists_all = simple_wittness_lists_all;
    this.extract_wittness_lists = extract_wittness_lists;
    this.gnosis_wittness_lists = gnosis_wittness_lists;
    var total_nuts = this.total_nuts(simple_wittness_lists_all, extract_wittness_lists, gnosis_wittness_lists,27);

    console.log(simple_wittness_lists_all);
    console.log(extract_wittness_lists);
    console.log(gnosis_wittness_lists);

};


