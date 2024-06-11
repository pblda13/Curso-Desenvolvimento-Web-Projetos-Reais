
let numberList = document.getElementById('numberList')

for(let i = 1 ; i <= 5; i++){
  let listItem =  document.createElement('li')
  listItem.textContent = 'Item' + 1
  numberList.appendChild(listItem)
}

