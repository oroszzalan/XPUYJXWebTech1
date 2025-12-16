const cars = [
    {
        name: "Lamborghini Revuelto",
        image: "kepek/reveulto.webp",
        horsepower: "819 HP",
        zeroToHundred: "2.5 sec",
        topSpeed: ">350 km/h",
        engine: "V12 Hybrid",
        displacement: "6,498 cm³",
        transmission: "ISR 7-sebességes",
        colors: ["Bianco Icarus","Giallo Auge","Arancio Borealis","Rosso Anteros","Viola Pasifae","Blu Astraeus","Verde Lares","Grigio Keres","Nero Helene"],
        link: "revuelto.html"
    },
    {
        name: "Lamborghini Huracán STO",
        image: "kepek/sto.webp",
        horsepower: "640 HP",
        zeroToHundred: "3.0 sec",
        topSpeed: "310 km/h",
        engine: "5.2 L V10",
        displacement: "5,204 cm³",
        transmission: "7-sebességes dupla-kuplungos",
        colors: ["Arancio Bull","Giallo Evros","Grigio Caithness","Nero Helene","Bianco Monocerus"],
        link: "sto.html"
    },
    {
        name: "McLaren P1",
        image: "kepek/mclarenp1.webp",
        horsepower: "916 HP",
        zeroToHundred: "2.8 sec",
        topSpeed: "350 km/h",
        engine: "3.8 L V8 Twin-Turbo + elektromos motor",
        displacement: "3,799 cm³",
        transmission: "7-sebességes dupla-kuplungos",
        colors: ["McLaren Orange","Sonic Blue","Storm Grey","Matte Black","Velocity Red"],
        link: "mclaren.html"
    },
    {
        name: "BMW M4 2014",
        image: "kepek/bmw2014.webp",
        horsepower: "431 HP",
        zeroToHundred: "4.1 sec",
        topSpeed: "250 km/h",
        engine: "3.0L Twin-Turbo Inline-6",
        displacement: "2,979 cm³",
        transmission: "6-sebességes manuális / 7-sebességes M-DKG",
        colors: ["Alpine White","Sakhir Orange","Long Beach Blue","Melbourne Red","Mineral Grey"],
        link: "bmw2014.html"
    },
    {
        name: "BMW M3 G80 2022",
        image: "kepek/2022bmw.webp",
        horsepower: "510 HP",
        zeroToHundred: "3.9 sec",
        topSpeed: "250 km/h",
        engine: "3.0 L sor-6 Twin-Turbo",
        displacement: "2,993 cm³",
        transmission: "8-sebességes M Steptronic",
        colors: ["Portimao Blue","Brooklyn Grey","Tanzanite Blue","Sapphire Black","Dravit Grey"],
        link: "bmw2022.html"
    }
];

const car1Select = document.getElementById("car1");
const car2Select = document.getElementById("car2");

cars.forEach((car, index) => {
    const option1 = document.createElement("option");
    option1.value = index;
    option1.textContent = car.name;
    car1Select.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = index;
    option2.textContent = car.name;
    car2Select.appendChild(option2);
});

function compareCars() {
    const car1Index = car1Select.value;
    const car2Index = car2Select.value;
    const table = document.getElementById("comparisonTable");

    if (car1Index === "" || car2Index === "") {
        alert("Válassz ki két autót!");
        return;
    }

    const carA = cars[car1Index];
    const carB = cars[car2Index];

    table.innerHTML = `
        <thead>
            <tr>
                <th>Jellemző</th>
                <th>${carA.name}</th>
                <th>${carB.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Kép</td>
                <td><img src="${carA.image}" alt="${carA.name}"></td>
                <td><img src="${carB.image}" alt="${carB.name}"></td>
            </tr>
            <tr>
                <td>Teljesítmény</td>
                <td>
                    ${carA.horsepower}
                    <div class="power-bar" data-power="${parseInt(carA.horsepower)}"></div>
                </td>
                <td>
                    ${carB.horsepower}
                    <div class="power-bar" data-power="${parseInt(carB.horsepower)}"></div>
                </td>
            </tr>
            <tr>
                <td>0-100 km/h</td>
                <td>${carA.zeroToHundred}</td>
                <td>${carB.zeroToHundred}</td>
            </tr>
            <tr>
                <td>Végsebesség</td>
                <td>${carA.topSpeed}</td>
                <td>${carB.topSpeed}</td>
            </tr>
            <tr>
                <td>Motor</td>
                <td>${carA.engine}</td>
                <td>${carB.engine}</td>
            </tr>
            <tr>
                <td>Hengerűrtartalom</td>
                <td>${carA.displacement}</td>
                <td>${carB.displacement}</td>
            </tr>
            <tr>
                <td>Váltó</td>
                <td>${carA.transmission}</td>
                <td>${carB.transmission}</td>
            </tr>
            <tr>
                <td>Színek</td>
                <td>${carA.colors.join(", ")}</td>
                <td>${carB.colors.join(", ")}</td>
            </tr>
            <tr>
                <td>Vásárlás</td>
                <td><button class="buy-btn" onclick="window.location.href='${carA.link}'">Vásárlás</button></td>
                <td><button class="buy-btn" onclick="window.location.href='${carB.link}'">Vásárlás</button></td>
            </tr>
        </tbody>
    `;

    const bars = document.querySelectorAll(".power-bar");
    bars.forEach(bar => {
        const power = bar.getAttribute("data-power");
        const maxPower = 1000;
        const widthPercent = (power / maxPower) * 100;
        setTimeout(() => {
            bar.style.width = widthPercent + "%";
        }, 100);
    });
}
