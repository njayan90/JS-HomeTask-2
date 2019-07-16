function loadfun() {
    headfunction();
    mainfunction("All");
    footfunction();
}

function headfunction() {
    let x = document.getElementById("myHeader");
    let p = create("b", "News", "News");
    let t = create_text("NEWSFEED");
    let i = create("i", "yet", "yet");
    let i_text = create_text("Yet Another NewsFeed");
    i.appendChild(i_text);
    p.appendChild(t);
    p.appendChild(i);
    x.appendChild(p);
    document.body.appendChild(x);
}

function mainfunction(name) {
    let selectedOption = 0;
    let arr = ["All", "The Times Of India", "Hindustan Times", "The Hindu", "The Telegraph", "Deccan Chronicle", "Mumbai Mirror", "The Economic Times", "DNA", "The Tribune", "The New Indian Express"];
    let myMain = document.getElementById("myMain");
    myMain.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        var main = create("div", "main", "main");
        let center = create("div", "center", "center");
        let section = create("div", "section", "section");
        let section1 = create("div", "section1", "section1");
        let section2 = create("div", "section2", "section2");
        if (name == "All" || name == arr[i]) {
            let img = create("img", "img", "img");
            img.setAttribute("src", "White-Blank-Wallpaper-14.png");
            section1.appendChild(img);
            section.appendChild(section1);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);
            let h1 = create("h1", "one", "one");
            let h1_t = create_text(arr[i]);
            h1.appendChild(h1_t);
            section2.appendChild(h1);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);
            let p = create("p", "", "");
            spanopac("Posted On", main, center, section, section2, p);
            span(" 29 June,2019 ", main, center, section, section2, p);
            spanopac("// Category:", main, center, section, section2, p);
            span(" Category One ", main, center, section, section2, p);
            p = create("p", "", "");
            let p_t = create_text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?");
            p.setAttribute("id", "text");
            p.appendChild(p_t);
            section2.appendChild(p);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);
            let button = create("button", "button", arr[i]);
            let button_t = create_text("Continue Reading");
            button.appendChild(button_t);
            section2.appendChild(button);
            section.appendChild(section2);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);
            button.setAttribute("onclick", "popupfun(id)");
            let border = create("div", "border", "border");
            section.appendChild(border);
            center.appendChild(section);
            main.appendChild(center);
            myMain.appendChild(main);
            document.body.appendChild(myMain);
        }
    }
    let side = create("div", "side", "side");
    let h4 = create("h4", "", "");
    var h4_t = create_text("SELECT CATEGORY");
    h4.appendChild(h4_t);
    main.appendChild(h4);
    myMain.appendChild(main);
    document.body.appendChild(myMain);
    let drop = create("select", "drop", "select");
    let option;
    for (let i = 0; i <= 10; i++) {
        option = create("option", "", "");
        option.setAttribute("value", arr[i]);
        drop.setAttribute("onchange", "mainfunction(value)");
        let option_t = create_text(arr[i]);
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
    h4 = create("h4", "", "");
    var h4_t = create_text("SUBSCRIBE");
    h4.appendChild(h4_t);
    main.appendChild(h4);
    myMain.appendChild(main);
    document.body.appendChild(myMain);
    let input = create("input", "email", "email");;
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "  Email Address");
    main.appendChild(input);
    myMain.appendChild(main);
    document.body.appendChild(myMain);
    input = create("input", "subscribe", "subscribe");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "Subscribe");
    input.addEventListener("click", function () {
        validateEmail(document.getElementById("email").value);
    })
    main.appendChild(input);
    myMain.appendChild(main);
    document.body.appendChild(myMain);
}

function footfunction() {
    let foot = document.getElementById("myFooter");
    let p = create("p", "footer", "");
    p.setAttribute("class", "footer");
    let p_t = create_text("NewsFeed 2019");
    p.appendChild(p_t);
    foot.appendChild(p);
    document.body.appendChild(foot);
}

function popupfun(id) {
    let modal;
    let para = ["All", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptates, nulla porro accusamus aperiam incidunt delectus quisquam totam unde, velit dolore minima. At doloremque ea eius iste fugiat dolorem sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus perspiciatis nesciunt vero mollitia voluptatum beatae, neque molestias, doloremque harum at impedit nobis optio! Quisquam corporis officia fugiat aliquid tenetur?"]
    let arr = ["All", "The Times Of India", "Hindustan Times", "The Hindu", "The Telegraph", "Deccan Chronicle", "Mumbai Mirror", "The Economic Times", "DNA", "The Tribune", "The New Indian Express"];
    let para1;
    for (let j = 1; j <= 10; j++) {
        if (arr[j] == id) {
            para1 = para[j];
        }
    }
    modal = create("div", "modal", "modal");
    let modal_content = create("div", "modal_content", "");
    let modal_head = create("div", "modal_head", "");
    let close = create("span", "close", "");
    close.setAttribute("onclick", "closefun()");
    let close_t = create_text("\u00D7");
    close.appendChild(close_t);
    let modal_body = create("div", "modal_body", "");
    let modal_head_text = create_text(id);
    let modal_body_text = create_text(para1);
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
    let modal = document.getElementById("modal");
    modal.parentNode.removeChild(modal);
}

var count = 0;

function validateEmail(email) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

function spanopac(content, main, center, section, section2, p) {
    let span1 = create("span", "opac", "");
    let span1_t = create_text(content);
    span1.appendChild(span1_t);
    p.appendChild(span1);
    section2.appendChild(p);
    section.appendChild(section2);
    center.appendChild(section);
    main.appendChild(center);
    myMain.appendChild(main);
    document.body.appendChild(myMain);
}

function span(content, main, center, section, section2, p) {
    let span1 = create("span", "", "");
    let span1_t = create_text(content);
    span1.appendChild(span1_t);
    p.appendChild(span1);
    section2.appendChild(p);
    section.appendChild(section2);
    center.appendChild(section);
    main.appendChild(center);
    myMain.appendChild(main);
    document.body.appendChild(myMain);
}

function create(element, class_name, id_name) {
    let main = document.createElement(element);
    main.setAttribute("class", class_name);
    main.setAttribute("id", id_name);
    return (main);
}

function create_text(element_text) {
    let text = document.createTextNode(element_text);
    return (text);
}

