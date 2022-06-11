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

    function getTermekWindow(caller) {
        $(caller).after(
            `<form action="" method="post">
                <p id="termekWindowId">Id: </p>
                <label for="termekWindowNev">Termék név: </label>
                <input id="termekWindowNev" type="text" />
                <label for="termekWindowSzin">Termék szín: </label>
                <input id="termekWindowSzin" type="text" />
                <label for="termekWindowMinta">Termék minta: </label>
                <input id="termekWindowMinta" type="text" />
                <label for="termekWindowRaktaron">Raktáron: </label>
                <input id="termekWindowRaktaron" type="number" />
            </form>`
        );
    }

    function newTermek() {

    }

    getTermekek();

});