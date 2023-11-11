// toggle "on page" links (on click)
function toggle_on_page_links() {
    document.getElementById("onPageLinks").classList.toggle("show");
    document.getElementById("expandNavlinks").classList.toggle("hide");
}

// open trivia app window (on clicking "popup" link / anchor tag)
function trivia_app_popup() {
    var url = "app/TriviaApp.html";  // set the window url
    var width = 500;  // set the window width
    var height = 875;  // set the window height
    var left = (screen.width - width) / 2;  // determine the left margin based on the screen width (to center)
    var top = (screen.height - height) / 2;  // determine the top margin based on the screen width (to center)
    var windowFeatures = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;  // set the window features (size and placement)
    window.open(url, 'popup', windowFeatures);  // call window.open() to create a popup window
    // window.open('app/TriviaApp.html','popup','width=500,height=875');  // original code, prior to centering window
    return false;
}