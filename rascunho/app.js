function calcular() {
        let pot = Number(document.querySelector(".pot").value);
        let carsaida = Number(document.querySelector(".carsaida").value);
        let fpsaida = Number(document.querySelector(".fpsaida").value);
        let inversor = Number(document.querySelector(".inversor").value);
        let correntecatalogo = Number(document.querySelector(".correntecatalogo").value);
        let tempocatalogo = Number(document.querySelector(".tempocatalogo").value);
        // INPUTS DECLARADOS
        let potenciaconsumida = document.querySelector(".potenciaconsumida")
        //tensaobateria = document.querySelector('div#tensaobateria')
        //correntedescarga = document.querySelector('div#correntedescarga')
        //minutoscorrente = document.querySelector('div#minutoscorrente')
        // RESULTADOS DECLARADOS
        let valPot = pot * fpsaida * carsaida / inversor;
        potenciaconsumida.innerText = valPot.toFixed(2);
}

