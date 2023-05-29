const sampleProducts = [
  {
    id: 1,
    name: "Толстовка ZIRUNKING",
    category: "Одежда",
    price: 7000,
    description: "The Nike Air Presto Women's Shoe delivers the same unrivaled fit and comfort that marked the 2000 debut of the original.",
    inStock: true,
    popular: true,
    imageURL: "https://cdn1.ozone.ru/s3/multimedia-1/6494977573.jpg"
  },
  {
    id: 2,
    name: "Джинсы для широких ног",
    category: "Одежда",
    price: 9000,
    description: "Shaped in an iconic casio design, this watch features a digital display, stopwatch and an LED backlight. The watch is housed in a durable resin case. Suitable for everyday styling.",
    inStock: true,

    popular: true,
    imageURL: "https://cdn.aizel.ru/i/845x1079/415239.jpg"
  },
  {
    id: 3,
    name: "Dolce & Gabbana Kids платье со сборками",
    category: "Одежда",
    price: 9500,
    description:
      '* 36 mm stainless steel case with mineral dial window\n' +
      '* Automatic self-wind movement with analog display\n' +
      '* Stainless steel bracelet with fold-over clasp',
    inStock: true,
    popular: true,
    imageURL: "https://cdn-images.farfetch-contents.com/15/15/11/60/15151160_25955100_1000.jpg"
  },
  {
    id: 4,
    name: "Футболка",
    category: "Одежды",
    price: 6700,
    description: "Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia"+
     "and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in"+
     "a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life"+
     "with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is"+
     "until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they?",
    inStock: true,

    popular: true,
    imageURL: "https://cdn-images.farfetch-contents.com/14/91/98/09/14919809_24415781_1000.jpg"
  },
  {
    id: 5,
    name: "Мужская летняя рубашка",
    category: "Одежда",
    price: 7900,
    description:
      '* Amazing angles: Share consistent high-color fidelity with In-Plane Switching (IPS) technology across a 27-inch diagonal screen. A stunning vantage point for everyone, from almost anywhere\n' +
      '* Distinctively modern and accessible: The contemporary thin profile is enhanced by the modern white and silver colors.The open wedge stand design provides convenient access to VGA and dual HDMI ports',
    inStock: true,

    popular: true,
    imageURL: "https://i5.walmartimages.com/asr/c659f7b2-0d97-45c0-a14f-7c9c09d8d788.6cbf2aa246872ba887181fb7b8dbe4e0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
  },
  {
    id: 6,
    name: "Хлопковая рубашка в клетку BONPOINT",
    category: "Одежда",
    price: 5000,
    description:
      '* Funtinal Table Lamp--Be tried of getting up to find a socket to charge your phone when you lay on the bed? Get Seealle USB bedside table lamp will be a smart choice,the base of this table lamp contains a USB charging port, convient to charge your mobile phones, tablets, kindle readers, laptops, and other electronic devices.',
    inStock: true,

    popular: true,
    imageURL: "https://danielonline.ru/upload/iblock/04f/cinhq6gvvd6xwyw247nizrowtbyfvfvj.jpg"
  },
  {
    id: 7,
    name: "Куртка-бомбер Hani",
    category: "Одежда",
    price: 16000,
    description: "",
    inStock: true,
    popular: true,
    imageURL: "https://cdn-images.farfetch-contents.com/18/36/89/74/18368974_39933709_600.jpg"
  },
  {
    id: 8,
    name: "Комплект из трех боди",
    category: "Одежда",
    price: 5500,
    description: "",
    inStock: true,
    popular: true,
    imageURL: "https://avatars.mds.yandex.net/i?id=fe4c5c8590946e56c65a0aae974a3f1b_l-4955098-images-thumbs&n=13"
  },
  {
    id: 9,
    name: "Игрушка",
    category: "Детские",
    price: 1300,
    description: "",
    inStock: true,
    popular: true,
    imageURL: "https://static.insales-cdn.com/r/SyuJTKpAdIE/rs:fit:400:0:1/q:100/plain/images/products/1/4410/618746170/large_card__14_.png@webp"
  },
  {
    id: 10,
    name: "Двусторонний ремень мужской",
    category: "Аксессуары",
    price: 4000,
    description: "",
    inStock: true,
    popular: true,
    imageURL: "https://ae04.alicdn.com/kf/HTB16ciQyf9TBuNjy0Fcq6zeiFXa4.jpg_640x640.jpg_.webp"
  },
  {
    id: 11,
    name: "игрушка",
    category: "Детские",
    price: 4000,
    description: "",
    inStock: true,
    popular: true,
    imageURL: "https://static.insales-cdn.com/r/CcfK7qd0Qy4/rs:fit:400:0:1/q:100/plain/images/products/1/2044/618743804/large_card__6_.png@webp"
  },
  {
    id: 12,
    name: "Игрушка1",
    category: "Игрушки",
    price: 4000,
    description: "",
    inStock: true,
    popular: true,
    imageURL: "https://static.insales-cdn.com/r/ebj0WT7gcnc/rs:fit:400:0:1/q:100/plain/images/products/1/2140/618743900/large_card__7_.png@webp"
  },
]

/* Available categories */
const categories = ['Одежда', 'Обувь', 'Аксессуары', "Спорт",'Красота', 'Канцелярские товары', "Телефоны и гаджеты", 'Игрушки','Товары для дома', 'Товары для животных', 'Новинки', 'Популярные', "Скидки"]

/* 
 * This function generates menu items.
 * Some are hardcoded, some based on categories.
 */
const generateMenuItems = () => {
  let menuItems = [
    { type: "title", name: "MAIN", id: 0 },
    { type: "item", name: "Home page", url: "/", parent: "MAIN", id: 1},
    { type: "item", name: "About us", url: "/about", parent: "MAIN", id: 2 },
    { type: "title", name: "CATEGORIES", id: 3 },
  ];

  menuItems = menuItems.concat(categories.map((x, i) => {
    return {
      name: x, url: "/search/?directCategory=true&category=" + x, id: 4 + i , type: "item", parent: "CATEGORIES"
    }
  }))

  return menuItems;
}

let menuItems = generateMenuItems();

export { sampleProducts, menuItems, categories }