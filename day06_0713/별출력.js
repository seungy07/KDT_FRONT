let n = 10; 
for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "☆";
    }
    console.log(line);
    document.querySelector("p").innerHTML += line + '<br />'
}
for (let i = n - 1; i >= 1; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "☆";
    }

    console.log(line);
    document.querySelector("p").innerHTML += line + '<br />'
}
