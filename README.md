# Home from Home Holiday Search

This website is to provide a user friendly service to complete a search on holiday destinations, which is simple and easy to use, 
allowing users to enter their holiday search destination and display the results on the map.

The website also incorporates a Google Places search, and through the use of radio buttons can display markers for a selected number of different place types. 
The user can select from the different options available and the map will be updated with the place markers for the searched location. In addition
to this, a scrollable table which details the place names for each the markers which have been displayed on the map, to provide the user with a convenient summary information.

The markers on the map are also clickable, which will then display further information in an information window 
on the selected place for the user to view.

The markers can be cleared from the map by using the Clear button to the right of the radio buttons, which will also remove the results table from view until the next search is completed.
 
## UX
 
The site was developed to provide the user with a simple method of searching a holiday destination, giving them options to search for nearby facilities
in the search location, and to display the results in a easy to read formatted list. While the Clear button will give them the option to remove the markers
from the map, and it wiil also clear the table.

The user stories below demonstrate what key features were required from the holiday search site:
- As a mobile device user, I wanted to be able to search for a holiday destination and view the area on a map in the simplest manner. I also wanted to have the
option to search for nearby accommodation or restaurants in the locality.

- When searching for holiday destinations, I like to be able to browse from my phone or tablet quickly and easily. I also like to have a list of attractions in the area
which allows me to view the ratings and prices at a glance.
- I like to research holiday destinations at my PC where I can view a map of the area on a larger scale. I also like to search for tourist attractions and restaurants nearby. 
On clicking a place marker I would like to view contact details or their website address so that I can view it in more detail.

