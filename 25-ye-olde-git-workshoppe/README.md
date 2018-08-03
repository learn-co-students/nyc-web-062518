# Ye Olde Git Workshoppe

---

- What is Git?
  - Git is a version control system (VCS)
  - Essentially, Git allows us to travel through time in our code by creating a series of snapshots in time. These snapshots are called `commits`. You can view your commits by calling `git log` from your terminal. You can supply an optional number of commits; `git log -n 4 --oneline` will give you the 4 most recent commit messages and condense each commit.

```sh
// 🌚🍔 git log -n 4
9c8360d ruby scope (Andrew Cohn, 4 minutes ago)
f7a92f0 thx mozilla 😍 (Andrew Cohn, 21 hours ago)
41b84c0 THE WINDOW OBJECT (Andrew Cohn, 21 hours ago)
2599560 this (Andrew Cohn, 22 hours ago)
```

Pay attention to the structure of logs here:
`f7a92f0 thx mozilla 😍 (Andrew Cohn, 21 hours ago)`

- Commits begin with a [SHA](https://en.wikipedia.org/wiki/Cryptographic_hash_function), or hashed data about the commit. It is essentially, a commit id: `f7a92f0`
- Secondly, we'll find the commit message: `thx mozilla 😍`
- Finally, the author of the commit and the timestamp: `(Andrew Cohn, 21 hours ago)`

---

Notice now that the HEAD is pointing to a different commit. Essentially, I've traveled back in time to an older commit and my HEAD is pointing here. The HEAD is basically my current branch and current commit. What is the state of my code; where am I both in time and in terms of branches.

If I want to go back in time and make changes, I'll have to create a new branch from this detached HEAD state: `git checkout -b new-feature-from detached-head`.

This will maintain my commit history because I can merge this new branch back into my master branch.

---

#### Creating a New Snapshot (Commit)

Once I've finished a new feature in git, I can create a new snapshot and save my current progress:

- First I'll call `git status` to see which files I've updated since my last commit:

```sh
// 🌚🍔 git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   25-ye-olde-git-workshoppe/README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

- Git will tell me that I've changed a file called README.md: `modified: 25-ye-olde-git-workshoppe/README.md`
- If I want to create a new shapshot of these changed files, I'll have to add them to the "staging area"––the pre-commit stage. Staging files is basically preparing them to be committed:
- `git add git add 25-ye-olde-git-workshoppe/README.md` OR `git add .` to add all of my changed files to the staging area, or pre-commit zone.

---

#### Checking Out and Older Commit

Remember how we said Git allows us to "travel through time?"
If I call `git checkout 41b84c0` I can view the state of my project at this particular point in time:

```sh
// 🌚🍔 git checkout 41b84c0
M	25-ye-olde-git-workshoppe/README.md
Note: checking out '41b84c0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

git checkout -b <new-branch-name>

HEAD is now at 41b84c0 THE WINDOW OBJECT
```

- If I want to go back to my most recent commit, I can call `git checkout master` or whatever branch I was working on. This will point my HEAD back at my most recent commit.

---

- How do you resolve a merge conflict?
- How do I undo changes?
  - How do I cover my tracks
  - How can I make my reversion visible to my team?
- Branches
- What is remote 🤔
- What is git fetch vs. git pull?
  - Asks the remote (GitHub) for changes and updates my **local copy** of `origin/master`
  - Git pull will fetch **AND** merge with my current branch
- Diffing from the command line
- Merging branches locally vs GitHub pull requests

---

## Additional Resources:

- [Git Wikipedia Page](https://en.wikipedia.org/wiki/Git)
- [What is GitHub YouTube video](https://www.youtube.com/watch?v=w3jLJU7DT5E)
- [Git Course on Codecademy](https://www.codecademy.com/learn/learn-git)
- [Visualizing Git by GitHub](http://git-school.github.io/visualizing-git/)
- [Resources for Learning Git by GitHub](https://try.github.io/)

---

![Git Cheet Sheet](https://www.git-tower.com/blog/content/posts/54-git-cheat-sheet/git-cheat-sheet-large01.png)
