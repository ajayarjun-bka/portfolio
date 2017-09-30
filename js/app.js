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
        .when("/wip", {
            templateUrl: "partials/wip.html"
            //controller: "about"
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
        headline: "Java Developer | Full Stack Developer",
        //headline: "",
        shortIntro: "Recently graduated with a Masters in Computer Science from The University of Texas at Arlington. " +
        "I am passionate about Cloud Computing, and Big Data." +
        " I have developed several cloud based applicaitons leveraging lambda function and microservices. Strong exposure in consuming and writing RESTFUl Api services. " +
        "Created several skills for Amazon Alexa and published. I have a strong grasp of object-oriented programming principles and design patterns.",
        ps: "Kindly go through the ",
        ps1: "and",
        ps2: " sections to know more about me",
        summary: ["Over 2 years of experience in web application development using JAVA, J2EE, JDBC, Servlets, Spring, " +
        "Hibernate, and JSP, HTML5, CSS/CSS3, JavaScript, AJAX, and JSON.", "Strong in developing front-end for web applications " +
        "using JavaScript frameworks and libraries like Angular JS, Node.js, React.js, D3.js and other MVC frameworks.",
            "Strong knowledge in React.js, testing react components using karma and mocha, and Webpack.", "Experience in " +
            "all phases of Software Development Life Cycle (SDLC) methodologies like Agile/Scrum and Test-Driven Development (TDD).",
            "Experience with AWS services like EC2 instances, Elastic Beanstalk, S3, RDS, Load Balancing and Auto scaling.",
            "Experience with Databases like Oracle 10g, MYSQL, MongoDB.", "Extensively used SQL in writing queries, database triggers, and stored " +
            "procedures.", "Experience with version control service GIT and error logging using Log4J.", "Developed test " +
            "scripts with JUnit and used JMeter for performance Testing.", "Utilized FindBugs and PMD for implementing coding " +
            "guidelines, code analyzer and code coverage.", "Experience in working with build & deployment tools like Maven and Ant.",
            "Experience in interacting with clients/users in gathering the user requirements."]
    };
});

