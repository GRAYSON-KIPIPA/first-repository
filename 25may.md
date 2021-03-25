# Understanding And Using REST APIs
[source of this session](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)

### API 
Application Programming Interface

an interface allowing communication between applications. like an agent in real world(dalali)



### REST API
it stands for Representational State Transfer
 -  It is a set of rules that developers follow when they create their API
 - Each URL is called a `request` while the data sent back to you is called a `response`.


#### PARTS OF REST API
1. REQUEST
2. RESPONSE


## REQUEST
1.  The endpoint
2.  The method
3.  The headers
4.  The data (or body)

### 1. Endpoint
- `root-url/path`
- `localhost:3000/users`
- `localhost:3000/users/1/name`


### 2. Method
1. GET
   - used to send a request that need to read data in the database or server
2. POST
    -used when user wants to add some data in server
3. PUT
    -used when user 
4. PATCH
5. DELETE


CRUD OPERATION

Create
Read
Update
Delete



### 3. HEADERS
specified in key-value pairs, 
- used to 
    - give information on the request being performed
    - Authentication

For the list of available http headers, use this link.
[List of available http headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

- sample key value pair
```javascript
{
    name:'kipipa',
    email:'kip@yahoo.com'
}
```

sample header information
- "Content-Type: application/json"


### 4. DATA
The data (sometimes called “body” or “message”) contains information you want to be sent to the server. This option is only used with POST, PUT, PATCH or DELETE requests.



## RESPONSE

1. status codes
2. requested data



### 1. Status codes
shows the status of the response.

[list of status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### 2. Data
representation of the requested data




## GET AND POST REQUEST BASICS

### GET REQUEST
#### Sending a GET request







tasks

1. return name as json object (GET)
``` javascript
{
  id: 1,
  name: "Kipipa",
}
```

2. return stsring `Hellow world` as a webpage (GET)

3. send a post request with `name` parameter, return the string name as a web page