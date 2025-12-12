function calcularPot() {
        var Vpotnb = document.querySelector('input#potnb')
        var VPcargasaida = document.querySelector('input#Pcargasaida')
        var VFPsaida = document.querySelector('input#FPsaida')
        var Vinversor = document.querySelector('input#inversor')

        var potnb = Number(Vpotnb.value)
        var Pcargasaida = Number(VPcargasaida.value) / 100
        var FPsaida = Number(VFPsaida.value)
        var inversor = Number(Vinversor.value) / 100

        var VQbaterias = document.querySelector('input#Qbaterias')

        var Qbaterias = Number(VQbaterias.value)

        var Tensaobat = Qbaterias * 12
        var Potconsumida = (potnb * Pcargasaida * FPsaida) / inversor
        var Cdescarga = Potconsumida * 1000 / Tensaobat
        
        document.querySelector('#valorRes1').innerText = Potconsumida.toFixed(2) + " W"
        document.querySelector('#valorRes2').innerText = Tensaobat + " V"
        document.querySelector('#valorRes3').innerText = Cdescarga.toFixed(2) + " A"
}