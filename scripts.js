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

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 可以在这里添加其他页面初始化代码
    console.log('页面已加载完成');
}); 