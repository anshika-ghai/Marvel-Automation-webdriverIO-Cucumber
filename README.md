# yapily
**Getting Started**

Pre-Requirement:
Install Node.js. https://nodejs.org/en/download/

Check installation using node -v, npm -v.

1. Clone the git repo — https://github.com/anshika-ghai/yapily.git
2. Install Node Modules: npm install
3. Execute the cases: npx wdio run ./wdio.conf.js

**Allure Reports**
Clear Allure Report Folder: allure generate ./reports/allure-results  --clean
1. Generating Allure Report: allure generate ./reports/allure-results    
2. Opening Allure report: allure open
3. Screenshots would be present under /reports/screenshots

**ConfigurationFile**
All the configurations have been added in wdio.conf.js

All the pre-executed reports can be seen under allure-report folder and open index.html file