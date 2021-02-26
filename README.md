# project-cat-walk
Project for HRATX54 FEC

Branch feature workflow:
1 - create branch by running git checkout -b <new branchname>
2 - when ready to push, but before actulaly pushing, checkout the main branch in your local copy and pull the main branch down form github. Merge that branch into the feature branch. This will help prevent conflicts when you push.
3 - When you're done working and ready to push, and changes from main have been merged, run git push
  - git will output a command to run that will push into the currently checked-out branch. Run that command
3 - In github, create a pull request into the main branch from the feature branch
4 - notify teammates for review
5 - if teammates sign off, merge into into main
6 - verify main branch is still working. If so, create a final pull request from main into production. <Do we want review here as well?>
