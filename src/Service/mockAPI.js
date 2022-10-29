const data = [
    {
    id: 1,
    title: "ROYAL Mobility",
    price: 4500,
    stock: 10,
    category: "alimentos",
    detail: "Un alimento para perros adultos formulado para contribuir al mantenimiento de la salud articular, como soporte nutricional en enfermedades articulares y en recuperación de cirugías ortopédicas. ",
    img: "https://nutrican.com.ar/wp-content/uploads/2021/09/ROYAL-MOBILITY-e1662729356809.jpg",
    },

    {
    id: 2,
    offer: true,
    title: "ROYAL Satiety",
    price: 4800,
    stock: 3,
    category: "alimentos",
    detail: " Alimento para perros obesos, con sobrepeso y diabetes mellitus. ",
    img: "https://nutrican.com.ar/wp-content/uploads/2021/07/ROYAL-SATIETY-PERRO-e1662729593111.jpg",
    },

    {
    id: 3,
    title: "ROYAL Puppy Mini Pouch",
    price: 6500,
    stock: 7,
    category: "alimentos",
    detail: " Alimento completo para perros - Para cachorros de raza pequeña (peso adulto de 1 a 10 kg) - Hasta 10 meses de edad. ",
    img: "https://nutrican.com.ar/wp-content/uploads/2021/07/ROYAL-MINI-PUPPY-e1662646111121.jpg",
    },

    {
    id: 4,
    title: "ROYAL Maxi Ageing +8",
    price: 3500,
    stock: 6,
    category: "alimentos",
    detail: "Está pensado para perros maduros de talla grande (de 26 a 44 kg de peso), a partir de los 8 años de edad. Está desarrollado para favorecer un envejecimiento saludable en perros de talla grande",
    img: "https://nutrican.com.ar/wp-content/uploads/2021/06/ROYAL-MAXI-ADULT-8-e1662584340911.jpg",
    },

    {
    id: 5,
    title: "Dixon Iglú Cama Star Wars",
    price: 8320,
    stock: 6,
    category: "accesorios",
    detail: "Dixon Iglú Cama Star Wars, para perros pequeños",
    img: "https://nutrican.com.ar/wp-content/uploads/2021/08/8427934494842_00.jpg",
    },

    {
    id: 6,
    title: "Dixon Peluche Star Wars Storm Trooper",
    price: 3800,
    stock: 6,
    category: "accesorios",
    detail: "Peluche Star Wars Storm Trooper",
    img: "https://nutrican.com.ar/wp-content/uploads/2021/08/0971056.jpg",
    },

    {
    id: 7,
    title: "Dixon Collar Star Wars Darth Vader",
    price: 1500,
    stock: 6,
    category: "accesorios",
    detail: "Collar Star Wars Darth Vader",
    img: "https://nutrican.com.ar/wp-content/uploads/2021/08/8427934447978_01.jpg",
    },

    {
    id: 8,
    title: "Millex Gigwi Bird Melody con sonido",
    price: 3500,
    stock: 6,
    category: "accesorios",
    detail: "Juguete para gatos Gigwi Bird Melody con sonido",
    img: "https://nutrican.com.ar/wp-content/uploads/2021/08/0412231.png",
    },

];
export default function getItems() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
    }, 1500);
    });
}


export function getItemsByCategory(cat) {
    return new Promise((resolve, reject) => {

    let itemFind = data.filter((item) => {
        return item.category === cat;
    });
    setTimeout( () => {
        console.log("Encontramos:",itemFind)
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
    }, 1500)

    });

}

export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {

    let itemFind = data.find((item) => {
        return item.id === parseInt(idItem);
    });
    setTimeout( () => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
    }, 1500)

    });
}