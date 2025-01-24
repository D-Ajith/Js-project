let signup=document.querySelector("form")
signup.addEventListener("submit",()=>{
    let n=document.getElementById("name")
    let e=document.getElementById("email")
    let p=document.getElementById("pswd")
    let cp=document.getElementById("cpswd")
    let nv=n.value.trim()
    let ev=e.value.trim()
    let pv=p.value.trim()
    let cpv=cp.value.trim()
    console.log(nv)
    if(nv===""){
        document.getElementById("nameerr").textContent="name required"
    }else if(nv.length<=3){
        document.getElementById("nameerr")
    }
})