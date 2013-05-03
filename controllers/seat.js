/*!
 * SuperWedding - controllers/seat.js
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('../config');
var logger = require('../common/log');
var utils = require('../common/utils');

var seats = [
  {
    desc: '主婚桌',
    members: [['闻啸', '新郎', '宁朗'], ['张茜', '新娘', '小仙仙', 'Claire', '小可', '酱酱'], ['闻涛', '大公猪', 'kj她男人', '新郎他弟'], ['张怡', '张小台', '怡姐', '新娘她妹', '小姨子'], ['徐佳娜', '嘎娜'], ['王雁', 'ella'], ['钟涛'], ['祝骏'], ['朱寅翼', '院长'], ['董其峰及两位宾客', '董其峰', '董团长', '董老师']]
  },
  {
    desc: '第1桌',
    members: [['陈晓雯', '晓雯'], ['陈雯瑶', '瑶瑶'], ['徐敏', '敏敏'], ['刘雨歆', '雨歆'], ['顾艳菁', '眼睛'], ['李锦笑', '笑笑'], ['黄喜雷', '阿雷'], ['毛伟泉', '小毛'], ['巴思', '巴老板', '戴汶倬'], ['米尔', '女侠', '忻程烨']]
  },
  {
    desc: '第2桌',
    members: [['王巧球'], ['梅川荣'], ['李易璇'], ['卞良洪'], ['冯珏莹', '冯珏莹夫妇', '阿德', '小旋风'], ['冯珏莹老公', '阿德老公'], ['丁静'], ['丁静男友'], ['田易'], ['沈同岑']]
  },
  {
    desc: '第3桌',
    members: [['章倩', '阿管', '章倩及男友'], ['章倩男友', '阿管男人'], ['郑银', '郑老师', '郑银及男友'], ['郑银男友'], ['徐润'], ['陶佳丽', '陶佳丽及男友'], ['陶佳丽男友'], ['蒋承智'], ['余晓璐', '余晓璐夫妇'], ['余晓璐老公']]
  },
  {
    desc: '第5桌',
    members: [['马小平全家', '马小平', '马宁文'], ['莫健芳'], ['陶承红'], ['宋英'], ['封佳琦'], ['夏必能']]
  },
  {
    desc: '第6桌',
    members: [['苏千', '袁锋', '苏胖子'], ['如茵', '任淑娟', '糖糖'], ['汤尧', '汤尧全家'], ['汤尧老婆'], ['映月', '一姐', '范明'], ['清笃', '廖凯', '清爷'], ['玄澄', '贾超', '大叔', '导演'], ['李姗姗', '李姗姗及男友', '姗姗'], ['李姗姗男友', '天猫哥'], ['朴灵', '屌丝'], ['朋春', '春哥', '张丞轩']]
  },
  {
    desc: '第7桌',
    members: [['吴一鸣', '兽人', '黑gay', '吴一鸣及女友'], ['姚治', '姚咪'], ['谢佳隽', '巴掌', '番薯'], ['傅海军'], ['谭海滨', '杀手'], ['童宇飞', 'PP'], ['易凡'], ['方文斌', '方文斌全家', '小方'], ['方文斌老婆']]
  },
  {
    desc: '第8桌',
    members: [['陈强', '强哥', '陈强全家'], ['陈强老婆'], ['倪李强', '倪李蛙', '倪李强全家'], ['倪李强老婆'], ['汤杰', '汤公公'], ['张一唯'], ['沈桦'], ['沈晓燕', '阿九'], ['孔洁', 'kj', '闻涛女友', '新郎弟媳', '闻涛喜欢的人', '闻涛初恋', '闻涛他女人', '大母猪', '闻家考察对象']]
  },
  {
    desc: '第9桌',
    members: [['莫炳耀', '外公', '新郎外公'], ['劳法良'], ['李嫣'], ['俞焕荣'], ['李珊'], ['李骅章'], ['朱龙英'], ['李义章'], ['钟招英']]
  },
  {
    desc: '第10桌',
    members: [['不四', '何翊宇', '死马'], ['黄安琪', '安琪', '琪姐'], ['陈媛媛', '南扭扭', '帝妃'], ['米谜', '肖潇'], ['紫胤', '阿紫', '叶宽余'], ['荣蕊', '柳心妹妹', '阿紫女人'], ['柳莺', '吃货', '孙予加', '女仆'], ['剪巽', '郑新林', '剪老板'], ['弈轩', '赵志强'], ['凤吟', '张严明']]
  },
  {
    desc: '第11桌',
    members: [['离哲', '占超群', '高富帅'], ['知秋', '秋哥', '秋秋', '崔志伟'], ['刘芬', '刘芬全家'], ['刘芬老公'], ['云古','阮磊'], ['清茗'], ['浅夏', '郑琳', '小夏夏'], ['矩贤', '张浩然', '水冰月'], ['末凡', '李哲', '末凡及女友'], ['末凡女友']]
  },
  {
    desc: '第12桌',
    members: [['姚清', '阿牛'], ['吴佳彪', '吴佳彪及女友', '寝室长'], ['吴佳彪女友'], ['邵剑锋', '牛头'], ['余燕青', '小鱼', '牛夫人'], ['杨根', '阿根', '小唬男'], ['张旦', '旦旦', '蛋蛋'], ['庞爱华', 'PP'], ['王震', '王大帅', '理学院第二帅']]
  },
  {
    desc: '第15桌',
    members: [['姜森森全家', '姜森森'], ['傅张根'], ['李莉'], ['高磊'], ['傅蓉', '小姐姐'], ['高子阳', '阳阳'], ['傅子易', '易易']]
  },
  {
    desc: '第16桌',
    members: [['任保萱', '外婆', '新郎外婆'], ['任保藩', '上海舅公'], ['徐伟'], ['任保卫'], ['张威'], ['任保建'], ['任俊全家', '任俊', '任俊舅舅'], ['张鹏辉全家', '张鹏辉' , '张鹏辉舅舅']]
  },
  {
    desc: '第17桌',
    members: [['叶敏夫妇', '叶敏'], ['黄峰夫妇', '黄峰'], ['惠秀琴夫妇', '惠秀琴'], ['张铭夫妇', '张铭'], ['金中伟'], ['叶子青']]
  },
  {
    desc: '第18桌',
    members: [['蔡建潮'], ['张国兴'], ['陈春龙'], ['张国强'], ['蔡建月'], ['张朝生'], ['阮跃卿'], ['阮跃根'], ['许云枫'], ['宋雁民全家', '宋雁民']]
  },
  {
    desc: '第19桌',
    members: [['张爱琴'], ['俞惠琴'], ['张爱珍'], ['吴洲颖'], ['吴冉悦'], ['陈林妹'], ['吴明达'], ['曾小红全家', '曾小红']]
  },
  {
    desc: '第20桌',
    members: [['闻小犇'], ['狄慧燕'], ['曹磊'], ['杜剑力'], ['杜睿晨'], ['曹卉'], ['卢天奇'], ['王晖'], ['陈跃梅'], ['王晟昊']]
  },
  {
    desc: '第21桌',
    members: [['曹景蕰'], ['曹景华'], ['许淑华'], ['苏艳华'], ['闻文元'], ['莫健华'], ['李玉华'], ['李露萍'], ['闻文龙'], ['黄玲儿']]
  },
  {
    desc: '第22桌',
    members: [['郭初民夫妇', '郭初民'], ['方国伟夫妇', '方国伟'], ['高明夫妇', '高明'], ['钟玮夫妇', '钟玮'], ['李修宝夫妇', '李修宝'], ['白家祯夫妇', '白家祯'], ['康云祥'], ['吕康']]
  },
  {
    desc: '第23桌',
    members: [['裘春花'], ['邢爱珠'], ['忠跃飞'], ['宋法'], ['吴纪祥'], ['裘文旗'], ['董红旗'], ['李平'], ['李秀兰'], ['蒋伟国']]
  },
  {
    desc: '第25桌',
    members: [['张帆'], ['蔡钺奇'], ['阮超'], ['阮勇'], ['阮亮'], ['张云松'], ['郑鹏'], ['阿平'], ['谢桂香'], ['倪慧锋']]
  },
  {
    desc: '第26桌',
    members: [['闻文龙'], ['黄玲儿'], ['钟玉昌'], ['闻文娟'], ['闻文虎'], ['施杏珠'], ['李向农'], ['胡琴梅'], ['闻一鸣'], ['包艳秋'], ['闻思诺']]
  },
 {
    desc: '第27桌',
    members: [['闻文英'], ['吕水清'], ['闻文彪'], ['许雪芬'], ['曹明'], ['国伟'], ['徐天标全家'], ['闻宝'], ['闻乐']]
  },
  {
    desc: '第28桌',
    members: [['朱红卫'], ['陆惠珍全家', '陆惠珍'], ['戴一晖夫妇', '戴一晖'], ['钱囯强夫妇', '钱囯强'], ['傅仲亮夫妇', '傅仲亮']]
  },
  {
    desc: '第29桌',
    members: [['曹永葆'], ['吴旭'], ['朱理'], ['林争珊'], ['邓江江'], ['吴长穹'], ['朱整卫夫妇', '朱整卫']]
  },
  {
    desc: '第30桌',
    members: [['徐建发夫妇'], ['张丽华'], ['陈惠来'], ['沈菁'], ['夏威'], ['王新'], ['范志平'], ['朱竹行'], ['朱园斌'], ['张怡'], ['龚新彦']]
  },
  {
    desc: '第31桌',
    members: [['闻雷'], ['黄立英'], ['余俶华'], ['钟耘'], ['陈勇'], ['闻玉'], ['闻霞'], ['闻玥'], ['余钟亮'], ['金晶'],  ['陈悠卡']]
  },
  {
    desc: '第32桌',
    members: [['季忠民'], ['吴莹'], ['陈永清'], ['杨银香'], ['胡卫民'], ['程丽红'], ['章卫富'], ['胡卫红']]
  },
  {
    desc: '第33桌',
    members: [['周海萍'], ['丁一凡'], ['葛春敏'], ['陈鸿园'], ['王庆怡'], ['黄翔'], ['徐镇'], ['陈洪'], ['聂绍林'], ['许小平']]
  },
  {
    desc: '第35桌',
    members: [['吴报建'], ['赵秀英'], ['吴璜'], ['洪林'], ['韩秀敏'], ['李静'], ['骆勤'], ['胡爱娟'], ['陈萍'], ['俞仲良']]
  },
  {
    desc: '第36桌',
    members: [['连勇'], ['李伟'], ['崔文清'], ['陈道虎'], ['咸青元'], ['朱久余'], ['洪智雄'], ['俞伟琴']]
  },
];

exports.handle = function (message, req, res) {
  var content = (message.Content || '').trim();
  var name = (content.substring(1)).split(' ')[0];
  var found = [];
  for (var i = 0, l = seats.length; i < l; i++) {
    var members = utils.flatten(seats[i].members);
    if (members.indexOf(name) >= 0) {
      found.push(seats[i]);
    }
  }
  if (found.length === 0) {
    res.reply('抱歉，没有找到「' + name + '」的座位，请确认输入是否正确。');
    return;
  }
  if (found.length === 1) {
    res.reply('「' + name + '」的座位在' + found[0].desc + '：' + utils.formatMembers(found[0].members) + '。');
    return;
  }
  var text = [];
  for (var i = 0, l = found.length; i < l; i++) {
    text.push(found[i].desc + '：' + utils.formatMembers(found[i].members));
  }
  text = text.join('；');
  res.reply('找到' + found.length + '位叫「' + name + '」的宾客。分别为' + text + '。');
};
