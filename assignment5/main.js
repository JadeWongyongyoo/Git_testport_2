var postCounter = 3;
function postFunction() {
    var topictext = document.getElementById("topic1");
    var comment1Text = document.getElementById("comment1");
    var comment2Text = document.getElementById("comment2");
    var postext = document.getElementById("text1").value;
    
    if (postCounter == 3) {
        topictext.innerHTML = postext;
        postCounter = postCounter - 1;
    }
    else if (postCounter == 2) {
        comment1Text.innerHTML = postext;
        postCounter = postCounter - 1;
    }
    else if (postCounter == 1) {
        comment2Text.innerHTML = postext;
        postCounter = postCounter - 1;
    }
    
}
function clearFunction() {
    var topictext = document.getElementById("topic1");
    var comment1Text = document.getElementById("comment1");
    var comment2Text = document.getElementById("comment2");
    var postext = document.getElementById("text1").value;
    topictext.innerHTML = null;
    comment1Text.innerHTML = null;
    comment2Text.innerHTML = null;
    postext = null;
    postCounter = 3;
}