The following wireframes document "Project2_wireframes.pdf" is also available on GitHub (https://github.com/eldowling/holiday-search-google-maps/blob/master/docs/Project2_wireframes.pdf) 

This document was used to provide an outline of the content required in the Home from Home Holiday Search web application. Focusing on providing the key features and basic layout required.

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
    - Accommodation
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
are interested in visiting.
- The listing table could also be updated to include other relevant details provided by the
Google Places API, such as Opening Hours or Reviews

## Technologies Used

The languages, frameworks, libraries, that were used to construct this project are listed below, as well as information on what it was used for in the project.

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - **HTML5** is the markup language used to structure and present the content of the website. It provides features allowing for placement of the Map, and use of forms and tables in the website.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - A **CSS Stylesheet** was used to define the style of the page such as images, headings and tables. Media Queries are also used in order to apply different settings depending on the screen size being used to view the site.
- [Bootstrap](https://getbootstrap.com/docs/3.3/)
    - The project makes use of the **Bootstrap** framework to structure the page and provide a responsive grid which contains the various elements of the page such as the search bar, Map and table of search results.
- [Bootswatch](https://https://bootswatch.com)
    - The 'Sandstone' **Bootswatch** theme was used to quickly apply a theme of typography and fonts, buttons and colours, and table formats to the Bootstrap grid layout applied to the site.
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
    - The zoom level of the map was also set to allow the user to see streets and landmarks around Dublin city centre. Users can control the zoom on the map, and can zoom in or out with ease.
- [Google Places API](https://cloud.google.com/maps-platform/places/)
    - **Google Places API** is used together with the search bar to control the location displayed on the map, and provide autocomplete for place names as search is being completed. 
    - An event listener is used to check the autocomplete search bar for the place_changed event, when this is true, it then calls the OnPlaceChanged function to update the map for the new location.
    - The show nearby places radio options uses Google Places to carry out a search of nearby facilities based on the place 'type' defined by the radio option that is selected.
    - Google Places also returns multiple data items on the locations and these are used to fill both the Results table, as well displaying place details in an information window if the place marker on the map is clicked.
    - A second event listener is used to check if a marker has been clicked and will display an information window with the relevant place details.
    - Each radio option defines a place type to display markers for any locations on the map defined with the same place type as the one selected. Some of the options are set to use more than one place type, these are defined using a comma separated list. 
    - A search function is then used to split the list of place types and are used in the types array when displayed on the map.

## Testing

Extensive testing was required to be carried out at each stage of the project. After each function had been implemented testing was performed to ensure it was working correctly, 
or if any issue was found it could be corrected and retested before proceeding to creating the next function.

The while designing the initial layout, a simple format was chosen for a mobile first approach. The layout was changed slightly to fill out the wider screens more, 
and make the results table more accessible and easier to see without having to scroll down further. Testing was carried out on a mobile device, tablet and medium and large screen
devices to ensure the layout was adjusted for each screen size. Chrome, Internet explorer and Firefox were also used to check that the layout remained the same on each.

Scenarios used for testing are detailed below:

1. Loading the map with set Longitude and Latitude Co-Ordinates:
    a. Open the page and ensure the map loads, some difficulties arose from trying to set up the API Key and no map was display.
    b. Changed the default selected zoom to show a detailed view of the streets in the city centre when the map is first loaded.
2. Formatting map size
    a. Defined the map with to be 100% of screen size on mobile devices, tested this and included it in a bootstrap table to allow for padding at the edges
    b. Set up a media query for medium screen size, where the map width is defined to allow for the map to be displayed on the left of the screen and the results table to be shown on the right when it is implemented.
3. Placing Markers
    a. Included function to place markers of all places of type 'cafe' within a 5 mile radius of the center point in the map.
    b. Loaded the map and checked that markers were being displayed
4. Changing map location and reload markers
    a. Markers are displayed when map is loaded to its default location. 
    b. Move the map and change it to a different location
    c. Right click to load the markers again for a new location
    d. Check that the old markers have been cleared if move back to the original location
5. Autocomplete search bar bound to map
    a. An autocomplete search bar was added to the top of the map to use the Google Places autocomplete function for searching place names
    b. Tested by typing in place names in the search bar and selecting the suggested place names
    c. Map was then reloaded to display the new location
    d. Markers were displayed for 'cafes' in the new location
7. Separate search bar and linking to the map
    a. Original concept was to have a separate search box above the map, removed the autocomplete search box and implemented the new search bar to have the same autocomplete functionality
    b. Typed place names and selected a place from the list of suggestions
    c. Checked that map was re-loaded with selected place
    d. Checked that markers were also loaded for new location
8. Radio options for selecting Place Types
    a. Set value for the radio options with different place types, then loaded the map and clicked on each of the option buttons.
    b. Checked that different markers were being loaded for each place type.
9. Displaying markers for options with multiple place types
    a. Expanded on the option buttons to include multiple place types for some of the options. 
    b. Separated the values with commas and inputted them to an array. Found issues with using this array and took some adjustments until the correct format was found to allow it return places for these multiple types.
    c. Switched between each of the option buttons to make sure it was clearing the previous set of markers and displaying markers correctly for the place type selected.
10. Clicking on marker to display information window
    a. Selected an option button to display markers for a place type
    b. Clicked on a marker to check that the information window was being displayed and included the correct details for the marker displayed
    c3. Closed the information window and clicked on other markers, checking that the details displayed were correct for each.
11. Displaying results table with details from each marker displayed on map
    a. Created a table that is built from the list of place types results and displayed when markers are displayed
    b. Checked the table and make sure it is showing the relevant marker details
    c. Added in the rating field to the table, initially it was displaying with the numeric value, updated the code to display the ratings with star icons
    d. Found issues with using the star icons because of how the table was being built using the createTextNode, the star icons had to be defined with their unicode value in order to display correctly.
    e. When building in column for price level of the location, the same principle was applied to display the Euro symbol to represent the price level.
    f. Tested by checking the value output for the rating level and price level on numerous markers, then compared these to the number of stars and Euro signs displayed on the table.
12. Using clear button
    a. Checked that the markers were removed from the map when the clear button was clicked.
    b. All radio options should be unchecked when clicked.
    c. Results table should be hidden when the clear button is clicked

## Deployment

The project was development using Cloud9 and deployed to the GitHub hosting platform

In order to maintain correct version control, the project was committed to the GitHub repository at regular intervals, or when a component had been completed.
It was sometimes necessary to work on examples for some components such as the Google Places autocomplete separately in order to understand how they worked. 
Once I learned more about each component I would work on integrating it with my web application and layout, and work on the modifications I required as part of the full web application.

There are no differences between the deployed and development versions, any components that were implemented in the development stage were then uploaded to GitHub for the final deployment.

### Content
The following articles and tutorials were used to learn about the different functions I required for my web application, and to gain examples that I could work on and 
make modifications to in order to create the Holiday search page with links to the Google Maps and Google Places API's

- Google Places API Part 1-4: Coffee Shop Locator App 
    -  [Part 1](https://www.youtube.com/watch?v=eLGtNm4dSxc&index=1&list=PLAgylfU8wrtt5vU1l-ctUrPS_eF5Xow5F)
    -  [Part 2](https://www.youtube.com/watch?v=k1_sUMw8kwg&index=2&list=PLAgylfU8wrtt5vU1l-ctUrPS_eF5Xow5F)
    -  [Part 3](https://www.youtube.com/watch?v=zVU_MQyKFGg&index=3&list=PLAgylfU8wrtt5vU1l-ctUrPS_eF5Xow5F)
    -  [Part 4](https://www.youtube.com/watch?v=-Em4K7ahL28&index=4&list=PLAgylfU8wrtt5vU1l-ctUrPS_eF5Xow5F)
- [W3 Schools Google Maps Events](https://www.w3schools.com/graphics/google_maps_events.asp)
- [Getting Started with the Google Maps JavaScript API – Part III: Adding an Event Listener](https://blog.kevinchisholm.com/javascript/getting-started-with-the-google-maps-javascript-api-part-iii-adding-an-event-listener/)
- [Google Maps - Markers (Tutorialspoint)](https://www.tutorialspoint.com/google_maps/google_maps_markers.htm)
- [Google Maps - Events (Tutorialspoint)](https://www.tutorialspoint.com/google_maps/google_maps_events.htm)
- [Markers, InfoWindow, EventListener in Google Maps API (v3)](https://www.youtube.com/watch?v=BFJsXl6Iuw8)
- [Bounds, Multiple Markers in Google Maps API (v3)](https://www.youtube.com/watch?v=yANtE1b8cLc)
- [Google Maps Markers](https://developers.google.com/maps/documentation/javascript/examples/marker-simple)
- Google Places API Autocomplete
    -  [Autocomplete address forms](https://developers.google.com/maps/documentation/javascript/places-autocomplete#address_forms)
    -  [Places searchbox example](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox)
    -  [Places autocomplete example](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete)
    -  [Places autocomplete hotel search example](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)
    -  [W3 Docs - Places Autocomplete](https://www.w3docs.com/learn-javascript/places-autocomplete.html)
    -  [Google Places Guide - Places autocomplete](https://developers.google.com/places/web-service/autocomplete)
    -  [Google Places - Autocomplete requests example](https://developers.google.com/places/web-service/autocomplete#example_autocomplete_requests)
    -  [Google Places - Supported types](https://developers.google.com/places/supported_types)
- [Tutorial: Autocomplete Cities Using the Google Places API](https://www.youtube.com/watch?v=Rpzp0yCAmq4)
- [Maps Live: Place Autocomplete in the Google Maps JavaScript API](https://www.youtube.com/watch?v=lSdM3yZkj1w&t=262s)
- [Show and Hide div elements](https://www.w3schools.com/css/tryit.asp?filename=trycss_display)
- Unicode Characters
    - [W3.org - HTML Encoding Declarations](https://www.w3.org/International/questions/qa-html-encoding-declarations)
    - [W3.org - What is encoding](https://www.w3.org/International/questions/qa-what-is-encoding)
    - [Compart - Unicode Characters](https://www.compart.com/en/unicode/search?q=star#characters)

### Media
The pictures used in this site were obtained from the following sources:
- [City-skyline picture](https://www.flickr.com/photos/romainpontida/43511551295)

### Acknowledgements

- I would like to thank my Mentor Rick Gallegos, and also my family for their input, advice and support throughout the project.
- I would also like to thank all mentors in the Code Institute for their help on and support on queries I had in implementing this project.
