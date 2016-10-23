function getMyShows(container){
    var myIds = ["4702","42797","30353","11020","12804","14913","15117","15909","17658","17667","18647","19352","20154","20777","21597","21627","21670","21714","22332","22346","22410","22448","22629","23455","23568","24068","25348","2550","2593","2604","2635","26416","26458","26708","26718","26976","27035","27320","27648","28919","29142","29157","29195","29295","29667","29671","29753","29977","30124","30205","30657","30818","31085","3112","3142","31452","31617","31735","31846","32071","32157","3219","32529","32736","32871","32898","3332","33324","33784","33930","3399","34009","34031","34496","34520","3455","3550","35921","35987","36210","36449","37426","37445","38107","3931","3950","40974","42115","43467","43774","45780","46669","46778","4837","48434","48842","48879","5086","5154","51575","5205","55066","55110","55183","5843","5995","6122","6138","6227","6482","8184","8633"];
    for (var i = 0; i < myIds.length; i++) {
        var showId = myIds[i];
        getShowInfo(showId,container);
    }
}

function getShowInfo(showId, container){

    var baseUrl = "https://www.episodate.com/api/show-details?q=";

    var url = baseUrl + showId;

    Vue.http.get(url)
    .then((response) => {
        // success callback

        var showObjectFull = JSON.parse(response.body).tvShow;

        var showObject = {
            name: showObjectFull.name,
            nextEpisodeDate: showObjectFull.countdown ? showObjectFull.countdown.air_date : 'None',
            nextEpisodeString: showObjectFull.countdown ? moment(showObjectFull.countdown.air_date).fromNow() : 'None'
        };

        console.log(showObject);

        container.shows.push(showObject);

    }, (response) => {
        // error callback
        console.log(response);
    });
}

