var photos = [];
var fileNames = [];
var imageList = [];
var image;
var text;
var whole;
var openList = "<div class='photo'>";
var openCaptionTag = "<p>";
var closeCaptionTag = "</p>";
captionTexts = ["armstrong","aurora","bo","cadele","dumbo","guston","rose","shay","turtle","wheaty","wiley","zoro"];
var divopenList = "<div class='img-text'>";
var divcloseList = "</div>";
var openDesc = "<div id='desc' class='description' onClick='displayInfo(";
var openDescClose = ")'>";
var openMiddleTag = "<div class='middle'>";
descTexts = ["May the force be with you","Just chill with me","Treats?","Need someone to talk with?","Let's do a movie night!","Wanna play?","Want a cuddle buddy?","Shhhh","I don't bite","Can I have a bread?","Night night","Wanna play?"];
closeText = "Click Here to Visit More Friends!";

function album() {
    for (var i=0 ; i<12 ; i++) {
        fileNames.push(captionTexts[i]+"_optimized");
        photos.push("<img src='images/"+fileNames[i]+".jpg'>");
        image = openList + photos[i];
        description = openMiddleTag + openDesc + i +openDescClose + descTexts[i] + divcloseList + divcloseList + divcloseList;
        caption = openCaptionTag + captionTexts[i] + closeCaptionTag;
        whole = divopenList + image + description + caption + divcloseList;
        imageList.push(whole);
    };
    document.getElementById("album").innerHTML = imageList.join(" ");
};

function displayInfo(animalIndex) {
    document.getElementById("infobox-heading").innerHTML = captionTexts[animalIndex];
    document.getElementById("infobox-text").innerHTML = descTexts[animalIndex];
    document.getElementById("closeText").innerHTML = closeText;
    document.getElementById("infobox").style.visibility="visible";
};


album();