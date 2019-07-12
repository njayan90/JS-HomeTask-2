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
function mainfunction(name) {
    var i;
    var selectedOption = 0;
    var arr = ["All", "The Times Of India", "Hindustan Times", "The Hindu", "The Telegraph", "Deccan Chronicle", "Mumbai Mirror", "The Economic Times", "DNA", "The Tribune", "The New Indian Express"];
    var myMain = document.getElementById("myMain");
    myMain.innerHTML = '';
    for (i = 1; i <= 10; i++) {

        var main = document.createElement("div");
        main.setAttribute("class", "main");
        var center = document.createElement("div");
        center.setAttribute("class", "center");
        var section = document.createElement("div");
        section.setAttribute("class", "section");

        var section1 = document.createElement("div");
        section1.setAttribute("class", "section1");
        var section2 = document.createElement("div");
        section2.setAttribute("class", "section2");

        if (name == "All" || name == arr[i]) {
            var img = document.createElement("img");
            img.setAttribute("class", "img");
            img.setAttribute("src", "White-Blank-Wallpaper-14.png");
            section1.appendChild(img);
            section.appendChild(section1);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);

            var h1 = document.createElement("h1");
            h1.setAttribute("class", "one");
            var h1_t = document.createTextNode(arr[i]);
            h1.appendChild(h1_t);
            section2.appendChild(h1);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);

            var p = document.createElement("p");
            var span1 = document.createElement("span");
            span1.setAttribute("class", "opac");
            var span1_t = document.createTextNode("Posted On");
            span1.appendChild(span1_t);
            p.appendChild(span1);
            section2.appendChild(p);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);

            var span2 = document.createElement("span");
            var span2_t = document.createTextNode(" 29 June,2019 ");
            span2.appendChild(span2_t);
            p.appendChild(span2);
            section2.appendChild(p);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);

            span1 = document.createElement("span");
            span1.setAttribute("class", "opac");
            span1_t = document.createTextNode("// Category:");
            span1.appendChild(span1_t);
            p.appendChild(span1);
            section2.appendChild(p);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);

            span2 = document.createElement("span");
            span2_t = document.createTextNode(" Category One ");
            span2.appendChild(span2_t);
            p.appendChild(span2);
            section2.appendChild(p);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);

            p = document.createElement("p");
            var p_t = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?");
            p.setAttribute("id", "text");
            p.appendChild(p_t);
            section2.appendChild(p);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);


            var button = document.createElement("button");
            button.setAttribute("class", "button");
            button.setAttribute("id", arr[i]);
            var button_t = document.createTextNode("Continue Reading");
            button.appendChild(button_t);
            section2.appendChild(button);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);
            button.setAttribute("onclick", "popupfun(id)");

            var border = document.createElement("div");
            border.setAttribute("class", "border");
            section.appendChild(border);
            center.appendChild(section);
            main.appendChild(center);

            myMain.appendChild(main);
            document.body.appendChild(myMain);
        }
    }
    var side = document.createElement("div");
    side.setAttribute("class", "side");
    var h4 = document.createElement("h4");
    var h4_t = document.createTextNode("SELECT CATEGORY");
    h4.appendChild(h4_t);
    main.appendChild(h4);
    myMain.appendChild(main);
    document.body.appendChild(myMain);


    var drop = document.createElement("select");
    drop.setAttribute("id", "select");
    drop.setAttribute("class", "drop");
    var option = document.createElement("option");
    for (i = 0; i <=10; i++) {
        option = document.createElement("option");
        option.setAttribute("value", arr[i]);
        drop.setAttribute("onchange", "mainfunction(value)");
        var option_t = document.createTextNode(arr[i]);
        option.appendChild(option_t);
        drop.appendChild(option);
        main.appendChild(drop);
        myMain.appendChild(main);
        document.body.appendChild(myMain);
        if (arr[i] == name) {
            selectedOption = i;
        }
        document.getElementById("select").selectedIndex = selectedOption;
    }

    h4 = document.createElement("h4");
    var h4_t = document.createTextNode("SUBSCRIBE");
    h4.appendChild(h4_t);
    main.appendChild(h4);
    myMain.appendChild(main);
    document.body.appendChild(myMain);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "email");
    input.setAttribute("id", "email")
    input.setAttribute("placeholder", "  Email Address");
    main.appendChild(input);
    myMain.appendChild(main);
    document.body.appendChild(myMain);

    input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("class", "subscribe");
    input.setAttribute("value", "Subscribe");
    input.addEventListener("click", function () {
        validateEmail(document.getElementById("email").value);
    })
    main.appendChild(input);
    myMain.appendChild(main);
    document.body.appendChild(myMain);




}
function footfunction() {
    var foot = document.getElementById("myFooter");
    var p = document.createElement("p");
    p.setAttribute("class", "footer");
    var p_t = document.createTextNode("NewsFeed 2019");
    p.appendChild(p_t);
    foot.appendChild(p);
    document.body.appendChild(foot);

}
var modal;
function popupfun(id) {

    var para = ["All", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?"]
    var arr = ["All", "The Times Of India", "Hindustan Times", "The Hindu", "The Telegraph", "Deccan Chronicle", "Mumbai Mirror", "The Economic Times", "DNA", "The Tribune", "The New Indian Express"];
    var para1;
    var j;
    for (j = 1; j <= 10; j++) {
        if (arr[j] == id) {
            para1 = para[j];
        }
    }

    modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.setAttribute("id", "modal");
    var modal_content = document.createElement("div");
    modal_content.setAttribute("class", "modal_content");
    var modal_head = document.createElement("div");
    modal_head.setAttribute("class", "modal_head");
    var close = document.createElement("span");
    close.setAttribute("class", "close");
    close.setAttribute("onclick", "closefun()");
    var close_t = document.createTextNode("\u00D7");
    close.appendChild(close_t);

    var modal_body = document.createElement("div");
    modal_body.setAttribute("class", "modal_body");
    var modal_head_text = document.createTextNode(id);
    var modal_body_text = document.createTextNode(para1);
    modal_head.appendChild(close);
    modal_head.appendChild(modal_head_text);
    modal_body.appendChild(modal_body_text);
    modal_content.appendChild(modal_head);
    modal_content.appendChild(modal_body);
    modal.appendChild(modal_content);
    document.body.appendChild(modal);
    modal.style.display = "block";

}

function closefun() {
    var modal = document.getElementById("modal");
    modal.parentNode.removeChild(modal);
}
var count = 0;
function validateEmail(email) {

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email)) {

        alert("Successfully Subscribed");
        localStorage.setItem(++count, email);
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }
}
