window.onload=function(){
    // get API với AJAX
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "GET",
        data: JSON.stringify({}),
        dataType: 'json',
        success: function(data){
            const dataUser = JSON.parse(JSON.stringify(data.data))
            console.log(dataUser)
            document.querySelector('.flex').innerHTML= dataUser.map((user)=>{
                return `
                <li>
                    <p><strong>${user.first_name}</strong></p>
                    <p>${user.email}</p>
                    <img src='${user.avatar}'>
                </li>
                `
            }).join('');
        }
    });

    // get API với Fetch

    fetch("https://reqres.in/api/unknown")
    .then((res) => res.json())
    .then((data) => listDataFuns(data.data));

    const listDataFuns = (data) => {
    let list = document.querySelector(".list-color");
    list.innerHTML= data.map((item)=>{
        return `
        <li style="box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5); margin-bottom: 10px">
            <ul class='flex'> 
                <li>${item.id}</li>
                <li>${item.name}</li>
                <li>${item.pantone_value}</li>
                <li>${item.year}</li>
                <li style="background-color:${item.color}">${item.color}</li>
            </ul>
        </li>
        `
    }).join('')
}}
