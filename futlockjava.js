const btns = [
{
    id: 1,
    name: 'Bolas'   
},    

{
    id: 2,
    name: 'Luvas'
},
{
    id: 3,
    name: 'Mochilas' 
},
{
    id: 4,
    name: 'Tornoseleras'
},
{
    id: 5,
    name: 'Chuteiras'
},
{
    id: 6,
    name: 'Caneleiras'
},
{
    id: 7,
    name: 'Bonés',
}
]
const filters = [...new Set(btns.map((btn)=>
      {return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
    var {name,id} = btn;
    return(
        "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
        )
}).join('');

const product = [
{
    id: 1,
    image: 'bola1.jpeg',
    title:'Bola Oficial Fifa Catar',
    price: 479.90,
    category: 'bolas'
},
{
    id: 1,
    image: 'bola2.jpeg',
    title:'Bola Oficial Fifa Catar',
    price: 479.90,
    category: 'bolas'
},
{
    id: 1,
    image: 'bola3.jpeg',
    title:'Bola Oficial Fifa Catar',
    price: 479.90,
    category: 'bolas'
},
{
    id: 1,
    image: 'bola4.jpeg',/* */
    title:'Bola Oficial Fifa Catar',
    price: 479.90,
    category: 'bolas'
},
{
    id: 2,
    image: 'luva1.jfif',
    title:'Luva Penalt Delta Mania',
    price: 99.90,
    category:'luva'
},
{
    id: 2,
    image: 'luva2.jpeg',
    title:'Luva Penalt Delta Mania',
    price: 99.90,
    category:'luva'
},
{
    id: 2,
    image: 'luva3.jpeg',
    title:'Luva Penalt Delta Mania',
    price: 99.90,
    category:'luva'
},
{
    id: 2,
    image: 'luva4.jpeg',/* */
    title:'Luva Penalt Delta Mania',
    price: 99.90,
    category:'luva'
},
{
    id: 2,
    image: 'luva5.jpeg',
    title:'Luva Penalt Delta Mania',
    price: 99.90,
    category:'luva'
},
{
    id: 3,
    image: 'mochila1.jpeg',
    title:'Mochila Nike Esportiva Cordão',
    price: 52.90,
    category:'mochila'
},
{
    id: 3,
    image: 'mochila2.jpeg',/* */
    title:'Mochila Nike Esportiva Cordão',
    price: 52.90,
    category:'mochila'
},
{
    id: 3,
    image: 'mochila3.jpeg',
    title:'Mochila Nike Esportiva Cordão',
    price: 52.90,
    category:'mochila'
},
{
    id: 3,
    image: 'mochila4.jpeg',
    title:'Mochila Nike Esportiva Cordão',
    price: 52.90,
    category:'mochila'
},
{
    id: 4,
    image: 'Tornoselera.jpeg', /* */
    title:'Tornozeleira Aircast A60',
    price: 55.97,
    category:'tornozelera'
},
{
    id: 4,
    image: 'Tornoselera2.jpeg',
    title:'Tornozeleira Aircast A60',
    price: 55.97,
    category:'tornozelera'
},
{
    id: 4,
    image: 'Tornoselera3.jpeg',
    title:'Tornozeleira Aircast A60',
    price: 55.97,
    category:'tornozelera'
},
{
    id: 4,
    image: 'Tornoselera3.jpeg',
    title:'Tornozeleira Aircast A60',
    price: 55.97,
    category:'tornozelera'
},
{
    id: 4,
    image: 'Tornoselera4.jpeg',
    title:'Tornozeleira Aircast A60',
    price: 55.97,
    category:'tornozelera'
},
{
    id: 4,
    image: 'Tornoselera5.jpeg',
    title:'Tornozeleira Aircast A60',
    price: 55.97,
    category:'tornozelera'
},
{
    id: 5,
    image: 'chuteira1.jpeg',
    title: 'Chuteira Nike Smurf Marinho',
    price: 559.00,
    category:'chuteiras'
},
{
    id: 5,
    image: 'chuteira2.jpeg',
    title: 'Chuteira Nike Smurf Marinho',
    price: 559.00,
    category:'chuteiras'
},
{
    id: 5,
    image: 'chuteira3.jpeg',
    title: 'Chuteira Nike Smurf Marinho',
    price: 559.00,
    category:'chuteiras'
},
{
    id: 5,
    image: 'chuteira4.jpeg',/* */
    title: 'Chuteira Nike Smurf Marinho',
    price: 559.00,
    category:'chuteiras'
},
{
    id: 5,
    image: 'chuteira5.jpeg',
    title: 'Chuteira Nike Smurf Marinho',
    price: 559.00,
    category:'chuteiras'
},
{
    id: 6,
    image: 'canelera1.jpeg',/* */
    title:'Caneleira Nike J Guard',
    price: 219.97,
    category:'caneleira'
},
{
    id: 6,
    image: 'canelera2.jpeg',
    title:'Caneleira Nike J Guard',
    price: 219.97,
    category:'caneleira'
},
{
    id: 6,
    image: 'canelera3.jpeg',
    title:'Caneleira Nike J Guard',
    price: 219.97,
    category:'caneleira'
},
{
    id: 6,
    image: 'canelera4.jpeg',
    title:'Caneleira Nike J Guard',
    price: 219.97,
    category:'caneleira'
},
{
    id: 6,
    image: 'canelera5.jpeg',
    title:'Caneleira Nike J Guard',
    price: 219.97,
    category:'caneleira'
},
{
    id: 7,
    image: 'bone1.jpeg',
    title:'Kit Viseira 3 Cores',
    price: 129.00,
    category:'bone'
},
{
    id: 7,
    image: 'bone2.jpeg',/* */
    title:'Kit Viseira 3 Cores',
    price: 129.00,
    category:'bone'
},
{
    id: 7,
    image: 'bone3.jpeg',
    title:'Kit Viseira 3 Cores',
    price: 129.00,
    category:'bone'
},
{
    id: 7,
    image: 'bone4.jpeg',
    title:'Kit Viseira 3 Cores',
    price: 129.00,
    category:'bone'
},
{
    id: 7,
    image: 'bone5.jpeg',
    title:'Kit Viseira 3 Cores',
    price: 129.00,
    category:'bone'
},
];

const categories = [...new Set(product.map((item)=>
    {return item}))]

const filterItems = (a)=>{
    const filterCategories = categories.filter(item);
    function item(value){
        if(value.id==a){
            return(
                value.id
            )
        }
    }
    displayItem(filterCategories)
}

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item)=>
    {
        var{image, title, price} = item;
        return(
            `<div class='box'>
            <h3 class='textprod'>${title}</h3>
            <br>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <br>
            <div class='bottom'>
            <h2 >R$ ${price}</h2>
            <div>
            <button class='but2'>Adicionar no carrinho</button>
            </div>
            </div>
            </div>`)
    }).join('');
}
displayItem(categories);