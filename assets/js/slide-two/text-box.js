$(document).click(function (e) {
    if (e.target.id == 'gift' || e.target.id == 'clap') {
        $("#text-box").fadeIn("slow");
    }
    else if (e.target.id != 'text-box' && !$('#text-box').find(e.target).length) {
        $('#text-box').hide()
    }
})
