<h1>Twitter Card Interactivity</h1>
This project implements tweet cards with interactivity, allowing users to follow and unfollow other users. The application utilizes React Router for routing and a personal backend created using the mockapi.io UI service. Additionally, it includes features such as pagination, filtering, and a responsive design.

<h2>Screenshots </h2>

<h3>Follow State </h3>
<img src=/flw.png>

<h3>Following State </h3>
<img src=/flwg.png>
<br /><br />

<h2>Technical Task</h2> The goal of this project is to create tweet cards with
interactive follow functionality. The card has two states: Follow and Following.
<ul>
<li>
When the user clicks on the Follow button, the text changes to Following, the
button color changes, and the number of followers increases by 1.
 When the page
 </li><li>
is refreshed, the button remains in the Following state, with the appropriate
color, and the number of followers does not reset to the initial value.
 Clicking</li><li>
the button again reverts it to its original state, changing the text and color
back to Follow, and decreasing the number of followers by 1. The user's actions
should be recorded, and the final result should persist even after refreshing
the page.</li>
</ul>
<br /><br />
<h3>User Object</h3> The application uses a personal backend created with mockapi.io UI
service. The user object includes the following fields:
<br /><br />
<ul><li>
id: Unique identifier for the user.</li><li> user: Username of the user.
</li><li> tweets: Array of
tweets associated with the user.</li><li> followers: Number of followers for the user.</li><li>
avatar: URL of the user's avatar image.
</li></ul>
 There are 14 users in the database, each
with different values for the fields. Pagination is implemented, where each page
displays at least 3 tweets, and the remaining tweets are loaded when the "Load
More" button is clicked.

<h3>Additional Features</h3> 
<ul><li>React Router is used for routing within the application.
<ul><li> The
application has the following routes: 
'/' - Home component, the main page.
</li><li>
Styling and design are at your discretion.
 '/tweets' - Tweets component, a page
displaying tweets. The Tweets page includes a Back button that leads back to the
main page.
</li></ul>
</li><li>
Filtering is available with a dropdown menu offering three options: show all,
follow, and followings. The design of the dropdown is customizable.
<ul><li>
show all - displays all tweets.
</li><li>
 follow - displays tweets with the follow status.
 </li><li>
followings - displays tweets with the following status.
</li></ul>
</li></ul>

<h3> Getting Started</h3> To run
the application locally, follow these steps:
<br />
<ol><li>
Clone the repository: git clone https://github.com/OlegSyrovatko/go-it-tech-part </li><li>
 Install the dependencies: npm
install </li><li>Start the development server: npm start </li><li>Open the application in your
browser at http://localhost:3000 </li><li>Feel free to explore and modify the code to
meet your requirements and desired design.</li></ol>

<h2> Enjoy using the Twitter Card Interactivity application!</h2>
