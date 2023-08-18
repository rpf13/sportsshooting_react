# SportsShooting

SportsShooting is a site, which should support Sportsshooters and their related clubs, to create match events or gather information about matches. The main target audience are licensed IPSC (International Practical Shooting Confederation) shooters. [IPSC](https://www.ipsc.org/) is a worldwide organized confederation of practical shooters.

It should build a plattform, where the registered user can gain more information about a particular match. He has the option to "attend" a match by clicking the related button, which will make it possible for other user, to see who is attending.

![SportsShooting Mockup](docs/images/techsini_mockup.png)

We as IPSC Shooters often attend matches and therefore travelling is essential. This app should help to find other IPSC shooters, who attend the same match and therefore can travel together. IPSC Matches are all classified within "Levels", which have a distinct meaning:

- Level 1: Club matches, Trainings
- Level 2: Matches open to participants from different clubs
- Level 3: Regional matches, i.e. national championships or other large matches
- Level 4: Continental championships, i.e. the European or Pan-American Championship
- Level 5: The World Shoots

For this reason, the plattform provides predefined "Level" filters in order to navigate quicker.

A registered user will also have the possibility to comment on match listings and therefore get in contact with fellow colleagues.

If one is attending lots of matches, it can become difficult to track them, therefore the app shows all upcoming events, where a user has registered for. A dedicated Upcoming Popular Matches component is visibile on many occasions, displaying the most popular matches. It should support the shooter to attend them too.

The plattform also gives the IPSC Shooter the option to create his own and private gun collection site. There he can inventorise his collection.

Link to deployed SportsShooting site: [SportsShooting](https://sportsshooting-rpf13-d2b23798b278.herokuapp.com/)

Link to the deployed backend Django API: [SportsShooting API](https://sportsshooting-drf-rpf13-5060e23f8756.herokuapp.com/)

Link to the backend Django API repository: [SportsShooting API Repo](https://github.com/rpf13/sportsshooting_drf)

---

## User Stories
### Nav & Auth

- Navigation - View Navbar: As a user I can view a navbar from every page so that I can navigate easily between pages: [Link](https://github.com/rpf13/sportsshooting_react/issues/1#issue-1818297489)
- Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users: [Link](https://github.com/rpf13/sportsshooting_react/issues/2)
- Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users: [Link](https://github.com/rpf13/sportsshooting_react/issues/3)
- Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to: [Link](https://github.com/rpf13/sportsshooting_react/issues/4)
- Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised: [Link](https://github.com/rpf13/sportsshooting_react/issues/5)
- Navigation: Conditional rendering: As a logged out user I can see sign in and sign up options so that I can sign in/sign up: [Link](https://github.com/rpf13/sportsshooting_react/issues/6)
- Navigation - Avatar: As a user I can view user's avatars so that I can easily identify users of the application: [Link](https://github.com/rpf13/sportsshooting_react/issues/7)

### Matches Add & Attend

- Matches - Create a match: As a logged in user I can create matches so that I can share the event to fellow shooters: [Link](https://github.com/rpf13/sportsshooting_react/issues/8)
- Matches - View a match: As a user I can view the details of a single match so that I can learn more about it: [Link](https://github.com/rpf13/sportsshooting_react/issues/9)
- Matches - Attend a match: As a logged in user I can attend a match via clicking the related button so that I can show that I am attending: [Link](https://github.com/rpf13/sportsshooting_react/issues/10)
- Matches - Remove Attend a match: As a logged in user I can remove the attend a match via clicking the related button so that I can remove my participation info.: [Link](https://github.com/rpf13/sportsshooting_react/issues/11)
- Matches - View most recent matches: As a user I can view all the most recent matches, ordered by most recently created first so that I am up to date with the newest content: [Link](https://github.com/rpf13/sportsshooting_react/issues/12)
- Matches - Search functionality: As a user, I can search for matches with keywords, so that I can find the matches I am most interested in.: [Link](https://github.com/rpf13/sportsshooting_react/issues/13)
- Matches - Filter functionality: As a user, I can Filter for matches based on the IPSC Levels, so that I can find the matches I am most interested in.: [Link](https://github.com/rpf13/sportsshooting_react/issues/14)
- Matches - Infinite scroll: As a user I can keep scrolling through the matches on the site, that are loaded for me automatically so that I don't have to click on "next page" etc: [Link](https://github.com/rpf13/sportsshooting_react/issues/15)
- Matches - Popular Matches: As a user I can see a widget of the most popular matches so that I can have a impression of the most wanted matches and decide whether I also want to attend or not [Link](https://github.com/rpf13/sportsshooting_react/issues/29)

### Match Detail

- MatchDetail - View Details: As a user I can view the individual match page so that I can read the details comments about the match: [Link](https://github.com/rpf13/sportsshooting_react/issues/16)
- MatchDetail - Edit Match: As a match event owner I can edit my event title and description so that I can make corrections or update my event after it was created: [Link](https://github.com/rpf13/sportsshooting_react/issues/17)
- MatchDetail - Delete Match: As a match event owner I can delete my match event so that all details and comments are deleted: [Link](https://github.com/rpf13/sportsshooting_react/issues/18)
- MatchDetail - Create a comment: As a logged in user I can add match comments to a event so that I can share my thoughts about the event: [Link](https://github.com/rpf13/sportsshooting_react/issues/19)
- MatchDetail - Comment date: As a user I can see how long ago a comment was made so that I know how old a comment is: [Link](https://github.com/rpf13/sportsshooting_react/issues/20)
- MatchDetail - View comments: As a user I can read comments on match events so that I can read what other users think about the match: [Link](https://github.com/rpf13/sportsshooting_react/issues/21)
- MatchDetail - Edit a comment: As an owner of a comment I can edit my comment so that I can fix or update my existing comment: [Link](https://github.com/rpf13/sportsshooting_react/issues/22)
- MatchDetail - Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment: [Link](https://github.com/rpf13/sportsshooting_react/issues/23)
- MatchDetail - Attending Shooters: As a user I can see which users are attending a match so that I can get useful information: [Link](https://github.com/rpf13/sportsshooting_react/issues/24)


### Profile

- Profile - Profile page: As a user I can view other users profiles so that I can see their posted match events and learn more about them: [Link](https://github.com/rpf13/sportsshooting_react/issues/25)
- Profile - Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and infos: [Link](https://github.com/rpf13/sportsshooting_react/issues/26)
- Profile - Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure: [Link](https://github.com/rpf13/sportsshooting_react/issues/27)

### MySchedule

- MySchedule - List matches: As a logged in user I can view a list of all matches I am attending, so that I can have a simple view and scheduling option: [Link](https://github.com/rpf13/sportsshooting_react/issues/28)
- MySchedule - Search functionality: As a logged in user, I can search within the list of myschedule with keywords, so that I can find the match I am looking for: [Link](https://github.com/rpf13/sportsshooting_react/issues/30)

### MyGuns

- MyGuns - Create an entry: As a logged in user I can create an entry in my gun database so that I can create my collection of guns: [Link](https://github.com/rpf13/sportsshooting_react/issues/31)
- MyGuns - List entries: As a logged in user I can list all entries in my gun database so that I can have an overview about my gun collection: [Link](https://github.com/rpf13/sportsshooting_react/issues/32)
- MyGuns - Edit an entry: As a logged in user / owner of an entry I can edit an entry so that I can fix or update my existing item: [Link](https://github.com/rpf13/sportsshooting_react/issues/33)
- MyGuns - Delete an entry: As a logged in user / owner of an entry I can delete an item so that I can remove it from my gun database: [Link](https://github.com/rpf13/sportsshooting_react/issues/34)
- MyGuns - Search functionality: As a logged in user, I can search for guns with keywords, so that I can find the gun I am looking for: [Link](https://github.com/rpf13/sportsshooting_react/issues/35)
- MyGuns - Filter functionality: As logged in user, I can Filter my gun database based on type “rifle” or “handgun”, so that I can find the item in the related category: [Link](https://github.com/rpf13/sportsshooting_react/issues/36)

### Testing & Documentation & Deployment

- Testing - Execute Testing: As a developer I can execute all necessary tests so I can make sure my application is working fine and I can fulfil the requirements given for this project: [Link](https://github.com/rpf13/sportsshooting_react/issues/37)
- Documentation - Create README: As a developer I can write the README documentation based on the guideline so another coder can understand how the project was built: [Link](https://github.com/rpf13/sportsshooting_react/issues/38)
- Deployment - Execute Deployment: As a developer I can execute the final deployment on Heroku so I can submit my PP5 project to CI: [Link](https://github.com/rpf13/sportsshooting_react/issues/39)

### Stretch User Stories - Not implemented

#### Shooters - Messages

- Shooters - List all Shooters: As a logged in user I can see a list of all registered shooters so I can learn more about who is who: [Link](https://github.com/rpf13/sportsshooting_react/issues/40)
- Shooters - Search functionality: As a user I can search among all registered shooters, so I can quickly find the user I want: [Link](https://github.com/rpf13/sportsshooting_react/issues/41)
- Shooters Message - Create a message: As a logged in user I can create a message sent to another user, so I can communicate privately: [Link](https://github.com/rpf13/sportsshooting_react/issues/42)
- Shooters Message - Receive a message: As a logged in user I can receive a message sent to me, so I can read and reply to it. -> CouldHave: [Link](https://github.com/rpf13/sportsshooting_react/issues/43)

---

## UX & Design

The overalll goal of the application was to achieve the desired functionality with a minimalistic and clear design. Colours should only be used to give an accent to something or display a certain funciont, like the buttons or the navbar active elements.
Overall, the application is mobile friendly, the use of mobile devices has always been part of the design decision process.

### Color Scheme

[Coolors.co](https://coolors.co/) hase been used to create the color palette. There is two sets of color schemes used in the application, where as they have many similarities. The main application uses a mixture of white / grey colors, paired with red to give some accents. The main background is `#f5f5f5`, which is a light grey color. It should give a simple accent over the pure white `#ffffff` navbar and component background.
Since also the individual match and gun collection items use the pure white as background, scrolling over the elements gives a nice "floating" effect.

![Main Colors](docs/images/coolors%20app.png)

The navbar but mostly the buttons are using a mixture of red colors paired with either black or sort of grey. Two sorts of red are used, either the standard red `#ff0000` or the `#fff1f1`. Either the background or the font color is using one of them, also the hover effect is done with red. The background of the buttons is otherwise mostly the grey'ish `#cfced3` paired with red or black font color.

![Button Colors](docs/images/coolors_button_search.png)

I am aware of the fact that this combination does partially not fullfil the contrast check. However, it is almost impossible to pair red with any other light color and pass a contrast check. Since the whole color scheme is around the SportsShooting Logo, which contains a red centered target, I wanted to use it throughout the site. However, I am pretty confident that due to the fact that the contrast issue is only on a few button and hover effect occation, it would also be very well usable for visual impaired users.

---

### Typography

[Google Fonts](https://fonts.google.com) has been used to create the fonts. The logo uses the quite special `Milonga` font, which gives a nice touch to the image of the logo.
The rest of the document uses `Roboto` with a alternative font of `sans-serif`.

![Milonga Font](docs/images/font_milonga.png) ![Roboto](docs/images/font_roboto.png)

---

### Wireframes

The Wireframes are the prototype of this project and show the base idea and the skeleton of the app. They have been slightly adjusted during the development of the project but they main concept and design idea never changed. I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

<details>
<summary>Wireframe</summary>
  
![Main Site](docs/wireframes/desktop/d_main.png)
![Match Detail](docs/wireframes/desktop/d_match_detail.png)
![MySchedule](docs/wireframes/desktop/d_myschedule.png)
![MyGuns](docs/wireframes/desktop/d_myguns.png)
![Profile](docs/wireframes/desktop/d_profile.png)

</details>

---

## Data Model

This application, built with [React](https://react.dev/) has not data model by itself, since it consumes API's from the back end. The whole code and documentation of the the data model can be found in the coresponding DRF API repository: [SportsShooting API Repo](https://github.com/rpf13/sportsshooting_drf)

---

## Features

This section will explain each feature of the application

### Navigation (Navbar)

The navbar is the heart of the whole application. It welcomes the user with a very clear and distinct design. The usage should be pretty clear by looking at it.

![Navbar unauthenticated](docs/images/feat_nav_unauth.png)

As a (new) user entering the page, it will be in unauthenticated state. The navbar displays the distinct logo, which is an active link where as clicking on it, will bring the user always back to the home url. furthermore, the user can see three icons
- Matches
- SignIn
- SignUp

The matches icon appears red because it is active, it is the home url. This should give the user already hint about the functionality.
Hovering over the SignIn or SignUp icons will change their color, indicating that the user can click on it. Once clocked, the icon remains acive and hence turns color to red.

![Navbar authenticated](docs/images/feat_nav_auth.png)

If a user is authenticated, the navbar looks slightly different but keeping the previously mentioned concept of functionality and design.
The following additional icons will show up:
- Add Match -> redirects to the form to create a new match entry
- Add Gun -> redirects to the form to create a new gun database entry
- MySchedule -> displays the user's personal match schedule
- MyGuns -> redirects to the "private" gun database
- SignOut
- Avatar with the currently logged in username next to it

### SignUp | SignIn

A user who wants to interract on the site and not just watch some content, needs to create a profile and therefore sign up. The SignUp icon on the navbar will bring him to the form, where he has to add minimal data. The form uses auto validation of the fields, meaning for example a too short password will display an error.

The image on the signup site shows some bullets, once in upward position. It should illustrate the purpose of this form, to "sign up".
If someone has clicked on the sing up by accident but already has an account, there is a cross link to the sign in form.

![SignUp](docs/images/feat_signup.png)

The sign in form welcomes the user with the sentence "Are you ready". This is taken from the IPSC rules, which we follow as part of our sport. It is basically one of the commands the shooter gets told, before he can start his run on a particular stage.
The image should illustrate the ready condition as well, the bullet comes from the magazine and gets loaded into the barrel.

![SignIn](docs/images/feat_signin.png)

Once the user is signed in, the sign out icon is always visible in the navbar.

### Matches | Main Site

The matches site is the main and home view of the application. It consists of different reusable components, which will show up independently on other sites.

![Matches](docs/images/feat_matches_main.png)

The following elemets are part of the matches main site:
- search bar
- match level selection field
- main match component
- upcoming popular matches component

All of theses elements are available to all users, independet of their sign in status.
The matches list is sorted showing the last added match first. This will help users to see the latest additions quite easily, without searching a lot. Furthermore, the list will also contain matches from the past, since this part of the application should also act as kind of archive.

There is an infinite scroll of matches in place, while loading from the back end, a loading spinner will be dispalyed to the user.

#### Matches search & Level filter

The search bar on top of the matches site give the user the ability to search after the most common keywords like *title, location, advertiser*

![Matches search](docs/images/feat_matches_search.png)

There is also a pre defined *Level Filter* in place. As explained in the introduction section of this application, in IPSC shooting, all matches are categorised into levels, each of them having a clear meaning.

![Matches filter](docs/images/feat_matches_filter.png)

The two features can be combined to further filter down possible matches. This is exactly what a shooter who is looking after matches, wants. Search and Level filter will give this option:

![Search & Level Filter](docs/images/feat_matches_filter_search.png)

#### Matches attend & comments

Besides match detail information, each match is also displaying the two active elements of *attending* with its *attendings count* as well as the *comment* and *comments count*

![Matches active components](docs/images/feat_matches_attending_comment.png)

If a user is logged in, he can click the attend icon to add himself to the list of attending shooters. If so, the icon will be transform to red and keep this color until the logged in user clicks again on it to unattend.
It is **important** to note, that also the user who added the match can attend *his own* match. This is a must have feature. The count displays how many shooters are attending.
Furthermore, he can click on the comments icon, which brings him to the match detail site, where he can see and add a comment. The count displays how many comments have been written.

If a user is not logged in, he can see both components, however, he will not be able to attend a match. While trying to attend, a message will be displayed that only logged in users can use this feature.

![Matches active components unauth](docs/images/feat_matches_attending_comment_unauth.png)

Clicking on the comments field will also bring this user to the match detail site, where he can read the comments *but is unable* to add a comment.

#### Upcoming popular Matches Component

The Upcoming popular Matches component is a dedicated separated component, visible on the matches site. It contains a list of the most popular matches, measured on how many shooters are attending. To keep the list kind of visible, it is limited to 6 entries on desktop and 4 entries on mobile.

![Upcoming Popular Matches](docs/images/feat_pop_matches.png)

The list only contains matches hapening in the future, popular matches from past are filtered out. Furthermore it is sorted by the most recent match being first in the list. If the user is hovering over the events, the will change the color to red, to show it is an active link. With this, the navigation is inline with the rest of the site.
Clicking on such a link will bring the user to the match detail page.

### Match Detail

Once the user clicks on an individual match in the matches list, or he clicks on one of the listed matches in the *Upcoming Popular Matches* component, he will be presented with the details of the particular match, which contains a variety of additional information but still keep the design minimalistic.

![Match Detail](docs/images/feat_match_detail.png)

On the top, the avatar and username of the *advertiser*, the one who added the match, is displayed. There is an active link behind, if clicked, the user profile will be displayed. Furthermore the date when the event was last updated is shown, next to the edit icon.

Besides the displayed image, the main title of the match, together with the event date is shown. Further infos like the match location, IPSC Level, Division and match details are shown.
Underneath that, the two active components *attending* with its *attendings count* as well as the *comment* and *comments count* are displyed. Their usage has already been explained in the matches section.

#### Comments

The comments section lets the users see all comments, the logged in user will also see the form to add a comment. The avatar is again an active link to the user's profile.

![Comment add](docs/images/feat_comment_add.png)

The user has also the option to edit or delete his comment. All comments of the logged in user will display the edit icon, which will give the option to edit or delete.

![Comment edit](docs/images/feat_comment_edit.png)

The comments section is also using the infinite scroll, displaying a loading spinner once more data is fetched from the API.

#### Participating Shooters

The Participating Shooters component, is a reusable component, which got added here.

![Participating Shooters Desktop](docs/images/feat_attending_desktop.png)

This component displays all shooters who have clicked *attend*. It should give the user or a possible organisator / advertiser of a match, an overview on how many will attend and who. It is also interesting for fellow shooters, since some have preferences.
The list can be extensively long, therefore I have implemented a limit in size. On desktop the component is allowed to grow max. to 400px in height, on mobile it is limited to only 90px height, which is just engough to display two rows of avatars. The rest of the content, if exceeding the limit, will be hidden and accessible via the scrollbar.

![Participating Shooters Mobile](docs/images/feat_attending_mobile_scroll.png)

If the user clicks on an avatar, he will be redirected to the respective user profile component.

---

### Features left to implement


### Future Features

- smart logic to automatically delete historical events after 1 year


### Future improvements

---

## Re-useable components and helpers

---

## Frameworks, Libraries & Dependencies

---

## Development

The following chapters describe why and how I have choosen to code certain parts the way they are. This section should give an explanation to my thinking process and explain the reader some conceptual decisions.

### Commit messages

I have decided to mostly use multiline commit messages. Commit messages are an essential part of the whole project and a single line commit message is just not enough to explain. After reading [this interesting article](https://cbea.ms/git-commit/), it was clear to me, that I have to use it.

I have decided to use (mostly) multiline commits, but using tags as described this [cheatsheet](https://cheatography.com/albelop/cheat-sheets/conventional-commits/) or as also described in the LMS of the Code Institute. I did use the following syntax guidline:
- **feat:** for feature which may or may not include a CSS part
- **fix:** for a bugfix
- **style:** for changes to CSS or to give style to the code itself
- **docs:** for changes related to documentation
- **refactor:** for refactored code, re-written code
- **maint:** for general maintenance

---

## Agile Development Process

### Github Projects
[Github Projects](https://github.com/users/rpf13/projects/7) has been used as the Agile tool during the development phase of this project. The Kanban board was very useful to keep track on the tasks. I have created 4 columns (ToDo, In Progress, On Hold, Done) and moved the stories accordingly. 
The On Hold column has served as a "parking spaces", when a story was partially done, but not completely finished.

`ADD IMAGE TO KANBAN BOARD`

### GitHub Issues
[Github Issues](https://github.com/rpf13/sportsshooting_react/issues) has been used to create all the stories, before they were placed on the projects Kanban board. I have created an issues templates to simplify creation.
Each issue has a label for the MoSCoW prioritization.

Once a story has been created via the template, it will be automatically added to the Kanban board in the Todo column.

`ADD IMAGE TO GITHUB ISSUES`

### MoSCoW Prioritization

The MoSCoW prioritization has been used to divide all epics and stories into the following categories:

- MustHave: guaranteed to be delivered
- ShouldHave: adds significant value, but not mandatory for MVP
- CouldHave: adds value, would be nice to have
- WontHave: no priority for this iteration, acts as placeholder for future implementation

A related Github label has been created for each category and added to each epic, story - which makes it easy to identify and see the value it brings.

---

## Testing

Testing is covered in a separate page, view [TESTING.md](TESTING.md)

---

## Deployment

The live deployed application can be found deployed on [Heroku](https://sportsshooting-rpf13-d2b23798b278.herokuapp.com/).
Since the application is bound ot the Django REST API [SportsShooting API](https://sportsshooting-drf-rpf13-5060e23f8756.herokuapp.com/), there is not direct database, media storage like cloudinary, ... needed. Everything gets consumbed via the API.

### Heroku Deployment

This project uses [Heroku](https://www.heroku.com), a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

Deployment steps are as follows, after account setup:

- Select **New** in the top-right corner of your Heroku Dashboard, and select **Create new app** from the dropdown menu.
- Your app name must be unique, and then choose a region closest to you (EU or USA), and finally, select **Create App**.
- No environment variables are required

Heroku needs two additional files in order to deploy properly.
- package.json file
- Procfile

The **package.json** file gets automatically built, when you install a package via the `npm install` command

The **Procfile** must contain the following command:
- `web: serve -s build`

For Heroku deployment, follow these steps to connect your own GitHub repository to the newly created app:

Either:
- Select **Automatic Deployment** from the Heroku app.

Or:
- In the Terminal/CLI, connect to Heroku using this command: `heroku login -i`
- Set the remote for Heroku: `heroku git:remote -a app_name` (replace *app_name* with your app name)
- After performing the standard Git `add`, `commit`, and `push` to GitHub, you can now type:
	- `git push heroku main`

The project should now be connected and deployed to Heroku!

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system. Depending on your local setup, npm needs to be installed. Do also make sure, that all required packages as mentioned in the `package.json` file are installed on your local machine.

Depending on the node version you are using on the local environment, a workaround is needed to start the server via the `npm start` command.

Before starting the server, the follwing command has to be entered, which tells nvm - the node version manager - the version he has to use.

`nvm install 16 && nvm use 16`

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/rpf13/sportsshooting_react) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/rpf13/sportsshooting_react`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/rpf13/sportsshooting_react)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/rpf13/sportsshooting_react)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

---

## Credits

### Code

I have done lots of research, especially on the Django side, to create this project. The following list will show some of the resources I have used.

| Source | Location | Notes |
| --- | --- | --- |
| [Code Institute Tutorials](https://codeinstitute.net/global/) | whole application | The code institute Moments Walkthrough tutorial was extremely helpful |
| [Very Academy React Project](https://youtu.be/CkQrroDkA98) | whole application | I've watched a lot of the content from Very Academy |
|  |  |  | 
|  |  |  | 
|  |  |  | 
|  |  |  | 
|  |  |  |

### Code for jest testing

### Code for Unit Testing

I have used the following resources and articles for creating my Unit Testing for the collection app.

| Source | Location | Notes |
| --- | --- | --- |
|  |  |  | 
|  |  |  | 
|  |  |  |


### Content

### Media

I have used the following explicit media files in the project

| Source | Location | Notes |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |


---

### Acknowledgements

- Without the support of my wife and my little son, it would not have been possible to spend endless hours, working on this project and doing research. Many thanks to my little son for giving me a smile and very welcomed distraction, during times I was frustrated.
- My Mentor Aleksei Knovalov was a big support for this project. He helped me to understand certain concepts and gave me very welcomed guidance. THANK YOU VERY MUCH! You are such a great perons and very skilled developer!
- A big Thank you to the tutor team from Code Institute team, who has helped me with a few very nasty issues in the project
- A big thank you also goes to the awesome Code Institute Slack community, who was always very supportive!

---