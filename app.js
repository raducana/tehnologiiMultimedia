const labs = document.querySelectorAll('#labsList li');
dropdownToggle = (e) => {
    const item = e.currentTarget;
    if ( !item.classList.contains('active') ) {

    document.querySelector('li.active') ?
        document.querySelector('li.active').classList.remove('active') : null;

    document.querySelector('.lab.active') ?
        document.querySelector('.lab.active').classList.remove('active') : null;

    item.classList.add('active');
    document.querySelector(`.lab[data-lab="${item.getAttribute('data-lab')}"]`).classList.add('active');

    }
}; 


(() => {
    [...labs].map(lab => {
        lab.addEventListener('click' , dropdownToggle)
    });
})()
