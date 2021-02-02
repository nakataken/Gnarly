import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
        name: 'Ken',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
        },
        {
        //customer
        name: 'Nakata',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
        },
    ],
    products:[
        {
            name: "Beige WM",
            category: "Shirts",
            image: "/images/beige-wm.png",
            price: 650,
            countInStock: 10,
            brand: "Gnarly",
            rating: 4.5,
            numReview: 10,
            description: "A tee made with beige gnar fabric. Further improved by the classic WM logo. You're 'bout to get frickity fresh. This masterpiece is silkscreen printed on a 100% Cotton GnarSignature®️ t-shirt with a woven indication tag that certifies its authenticity!"
        },
        {
            name: "Black Striped",
            category: "Shirts",
            image: "/images/black-striped.jpg",
            price: 750,
            countInStock: 12,
            brand: "Gnarly",
            rating: 4,
            numReview: 20,
            description: "Black Striped Tee G!"
        },
        {
            name: "Concrete",
            category: "Shirts",
            image: "/images/concrete.jpg",
            price: 650,
            countInStock: 0,
            brand: "Gnarly",
            rating: 4.5,
            numReview: 15,
            description: "It's our masterpiece. Decades of awesomeness founded by this single tee, mah g. A legendary Gnarly! product."
        },
        {
            name: "I don't know japanese",
            category: "Shirts",
            image: "/images/japanese.jpg",
            price: 650,
            countInStock: 19,
            brand: "Gnarly",
            rating: 4.5,
            numReview: 9,
            description: '"I wish I was japanese.."'
        },
        {
            name: "Neon Wordmark",
            category: "Shirts",
            image: "/images/neon-wordmark.jpg",
            price: 650,
            countInStock: 3,
            brand: "Gnarly",
            rating: 4.5,
            numReview: 15,
            description: "So bright you can see it from space. This high-quality tee brings an astonishing design centered on the awesomeness of eating and spacefaring -- bringing the best of both worlds centerfold."
        },
        {
            name: "New Wave",
            category: "Shirts",
            image: "/images/new-wave.jpg",
            price: 850,
            countInStock: 17,
            brand: "Gnarly",
            rating: 5.0,
            numReview: 5,
            description: "Too lazy to go out? With this tee’s awesome combination of style and comfort, you’ll want to show this lazy beaut off as much as possible!"
        },
        {
            name: "Olive Panel",
            category: "Shirts",
            image: "/images/olive-panel.jpg",
            price: 850,
            countInStock: 18,
            brand: "Gnarly",
            rating: 5.0,
            numReview: 5,
            description: "We've crafted this into perfection. A cozy olive tee highlighting the wordmark. Recreating a vintage design with improved fabric & print and up-to-date tech."
        },
        {
            name: "Orange WM",
            category: "Shirts",
            image: "/images/orange-wm.jpg",
            price: 650,
            countInStock: 18,
            brand: "Gnarly",
            rating: 5.0,
            numReview: 5,
            description: "A tee made with orange gnar fabric. Further improved by the classic WM logo. You're 'bout to get frickity fresh. This masterpiece is silkscreen printed on a 100% Cotton GnarSignature®️ t-shirt with a woven indication tag that certifies its authenticity!"
        },
        {
            name: "Rainbow Dye",
            category: "Shirts",
            image: "/images/rainbow-dye.png",
            price: 850,
            countInStock: 4,
            brand: "Gnarly",
            rating: 5.0,
            numReview: 5,
            description: "Rainbow Dye Tee G!"
        },
        {
            name: "Red Striped",
            category: "Shirts",
            image: "/images/red-striped.jpg",
            price: 750,
            countInStock: 12,
            brand: "Gnarly",
            rating: 5.0,
            numReview: 5,
            description: "As red as your midterm grade. A soft red-striped tee made with our finest technology, Gnarcotton. Feel the ease, g. *The Round Two of the Red Striped are extremely limited!"
        },
        {
            name: "Gnar Peninsula",
            category: "Shirts",
            image: "/images/gnar-peninsula.png",
            price: 750,
            countInStock: 4,
            brand: "Gnarly",
            rating: 5.0,
            numReview: 5,
            description: "No such thing in the world exists that can satiate this beast's hunger – until today! Only a tee this awesome and excellent can appease the demon!"
        },
        {
            name: "Space Gang",
            category: "Shirts",
            image: "/images/space-gang.jpg",
            price: 900,
            countInStock: 10,
            brand: "Gnarly",
            rating: 5.0,
            numReview: 5,
            description: "Vivid colors to represent the heavy use of mouth-watering munchies and black to emphasize said colors, this high-quality tee brings an astonishing design centered on the awesomeness of the gang and spacefaring -- bringing the best of both worlds centerfold."
        }
    ]
}

export default data;