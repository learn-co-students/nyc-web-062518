# Git Workflow

# Clone Down the Repo

- From GitHub, click the clone or download button, and call `git clone git@github.com:YOUR_USERNAME/NAME_OF_REPOSITORY.git`

# Add Collaborators

- Navigate to settings on the repo page from GitHub
- Click the collaborators button, search for your partner and invite them to collaborate
- **IMPORTANT** Your partner needs to accept the invitation to collaborate in order to read/write to the repo

# Checkout a New Branch and Make Some Changes

- `git checkout -b new-branch-name`
- This will create a new _local_ branch
- Write some code, when you're ready to commit:
- `git status` will show you the changes
- `git add .` OR `git add name-of-file`
- `git commit -m 'user input for dog selection working'` or some other _descriptive_ commit message
- `git push` to push your _local_ changes to the remote: GitHub

# I'm Done with My New Feature How Do I get the Code to Master?

- `git checkout master` will put you back on the master branch
- `git merge new-branch-name` will merge the code from your other branch into master and add the commit history from that branch to master
- `git push` will publish those changes to GitHub

# My Partner Made Some Changes that I need Locally

- `git pull` will fetch the changes on the remote repository **and** merge them in to your local copy. When my partner _pushes_ code to GitHub, I'll need to _pull_ that code onto my machine

---

Git Cheat Sheet courtesty of [git tower][git_tower]

![][git_cheat_sheet]

<!-- MD VARS FTW -->

[git_cheat_sheet]: https://www.git-tower.com/blog/content/posts/54-git-cheat-sheet/git-cheat-sheet-large01.png
[git_tower]: https://www.git-tower.com/blog/git-cheat-sheet/
