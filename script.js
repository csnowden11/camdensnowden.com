// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded',()=>{
    // Loading screen
    const loadingScreen=document.querySelector('.loading-container');
    setTimeout(()=>{
        loadingScreen.style.opacity='0';
        setTimeout(()=>{
            loadingScreen.style.display='none';
        },300);
    },1000);

    // Mobile menu
    const mobileMenuBtn=document.querySelector('.mobile-menu-btn');
    const mobileMenu=document.querySelector('.mobile-menu');
    mobileMenuBtn.addEventListener('click',()=>{
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        document.body.style.overflow=mobileMenu.classList.contains('active')?'hidden':'auto';
    });

    // Theme toggle
    const themeToggle=document.querySelector('.theme-toggle');
    const icon=themeToggle.querySelector('i');
    themeToggle.addEventListener('click',()=>{
        document.documentElement.setAttribute('data-theme',
            document.documentElement.getAttribute('data-theme')==='light'?'dark':'light');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
        anchor.addEventListener('click',function(e){
            e.preventDefault();
            const target=document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({behavior:'smooth'});
                if(mobileMenu.classList.contains('active')){
                    mobileMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.style.overflow='auto';
                }
            }
        });
    });

    // Navbar scroll effect
    let lastScroll=0;
    const navbar=document.querySelector('.navbar');
    window.addEventListener('scroll',()=>{
        const currentScroll=window.pageYOffset;
        if(currentScroll<=0){
            navbar.style.transform='translateY(0)';
            return;
        }
        if(currentScroll>lastScroll&&!mobileMenu.classList.contains('active')){
            navbar.style.transform='translateY(-100%)';
        }else{
            navbar.style.transform='translateY(0)';
        }
        lastScroll=currentScroll;
    });

    // Parallax effect
    const bannerImages=document.querySelectorAll('.banner-image img');
    window.addEventListener('scroll',()=>{
        bannerImages.forEach(img=>{
            const speed=0.5;
            const yPos=-(window.pageYOffset*speed);
            img.style.transform=`translateY(${yPos}px)`;
        });
    });

    // Intersection Observer for fade-in effects
    const observerOptions={
        root:null,
        rootMargin:'0px',
        threshold:0.1
    };
    const observer=new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    },observerOptions);
    document.querySelectorAll('section').forEach(section=>{
        observer.observe(section);
    });

    // Experience items hover effect
    const experienceItems=document.querySelectorAll('.experience-item');
    experienceItems.forEach(item=>{
        item.addEventListener('mouseenter',()=>{
            item.style.transform='translateY(-5px)';
            item.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)';
        });
        item.addEventListener('mouseleave',()=>{
            item.style.transform='translateY(0)';
            item.style.boxShadow='0 2px 10px rgba(0,0,0,0.05)';
        });
    });

    // Button hover effect
    const buttons=document.querySelectorAll('.button');
    buttons.forEach(button=>{
        button.addEventListener('mouseenter',()=>{
            button.style.transform='scale(1.02)';
        });
        button.addEventListener('mouseleave',()=>{
            button.style.transform='scale(1)';
        });
    });
}); 