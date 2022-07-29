window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    const menuToggle = document.body.querySelector('.menu-toggle');
    let scrollToTopVisible = false;

    menuToggle.addEventListener('click', event => {
        event.preventDefault(); //Loại bỏ hành vi mặc định
        sidebarWrapper.classList.toggle('active'); //Đảo trạng thái class active
        toggleMenuIcon(); //Đảo icon
    })


    function toggleMenuIcon() {
        const menuToggleBars = document.querySelector('.bi-list');
        const menuToggleTimes = document.querySelector('.bi-x');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('bi-list');
            menuToggleBars.classList.add('bi-x');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('bi-x');
            menuToggleTimes.classList.add('bi-list');
        }
    }

    // Scroll to top btn
    window.onscroll = function() {
        scrollFunc()
    };
    const scrollToTop = document.querySelector('.scroll-to-top');
    function scrollFunc() {
        if (document.documentElement.scrollTop > 100) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    }
    scrollToTop.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})
