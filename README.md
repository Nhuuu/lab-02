# Lab 02: jQuery Selectors and Events

## Configuration

_Your repository must include the following config files:_
- `README.md` - with an overview of the project for a new visitor to your repo
- `.gitignore` - with standard NodeJS configurations (see the provided `.gitignore` file)
- `.eslintrc.json` - with Code 301 course standards for the linter (see the provided file in the *configs* folder of the class repo)

- Organize your files into folders as you see fit. Here is an example file tree:

```sh
lab-02-repository
├── css
│   ├── base.css
│   ├── layouts.css
│   ├── modules.css
│   └── reset.css
├── data
│   └── page-1.json
├── index.html
├── js
│    └── app.js
├── .eslintrc.json
├── .gitignore
└── README.md
```

## User Acceptance Tests

### Overview

In labs 2 and 3, you and your partner(s) will be using the provided JSON files to create a photo gallery. You will style it using floats.

You have the option of using the provided `index.html` file, but it is not a requirement.

## Resources

- [page-1.json](./starter-code/page-1.json)

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

### Feature #1: Display images

#### Why are we implementing this feature?

- As a user, I want to view the images on the page so that I can browse the photo collection.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the photo gallery should display all of the images in the gallery  

#### How are we implementing it?

- Use AJAX, specifically `$.get()`, to read the provided JSON file.
- Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
- Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

```
Number and name of feature: Display images

Estimate of time needed to complete: 20 min

Start time: n/a on and off

Finish time: n/a on and off

Actual time needed to complete: 20 min
```

### Feature #2: Filter images

#### Why are we implementing this feature?

- As a user, I want to be able to filter the images so that I can view only images that match a keyword.

#### What are we going to implement?

Given that a user clicks on the dropdown menu  
When the user selects one of the options  
Then only the images whose keyword matches the option should be displayed  

#### How are we implementing it?

- Create a `<select>` element which contains unique `<option>` elements extracted dynamically from the JSON file, one for each keyword.
- Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

```
Number and name of feature: Filter images

Estimate of time needed to complete: 20 min

Start time: 12:33pm

Finish time: 12:48pm

Actual time needed to complete: 15 min
```

### Feature #3: Style the application

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the images should be displayed in rows across the screen  

#### How are we implementing it?

- Style your application using floats.
- Utilize at least one Google font.


```
Number and name of feature: Filter images

Estimate of time needed to complete: 20 min

Start time: 12:48pm

Finish time: 1:15pm

Actual time needed to complete: 28 min
```

### Stretch Goal: Sort the images

#### Why are we implementing this feature?

- As a user, I want to be able to sort the images so there is an order to how they render.

#### What are we going to implement?

Given that a user is presented with sort options  
When the user clicks on one option  
Then the images should be sorted accordingly  

#### How are we implementing it?

- Add the ability for the user to sort the images by either title or by number of horns.
- Sort the images by one of the properties on page load. This should also apply to the second page of images. 

```
Number and name of feature: Sort the images

Estimate of time needed to complete: 25 min

Start time: 10:00am

Finish time: 10:30am

Actual time needed to complete: 30 min
```

```
Number and name of feature: Pagination

Estimate of time needed to complete: 1 hour

Start time: 5:15pm

Finish time: 7:15pm

Actual time needed to complete: 2 hours
```

```
Number and name of feature: Templating

Estimate of time needed to complete: 25 min

Start time: 4:00pm

Finish time: 4:20pm

Actual time needed to complete: 20 min
```

```
Number and name of feature: Styling with Flexbox

Estimate of time needed to complete: 20 min

Start time: 4:40pm

Finish time: 5:00pm

Actual time needed to complete: 20 min
```



## Submission Instructions

- Complete your Feature Tasks for the day
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on GitHub pages. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment