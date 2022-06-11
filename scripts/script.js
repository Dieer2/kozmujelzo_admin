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
                <select id="termekWindowSzin" type="text">
                </select>
                <label for="termekWindowMinta">Termék minta: </label>
                <select id="termekWindowMinta" type="text">
                </select>
                <label for="termekWindowRaktaron">Raktáron: </label>
                <input id="termekWindowRaktaron" type="number" />
                <label for="termekWindowLeiras">Termék leírás: </label>
                <textarea id="termekWindowLeiras"></textarea>
                <label for="termekWindowKep">Termék képe: </label>
                <input accept="image/*" id="termekWindowKep" type="file" />
                <label for="termekWindowKepek">További képek: </label>
                <input accept="image/*" id="termekWindowKepek" type="file" multiple />
                <input type="submit" value="Mentés" />
            </form>`
        );
    }

    function newTermek() {

    }

    function setTermek() {

    }

    getTermekek();
    getTermekWindow("#newTermekButton")

});