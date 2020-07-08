$(document).ready(function () {
    let $hamButton = $('#hamburgerButton');
    let $hamMenu = $('#hamburgerMenu');
    let $hamClose = $('#hamburgerClose');
    let $hamCity = $('#hamburgerCity');
    let $hamCityBlock = $('#hamburgerCityBlock');
    let $hamCityClose = $('#hamburgerCityClose');
    let $headPopup = $('#headerPopup');
    let $headLocation = $('#headerLocation');
    let $headPopupClose = $('#headerPopupCloseButton');

    let $profileEdit = $('#profileEditButton'); // Кнопка Редактировать данные
    let $profileEditSave = $('#profileEditSaveButton'); // Кнопка сохранения данных

    let $profileUserBlock = $('#profileUserBlock'); // Блок показа данных
    let $profileUserEditBlock = $('#profileUserEditBlock'); // Блок редактирования данных


    let $openFiltersMobButton = $('#openFiltersButton');
    let $closeFiltersMobButton = $('#closeFiltersButton');
    let $applyFiltersMobButton = $('#applyFiltersButton');

    let $showPopoverButton1 = $('#popoverButton1');
    let $showPopoverButton2 = $('#popoverButton2');

    let $popoverBlock1 = $('#popoverBlock1');
    let $popoverBlock2 = $('#popoverBlock2');

    let $mobFiltersBlock = $('#mobFiltersBlock');

    $hamButton.click(() => {
        if ($hamButton.hasClass('is-active')) {
            $hamButton.removeClass('is-active')
            $hamMenu.hide('fast');
        } else {
            $hamButton.addClass('is-active');
            $hamMenu.show('fast');
        }
    });

    $hamClose.click(() => {
        $hamMenu.hide('fast');
        $hamButton.removeClass('is-active')
    });

    $hamCity.click(() => {
        $hamCityBlock.show('fast');
    });

    $hamCityClose.click(() => {
        $hamCityBlock.hide('fast');
    });

    $headLocation.click(() => {
        $headPopup.show('fast');
    });

    $headPopupClose.click(() => {
        $headPopup.hide('fast');
    });

    $profileEdit.click(() => {
        $profileUserBlock.hide(0);
        $profileUserEditBlock.show(0);
    });

    $profileEditSave.click(() => {
        $profileUserEditBlock.hide(0);
        $profileUserBlock.show(0);
    });

    $openFiltersMobButton.click(() => {
        $mobFiltersBlock.show(0);
    });

    $closeFiltersMobButton.click(() => {
        $mobFiltersBlock.hide(0);
    });

    $applyFiltersMobButton.click(() => {
        $mobFiltersBlock.hide(0);
    });

    if ($(window).width() >= 768) {
        $(document).click(($event) => {
            switch ($event.target.id) {
                case 'popoverButton1':
                    $popoverBlock1.show(0);
                    $popoverBlock2.hide(0);
                    break
                case 'popoverButton2':
                    $popoverBlock2.show(0);
                    $popoverBlock1.hide(0);
                    break
                default :
                    $popoverBlock1.hide(0);
                    $popoverBlock2.hide(0);
                    break
            }
        });
    } else {
        // показать модалки вместо поповеров
        $(document).click(($event) => {
            switch ($event.target.id) {
                case 'popoverButton1':
                    // показать модалку 1
                    // спрятать модалку 2
                    break
                case 'popoverButton2':
                    // показать модалку 2
                    // спрятать модалку 1
                    break
                default :
                    // спрятать все модалки
                    break
            }
        });
    }
    $(document).click(($event) => {
        if ($event.target.closest('#hamburgerMenu')
            || $event.target.closest('#hamburgerButton')
            || $event.target.closest('#hamburgerCityClose')) {

        } else {
            $hamMenu.hide('fast');
            $hamButton.removeClass('is-active')
        }
    })
});
