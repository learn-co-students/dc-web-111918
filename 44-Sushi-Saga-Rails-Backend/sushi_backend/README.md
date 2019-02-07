# Sushi Saga Rails Backend 

## Objectives:
### Plug and play
( Make this the official server-side application of the NFL<sup style="font-size: 0.5em; font-weight: bolder">TM</sup> - I mean of Sushi Saga<sup style="font-size: 0.5em; font-weight: bolder">TM</sup>)
* How to seed our own DB using a third party API?
    * ~~We will deploy our data on JSON-server, and then hit that port up for the data, and populate our DB with the received data~~
* How to use our Rails API as 'middle-man' for a third party API?
    * ~~We will build out routes that tell our rails server-side app. to query the 3rd Party API and 'forward' us desired aspects of the response~~
### Breaking REST a bit
( Using Rails back-end: produce custom routes that make sense for our user stories, even if they deviate (slightly or more so) from RESTful conventions )
* Make our backend pull part of the load
    - Pagination from the backend
* Other custom fun stuff
    - /sushi/2/num=5 
        - responds with a range of sushi, from 2 to x
        - 'route globbing' and string processing
    - Get by (name?)
    - Anything!
