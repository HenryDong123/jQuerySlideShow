let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0
cloneSlides()
$slides.css({transform:'translateX(-450px)'})
bindEvents()
$('#previous').on('click', function () {
    slideTo(current-1)
})
$('#next').on('click', function () {
    slideTo(current+1)
})

let timer = setInterval(function () {
    slideTo(current+1)
},2500)

$('#container').on('mouseenter', function () {
    window.clearInterval(timer)
})
$('#container').on('mouseleave', function () {
    timer =setInterval(function () {
        slideTo(current+1)
    },2500)
})



////
function cloneSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}
function bindEvents(){
    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        slideTo(index)
    })

}
function slideTo(index) {
    if(index> $buttons.length-1){
        index = 0
    }else if(index<0){
        index = $buttons.length-1
    }

    if (current === $buttons.length-1 && index ===0) {
        //最后一张到第一张
        $slides.css({transform:`translateX(${-($buttons.length +1) * 450}px)`})
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({transform: `translateX(${-(index+1) * 450}px)`})
                    .show()
            })

    }else if (current === 0 && index === $buttons.length-1) {
        //第一张到最后一张
        $slides.css({transform:`translateX(0px)`})
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({transform: `translateX(${-(index+1) * 450}px)`})
                    .show()
            })

    }else {
        $slides.css({transform:`translateX(${- (index+1) *450}px)`})
    }
    current = index

}