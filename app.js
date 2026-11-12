let jatekosPontok = 0
let gepPontok = 0
function jatszas(elem) {
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
            eredmeny = "Játékos nyert"
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
            eredmeny = "Játékos nyert"
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
            eredmeny = "Játékos nyert"
        }
    }
    if (eredmeny == "Játékos nyert")
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
}