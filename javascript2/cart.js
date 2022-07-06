window.onload = function(){
	
	// adding data to localstorage
	const attToCartBtn = document.getElementsByClassName('attToCart');
	let Products = [];
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){
			if(typeof(Storage) !== 'undefined'){
				let item = {
						id:i+1,
						name:e.target.parentElement.children[0].textContent,
						price:e.target.parentElement.children[1].children[0].textContent,
                        img:e.target.parentNode.parentElement.children[0].src,
						no:1
					};
				if(JSON.parse(localStorage.getItem('Products')) === null){
					Products.push(item);
					localStorage.setItem("Products",JSON.stringify(Products));
					window.location.reload();
				}else{
					const localProducts = JSON.parse(localStorage.getItem("Products"));
					localProducts.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							Products.push(data);
						}
					});
					Products.push(item);
					localStorage.setItem('Products',JSON.stringify(Products));
					window.location.reload();
				}
			}else{
				alert('Fail to working with local storage');
			}
		});
	}
	// adding data to shopping cart 
	const iconShoppingP = document.querySelector('.iconShopping p');
	let no = 0;
	JSON.parse(localStorage.getItem('Products')).map(data=>{
		no = no+data.no
;	});
	iconShoppingP.innerHTML = no;

    const cartBox = document.querySelector('.cartBox');
    const cartBoxTable = cartBox.querySelector('table');
	//adding cartbox data in table
	let tableData = "";
    tableData += '<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>item Price</th><th>Action</th></tr>'
    if(!JSON.parse(localStorage.getItem('Products'))[0]){
		tableData += '<tr><th colspan="5">No items found</th></tr>'
        
	}else{
		JSON.parse(localStorage.getItem('Products')).map(data=>{
            let noItem = document.getElementById('noItem');
            noItem.style.display = "none"
			tableData += `
            <tr>
            <th>${data.id}</th>
            <th>${data.name}</th>
            <th>${data.no}</th>
            <th>${data.price}</th>
            <th><a href="#" onclick=Delete(this)>Delete</a></th>
            </tr>`;
		});
	}
	cartBoxTable.innerHTML = tableData;
}