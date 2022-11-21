function szamol() {
    //kor
    let korsug = korsugar.value;
    console.log(korsug);

    document.getElementById("korkerulet").value = Math.round(2 * korsug * Math.PI);

    document.getElementById("korterulet").value = Math.round((korsug * korsug) * Math.PI);

    //teglalap
    let hossza = parseInt(tlh.value);
    console.log(hossza);
    let szeles = parseInt(tlsz.value);
    console.log(szeles);

    document.getElementById("terulet").value = hossza * szeles;

    document.getElementById("kerulet").value = 2 * (hossza + szeles);
}