# Testing

Return back to the [README.md](README.md) file.

---

## Automated Testing

I have conducted a series of automated tests on my application.

I have tested the `DeleteModal`, the `NavBar` and the `NotFound` component via jest unit test.

- [DeleteModal Unit Test](src/components/__tests__/DeleteModal.test.js)
- [NavBar Unit Test](src/components/__tests__/NavBar.test.js)
- [NotFound](src/components/__tests__/NotFound.test.js)

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive. However, I wanted to include a few example tests to showcase the use of jest in a React app. It turned out to be quite difficult, if more complex components containing lots of states, are tested.

### JEST Unit Testing

I have used [jest](https://jestjs.io) for the java script unit testing. In order to run the tests, I ran the following command in the terminal each time:

`npm test`

All testcases have been successfully executed and passed:

![jest testresults](docs/testing/jest_testcases.png)

The following table shows a summary of testcases executed. The the `DeleteModal`, the `NavBar` and the `NotFound` component got tested via the automated unit testing.

| Class | Function | Description | Comment |
| --- | --- | --- | --- |
| DeleteModal.js |  |  |  |
|  | renders DeleteModal with correct content | The modal displays the title "Confirm Deletion", show a text "Are you sure you want to delete this item?" and have two buttons: "Cancel" and "Delete" |  |
|  | calls the handleClose function when Cancel button is clicked | the mock function `handleClose` is called | `jest.fn()` mock function is created for the `handleClose` |
|  | calls the handleConfirm function when Delete button is clicked | the mock function `handleConfirm` is called | mock setup initially done |
| NavBar.js |  |  |  |
|  | renders NavBar | link with the name "SignIn" is present in the document |  |
|  | renders link to the user profile for a logged in user | the profile avatar is in the document together with a link named "apple" pointing to /profiles/1 | "apple" is the testuser |
|  | renders sign in and sign up buttons again on log out and check all available links | the "SignIn & SignUp" link is present in the document. "Add match & Add gun" is **not** present|  |
|  | renders logged-in navigation items when user is authenticated | links for authenticated user "Add match & Add gun & MySchedule & MyGuns & signOut" are all present |  |
| NotFound.js |  |  |  |
|  | renders NotFound component with correct message | image in form of "img" is present with error message "Sorry, the page you're looking for doesn't exist"  |  |

---

## Manual Testing

### User Story Testing

I have tested the functional user stories and listed in the following table, together with a screenshot. Since I did also add user stories for admin tasks like documentation, app submission, I did not include them in the table - since snapshots are difficult for those. However, they are also clearly documented in the README section.
In the user stories, I did use the expression "As a Developer..." but this can be interchangeably used with "As a User..."
User Story testing has been executed with Chrome browser on OSX.

<details>
<summary>User story testing Table with Snapshots</summary>

| Section | User Story | Screenshot | Comment |
| --- | --- | --- | --- |
| Nav & Auth |  |  |  |
|  | View Navbar: As a user I can view a navbar from every page so that I can navigate easily between pages: [Link](https://github.com/rpf13/sportsshooting_react/issues/1#issue-1818297489) | ![Screenshot](docs/testing/us_01_view_navbar.png) | navbar is shown throughout testing |
|  | Sign up: As a user I can create a new account so that I can access all the features for signed up users: [Link](https://github.com/rpf13/sportsshooting_react/issues/2) | ![Screenshot](docs/testing/us_01_signup.png) | no issues found |
|  | Sign in: As a user I can sign in to the app so that I can access functionality for logged in users: [Link](https://github.com/rpf13/sportsshooting_react/issues/3) | ![Screenshot](docs/testing/us_01_signin.png) | no issues found |
|  | Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to: [Link](https://github.com/rpf13/sportsshooting_react/issues/4) | ![Screenshot](docs/testing/us_01_logged_in_status.png) | no issues found |
|  | Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised: [Link](https://github.com/rpf13/sportsshooting_react/issues/5) | ![Screenshot](docs/testing/us_01_access_token.png) | no issues found |
|  | Conditional rendering: As a logged out user I can see sign in and sign up options so that I can sign in/sign up: [Link](https://github.com/rpf13/sportsshooting_react/issues/6) | ![Screenshot](docs/testing/us_01_cond_render_signed_in.png) & ![Screenshot](docs/testing/us_01_cond_render_signed_out.png) | no issues found |
|  | Avatar: As a user I can view user's avatars so that I can easily identify users of the application: [Link](https://github.com/rpf13/sportsshooting_react/issues/7) | ![Screenshot](docs/testing/us_01_avatar.png) | no issues found |
| Matches Add & Attend |  |  |  |
|  | Create a match: As a logged in user I can create matches so that I can share the event to fellow shooters: [Link](https://github.com/rpf13/sportsshooting_react/issues/8) | ![Screenshot](docs/testing/us_02_match_create.png) | no issues found |
|  | View a match: As a user I can view the details of a single match so that I can learn more about it: [Link](https://github.com/rpf13/sportsshooting_react/issues/9) | ![Screenshot](docs/testing/us_02_match_details.png) | no issues found |
|  | Attend a match: As a logged in user I can attend a match via clicking the related button so that I can show that I am attending: [Link](https://github.com/rpf13/sportsshooting_react/issues/10) | ![Screenshot](docs/testing/us_02_match_attend_foreign.png) & ![Screenshot](docs/testing/us_02_match_attend_own.png) | note that user must be able to attend a match he has advertised! |
|  | Remove Attend a match: As a logged in user I can remove the attend a match via clicking the related button so that I can remove my participation info.: [Link](https://github.com/rpf13/sportsshooting_react/issues/11) | ![Screenshot](docs/testing/us_02_match_attend_remove.png) | no issues found |
|  | View most recent matches: As a user I can view all the most recent matches, ordered by most recently created first so that I am up to date with the newest content: [Link](https://github.com/rpf13/sportsshooting_react/issues/12) | ![Screenshot](docs/testing/us_02_matches_most_recent.png) | no issues found |
|  | Search functionality: As a user, I can search for matches with keywords, so that I can find the matches I am most interested in.: [Link](https://github.com/rpf13/sportsshooting_react/issues/13) | ![Screenshot](docs/testing/us_02_matches_search.png) | no issues found |
|  | Filter functionality: As a user, I can Filter for matches based on the IPSC Levels, so that I can find the matches I am most interested in.: [Link](https://github.com/rpf13/sportsshooting_react/issues/14) | ![Screenshot](docs/testing/us_02_matches_filter.png) | no issues found |
|  | Infinite scroll: As a user I can keep scrolling through the matches on the site, that are loaded for me automatically so that I don't have to click on "next page" etc: [Link](https://github.com/rpf13/sportsshooting_react/issues/15) | ![Screenshot](docs/testing/us_02_matches_infinite_scroll_start.png) & ![Screenshot](docs/testing/us_02_machtes_infinite_scroll_end.png) | I cannot create a snapshot showing the loading spinner. Therefore take attention to the highlighted scrollbar, showing the loading progress |
|  | Popular Matches: As a user I can see a widget of the most popular matches so that I can have a impression of the most wanted matches and decide whether I also want to attend or not [Link](https://github.com/rpf13/sportsshooting_react/issues/29) | ![Screenshot](docs/testing/us_02_matches_popular.png) | no issues found |
| Match Detail |  |  |  |
|  | View Details: As a user I can view the individual match page so that I can read the details comments about the match: [Link](https://github.com/rpf13/sportsshooting_react/issues/16) | ![Screenshot](docs/testing/us_03_view_details.png) | no issues found |
|  | Edit Match: As a match event owner I can edit my event title and description so that I can make corrections or update my event after it was created: [Link](https://github.com/rpf13/sportsshooting_react/issues/17) | ![Screenshot](docs/testing/us_03_edit_match_form.png) & ![Screenshot](docs/testing/us_03_edit_match_saved.png) | update of the content and the date |
|  | Delete Match: As a match event owner I can delete my match event so that all details and comments are deleted: [Link](https://github.com/rpf13/sportsshooting_react/issues/18) | ![Screenshot](docs/testing/us_03_delete_match_modal.png) & ![Screenshot](docs/testing/us_03_delete_match_success.png) | after deleting the only match of *tester11*, the list in his profile is empty, as it should |
|  | Create a comment: As a logged in user I can add match comments to a event so that I can share my thoughts about the event: [Link](https://github.com/rpf13/sportsshooting_react/issues/19) | ![Screenshot](docs/testing/us_03_comment_create.png) | no issues found |
|  | Comment date: As a user I can see how long ago a comment was made so that I know how old a comment is: [Link](https://github.com/rpf13/sportsshooting_react/issues/20) | ![Screenshot](docs/testing/us_03_comment_date.png) | no issues found |
|  | View comments: As a user I can read comments on match events so that I can read what other users think about the match: [Link](https://github.com/rpf13/sportsshooting_react/issues/21) | ![Screenshot](docs/testing/us_03_view_comments.png) | no issues found |
|  | Edit a comment: As an owner of a comment I can edit my comment so that I can fix or update my existing comment: [Link](https://github.com/rpf13/sportsshooting_react/issues/22) | ![Screenshot](docs/testing/us_03_edit_comment.png) | no issues found |
|  | Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment: [Link](https://github.com/rpf13/sportsshooting_react/issues/23) | ![Screenshot](docs/testing/us_03_delete_comment.png) | no issues found |
|  | Attending Shooters: As a user I can see which users are attending a match so that I can get useful information: [Link](https://github.com/rpf13/sportsshooting_react/issues/24) | ![Screenshot](docs/testing/us_03_attending_shooters.png) | no issues found |
| Profile |  |  |  |
|  | Profile page: As a user I can view other users profiles so that I can see their posted match events and learn more about them: [Link](https://github.com/rpf13/sportsshooting_react/issues/25) | ![Screenshot](docs/testing/us_04_profile_page.png)| no issues found |
|  | Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and infos: [Link](https://github.com/rpf13/sportsshooting_react/issues/26) | ![Screenshot](docs/testing/us_04_edit_profile_form.png) & ![Screenshot](docs/testing/us_04_edit_profile_success.png) | full update of the profile, as a user would / should do to give most information about himself |
|  | Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure: [Link](https://github.com/rpf13/sportsshooting_react/issues/27) | ![Screenshot](docs/testing/us_04_update_username_form.png) & ![Screenshot](docs/testing/us_04_update_username_success.png) & ![Screenshot](docs/testing/us_04_update_password.png) | no issues found |
| MySchedule |  |  |  |
|  | List matches: As a logged in user I can view a list of all matches I am attending, so that I can have a simple view and scheduling option: [Link](https://github.com/rpf13/sportsshooting_react/issues/28) | ![Screenshot](docs/testing/us_05_myschedule_list_matches.png) | no issues found |
|  | Search functionality: As a logged in user, I can search within the list of myschedule with keywords, so that I can find the match I am looking for: [Link](https://github.com/rpf13/sportsshooting_react/issues/30) | ![Screenshot](docs/testing/us_05_myschedule_search.png) | no issues found |
| MyGuns |  |  |  |
|  | Create an entry: As a logged in user I can create an entry in my gun database so that I can create my collection of guns: [Link](https://github.com/rpf13/sportsshooting_react/issues/31) | ![Screenshot](docs/testing/us_06_myguns_create.png) | no issues found |
|  | List entries: As a logged in user I can list all entries in my gun database so that I can have an overview about my gun collection: [Link](https://github.com/rpf13/sportsshooting_react/issues/32) | ![Screenshot](docs/testing/us_06_myguns_list.png) | no issues found |
|  | Edit an entry: As a logged in user / owner of an entry I can edit an entry so that I can fix or update my existing item: [Link](https://github.com/rpf13/sportsshooting_react/issues/33) | ![Screenshot](docs/testing/us_06_edit_entry_form.png) & ![Screenshot](docs/testing/us_06_edit_entry_success.png) | note that not only text but also the image got updated |
|  | Delete an entry: As a logged in user / owner of an entry I can delete an item so that I can remove it from my gun database: [Link](https://github.com/rpf13/sportsshooting_react/issues/34) | ![Screenshot](docs/testing/us_06_delete_modal.png) & ![Screenshot](docs/testing/us_06_delete_success.png) | no issues found |
|  | Search functionality: As a logged in user, I can search for guns with keywords, so that I can find the gun I am looking for: [Link](https://github.com/rpf13/sportsshooting_react/issues/35) | ![Screenshot](docs/testing/us_06_search.png) | no issues found |
|  | Filter functionality: As logged in user, I can Filter my gun database based on type “rifle” or “handgun”, so that I can find the item in the related category: [Link](https://github.com/rpf13/sportsshooting_react/issues/36) | ![Screenshot](docs/testing/us_06_filter_w_search_no_result.png) & ![Screenshot](docs/testing/us_06_filter_success.png) | note that filter search combination is checked, which should fail in this case, as it successfully does. |
| **STRETCH** Shooters - Messages |  |  |  |
|  | Shooters - List all Shooters: As a logged in user I can see a list of all registered shooters so I can learn more about who is who: [Link](https://github.com/rpf13/sportsshooting_react/issues/40) | Nothing to show | not implemented |
|  | Shooters - Search functionality: As a user I can search among all registered shooters, so I can quickly find the user I want: [Link](https://github.com/rpf13/sportsshooting_react/issues/41) | Nothing to show | not implemented |
|  | Shooters Message - Create a message: As a logged in user I can create a message sent to another user, so I can communicate privately: [Link](https://github.com/rpf13/sportsshooting_react/issues/42) | [Link to DRF Repo](https://github.com/rpf13/sportsshooting_drf/tree/main#usermessages) | only implemented in DRF back end but not in deployed code. Check README of DRF Repo, full code and checks are added |
|  | Shooters Message - Receive a message: As a logged in user I can receive a message sent to me, so I can read and reply to it. -> CouldHave: [Link](https://github.com/rpf13/sportsshooting_react/issues/43) | [Link to DRF Repo](https://github.com/rpf13/sportsshooting_drf/tree/main#usermessages) | only implemented in DRF back end but not in deployed code. Check README of DRF Repo, full code and checks are added |


</details>

---

### Defensive Programming

`TODO`

The following section will show a table, where I have tested the app, whith Chrome browser, for various cases and error cases. It should test if the application behaves as intended and gives a great user experience. It is worth noting that, I'm pretty sure *someone* can break the application, but the main intention of this project was not to create a bullet proof app, it should be about learning React and DRF API. However, *great care has been taken* to catch as many potential errors as possible.

Please note that this section is not the only section, where the application has been tested. Throughout the whole testing procedure, I did choose many different use cases in order to check the behaviour. So this means also the responsive testing or the browser compatibility testing have indirectly checked the functionality.
This gave me confidence, that the application works also with different browsers and resolutions.


| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Main Site |  |  |  |  |
|  | Click on Logo in Navbar | Redirect / Refresh Home | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |
|  |  |  | Pass |  |

---

## Code Validation

### W3C CSS Validation

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS files.
There were no critical errors. Since the `:global` is valid code, used with such a css.module based application and W3C validation not understanding it, it shows an error. However, searching the web, the official [CSS Module Documentation](https://github.com/css-modules/css-modules#composing-from-global-class-names) says that it is valid.

<details>
<summary>W3C CSS Validation with snapshots</summary>

| File | Screenshot | Notes |
| --- | --- | --- |
| Asset.module.css | ![screenshot](docs/testing/w3c_css_asset.png) | Pass: No Errors |
| AttendingShooters.module.css | ![screenshot](docs/testing/w3c_css_attendingshooters.png) | Pass: No Errors |
| Avatar.module.css | ![screenshot](docs/testing/w3c_css_avatar.png) | Pass: No Errors |
| Button.module.css | ![screenshot](docs/testing/w3c_css_button.png) | Pass: No Errors |
| CommentForm.module.css | ![screenshot](docs/testing/w3c_css_comment_form.png) | Pass: No Errors |
| Comment.module.css | ![screenshot](docs/testing/w3c_css_comment.png) | Pass: No Errors |
| GunCreateEditForm.module.css | ![screenshot](docs/testing/w3c_css_guncreateeditform.png) | Pass: No Errors |
| Gun.module.css | ![screenshot](docs/testing/w3c_css_gun.png) | Pass: No Errors |
| GunsPage.module.css | ![screenshot](docs/testing/w3c_css_gunspage.png) | Pass: No Errors |
| MatchCreateEditForm.module.css | ![screenshot](docs/testing/w3c_css_matchcreateeditform.png) | Pass: No Errors |
| MatchesPage.module.css | ![screenshot](docs/testing/w3c_css_matchespage.png) | Pass: No Errors |
| Match.module.css | ![screenshot](docs/testing/w3c_css_match.png) | Pass: No Errors |
| MoreDropdown.module.css | ![screenshot](docs/testing/w3c_css_moredropdown.png) | Pass: No Errors |
| NavBar.module.css | ![screenshot](docs/testing/w3c_css_navbar_error.png) | Error for `:global` see explanation |
| NotFound.module.css | ![screenshot](docs/testing/w3c_css_notfound.png) | Pass: No Errors |
| PopularMatches.module.css | ![screenshot](docs/testing/w3c_css_popularmatches.png) | Pass: No Errors |
| ProfilePage.module.css | ![screenshot](docs/testing/w3c_css_profilepage.png) | Pass: No Errors |
| SignInUpForm.module.css | ![screenshot](docs/testing/w3c_css_signinupform.png) | Pass: No Errors |
| App.module.css | ![screenshot](docs/testing/w3c_css_app_warning.png) | Warning for webkit |

</details>

---

### ESLint Validation

All JavaScript code was validated using the integrated ESLint JavaScript validator. This validation was a big help during development, since it pointet clearly out if there was misused import, unused variables or missing semi colons or incorrect formating.
After finishing my project, no more errors were shown on the console.

![ESLint validation](docs/testing/eslint_validation.png)

---

### Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.
I have tested it on Chrome, Safari and Firefox on OSX. I did not test with Edge Browser, since it is also based on Chromium, I would expect the same result as for Chrome browser.

In the table below you can find snapshots of each browser. I did a "walkthrough" of the most important features / workflow, which a user would execute. Note that I did also test some *error cases*, since I've tried to combine the browser compatibility testing with defensive programming testing.

<details>
<summary>Browser Compatibility Testing Table with Snapshots</summary>

| Site | Browser | OS | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| Main Site unauthorized |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/main_unauth_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/main_unauth_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/main_unauth_safari.png) | Works as expected |
| Match Delete Modal |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/match_delete_modal_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/match_delete_modal_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/match_delete_modal_safari.png) | Works as expected |
| Match Detail & Comments |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/match_detail_comment_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/match_detail_comment_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/match_detail_comment_safari.png) | Works as expected |
| Match Edit Form |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/match_edit_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/match_edit_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/match_edit_safari.png) | Works as expected |
| Matches Filter & Search |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/matches_filter_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/matches_filter_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/matches_filter_safari.png) | Works as expected |
| Matches List |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/matches_list_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/matches_list_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/matches_list_safari.png) | Works as expected |
| MyGuns Add empty form |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/myguns_add_empty_form_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/myguns_add_empty_form_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/myguns_add_empty_form_safari.png) | Works as expected |
| MyGuns Filter |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/myguns_filter_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/myguns_filter_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/myguns_filter_safari.png) | Works as expected |
| MySchedule |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/myschedule_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/myschedule_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/myschedule_safari.png) | Works as expected |
| Try accessing not existing site - unauthenticated |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/not_existing_unauth_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/not_existing_unauth_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/not_existing_unauth_safari.png) | Works as expected |
| Profile |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/profile_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/profile_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/profile_safari.png) | Works as expected |
| SignIn Form |  |  |  |  |
|  | Chrome | OSX | ![screenshot](docs/testing/signin_chrome.png) | Works as expected |
|  | Firefox | OSX | ![screenshot](docs/testing/signin_firefox.png) | Works as expected |
|  | Safari | OSX | ![screenshot](docs/testing/signin_safari.png) | Works as expected |

</details>

---

### Responsiveness

I have tested the application on various devices in terms of responsiveness. I could not find any blocking issue. Furthermore, I did take great care and have added some media queries, just for the small screens, because I did not like some of the components, when they were small.
I have to say, all in all, it looks good also on small devices. However, on very small screens, some part could be "more beautiful", but in my opition, this would require to redesign the app or enhance massively. 
I think, the current state is quite good in terms of responsiveness.

Below a table, where I did chooce a set of *testcases* to be run on each device. It includes a variety of mobile devices, starts with the iPhone SE, which is a *medium* screen, over the iPhone 12 Pro, which has a *larger* screen. To verify the app on a very small screen, I have chosen the Samsung Galaxy Fold.
In order to test the tablet category, the iPad Air has been used.

<details>
<summary>Responsiveness Testing Mobile Devices</summary>

| Device | Site | Snapshot | Result |
| --- | --- | --- | --- |
| iPhone SE |  |  |  |
|  | Match Add | ![snapshot](docs/testing/match_add_iphone_se.png) | no issues found |
|  | Match Detail | ![snapshot](docs/testing/match_detail_iphone_se.png) | no issues found |
|  | Matches List | ![snapshot](docs/testing/matches_iphone_se.png) | no issues found |
|  | MyGuns Add | ![snapshot](docs/testing/myguns_add_iphone_se.png) | no issues found |
|  | MyGuns Delete Modal | ![snapshot](docs/testing/myguns_delete_modal_iphone_se.png) | no issues found |
|  | MyGuns List | ![snapshot](docs/testing/myguns_iphone_se.png) | no issues found |
|  | MyGuns Serach Fail | ![snapshot](docs/testing/myguns_search_fail_iphone_se.png) | no issues found |
|  | MySchedule List | ![snapshot](docs/testing/myschedule_iphone_se.png) | no issues found |
|  | NavBar | ![snapshot](docs/testing/navbar_iphone_se.png) | no issues found |
|  | Profile Edit | ![snapshot](docs/testing/profile_edit_iphone_se.png) | no issues found |
|  | Profile List | ![snapshot](docs/testing/profile_iphone_se.png) | no issues found |
|  | SignIn | ![snapshot](docs/testing/sign_in_iphone_se.png) | no issues found |
| iPhone 12 Pro |  |  |  |
|  | Match Add | ![snapshot](docs/testing/match_add_iphone_12pro.png) | no issues found |
|  | Match Detail | ![snapshot](docs/testing/match_detail_iphone_12pro.png) | no issues found |
|  | Matches List | ![snapshot](docs/testing/matches_iphone_12pro.png) | no issues found |
|  | MyGuns Add | ![snapshot](docs/testing/myguns_add_iphone_12pro.png) | no issues found |
|  | MyGuns Delete Modal | ![snapshot](docs/testing/myguns_delete_modal_iphone_12pro.png) | no issues found |
|  | MyGuns List | ![snapshot](docs/testing/myguns_iphone_12pro.png) | no issues found |
|  | MyGuns Serach Fail | ![snapshot](docs/testing/myguns_search_fail_iphone_12pro.png) | no issues found |
|  | MySchedule List | ![snapshot](docs/testing/myschedule_iphone_12pro.png) | no issues found |
|  | NavBar | ![snapshot](docs/testing/navbar_iphone_12pro.png) | no issues found |
|  | Profile Edit | ![snapshot](docs/testing/profile_edit_iphone_12pro.png) | no issues found |
|  | Profile List | ![snapshot](docs/testing/profile_iphone_12pro.png) | no issues found |
|  | SignIn | ![snapshot](docs/testing/sign_in_iphone_12pro.png) | no issues found |
| Samsung Galaxy Fold |  |  |  |
|  | Match Add | ![snapshot](docs/testing/match_add_galaxy_fold.png) | no issues found |
|  | Match Detail | ![snapshot](docs/testing/match_detail_galaxy_fold.png) | no issues found |
|  | Matches List | ![snapshot](docs/testing/matches_galaxy_fold.png) | no issues found |
|  | MyGuns Add | ![snapshot](docs/testing/myguns_add_galaxy_fold.png) | no issues found |
|  | MyGuns Delete Modal | ![snapshot](docs/testing/myguns_delete_modal_galaxy_fold.png) | no issues found |
|  | MyGuns List | ![snapshot](docs/testing/myguns_galaxy_fold.png) | no issues found |
|  | MyGuns Serach Fail | ![snapshot](docs/testing/myguns_search_fail_galaxy_fold.png) | no issues found |
|  | MySchedule List | ![snapshot](docs/testing/myschedule_galaxy_fold.png) | no issues found |
|  | NavBar | ![snapshot](docs/testing/navbar_galaxy_fold.png) | no issues found |
|  | Profile Edit | ![snapshot](docs/testing/profile_edit_galaxy_fold.png) | no issues found |
|  | Profile List | ![snapshot](docs/testing/profile_galaxy_fold.png) | no issues found |
|  | SignIn | ![snapshot](docs/testing/sign_in_galaxy_fold.png) | no issues found |
| iPad Air |  |  |  |
|  | Match Add | ![snapshot](docs/testing/match_add_ipad_air.png) | no issues found |
|  | Match Detail | ![snapshot](docs/testing/match_detail_ipad_air.png) | no issues found |
|  | Matches List | ![snapshot](docs/testing/matches_ipad_air.png) | no issues found |
|  | MyGuns Add | ![snapshot](docs/testing/myguns_add_ipad_air.png) | no issues found |
|  | MyGuns Delete Modal | ![snapshot](docs/testing/myguns_delete_modal_ipad_air.png) | no issues found |
|  | MyGuns List | ![snapshot](docs/testing/myguns_ipad_air.png) | no issues found |
|  | MyGuns Serach Fail | ![snapshot](docs/testing/myguns_search_fail_ipad_air.png) | no issues found |
|  | MySchedule List | ![snapshot](docs/testing/myschedule_ipad_air.png) | no issues found |
|  | NavBar | ![snapshot](docs/testing/navbar_ipad_air.png) | no issues found |
|  | Profile Edit | ![snapshot](docs/testing/profile_edit_ipad_air.png) | no issues found |
|  | Profile List | ![snapshot](docs/testing/profile_ipad_air.png) | no issues found |
|  | SignIn | ![snapshot](docs/testing/sign_in_ipad_air.png) | no issues found |

</details>

---

### Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. There were now major issues found. The preformance report for the mobile version is rather low, but lighthouse stated, that there are performance issues due to some plugins I have active. Well, I have quite many active, trying to toggle some of the did not help. However, without theses "strange" plugins of mine, it should be better.
The minor issue with the contrast was already described in the *Color Scheme* part of the README.

<details>
<summary>Lighthouse Testing Table with Snapshots</summary>

| Page | Size | Screenshot |
| --- | --- | --- |
| Gun | Desktop | ![screenshot](docs/testing/lighthouse_d_gun.png) |
| Gun | Mobile | ![screenshot](docs/testing/lighthouse_m_gun.png) |
| Match | Desktop | ![screenshot](docs/testing/lighthouse_d_match.png) |
| Match | Mobile | ![screenshot](docs/testing/lighthouse_m_match.png) |
| Matches | Desktop | ![screenshot](docs/testing/lighthouse_d_matches.png) |
| Matches | Mobile | ![screenshot](docs/testing/lighthouse_m_matches.png) |
| MyGuns | Desktop | ![screenshot](docs/testing/lighthouse_d_myguns.png) |
| MyGuns | Mobile | ![screenshot](docs/testing/lighthouse_m_myguns.png) |
| MySchedule | Desktop | ![screenshot](docs/testing/lighthouse_d_myschedule.png) |
| MySchedule | Mobile | ![screenshot](docs/testing/lighthouse_m_myschedule.png) |
| Profile | Desktop | ![screenshot](docs/testing/lighthouse_d_profile.png) |
| Profile | Mobile | ![screenshot](docs/testing/lighthouse_m_profile.png) |

</details>

---

## Bugs

### GitHub **Issues**

I did use GitHub Issues to track all my work, as already explained in the Agile Development section of the README. Below a snapshot with an excerpt:
![Github Issues](docs/images/github_issues.png)
The intention was to also track the bugs with github issus via adding a `bug`, opening them as stories and add them to the kanban board.
Since I did start from the beginning to deploy my project to Heroku, I did continuously verify the state of the application. Furthermore, each feature was locally tested, before / just after commit. Therefore I could fix most of the issues during the development phase. I did not open bugs when discovering an issue while being still on the development face of that particular feature.

**Fixed Bugs**

As previously mentioned, I did only start "counting" bugs when doing the testing of the front and back end application, hence the development process was finished. Since I did heavy testing during development, I could find potential issues already then. Therefore the list with bugs, found during the finalt testing round, is empty.

| Bug | Status |
| --- | --- |
| [Profile Social Media URL Error](https://github.com/rpf13/sportsshooting_react/issues/44) | resolved |
| [Gun Create form image validation error missing](https://github.com/rpf13/sportsshooting_react/issues/45) | resolved |

**Open Issues**

When writing / submitting my project for assessment, there were no open issues, bugs I am aware of. However, the epic with the stretch items / future features is still in the open state. Such epics, stories got the `WontHave` tag during MoSCoW priorisation. 
Any remaining open issues can be tracked [here](https://github.com/rpf13/sportsshooting_react/issues).

## Unfixed Bugs

There are no remaining bugs that I am aware of.

---