app.controller("projects", function ($scope) {
    $scope.skills = {
        programmingLanguages: "Java, JavaScript, Python, C++",
        javascript: "ES6, Node, React, Redux, AngularJs, Express, Socket.io",
        webTechnologies: "HTML5, CSS3, SCSS, JSP, Spring MVC",
        cloudTechnologies: "AWS [RDS, EC2, S3, Elastic beanstalk], Google App Engine, Microsoft Azure, IBM Bluemix",
        databases: " MySQL, MongoDB, SQL Server, Oracle 10g ",
        others: "Windows, Linux, Eclipse, Maven, Git, Agile methodology"
    };
    $scope.projectDetails = [{
        title: "HTKS Game using Nao Robot for Children Suffering from Executive Function Disorder",
        description: "Implemented Head, Toes, Knees, and Shoulders (HTKS) task switching game using NAO robot which " +
        "serves as rehabilitation therapy for children affected with Executive Function disorder. Built a user interface " +
        "for controlling the NAO robot to play task switching game and other basic tasks. Developed a video recognition " +
        "module to evaluate whether the children are performing the tasks correctly using Kinect camera.",
        technologies: "Python, Java Script, Java Servlets, Nao Qi Framework, Choregraphe 2.43, Unity Engine, Kinect Studio",
        github: "www"
    },
        {
            title: " Automated Notifications using Amazon SNS and SQS",
            description: "Implemented automated message notification system using SNS and SQS on AWS using AWS JAVA SDK." +
            " Wrote consumer and producers to consume and push messages into SQS. Created SNS topic which send out " +
            "notifications to http/https endpoints. Added local signature verification to confirm the authenticity " +
            "of the source of SNS messages.",
            technologies: "Java, Eclipse, AWS SNS, SQS, AWS JAVA SDK, Tomcat",
            github: "www"
        },
        {
            title: " Secure Cloud Storage",
            description: "Cloud application developed using python that encrypts and uploads the file into IBM Bluemix " +
            "storage container. It allows the user to download the decrypted file, list all the files and deleting " +
            "specified file that is available in the container. Implemented separate containers and version control for each user.",
            technologies: "Python, AES encryption, IBM Bluemix",
            github: "www"
        },
        {
            title: " Database Caching using Elastic Storage",
            description: "A web application connected to Amazon S3, that acts as a repository for historical weather " +
            "data. The users were allowed generate random queries over the weather data to to view details for a city, " +
            "sort the data, finding peak value, or by climatic condition. Implemented memcache to cache frequent " +
            "queries by hashing. Reduced Database access by 10X times. ",
            technologies: "Python, AWS Elastic Storage, S3, Python-flask",
            github: "www"
        },

        {
            title: " Hadoop Map Reduce and K-Means Clustering on Earthquake data set",
            description: "Implemented Hadoop Map reduce multi-node cluster on Amazon Web Services to analyze earthquake " +
            "data set for relationship between magnitude and depth, to identify if the magnitude is increasing over a " +
            "fixed period. Performed K means clustering on the output from Map Reduce job to group data as per " +
            "requirements and visualize it as scatter plots, histograms and bar graphs using R and shiny server. ",
            technologies: "Python, R, AWS, S3",
            github: "www"
        },
        {
            title: "Static Code Analyzer for Security Analysis",
            description: "Implemented online static code analyzer as REST APIs to analyze C/C++ and python code for " +
            "common programming vulnerabilities. Generated reports of the results and stored a copy under respective " +
            "users to track vulnerabilities. Implemented sanitization of inputs to avoid vulnerabilities like buffer " +
            "overflow and cross site scripting. Performed stress testing using JMeter.",
            technologies: "Node.js, Angularjs, Expressjs, AWS EC2",
            github: "www"
        },
        {
            title: "Photo Sharing App on Google App Engine",
            description: "Developed a web app on google app engine which allows users to upload a picture and share it " +
            "publicly, comment on pictures and set privacy. Used NO-SQL database to support performance and auto scaling " +
            "based on user load.Handles multiple user sessions and stress tested using JMeter.",
            technologies: "Google App Engine ,Python,Flask,MongoDB",
            github: "www"
        },
        {
            title: "K-NN with Cross Validation",
            description: "Implemented K-NN using different distance measures such as Euclidean, Polynomial kernel and " +
            "Radial basis kernel. It included preprocessing steps such as cleaning and normalization of data and 10-FCV " +
            "to divide the data set into training and testing samples",
            technologies: "Python",
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
        company: "BIGPARSER",
        position: "SOFTWARE DEVELOPER",
        period: "JUN 2017 - PRESENT",
        roles: ["Developed libraries in Java, Python and Nodejs to access Bigparser’s API’s.","Implemented AWS SNS for " +
        "notifications through SMS, Emails and push notifications."," Leveraged AWS SQS to communicate among microservices" +
        " using AWS JAVA SDK"," Developed Several Skills for Amazon Alexa"
        ]
    },
        {
            company: "HERACLIA LAB, UTA",
            position: "RESEARCH PROJECT",
            period: "JAN 2016 - MAY 2016",
            roles: ["Carried out a research on Attention-deficit/hyperactivity disorder with a team of # Members.",
                "Carried out a pilot study and collected feedback from experts for the basis for research" +
                "Built a interactive application with web interface to control a Humanoid robot which served as a medium to " +
                "connect with children affected with ADHD", "Published the research proceedings to PETRA 2016."
            ]
        },
        {
            company: "INFOSYS LIMITED, INDIA",
            position: "SYSTEM ENGINEER",
            period: "SEP 2014 - MAY 2015",
            roles: ["Developed a web based application with SDLC (Software Development Life Cycle) model using Java, JSP, " +
            "Servlets, Bootstrap and HTML to track internal resource allocation.", "Experience in creating templates, components, " +
            "workflows, widgets, user groups and web pages specific to the site as per the business requirement using Adobe CQ 5.6.",
                "Performed client side design and validations using HTML/HTML5, jQuery, CSS/CSS3 and JavaScript.",
                "Wrote SQL queries to retrieve and insert data from/into the database using Oracle 10g.", "Used Hibernate as " +
                "ORM to map java classes to data base tables.", "Deployed the web application on Apache Tomcat application server.",
                "Involved in code review and in Unit testing using JUnit and Integration testing of the application.",
                "Tested web pages for CSS pixel-level layout matching, consistency with browser versions and platform independence.",
                "Wrote media queries for making appropriate CSS fixes while making the pages responsive for desktop, tablet & mobile break points."]
        },

        {
            company: "MS.SWAMINATHAN RESEACH FOUNDATION",
            position: "WEB DEVELOPER INTERN",
            period: "JAN 2014 - MAR 2014",
            roles: ["Performed requirement analysis and developed a planning system using Java, to schedule conferences " +
            "among branch research centers and training sessions to students to increase productivity.", "Carried out " +
            "migration of website from PHP to Java environment."
            ]
        }
        ]
});

// nav()
// {
//     var nav = $('#')
// }
