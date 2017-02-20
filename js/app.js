var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/header.html",
            controller: "intro"
        })
        .when("/projects", {
            templateUrl: "partials/projects.html",
            controller: "projects"
        })
        .when("/experience", {
            templateUrl: "partials/experience.html",
            controller: "experience"
        })
        .when("/about", {
            templateUrl: "partials/wip.html",
            controller: "about"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html",
            controller: "contact"
        })
        .otherwise({
            templateUrl: "partials/404.html"
            //redirectTo: "/"
        });
});


app.controller("intro", function ($scope) {
    $scope.bio = {
        name: "AJAY ARJUN",
        headline: "Cloud Enthusiast | Web Developer",
        shortIntro: "I hold a Masters in Computer Science with concentration in Database Systems and Cloud Computing. I am " +
        "passionate about AWS and Cloud Technologies and I develop web applications " +
        "during my leisure time.I love to learn new technologies  and I keep myself " +
        "updated with latest trends in the industry. I will be graduating this May and",
        job: "'I am actively looking for full-time opportunities as a software developer'"
    };
});

app.controller("projects", function ($scope) {
    $scope.skills={
        programmingLanguages:"Java, Python, C++",
        webTechnologies:"JavaScript, HTML, CSS, jQuery, JSP, AngularJS, Node.js, ExpressJS, Spring Framework",
        cloudTechnologies:"AWS [RDS, EC2, S3, Elastic beanstalk], Google App Engine, IBM",
        databases:" MySQL, MongoDB, SQL Server",
        others:"Windows, Linux, Eclipse, GitHub"
    };
    $scope.projectDetails = [{
        title: "HTKS Game using Nao Robot for Children Suffering from Executive Function Disorder",
        description: "Developed a game on a humanoid robot which serves as rehabilitation therapy for children suffering " +
        "from executive function disorder. Built a user interface to control the robot and a video " +
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

app.controller("contact", function ($scope) {
    $scope.info = {
        linkedin: "https://www.linkedin.com/in/ajayarjun/",
        github: "https://github.com/ajayarjun-bka",
        email: "ajayarjun.baalakrishnan@gmail.com",
        phone: "682-252-3332"
    }
});

app.controller("experience", function ($scope) {
    $scope.jobs = [{
        company: "MS.SWAMINATHAN RESEACH FOUNDATION",
        position: "WEB DEVELOPER INTERN",
        period: "JAN 2014 - MAR 2014",
        roles: ["Performed requirement analysis and developed a planning system using Java, to schedule conferences " +
        "among branch research centers and training sessions to students to increase productivity.", "Carried out " +
        "migration of website from PHP to Java environment."
        ]
    }, {
        company: "INFOSYS LIMITED, INDIA",
        position: "SYSTEM ENGINEER",
        period: "SEP 2014 - MAY 2015",
        roles: ["Contributed in the development of the website for Glaxo Smith Kline, using Adobe CQ 5.6, JavaScript, and jQuery.",
            "Authored and published web forms, and performed functionality testing.", "Lead a team of 3 members in the development of an " +
            "internal system to track issues, and monitor resource allocation."]
    },{
        company: "HERACLIA LAB, UTA",
        position: "RESEARCH PROJECT",
        period: "JAN 2016 - MAY 2016",
        roles: ["Carried out a research on Attention-deficit/hyperactivity disorder with a team of # Members.",
            "Carried out a pilot study and collected feedback from experts for the basis for research" +
            "Built a interactive application with web interface to control a Humanoid robot which served as a medium to " +
            "connect with children affected with ADHD","Published the research proceedings to PETRA 2016."
        ]
    }]
});
