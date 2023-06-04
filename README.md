<h1>Twitter Card Interactivity</h1>
This project implements tweet cards with interactivity, allowing users to follow and unfollow other users. The application utilizes React Router for routing and a personal backend created using the mockapi.io UI service. Additionally, it includes features such as pagination, filtering, and a responsive design.

<h2>Screenshots Follow State Follow State</h2>

Following State Following State

Technical Task The goal of this project is to create tweet cards with
interactive follow functionality. The card has two states: Follow and Following.

When the user clicks on the Follow button, the text changes to Following, the
button color changes, and the number of followers increases by 1. When the page
is refreshed, the button remains in the Following state, with the appropriate
color, and the number of followers does not reset to the initial value. Clicking
the button again reverts it to its original state, changing the text and color
back to Follow, and decreasing the number of followers by 1. The user's actions
should be recorded, and the final result should persist even after refreshing
the page.

User Object The application uses a personal backend created with mockapi.io UI
service. The user object includes the following fields:

id: Unique identifier for the user. user: Username of the user. tweets: Array of
tweets associated with the user. followers: Number of followers for the user.
avatar: URL of the user's avatar image. There are 14 users in the database, each
with different values for the fields. Pagination is implemented, where each page
displays at least 3 tweets, and the remaining tweets are loaded when the "Load
More" button is clicked.

Additional Features React Router is used for routing within the application. The
application has the following routes: '/' - Home component, the main page.
Styling and design are at your discretion. '/tweets' - Tweets component, a page
displaying tweets. The Tweets page includes a Back button that leads back to the
main page. Filtering is available with a dropdown menu offering three options:
show all, follow, and followings. The design of the dropdown is customizable.
show all - displays all tweets. follow - displays tweets with the follow status.
followings - displays tweets with the following status. Getting Started To run
the application locally, follow these steps:

Clone the repository: git clone <repository-url> Install the dependencies: npm
install Start the development server: npm start Open the application in your
browser at http://localhost:3000 Feel free to explore and modify the code to
meet your requirements and desired design.

Enjoy using the Twitter Card Interactivity application!
