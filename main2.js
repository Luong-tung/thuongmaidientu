alert("Rất vui chào mừng Bạn đến với sản phẩm của nhóm 20")
confirm("Bạn đã sẵn sàng chưa?")
var counter = 1;
setInterval( () =>{
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter >4) {

        counter =1;
    }
},2500);
