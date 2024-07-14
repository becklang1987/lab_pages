# !/bin/bash
#!/bin/bash

# 定义 nginx 配置文件路径
CONFIG_FILE="/etc/nginx/nginx.conf"

# 运行 nginx -t 命令并捕获输出和返回码
OUTPUT=$(nginx -t 2>&1)
RET_CODE=$?

# 打印输出
echo "$OUTPUT"

# 根据返回码和输出内容判断结果
if [ $RET_CODE -eq 0 ]; then
    if echo "$OUTPUT" | grep -q 'syntax is ok' && echo "$OUTPUT" | grep -q 'test is successful'; then
        echo "Nginx configuration test passed. Restarting Nginx..."
        systemctl restart nginx
        if [ $? -eq 0 ]; then
            echo "Nginx has been successfully restarted."
        else
            echo "Failed to restart Nginx. Please check the systemctl status."
        fi
    else
        echo "Nginx configuration test did not pass. Check the output for more details."
    fi
else
    echo "Nginx configuration test failed. Check the output for syntax errors."
fi