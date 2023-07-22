# SportsShooting

SportsShooting is a site, which should support Sportsshooters and their related clubs, to create match events or gather information about matches. The main target audience are licensed IPSC (International Practical Shooting Confederation) shooters. [IPSC](https://www.ipsc.org/) is a worldwide organized confederation of practical shooters.

It should build a plattform, where the registered user can gain more information about a particular match. He has the option to "attend" a match by clicking the related button, which will make it possible for other registered user, to see who is attending.

We as IPSC Shooters often attend matches and therefore travelling is essential. This app should help to find other IPSC shooters, who attend the same match and therefore can travel together. IPSC Matches are all classified withing "Levels", which have a distinct meaning:

- Level 1: Club matches, Trainings
- Level 2: Matches open to participants from different clubs
- Level 3: Regional matches, i.e. national championships or other large matches
- Level 4: Continental championships, i.e. the European or Pan-American Championship
- Level 5: The World Shoots

For this reason, the plattform provides predefined "Level" filters in order to navigate quicker.

A registered user will also have the possibility to comment on match listings and therefore get in contact with fellow colleagues.

If one is attending lots of matches, it can become difficult to track them, therefore the app shows all upcoming events, where a user has registered for.

The plattform also gives the IPSC Shooter the option to create his own and private gun collection site. There he can inventorise his collection.

Further messaging and collaboration featuers are built in.

Link to deployed SportsShooting site: `INSERT LINK HERE`

Link to the backend Django API repository: [SportsShooting API Repo](https://github.com/rpf13/sportsshooting_drf)


`INSERT AM I RESPONSIVE HERE`

---

## User Stories


### Stretch User Stories


---

## UX & Design


### Color Scheme


---

### Typography


---

### Wireframes

The Wireframes are the prototype of this project and show the base idea and the skeleton of the app. Even though this repo is mainly used for the API backend, the Wireframes of the frontend application do still have a crucial impact, since they define the data to be consumed.. I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

<details>
<summary>Mobile Wireframe</summary>


</details>

<details>
  
<summary>Desktop Wireframe</summary>
  
![Main Site](docs/wireframes/desktop/d_main.png)
![Match Detail](docs/wireframes/desktop/d_match_detail.png)
![MySchedule](docs/wireframes/desktop/d_myschedule.png)
![Shooters](docs/wireframes/desktop/d_shooters.png)
![MyGuns](docs/wireframes/desktop/d_myguns.png)
![Profile](docs/wireframes/desktop/d_profile.png)

</details>

---

# Features


---

## Tools & Technologies Used


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
[Github Projects](https://github.com/users/rpf13/projects/6/views/1) has been used as the Agile tool during the development phase of this project. The Kanban board was very useful to keep track on the tasks. I have created 4 columns (ToDo, In Progress, On Hold, Done) and moved the stories accordingly. 
The On Hold column has served as a "parking spaces", when a story was partially done, but not completely finished.

![Github Projects Kanban Board](docs/images/github_projects.png)

### GitHub Issues
[Github Issues](https://github.com/rpf13/sportsshooting_drf/issues) has been used to create all the stories, before they were placed on the projects Kanban board. I have created an issues templates to simplify creation.
Each issue has a label for the MoSCoW prioritization.

Once a story has been created via the template, it will be automatically added to the Kanban board in the Todo column.

![Github Issues](docs/images/github_issues.png)

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


---

## Credits

### Code

### Content

### Media


---

### Acknowledgements

