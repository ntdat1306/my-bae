const expandBtns = document.querySelectorAll('.click-card-item span')

expandBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < expandBtns.length; i++) {
            if (i == index) {
                expandBtns[i].parentElement.classList.toggle('click-card-expand')
            } else {
                expandBtns[i].parentElement.classList.remove('click-card-expand')
            }
        }
    })
})
