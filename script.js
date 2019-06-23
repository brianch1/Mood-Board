var happyImages = ["https://images.pexels.com/photos/160739/smilies-bank-sit-rest-160739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?cs=srgb&dl=active-activity-beach-40815.jpg&fm=jpg"];
var sadImages = ["https://alpha.aeon.co/images/f69e588b-04b4-4268-9c6e-da955aeb21bd/idea_SIZED-Lauren-C-3888834634_a5635cf162_o.jpg","http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/very-sad-images54.gif","http://www.parttimely.com/wp-content/uploads/2018/10/1-4-500x321.jpg"];
var tiredImages = ["https://cbsnews2.cbsistatic.com/hub/i/r/2018/10/16/eaa131db-1851-4339-9076-9425209d872c/thumbnail/1200x630/501fce57a01a2d7480d75ced36cc85d1/tired-worker-gettyimages-664861556.jpg","https://www.sleepscore.com/wp-content/uploads/2018/03/feeling-tired-2560x1280.jpg","https://images.unsplash.com/photo-1519710695732-5ac89314e0e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"];
var hungryImages = ["https://media.gettyimages.com/photos/hungry-picture-id108203450?s=612x612","https://image.shutterstock.com/image-vector/young-suffering-sad-man-hungry-260nw-703226419.jpg","https://assets.parents.com/s3fs-public/styles/nfp_1080_portrait/public/hungry-child.jpg?s6wZccXb7b6.w4eFYtyCXQvuguCPhmsN" ];


$('button').click(function(){
    var mood = $('input').val();
    $('.images').html('');
        if(mood === "happy"){
            displayImages(happyImages);
            changeBackgroundColor("blue");
            changeTextColor("gray");
            
        }else if(mood === "sad"){
            displayImages(sadImages);
            changeBackgroundColor("black");
            changeTextColor("white");

        }else if(mood === "hungry"){
            displayImages(hungryImages);
            changeBackgroundColor("red");

        }else if(mood === "tired"){
            displayImages(tiredImages);
            changeBackgroundColor("gray");
        }
});

function happyMood(){
   displayImages(happyImages);
   changeBackgroundColor("blue");
   changeTextColor("gray");
}
function sadMood(){
    displayImages(sadImages);
    changeBackgroundColor("black");
    changeTextColor("white");
}
function tiredMood(){
    displayImages(tiredImages);
    changeBackgroundColor("gray");
}
function hungryMood(){
    displayImages(hungryImages);
    changeBackgroundColor("red");
}

function changeBackgroundColor(color){
    $('body').css('background-color', color);
}

function changeTextColor(color){
    $('.text').css('color', color);
}

function displayImages(images){
    images.forEach(function(image){
        $('.images').append("<img src='" + image + "' />");
    });
    
  
}