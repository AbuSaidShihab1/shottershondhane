   let adminleft=document.querySelector(".admin-left");
        let adminright=document.querySelector(".admin-right");
        let sideicon=document.querySelector(".side-icon");
       sideicon.addEventListener("click",function(){
          adminleft.classList.toggle("adminactive");
          adminright.classList.toggle("adminacright")
       });
       let sideicon2=document.querySelector(".side-icon2");
       sideicon2.addEventListener("click",function(){
         adminleft.style.left="0"
       });
        let removebox=document.querySelector(".removebox");
        removebox.addEventListener("click",()=>{
            adminleft.style.left="-400px"
        });
           var oriloaction = window.location.pathname;
                var linka = document.querySelectorAll("ul li a").forEach((e) => {
                  if (e.href.includes(oriloaction)) {
                    e.classList.add("activelink")
                  }
                });