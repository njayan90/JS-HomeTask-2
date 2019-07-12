function loadfun() {
    headfunction();
    mainfunction("All");
    footfunction();
}
function headfunction() {
    var x = document.getElementById("myHeader");
    var p = document.createElement("b");
    p.setAttribute("class", "News");
    var t = document.createTextNode("NEWSFEED");
    var i = document.createElement("i");
    i.setAttribute("class", "yet")
    var i_text = document.createTextNode("Yet Another NewsFeed");
    i.appendChild(i_text);
    p.appendChild(t);
    p.appendChild(i);
    x.appendChild(p);
    document.body.appendChild(x);
}
