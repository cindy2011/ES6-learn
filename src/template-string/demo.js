"use strict";
(() => {
var data = {
    name: '新闻',
    news: {
        name: 'Bable升级到6啦',
        content: 'Bable在某年某月升级到6啦，哈哈哈'
    }
};
var html = `
<div class="box">
  <h2 class="box-header">${data.name}</h2>
  <div class="box-body">
     <h3>${data.news.name}<h3>
     <div>${data.news.content}</div>
  </div>
</div>
`;
console.log(html);

})();
