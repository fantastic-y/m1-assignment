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
var openDescTag = "<div class='description'>";
var closeDescTag = "</div>";
var openMiddleTag = "<div class='middle'>";
descTexts = ["May the force be with you","Just chill with me","Treats?","Need someone to talk with?","Let's do a movie night!","Wanna play?","Want a cuddle buddy?","Shhhh","I don't bite","Can I have a bread?","Night night","Wanna play?"];

for (var i=0 ; i<12 ; i++) {
    fileNames.push(captionTexts[i]+"_optimized");
    photos.push("<img src='images/"+fileNames[i]+".jpg'>");
    image = openList + photos[i];
    description = openMiddleTag + openDescTag + descTexts[i] + closeDescTag + divcloseList + divcloseList;
    caption = openCaptionTag + captionTexts[i] + closeCaptionTag;
    whole = divopenList + image + description + caption + divcloseList;
    imageList.push(whole);
}
document.getElementById("available").innerHTML = imageList.join(" ");