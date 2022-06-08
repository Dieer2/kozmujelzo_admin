"use strict";

$(document).ready(function () {

    function getTermekek() {
        $.ajax({
            type: `GET`,
            url: `php/termekekquery.php`,
            dataType: `html`,
            success: function (data) {
                $(`#termekArticle`).html(data);
            }
        });
    }

    getTermekek();

});