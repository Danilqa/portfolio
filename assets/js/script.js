$(document).ready(function () {

    btn_popup_close = '.btn-popup-close';

    btn_contact_animation = $('.btn-contact-animation');
    btn_case_animation = $('.btn-case-animation');
    btn_about_animation = $('.btn-about-animation');

    btn_contact = $('.btn-contact');
    btn_case = $('.btn-case');
    btn_about = $('.btn-about');

    popup_contact = $('.contact-background');
    popup_case = $('.popup-case');
    popup_case_ara = $('.arahipster');
    popup_case_mg = $('.mg');
    popup_case_cross = $('.cross');
    popup_about = $('.about-background');

    function removeFullPageScroll() {
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
        console.log("Navigation blocked");
    };

    function allowFullPageScroll() {
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        console.log("Navigation allowed");
    };

    function removeContactClosed() {
        btn_contact.removeClass('closed');
        $(btn_popup_close).removeClass('closed');
        popup_contact.removeClass('closed');
        btn_contact_animation.removeClass('closed');
    }

    function removeCaseClosed() {
        btn_case.removeClass('closed');
        $(btn_popup_close).removeClass('closed');
        popup_case.removeClass('closed');
        btn_case_animation.removeClass('closed');
    }

    function removeAboutClosed() {
        btn_about.removeClass('closed');
        $(btn_popup_close).removeClass('closed');
        popup_about.removeClass('closed');
        btn_about_animation.removeClass('closed');
    }

    $('#fullpage').fullpage({
        anchors: ['Crossless', 'MindGuests', 'Arahipster'],
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Crossless', 'Mind Guests', 'Arahipster']
    });

    // Кнопка "Написать нам"
    btn_contact.on('click', function () {
        $(this).toggleClass('opened');
        popup_contact.toggleClass('opened');
        popup_contact.find(btn_popup_close).toggleClass('opened');
        removeFullPageScroll();
    });

    // Кнопка "Открыть кейс"
    btn_case.on('click', function () {
        let case_name = $(this).data("case");
        let case_data = $(`.case-data[data-case=${case_name}]`).html();
        
        popup_case.scrollTop(0);
                
        popup_case.find(".case-container").html( case_data );
        
        $(this).toggleClass("opened");
        popup_case.toggleClass("opened");
        popup_case.find(btn_popup_close).toggleClass('opened');
        removeFullPageScroll();
    });

    // Надпись "О нас"
    btn_about.on('click', function () {
        $(this).toggleClass('opened');
        popup_about.toggleClass('opened');
        popup_about.find(btn_popup_close).toggleClass('opened');
        removeFullPageScroll();
    });

    // Закрыть кейсы
    popup_case.find(btn_popup_close).on('click', function () {
        btn_case.toggleClass('closed');
        $(this).toggleClass('closed');
        popup_case.toggleClass('closed');
        btn_case_animation.toggleClass('closed');
        setTimeout(removeCaseClosed, 600);

        btn_case.removeClass("opened");
        popup_case.removeClass("opened");
        popup_case.find(btn_popup_close).toggleClass('opened');

        allowFullPageScroll();
    });

    // Закрыть "Написать нам"
    popup_contact.find(btn_popup_close).on('click', function () {
        btn_contact.toggleClass('closed');
        $(this).toggleClass('closed');
        popup_contact.toggleClass('closed');
        btn_contact_animation.toggleClass('closed');
        setTimeout(removeContactClosed, 600);

        btn_contact.removeClass('opened');
        popup_contact.removeClass('opened');
        popup_contact.find(btn_popup_close).toggleClass('opened');

        allowFullPageScroll();
    });

    // Закрыть "О нас"
    popup_about.find(btn_popup_close).on('click', function () {
        btn_about.toggleClass('closed');
        $(this).toggleClass('closed');
        popup_about.toggleClass('closed');
        btn_about_animation.toggleClass('closed');
        setTimeout(removeAboutClosed, 600);

        btn_about.removeClass('opened');
        popup_about.removeClass('opened');
        popup_about.find(btn_popup_close).toggleClass('opened');

        allowFullPageScroll();
    });

    // Текстовое поле в "Написать нам"
    var textarea = document.querySelector('textarea');

    textarea.addEventListener('keydown', autosize);

    function autosize() {
        var el = this;
        setTimeout(function () {
            el.style.cssText = 'height:auto; padding:0';
            // for box-sizing other than "content-box" use:
            // el.style.cssText = '-moz-box-sizing:content-box';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
    }
    
    let a = $(".header-background").css('opacity');
    let bo = $(this).scrollTop();
    // Шапка при сролле в кейсах в моб версии
    popup_case.scroll(function () {
        bo = $(this).scrollTop();
        a = $(".header-background").css('opacity')

        if (bo >= 200 && a == 0) {
            $(".header-background").stop().animate({
                'opacity': '1'
            }, 500)
        };
        if (bo < 200 && a == 1) {
            $(".header-background").stop().animate({
                'opacity': '0'
            }, 500)
        };
    })

});