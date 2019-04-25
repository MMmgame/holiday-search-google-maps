# Home from Home Holiday Search

This website is to provide a user friendly service to complete a search on holiday desitinations.
It is simple and easy to use, allowing users to enter their holiday search destination and display the results on the map.

The website also encorporates a google places search, and through the use of radio buttons can display markers for different place types. 
The user can select from the different options available and the map will be updated with the place markers for the searched location. In addition
to this, a scrollable table which details the place names for each the markers which have been displayed on the map, to provide the user with a convienient summary information.

The markers on the map are also clickable, which will then display further information on the place for the user to access.
The markers can be cleared from the map by using the Clear button to the right of the radio buttons, which will also remove the results table from view until the next search is completed.
 
## UX
 
The site was developed to provide the user with a simple method of searching a holiday destination, giving them options to search for nearby facilities
in the search location, and to display the results in a easy to read formatted list. While the Clear button will give them the option to remove the markers
from the map, and clear the table.

The user stories below demonstrate what key features were required from the holiday search site:
- As a mobile device user, I wanted to be able to search for a holiday desitination and view the area on a map in the simplist manner. I also wanted to have the
option to search for nearby accomdation or restaurants in the locality.
- When searching for holiday destinations, I like to be able to browse from my phone or tablet quickly and easily. I also like to have a list of attractions in the area
which allows me to view the ratings and prices at a glance.
- I like to research holiday destinations at my PC where I can view a map of the area on a larger scale. I also like to search for tourist attractions and restaurants nearby. 
On clicking a place marker I would like to view contact details or their website address so that I can view it in more detail.

Wireframes document "Project2_wireframes.pdf" is also available on GitHub (https://github.com/eldowling/holiday-search-google-maps/docs/Project2_wireframes.pdf)

## Features

This is a single page application to allow users search for a holiday destination and view it on a map. The site has the following features / functions:
- A search bar which uses the Google Places API and autocomplete to provide a list of locations to search for.
- The map is displayed and linked to the searched location, which is updated after each search
- There are 4 radio option buttons available for the user to select the nearby search, which will display markers on the map for the selected option.
- A search results table with detailed information for each of the markers is displayed and updated when the user selections any of the options.
- A Clear button is available to clear the markers from the map and hide the table from view, allowing them to preform another search, if required.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
