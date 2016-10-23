# episode-countdown

![screenshot](https://cloud.githubusercontent.com/assets/7032914/19628777/6e3e8e60-9965-11e6-9e49-323696496f70.PNG)

## Usage

We're using [Episodate](https://www.episodate.com/api) to fetch the air-dates of the next episodes.  
To track your own shows, change the IDs in ```ec.js```

```javascript
function getMyShows(container){
    
    //Change the IDs here:
    var myIds = ["4702","42797","30353","11020","12804","14913","15117"];
    
    for (var i = 0; i < myIds.length; i++) {
        var showId = myIds[i];
        getShowInfo(showId,container);
    }
}
```

You can find out the ID of a show by using the api search or show details method. Look for the property ```id```.

**Example:**  
[https://www.episodate.com/api/show-details?q=arrow](https://www.episodate.com/api/show-details?q=arrow)
```json
"tvShow": {
    "id": 29560,
    "name": "Arrow",
    "permalink": "arrow",
    "url": "https://www.episodate.com/tv-show/arrow",
    "description": "Arrow is an American television series..."
    /*more properties...*/
  }
```

➡️ The ID is **29560**
