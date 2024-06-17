var header = document.getElementById('header')
var boxMenuMobile = document.getElementById('box-menu-mobile')
boxMenuMobile.onclick = function () {
    var isOpen = header.clientHeight === 31;
    if (isClosed) {
        header.style.height = 'auto';
    }else {
        header.style.height = '75';
    }
}