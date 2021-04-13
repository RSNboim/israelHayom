$(document).ready(function () {

    let desktopButtonsData = [{className: "desktop",value: "דסקטופ ",imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "mega-plasma-video", value: "מגה פלאזמה וידאו ", imgSrc: '../israelHayom/assets/adHere.jpeg'},
        {className: "mega-plasma", value: "מגה פלאזמה ", imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "inner-box", value: "אינרבוקס ", imgSrc: '../israelHayom/assets/adHere.jpeg'},
        {className: "mega-migdal", value: "מגה מגדל ", imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "ozen-migdal", value: "אוזן מגדל ", imgSrc: '../israelHayom/assets/ad.jpeg'},
        {className: "qube", value: "eu ", imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "free-roll", value: "פרירול ", imgSrc: '../israelHayom/assets/adHere.jpeg'},
        {className: "slider", value: "סליידר ", imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "native-promotions", value: "קידומי נייטיב ", imgSrc: '../israelHayom/assets/ad.jpeg'}
    ];

    let mobileButtonsData = [{className: "maavaron",value: "מעברון ",imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "booster-video", value: "בוסטר וידאו ", imgSrc: '../israelHayom/assets/adHere.jpeg'},
        {className: "booster", value: "בוסטר", imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "inner-box1", value: "אינרבוקס ", imgSrc: '../israelHayom/assets/adHere.jpeg'},
        {className: "strip-sticky", value: "סטריפ סטיקי ", imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "slider1", value: "סליידר", imgSrc: '../israelHayom/assets/ad.jpeg'},
        {className: "free-roll1", value: "פרירול ", imgSrc: '../israelHayom/assets/adversiting.jpeg'},
        {className: "native-promotions1", value: "קידומי נייטיב ", imgSrc: '../israelHayom/assets/adHere.jpeg'},
    ];

//creating buttons for desktop mode.

    let mobileParent = $('.mobile-buttons').get();
    let desktopParent = $('.desktop-buttons').get();

    for (let i = 0; i < desktopButtonsData.length; i++) {
        var desktopButtons = $('<li class="btn btn-lg btn-primary"' + desktopButtonsData[i].className + '>' + desktopButtonsData[i].value + '</li>')
        desktopButtons.appendTo(desktopParent);
        desktopButtons.click(function () {
            $('.changing-image').attr('src', desktopButtonsData[i].imgSrc);
        })
    }


    for (let i = 0; i < mobileButtonsData.length; i++) {
        let mobileButton = $('<li class="btn btn-lg btn-primary"' + mobileButtonsData[i].className + '>' + mobileButtonsData[i].value + '</li>')
        mobileButton.appendTo(mobileParent);
        mobileButton.click(function () {
            $('.change-image').attr('src', mobileButtonsData[i].imgSrc);
        })
    }

//creating buttons for mobile mode.

    let mobileDropdownParent = $('#dropdown-parent-mobile').get();
    let desktopDropdownParent = $('#dropdown-parent-desktop').get();

    for (let i = 0; i < desktopButtonsData.length; i++) {

        var desktopDropdownButtons = $('<a class="dropdown-item"' + desktopButtonsData[i].className + '>' + desktopButtonsData[i].value + '</a>')
        desktopDropdownButtons.appendTo(desktopDropdownParent);
        desktopDropdownButtons.click(function () {
            $('.changing-image').attr('src', desktopButtonsData[i].imgSrc);
        })
    }

    for (let i = 0; i < mobileButtonsData.length; i++) {
        var mobileDropdownButtons = $('<a class="dropdown-item"' + mobileButtonsData[i].className + '>' + mobileButtonsData[i].value + '</a>')
        mobileDropdownButtons.appendTo(mobileDropdownParent);
        mobileDropdownButtons.click(function () {
            $('.change-image').attr('src', mobileButtonsData[i].imgSrc);
        })
    }


});



// mobile-dropdown-options
