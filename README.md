Alfresco Visualization Tools
=============================

> 
> Hello from Berlin!
> Alfresco DevCon Hackathon in Berlin 2012 November 5th.

Introduction
------------

Alfresco Visualization Tools provides a platform to bring content visualization to Alfresco. 

It also includes dashlets to view and visualize content within Alfresco repositories using D3.js and Simile Project.


Following visualizations are provided along with this project.

 - Alfresco Activity Feed Timeline
 - Alfresco Site Content Visualization 

More visualizations are coming. You can also contribute your visualizations.

Build System
------------
This project uses alfresco-maven SDK. (https://artifacts.alfresco.com/nexus/content/repositories/alfresco-docs/alfresco-lifecycle-aggregator/latest/index.html)

To generate the AMP files, run the following command from the project's root

- MAVEN_OPTS="-Xms256m -Xmx2G -XX:PermSize=300m" mvn clean package -DskipTests

To run integration-tests, run the following command (check repository-amp/src/test/java/org/alfresco/demoamp/test for examples)

- MAVEN_OPTS="-Xms256m -Xmx2G -XX:PermSize=300m" mvn clean integration-test

To run repository AMP

- MAVEN_OPTS="-Xms256m -Xmx2G -XX:PermSize=300m" mvn clean integration-test -Pamp-to-war -DskipTests

If you want to drop the Alfresco DB and contentstore, add the -Ppurge build option

(On a separate shell) To run share AMP (connecting to repository AMP)

- MAVEN_OPTS="-Xms256m -Xmx2G -XX:PermSize=300m" mvn clean integration-test -Pamp-to-war -Ppurge -DskipTests -Djetty.port=8888

Resources
----------
- D3.js (http://d3js.org)
- Timeline - Simile Project (http://simile-widgets.org/timeline/)
- Maven Alfresco SDK (https://artifacts.alfresco.com/nexus/content/repositories/alfresco-docs/alfresco-lifecycle-aggregator/latest/index.html)

Please feel free to contribute or raise an issue in the GitHub related to this project.

- Bhagya (bhagyas) (http://about.me/bhagyas)
- Axel (AFaucett) (http://axel-faust.de)
- Maurizio (maoo) (http://session.it)
- Nathan (ntmcminn) (http://nathanmcminn.com)
- mindthegab (mindthegab) 


With love.