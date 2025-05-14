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

// 照片轮播功能
let currentPhotoIndex = 0;
const photos = [
    'media/images/profile1.jpg',
    'media/images/profile2.jpg',
    'media/images/profile3.jpg'
];

// 切换到下一张照片
function nextPhoto() {
    const profileImg = document.querySelector('.profile-img');
    if (!profileImg) return;
    
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    profileImg.src = photos[currentPhotoIndex];
    console.log(`%c[SYSTEM] 切换到照片 ${currentPhotoIndex + 1}/${photos.length}`, 'color: #0984e3');
}

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
    
    // 初始化照片轮播
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        // 每5秒切换一次照片
        setInterval(nextPhoto, 5000);
        
        // 点击照片也可以切换
        profileImg.addEventListener('click', nextPhoto);
        console.log('%c[SYSTEM] 照片轮播功能已加载', 'color: #0984e3');
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