function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commitsList = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(res => {

            if (!res.ok) {

                throw new Error(` ${res.status} (Not Found)`);
            }

            return res.json();
        })
        .then(data => {
            
            commitsList.textContent = '';

            data.forEach(entry => {
                let commitItem = document.createElement('li');

                commitItem.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
                commitsList.appendChild(commitItem);
            });
        })
        .catch(err => {
            commitsList.textContent='';

            
            let errorItem = document.createElement('li');
            errorItem.textContent = err;
            commitsList.appendChild(errorItem);
        })
}

