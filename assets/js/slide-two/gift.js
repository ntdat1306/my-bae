$(function () {
    function randomNum(m, n) {
        m = parseInt(m)
        n = parseInt(n)
        return Math.floor(Math.random() * (n - m + 1)) + m
    }

    var clap = $('.clap')
    var gift = $('#gift')
    var confetti = $('.confetti-effect')

    clap.on('click', function () {
        confetti.css('transform', 'rotate(' + randomNum(0, 180) + 'deg)')

        confetti.children('.confetti-wrap').stop().addClass('expand')
        setTimeout(function () {
            confetti.children('.confetti-wrap').removeClass('expand')
        }, 700)

        if (e.target.id == 'gift' || e.target.id == 'clap') {
            $("#text-box").fadeIn("slow");
        }
    })
})
