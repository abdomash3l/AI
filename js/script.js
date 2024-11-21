  // تحديد جميع العناصر الداخلية للعنصر الأب الذي يحمل كلاس 'content'
  const parent = document.querySelector('.content1');
  const childDivs = parent.querySelectorAll('div');

  // إعداد مراقب باستخدام Intersection Observer API
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // إضافة كلاس 'show' عند ظهور العنصر
        observer.unobserve(entry.target); // وقف مراقبة العنصر بعد ظهوره
      }
    });
  });

  // مراقبة كل 'div' داخل '.content'
  childDivs.forEach(div => observer.observe(div));

  // =======================================
  // الحصول على الزر
const backToTopButton = document.getElementById('backToTop');

// استعراض التمرير
window.onscroll =function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// العودة إلى الأعلى عند النقر
backToTopButton.onclick =function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// ===================
document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
      particles: {
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: ["#ff00ff", "#00ff00", "#00ffff"]
          },
          shape: {
              type: "circle",
              stroke: {
                  width: 1
              }
          },
          opacity: {
              value: 0.8,
              random: true,
              anim: {
                  enable: true,
                  speed: 6,
                  opacity_min: 0.1,
                  sync: false
              }
          },
          size: {
              value: 3,
              random: true,
              anim: {
                  enable: true,
                  speed: 6,
                  size_min: 0.1,
                  sync: false
              }
          },
          line_linked: {
              enable: true,
              distance: 120,
              color: "#9900ff", /* لون الخطوط بين الجزيئات */
              opacity: 0.6,
              width: 1
          },
          move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
              }
          }
      },
      interactivity: {
          detect_on: "window",
          events: {
              onhover: {
                  enable: true,
                  mode: ["repulse", "grab"]
              },
              onclick: {
                  enable: true,
                  mode: "push"
              },
              resize: true
          },
          modes: {
              grab: {
                  distance: 150,
                  line_linked: {
                      opacity: 0.8
                  }
              },
              repulse: {
                  distance: 100,
                  duration: 0.4
              },
              push: {
                  particles_nb: 6
              }
          }
      },
      retina_detect: true
  });
});
// ================
// document.addEventListener('DOMContentLoaded', function () {
//   const menuItem = document.querySelector('.menu-item');
//   const megaMenu = document.querySelector('.mega-menu');

//   // مستمع النقر لفتح أو غلق الـ mega-menu عند النقر
//   menuItem.addEventListener('click', function (e) {
//     e.preventDefault();  // لمنع الرابط من العمل
    
//     // إذا كان الـ mega-menu مفتوحًا، يتم غلقه
//     if (menuItem.classList.contains('active')) {
//       menuItem.classList.remove('active');
//     } else {
//       // فتح الـ mega-menu
//       menuItem.classList.add('active');
//     }
//   });

//   // مستمع للنقر في أي مكان آخر على الصفحة لإغلاق الـ mega-menu
//   document.addEventListener('click', function (e) {
//     // إذا كان النقر في مكان غير الـ menu-item أو الـ mega-menu، نقوم بإغلاقها
//     if (!menuItem.contains(e.target)) {
//       menuItem.classList.remove('active');
//     }
//   });
// });
// ===========================
// document.addEventListener('DOMContentLoaded', function () {
//   const menuItem = document.querySelector('.menu-item');
//   const megaMenu = document.querySelector('.mega-menu');

//   // مستمع النقر لفتح أو غلق الـ mega-menu عند النقر
//   menuItem.addEventListener('click', function (e) {
//     e.preventDefault();  // لمنع الرابط من العمل
    
//     // إذا كان الـ mega-menu مفتوحًا، يتم غلقه
//     if (menuItem.classList.contains('active')) {
//       menuItem.classList.remove('active');
//     } else {
//       // فتح الـ mega-menu
//       menuItem.classList.add('active');
//     }
//   });

//   // مستمع للنقر في أي مكان آخر على الصفحة لإغلاق الـ mega-menu
//   document.addEventListener('click', function (e) {
//     // إذا كان النقر في مكان غير الـ menu-item أو الـ mega-menu، نقوم بإغلاقها
//     if (!menuItem.contains(e.target) && !megaMenu.contains(e.target)) {
//       menuItem.classList.remove('active');
//     }
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  const menuItem = document.querySelector('.menu-item');
  const megaMenu = document.querySelector('.mega-menu');
  const links = megaMenu.querySelectorAll('a');

  // مستمع النقر لفتح أو غلق الـ mega-menu عند النقر على menu-item
  menuItem.addEventListener('click', function (e) {
    e.preventDefault();  // لمنع الرابط من العمل
    
    // إذا كان الـ mega-menu مفتوحًا، يتم غلقه
    if (menuItem.classList.contains('active')) {
      menuItem.classList.remove('active');
    } else {
      // فتح الـ mega-menu
      menuItem.classList.add('active');
    }
  });

  // مستمع للنقر في أي مكان آخر على الصفحة لإغلاق الـ mega-menu
  document.addEventListener('click', function (e) {
    // إذا كان النقر في مكان غير الـ menu-item أو الـ mega-menu، نقوم بإغلاقها
    if (!menuItem.contains(e.target) && !megaMenu.contains(e.target)) {
      menuItem.classList.remove('active');
    }
  });

  // مستمع النقر على الروابط داخل الـ mega-menu
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      // منع إغلاق الـ mega-menu عند النقر على الرابط
      e.stopPropagation();
    });
  });
});

