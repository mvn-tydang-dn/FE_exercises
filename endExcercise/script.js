window.onload = function () {
  courseList_Load ()
  // start setting modal Create:
  const modalCreate = document.getElementById("ModalCreate");
  const btnAdd = document.getElementById("btnCreate");

  const close_ModalCreate = document.getElementsByClassName("close")[0];

  btnAdd.onclick = function() {
    modalCreate.style.display = "block";
  }
  close_ModalCreate.onclick = function() {
    modalCreate.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modalCreate) {
      modalCreate.style.display = "none";
    }
    if (event.target == modalSearch) {
      modalSearch.style.display = "none";
      
    }
  }
  // end setting modal
  //-------------------------
  
  // submit modal add : 
  document.getElementById('submitAdd').addEventListener('click',submitAdd)
  function submitAdd (e){
    let id = randomID();
    let courseName_Add = document.getElementById('courseName-inputAdd').value
    let idVideo_Add = document.getElementById('idVideo-inputAdd').value
    let descriptionCourse_Add = document.getElementById('description-inputAdd').value

    if (courseName_Add !== "" && idVideo_Add !== "" && descriptionCourse_Add !== ""){
      let newCourse ={
        id:id,
        courseName:courseName_Add,
        thumnail: `https://img.youtube.com/vi/${idVideo_Add}/hqdefault.jpg`,
        description: descriptionCourse_Add
      }

       //Add new course to localStorage. The localStorage key for all the course is courseList'
      if(!localStorage.getItem('courseList')){
        let courseList = [];
        courseList.push(newCourse);
        localStorage.setItem('courseList', JSON.stringify(courseList))
      }else{
        let courseList = JSON.parse(localStorage.getItem('courseList'))
        courseList.push(newCourse)
        localStorage.setItem('courseList', JSON.stringify(courseList))
      }
      document.getElementById("ModalCreate").style.display="none"
      courseList_Load()
      resetForm()
      e.preventDefault()
    }else {
      alert('All fields are required. Please check your entries again')
    }  
  }

  //----------------------------------------
  //setting modal search: 
  const modalSearch = document.getElementById('ModalSearch')
  const btnSearch = document.getElementById('btnSearch')
  const close_ModalSearch = document.getElementsByClassName("close")[2];

  btnSearch.onclick = function() {
    modalSearch.style.display = "block";
  }
  close_ModalSearch.onclick = function() {
    modalSearch.style.display = "none";
  }
  //--------------------------------------

}

// reset form add :
function resetForm (){
  document.getElementById('courseName-inputAdd').value = ""
  document.getElementById('idVideo-inputAdd').value=""
  document.getElementById('description-inputAdd').value=""

}
//----------------

//course list load : 
function courseList_Load () {
  
  
  if (localStorage.getItem("courseList") ) {
    
    let courseList = JSON.parse(localStorage.getItem('courseList'))
    let rowCourse= document.querySelector('tbody')

    rowCourse.innerHTML='';
    for (let i=0; i<courseList.length;i++){

      let stt=i+1
      let id = courseList[i].id
      let nameCourse=courseList[i].courseName
      let description=courseList[i].description
      let thumnail=courseList[i].thumnail

      // ví dụ thumnail là : https://img.youtube.com/vi/gm_L69NHuHM/hqdefault.jpg ==> idvideo
      let idVideo = thumnail.split('/')[4].toString()
      rowCourse.innerHTML += `
      <tr>
        <td >${stt}</td>
        <td style="word-break:break-all;">${nameCourse}</td>
        <td ><img src="${thumnail}" alt="thumnail-${nameCourse}" style="width:80px"/></td>
        <td  style="word-break:break-all;">${description}</td>
        <td ><a href="https://youtu.be/${idVideo}" target="_blank"><i class="las la-external-link-square-alt"></i></a></td>
        <td ><ul class="table-action"><li class="delete" onclick="deleteCourse(${id})"><i class="las la-trash"></i></li>
          <li class="edit" onclick="editCourse(${id})"><i class="las la-pen"></i></li></ul>                 
        </td>
      </tr>
      `
    }

    // numberList
    const iconNumberList = document.querySelector('.la-list span');
    let no = JSON.parse(localStorage.getItem('courseList')).length
    iconNumberList.innerHTML = no;
    if(no===0){
      let rowCourse= document.querySelector('tbody')
      rowCourse.innerHTML='';
      rowCourse.innerHTML += `<tr class="active-row">
        <td colspan="6">Chưa có khóa học nào được thêm!</td>
      </tr>`

    }
  }
}

