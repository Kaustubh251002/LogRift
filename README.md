[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2sZOX9xt)
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">LogRift - Log-Ingestion System</h3>

  <p align="center">
    A quick and efficient log ingestion system using Elasticsearch, Filebeat, and Kibana
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This repository provides a setup for the Elasticsearch, Filebeat, Kibana stack on Fedora. Additionally, it includes a Node.js script for sending logs to Filebeat in the specified JSON format.

<b><a href='https://www.youtube.com/watch?v=Ooytr0ks9cU'>Link to Video Demonstration</a></b>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Node.js
* ElasticSearch
* Kibana
* Filebeat

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Steps to replicate it on your system.

### Prerequisites

* git
  ```
  git clone https://github.com/dyte-submissions/november-2023-hiring-Kaustubh251002.git
  cd november-2023-hiring-Kaustubh251002
  ```

* npm
  ```
  npm install
  ```


<!-- USAGE EXAMPLES -->
## Usage

* Start the node servver
```
node ./src/index.js
```

* Run population script (start bash script to send logs to http port 3000)
```
sudo ./temp.sh 
```

* Run filebeat using provided config file
```
sudo ./ filebeat -e -c <path-to-config-file>
```

* Results are displayed at the kibana dashboard: <a href="https://ee17f9ef4d86420eb7fcf9d598a0a36e.us-central1.gcp.cloud.es.io:9243/app/logs/stream?logView=(logViewId:default,type:log-view-reference)&flyoutOptions=(flyoutId:!n,flyoutVisibility:hidden,surroundingLogsId:!n)">Kibana</a>
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Kaustubh Mishra - kmishra2510@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>
