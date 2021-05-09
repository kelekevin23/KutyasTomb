var tomb = [
    {
        nev: "Töki",
        kor: 2,
        fajta: "Golden retriever"
    },
    {
        nev: "Bodri",
        kor: 4,
        fajta: "Német juhászkutya"
    },
    {
        nev: "Pajti",
        kor: 2.5,
        fajta: "Angol buldog"
    }
];

var nev = true;
var kor = true;
var fajta = true;
var id = 0;
$(function () {





    tomb.sort(function (a, b) {
        return a[1] - b[1];
    });
    //név  szerinti rendezés -> 0 index alapján
    tomb.sort(function (a, b) {
        return Number(a["nev"] < b["nev"]) - 0.5;
    });
    feltolt(4);
    
    tablazatKiir();

    
   
    
});

function feltolt(){
    var azon = this.id;
    rendez(azon);
}

function rendez(szam) {
//    console.log("haló2");
    console.log(szam);
    if (szam === "0") {
        console.log("belép");
        if (nev === true) {
            tomb.sort(function (a, b) {
                return Number(a["nev"] > b["nev"]) - 0.5;
            });
            nev = false;
        } else {
            tomb.sort(function (a, b) {
                return Number(a["nev"] < b["nev"]) - 0.5;
            });
            nev = true;
        }
        tablazatKiir();
        
    } else if (szam === "1") {
        if (kor === true) {
            tomb.sort(function (a, b) {
                return Number(a["kor"] > b["kor"]) - 0.5;
            });
            kor = false;
        } else {
            tomb.sort(function (a, b) {
                return Number(a["kor"] < b["kor"]) - 0.5;
            });
            kor = true;
        }
        tablazatKiir();
    } else if (szam === "2") {
        if (fajta === true) {
            tomb.sort(function (a, b) {
                return Number(a["fajta"] > b["fajta"]) - 0.5;
            });
            fajta = false;
        } else {
            tomb.sort(function (a, b) {
                return Number(a["fajta"] < b["fajta"]) - 0.5;
            });
            fajta = true;
        }
        tablazatKiir();
    }

}

function tablazatKiir(){
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>NÉV</th><th>Kor(év)</th><th>Fajta</th></tr>");
    for (var i = 0; i < tomb.length; i++) {
        $("article table").append("<tr></tr>");

        for (var item in tomb[i]) {
            $("article table tr").eq(i + 1).append("<td>" + tomb[i][item] + "</td>");
        }

    }
    for (var i = 0; i < tomb.length; i++) {
        console.log(tomb.length);
        $("article table tr th").eq(i).attr('id', i);
    }

    
    $("article table tr th").click(feltolt);
}