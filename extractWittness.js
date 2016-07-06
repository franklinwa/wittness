/**
 * Created by liuwenju on 2016/5/29.
 */

/**
 * Created by liuwenju on 2016/5/14.
 */
function ExtractWittness( extractcontent, extractpage) {
    this.extracts = [];
    this.extractcontent = extractcontent;
    this.extractpage = extractpage;

};

ExtractWittness.prototype.addExtract = function(extract){
    this.extracts.push(extract);

    for(var i = 0; i <  this.extracts.length; i++){
        console.log(i + this.extracts[i].extractcontent + this.extracts[i].extractpage);


    }

   };
ExtractWittness.prototype.renderExtract = function(){
    var extractHtml = this.extractcontent;
    extractHtml += '</br>';
    extractHtml += '——P.';
    extractHtml += this.extractpage;
    console.log(  extractHtml );
    return  extractHtml;
};

ExtractWittness.prototype.addWittness = function( bookname,arr,fn ){


    var list = [];
    for(var i = 0; i < arr.length-1; i++){

        list[i] = fn(bookname,arr[i],arr[i+1]);

    }
    return list;

};

