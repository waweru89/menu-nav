const $list = document.querySelectorAll('li');
const $indicator = document.querySelector('.indicator');

function activeLink() {

    $list.forEach((item) => {
        item.classList.remove('active');
    });

    
    this.classList.add('active');

    
    const activeIndex = Array.from($list).indexOf(this);
    const itemWidth = this.offsetWidth;
    const offsetX = itemWidth * activeIndex;
    $indicator.style.transform = `translateX(${offsetX}px)`;
}


$list.forEach(($li) => {
    $li.addEventListener('click', activeLink);
});
