let submit = document.getElementById('submit');
let container = document.getElementById('container');
let section2 = document.querySelector('.section2')
let login = document.getElementById('user').value
submit.addEventListener("click", function(e) {
e.preventDefault()
 let login = document.getElementById('user').value

if (login == "")
{
    alert("Please Enter a username")
}
 

 
else {

 
     
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {

        
         

        
       
        var img = document.createElement('img')
        img.src=user.avatar_url;
        img.style.height = "200px";
        img.style.width = "200px";
        img.style.borderRadius = '50%';
        img.style.marginLeft = '20px';
        img.style.marginTop="50px";

        var name = document.createElement('h2')
        name.textContent = user.name;
        name.style.marginTop="140px";
        name.style.marginLeft="100px";
        name.style.color = "#264653";
        name.style.flexWrap = "wrap"

        var joined1 = document.createElement("h4")
        joined1.textContent = `Followers : ${user.followers}`;
        joined1.style.marginTop = "145px";
        joined1.style.marginLeft = "80px"
        joined1.style.color = "#264653";

        var joined2 = document.createElement("h4")
        joined2.textContent = `Following : ${user.following}`;
        joined2.style.marginTop = "145px";
        joined2.style.marginLeft = "80px"
        joined2.style.color = "#264653";

        var repos = document.createElement('h2')
        repos.textContent = "Repos : " + user.public_repos;
        repos.style.marginTop = "30px"
        repos.style.marginLeft = "50px"
        repos.style.color = "#f72585";

        var login1 = document.createElement('h3')
        login1.textContent = "@" + user.login;
        login1.style.marginLeft = "50px"
        login1.style.marginTop = "40px";
        login1.style.color = "#212529";

        let bio1 = document.createElement('h3')
        bio1.textContent = user.bio;
        bio1.style.marginLeft = "50px";
        bio1.style.marginTop = "40px";
        bio1.style.color = "#001219";
        container.appendChild(img)
        container.appendChild(name)
        container.appendChild(joined1)
        container.appendChild(joined2)
        section2.appendChild(login1)
        section2.appendChild(bio1)
        section2.appendChild(repos)
   

submit.disabled = true;
    

        
    
        
    }) 

  

    .catch(err => {
  
      console.error(err.message);
    });
   }
  
 
     
})

