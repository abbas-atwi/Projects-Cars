interface navItemsRef {
    id: number,
    name?: string,
    label?: string,
    link?: string
}

const navItems: navItemsRef[] = [
 {
     id: 1,
     label: 'Home',
     link: '/',
     name: 'home'
 }, {
     id: 2,
     label: 'About',
     link: '/about',
     name: 'about'
 }
]


export default navItems;