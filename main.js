let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')

$buttons.eq(0).on('click',function () {
    $slides.css({transform:'translateX(0px)'})
})

$buttons.eq(1).on('click', function () {
    $slides.css({transform: 'translateX(-450px)'})
})

$buttons.eq(2).on('click', function () {
    $slides.css({transform: 'translateX(-900px)'})
})