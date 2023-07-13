var count=1;
var realcounter=0;
var money=10000;
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
    if(count==5){
        if(rollChance<=8000&&rollChance>0){
            color="yellow";
            count=1;
            percentage=" 1% (pity = 80%)";
            value=5000;
            if(legendaryFruit==1){
                Fruit="Gravity";
                img="https ://static.wikia.nocookie.net/grand-piece-online/images/9/9a/Zushi-new-fruit-pngpng.png/revision/latest?cb=20230129125200";
            }
            else if(legendaryFruit==2){
                Fruit="Quake";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/d/df/879047288679460904.v3.png/revision/latest?cb=20211027093303";
            }
            if(legendaryFruit==3){
                Fruit="Sand";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/6/66/SunaBetterQuality.png/revision/latest?cb=20220704005721";
            }
            else if(legendaryFruit==4){
                Fruit="Ice";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/7/7f/819439725621936148.v3.png/revision/latest?cb=20211027094152";
            }
            else if(legendaryFruit==5){
                Fruit="String";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/c/c2/Itopng.v1.png/revision/latest?cb=20230129125549";
            }
            else if(legendaryFruit==6){
                Fruit="Paw";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/c/c0/Paw-new-fruit-pngpng.png/revision/latest?cb=20230129125054";
            }
            else if(legendaryFruit==7){
                Fruit="Flame";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/3/35/FlareFlareFruit.png/revision/latest?cb=20201126221308";
            }
            else if(legendaryFruit==8){
                Fruit="Magma";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/8/8a/Magu-new-fruit-pngpng.png/revision/latest?cb=20230129125447";
            }
            else if(legendaryFruit==9){
                Fruit="Light";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/6/69/PikaPikaNewQuality.png/revision/latest?cb=20220706164626";
            }
            else if(legendaryFruit==10){
                Fruit="Dark";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/e/e8/YamiYaminoMiEdit.png/revision/latest?cb=20221106153257";
            }
            else if(legendaryFruit==11){
                Fruit="Snow";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/d/d3/Yuki.png/revision/latest?cb=20221227130525";
            }
        }
        if(rollChance<=10000&&rollChance>8000){
            color="red";
            count=1;
            percentage=" 0.01% (pity=20%)";
            value=7500;
            if(mythicalFruit==1){
                Fruit="Phoenix";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/1/18/Torirevision.png/revision/latest?cb=20221225102637";
            }
            else if(mythicalFruit==2){
                Fruit="Dough";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/a/a2/Mochi_model_test.png/revision/latest?cb=20220531201714";
            }
            else if(mythicalFruit==3){
                Fruit="Operator";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/a/a2/Ope_Ope_no_mi.png/revision/latest?cb=20230622192745";
            }
            else if(mythicalFruit==4){
                Fruit="Venom";
                img="https://static.wikia.nocookie.net/grand-piece-online/images/e/e2/Doku.png/revision/latest?cb=20230303205950";
            }
         
        }
    }
    else if(rollChance<=6000&&rollChance>0){
        color="white";
        percentage="(60%)";
        value=100;
        if(commonFruit==1){
            Fruit="Kilo";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/a/a3/KiloTransparent.png/revision/latest?cb=20211102230159";
            img.height='100px';
            img.width='100px';
        }
        else if(commonFruit==2){
            Fruit="Clear";            
            img="https://static.wikia.nocookie.net/grand-piece-online/images/5/55/NewSukeTransparent.png/revision/latest?cb=20221223044059";
        }
        else if(commonFruit==3){
            Fruit="Spin";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/3/38/85-A3-E72-F-BAA3-49-ED-AE31-97-E51-A3-ACBC7.png/revision/latest?cb=20211105235916";
        }
        else if(commonFruit==4){
            Fruit="Heal";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/e/ed/ChiyuChiyuNoMi.png/revision/latest?cb=20230626062616";
        }
    }
    else if(rollChance<=8900&&rollChance>6000){
        color="cyan";
        percentage="(29%)";
        value=250;
        if(rareFruit==1){
            Fruit="Barrier";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/3/37/D792-C975-4047-4107-A1-AE-05-D7-FC78012-C.png/revision/latest?cb=20211028201342";
        }
        else if(rareFruit==2){
            Fruit="Bomb";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/c/c6/Bombpng.png/revision/latest?cb=20230129125316";
        }
        else if(rareFruit==3){
            Fruit="Rubber";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/6/67/Gomu-actualpng.v4.png/revision/latest?cb=20230129124752";
        }
        else if(rareFruit==4){
            Fruit="Hollow"
            img="https://static.wikia.nocookie.net/grand-piece-online/images/6/6c/Download_%281%29.png/revision/latest?cb=20211116221445";
        }
        else if(rareFruit==5){
            Fruit="Mero";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/2/24/819581845749497858.v3.png/revision/latest?cb=20211027093109";
        }
    }
    else if(rollChance<=9900&&rollChance>8900){
        color="purple";
        percentage="(10%)";
        value=500;
        if (epicFruit==1){
            Fruit="Revive";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/2/2e/Yomi2.png/revision/latest?cb=20220528141829";
        }
        else if (epicFruit==2){
            Fruit="Spring";
            img="https://i.imgur.com/8F34VLp.png";
        }
    }
    else if(rollChance<=9900&&rollChance>9900){
        color="yellow";
        count=1;
        value=5000;
        percentage="1%";
        if(legendaryFruit==1){
            Fruit="Gravity";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/9/9a/Zushi-new-fruit-pngpng.png/revision/latest?cb=20230129125200";
        }
        else if(legendaryFruit==2){
            Fruit="Quake";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/d/df/879047288679460904.v3.png/revision/latest?cb=20211027093303";
        }
        if(legendaryFruit==3){
            Fruit="Sand";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/6/66/SunaBetterQuality.png/revision/latest?cb=20220704005721";
        }
        else if(legendaryFruit==4){
            Fruit="Ice";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/7/7f/819439725621936148.v3.png/revision/latest?cb=20211027094152";
        }
        else if(legendaryFruit==5){
            Fruit="String";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/c/c2/Itopng.v1.png/revision/latest?cb=20230129125549";
        }
        else if(legendaryFruit==6){
            Fruit="Paw";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/c/c0/Paw-new-fruit-pngpng.png/revision/latest?cb=20230129125054";
        }
        else if(legendaryFruit==7){
            Fruit="Flame";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/3/35/FlareFlareFruit.png/revision/latest?cb=20201126221308";
        }
        else if(legendaryFruit==8){
            Fruit="Magma";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/8/8a/Magu-new-fruit-pngpng.png/revision/latest?cb=20230129125447";
        }
        else if(legendaryFruit==9){
            Fruit="Light";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/6/69/PikaPikaNewQuality.png/revision/latest?cb=20220706164626";
        }
        else if(legendaryFruit==10){
            Fruit="Dark";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/e/e8/YamiYaminoMiEdit.png/revision/latest?cb=20221106153257";
        }
        else if(legendaryFruit==11){
            Fruit="Snow";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/d/d3/Yuki.png/revision/latest?cb=20221227130525";
        }
    }
    else if(rollChance<=9999&&rollChance>9900){
        color="red";
        count=1;
        value=10000;
        percentage="(0.01%)";
        if(mythicalFruit==1){
            Fruit="Phoenix";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/1/18/Torirevision.png/revision/latest?cb=20221225102637";
        }
        else if(mythicalFruit==2){
            Fruit="Dough";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/a/a2/Mochi_model_test.png/revision/latest?cb=20220531201714";
        }
        else if(mythicalFruit==3){
            Fruit="Operator";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/a/a2/Ope_Ope_no_mi.png/revision/latest?cb=20230622192745";
        }
        else if(mythicalFruit==4){
            Fruit="Venom";
            img="https://static.wikia.nocookie.net/grand-piece-online/images/e/e2/Doku.png/revision/latest?cb=20230303205950";
        }
    
    }
