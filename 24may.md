# BASICS OF GITHUB

## Clone
copying contents of online repo to work offline

` git clone <repo url>`

example `git clone https://github.com GRAYSON-KIPIPA/first-repository.git`


## Commits

command ` git commit -m "your message" `


steps to commit:
1. check the status of the repo
    - `git status`

1. add untracked changes to offline git repo
    - `git add <filename>`
    - example `git add 24may.md`


for adding all files use command `git add .`


3. commit to the offline repo (.git)
    - `git commit -m "<message>" `
    - `git commit -m "created basics for git file"`



## Push
1. check kthe status of the offline repo
    - `git status`


2. Push the changes online
    - `git push`

## Branches
1. creating a branch
    - `git branch <branch name>`
    - `git branch firstbranch`

2. to View branches available
    - `git branch`

3. to switch branch
    - `git checkout <branchname>`
    - `git checkout firstbanch`

4. to push new branch to online repository
    - `git push -u origin [branch] `
    - `git push -u origin firstbranch`

## Extensions
1. vscode extension

## After learning today wednesday

1. try to add some changes to the main branch
