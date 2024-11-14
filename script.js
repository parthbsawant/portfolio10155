document.querySelector('a[href="#professional-summary"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#professional-summary').scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
    });
});
