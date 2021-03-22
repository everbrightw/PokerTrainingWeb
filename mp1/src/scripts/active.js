$(document).on('click', '#navbar li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})