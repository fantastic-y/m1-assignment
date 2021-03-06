var photos = [];
var fileNames = [];
var imageList = [];
var image;
var lightBoxes;
var text;
var whole;
var openList = "<div class='photo'>";
var openLightbox = '<a href="#/" class="lightbox-toggle">';
var closeLightbox = "</a>";
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
        photos.push("<img src='images/"+fileNames[i]+".jpg' alt=" + captionTexts[i] +">");
        lightBoxes = openLightbox + photos[i] + closeLightbox
        image = openList + lightBoxes;
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

$(document).ready(function(){
    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

    //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }
    //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');
        if ($altvalue=="armstrong") {
            var img = $('.img-text:nth-child(1) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        } else if ($altvalue=="aurora") {
            var img = $('.img-text:nth-child(2) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }   else if ($altvalue=="bo") {
            var img = $('.img-text:nth-child(3) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="cadele") {
            var img = $('.img-text:nth-child(4) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="dumbo") {
            var img = $('.img-text:nth-child(5) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="guston") {
            var img = $('.img-text:nth-child(6) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="rose") {
            var img = $('.img-text:nth-child(7) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="shay") {
            var img = $('.img-text:nth-child(8) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="turtle") {
            var img = $('.img-text:nth-child(9) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="wheaty") {
            var img = $('.img-text:nth-child(10) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="wiley") {
            var img = $('.img-text:nth-child(11) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="zoro") {
            var img = $('.img-text:nth-child(12) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });
    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
    $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
    $('.backdrop').css('display', 'none');
    });
    $('.box').fadeOut();
    });
});