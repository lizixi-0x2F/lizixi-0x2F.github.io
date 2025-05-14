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
    
    console.log('%c[SYSTEM] 页面加载完成 | 李籽溪的极客空间', 'color: #fd79a8; font-weight: bold');
}); 