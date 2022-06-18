"use strict";

$(document).ready(function () {

    function preventFormResubmit() {
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    }

    function createTermekekModule() {
        showTermekek();
        newTermek();
    }

    function showTermekek() {
        $.ajax({
            type: `GET`,
            url: `php/termekekquery.php`,
            dataType: `html`,
            success: function (data) {
                $(`#termekArticle`).html(data);
            }
        });
    }

    function newTermek() {
        $(`#newTermekButton`).click(function () {
            showTermekWindow(`#newTermekButton`);
            $(`#newTermekButton`).attr(`disabled`, true);
            cancelTermekWindow();
        });
    }

    function cancelTermekWindow() {
        $(`#cancelTermekWindowButton`).click(function () {
            $(`#termekWindow`).remove();
            $(`#newTermekButton`).attr(`disabled`, false);
        });
    }

    function showTermekWindow(caller) {
        $(`${caller}`).after(`
        <form action="" autocomplete="off" id="termekWindow" method="post">
            <p id="termekWindowId">Id: </p>
            <label for="termekWindowNev">Termék név: </label>
            <input id="termekWindowNev" name="termekWindowNev" maxlength="100" required type="text" value="Új termék" />
            <label for="termekWindowSzin">Termék szín: </label>
            <select id="termekWindowSzin" name="termekWindowSzin" type="text">
            </select>
            <label for="termekWindowMinta">Termék minta: </label>
            <select id="termekWindowMinta" name="termekWindowMinta" type="text">
            </select>
            <label for="termekWindowRaktaron">Raktáron: </label>
            <input id="termekWindowRaktaron" name="termekWindowRaktaron" type="number" value="0" />
            <label for="termekWindowLeiras">Termék leírás: </label>
            <textarea id="termekWindowLeiras" maxlength="65535" name="termekWindowLeiras"></textarea>
            <label for="termekWindowKep">Termék képe: </label>
            <input accept="image/*" id="termekWindowKep" name="termekWindowKep" type="file" />
            <label for="termekWindowKepek">További képek: </label>
            <input accept="image/*" id="termekWindowKepek" name="termekWindowKepek" type="file" multiple />
            <button id="cancelTermekWindowButton" type="button">Mégse</button>
            <input type="submit" value="Hozzáad" />
        </form>`
        );
    }

    function setTermek() {

    }

    preventFormResubmit();
    createTermekekModule();
});