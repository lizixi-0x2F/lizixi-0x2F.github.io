/**
 * 切换显示/隐藏内容块的函数
 * @param {string} id - 需要切换显示/隐藏的元素ID
 */
function toggleBlock(id) {
    var element = document.getElementById(id);
    var toggleBtn = event.target;
    
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        toggleBtn.textContent = '---- 显示更少 ----';
        console.log(`%c[INFO] 展开内容块: ${id}`, 'color: #00b894');
    } else {
        element.classList.add('hidden');
        toggleBtn.textContent = '---- 显示更多 ----';
        console.log(`%c[INFO] 折叠内容块: ${id}`, 'color: #fd79a8');
    }
}

/**
 * 标签过滤功能
 * @param {string} tag - 需要过滤的标签
 */
function filterByTag(tag) {
    // 获取所有标签和项目/博客
    const tagItems = document.querySelectorAll('.tag-item');
    const projects = document.querySelectorAll('.project');
    const blogPosts = document.querySelectorAll('.blog-post');
    const items = [...projects, ...blogPosts]; // 合并项目和博客数组
    
    // 如果点击的是"全部"标签或者再次点击当前激活的标签，则显示所有项目/博客
    const clickedTag = event.target;
    const isAllTag = tag === 'all';
    const isActiveTag = clickedTag.classList.contains('active');
    
    if (isAllTag || isActiveTag) {
        // 移除所有标签的active状态
        tagItems.forEach(item => item.classList.remove('active'));
        
        // 如果点击的是"全部"标签，则激活它
        if (isAllTag) {
            document.querySelector('.tag-item[data-tag="all"]').classList.add('active');
        }
        
        // 显示所有项目/博客
        items.forEach(item => item.classList.remove('hidden-by-tag'));
        console.log('%c[TAGS] 显示所有项目/博客', 'color: #0984e3');
        return;
    }
    
    // 切换标签的active状态
    tagItems.forEach(item => item.classList.remove('active'));
    clickedTag.classList.add('active');
    
    // 过滤项目/博客
    items.forEach(item => {
        const itemTags = item.getAttribute('data-tags').split(',');
        if (itemTags.includes(tag)) {
            item.classList.remove('hidden-by-tag');
        } else {
            item.classList.add('hidden-by-tag');
        }
    });
    
    console.log(`%c[TAGS] 过滤标签: ${tag}`, 'color: #0984e3');
}

// 固定显示单张照片
const singlePhoto = 'media/images/profile1.jpg';

// 终端打字效果
function typeEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c[SYSTEM] 初始化个人主页...', 'color: #00b894; font-weight: bold');
    
    // 确保个人照片正确显示
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.src = singlePhoto;
        console.log('%c[SYSTEM] 个人照片已加载', 'color: #0984e3');
    }
    
    // 添加打字效果到主标题
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        const originalText = title.textContent;
        setTimeout(() => {
            typeEffect(title, originalText, 30);
        }, 500 + Math.random() * 1000);
    });
    
    // 初始化标签点击事件
    const tagItems = document.querySelectorAll('.tag-item');
    tagItems.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagName = this.getAttribute('data-tag');
            filterByTag(tagName);
        });
    });
    
    console.log('%c[SYSTEM] 页面加载完成 | 李籽溪的极客空间', 'color: #fd79a8; font-weight: bold');
}); 