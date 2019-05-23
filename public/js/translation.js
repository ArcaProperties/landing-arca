var path = window.location.pathname
if (path.startsWith("/it")) {
//     document.getElementById('language').innerHTML = "IT";
    path = path.replace("/it", "");
//     $(".students-link").attr("href", window.location.protocol + "//" + window.location.host + "/it/");
//     $(".landlords-link").attr("href", window.location.protocol + "//" + window.location.host + "/it/landlords");
//     $(".about-link").attr("href", window.location.protocol + "//" + window.location.host + "/it/about");
//     $(".faq-link").attr("href", window.location.protocol + "//" + window.location.host + "/it/faq");
}
else {
//     document.getElementById('language').innerHTML = "EN";
//     $(".students-link").attr("href", window.location.protocol + "//" + window.location.host + "/");
//     $(".landlords-link").attr("href", window.location.protocol + "//" + window.location.host + "/landlords");
//     $(".about-link").attr("href", window.location.protocol + "//" + window.location.host + "/about");
//     $(".faq-link").attr("href", window.location.protocol + "//" + window.location.host + "/faq");
}
console.log(path)
$("#italian").attr("href", window.location.protocol + "//" + window.location.host + "/it" + path);
$("#english").attr("href", window.location.protocol + "//" + window.location.host + path);