##  26 May tasks
## SERVING STATIC FILES
   
   1. Familiarize with serving static files in nodejs. For more help visit [serving static files](https://expressjs.com/en/starter/static-files.html)
   
   
   2. Then make the followng pages and they should be available when user visits a specified link in the browser.

   <table style="width:100%">
    <tr>
        <th>Page</th>
        <th>URL</th>
        <th>Content of Page</th>
    </tr>
    <tr>
        <td>Login Page</td>
        <td>localhost:3000/login</td>
        <td>login form (email and password input with submit button)</td>
    </tr>
    <tr>
        <td>Sign Up page</td>
        <td>localhost:3000/signup</td>
        <td>sign up form (email, phone number, name, password input with submit button)</td>
    </tr>
    <tr>
        <td>Home Page</td>
        <td>localhost:3000/</td>
        <td>a h3 tag showing welcome to the todo app</td>
    </tr>
    </table>


## NB

Together with the specified routes above, user should be able to 
- fill in both login and sign up forms, 
- and the data should be sent to the server 
- and response should be returned to the user for a successfull operation. 

   **For example**, when user logs in, the browser should alert the user that login is successful. 
   `a HTML ALERT response with text similar to this below is expected after login.  NB on the same page.`
   
   **Dear [username or email] the login operation was successfully completed**
   
   - Learn on html alert using this [link](https://www.w3schools.com/jsref/met_win_alert.asp)
   
- similary to when user signs up, he should be prompted that the operation is successful. together with all entered details as a html alert
