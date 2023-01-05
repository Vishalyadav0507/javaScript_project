var form =document.getElementById('my-form');
form.addEventListener('submit',addExpense);
function addExpense(e){
    e.preventDefault()
    var rate=document.getElementById("choose").value;
    var select =document.getElementById('expenses').value
    var category =document.getElementById('category').value
    console.log(rate)

    const obj ={
        rate:rate,
        select:select,
        category:category
    }
    localStorage.setItem(rate,JSON.stringify(obj))
    callingList(obj)
}
window.addEventListener("DOMContentLoaded", () => {
         const localStorageObj = localStorage;
         const localstoragekeys  = Object.keys(localStorageObj)

        for(var i =0; i< localstoragekeys.length; i++){
             const key = localstoragekeys[i]
             const userDetailsString = localStorageObj[key];
             const userDetailsObj = JSON.parse(userDetailsString);
             callingList(userDetailsObj)
         }
 })
    
function callingList(user){
    const perentNode=document.getElementById('show')
    const childHTML =`<li id=${user.rate}> ${user.select} ${user.rate} <button onclick= deleteUser('${user.rate}')>delete expences</button><button onclick= editUser('${user.rate}','${user.select}','${user.category}')>edit expences</button> </li>`
    perentNode.innerHTML = perentNode.innerHTML+childHTML;
}
function deleteUser(rate){
    localStorage.removeItem(rate)
    removeUserFromScreen(rate)
}
function editUser(rate,select,category){
   document.getElementById('choose').value=rate
   document.getElementById('expenses').value=select
   document.getElementById('category').value=category

   deleteUser(rate)
}
function removeUserFromScreen(rate){
    const parentNode=document.getElementById('show')
    const childNodeToDeleted=document.getElementById(rate)
    parentNode.removeChild(childNodeToDeleted)
}