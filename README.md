# Lions Den Apparal
Welcome to Lion's Den Apparal - your one stop shop for all of the hippest gear to keep you leading the pack in style. View all our available porducts in an expansize photo gallery. Build your outfit with suggested related items. If for some reason you don't think a product is right for you, ask us a question or read reviews from other happy customers!

This is a front end focused project using React, React-bootstrap, and Styled Components to create a stylish web-shopping portal with all the functionality users would expect from a large online retailer.

 # Workflow
 For this project we maintained one main branch, one staging branch, and individual feature branches as for each component. Sprint plans were tracked using [Trello](https://trello.com/b/SjWdKe9X/catwalk-fec-project). When features were ready to be added into stage the following steps were taken:
  1. Pull down the stage branch
  2. Merge local feature branch with local stage branch
  3. Validate that all features are still working correctly
  4. Push changes to GitHub and create a pull request into staging
  5. Another teammember must complete a code review before giving the ok to merge
  6. At the end of the sprint, stage is merged in main

# Get Started
  To run this on your own machine, execute the follwing commands from a terminal in the root folder:
   - npm install
   - npm run build
   - npm start
   - navigate to localhost:3000

## Challenges/lessons learned
  This was the first project where all contributors worked in a team on one single project. The section of the page were easy to divide between members to allow for each teammate to own one particular section. Our biggest challenge was figuring out how to navigate the React lifecycle when loading our components. Namely, we ran into trouble with the ComponentDidMount method of child components trying to complete before their parent components completed and throwing errors because the state in the parent component hadn't been updated yet. We got around this through a mix of conditional rendering, and using Keys to dismount and regenerate the components whenever the selected style was changed.
