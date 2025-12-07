// config.js
// 视觉炼金术 - 异地恋量子纠缠 SOP 标准化配置

const CONFIG = {
    // === 1. MQTT 连接配置 (核心连接层) ===
    mqtt: {
        host: "wss://a1b2861d.ala.cn-hangzhou.emqxsl.cn:8084/mqtt", // 注意：Web端必须使用 wss 协议 + 路径
        username: "ryan",
        password: "Ld7186630..",
        // 自动生成随机 ClientId，防止多开冲突
        clientId: "client_" + Math.random().toString(16).substr(2, 8) 
    },

    // === 2. 业务定制配置 (交付修改层) ===
    business: {
        // 核心频道：每次接单修改此处的随机后缀即可防止串线
        topic: "love/vip/2025_demo_001", 
        
        // 客户定制信息
        coupleName: "阿强 & 小美", 
        remoteBtnText: "❤ 发射爱心 ❤",
        
        // 状态文案
        statusText: "等待爱的信号...",
        successText: "收到爱心！(Love You)"
    },

    // === 3. 资源路径配置 (素材替换层) ===
    assets: {
        // 默认爱心图标，接单时替换为客户照片 URL
        photoUrl: "https://img.icons8.com/color/96/heart-suit.png", 
        bgmUrl: "" // 暂留空，后续可升级音频版
    }
};

// 导出配置供其他文件使用 (浏览器环境挂载到 window)
window.CONFIG = CONFIG;