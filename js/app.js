var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/header.html",
            controller: "intro"
        })
        .when("/projects", {
            templateUrl: "partials/projects.html",
            //templateUrl: "/portifolio/docs/partials/projects.html",
            controller: "projects"
        })
        .when("/about", {
            templateUrl: "partials/about.html",
            //controller: "KartListCtrl"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html",
            //templateUrl: "/portifolio/docs/partials/contact.html",
            controller: "intro"
        })
        .otherwise({
            redirectTo: "/"
        });
});


app.controller("intro", function ($scope) {
    $scope.bio = {
        name: "AJAY ARJUN",
        headline: "Java Develoepr,WebDeveloper",
        shortIntro: "I am currently pursuing Master’s degree in Computer Science and actively looking"
    };
});

app.controller("projects", function ($scope) {
    $scope.projectDetails = [{
        title: "HTKS Game using Nao Robot for Children Suffering from Executive Function Disorder",
        description: "Developed a game on a humanoid robot which serves as rehabilitation therapy for children suffering " +
        "from executive function disorder. Built a user interface  Built a user interface to control the robot and a video " +
        "recognition module to evaluate whether the children are performing the tasks correctly using a Kinect camera.",
        technologies: "Java, Java Servlets, JPA, JSP, Python, JavaScript, and Kinect Studio",
        github: "www"
    }, {
        title: "Secure Cloud Storage on IBM Bluemix",
        description: "Developed a web application that encrypts and store files on Bluemix storage. " +
        "Implemented separate workspaces and version control for all users",
        technologies: "python, AES Encryption",
        github: "www"
    },
        {
            title: "Weather Data Repository using Amazon RDS and Elastic Cache",
            description: "Implemented a Weather Data Repository on AWS using Amazon EC2 instance to carry out analysis. " +
            "Built a user interface to generate queries dynamically and reduced the database access time by 10 folds by" +
            " the implementation of Elastic Cache.",
            technologies: "Python, AWS, Memcache",
            github: "www"
        },
        {
            title: "Hadoop Map Reduce and K means Clustering on Earthquake data set",
            description: "Implemented Hadoop Map-reduce multi-node cluster on AWS to analyze earthquake patterns and " +
            "used K-means clustering to visualize the results in the form of scatter plots and histograms using R and " +
            "Shiny server.",
            technologies: "Python, R, Google charts, AWS (RDS, S3, EC2, Elastic Beanstalk), MongoDB",
            github: "www"
        },

        {
            title: "Static Code Analyser on AWS",
            description: "Implemented online static code analyzers [rats and Pylint] as REST API and displayed results " +
            "dynamically with versioning and multiuser support.",
            technologies: "Node.js, Angular JS, AWS",
            github: "www"
        },
        {
            title: "Web Platform for Navigating Hospital Admission Information",
            description: "Java based web application which provides a user with useful information like the average " +
            "length of stay, mortality rate and the average cost of the treatment based on current admission records " +
            "and diagnosis code.",
            technologies: "Java, Java Servlets, JPA, JSP",
            github: "www"
        },
        {
            title: "Photo Sharing App on Google App Engine",
            description: "Developed a web app on google app engine which allows users to upload a picture and share it " +
            "publicly, comment on pictures and set privacy. Used NO-SQL database to support performance and auto scaling " +
            "based on user load.Handles multiple user sessions and stress tested using JMeter.",
            technologies: "Google App Engine ,Python,Flask,MongoDB",
            github: "www"
        }

    ]
});

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});

