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
    } else {
        element.classList.add('hidden');
        toggleBtn.textContent = '---- 显示更多 ----';
    }
}

// 照片轮播功能
let currentPhotoIndex = 0;
const photos = [
    'media/profile.jpg',
    'media/profile/photo1.jpg',
    'media/profile/photo3.jpg'
];

// 切换到下一张照片
function nextPhoto() {
    const profileImg = document.querySelector('.profile-img');
    if (!profileImg) return;
    
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    profileImg.src = photos[currentPhotoIndex];
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化照片轮播
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        // 每5秒切换一次照片
        setInterval(nextPhoto, 5000);
        
        // 点击照片也可以切换
        profileImg.addEventListener('click', nextPhoto);
    }
    
    console.log('页面已加载完成');
}); 