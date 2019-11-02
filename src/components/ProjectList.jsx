import React, { useState } from "react";
import "../styles/components/ProjectList.scss";

// components
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "project is sda s",
    subtitle: "this is a cool project",
    online: true,
    link: "https://google.com",
    icon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LuT3lH29fcJzscrZo0W1opexkXNW826XvB4E1RIwNRbt3ToeuQ&s",
    bigPictures: [
      "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2018/10/take-screenshots-windows-10.jpg?itok=nAxuAn9F",
      "https://cnet2.cbsistatic.com/img/hfpe8wfLVDZ0h2lk5XRDS2qjh80=/2018/10/04/be3334d6-1bfe-463b-b5cd-b54bc453de16/snip-and-sketch-promo.jpg"
    ],
    tech: ["react", "atom", "slack", "sass"]
  },
  {
    title: "project is sda s",
    subtitle: "this is a cool project",
    online: true,
    link: "https://google.com",
    icon: "https://www.liebaert.com/wp-content/uploads/2017/03/iconb.png",
    bigPictures: [
      "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2018/10/take-screenshots-windows-10.jpg?itok=nAxuAn9F",
      "https://cnet2.cbsistatic.com/img/hfpe8wfLVDZ0h2lk5XRDS2qjh80=/2018/10/04/be3334d6-1bfe-463b-b5cd-b54bc453de16/snip-and-sketch-promo.jpg"
    ],
    tech: [
      "amazonwebservices",
      "android",
      "angularjs",
      "apache",
      "appcelerator",
      "apple",
      "atom",
      "babel",
      "backbonejs",
      "behance",
      "bitbucket",
      "bootstrap",
      "bower",
      "c",
      "cakephp",
      "ceylon",
      "chrome",
      "codeigniter",
      "coffeescript",
      "confluence",
      "couchdb",
      "cplusplus",
      "csharp",
      "css3",
      "cucumber",
      "d3js",
      "debian",
      "devicon",
      "django",
      "docker",
      "doctrine",
      "dotnet",
      "drupal",
      "electron",
      "elm",
      "ember",
      "erlang",
      "express",
      "firefox",
      "foundation",
      "gatling",
      "gimp",
      "git",
      "github",
      "gitlab",
      "go",
      "google",
      "gradle",
      "grunt",
      "gulp",
      "handlebars",
      "heroku",
      "html5",
      "illustrator",
      "inkscape",
      "intellij",
      "ionic",
      "jasmine",
      "java",
      "javascript",
      "jeet",
      "jetbrains",
      "jquery",
      "krakenjs",
      "laravel",
      "less",
      "linkedin",
      "linux",
      "meteor",
      "mocha",
      "mongodb",
      "moodle",
      "mysql",
      "nginx",
      "nodejs",
      "nodewebkit",
      "npm",
      "oracle",
      "photoshop",
      "php",
      "phpstorm",
      "postgresql",
      "protractor",
      "pycharm",
      "python",
      "rails",
      "reactlang",
      "redhat",
      "redis",
      "ruby",
      "rubymine",
      "safari",
      "sass",
      "sequelize",
      "sketch",
      "slack",
      "sourcetree",
      "ssh",
      "stylus",
      "swift",
      "symfony",
      "tomcat",
      "travis",
      "trello",
      "twitter",
      "typescript",
      "ubuntu",
      "vagrant",
      "vim",
      "visualstudio",
      "vuejs",
      "webpack",
      "webstorm",
      "windows8",
      "wordpress",
      "yarn",
      "yii",
      "zend"
    ]
  }
];

const ProjectList = ({ items }) => {
  return (
    <div className="listProject">
      {projects.map((project, i) => (
        <ProjectCard {...project} key={`project_${i}`} />
      ))}
    </div>
  );
};

export default ProjectList;
