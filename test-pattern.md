#test pattern
- Describe the object with type and name.
- Load our object's module.
- Load mock modules as needed.
- Inject dependencies and spy on methods.
- Initialize the object:
- Services just need to get injected.
- Controllers are instantiated using the $controller service.
- We need to $compile directives.
- Write expectations grouped in describe blocks.

Karma will auto-capture and kill the browsers. 
ng-html2js converts the html to js strings. 

[https://github.com/gotwarlost/istanbul] Istanbul gives better coverage and can calculate the percentage of code accessed by tests. 

init-ing karma will ask questions before generating the karma.conf.js file. init tests with 
```
karma start
npm test
```

A service (service, factory, value, constant, or provider) is the most common type of depencdency. 

user beforeEach() to use the $provide service to present mock services to the test. 