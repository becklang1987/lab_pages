#!/bin/bash

mkdir /etc/certs
cp kupotech.com.cn.pem /etc/certs/
cp kupotech.com.cn.key /etc/certs/
mkdir /home/ubuntu/data/www
cp sd_page /home/ubuntu/data/www/
mkdir /etc/nginx/custom_configs
cp nginx.cnf /etc/nginx/custom_configs/

CONFIG_FILE="/etc/nginx/nginx.conf"
INSERT_LINE="include /etc/nginx/custom_configs/nginx_custom.conf;"
SEARCHED_LINE="include /etc/nginx/sites-enabled/*;"

if ! grep -q "$INSERT_LINE" $CONFIG_FILE; then
    sed -i "/$SEARCHED_LINE/a \ include /etc/nginx/custom_configs/nginx_custom.conf;" $CONFIG_FILE
    echo "Added custom config to nginx.conf"
esle
    echo "Custom config already exists in nginx.conf"
fi