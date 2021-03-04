# project-cat-walk
Project for HRATX54 FEC

main branch is the production/user-facing branch
staging branch is where first merge will occur to make sure overall functionality is not broken
  

Create a new branch:
 - first make sure your local version of the main branch is up to date. Run command: git pull origin main
 - run command: git checkout -b new_branchname
 - to verify that you are on the correct branch, run git status. First line will say what branch you are currently on
 - run command: git merge main
 
Pushing branch to Github:
 - verify that all changes are commited
 - run command: git checkout main
 - run command: git pull origin main
 - run command: git checkout <name of branch you're looking to push>
 - run command: git status
 - verify the result of git status shows you are on the feature branch
 - run command: git merge main
 - resolve any conflicts !!in the feature branch!!
 - run command: git status
 - verify your branch is still clean
 - run command: git push
 - copy outputed command and run that

Updating staging and main branches
 - From your newly pushed feature branch create a pull request into the staging branch
 - notify teammate for review
 - teammate reviews and if no changes need to be made merges the pull request
 - reviewer notifies the feature branch owner that the merge is complete
 - feature branch owner performs the following steps
 - run command: git checkout staging
 - run command: git pull origin staging
 - verify that all new changes are still working as expected and nothing else is broken
 - run command: git push origin staging
 - in github create a pull request from staging into main
 - approve your own merge request
