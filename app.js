/**
 * Created by liuwenju on 2016/5/14.
 */
console.log('hellow app!');
var readplan = new ReadPlan();
var book1 = new Book("北京遇上西雅图之不二情书","薛晓路 / 焦华静 ",300,"现代出版社","每一秒的爱意都不能被浪费，电影里的意犹未尽全在书里。广受好评的国产爱情片《北京遇上西雅图之不二情书》原著小说，同步上市！");
var book2 = new Book("百年孤独","[哥伦比亚] 加西亚·马尔克斯 ",500," 南海出版公司","《百年孤独》是魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪最重要的经典文学巨著之一。1982年加西亚•马尔克斯获得诺贝尔文学奖，奠定世界级文学大师的地位，很大程度上乃是凭借《百年孤独》的巨大影响。");
var book3 = new Book("活着","余华 ",200," 南海出版公司","地主少爷福贵嗜赌成性，终于赌光了家业一贫如洗，穷困之中的福贵因为母亲生病前去求医，没想到半路上被国民党部队抓了壮丁，后被解放军所俘虏，回到家乡他才知道母亲已经去世，妻子家珍含辛茹苦带大了一双儿女，但女儿不幸变成了聋哑人，儿子机灵活泼……然而，真正的悲剧从此才开始渐次上演，每读一页，都让我们止不住泪湿双眼，因为生命里难得的温情将被一次次死亡撕扯得粉碎，只剩得老了的福贵伴随着一头老牛在阳光下回忆。");

readplan.addPlan(book1);
readplan.addPlan(book2);
readplan.addPlan(book3);
var readPlanElement = document.getElementById("book");

readplan.renderInElement(readPlanElement);

var simplewittness = new SimpleWittness();
simplewittness.addWittness('马克吐温传',[0,1,2,3],simplewittness.renderWittness);
var extractwittness = new ExtractWittness('六章情绪1.情绪是什么？情绪是内心的感受经由身体表现出来的状态。情绪是生命里不可分割的一部分，从生理学的角度分析，情绪其实是大脑与身体的相互协调和推动所产生的现象。因此，一个正常的人，必然是有情绪的。', '23');
var extractwittness1 = new ExtractWittness('六章情绪1.情绪是什么？情绪是内心的感受经由身体表现出来的状态。情绪是生命里不可分割的一部分，从生理学的角度分析，情绪其实是大脑与身体的相互协调和推动所产生的现象。因此，一个正常的人，必然是有情绪的。', '23');
extractwittness.renderExtract();

extractwittness.addExtract(extractwittness1);
extractwittness.addExtract(extractwittness1);
extractwittness.addExtract(extractwittness1);
extractwittness.addExtract(extractwittness1);

