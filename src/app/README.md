Angular Training
================

- ##Expressions

  * Complete `author_list.html` file to display all information about the author.


- ##Filters
  
  * add filtering in `author_list.html` so that it is possible to filter list and sort by first name and last name - asc/desc 
  * add new filter `abstract` that will create abstract of a text with `...` at the end
   if length of the text in greater than `n`, where `n` is a filter parameter


- ##Model and Forms
 
  * create form to add new author
  * add validation - fields are required and cannot start with digit
  * show validation messages
  * create a method to clear the form
  * complete a form to edit selected author
  * add validation - fields are required and cannot start with digit


- ##Controllers and Dependency Injection
 
  * create `AlertService` with alert object 
  ```javascript
    alert = { 
          message : '',
          type : ''
     }```
     and method to set success and error message
  * create `AlertController`, and register it in module `alert`
  * add new variable that will be a reference to `alert` in `AlertService` 
  * inject `AlertService` into `AuthorController` and `AlertController`
  * set alert message when new author is added
  * display alert on the main page ie.
    ```html
      <div ng-show="alertCtrl.alert.message" ng-controller="AlertController as alertCtrl">
         <div class="alert alert-{{alertCtrl.alert.type}} alert-dismissable">
            <button type="button" class="close" >
                  &times;
             </button>
            <strong>{{ alertCtrl.alert.message }}</strong>               
         </div>
      </div>
    ```
    * make alert disappear after clicking a button


- ##Scopes

  * broadcast an event when updating a user
  * listen for this event in `AlertController` and add new alert according to event's data 

- ##Views and Templates
  
  * move menu from `index.html` file to a new file and include it in `index.html` file
  
  
- ##Directives
   
  * create `author-editor` directive, that will take author object and will allow
     + adding
     + editing
     + displaying details
  * use newly created directive in `author_add.html`, `author_edit.html` and `author_details.html`
  * create own validation directive that  will check if in name of an author is a dot (.) - every good author has a dot in name - J.K Rowling, J.R.R Tolkien :),
    directive should require `ngModel` controller and set validity of a field - we will add new element to `ngModelController.$validators` object.


- ##XHR

  * create new function in `AuthorService` that will use `$http` service to update the author and use this function
  * uncomment line 37 in `Gruntfile.js` comment line 38 in `Gruntfile.js`
  * create a constant with value of a session token used in authentication
  * create http interceptor that will add new header `x-session-token`   


- ##Routing
  
  * 
