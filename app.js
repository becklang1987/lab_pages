const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// 提供静态文件服务
app.use(express.static(__dirname));

// "catchall" 处理：对于所有其他请求，返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});