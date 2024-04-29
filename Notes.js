function download(file,text) {
    var rlement =
    document.createElement("a");

    element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8, "
        + encodeURIComponent(text)
    );
    element.setAttribute("download",file);

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}


document.getElementById("btn").addEventListener(
    "click",
    function () {
        var text = document.getElementById("mylife"). value;
        var filename = ".txt";

        download(filename, text);
    },
    false
);