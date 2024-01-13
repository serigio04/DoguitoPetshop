(() => {
    
    const btn = document.querySelector('[data-button]')

    const añadirMascota = (e) => {
        e.preventDefault();
        const name = document.getElementById("name");
        const edad = document.getElementById("age");
        const img  = document.getElementById("img");
        const div_m = document.createElement("div");
        div_m.classList.add("mascota");
        const div_mImg = document.createElement("div");
        div_mImg.classList.add("mascota_img");
        const pet_img = document.createElement("img");
        pet_img.classList.add("mascota_img-pic");
        div_mImg.src = img;
        div_mImg.appendChild(pet_img); //
        const div_mInfo = document.createElement("div");
        div_mInfo.classList.add("mascota_info");
        const h4 = document.createElement("h4");
        const h6 = document.createElement("h6");
        h4.textContent = name;
        h6.textContent = edad;
        div_mInfo.appendChild(h4);
        div_mInfo.appendChild(h6);
        div_m.appendChild(div_mImg);
        div_m.appendChild(div_mInfo);

        fetch('http://localhost:5500/agregarMascota', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, edad, img }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.mensaje);
        })
        .catch(error => {
            console.error('Error al agregar la mascota:', error);
        });
    }

    btn.addEventListener('click', añadirMascota)
})();