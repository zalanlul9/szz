let jatekosPontok = 0
let gepPontok = 0
let jatekosNev = " Játékos"
function jatszas(elem) {
    document.getElementById('ko').style.border = "white solid 0px"
    document.getElementById('papir').style.border = "white solid 0px"
    document.getElementById('ollo').style.border = "white solid 0px"

    document.getElementById(elem).style.border = "red solid 3px"
    let rnd = Math.floor(Math.random() * 3);
    console.log(rnd);
    let valasztasok = ["ko", "papir", "ollo"]
    let gepValasztas = valasztasok[rnd]

const gepValasztasKep = document.getElementById("gepValasztasKep")
gepValasztasKep.src = `./img/${gepValasztas}.png`

    let eredmeny
    if (elem == "ko")
    {
        if (gepValasztas == "ko")
        {
            eredmeny = "Döntetlen"
        }
        else if (gepValasztas == "papir")
        {
            eredmeny = "Gép nyert"
        }
        else{
            eredmeny = jatekosNev + " nyert"
        }
    }
    else if (elem == "papir")
    {
        if (gepValasztas == "papir")
        {
            eredmeny = "Döntetlen"
        }
        else if (gepValasztas == "ollo")
        {
            eredmeny = "Gép nyert"
        }
        else{
            eredmeny = jatekosNev + " nyert"
        }
    }
        else if (elem == "ollo")
    {
        if (gepValasztas == "ollo")
        {
            eredmeny = "Döntetlen"
        }
        else if (gepValasztas == "ko")
        {
            eredmeny = "Gép nyert"
        }
        else{
            eredmeny = jatekosNev + " nyert"
        }
    }
    if (eredmeny == jatekosNev + " nyert")
    {
        jatekosPontok++
    }
    else if (eredmeny == "Gép nyert")
    {
        gepPontok++
    }
    document.getElementById("eredmeny").innerHTML = "Eredmény:" + eredmeny
    document.getElementById("tePont").innerHTML = jatekosPontok
    document.getElementById("gepPont").innerHTML = gepPontok
    console.log(`A gép választása: ${gepValasztas},\nA játékos választása: ${elem}, \nAz eredmény: ${eredmeny}, játékos pontszáma: ${jatekosPontok}, a gép pontszáma: ${gepPontok}.`)
    if (jatekosPontok>=10)
    {
        document.getElementById("mutasd").style.display="none";
        document.getElementById("h2").innerHTML = "A játéknak vége, " + jatekosNev + " nyert!";
        document.getElementById("ujra").style.display="block";
    }
    else if (gepPontok>=10)
    {
        document.getElementById("mutasd").style.display="none";
        document.getElementById("h2").innerHTML = "A játéknak vége, a gép nyert!";
        document.getElementById("ujra").style.display="block";
    }
}
let hitelesEmail = false;
let hitelesNev = false;
let vanSzam = /\d/;
function ellenorzes()
            {
                let x = document.getElementById("nev").value;
                let y = document.getElementById("email").value;
                function emailHitelesites(email) {
                let emailX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailX.test(email.trim());
                }
                if (emailHitelesites(y))
                {
                    console.log("okes")
                    hitelesEmail = true;
                }
                else{
                    document.getElementById("h1").innerHTML = "A megadott e-mail cím nem megfelelő!"
                    hitelesEmail = false
                    console.log("nemokes")
                }
                if (x.length < 8 || x.length > 20 || vanSzam.test(x)) {
                    document.getElementById("h1").innerHTML = "A megadott név nem megfelelő.";
                    document.getElementById("felhPont").innerHTML = "Te pontod";
                    hitelesNev = false;
                    console.log("nemokesNev")
                } else {
                    document.getElementById("valassz").innerHTML = "Válassz " + x + "!";
                    document.getElementById("felhPont").innerHTML =  "" + x + " pontja";
                    jatekosNev = x
                    hitelesNev = true;
                    console.log("okesNev")
                }
let hiteles = false;
if (hitelesNev && hitelesEmail) 
{
    hiteles = true;
    console.log("okesHiteles")
}
if (hiteles==true)
{
    document.getElementById("mutasd").style.display="block";
    document.getElementById("tuntesd").style.display="none";
    document.getElementById("h1").innerHTML = "Kő - papír - olló";
}
}
function ujra()
{
    document.getElementById("mutasd").style.display="block";
    document.getElementById("tuntesd").style.display="none";
    document.getElementById("h1").innerHTML = "Kő - papír - olló";
    document.getElementById("ujra").style.display="none";
    jatekosPontok=0;
    gepPontok=0;
}