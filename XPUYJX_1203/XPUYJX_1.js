document.getElementById("loadBtn").addEventListener("click", function() {
    fetch("XPUYJX_orarend.json")
        .then(response => response.json())
        .then(data => {
            let html = `<h2>${data.XPUYJX_orarend.cim}</h2>`;
            html += `<p>Telefon: ${data.XPUYJX_orarend.telefonszam.szam}</p>`;
            html += "<ul>";
            data.XPUYJX_orarend.kurzus.forEach(k => {
                html += `<li>${k.idopont.nap} ${k.idopont.tol}-${k.idopont.ig}: ${k.targy} (${k.oktato}) - ${k.helyszin}</li>`;
            });
            html += "</ul>";
            document.getElementById("terulet").innerHTML = html;
        });
});