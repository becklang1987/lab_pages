#!/bin/bash

cp kupotech.com.cn.pem /etc/certs
cp kupotech.com.cn.key /etc/certs
cp -r sd_page /home/ubuntu/data/www
cp scripts/nginx_custom.conf /etc/nginx/custom_configs



sed -i "/sites-enabled/a \ include /etc/nginx/custom_configs/nginx_custom.conf;" /etc/nginx/nginx.conf
echo "Added custom config to nginx.conf"