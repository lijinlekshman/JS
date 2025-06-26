'use strict';

const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const mNumber = document.getElementById('mNumber');
const email = document.getElementById('eMail');
const msg = document.getElementById('msg');

document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();

    const fields = [
        { id: 'fName', name : 'First Name'},
        { id: 'lName', name : 'Last Name'},
        { id: 'mNumber', name : 'Mobile Number'},
        { id: 'eMail', name : 'Email'},
        { id: 'msg', name : 'Message'},
    ];

    let isValid = true;


     fields.forEach(field =>{
        const input = document.getElementById(field.id);
        const errorMsg = input.nextElementSibling;

        if(input.value.trim() === ""){
            errorMsg.textContent = `${field.name} cannot be empty! ❌`;
            errorMsg.style.display = "block";
            isValid = false;
        }
        else{
            errorMsg.style.display = "none";
        }

        if(field.id === "mNumber" && input.value.trim() !== ""){
            if(!/^\d{10}$/.test(input.value.trim())){
                errorMsg.textContent = "Enter a valid 10-digit number";
                errorMsg.style.display = "block";
                isValid = false;
            }
        }

        if(field.id === "eMail" && input.value.trim() !== ""){
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailPattern.test(input.value.trim())){
                errorMsg.textContent = "Enter a valid email adress.";
                errorMsg.style.display = "Block";
                isValid = false;
            }
        }
        
     });

     if(isValid){
    alert("Form Submitted Successfully!");
}
});

