const navLink = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const section = document.querySelectorAll('section');
const menuIcon   = document.querySelector('#menu-icon');
const navbar   = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barBox = document.querySelector('.bar-box');

     header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
        
    }, 1100);
    
    navLink.forEach(link => {
        link.classList.remove('active');
    });

    barBox.classList.remove('active');
    setTimeout(() => {
        barBox.classList.add('active');
        
    }, 1100);

     section.forEach(section => {
        section.classList.remove('active');
    });

     menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
}

navLink.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                section[idx].classList.add('active');
            }, 110);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLink[0].classList.contains('active')) {
        activePage();

        navLink[0].classList.add('active');

        setTimeout(() => {
                section[0].classList.add('active');
            }, 110);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;
const totalSlides = 11;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    if (portfolioDetails[index]) {
        portfolioDetails[index].classList.add('active');
    }

    // Update tombol navigasi
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === totalSlides - 1);
};

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        activePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});

// Inisialisasi awal
activePortfolio();

function sendMail() {
  let user_name = document.getElementById("user_name").value;
  let user_email = document.getElementById("user_email").value;
  let message = document.getElementById("user_message").value;

  let parms = {
    user_name: user_name,
    user_email: user_email,
    user_message: message,
  };

  emailjs.send("service_gn9mkqo", "template_64dpvlh", parms)
    .then(function(response) {
      Swal.fire({
        title: "🎉 Sukses!",
        text: "Pesan kamu berhasil dikirim. Terima kasih sudah menghubungi saya!",
        icon: "success",
        confirmButtonText: "Kembali ke Beranda",
        customClass: {
          popup: 'swal-wide',
          title: 'swal-title-big',
          htmlContainer: 'swal-content-big',
          confirmButton: 'swal-button-big'
        }
      }).then(() => {
        window.location.href = "http://localhost:8080/personal/Portofolio-2/";
      });
    }, function(error) {
      Swal.fire({
        title: "❌ Gagal!",
        text: "Pesan gagal dikirim. Silakan coba lagi nanti.",
        icon: "error",
        confirmButtonText: "Coba Lagi",
        customClass: {
          popup: 'swal-wide',
          title: 'swal-title-big',
          htmlContainer: 'swal-content-big',
          confirmButton: 'swal-button-big'
        }
      });
    });
}