// edit function && setting modal search
function editCourse(id){
  const modalEdit = document.getElementById('ModalEdit');
  const close_ModalEdit = document.getElementsByClassName("close")[1];
  modalEdit.style.display='block';
  close_ModalEdit.onclick = function() {
    modalEdit.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modalEdit) {
      modalEdit.style.display = "none";
    }
  }

  let courseList = JSON.parse(localStorage.getItem("courseList"));
  for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].id == id) {
        document.getElementById('courseName-inputEdit').value=courseList[i].courseName
        document.getElementById('idVideo-inputEdit').value=courseList[i].thumnail.split('/')[4].toString()
        document.getElementById('description-inputEdit').value=courseList[i].description
    }
  }
  document.getElementById('submitEdit').addEventListener('click',function (){
    submitModalEdit(id)
    courseList_Load()
    document.getElementById('ModalEdit').style.display='none'
  })
}

// submit modal edit : 
function submitModalEdit(id){
  let courseName_Edit = document.getElementById('courseName-inputEdit').value
  let idVideo_Edit = document.getElementById('idVideo-inputEdit').value
  let descriptionCourse_Edit = document.getElementById('description-inputEdit').value
  let courseList = JSON.parse(localStorage.getItem("courseList"));
  if (courseName_Edit !== "" && idVideo_Edit !== "" && descriptionCourse_Edit !== ""){
    let newCourse ={
      id:id,
      courseName:courseName_Edit,
      thumnail: `https://img.youtube.com/vi/${idVideo_Edit}/hqdefault.jpg`,
      description: descriptionCourse_Edit
    }

     //get position in grid when was edited
    for (let i =0; i<courseList.length; i++){
      if(courseList[i].id==id){
        courseList.splice(i,1,newCourse)
      }
    }

    if(!localStorage.getItem('courseList')){
      let courseList=[]
      localStorage.setItem('courseList',JSON.stringify(courseList))
    }else{
      localStorage.setItem('courseList',JSON.stringify(courseList))
      console.log(JSON.stringify(courseList))
    }
  }
}
//---------------------------


// generate id 
function randomID() {
  return Math.floor(Math.random() * (1000002 - 1 + 1)) + 1;
}
//------------------

// deleting any element.
function deleteCourse(id) {
  let courseList = JSON.parse(localStorage.getItem("courseList"));
  if(confirm('Are you sure you want to delete this course ?')) {
    for (let i = 0; i < courseList.length; i++) {
      if (courseList[i].id == id) {
          courseList.splice(i, 1);
      }
    }
    localStorage.setItem("courseList", JSON.stringify(courseList)); 
    courseList_Load() ;
  }
}
//---------------------------

//search name: 

document.getElementById('submitSearch').addEventListener('click',function(){
  let searchValue= document.getElementById('courseName-inputSearch').value.toLowerCase()
  const display = [];
  let countShow=0;

  courseList= JSON.parse(localStorage.getItem('courseList'))
  for (let e of courseList) {
    const info = e.courseName.toLowerCase()
    if(info.includes(searchValue)){
        countShow++
            display.push(e)
    }
  }
  let rowCourse= document.querySelector('tbody')
  rowCourse.innerHTML=''
  if(countShow===0){
    rowCourse.innerHTML=`<tr>
      <td colspan="6">Không có khóa học nào trùng khớp với <span style="color:red">${searchValue}</span>!</td>
    </tr>`
  }
  else {

    for(let i =0;i< display.length;i++){
      let stt=i+1
      let id = display[i].id
      let nameCourse=display[i].courseName
      let description=display[i].description
      let thumnail=display[i].thumnail

      // ví dụ thumnail là : https://img.youtube.com/vi/gm_L69NHuHM/hqdefault.jpg ==> idvideo
      let idVideo = thumnail.split('/')[4].toString()
      rowCourse.innerHTML += `
      <tr>
        <td >${stt}</td>
        <td style="word-break:break-all;">${nameCourse}</td>
        <td ><img src="${thumnail}" alt="thumnail-${nameCourse}" style="width:80px"/></td>
        <td  style="word-break:break-all;">${description}</td>
        <td ><a href="https://youtu.be/${idVideo}" target="_blank"><i class="las la-external-link-square-alt"></i></a></td>
        <td ><ul class="table-action"><li class="delete" onclick="deleteCourse(${id})"><i class="las la-trash"></i></li>
          <li class="edit" onclick="editCourse(${id})"><i class="las la-pen"></i></li></ul>                 
        </td>
      </tr>
      `
    }
    
  }
  document.getElementById('ModalSearch').style.display='none'
  document.getElementById('courseName-inputSearch').value=''
})
//----------------------------