var document = {
    header: "header",
    body: "body",
    footer: "footer",
    data: "data"
};

document.app = {};

document.app.header = {};
document.app.body = {};
document.app.footer = {};
document.app.data = {};

document.show = function () {
    console.log("Hello");
    console.log(this.header);
    console.log(this.app);
    console.log(this.app.body);
}

document.show();

console.log(document.show());