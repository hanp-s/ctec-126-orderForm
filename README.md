# CTEC 126 - Module 4 - Weekly Assignment No. 3

## GENERAL

This assignment will have you develop an HTML form that gets validated using JavaScript. 

## ASSIGNMENT DETAILS

Create an HTML page that has a form on it. The form should have the following attributes and values set:

- name = "order"
- id = "order"
- action = "http://ctec.clark.edu/~belgort/formprocessing/processform.php"
- method = "POST"
- Use the CTEC 126 template for this assignment. Ensure that any references to external resources are correct. Eliminate resources that are not being used.
- Your HTML and CSS must validate and be named weekly-assignment-3.html
- Place some text on the form that lets the user know that all fields are required.
- Create the following fields:
  - First Name - text input 20 characters in length. Use HTML attributes to limit the number of characters.
  - Last Name - text input 20 characters in length. Use HTML attributes to limit the number of characters.
  - Address - text input 40 characters in length. Use HTML attributes to limit the number of characters.
  - City - text input 30 characters in length. Use HTML attributes to limit the number of characters.
  - State - select with 5 states as options
  - Product - select with 5 products. The first product option must be "--Select a Product--"
  - Quantity - numeric input 5 characters in length. Use HTML attributes to limit the number of characters.
  - Contact - Radio button with "Can we contact you by phone" that has two buttons "Yes, I would like a phone call" and "No, Thank You".
  - Terms and Conditions - A single checkbox with an "I Accept" option. 
  - Submit button

Here are the form submission rules that you must code in JavaScript:

- All fields are required and cannot be left blank.
- The State field requires that the user select an option that is not the default "--Select a State--".
- The Product field requires that the user select an option that is not the default "--Select a  Product--".
- If a field is left blank or not selected you should let the user know by placing some text next to the field that lets them know that the field is required. You should also prevent the form from being submitted. You should also place the focus at the first field that is in error.
- The submit button should also be disabled (and enabled if necessary) when the form is submitted.
- In addition to letting the user know next to each of the fields that is missing data, create an error bucket (list) at the top of the form listing all of the items that were not filled in using an unordered list.

## SUBMISSION

Push your code back to GitHub.

## Grading Rubric

| Item                                                   | Full Marks | Partial Marks | No Marks |
| :----------------------------------------------------- | :--------- | :------------ | :------- |
| Form coded correctly and includes all fields           | 35         | 18            | 0        |
| Submissions rules coded correctly and work as expected | 40         | 20            | 0        |
| Error butcked coded correctly and works                | 15         | 8             | 0        |
| HTML/CSS validate correctly                            | 10         | 5             | 0        |