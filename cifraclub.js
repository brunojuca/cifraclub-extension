let xhr = new XMLHttpRequest();

document.documentElement.style.display = "flex";
document.body.style.width = "70%";

xhr.onload = function () {
    const elem = this.responseXML.getElementsByClassName("cifra-column--left")[0];
    elem.style.color = "white";
    document
        .body
        .insertAdjacentElement(
            "afterend",
            elem
        );
};

xhr.onerror = function () {
    console.log("Erro na requisição HTTP");
};

xhr.open(
    "GET",
    "https://www.cifraclub.com.br/legiao-urbana/tempo-perdido/",
    true
);
xhr.responseType = "document";

xhr.send();
