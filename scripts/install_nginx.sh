#!/bin/bash

# 检查用户是否具有 root 权限
if [ "$EUID" -ne 0 ]; then
  echo "请以 root 身份运行此脚本。"
  exit 1
fi

# 更新包列表并安装 Nginx
echo "更新软件包列表并安装 Nginx..."
apt-get update -y
apt-get install nginx -y

# 启动 Nginx 并设置为开机自启动
echo "启动 Nginx 并设置为开机自启动..."
systemctl start nginx
systemctl enable nginx

# 检查 Nginx 服务状态
echo "检查 Nginx 服务状态..."
systemctl status nginx

mkdir /data/www


# 完成
echo "Nginx 已成功安装并运行！"