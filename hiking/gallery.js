var para = document.getElementById("name");
para.innerHTML = "Bakersfall";
var imgList = ["images/gallery/bakersfall1.jpg",
                "images/gallery/bakersfall2.jpg",
                "images/gallery/bakersfall3.jpg",
                "images/gallery/bakersfall4.jpg",
                "images/gallery/bakersfall5.jpg",
                "images/gallery/ella1.jpg",
                "images/gallery/ella2.jpg",
                "images/gallery/ella3.jpg",
                "images/gallery/ella4.webp",
                "images/gallery/ella5.jpg",
                "images/gallery/hiking1.jpg",
                "images/gallery/hiking2.jpg",
                "images/gallery/hiking3.jpg",
                "images/gallery/hiking4.jpg",
                "images/gallery/hiking5.webp",
                "images/gallery/knuckles1.jpg",
                "images/gallery/knuckles2.jpg",
                "images/gallery/knuckles3.jpg",
                "images/gallery/knuckles4.jpg",
                "images/gallery/knuckles5.jpg",
                "images/gallery/little_adams_peak1.webp",
                "images/gallery/little_adams_peak2.jpg",
                "images/gallery/little_adams_peak3.jpg",
                "images/gallery/little_adams_peak4.jpg",
                "images/gallery/little_adams_peak5.webp",
                "images/gallery/mahaweli1.jpg",
                "images/gallery/mahaweli2.jpg",
                "images/gallery/mahaweli3.jpg",
                "images/gallery/mahaweli4.jpg",
                "images/gallery/mahaweli5.jpg",
                "images/gallery/pidurangala_and_sigiriya1.webp",
                "images/gallery/pidurangala_and_sigiriya2.jpg",
                "images/gallery/pidurangala_and_sigiriya3.jpg",
                "images/gallery/pidurangala_and_sigiriya4.webp",
                "images/gallery/pidurangala_and_sigiriya5.webp",
                "images/gallery/sinharaja1.jpg",
                "images/gallery/sinharaja2.webp",
                "images/gallery/sinharaja3.jpg",
                "images/gallery/sinharaja4.jpg",
                "images/gallery/sinharaja5.jpg",
                "images/gallery/worldendcliff1.jpg",
                "images/gallery/worldendcliff2.jpg",
                "images/gallery/worldendcliff3.jpg",
                "images/gallery/worldendcliff4.jpg",
                "images/gallery/worldendcliff5.jpg"];
