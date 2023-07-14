var count=1;
var realcounter=0;
var money=15000;
var result;
var value=0;
var savedFruit="";
var sellcounter=0;
var salesleft=20;

function roll(){
    var rollChance=(Math.floor((Math.random()*10000)+1));
    var commonFruit=(Math.floor((Math.random()*4)+1));
    var rareFruit=(Math.floor((Math.random()*5)+1));
    var epicFruit=(Math.floor((Math.random()*2)+1));
    var legendaryFruit=(Math.floor((Math.random()*11)+1));
    var mythicalFruit=(Math.floor((Math.random()*4)+1));
    var percentage="";
    var img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CsFM2FJTwzsWaVC6q-NCUgAAAA%26pid%3DApi&f=1&ipt=84ece9e9f7ecd2eff45a7f4eb14e4338231c3a84fac8a9b6f7f7cbf398dcc34a&ipo=images";
    var Fruit="Test";
    var color="#0f0";
    if(value>1000){
        result= confirm("Are you sure you want to roll?");
        if(result==false){
            return;
        }
    }
    if(money>=500){
        money=money-500;
    }
    if(count==50){
        if(rollChance<=8000&&rollChance>0){
            color="yellow";
            count=1;
            percentage=" 4% (pity = 80%)";
            value=5000;
            if(legendaryFruit==1){
                Fruit="Gravity";
                img="images/zushi.png";
            }
            else if(legendaryFruit==2){
                Fruit="Quake";
                img="images/guura.v3.png";
            }
            if(legendaryFruit==3){
                Fruit="Sand";
                img="images/SunaBetterQuality.png";
            }
            else if(legendaryFruit==4){
                Fruit="Ice";
                img="images/Ice.png";
            }
            else if(legendaryFruit==5){
                Fruit="String";
                img="images/string.png";
            }
            else if(legendaryFruit==6){
                Fruit="Paw";
                img="images/paw.png";
            }
            else if(legendaryFruit==7){
                Fruit="Flame";
                img="images/flame.png";
            }
            else if(legendaryFruit==8){
                Fruit="Magma";
                img="images/magma.png";
            }
            else if(legendaryFruit==9){
                Fruit="Light";
                img="images/light.png";
            }
            else if(legendaryFruit==10){
                Fruit="Dark";
                img="images/dark.png";
            }
            else if(legendaryFruit==11){
                Fruit="Snow";
                img="images/snow.png";
            }
        }
        if(rollChance<=10000&&rollChance>8000){
            color="red";
            count=1;
            percentage=" 1% (pity=20%)";
            value=7500;
            if(mythicalFruit==1){
                Fruit="Phoenix";
                img="images/phoeninx.png";
            }
            else if(mythicalFruit==2){
                Fruit="Dough";
                img="images/dough.png";
            }
            else if(mythicalFruit==3){
                Fruit="Operator";
                img="images/operator.png";
            }
            else if(mythicalFruit==4){
                Fruit="Venom";
                img="images/venom.png";
            }
         
        }
    }
    else if(rollChance<=6000&&rollChance>0){
        color="white";
        percentage="(60%)";
        value=100;
        if(commonFruit==1){
            Fruit="Kilo";
            img="images/kilo.png";
            img.height='100px';
            img.width='100px';
        }
        else if(commonFruit==2){
            Fruit="Clear";            
            img="images/clear.png";
        }
        else if(commonFruit==3){
            Fruit="Spin";
            img="images/spin.png";
        }
        else if(commonFruit==4){
            Fruit="Heal";
            img="images/heal.png";
        }
    }
    else if(rollChance<=8500&&rollChance>6000){
        color="cyan";
        percentage="(25%)";
        value=250;
        if(rareFruit==1){
            Fruit="Barrier";
            img="images/barrier.png";
        }
        else if(rareFruit==2){
            Fruit="Bomb";
            img="images/bomb.png";
        }
        else if(rareFruit==3){
            Fruit="Rubber";
            img="images/rubber.png";
        }
        else if(rareFruit==4){
            Fruit="Hollow"
            img="images/hollow.png";
        }
        else if(rareFruit==5){
            Fruit="Mero";
            img="images/mero.png";
        }
    }
    else if(rollChance<=9500&&rollChance>8500){
        color="purple";
        percentage="(10%)";
        value=500;
        if (epicFruit==1){
            Fruit="Revive";
            img="images/rewvive.png";
        }
        else if (epicFruit==2){
            Fruit="Spring";
            img="images/spring.png";
        }
    }
    else if(rollChance<=9900&&rollChance>9500){
        color="yellow";
        count=1;
        value=5000;
        percentage="4%";
        if(legendaryFruit==1){
            Fruit="Gravity";
            img="image/zushi.png";
        }
        else if(legendaryFruit==2){
            Fruit="Quake";
            img="image/guura.v3.png";
        }
        if(legendaryFruit==3){
            Fruit="Sand";
            img="img/SunaBetterQuality.png";
        }
        else if(legendaryFruit==4){
            Fruit="Ice";
            img="images/Ice.png";
        }
        else if(legendaryFruit==5){
            Fruit="String";
            img="images/string.png";
        }
        else if(legendaryFruit==6){
            Fruit="Paw";
            img="images/paw.png";
        }
        else if(legendaryFruit==7){
            Fruit="Flame";
            img="images/flame.png";
        }
        else if(legendaryFruit==8){
            Fruit="Magma";
            img="images/magma.png";
        }
        else if(legendaryFruit==9){
            Fruit="Light";
            img="images/light.png";
        }
        else if(legendaryFruit==10){
            Fruit="Dark";
            img="images/dark.png";
        }
        else if(legendaryFruit==11){
            Fruit="Snow";
            img="images/snow.png";
        }
    }
    else if(rollChance<=10000&&rollChance>9900){
        color="red";
        count=1;
        value=10000;
        percentage="(1%)";
        if(mythicalFruit==1){
            Fruit="Phoenix";
            img="images/phoeninx.png";
        }
        else if(mythicalFruit==2){
            Fruit="Dough";
            img="images/dough.png";
        }
        else if(mythicalFruit==3){
            Fruit="Operator";
            img="images/operator.png";
        }
        else if(mythicalFruit==4){
            Fruit="Venom";
            img="images/venom.png";
        }
    
    }
savedFruit = Fruit;
localStorage.setItem(Fruit, savedFruit);
document.body.innerHTML = '';
document.write("<span style='position:absolute; left: 0;font-size:25px'>Current Fruit: "+savedFruit+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'>B$:"+money+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'<br><br>Sales Left: "+salesleft+"</span>");
document.write("<span style='position:absolute; left: 0;font-size:25px'<br><br>Score: "+realcounter+" spins"+"</span>");
document.write("<button style='width:250px; height:55px;font-size:20px; border-radius:10px', onClick='roll()'>ROLL AGAIN (B$500)</button>"+" "+"<button style='width:250px; height:55px;font-size:20px;border-radius:10px', onClick='sell()'>SELL FRUIT</button></br>");
document.write("<hr style='border:1px solid black'>Pity: "+count+"/50"); 
count++;
realcounter++;
console.log(Fruit)
document.write("<br />You Rolled...<span style='color: " + color + "'>" + Fruit + " " +percentage+"</span>!");
document.write("<br /><img src='" + img + "'/>")
document.body.style.textAlign="center";
document.body.style.fontSize="40";
document.body.style.backgroundImage="url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fgrand-piece-online%2Fimages%2F5%2F54%2FKori_Island.png%2Frevision%2Flatest%3Fcb%3D20201124155114&f=1&nofb=1&ipt=75e061bcd4a325fca2f07033fe7e287b1f00d9677b0e8c2bf607580f5ed362ee&ipo=images')";
document.body.style.backgroundSize="2000px";

if(money<500){
    document.body.innerHTML='';
    document.write("Game Over, You have lasted: "+realcounter+" Spins<br/>");
    document.write("<button style='width:250px; height:55px;font-size:20px; border-radius:10px', onClick='location.reload()'>HOME</button>")
}
}
console.log(money);
function sell(){
    if(value>0){
    if(sellcounter<20){
        salesleft=salesleft-1;
document.body.innerHTML = '';
money=money+value;
console.log(money);
savedFruit="N/A";
document.write("<span style='position:absolute; left: 0;font-size:25px'>Current Fruit: "+savedFruit+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'>B$:"+money+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'<br><br>Sales Left: "+salesleft+"</span>");
document.write("<span style='position:absolute; left: 0;font-size:25px'<br><br>Score: "+realcounter+" spins"+"</span>");
document.write("<button style='width:250px; height:55px;font-size:20px; border-radius:10px', onClick='roll()'>ROLL AGAIN (B$500)</button>"+" "+"<button style='width:250px; height:55px;font-size:20px;border-radius:10px', onClick='sell()'>SELL FRUIT</button></br>");
document.write("<hr style='border:1px solid black'>Pity: "+count+"/50");    
document.write("<br/> Fruit Sold! +"+"B$"+value);
document.body.style.textAlign="center";
document.body.style.fontSize="40";
document.body.style.backgroundImage="url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fgrand-piece-online%2Fimages%2F5%2F54%2FKori_Island.png%2Frevision%2Flatest%3Fcb%3D20201124155114&f=1&nofb=1&ipt=75e061bcd4a325fca2f07033fe7e287b1f00d9677b0e8c2bf607580f5ed362ee&ipo=images')";
document.body.style.backgroundSize="2000px";
value=0;
sellcounter++;
}
    }
    else {
document.body.innerHTML='';
savedFruit="N/A";
document.write("<span style='position:absolute; left: 0;font-size:25px'>Current Fruit: "+savedFruit+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'>B$:"+money+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'<br><br>Sales Left: "+salesleft+"</span>");
document.write("<span style='position:absolute; left: 0;font-size:25px'<br><br>Score: "+realcounter+" spins"+"</span>");
document.write("<button style='width:250px; height:55px;font-size:20px; border-radius:10px', onClick='roll()'>ROLL AGAIN (B$500)</button>"+" "+"<button style='width:250px; height:55px;font-size:20px;border-radius:10px', onClick='sell()'>SELL FRUIT</button></br>");
document.write("<hr style='border:1px solid black'>Pity: "+count+"/50");    
document.write("<br/> You do not have a fruit to sell!");
document.body.style.textAlign="center";
document.body.style.fontSize="40";
document.body.style.backgroundImage="url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fgrand-piece-online%2Fimages%2F5%2F54%2FKori_Island.png%2Frevision%2Flatest%3Fcb%3D20201124155114&f=1&nofb=1&ipt=75e061bcd4a325fca2f07033fe7e287b1f00d9677b0e8c2bf607580f5ed362ee&ipo=images')";
document.body.style.backgroundSize="2000px";  
    }
if(sellcounter>=20){
    document.body.innerHTML='';
    money=money;
    document.write("<span style='position:absolute; left: 0;font-size:25px'>Current Fruit: "+savedFruit+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'>B$:"+money+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'<br><br>Sales Left: "+salesleft+"</span>");
document.write("<span style='position:absolute; left: 0;font-size:25px'<br><br>Score: "+realcounter+" spins"+"</span>");
document.write("<button style='width:250px; height:55px;font-size:20px; border-radius:10px', onClick='roll()'>ROLL AGAIN (B$500)</button>"+" "+"<button style='width:250px; height:55px;font-size:20px;border-radius:10px', onClick='sell()'>SELL FRUIT</button></br>");
document.write("<hr style='border:1px solid black'>Pity: "+count+"/50");    
document.write("<br/> Oops, you have sold 20 times, you cannot sell anymore fruits...");
document.body.style.textAlign="center";
document.body.style.fontSize="40";
document.body.style.backgroundImage="url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fgrand-piece-online%2Fimages%2F5%2F54%2FKori_Island.png%2Frevision%2Flatest%3Fcb%3D20201124155114&f=1&nofb=1&ipt=75e061bcd4a325fca2f07033fe7e287b1f00d9677b0e8c2bf607580f5ed362ee&ipo=images')";
document.body.style.backgroundSize="2000px";
}
}
