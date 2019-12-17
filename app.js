//      Modal    
const modal = document.querySelectorAll('.modal');
const closeBtn = document.querySelectorAll('.closeBtn');
const albums = document.querySelectorAll('.albums');
const termsbtn = document.querySelector('.btn-terms')
albums.forEach(albums => albums.addEventListener('click', openModal));
closeBtn.forEach(closeBtn => closeBtn.addEventListener('click', closeModal));
window.addEventListener('click', outsideClick);
termsbtn.addEventListener('click', openModalTerms);

function openModalTerms() {
    document.querySelector('.modal-terms').style.display = "grid";
}

function openModal(){
    if(this.classList.contains('albums-henkilo')){
        document.querySelector('.modal-henkilo').style.display = "grid";
    }
    if(this.classList.contains('albums-haat')){
        document.querySelector('.modal-haat').style.display = "grid";
    }
    if(this.classList.contains('albums-lapsi')){
        document.querySelector('.modal-lapsi').style.display = "grid";
    }
    if(this.classList.contains('albums-merkkipaiva')){
        document.querySelector('.modal-merkkipaiva').style.display = "grid";
    }           
}

function closeModal(){
    modal.forEach(modal =>modal.style.display = 'none');
}

function outsideClick(e){
    modal.forEach(modal => {
        if(e.target == modal){
            modal.style.display = 'none';
        }
    });  
}
//      ImageGallery
const current = document.querySelectorAll('.main-img img');
const imgs  = document.querySelectorAll('.imgs img');
const opacity = 0.4;
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    //reset opacity
    imgs.forEach(img => (img.style.opacity = 1));
    current.forEach(current => {
        // imgs source to clicked one
        current.src = e.target.src;
        //add fade-in class
        current.classList.add('fade-in');
        //remove fade-in
        setTimeout(() => current.classList.remove('fade-in'),300);
    });
    //change opacity 
    e.target.style.opacity = opacity;
}



