let login=document.querySelector("form")
login.addEventListener("submit",(k)=>{
    k.preventDefault()
    
    let emailFormValue=document.getElementById("email").value.trim();
    let passwordFormValue=document.getElementById("password").value.trim();

    let storageCrenerials=JSON.parse(localStorage.getItem("users"));

    console.log(storageCrenerials);

    const user=storageCrenerials.find(x=>{
        return x.email === emailFormValue && x.password === passwordFormValue
    })
    console.log(user);
    

    if(user){
        alert("successfully loggedin")
        location.href="../navbar/navbar.html"
    }else{
        alert("user not found")
        location.href="./login/login.html"
    }

})

