// alert("ready page");
const addItems = document.getElementById('add-item');
const allDelete = document.getElementById('alldelete');

addItems.addEventListener('click', () => {

    const inputBox = document.getElementById('inputbox');
    const storeValue = document.getElementById('add-taskAll');
    // console.log('cicked');
    // console.log(inputBox.value);
    const showInputValue = inputBox.value.trim();
    if(showInputValue !== ''){

        
        //trim() functon starting or ending button extra spase not count."     hello there   "
        // console.log(showInputValue);
        // storeValue.innerText = showInputValue;
        // showInputValue.textContent = makeTagh;
    
        const makeTagh = document.createElement('p');
        // makeTagh.textContent = showInputValue;  // textContent use kotre parbo na .karon p tag ar bitor aro kicho tag takbe tai innter html tag takbo
        makeTagh.innerHTML = '  <input type="checkbox">  ' + showInputValue + '  <button onclick="deleteTask(this)">delete</button> <button onclick="replymessage()">reply</button> ';
        

        storeValue.appendChild(makeTagh); //make tag
        inputBox.value = '';
    }else{
        alert("cann't add blank document");
    }

    // storeValue.appendChild(makeTagh);
});

const deleteTask  = (btnclick) => {
    // console.log('clicked');//test time
    // console.log(btnclick); //test time full button click
    // console.log(btnclick.parentNode); //test time use function parentNode() delete button parent li delete
    const p = btnclick.parentNode; //alada variable rekechi
    // console.log(liPatent.parentNode); //test time li parent see
    p.parentNode.removeChild(p); //p ar jaigai onno variable use korsi error hoi. p use variable use korsi

}

allDelete.addEventListener('click', () => {
    
    // deleteAllselect();

});
const deleteAllselect = () => {
    // // console.log(e.parentNode); // test time
    // const p = e.parentNode;
    // // console.log(p.parentNode); // test time
    // p.parentNode.removeChild(p);
    // console.log('click');
    const deleteallchecked = document.getElementById('alldelete');
    const allcheckMark = document.querySelectorAll('input[type="checkbox"]:checked');
    // console.log(allcheckMark);
    allcheckMark.forEach(checkbox => {
        // console.log(checkbox.parentNode);

        const p = checkbox.parentNode;
        // console.log(p.parentNode);
        p.parentNode.removeChild(p);
        

        
    });

}


function replymessage(){

    replyInputPatentst.style.display = "block";
    // const replyInputbox = document.createElement('input');

    // document.write(replyInputbox);



}
// let replyInputWriteBox;
const replyInputPatentst = document.getElementById('replyinputsendbox');
const replySendBtn = document.getElementById('replysendbtn');
// const replyDeleteBtn = docuent.getElementById('replydeletebtn');
const replyCommStore = document.getElementById('replyCstore');
const replyInputWriteBox = document.getElementById('replyinputBox');
replySendBtn.addEventListener('click', () => {
    const replyInputWriteBox = document.getElementById('replyinputBox');
    // const replyinValue = replyinputBox.value;
    // console.log('clicked');
    const replySendValue = replyInputWriteBox.value.trim();
    
    if(replySendValue !== ""){

        const makeSendPteg = document.createElement('p');
        makeSendPteg.innerHTML = replySendValue + '    <button onclick="replymaildelete(this)">delete reply</button>';
        
        replyCommStore.appendChild(makeSendPteg);
        replyInputWriteBox.value = '';
    }else{
        alert('no reply yet!')
    }
    
    

    // console.log(replyinValue);
    
});

const replymaildelete = (elem) => {
    // console.log(elem.parentNode);
    // console.log('clicked');
    const p = elem.parentNode;
    p.parentNode.removeChild(p);
    
}

function replytonone(){

    replyInputPatentst.style.display = "none";
}
// replyDeleteBtn.addEventListener('click', () => {

// });


// const replymessage = () => {
   

// }

