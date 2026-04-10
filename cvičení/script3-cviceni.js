let totalprice=90;
if (totalprice>=100) {
    let discount =totalprice*0.7
    console.log ("cena se slevou = " + discount)
} else {
    let rest=100-totalprice
    console.log ("pokud utratíte ještě " + rest + "kč" + " pak dostanete slevu 30% na vybrané hamburgry")
}