new Vue({
    el: '#listContainer',
    data: {
        shows: [
            {name: "Oz", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Lovesick", nextEpisodeDate: "2016-11-17 00:00:00", nextEpisodeString: "in 24 days"},
            {name: "30 Rock", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Afro Samurai", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Mad Men", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Polar Bear Cafe", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Superjail!", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Californication", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Breaking Bad", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Sons of Anarchy", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Marvelous Misadventures of Flapjack", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Better Off Ted", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "White Collar", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Parks and Recreation", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Community", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Blue Mountain State", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Modern Family", nextEpisodeDate: "2016-10-27 01:00:00", nextEpisodeString: "in 3 days"},
            {name: "Ugly Americans", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Sherlock", nextEpisodeDate: "2017-01-01 21:00:00", nextEpisodeString: "in 2 months"},
            {name: "Archer", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Justified", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Adventure Time", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Workaholics", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Game of Thrones", nextEpisodeDate: "2017-06-26 01:00:00", nextEpisodeString: "in 8 months"},
            {name: "Bob's Burgers", nextEpisodeDate: "2016-10-23 23:30:00", nextEpisodeString: "in 3 hours"},
            {name: "Shameless", nextEpisodeDate: "2016-10-24 01:00:00", nextEpisodeString: "in 4 hours"},
            {name: "Regular Show", nextEpisodeDate: "2016-10-27 23:30:00", nextEpisodeString: "in 4 days"},
            {name: "Arrested Development", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Aqua Teen Hunger Force", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "American Dad!", nextEpisodeDate: "2016-11-08 01:30:00", nextEpisodeString: "in 15 days"},
            {name: "Avatar: The Last Airbender", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "House of Lies", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Suits", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "House of Cards", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Homeland", nextEpisodeDate: "2017-01-16 02:00:00", nextEpisodeString: "in 3 months"},
            {name: "Fullmetal Alchemist: Brotherhood", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "China, IL", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Veep", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "American Horror Story", nextEpisodeDate: "2016-10-27 02:00:00", nextEpisodeString: "in 3 days"},
            {name: "Rectify", nextEpisodeDate: "2016-10-27 02:00:00", nextEpisodeString: "in 3 days"},
            {name: "Unsupervised", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Americans", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Ray Donovan", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Black Mirror", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Banshee", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Gotham", nextEpisodeDate: "2016-10-25 00:00:00", nextEpisodeString: "in a day"},
            {name: "Vikings", nextEpisodeDate: "2016-12-01 01:00:00", nextEpisodeString: "in a month"},
            {name: "Hannibal", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Masters of Sex", nextEpisodeDate: "2016-10-24 02:00:00", nextEpisodeString: "in 5 hours"},
            {name: "Gravity Falls", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Newsroom", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "True Detective", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Cowboy Bebop", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Utopia", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Marvel's Agents of S.H.I.E.L.D.", nextEpisodeDate: "2016-10-26 02:00:00", nextEpisodeString: "in 2 days"},
            {name: "Orange is the New Black", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Curb Your Enthusiasm", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Silicon Valley", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Deadwood", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Steven Universe", nextEpisodeDate: "2016-11-25 00:00:00", nextEpisodeString: "in a month"},
            {name: "Rick and Morty", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Bravest Warriors", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Orphan Black", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Rome", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Wayward Pines", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Broadchurch", nextEpisodeDate: "2017-01-02 21:00:00", nextEpisodeString: "in 2 months"},
            {name: "Sense8", nextEpisodeDate: "2016-12-25 00:00:00", nextEpisodeString: "in 2 months"},
            {name: "Drawn Together", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Man in the High Castle", nextEpisodeDate: "2016-12-16 00:00:00", nextEpisodeString: "in 2 months"},
            {name: "Attack on Titan", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Blacklist", nextEpisodeDate: "2016-10-28 02:00:00", nextEpisodeString: "in 4 days"},
            {name: "Fargo", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Entourage", nextEpisodeDate: "2016-11-04 14:30:00", nextEpisodeString: "in 12 days"},
            {name: "Mr. Pickles", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Brooklyn Nine-Nine", nextEpisodeDate: "2016-11-02 00:00:00", nextEpisodeString: "in 9 days"},
            {name: "Freaks and Geeks", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Family Guy", nextEpisodeDate: "2016-10-24 01:00:00", nextEpisodeString: "in 4 hours"},
            {name: "Narcos", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Westworld", nextEpisodeDate: "2016-10-24 01:00:00", nextEpisodeString: "in 4 hours"},
            {name: "How to Get Away with Murder", nextEpisodeDate: "2016-10-28 02:00:00", nextEpisodeString: "in 4 days"},
            {name: "Marvel's Jessica Jones", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "BoJack Horseman", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Angie Tribeca", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Better Call Saul", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Mad Dogs (US)", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Mr. Robot", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Invader ZIM", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "It's Always Sunny in Philadelphia", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Night Manager", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Life in Pieces", nextEpisodeDate: "2016-10-28 01:30:00", nextEpisodeString: "in 4 days"},
            {name: "Lucifer", nextEpisodeDate: "2016-10-25 01:00:00", nextEpisodeString: "in a day"},
            {name: "Stranger Things", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Master of None", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Occupied", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "One-Punch Man", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Prison Break", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Six Feet Under", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Fear the Walking Dead", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Son of Zorn", nextEpisodeDate: "2016-10-24 00:30:00", nextEpisodeString: "in 4 hours"},
            {name: "High Maintenance", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Love", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Seinfeld", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Vice News Tonight", nextEpisodeDate: "2016-10-24 23:30:00", nextEpisodeString: "in a day"},
            {name: "South Park", nextEpisodeDate: "2016-10-27 02:00:00", nextEpisodeString: "in 3 days"},
            {name: "Misfits", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The King of Queens", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Office", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Wire", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Sopranos", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Weeds", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "Psych", nextEpisodeDate: "None", nextEpisodeString: "None"},
            {name: "The Simpsons", nextEpisodeDate: "2016-10-24 00:00:00", nextEpisodeString: "in 3 hours"}
        ]
    },
    computed: {
        showsSortedByDateDesc: function () {
            function compare(a,b) {
                if (a.nextEpisodeDate < b.nextEpisodeDate)
                    return -1;
                if (a.nextEpisodeDate > b.nextEpisodeDate)
                    return 1;
                return 0;
            }

            return this.shows.sort(compare);
        }
    },
    mounted: function() {
        //this.fillShows();
    },
    methods: {
        fillShows: function(e) {
            getMyShows(this);
        }
    }
})

/*

poll stuff from here:

    https://www.episodate.com/api

    display name and time to air
        from this object:
            "countdown": {
              "season": 5,
              "episode": 4,
              "name": "Penance",
              "air_date": "2016-10-27 00:00:00"
            },

        and translate to current time with moment.js

*/
