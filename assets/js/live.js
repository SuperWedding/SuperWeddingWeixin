(function ($) {
  var mockList = [
    {
      text: '【17:00天气实况 特殊天气警报】【中型机场】雷暴的:海口(17:00 雷）、丽江(17:00 小雷雨）、 建议实时跟踪您的航班',
      img : '/assets/img/wedding/13.jpg',
      user: '西瓜吃光了'
    },
    {
      text: '“浮”云时代，你的线上财产安全么？】在现实中你绝不会接受的服务条款，在云存储的世界里变成合理的准则。一旦你同意了那些服务条款，好吧，可能你根本没读过，即使严格意义上你对拍摄的照片、视频和文字拥有版权，其实你已经放弃了很多应有的权利。',
      user: 'rockdai'
    },
    {
      text: 'heyhey2',
      user: '心宁气朗'
    },
    {
      text: '预售即将结束.由于工厂提前完成任务，店铺小二已经开始发货啦〜 //@崇子:预售开始，优惠活动为期一周，结束后3天内发货。此番女款为没腰身的舒适款。店铺地址',
      user: '2B码农死小马'
    },
    {
      text: '“浮”云时代，你的线上财产安全么？】在现实中你绝不会接受的服务条款，在云存储的世界里变成合理的准则。一旦你同意了那些服务条款，好吧，可能你根本没读过，即使严格意义上你对拍摄的照片、视频和文字拥有版权，其实你已经放弃了很多应有的权利。',
      img : '/assets/img/wedding/13.jpg',
      user: 'shadow'
    },
    {
      text: 'heyhey2',
      img: '/assets/img/wedding/13.jpg',
      user: '西瓜吃光了'
    },
    {
      text: '祝福',
      user: 'rockdai'
    }
  ];

  $(document).ready(function () {
    var roll = new RollShow($('.flows'));
    roll.updateMessges(mockList);
  });
})($);