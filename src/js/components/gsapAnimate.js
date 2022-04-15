import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded',()=>{
    const TL = gsap.timeline({
        defaults: {
            duration: 2,
            ease: 'elastic'
        }
    });

    //Оборачиваем каждую букву в заголовке для анимации
    let pageTitle = document.querySelector('.main__title h1');
    let wrapedText = wrapLetters(pageTitle.innerHTML);
    pageTitle.innerHTML = wrapedText;

    TL.fromTo('.main__title h1 .letter-wrapper',
        {
            autoAlpha: 0
        },
        {
            delay: 0.5,
            duration: 0.4,
            stagger: 0.05,
            autoAlpha: 1
        }
    )

    TL.from('.main__line',
        {
            width: 0,
            duration: 0.5,
            ease: 'power2.out'
        }
    )

    TL.fromTo('.nav-bottom__link', {
        borderTopColor: 'rgba(255,0,0,1)',
        borderBottomColor: 'rgba(255,0,0,1)',
        color: 'rgba(0,0,0,1)'
    }, {
        borderTopColor: 'rgba(255,0,0,0)',
        borderBottomColor: 'rgba(255,0,0,0)',
        color: 'rgba(255,0,0,.6)',
        duration: 4,
        ease: 'linear',
        yoyo: true,
        repeat: -1
    })

    gsap.from('.works__item',
        {
            scrollTrigger:{
                trigger: '.works__content',
                start: 'top 100%',
                end: 'bottom 90%',
                //scrub: 1
                once: true
            },
            x: -150,
            rotateY: 180,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.3,
        }
    )

    gsap.from('.services__item',
        {
            scrollTrigger:{
                trigger: '.services.section .services__content',
                start: 'top 100%',
                end: 'center center',
                scrub: 1,
                once: true
            },
            y: 150,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.3,
        }
    )

    gsap.from('.services__item-2',
        {
            scrollTrigger:{
                trigger: '.services-second .services__content',
                start: 'top 100%',
                end: 'center center',
                scrub: 1,
                once: true
            },
            y: 150,
            autoAlpha: 0,
            duration: 0.8,
            stagger: {
                from: 'end',
                each: 0.3,
            }
        }
    )

    gsap.from('.product__item-list',
        {
            scrollTrigger:{
                trigger: '.product__item-lists',
                start: 'top 100%',
                end: 'center center',
                scrub: 2,
                once: true
            },
            scale: 0.5,
            autoAlpha: 0,
            duration: 0.8,
            stagger: {
                each: 0.8,
            }
        }
    )

    //Оборачиваем каждую букву в services__title для анимации
    let servicesTitle = document.querySelector('.technology .services__title h2');
    let servicesWrapedText = wrapLetters(servicesTitle.innerHTML);
    servicesTitle.innerHTML = servicesWrapedText;

    gsap.from('.services__title h2 .letter-wrapper',
        {
            scrollTrigger:{
                trigger: '.technology .services__title',
                start: 'top 100%',
                //end: 'center center',
                once: true
            },
            scale: 1.05,
            y: -5,
            display: 'inline-block',
            autoAlpha: 0,
            duration: 0.1,
            stagger: 0.05,
        }
    )

    //Оборачиваем каждое слово в feedback__desc p для анимации
    let feedbackDesc = document.querySelectorAll('.feedback__desc p')[1];
    let feedbackDescWrapedText = wrapLetters(feedbackDesc.innerHTML, ' - ');
    feedbackDescWrapedText = feedbackDescWrapedText.replace()
    //feedbackDescWrapedText = feedbackDescWrapedText.replaceAll(' - ', '<span aria-hidden="true" class="letter-wrapper"> - </span>');

    feedbackDesc.innerHTML = feedbackDescWrapedText;

    gsap.from('.feedback__desc p .letter-wrapper',
        {
            scrollTrigger:{
                trigger: '.feedback__desc',
                start: 'top 50%',
                //scrub: 2,
                end: 'center center',
                //once: true
            },
            //scale: 1.05,
            //x: -50,
            //display: 'inline-block',
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.55,
        }
    )

})

//Вспомогательные функции

//Функция получает текст и разбивает его по буквам, оборачивая каждую букву в span.letter-wrapper и возвращает все в виде строки
function wrapLetters(text, delimiter){
    delimiter = delimiter ? delimiter : ''
    let arr = String(text).split(delimiter)

    let result = ''
    let isTag = false
    let arrLength = arr.length;

    arr.forEach((letter, index) => {
        //Если встречаем тэг --START--
        if(letter == '<'){
            isTag = true
        }
        if(letter == '>'){
            result += `${letter}`
            isTag = false
            return
        }
        if(isTag){
            result += `${letter}`
            return
        }
        //Если встречаем тэг --END--

        if(index == arrLength - 1){
            result += `<span aria-hidden="true" class="letter-wrapper">${letter}</span>`
            return
        }

        result += `<span aria-hidden="true" class="letter-wrapper">${letter}${delimiter}</span>`
    })

    return result
}
