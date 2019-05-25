# Home from Home Holiday Search

This website is to provide a user friendly service to complete a search on holiday desitinations.
It is simple and easy to use, allowing users to enter their holiday search destination and display the results on the map.

The website also encorporates a google places search, and through the use of radio buttons can display markers for a selected number of different place types. 
The user can select from the different options available and the map will be updated with the place markers for the searched location. In addition
to this, a scrollable table which details the place names for each the markers which have been displayed on the map, to provide the user with a convienient summary information.

The markers on the map are also clickable, which will then display further information in an information window 
on the selected place for the user to view.

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

The following wireframes document "Project2_wireframes.pdf" is also available on GitHub (https://github.com/eldowling/holiday-search-google-maps/blob/master/docs/Project2_wireframes.pdf) 

This document was used to provide an outline of the content required in the Holiday Search web application. Focusing on providing the key features and basic layout required.

## Features

This is a single page application to allow users search for a holiday destination and view it on a map. The site has the following features / functions:
- A search bar which uses the Google Places API and autocomplete to provide a list of locations to search for.
- The map is displayed and linked to the searched location, which is updated after each search
- There are 4 radio option buttons available for the user to select the nearby search, which will display markers on the map for the selected option.
- A search results table with detailed information for each of the markers is displayed and updated when the user selections any of the options.
- A Clear button is available to clear the markers from the map and hide the table from view, allowing them to preform another search, if required.
 
### Existing Features
- The search bar allows the user to type the location name they wish to search for, while using Google Places autocomplete to provide 
place name suggestions to search for.
- The search bar is also linked to the map, and will update the searched location on the map once selected.
- Radio option buttons are available to allow the user to complete a simplified search on nearby place types, such as:
    - Accomodation
    - Restaurants & Cafes
    - Bars
    - Attractions
- When the user selects one of the radio options, the map will then be populated with markers for the 
appropriate place type.
- After the markers are loaded for the selected place type, a table listing of the markers, together
with the establishment name, rating and price level details will be displayed.
- A clear button is available beside the radio options, this can be used to remove the markers from the
map, and it will also remove the listing table until the next nearby search is completed.

### Features Left to Implement
- The site could be expanded to allow the user to save a list of destinations or attractions that they
are interested in visting.
- The listing table could also be updated to include other relevant details provided by the
Google Places API.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - **HTML5** is the markup language used to structure and present the content of the website. It provides features allowing for placement of the Map, and use of forms and tables in the website.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - A **CSS Stylesheet** was used to define the style of the page such as images, headings and tables. Media Queries are also used in order to apply different settings depending on the screen size being used to view the site.
- [Bootstrap](https://getbootstrap.com/docs/3.3/)
    - The project makes use of the **Bootstrap** framework to structure the page and provide a responsive grid which contains the various elements of the page such as the search bar, Map and table of search results.
- [Bootswatch](https://https://bootswatch.com)
    - The 'Sandstone' **Bootswatch** theme was used to quickly apply a them of typography and fonts, buttons and colours, and table formats to the Bootstrap grid layout applied to the site.
- [FontAwesome](https://fontawesome.com/)
    - **Font Awesome** was used apply some customised icons on the page, to highlight the search section and further enhance the page.
- [JavaScript](https://www.javascript.com)
    - **JavaScript** was used throughout the web application to perform various functions such as:
        -   Loading the map and using co-ordinates to display a default map.
        -   Load the new location on the map based on the Google Places search performed by the user.
        -   Place Markers on the map based on the 'Search Nearby' location search, and clear the markers by using a Clear button.
        -   Compile the results of the nearby location search into a table, and build dynamic HTML code to display the results list in a structured table format each time the user completes a search.
        -   Build the search results data into an information window which is activated when the user clicks on a marker.
- [Google Maps API](https://cloud.google.com/maps-platform/maps/)
    - **Google Maps API** is used in this project in order to display a customised and interactive map to display the user's searched location, and also to display customised markers for an additional search of nearby places.
    - The default map was loaded with a set location using Longitude and Latitude co-ordinates for Dublin city.
    - The zoom level of the map was also set to allow the user to see streets and landmarks around Dublin city center. Users can control the zoom on the map, and can zoom in or out with ease.
- [Google Places API](https://cloud.google.com/maps-platform/places/)
    - **Google Places API** is used together with the search bar to control the location displayed on the map, and provide autocomplete for place names as search is being completed. 
    - An event listener is used to check the autocomplete search bar for the place_changed event, when this is true, it then calls the OnPlaceChanged function to update the map for the new location.
    - The show nearby places radio options uses Google Places to carry out a search of nearby facilities based on the place 'type' defined by the radio option that is selected.
    - Google Places also returns multiple data items on the locations and these are used to fill both the Results table, as well displaying place details in an information window if the place marker on the map is clicked.
    - A second event listener is used to check if a marker has been clicked and will display an information window with the relevant place details.
    - Each radio option defines a place type to display markers for any locations on the map defined with the same place type as the one selected. Some of the options are set to use more than one place type, these are defined using a comma seperated list. 
    - A search function is then used to split the list of place types and are used in the types array when displayed on the map.

## Testing

Extensive testing was required to be carried out at each stage of the project. After each function had been implemented testing was performed to ensure it was working correctly, or if any issue was found it could be corrected and retested before proceeding to creating the next function.

Details of the scenarios used for testing are listed below:

1. Loading the map with set Longitude and Latitude Co-Ordinates:
    1. Open the page and ensure the map loads, some difficulties arose from trying to set up the API Key and no map was display.
    2. Changed the default selected zoom to show a detailed view of the streets in the city center when the map is first loaded.
2. Formatting map size
    1. Defined the map with to be 100% of screen size on mobile devices, tested this and included it in a bootstrap table to allow for padding at the edges
    2. Set up a media query for medium screen size, where the map width is defined to allow for the map to be displayed on the left of the screen and the results table to be shown on the right when it is implemented.
3. Placing Markers
    1. Included function to place markers of all places of type 'cafe' within a 5 mile radius of the center point in the map.
    2. Loaded the map and checked that markers were being displayed
4. Changing map location and reload markers
    1. Markers are displayed when map is loaded to its default location. 
    2. Move the map and change it to a different location
    3. Right click to load the markers again for a new location
    4. Check that the old markers have been cleared if move back to the original location
5. Autocomplete search bar bound to map
    1. An autocomplete search bar was added to the top of the map to use the Google Places autocomplete function for searching place names
    2. Tested by typing in place names in the search bar and selecting the suggested place names
    3. Map was then reloaded to display the new location
    4. Markers were displayed for 'cafes' in the new location
7. Seperate search bar and linking to the map
    1. Original concept was to have a seperate search box above the map, removed the autocomplete search box and implemented the new search bar to have the same autocomplete functionality
    2. Typed place names and selected a place from the list of suggestions
    3. Checked that map was re-loaded with selected place
    4. Checked that markers were also loaded for new location
8. Radio options for selecting Place Types
    1. 
9. Displaying markers for options with multiple place types
10. Clicking on marker to display information window
11. Displaying results table with details from each marker displayed on map
12. Using clear button

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
