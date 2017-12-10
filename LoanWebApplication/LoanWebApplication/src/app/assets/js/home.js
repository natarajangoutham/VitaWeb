$(document).ready(function () {
    $('.tab-pane.active .table-responsive').addClass('scroll-pane');
    $('.nav-tabs li a').on('click', function () {
        $('.table-responsive.scroll-pane').removeClass('scroll-pane');
        setTimeout(function () {
            var activeTab = $('.tab-pane.active .table-responsive');
            if (activeTab) {
                $('.table-responsive.scroll-pane').removeClass('scroll-pane');
                $('.tab-content').find('.tab-pane.active .table-responsive').addClass('scroll-pane').jScrollPane();
            }
        });
    });
});

$(function () {
    $('.scroll-pane').jScrollPane();
});