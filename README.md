# connect-platform-package-boilerplate
the boilerplate project for CONNECT platform packages.


## how to setup
I am going to assume you would want to version control your package using Git. Basically all you need to do is to clone this repo, change the origin URL, and then merge possible conflicts, which are general Git operations and not specific to CONNECT platform. but anyways:

1) `git clone https://github.com/loreanvictor/connect-platform-package-boilerplate.git`
   1) simply clones the contents of this boilerplate project. 
1) `mv connect-platform-package-boilerplate <your-package-name>`
   1) and rename it to whatever your package name is.
1) `cd <your-package-name>`
1) `git remote set-url origin <your-repository-url>`
   1) now change the origin for your git repository.
   1) obviously you need to have created this repo before this step.
1) `git fetch`
1) `git pull`
1) `git merge --allow-unrelated-histories`
   1) get the code (preferably empty) from your repository and merge it.
   1) here you might get some merge conflicts, which you would need to resolve manually.
1) also update `package.json` to mirror your package information:
   1) do not forget package name and description.
   1) do not forget package repository link, readme link and issues link.
   1) do not forget package version.
1) thats it. commit all changes and push.
