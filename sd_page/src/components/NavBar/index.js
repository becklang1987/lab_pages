import React, { useState, useRef } from 'react';
import './index.scss';
import AAD from '../AAD/AAD';

const NavBarList = [
    { name: "Azure AD", id: 1 },
    { name: "Network", id: 2 },
    { name: "Systems", id: 3 }
];

const NavBar = () => {
    const [activeItemId, setActiveItemId] = useState(null);  // 初始化状态
    const timeoutRef = useRef(null); 

    // 点击处理函数，更新状态
    const handleMouseEvents = (id, isEnter) => {
        if (isEnter) {
            clearTimeout(timeoutRef.current);  // 清除现有的超时
            setActiveItemId(id);  // 更新状态为鼠标悬停的项的 id
        } else {
            timeoutRef.current = setTimeout(() => {
                setActiveItemId(null);  // 重置状态
            }, 100);  // 等待 0.5 秒后重置状态
        }
    };

    return (
        <div className="nav-bar-container">
        <div className="nav-bar">
            <div className="nav-title">Settings</div>
            <div className="nav-list">
                {NavBarList.map(item => (
                    <div
                        key={item.id}  // 设置唯一的 key
                        className={item.id === activeItemId ? 'nav-item active' : 'nav-item'}  // 条件渲染类名
                        onMouseOver={() => handleMouseEvents(item.id, true)} onMouseLeave={() => handleMouseEvents(item.id, false)}  // 绑定点击事件
                    >{item.name}</div>
                ))}
            </div>
        </div>
        <AAD />
        </div>

    );
};

export default NavBar;