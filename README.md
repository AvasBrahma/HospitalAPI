
# Hospital API

Hospital API is a management of patients' records and reports. The API offers two user roles: Doctor and Patient. Only doctors can log in using secure authentication mechanisms powered by JSON Web Tokens (JWT).




## Features

* Doctors are granted a unique JWT token upon successful login, which is required for authorization in subsequent API requests.
* The API allows doctors to register new patients, create patient reports, and view all patient reports & view all status of all patients

* The API includes functionality to view the COVID-19 status of patients, whether they are Negative, Travelled-Quarantine,Symptoms-Quarantine or Positive-Admit




## Usage

1. Registration and Login:

Doctors can register using an API and log in to the Hospital API.
Upon successful login, a unique JWT token is generated for the doctor, which will be used for subsequent API requests for authorization.

2. Patient Registration:

Authenticated doctors can use the API to register new patients.
The necessary patient information such as name, age, contact details, and medical history can be provided during registration.

3. Creating Patient Reports:

Once a patient is registered, doctors can create comprehensive reports for each patient.
The API allows doctors to record details of diagnoses, treatments, prescriptions, and other relevant medical information in the patient's report.

4. Viewing Patient Reports & Status:
Doctors have access to all patient reports through the API.
They can retrieve and view the complete reports patient wise and cam view all the status of all the patint
## API EndPoints

*  doctors/register
*  doctors/login
*  patients/register
*  patients/place_patient_id/create-report
*  patients/place_patient_id/all_reports
*  reports/:status

## Technology Used
* Express.js
* Node.js
* MongoDB
* JavaScript
* JWT 
## Setup and Installation

To set up the Employee Review System locally, follow these steps:
1. Clone the repository from GitHub:

git clone https://github.com/AvasBrahma/HospitalAPI

2. Change into the project directory:
 cd employee-review-system

3. Install the dependencies:
 npm install

4. In Config file set your mongodb database

5. npm start



