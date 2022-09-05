import type { ProductInterface } from "@/interfaces";

export default [
    {
        id: 1,
        image: 'src/assets/images/mbp.PNG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates.',
        title: 'Macbook Pro',
        price: 1500,
        category: 'desktop'
    },
    {
        id: 2,
        image: 'src/assets/images/mbp.PNG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates.',
        title: 'Macbook Air',
        price: 1000,
        category: 'streaming'
    },
    {
        id: 3,
        image: 'src/assets/images/mbp.PNG',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates.',
        title: 'Lenovo',
        price: 1000,
        category: 'streaming'
    }
] as ProductInterface[];