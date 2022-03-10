function loadRepos() {

	let username = document.querySelector('#username').value;
	let repoList = document.getElementById('repos')


	fetch(`https://api.github.com/users/${username}/repos`)
	.then(res=>res.json())
	.then(data=>{
		
		repoList.textContent=''

		data.forEach(repo => {
			let repoListItem = document.createElement('li');
			let repoUrl = document.createElement('a');
			
			//set URL and name to list item
			repoUrl.href = repo.html_url;
			repoUrl.textContent = repo.full_name;
			
			//append items
			repoListItem.append(repoUrl);
			repoList.appendChild(repoListItem);
		});

	})
}

{/* <li>
	<a href="{repo.html_url}">
		{repo.full_name}
	</a>
</li> */}