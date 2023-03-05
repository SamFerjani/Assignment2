/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Oussema Issam Ferjani Student ID: 171852213 Date: 2/5/2023
*
********************************************************************************/ 


const collegeData = require('./modules/collegedata.js');

try {
    collegeData.initialize()
        .then(() => {

            // Test getAllStudents() function
            collegeData.getAllStudents()
                .then((students) => {
                    console.log(`Successfully retrieved ${students.length} students`);
                })
                .catch((err) => {
                    console.error(err);
                });

            // Test getCourses() function
            collegeData.getCourses()
                .then((courses) => {
                    console.log(`Successfully retrieved ${courses.length} courses`);
                })
                .catch((err) => {
                    console.error(err);
                });

            // Test getTAs() function
            collegeData.getTAs()
                .then((TAs) => {
                    console.log(`Successfully retrieved ${TAs.length} TAs`);
                })
                .catch((err) => {
                    console.error(err);
                });
        })
        .catch((err) => {
            console.error(`Error in initializing: ${err}`);
        });
} catch (error){

    console.log(error);
}