(function ($) {
  function RollShow (ele) {
    this.init(ele);
  }

  RollShow.prototype.init = function (ele, options) {
    this.container = ele;
    this.maxRow = 3;
    this.timeDistance = 3000;
    this.msgCount = 0;
    this.msgHeight = (this.container.height() - 40) / this.maxRow - 60;
    this.msgWidth = this.container.width();
    this.imgMsgHeight = this.container.height() - 20 - 60;
    this.defaultSize = 12;
    this.userWidth = this.msgWidth * 0.1;
    this.userHeight = this.msgHeight * 0.9;
  };

  RollShow.prototype.showMessage =  function (msg, time) {
    var self = this;
    window.setTimeout(function () {
      var ifImg = !!msg.img;
      var fontSize = self.defaultSize;
      var msgWidth = self.msgWidth * 0.9 - 10 - 80;
      var imgMsgWidth = msgWidth * 0.5;
      var imgContentWidth = msgWidth * 0.49;

      var template = '<div class="flow" style="width:' + self.msgWidth + 'px;"><div class="avartar" style="width:' + self.userWidth + 'px;height:' + self.userHeight + 'px;"><span>' + msg.user + '</span></div><div class="message" id="msg_' + self.msgCount++ + '" style="height:' + (ifImg ? self.imgMsgHeight : self.msgHeight) + 'px;width:' + msgWidth + 'px;font-size:' + self.defaultSize + 'px;line-height:' + (fontSize * 1.2) + 'px;">';
      if (msg.img) {
        template += '<div class="img-content" style="height:' + (ifImg ? self.imgMsgHeight : self.msgHeight) + 'px;width:' + imgMsgWidth + 'px;"><img src="' + msg.img + '"/></div>';
      }
      template += '<div class="msg-content" style="' + (ifImg ? 'width:' + imgContentWidth + 'px;float:right;' : '') + '"><span>' + (msg.text || '') + '</span>';
      template += '</div></div><span class="cf"></span></div>';
      var $msg = $(template);
      self.container.prepend($msg);
      $msg.fadeIn(1000, function () {
        var span = $(this).find('.msg-content span');
        var contentWidth = span.width();
        var contentHeight = span.height();
        self.fitFontSize(span, contentWidth, contentHeight, (ifImg ? imgContentWidth : msgWidth), (ifImg ? self.imgMsgHeight : self.msgHeight), fontSize);

        var span2 = $(this).find('.avartar span');
        self.fitFontSize(span2, span2.width(), span2.height(), self.userWidth, self.userHeight, fontSize);

      });
    }, time);
  };

  RollShow.prototype.fitFontSize = function (ele, currentWidth, currentHeight, originWidth, originHeight, defaultSize) {
    var ratio = 1;
    var self = this;
    var size = 0;
    ratio = Math.sqrt(originWidth * originHeight / (currentWidth * currentHeight));
    size = defaultSize * ratio;
    if (originWidth < originHeight) {
      size -= size * 0.1;
      size = Math.min(originHeight / 4, size);
    }
    size = Math.min(originHeight / 1.2, size);
    ele.css({
      'font-size': size  + 'px',
      'line-height': (size * 1.2)+ 'px'
    });
  };

  RollShow.prototype.updateMessges = function (lists) {
    this.removeMessages();
    for (var i = 0; i < lists.length; i++) {
      this.showMessage(lists[i], i * this.timeDistance);
    }
  };

  RollShow.prototype.removeMessages = function () {
    if (this.msgCount > 10) {
      var msgs = this.container.find('.flow');
      for (var i = msgs.length; i >= 10; i--) {
        msgs.eq(i).remove();
      }
      this.msgCount = 10;
    }
  };

  window.RollShow = RollShow;
})($);