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
            nextEpisodeDateRaw: showObjectFull.countdown ? showObjectFull.countdown.air_date : 'None',
            nextEpisodeDate: showObjectFull.countdown ? moment(showObjectFull.countdown.air_date).format('DD.MM.YYYY, HH:mm') : 'None',
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
        shows: []
    },
    computed: {
        showsSortedByDateDesc: function () {
            function compare(a,b) {
                if (a.nextEpisodeDateRaw < b.nextEpisodeDateRaw)
                    return -1;
                if (a.nextEpisodeDateRaw > b.nextEpisodeDateRaw)
                    return 1;
                return 0;
            }

            return this.shows.sort(compare);
        }
    },
    mounted: function() {
        this.fillShows();
    },
    methods: {
        fillShows: function(e) {
            getMyShows(this);
        }
    }
})
