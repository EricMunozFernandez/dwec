let arrayContactos = [
    contacto1 = new Contacto('sergio', 'mafia'),
    contacto2 = new Contacto('juan', 'marina'),
    contacto3 = new Contacto('sara', 'zoologico'),
    contacto4 = new Contacto('ana', 'acuario'),
    contacto5 = new Contacto('jaime', 'secretaria'),];

localStorage.setItem('arrayContactos', JSON.stringify(arrayContactos));


