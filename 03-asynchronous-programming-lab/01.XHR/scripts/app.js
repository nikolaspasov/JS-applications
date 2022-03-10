function loadRepos() {
   fetch('https://api.github.com/users/testnakov/repos')
      .then(res => res.json())
      .then(data => {

         console.log(data);
         let repoDiv = document.getElementById('res');
         repoDiv.textContent=data;
      })
}