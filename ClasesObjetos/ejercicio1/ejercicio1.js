let arrayContactos = [
    contacto1 = new Contacto('sergio', 'mafia'),
    contacto2 = new Contacto('juan', 'marina'),
    contacto3 = new Contacto('sara', 'zoologico'),
    contacto4 = new Contacto('ana', 'mafia'),
    contacto5 = new Contacto('jaime', 'secretaria'),];

localStorage.setItem('arrayContactosInicio', JSON.stringify(arrayContactos));


