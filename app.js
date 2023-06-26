const submit=document.querySelector('#submit');
const input=document.querySelector('#todo');
const list=document.querySelector('ul');

let editFlag=false;

submit.addEventListener('click',()=>{
    if(editFlag||input.value==="") return;

    const text=document.createElement("input");
    text.value=input.value;
    text.classList.add("editInput");
    text.setAttribute('readonly', 'readonly');
    
    const accept=document.createElement("img");
    accept.src="/icons/check.svg";
    accept.classList.add("hide","editButton");

    const edit=document.createElement("img");
    edit.src="/icons/edit-2.svg";
    edit.classList.add("edit");
    edit.innerText="edit";
    edit.addEventListener('click',()=> {
        editFlag=true;
        text.removeAttribute("readonly");
        accept.classList.remove("hide");
        edit.classList.add("hide");
        accept.addEventListener('click',()=>{
            accept.classList.add("hide");
            text.setAttribute('readonly', 'readonly');
            edit.classList.remove("hide");
            editFlag=false;
        })
    });

    const del=document.createElement("img");
    del.classList.add("delete");
    del.src="/icons/trash-2.svg";
    del.addEventListener('click',()=> {
        del.parentNode.remove();
    });
    
    const item=document.createElement("li");
    item.appendChild(text);
    item.appendChild(accept);
    item.appendChild(edit);
    item.appendChild(del);
    list.appendChild(item);
    
    input.value="";
})