function change(){

    var para = document.getElementById("name");
    var img  = document.getElementById("img");
    var imgsrc = img.getAttribute('src');

    //1
    if(imgsrc==imgList[0]){
        img.setAttribute('src',imgList[5]);
        para.innerHTML = "Ella Rock";
    }else if(imgsrc==imgList[5]){
        img.setAttribute('src',imgList[10]);
        para.innerHTML = "Hiking";
    }else if(imgsrc == imgList[10]){
        img.setAttribute('src',imgList[15]);
        para.innerHTML = "Knuckles Mountain";
    }else if(imgsrc == imgList[15]){
        img.setAttribute('src',imgList[20]);
        para.innerHTML = "Little Adam's Peak";
    }else if(imgsrc == imgList[20]){
        img.setAttribute('src',imgList[25]);
        para.innerHTML = "Mahaweli River";
    }else if(imgsrc == imgList[25]){
        img.setAttribute('src',imgList[30]);
        para.innerHTML = "Pidurangala and Sigiriya";
    }else if(imgsrc == imgList[30]){
        img.setAttribute('src',imgList[35]);
        para.innerHTML = "Sinharaja Forest";
    }else if(imgsrc == imgList[35]){
        img.setAttribute('src',imgList[40]);
        para.innerHTML = "World End Cliff";
    }

    //2
    else if(imgsrc == imgList[40]){
        img.setAttribute('src',imgList[1]);
        para.innerHTML = "Bakers Fall";
    }else if(imgsrc==imgList[1]){
        img.setAttribute('src',imgList[6]);
        para.innerHTML = "Ella Rock";
    }else if(imgsrc==imgList[6]){
        img.setAttribute('src',imgList[11]);
        para.innerHTML = "Hiking";
    }else if(imgsrc == imgList[11]){
        img.setAttribute('src',imgList[16]);
        para.innerHTML = "Knuckles Mountain";
    }else if(imgsrc == imgList[16]){
        img.setAttribute('src',imgList[21]);
        para.innerHTML = "Little Adam's Peak";
    }else if(imgsrc == imgList[21]){
        img.setAttribute('src',imgList[26]);
        para.innerHTML = "Mahaweli River";
    }else if(imgsrc == imgList[26]){
        img.setAttribute('src',imgList[31]);
        para.innerHTML = "Pidurangala and Sigiriya";
    }else if(imgsrc == imgList[31]){
        img.setAttribute('src',imgList[36]);
        para.innerHTML = "Sinharaja Forest";
    }else if(imgsrc == imgList[36]){
        img.setAttribute('src',imgList[41]);
        para.innerHTML = "World End Cliff";
    }

    //3
    else if(imgsrc == imgList[41]){
        img.setAttribute('src',imgList[2]);
        para.innerHTML = "Bakers Fall";
    }else if(imgsrc==imgList[2]){
        img.setAttribute('src',imgList[7]);
        para.innerHTML = "Ella Rock";
    }else if(imgsrc==imgList[7]){
        img.setAttribute('src',imgList[12]);
        para.innerHTML = "Hiking";
    }else if(imgsrc == imgList[12]){
        img.setAttribute('src',imgList[17]);
        para.innerHTML = "Knuckles Mountain";
    }else if(imgsrc == imgList[17]){
        img.setAttribute('src',imgList[22]);
        para.innerHTML = "Little Adam's Peak";
    }else if(imgsrc == imgList[22]){
        img.setAttribute('src',imgList[27]);
        para.innerHTML = "Mahaweli River";
    }else if(imgsrc == imgList[27]){
        img.setAttribute('src',imgList[32]);
        para.innerHTML = "Pidurangala and Sigiriya";
    }else if(imgsrc == imgList[32]){
        img.setAttribute('src',imgList[37]);
        para.innerHTML = "Sinharaja Forest";
    }else if(imgsrc == imgList[37]){
        img.setAttribute('src',imgList[42]);
        para.innerHTML = "World End Cliff";
    }

    //4
    else if(imgsrc == imgList[42]){
        img.setAttribute('src',imgList[3]);
        para.innerHTML = "Bakers Fall";
    }else if(imgsrc==imgList[3]){
        img.setAttribute('src',imgList[8]);
        para.innerHTML = "Ella Rock";
    }else if(imgsrc==imgList[8]){
        img.setAttribute('src',imgList[13]);
        para.innerHTML = "Hiking";
    }else if(imgsrc == imgList[13]){
        img.setAttribute('src',imgList[18]);
        para.innerHTML = "Knuckles Mountain";
    }else if(imgsrc == imgList[18]){
        img.setAttribute('src',imgList[23]);
        para.innerHTML = "Little Adam's Peak";
    }else if(imgsrc == imgList[23]){
        img.setAttribute('src',imgList[28]);
        para.innerHTML = "Mahaweli River";
    }else if(imgsrc == imgList[28]){
        img.setAttribute('src',imgList[33]);
        para.innerHTML = "Pidurangala and Sigiriya";
    }else if(imgsrc == imgList[33]){
        img.setAttribute('src',imgList[38]);
        para.innerHTML = "Sinharaja Forest";
    }else if(imgsrc == imgList[38]){
        img.setAttribute('src',imgList[43]);
        para.innerHTML = "World End Cliff";
    }

    //5
    else if(imgsrc == imgList[43]){
        img.setAttribute('src',imgList[4]);
        para.innerHTML = "Bakers Fall";
    }else if(imgsrc==imgList[4]){
        img.setAttribute('src',imgList[9]);
        para.innerHTML = "Ella Rock";
    }else if(imgsrc==imgList[9]){
        img.setAttribute('src',imgList[14]);
        para.innerHTML = "Hiking";
    }else if(imgsrc == imgList[14]){
        img.setAttribute('src',imgList[19]);
        para.innerHTML = "Knuckles Mountain";
    }else if(imgsrc == imgList[19]){
        img.setAttribute('src',imgList[24]);
        para.innerHTML = "Little Adam's Peak";
    }else if(imgsrc == imgList[24]){
        img.setAttribute('src',imgList[29]);
        para.innerHTML = "Mahaweli River";
    }else if(imgsrc == imgList[29]){
        img.setAttribute('src',imgList[34]);
        para.innerHTML = "Pidurangala and Sigiriya";
    }else if(imgsrc == imgList[34]){
        img.setAttribute('src',imgList[39]);
        para.innerHTML = "Sinharaja Forest";
    }else if(imgsrc == imgList[39]){
        img.setAttribute('src',imgList[44]);
        para.innerHTML = "World End Cliff";
    }else if(imgsrc == imgList[44]){
        img.setAttribute('src',imgList[0]);
        para.innerHTML = "Bakers Fall";
    }


}
/*
function bigImg(x) {
    x.style.height = "60vw";
    x.style.width = "90vw";
}

function normalImg(x) {
    x.style.height = "50vw";
    x.style.width = "80vw";
}
*/

function insertImg(tblimage,name){
    var src = tblimage.getAttribute('src');
    var textname = name;
    var para = document.getElementById("name");
    para.innerHTML = textname;
    var img  = document.getElementById("img");
    img.setAttribute('src',src);
}