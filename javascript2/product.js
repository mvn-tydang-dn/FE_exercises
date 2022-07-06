const productsData=[
    {
        id:1,
        nameProduct: "Men's Solid Regular Fit T-Shirt",
        price: '42.50',
        linkImg: 'https://m.media-amazon.com/images/I/71c4prQcTbL._AC_UL480_FMwebp_QL65_.jpg',
    },
    {
        id:2,
        nameProduct: "SARAF SURGEON MASK SET OF 5",
        price: '15.50',
        linkImg: 'https://m.media-amazon.com/images/I/71Zc8O9GW7L._AC_UL480_FMwebp_QL65_.jpg',
    },
    {
        id:3,
        nameProduct: "Men's Black Footwear UK",
        price: '100.50',
        linkImg: 'https://m.media-amazon.com/images/I/61+7aqLHBoL._AC_UL480_FMwebp_QL65_.jpg',
    }
]


const listProduct= document.querySelector('.itemsBox')

listProduct.innerHTML=productsData.map((product)=>{
    return `
    <div class="item">
        <img src="${product.linkImg}" alt="${product.nameProduct}"/>
        <div class="itemInfo">
            <h1>${product.nameProduct}</h1>
            <p>$<span>${product.price}</span></p>
            <a href="#" title="add to cart" class="attToCart">Add to cart</a>
        </div>
	</div>
    `;
})
