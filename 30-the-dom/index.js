let htmlColl = document.getElementsByClassName('blue');
let htmlArr = [...htmlColl];
htmlArr.forEach(h1 => h1.style.color = "#7fffd4");

let newHeader = document.createElement('h1');
newHeader.innerText = "almost lunch";
document.body.append(newHeader);

let preHeader = document.createElement('h1');
preHeader.innerText = "bear or bear?";
document.body.prepend(preHeader);

// preHeader.remove();
