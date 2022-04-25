//-------------------->>> SIDEBAR Sub-Section <<<-----------------------------
// sidebar
const menuItems = document.querySelectorAll('.menu_item');
// messages
const messagesNotification = document.querySelector('#messages_notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message_search');
// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize_theme')
const fontSizes = document.querySelectorAll('.choose_size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose_color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// -----> Remove active class from all menu items -----
const changeActiveItem = () => {
    menuItems.forEach(item => {
    item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        // --- popup notification and change count
        if (item.id != 'notifications') {
            document.querySelector('.notifications_popup').
                style.display = 'none';
        } else {
            document.querySelector('.notifications_popup').
                style.display = 'block';
            document.querySelector('#notifications .notification_count').
                style.display = 'none';
        }

    })
}) 

// -----> Messages -----------------------------------------------

// --- Searches Chat ---
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

// --- Search Chat ---
messageSearch.addEventListener('keyup', searchMessage);

// --- Highlight message card when message menu item is clicked ---
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
    document.querySelector('#messages_notifications .notification_count').
                style.display = 'none';
})


// -----> Theme Customization -------------------------------------

// -- Displaying theme modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// -- Close theme modal function
const closeThemeModal = (event) => {
    if (event.target.classList.contains('customize_theme')) {
        themeModal.style.display = 'none';
    }
}

// -- Closing theme modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


// --===-- Font Sizes ----------------==========---------

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font_size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem;');
            root.style.setProperty('--sticky-top-right', '5.4rem;');

        } else if (size.classList.contains('font_size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem;');
            root.style.setProperty('--sticky-top-right', '-7rem;');
        } else if (size.classList.contains('font_size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem;');
            root.style.setProperty('--sticky-top-right', '-17rem;');
        } else if (size.classList.contains('font_size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem;');
            root.style.setProperty('--sticky-top-right', '-25rem;');
        } else if (size.classList.contains('font_size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem;');
            root.style.setProperty('--sticky-top-right', '-35rem;');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })

    
})

// --===-- Primary Colors ------------==========---------

//remove active class from spans or color selectors
const removeColorSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeColorSelector();
        let primary;
        color.classList.toggle('active');

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 25;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 359;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 128;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 215;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);

    })
})

// --===-- Background Colors ---------==========---------

// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    // add active class
    Bg1.classList.add('active');
    // remove actie class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove actie class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove actie class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

});