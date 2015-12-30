"use strict";

(function () {
    var data = {
        name: '新闻',
        news: {
            name: 'Bable升级到6啦',
            content: 'Bable在某年某月升级到6啦，哈哈哈'
        }
    };
    var html = '\n<div class="box">\n  <h2 class="box-header">' + data.name + '</h2>\n  <div class="box-body">\n     <h3>' + data.news.name + '<h3>\n     <div>' + data.news.content + '</div>\n  </div>\n</div>\n';
    console.log(html);
})();
//# sourceMappingURL=demo.js.map
