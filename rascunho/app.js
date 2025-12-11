function calcularPot() {
        var Vpotnb = document.querySelector('input#potnb')
        var VPcargasaida = document.querySelector('input#Pcargasaida')
        var VFPsaida = document.querySelector('input#FPsaida')
        var Vinversor = document.querySelector('input#inversor')
        var res1 = document.querySelector('div#res1')
        var res2 = document.querySelector('div#res2')

        var potnb = Number(Vpotnb.value)
        var Pcargasaida = Number(VPcargasaida.value) / 100
        var FPsaida = Number(VFPsaida.value)
        var inversor = Number(Vinversor.value) / 100

        var VQbaterias = document.querySelector('input#Qbaterias')
        var res3 = document.querySelector('div#res3')

        var Qbaterias = Number(VQbaterias.value)

        var Tensaobat = Qbaterias * 12
        var Potconsumida = (potnb * Pcargasaida * FPsaida) / inversor
        var Cdescarga = Potconsumida * 1000 / Tensaobat

        res1.innerHTML = `<p>${Potconsumida.toFixed(2)}</p>`
        res2.innerHTML = `<p>${Cdescarga.toFixed(2)}</p>`
        res3.innerHTML = `<p>${Tensaobat}</p>`
}