savedFruit = Fruit;
localStorage.setItem(Fruit, savedFruit);
document.body.innerHTML = '';
document.write("<span style='position:absolute; left: 0;font-size:25px'>Current Fruit: "+savedFruit+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'>B$:"+money+"</span>");
document.write("<span style='position:absolute; right: 0;font-size:25px'<br><br>Sales Left: "+salesleft+"</span>");
document.write("<button style='width:250px; height:55px;font-size:20px', onClick='roll()'>ROLL AGAIN (B$500)</button>"+" "+"<button style='width:250px; height:55px;font-size:20px', onClick='sell()'>SELL FRUIT</button></br>");
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
    document.write("Game Over, You have lasted: "+realcounter+" Spins");
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
document.write("<button style='width:250px; height:55px;font-size:20px;', onClick='roll()'>ROLL AGAIN (B$500)</button>"+" "+"<button style='width:250px; height:55px;font-size:20px', onClick='sell()'>SELL FRUIT</button></br>");
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
document.write("<button style='width:250px; height:55px;font-size:20px;', onClick='roll()'>ROLL AGAIN (B$500)</button>"+" "+"<button style='width:250px; height:55px;font-size:20px', onClick='sell()'>SELL FRUIT</button></br>");
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
document.write("<button style='width:250px; height:55px;font-size:20px;', onClick='roll()'>ROLL AGAIN (B$500)</button>"+" "+"<button style='width:250px; height:55px;font-size:20px', onClick='sell()'>SELL FRUIT</button></br>");
document.write("<hr style='border:1px solid black'>Pity: "+count+"/50");    
document.write("<br/> Oops, you have sold 20 times, you cannot sell anymore fruits...");
document.body.style.textAlign="center";
document.body.style.fontSize="40";
document.body.style.backgroundImage="url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fgrand-piece-online%2Fimages%2F5%2F54%2FKori_Island.png%2Frevision%2Flatest%3Fcb%3D20201124155114&f=1&nofb=1&ipt=75e061bcd4a325fca2f07033fe7e287b1f00d9677b0e8c2bf607580f5ed362ee&ipo=images')";
document.body.style.backgroundSize="2000px";
}
}
