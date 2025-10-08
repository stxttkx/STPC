function openapp(appname,task){
    // 为每个div定义多个HTML内容选项
    const contentOptions = {
        about: [
            `<div class=\"app-head\">关于</div><iframe href=\"app/about.html?t=intro\"></iframe>`,
            `<div class=\"app-head\"关于</div><iframe href=\"app/about.html?t=updatelogs\"></iframe>`,
        ],
        browser: [
            ``,
            ``,
            ``,
            ``
        ],
            explorer: [
                ``,
                ``,
                ``,
                ``
            ]
        };
        
        // 记录每个div当前显示的内容索引
        let currentIndex = {
            content1: 0,
            content2: 0,
            content3: 0
        };
        
        // 获取按钮和div元素
        const aboutbtn = document.getElementById('about-button');
        const browserbtn = document.getElementById('browser-button');
        const explorerbtn = document.getElementById('explorer-button');
        const aboutContent = document.getElementById('about');
        const browserContent = document.getElementById('browser');
        const explorerContent = document.getElementById('explorer');

        // 切换内容的函数 - 使用innerHTML而不是textContent
        function changeContent(contentId, element) {
            // 增加索引，如果超过数组长度则回到0
            currentIndex[contentId] = (currentIndex[contentId] + 1) % contentOptions[contentId].length;
            
            // 更新内容 - 使用innerHTML来支持HTML标签
            element.innerHTML = contentOptions[contentId][currentIndex[contentId]];
            
            // 添加简单的动画效果
            //element.style.opacity = 0;
            //setTimeout(() => {
            //    element.style.opacity = 1;
            //}, 150);
        }
        
        // 为按钮添加点击事件监听器
        aboutbtn.addEventListener('click', () => changeContent('about', aboutContent));
        browserbtn.addEventListener('click', () => changeContent('browser', browserContent));
        explorerbtn.addEventListener('click', () => changeContent('explorer', explorerContent));

}