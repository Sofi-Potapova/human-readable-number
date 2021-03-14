module.exports = function toReadable (number) {
    let str ="";
    if(number == 0)
    return "zero";
    if(number >= 100 && number<=999) {
    if (number >= 100 && number < 200) {
    str+="one hundred"
    number-=100;
    
    }
    if (number >= 200 && number < 300) {
    str+="two hundred"
    number-=200;
    
    }
    if (number >= 300 && number < 400) {
    str+="three hundred"
    number-=300;
    
    }
    if (number >= 400 && number < 500) {
    str+="four hundred"
    number-=400;
    
    }
    if (number >= 500 && number < 600) {
    str+="five hundred"
    number-=500;
    
    }
    if (number >= 600 && number < 700) {
    str+="six hundred"
    number-=600;
    
    }
    if (number >= 700 && number < 800) {
    str+="seven hundred"
    number-=700;
    
    }
    if (number >= 800 && number < 900) {
    str+="eight hundred"
    number-=800;
    
    }
    if (number >= 900) {
    str+="nine hundred"
    number-=900;
    
    }
    }
    if(number >= 10 && number<=99) {
    if (number >= 10 && number < 11) {
    if(str.length != 0)
    str+=" ten"
    else
    str+="ten"
    number-=10;
    
    }
    if (number === 11) {
    if(str.length != 0)
    str+=" eleven"
    else
    str+="eleven"
    number-=11;
    
    }
    if (number === 12) {
    if(str.length != 0)
    str+=" twelve"
    else
    str+="twelve"
    number-=12;
    
    }
    if (number === 13) {
    if(str.length != 0)
    str+=" thirteen"
    else
    str+="thirteen"
    number-=13;
    
    }
    if (number === 14) {
    if(str.length != 0)
    str+=" fourteen"
    else
    str+="fourteen"
    number-=14;
    
    }
    if (number === 15) {
    if(str.length != 0)
    str+=" fifteen"
    else
    str+="fifteen"
    number-=15;
    
    }
    if (number === 16) {
    if(str.length != 0)
    str+=" sixteen"
    else
    str+="sixteen"
    number-=16;
    
    }
    if (number === 17) {
    if(str.length != 0)
    str+=" seventeen"
    else
    str+="seventeen"
    number-=17;
    
    }
    if (number === 18) {
    if(str.length != 0)
    str+=" eighteen"
    else
    str+="eighteen"
    number-=18;
    
    }
    if (number === 19) {
    if(str.length != 0)
    str+=" nineteen"
    else
    str+="nineteen"
    number-=19;
    
    }
    if (number >= 20 && number < 30) {
    if(str.length != 0)
    str+=" twenty"
    else
    str+="twenty"
    number-=20;
    
    }
    if (number >= 30 && number < 40) {
    if(str.length != 0)
    str+=" thirty"
    else
    str+="thirty"
    number-=30;
    
    }
    if (number >= 40 && number < 50) {
    if(str.length != 0)
    str+=" forty"
    else
    str+="forty"
    number-=40;
    
    }
    if (number >= 50 && number < 60) {
    if(str.length != 0)
    str+=" fifty"
    else
    str+="fifty"
    number-=50;
    
    }
    if (number >= 60 && number < 70) {
    if(str.length != 0)
    str+=" sixty"
    else
    str+="sixty"
    number-=60;
    
    }
    if (number >= 70 && number < 80) {
    if(str.length != 0)
    str+=" seventy"
    else
    str+="seventy"
    number-=70;
    
    }
    if (number >= 80 && number < 90) {
    if(str.length != 0)
    str+=" eighty"
    else
    str+="eighty"
    number-=80;
    
    }
    if (number >= 90) {
    if(str.length != 0)
    str+=" ninety"
    else
    str+="ninety"
    number-=90;
    
    }
    }
    if(number > 0 && number<=9) {
    if (number >= 1 && number < 2) {
    if(str.length != 0)
    str+=" one"
    else
    str+="one"
    number-=1;
    
    }
    if (number >= 2 && number < 3) {
    if(str.length != 0)
    str+=" two"
    else
    str+="two"
    number-=2;
    
    }
    if (number >= 3 && number < 4) {
    if(str.length != 0)
    str+=" three"
    else
    str+="three"
    number-=3;
    
    }
    if (number >= 4 && number < 5) {
    if(str.length != 0)
    str+=" four"
    else
    str+="four"
    
    number-=4;
    
    }
    if (number >= 5 && number < 6) {
    if(str.length != 0)
    str+=" five"
    else
    str+="five"
    
    number-=5;
    
    }
    if (number >= 6 && number < 7) {
    if(str.length != 0)
    str+=" six"
    else
    str+="six"
    
    number-=6;
    
    }
    if (number >= 7 && number < 8) {
    if(str.length != 0)
    str+=" seven"
    else
    str+="seven"
    
    number-=7;
    
    }
    if (number >= 8 && number < 9) {
    if(str.length != 0)
    str+=" eight"
    else
    str+="eight"
    
    number-=8;
    
    }
    if (number == 9) {
    if(str.length != 0)
    str+=" nine"
    else
    str+="nine"
    number-=9;
    }
    }
    
    return str;
    }
