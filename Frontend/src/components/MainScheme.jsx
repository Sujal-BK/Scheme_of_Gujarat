import React from 'react'

export const MainScheme = () => {
    return (
        <>
            <div className="container mt-2">

                <div className="nav nav-underline  nav-fill" id="scheme" role="tablist">
                    <button className="nav-link text-dark  active" id="edu" data-bs-toggle="tab" data-bs-target="#education" role="tab"
                        aria-controls="nav-education" aria-selected="true">Education</button>
                    <button className="nav-link text-dark " id="far" data-bs-toggle="tab" data-bs-target="#farmer" role="tab"
                        aria-controls="nav-farmer" aria-selected="true">Agriculture</button>
                    <button className="nav-link text-dark " id="hea" data-bs-toggle="tab" data-bs-target="#health" role="tab"
                        aria-controls="nav-health" aria-selected="true">Health-fare</button>
                    <button className="nav-link text-dark " id="dis" data-bs-toggle="tab" data-bs-target="#disability" role="tab"
                        aria-controls="nav-disability" aria-selected="true">Disability-citizens</button>
                    <button className="nav-link text-dark " id="sen" data-bs-toggle="tab" data-bs-target="#senior" role="tab"
                        aria-controls="nav-senior" aria-selected="true">Senior-citizen</button>
                </div>

                <hr />

                {/* <!--Help-logo--> */}
                <button className="btn btn-dark position-fixed help shadow">
                    Help
                    <span className="badge bg-danger rounded-pill position-absolute 
           top-0 start-100 translate-middle">24/7</span>
                </button>


                <div className="row  rounded pt-2 pb-2 mt-3 mb-4 shadow">
                    <div className="col-md-12 col-12 ">
                        {/* <!--All-scheme--> */}
                        {/* <!--Tabs-item--> */}
                        <div className="tab-content" id="nav-tab-content">
                            {/* <!--Education-card--> */}
                            <div className="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="edu" tabIndex="0">
                                <div className="card">
                                    <div className="card-body">

                                        {/* <!--Mysy--> */}
                                        <h1 className="card-title">
                                            Mysy
                                        </h1>
                                        <p className="card-title">
                                            The Mukhyamantri Yuva Swavalamban Yojana (MYSY) scholarship is a merit-based program that provides
                                            financial assistance to students in Gujarat, India pursuing higher education. The scholarship is
                                            designed to help students from economically weaker sections who are unable to finance their education.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className="nav-link active  text-dark" id="edu" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility1" role="tab" aria-controls="nav-education" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Benifits1"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Applicationprocess1"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Requireddocument1"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility1" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                Students must meet certain eligibility criteria, such as passing the 10th or 12th grade with a
                                                minimum percentage, or having a family income below a certain level.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits1" role="tabpanel" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                These programs offer financial aid and assistance to financially disadvantaged and high-achieving
                                                students in various fields of study. The Indian government offers different types of financial aid
                                                to Indian students to help them with their education, whether they choose to study in India or
                                                overseas.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess1" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Go to the official MYSY scholarship website <br />
                                                    2. Click Login/Register for the current year <br />
                                                    3. Click Fresh Application <br />
                                                    4.If you are already registered, log in with your credentials <br />
                                                    5. If you are not registered, register first <br />
                                                    6. Enter the required details, such as board, university,stream, passing year, admission year, enrollment number, and mobile number <br />
                                                    7. Click Get Password <br />
                                                    8. Fill out the registration form and attach the required documents <br />
                                                    9. Click Submit to complete the application process
                                                </pre>

                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument1" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Identity proof: Aadhaar card <br />
                                                    2. Income proof: Income certificate <br />
                                                    3. Educational certificates: 10th and 12th standard mark sheets <br />
                                                    4.Admission and fee details: Admission letter and fee receipt <br />
                                                    5.Bank account details: Bank account  <br />
                                                    6.Self-declaration form: Self-declaration form <br />
                                                    7.Hostel details: Hostel admission letter and fee receipt <br />
                                                    8.Affidavit: Affidavit on non-judicial stamp paper <br />
                                                    9.Passport-size photo: Recent passport-size photo <br />
                                                    10.Resident certificate: Resident certificate <br />
                                                    11.Address proof: Address proof, such as Aadhar card or ration card
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>


                                        <hr />
                                        {/* <!--DIGITAL GUJARAT--> */}
                                        <h1 className="card-title mt-3">
                                            Digital Gujarat
                                        </h1>
                                        <p className="card-title">
                                            In rural regions, the family's yearly income should not exceed INR 47,000; in urban areas, it should
                                            not exceed INR 68,000. Students with a handicap percentage of more than 40% are eligible for the
                                            award. It is appropriate for study in grades 1 through 12. The household should not earn more than INR
                                            50,000 per year.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className="nav-link text-dark active" id="edu" data-bs-toggle="tab" data-bs-target="#Benifits2"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Applicationprocess2"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Requireddocument2"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">


                                            <div className="tab-pane fade show active" id="Benifits2" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                Gujarat Digital Scholarship plays an important role for all deserving poor students of the state.
                                                This portal has been launched especially for students from financially backward communities. Both
                                                male and female students can apply for the Digital Gujarat Scholarship to pursue higher education.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess2" role="tabpanel" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Once you're on the digital Gujarat homepage, you'll see a button that says “Login Using” in the photo. Click on that button. <br />
                                                    2. To log in, you'll need to choose one of two options that appear in front of you (Email ID / Mobile No.). Choose the one you have information about (for example, mobile number). <br />
                                                    3. Enter the same mobile number that you provided in the application. <br />
                                                    4. Also, enter the password that you had set when you applied. <br />
                                                    5. Before filling out the captcha, refresh it. <br />
                                                    6. Fill out the captcha correctly if you get a new one, otherwise, you'll need to redo the whole process. <br />
                                                    7. After filling out the captcha, click on the login button, check all the information once, and then log in. <br />
                                                    8. After logging in on the homepage, click on the “services” button. <br />
                                                    9. In the photo, you'll see three options. Click on the “scholarship services” button.
                                                </pre>

                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument2" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1.Annual Income Certificate: A certificate proving your family's annual income <br />
                                                    2.Passbook Front Page Scanned Copy/Canceled Cheque: A scanned copy of your passbook's front page or a canceled cheque <br />
                                                    3.Recent Passport-Size Photographs: Two passport-size photos taken recently <br />
                                                    4.Admission Fee Receipt: The receipt for your course admission fees <br />
                                                    5.Last Qualification Mark Sheet: A self-attested mark sheet of your last qualification <br />
                                                    6.Caste Certificate: A self-attested caste certificate, if applicable (for SC/ST/OBC categories)
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="www.digitalgujarat.gov.in" role="button" className="btn btn-dark mt-3">Fore More Info Visit
                                            Official Website <span className="bi bi-arrow-right"></span></a>
                                        <hr />
                                        {/* <!--DR. BABA SAHEB --> */}
                                        <h1 className="card-title mt-3">
                                            Dr. Baba Saheb
                                        </h1>
                                        <p className="card-title">
                                            The scheme “Dr. Baba Saheb Ambedkar Loan for Higher Study in Foreign Countries” is administered by the
                                            Director Scheduled Caste Welfare, Department of Social Justice & Empowerment, Government of Gujarat.
                                            The scheme was commenced in the year 1999 with the objective to provide an opportunity to Scheduled
                                            Caste students to study at abroad. Under this scheme, a loan of ₹15 lakhs is provided at an interest
                                            rate of 4% to offer financial assistance to bright career students of the Scheduled Castes who cannot
                                            go abroad for higher studies due to the their poor economic condition. In this scheme, loans are
                                            provided to students for pursuing graduate and postgraduate courses to cover expenses such as tuition
                                            fees, books, hostel fees, living expenses, travel expenses, and pocket money.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="edu" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility3" role="tab" aria-controls="nav-education" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Benifits3"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Applicationprocess3"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Requireddocument3"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Required documents</button>
                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#I" role="tab"
                                                aria-controls="nav-education" aria-selected="true">Important notes*</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility3" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. The applicant should be native of Gujarat state.The applicant should belong to the Scheduled Caste Category of Gujarat State. <br />
                                                    2. Loans for post graduate, Ph.D., higher level research and computer courses to those who have secured 50% or more marks in graduation. <br />
                                                    3.Loans for technical and professional courses abroad after 12th Standard.Loan can be given to maximum two persons of the same family. <br />
                                                    4. There is no income limit.The institution of the foreign country in which the student is studying must be recognized by that government and the degree obtained must be accepted in that country. <br />
                                                    5. Approval will only be processed once the visa and air ticket have been issued. <br />
                                                    6. Scheduled caste students of the state who are admitted to study abroad based on the syllabus of class-12 or above should have 50% or more marks. <br />
                                                    7. Also they offer Diploma, Graduate, Post Graduate, Post Graduate Diploma, Ph.D. Also eligible for loans for other courses of more than one year duration in all fields.
                                                </pre>

                                            </div>

                                            <div className="tab-pane fade show" id="Benifits3" role="tabpanel" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                Under this scheme, a loan of ₹15 lakhs is provided at an interest rate of 4% to the eligible
                                                students.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess3" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1: The eligible applicant may visit the e-Samaj Kalyan Portal: https://esamajkalyan.gujarat.gov.in/ <br />
                                                    2: On the home page, under the tab 'Citizen Login', click on New User 'Please Register Here'. <br />
                                                    3: Enter your Full Name as per Aadhaar Card, Gender, Date of Birth, Aadhaar Card Number, Email ID, Caste etc. and then click on 'Register'. <br />
                                                    4: After successful registration, the applicants can login through their User ID and Password. <br />
                                                    5: Now, click on 'User Profile' to update your profile. <br />
                                                    6: Fill in all the mandatory information and then click on 'Update'. <br />
                                                    7: After updating profile successfully, select the scheme appearing on the home page and an application form will open. <br />
                                                    8: Fill in all the mandatory details in the application form and upload all the relevant documents. <br />
                                                    9: Now agree with the terms & conditions and click on 'Save Application'. <br />
                                                    10: Submit the application form and take out the print of the application for future reference. The applicant can note down the application number to track the application status by logging into the portal using their User ID and Password.
                                                </pre>

                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument3" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Passport-size Photograph <br />
                                                    2. Identity proof i.e. Aadhaar Card <br />
                                                    3. Proof of Residence (Ration Card/Electricity Bill/License/ Rent Agreement) <br />
                                                    4. Caste certificate <br />
                                                    5. Educational qualification Certificates <br />
                                                    6. School/Collage leaving Certificate <br />
                                                    7. Affidavit <br />
                                                    8. Passport & Visa <br />
                                                    9. Air Ticket <br />
                                                    10. Surety bond on stamp of ₹100/- Annexure - C <br />
                                                    11. Property Valuation Report <br />
                                                    12. First page copy of bank passbook/cancelled cheque (in the name of the applicant) <br />
                                                    13. Any other documents as required
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="I" role="tabpanel" tabIndex="4" style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    Note 1: Loan repayment starts after 6 months  after the completion of the student's course. But the recovery of the loan has to be completed within 10 years. After the repayment of the principal amount, the interest also has to be recovered accordingly. <br />
                                                    Note 2: The beneficiary will have to furnish a valid surety. <br />
                                                    Note 3: The student can apply for a loan within six months of moving abroad. <br />
                                                    Note 4: Students who have passed Class-10 and have completed a recognized ITI course of two years or more duration and have passed the NCVT or GCVT examination for the same according to their choice, Gujarat Secondary and Higher Secondary Education Board. 12th or Gujarat Open School Examination in English subject, those students will be treated as equivalent to 12th for the purpose of admission to higher secondary education courses. <br />
                                                    Note 5: A student who has completed a three-year diploma course at a Polytechnic will be treated as equivalent to Class 12 for college admission. <br />
                                                    Note 6: If the student settles abroad, change of place of work-residence, contact number, e-mail id, notification of movement to India "till the loan is repaid" will be mandatory.
                                                </pre>
                                            </div>
                                        </div>

                                        <a href="https://esamajkalyan.gujarat.gov.in/" role="button" className="btn btn-dark mt-3">Fore More Info
                                            Visit Official Website <span className="bi bi-arrow-right"></span></a>

                                        <hr />
                                        {/* <!--Educational Award Scheme - Gujarat Labour Welfare Board--> */}
                                        <h1 className="card-title mt-3">
                                            Educational Award Scheme - Gujarat Labour Welfare Board
                                        </h1>
                                        <p className="card-title">
                                            The “Educational Award Scheme” is implemented by the Gujarat Labour Welfare Board, Labour, Skill
                                            Development & Employment Department, Government of Gujarat. The scheme has been implemented to
                                            encourage the students of the Labours to increase their enthusiasm and to get higher education through
                                            it.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="edu" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility4" role="tab" aria-controls="nav-education" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Benifits4"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Applicationprocess4"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Requireddocument4"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility4" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                Only the children (students) whose parents are working in a factory/institute in the state of
                                                Gujarat and whose parents have been paying the Labour Welfare Fund will be eligible for this scheme.
                                                The children of labourers who have passed 70% and above marks in the 10th or 12th Standard can avail
                                                the benefits under the scheme.

                                            </div>

                                            <div className="tab-pane fade show" id="Benifits4" role="tabpanel" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>

                                                Under the scheme, children of laborers who have passed 70% or above marks in the 10th Standard will
                                                receive ₹2,500/- as an award. The children of laborers who have passed 70% or above marks in the
                                                12th Standard will receive ₹5,000/- as an award.

                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess4" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. The applicant may visit the Sanman Portal: https://sanman.gujarat.gov.in/ <br />
                                                    2. On the home page, under the tab 'Citizen Login', click on 'Please Register Here'. <br />
                                                    3. Enter your Aadhaar Card Number, select user type, and then enter Labour Welfare Fund Account Number. <br />
                                                    4. Now, click on 'Fetch' & verify the details. <br />
                                                    5. Enter user details and Password. <br />
                                                    6. After successful registration, the applicants can login through their User ID and Password. <br />
                                                    7. Now, select the scheme and read the instructions carefully for the selected scheme. <br />
                                                    8. Fill out the application form and upload all the relevant documents. <br />
                                                    9. Agree with the Rules & Regulations and submit the application form. A confirmation email with the application Number will be sent on the registered email ID.
                                                </pre>

                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument4" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Passport-size Photograph <br />
                                                    2. ID Card of Labour <br />
                                                    3. Aadhaar Card of Labour<br />
                                                    4.Labour Welfare Fund Account Number<br />
                                                    5. Ration Card<br />
                                                    6. Caste Category certificate, if applicable <br />
                                                    7. Residence proof<br />
                                                    8. Bank account details/Bank Passbook<br />
                                                    9. Marksheet of Child/Passing Certificate<br />
                                                    10.Identity proof of Child i.e. Aadhaar Card<br />
                                                    11.Any other documents as required
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="https://sanman.gujarat.gov.in/" role="button" className="btn btn-dark mt-3">Fore More Info Visit
                                            Official Website <span className="bi bi-arrow-right"></span></a>

                                        <hr />

                                        {/* <!--.pre-ssc scholarship --> */}

                                        <h1 className="card-title  mt-3">
                                            Pre SSC Scholarship
                                        </h1>
                                        <p className="card-title">
                                            The “Pre-SSC Scholarship for Scheduled Caste Students” scheme is administered by the Director,
                                            Scheduled Caste Welfare, Government of Gujarat. Under this scheme, scholarships are provided to
                                            Scheduled Caste students who are studying in Class 1 to 10 in Government/Grant-in-Aid Schools/Private
                                            Schools.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="edu" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility5" role="tab" aria-controls="nav-education" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Benifits5"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Applicationprocess5"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="edu" data-bs-toggle="tab" data-bs-target="#Requireddocument5"
                                                role="tab" aria-controls="nav-education" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility5" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                The student should belong to the Scheduled Caste Category of Gujarat.
                                                The student should be enrolled in Standards 1 to 10.
                                                There is no income limit for the scheme.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits5" role="tabpanel" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                <table className="table">
                                                    <thead className="table-dark table-striped">
                                                        <tr>
                                                            <th>Sr. NO.</th>
                                                            <th>Standard</th>
                                                            <th>Boys/Girls</th>
                                                            <th>Scholarship Rate</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="table-light">
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Standard 1 to 5 </td>
                                                            <td>Boys</td>
                                                            <td>₹ 750/-</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Standard 6 to 8 </td>
                                                            <td>Boys</td>
                                                            <td>₹ 750/-</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Standard 6 to 8 </td>
                                                            <td>Girls</td>
                                                            <td>₹ 1000/-</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Standard 9 to 10</td>
                                                            <td>Both</td>
                                                            <td>₹ 1000/-</td>
                                                        </tr>
                                                    </tbody>

                                                </table>
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess5" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. To avail the benefits of the scheme, eligible <br />students need to contact he principal of their school. <br />
                                                    2. The Principal of concerned school has to <br />submit the online proposal on the Digital <br />Gujarat Portal (Portal: https://www.digitalgujarat.gov.in/).
                                                </pre>

                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument5" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Passport size photo <br />
                                                    2. Identity proof i.e. Aadhaar Card  <br />
                                                    3. Caste Certificate from the Competent Authorities <br />
                                                    4. First Page of Bank Passbook/Cancelled Cheque<br />
                                                    5. Educational certificate/Marksheet<br />
                                                    6. Identity Card (School)<br />
                                                    7. Residence proof<br />
                                                    8. Any other documents as required
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="https://www.digitalgujarat.gov.in/" role="button" className="btn btn-dark mt-3">Fore More Info
                                            Visit Official Website <span className="bi bi-arrow-right"></span></a>

                                    </div>
                                </div>
                            </div>
                            {/* <!--Education-card-en--> */}

                            {/* <!--Agriculture-card--> */}
                            <div className="tab-pane fade show" id="farmer" role="tabpanel" aria-labelledby="far" tabIndex="1">
                                <div className="card">
                                    <div className="card-body">

                                        {/* <!-- Spray with drones --> */}
                                        <h1 className="card-title">
                                            Spray with drones
                                        </h1>
                                        <p className="card-title">
                                            Spraying service using advanced drone technology (agricultural aircraft) in agriculture sector
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility11" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Points To Be Remember</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits11"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess11" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument11"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility11" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                1. The application can be made even if the farmer is registered or not. <br />
                                                2. If you say yes to farmer registration, then you have to provide Aadhaar number and mobile number, then an OTP will be sent to your mobile. After entering that OTP, give the details of the farmer in the application and you will come online. <br />
                                                3. If you are applying for the first time from the year 2018-19 without registering as a farmer, then providing the Aadhaar number and mobile number while applying online will determine the eligibility of the application, by submitting a copy of the Aadhaar number to the concerned office, after its verification by the concerned officer, Farmer Registration ( registration) will take place. At that time, an SMS will be sent to your registered mobile number stating that the registration has been done. <br />
                                                4. Details preceded by a red * are mandatory. <br />
                                                5. In order to update/confirm the application, the account number of the land account given at the time of application has to be given along with the application number. <br />
                                                6. After the application is confirmed, the application will not be updated. <br />
                                                7. The print of the application can be taken only after the application is confirmed. <br />
                                                8. If the name of the bank is not found in the list, contact the nearest agricultural office. <br />
                                                9. If the application number is not generated while saving the application, read the message in the above line of instructions. <br />
                                                10. Confirmation is required after saving the application. Only confirmed applications will be considered. <br />
                                                11. Unconfirmed application will not be considered taken on ikhedut portal. It is only for data saving convenience.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits11" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                1. 90% of the cost or a maximum of Rs.500/- whichever is less will be admissible per acre, per spraying.<br />
                                                2. Assistance will be available up to a maximum of 5 acres per sprinkler per account.

                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess11" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Click on "Apply New" button and submit a new application. <br />
                                                    2. Click on the "Update Application" button to add corrections to the application. <br />
                                                    3. Once the application is done, confirm it.<br />
                                                    4. Take a print out of the confirmed application.<br />
                                                    5. It is mandatory to take a print out of the application. You have to take a print of this <br />application made by you and keep it with you. Pre-approval for purchase is given as per<br />the application and you purchase the equipment/materials as per the pre-approval <br />within the stipulated time frame as per the rules, all the supporting evidence mentioned in <br />the pre-approval order and the supporting evidence along with the signed copy of this <br />application have to be submitted along with the assistance proposal.</pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument11" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    No specific documents are required for this Scheme.
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>

                                        <hr />
                                        {/* <!-- Assistance in plantation of sugarcane crop --> */}
                                        <h1 className="card-title">
                                            Assistance in plantation of sugarcane crop
                                        </h1>
                                        <p className="card-title">
                                            Assistance to caste and sub-caste farmers in cultivation of sugarcane crop and 10% assistance under excellent production
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility12" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Points To Be Remember</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits12"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess12" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument12"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility12" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                1. The application can be made even if the farmer is registered or not. <br />
                                                2. If you say yes to farmer registration, then you have to provide Aadhaar number and mobile number, then an OTP will be sent to your mobile. After entering that OTP, give the details of the farmer in the application and you will come online. <br />
                                                3. If you are applying for the first time from the year 2018-19 without registering as a farmer, then providing the Aadhaar number and mobile number while applying online will determine the eligibility of the application, by submitting a copy of the Aadhaar number to the concerned office, after its verification by the concerned officer, Farmer Registration ( registration) will take place. At that time, an SMS will be sent to your registered mobile number stating that the registration has been done. <br />
                                                4. Details preceded by a red * are mandatory. <br />
                                                5. In order to update/confirm the application, the account number of the land account given at the time of application has to be given along with the application number. <br />
                                                6. After the application is confirmed, the application will not be updated. <br />
                                                7. The print of the application can be taken only after the application is confirmed. <br />
                                                8. If the name of the bank is not found in the list, contact the nearest agricultural office. <br />
                                                9. If the application number is not generated while saving the application, read the message in the above line of instructions. <br />
                                                10. Confirmation is required after saving the application. Only confirmed applications will be considered. <br />
                                                11. Unconfirmed application will not be considered taken on ikhedut portal. It is only for data saving convenience.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits12" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                (1) Assistance of Rs.10,000/- per hectare of sugarcane crop, for a maximum of two hectares .<br />
                                                (2) Beneficiary farmers who have benefited under the “Assistance for Plantation of Sugarca
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess12" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Click on "Apply New" button and submit a new application. <br />
                                                    2. Click on the "Update Application" button to add corrections to the application.<br />
                                                    3. Once the application is done, confirm it.<br />
                                                    4. Take a print out of the confirmed application.<br />
                                                    5. It is mandatory to take a print out of the application. You have to take a print of this application made by you and keep it with you. Pre-approval for purchase is given as per the application and you purchase the equipment/materials as per the pre-approval within the stipulated time frame as per the rules, all the supporting evidence mentioned in the pre-approval order and the supporting evidence along with the signed copy of this application have to be submitted along with the assistance proposal.
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument12" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    No specific documents are required for this Scheme.
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>
                                        <hr />
                                        {/* <!-- Hi-Tech Greenhouse (Fan & Pad) --> */}
                                        <h1 className="card-title">
                                            Hi-Tech Greenhouse (Fan & Pad)
                                        </h1>
                                        <p className="card-title">
                                            <strong>  HRT-2</strong> <br />
                                            Unit Cost - • Rs.1650/- Estimated cost per sq.m (up to 500 sq.m.) • Rs.1465/- Estimated cost per sq.m (from 501 to 1008 sq.m.) • Rs.1420/- Estimated cost per sq.m (from 109 to 2080 sq.m.) • Rs.1400/- Estimated cost per sq.m (from 2081 to 4000 sq.m.) • 50% subsidy to general farmer • 15% of above cost for hilly area More expenses will have to be considered.
                                            <br /> <br />
                                            <strong>HRT-9</strong> <br />
                                            50% of cost, 4000 sq.mt per beneficiary. within the limits of . Maximum Unit Cost - Rs. 1650 / sq.m (for area upto 500 sq.m) - Rs. 1465/ sq.m (500/sq.m to 1008 sq.m) - Rs. 1420/ sq.m (from 1008 sq.m to 2080 sq.m) - Rs. 1400/ sq.m (2080 sq.m. to 4000 sq.m.) The above allowance will be increased by 15% for hilly areas.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility13" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Points To Be Remember</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits13"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess13" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument13"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility13" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                1. The application can be made even if the farmer is registered or not. <br />
                                                2. If you say yes to farmer registration, then you have to provide Aadhaar number and mobile number, then an OTP will be sent to your mobile. After entering that OTP, give the details of the farmer in the application and you will come online. <br />
                                                3. If you are applying for the first time from the year 2018-19 without registering as a farmer, then providing the Aadhaar number and mobile number while applying online will determine the eligibility of the application, by submitting a copy of the Aadhaar number to the concerned office, after its verification by the concerned officer, Farmer Registration ( registration) will take place. At that time, an SMS will be sent to your registered mobile number stating that the registration has been done. <br />
                                                4. Details preceded by a red * are mandatory. <br />
                                                5. In order to update/confirm the application, the account number of the land account given at the time of application has to be given along with the application number. <br />
                                                6. After the application is confirmed, the application will not be updated. <br />
                                                7. The print of the application can be taken only after the application is confirmed. <br />
                                                8. If the name of the bank is not found in the list, contact the nearest agricultural office.
                                                9. If the application number is not generated while saving the application, read the message in the above line of instructions. <br />
                                                10. Confirmation is required after saving the application. Only confirmed applications will be considered. <br />
                                                11. Unconfirmed application will not be considered taken on ikhedut portal. It is only for data saving convenience.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits13" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                Project base- As per MIDH guidelines  <br /> <br />
                                                • To be constructed by empaneled companies. <br />
                                                • Additional Supplementary Assistance of State Govt. 7.5% * Maximum 4000 sq.mt per beneficiary. within the limits of Probable target of the state for the year 24-25:
                                                <br /> <br />
                                                Project base- As per MIDH guidelines  <br /> <br />
                                                • To be constructed by empaneled companies. <br />
                                                • Additional supplementary assistance from the State Government is 7.5% per beneficiary of 4000 sq.m.within the limits of
                                                State Probable Target for Year 24-25: 0
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess13" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Click on "Apply New" button and submit a new application. <br />
                                                    2. Click on the "Update Application" button to add corrections to the application. <br />
                                                    3. Once the application is done, confirm it. <br />
                                                    4. Take a print out of the confirmed application. <br />
                                                    5. It is mandatory to take a print out of the application. You have to take a print of this <br />made by you and keep it with you. Pre-approval for purchase is given as per the <br />application and you purchase the equipment/materials as per the pre-approval within the <br />stipulated time frame as per the rules, all the supporting evidence mentioned in the <br />pre-approval order and the supporting evidence along with the signed copy of this <br />application have to be submitted along with the assistance proposal.
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument13" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. To be constructed by empaneled companies. <br />
                                                    2. Additional supplementary assistance from the State Government is 7.5% per beneficiary of 4000 sq.m. within the limits of <br />
                                                    State Probable Target for Year 24-25: 0 <br />
                                                    3. instance of caste (by competent authority) (for Scheduled Castes / Scheduled Tribes only) (if applicable) <br />
                                                    4. Disability Certificate from Competent Authority (only for disabled persons) (if applicable) <br />
                                                    5. Copy of land details 7/12 and 8-A <br />
                                                    6. Copy of Aadhaar Card <br />
                                                    7. Copy of bank passbook and canceled cheque
                                                    8. Copy of forest rights certificate if in possession (if applicable) <br />
                                                    9. Samanti Form (for partners holding land in joint name) (if applicable)
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="https://ikhedut.gujarat.gov.in/iKhedutPublicScheme/Public/frm_Public_HRT_SchemeApplicaiton.aspx"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>

                                        <hr />
                                        {/* <!-- 12% interest subsidy to Scheduled Tribe herdsmen for setting up one to twenty dairy cattle units--> */}
                                        <h1 className="card-title">
                                            12% interest subsidy to Scheduled Tribe herdsmen for setting up one to twenty dairy cattle units
                                        </h1>
                                        <p className="card-title">
                                            Interest subsidy up to a maximum of 12% of the interest actually calculated by the bank on the cost of the animal unit or the loan granted per unit by the bank for purchasing animal, whichever is lower, will be available under the Sadar scheme for a period of five years.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility14" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits14"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess14" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument14"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility14" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                1. The application can be made even if the farmer is registered or not. <br />
                                                2. If you say yes to farmer registration, then you have to provide Aadhaar number and mobile number, then an OTP will be sent to your mobile. After entering that OTP, give the details of the farmer in the application and you will come online. <br />
                                                3. If you are applying for the first time from the year 2018-19 without registering as a farmer, then providing the Aadhaar number and mobile number while applying online will determine the eligibility of the application, by submitting a copy of the Aadhaar number to the concerned office, after its verification by the concerned officer, Farmer Registration ( registration) will take place. At that time, an SMS will be sent to your registered mobile number stating that the registration has been done. <br />
                                                4. Details preceded by a red * are mandatory. <br />
                                                5. In order to update/confirm the application, the account number of the land account given at the time of application has to be given along with the application number. <br />
                                                6. After the application is confirmed, the application will not be updated. <br />
                                                7. The print of the application can be taken only after the application is confirmed. <br />
                                                8. If the name of the bank is not found in the list, contact the nearest agricultural office. <br />
                                                9. If the application number is not generated while saving the application, read the message in the above line of instructions. <br />
                                                10. Confirmation is required after saving the application. Only confirmed applications will be considered. <br />
                                                11. Unconfirmed application will not be considered taken on ikhedut portal. It is only for data saving convenience.
                                                families.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits14" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                Benifits under guidelines <br /><br />
                                                The beneficiary will be eligible for assistance only if he has obtained a loan for setting up the unit through a nationalized bank or a financial institution recognized by the Reserve Bank of India in the current financial year 2024-25.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess14" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Click on "Apply New" button and submit a new application. <br />
                                                    2. Click on the "Update Application" button to add corrections to the application. <br />
                                                    3. Once the application is done, confirm it. <br />
                                                    4. Take a print out of the confirmed application. <br />
                                                    5. It is mandatory to take a print out of the application. You have to take a print of this <br />application made by you and keep it with you. Pre-approval for purchase is given as per <br />the application and you purchase the equipment/materials as per the pre-approval <br />within the stipulated time frame as per the rules, all the supporting evidence mentioned in <br />
                                                    the pre-approval order and the supporting evidence along with the signed copy of this  <br />application have to be submitted along with the assistance proposal.
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument14" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Specimen of Caste (by Competent Authority) (For Scheduled Castes / Scheduled Tribes only) (if applicable) <br />
                                                    2. Certificate of Disability from Competent Authority (for PWD only) (if applicable) <br />
                                                    3. Barcoded ration card (if applicable) <br />
                                                    4. Basis (evidence) for land (if applicable) <br />
                                                    5. Beneficiary's Undertaking/Consent Form (if applicable) <br />
                                                    6. Loan account passbook or bank disbursement certificate (if applicable) <br />
                                                    7. Government approved photo ID (if applicable)
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>
                                        <hr />
                                        {/* <!--  Assistance scheme for establishment of 12 milch dairy farms for animal husbandry business for self-employment purpose--> */}
                                        <h1 className="card-title">
                                            Assistance scheme for establishment of 12 milch dairy farms for animal husbandry business for self-employment purpose
                                        </h1>
                                        <p className="card-title">
                                            Compulsory component (1) 7.5% interest subsidy to general category beneficiaries for 5 (five) years on bank loan obtained for purchase of 12 milch cattle, and 8.5% interest subsidy to women, scheduled caste and scheduled tribe beneficiaries, GIR/ Maximum 12% interest subsidy for Kankerage (2) 50% maximum subsidy of Rs.1.50 lakh on construction of kettleshed, 75% maximum subsidy for Gir / Kankerage Rs. 2.25 lakh assistance (3) 75% on the premium of cattle for three consecutive years up to a maximum of Rs. Assistance of Rs.43,200/-, 90% on Gir / Kankerage Maximum Rs. 51,840/- Subsidiary Optional/ Optional Component (4) 75% of unit cost on electric chafcutter, fogger system and milking machine respectively subject to a maximum of Rs. 18,000/-, Rs. 9,000/-, and Rs. 33,750/- in aid; 90% of the unit cost for Gir / Kankerage respectively subject to a maximum of Rs. 21,600/-, Rs. 10,800/- and Rs. 40,500/- in aid;
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility15" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits15"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess15" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument15"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility15" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                1. The application can be made even if the farmer is registered or not. <br />
                                                2. If you say yes to farmer registration, then you have to provide Aadhaar number and mobile number, then an OTP will be sent to your mobile. After entering that OTP, give the details of the farmer in the application and you will come online. <br />
                                                3. If you are applying for the first time from the year 2018-19 without registering as a farmer, then providing the Aadhaar number and mobile number while applying online will determine the eligibility of the application, by submitting a copy of the Aadhaar number to the concerned office, after its verification by the concerned officer, Farmer Registration ( registration) will take place. At that time, an SMS will be sent to your registered mobile number stating that the registration has been done.
                                                4. Details preceded by a red * are mandatory. <br />
                                                5. In order to update/confirm the application, the account number of the land account given at the time of application has to be given along with the application number. <br />
                                                6. After the application is confirmed, the application will not be updated. <br />
                                                7. The print of the application can be taken only after the application is confirmed. <br />
                                                8. If the name of the bank is not found in the list, contact the nearest agricultural office. <br />
                                                9. If the application number is not generated while saving the application, read the message in the above line of instructions. <br />
                                                10. Confirmation is required after saving the application. Only confirmed applications will be considered. <br />
                                                11. Unconfirmed application will not be considered taken on ikhedut portal. It is only for data saving convenience.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits15" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                Benifits under guidelines <br /><br />
                                                Interest subsidy will be available only on loans obtained in the year 2024-25 from Reserve Bank approved financial institutions / banks. To avail the benefit of this scheme, the pastoralist/self-help group has to apply on the I khedut (i farmer) portal only after getting the loan approval from the Reserve Bank approved financial institution/bank. Click below for district wise targets of the scheme
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess15" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Click on "Apply New" button and submit a new application. <br />
                                                    2. Click on the "Update Application" button to add corrections to the application. <br />
                                                    3. Once the application is done, confirm it. <br />
                                                    4. Take a print out of the confirmed application. <br />
                                                    5. It is mandatory to take a print out of the application. You have to take a print of this <br />application made by you and keep it with you. Pre-approval for purchase is given as per <br />the application and you purchase the equipment/materials as per the pre-approval <br />within the stipulated time frame as per the rules, all the supporting evidence mentioned in <br />the pre-approval order and the supporting evidence along with the signed copy of this <br />application have to be submitted along with the assistance proposal.
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument15" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Specimen of Caste (by Competent Authority) (Only for Scheduled Castes / Scheduled Tribes) (if applicable) <br />
                                                    2. Certificate of Disability from Competent Authority (for PWD only) (if applicable) <br />
                                                    3. Barcoded ration card (if applicable) <br />
                                                    4. Savings Account Bank Passbook or Canceled Check (if applicable) <br />
                                                    5. Bank Loan Sanction Order (if applicable) <br />
                                                    6. Basis (evidence) for land (if applicable) <br />
                                                    7. Beneficiary's Undertaking/Consent Form (if applicable) <br />
                                                    8. Government approved photo ID (if applicable)</pre>

                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>


                                    </div>
                                </div>
                            </div>
                            {/* <!-- Agriculture-card-en --> */}

                            {/* <!--Health-card--> */}
                            <div className="tab-pane fade show" id="health" role="tabpanel" aria-labelledby="hea" tabIndex="2">
                                <div className="card">
                                    <div className="card-body">

                                        {/* <!--Mamta--> */}
                                        <h1 className="card-title">
                                            Mamta
                                        </h1>
                                        <p className="card-title">
                                            Under this program, free medical check-ups, iron and folic acid supplements, and deworming medication
                                            were provided to adolescent girls between the ages of 10 and 19 years, and pregnant women. The program
                                            also aimed to create awareness about menstrual hygiene, family planning, and nutrition among
                                            adolescent girls and pregnant women.
                                            The program was implemented through a network of health workers, including Accredited Social Health
                                            Activists (ASHAs), Auxiliary Nurse Midwives (ANMs), and Anganwadi workers. The Mamta Taruni Abhiyan
                                            was seen as a significant step towards improving maternal and child health in rural areas of Gujarat.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility21" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits21"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess21" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument21"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility21" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                1.Adolescent Girls: The scheme is open to all adolescent girls between the ages of 10 and 19 years
                                                who are residents of Gujarat. <br />
                                                2.Pregnant Women: The scheme is open to all pregnant women who are residents of Gujarat. <br />
                                                3.BPL Families: The scheme gives priority to women and girls belonging to Below Poverty Line (BPL)
                                                families.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits21" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                1.Access to Health and Wellness Services: The scheme provides access to various health and wellness
                                                services, including health check-ups, antenatal care, postnatal care, and nutritional support. <br />
                                                2.Improved Maternal and Child Health: The scheme aims to improve maternal and child health outcomes
                                                by providing timely and quality healthcare services to pregnant women and young girls. <br />
                                                3.Health Education: The scheme also provides health education and awareness sessions to
                                                beneficiaries, which helps them make informed decisions about their health and well-being. <br />
                                                4.Empowerment of Women and Girls: The scheme aims to empower women and girls by providing them with
                                                knowledge and skills related to health and nutrition, which helps them lead healthy and productive
                                                life. <br />
                                                5.Financial Support: The scheme also provides financial support to pregnant women in the form of a
                                                cash incentive, which helps them meet their medical and nutritional needs.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess21" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Visit the Nearest Health Center: The first step is to visit the nearest healthcare center  <br />or hospital that is authorized to provide the benefits and services under the scheme. <br />
                                                    2. Fill the Application Form: The healthcare center will provide an application form for the brscheme. The applicant needs to fill the form accurately and completely. <br />
                                                    3. Submit Required Documents: Along with the application form, the applicant needs to submit the required documents such as identification <br />proof, address proof, medical certificate (in case of pregnant women), and income certificate (in case of BPL families). <br />
                                                    4. Get Enrolled: After submitting the application form and the required documents, the healthcare center will verify the information <br />provided by the applicant.If the applicant is found to be eligible, they will be enrolled in the scheme. <br />
                                                    5. Receive Benefits and Services: Once enrolled, the beneficiary can avail the benefits and services under the scheme, which may include <br />health check-ups, antenatal care, postnatal care, nutritional support, health education, and financial support (in case of pregnant women).</pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument21" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Identity proof: Aadhaar card <br />
                                                    2. Income proof: Income certificate <br />
                                                    3. Educational certificates: 10th and 12th standard mark sheets <br />
                                                    4.Admission and fee details: Admission letter and fee receipt <br />
                                                    5.Bank account details: Bank account proof <br />
                                                    6.Self-declaration form: Self-declaration form <br />
                                                    7.Hostel details: Hostel admission letter and fee receipt <br />
                                                    8.Affidavit: Affidavit on non-judicial stamp paper <br />
                                                    9.Passport-size photo: Recent passport-size photo <br />
                                                    10.Resident certificate: Resident certificate <br />
                                                    11.Address proof: Address proof, such as Aadhar card or ration card</pre>

                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>
                                        <hr />
                                        {/* <!-- Mukhyamantri Arogya Artham Yojana --> */}
                                        <h1 className="card-title">
                                            Mukhyamantri Arogya Artham Yojana
                                        </h1>
                                        <p className="card-title">
                                            Under this scheme, eligible families can receive financial assistance up to Rs. 3 lakh per year for
                                            medical treatment in both government and private hospitals. The scheme covers a wide range of medical
                                            treatments, including surgeries, cancer treatment, kidney transplant, and cardiac treatment, among
                                            others
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility22" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits22"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess22" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument22"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility22" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                1. Residence: The applicant must be a resident of Gujarat state. <br />
                                                2.Socio-economic criteria: The scheme targets vulnerable families belonging to lower-income groups. <br />
                                                3. Families having an annual income of up to Rs. 2.5 lakhs. <br />
                                                4.Families holding a yellow ration card or Antyodaya Anna Yojana (AAY) card. <br />
                                                5.Families who have availed of benefits under the National Food Security Act (NFSA), or any other
                                                state-level food security scheme. <br />
                                                6. Families belonging to Scheduled Castes (SC), Scheduled Tribes (ST), and Other Backward Classes
                                                (OBC). <br />
                                                7. Family size: The scheme covers families with up to five members. In the case of larger families,
                                                the coverage is extended to a maximum of seven members. <br />
                                                8. No existing insurance cover: The applicant should not have any existing health insurance coverage
                                                under any scheme or program. <br />
                                                9.Enrollment: The applicant must enrol themselves in the scheme by filling out the enrollment form <br />
                                                and submitting the necessary documents.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits22" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                1.Under this scheme, eligible families can receive cashless health insurance cover up to Rs. 5 lakh
                                                per family per year. <br />
                                                2. Cashless treatment: The scheme offers cashless treatment to eligible beneficiaries at empanelled
                                                hospitals and healthcare centers. <br />
                                                3. Coverage of medical expenses: The scheme covers all medical expenses related to hospitalization,
                                                including room charges, surgeon fees, anaesthesia charges, and other medical expenses. <br />
                                                4.No age limit: There is no age limit for enrollment in the scheme, and it covers all family
                                                members, including newborns. <br />
                                                5. Transportation expenses: The scheme covers the cost of transportation to and from the hospital
                                                for eligible beneficiaries.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess22" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Click on the "Apply" button on the homepage of the website. <br />
                                                    2. Fill out the enrollment form with the required details such as personal information, family details, and income details. <br />
                                                    3. Upload the necessary documents such as identity proof, address proof, income  <br />
                                                    4. Review the details entered and ensure that all the information provided is accurate. <br />
                                                    5. Submit the application form. <br />
                                                    6. On successful submission, a reference number will be generated, which can be used to track the status of the application.
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument22" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1.Identity proof: Aadhaar card, Voter ID card, Passport, Driving license, PAN card, etc. <br />
                                                    2. Address proof: Aadhaar card, Voter ID card, Passport, Driving license, Utility bill, etc. <br />
                                                    3. Income certificate: Proof of income for the  family, such as salary slips, income  <br />certificate, BPL ration card, etc.
                                                    4. Bank account details: A copy of the bank passbook or a canceled cheque for the bank  <br />account in which the benefits will be transferred.
                                                    5. Family photograph: A recent photograph of the family to be enrolled in the scheme. <br />
                                                    6. Medical documents: Any medical documents related to pre-existing conditions or illnesses that the family members may have.
                                                </pre>
                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>
                                        <hr />

                                        {/* <!-- Pm jay --> */}

                                        <h1 className="card-title">
                                            Pm jay
                                        </h1>
                                        <p className="card-title">
                                            PM-JAY provides up to ₹5 lakh per family per year for secondary and tertiary care hospitalization. It also covers up to 3 days of pre-hospitalization and 15 days of post-hospitalization expenses.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility23" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits23"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess23" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument23"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility23" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                PM-JAY is available to the bottom 50% of the Indian population, and there are no restrictions on family size, age, or gender.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits23" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                PM-JAY provides cashless access to health care services at empanelled public and private hospitals across India. All pre-existing conditions are covered from day one.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess23" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Go to the PMJAY website at pmjay.gov.in <br />
                                                    2. Click on the Registration or Apply for PMJAY section <br />
                                                    3. Enter your Aadhar number, mobile number, and other personal information <br />
                                                    4.Enter the One-Time Password (OTP) sent to your registered mobile number <br />
                                                    5.Fill in your personal information, including your name, date of birth, and family members <br />
                                                    6.Upload scanned copies of documents <br />
                                                    7.Review and confirm all the information <br />
                                                    8. Wait for the application to be approved <br />
                                                    9. Download the Ayushman card
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument23" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1.Aadhaar card: A mandatory document for registration <br />
                                                    2.Proof of identity: Such as a voter ID, passport, or driver's license <br />
                                                    3. Proof of residence: Such as a voter ID, passport, or utility bill <br />
                                                    4. Family details: Including the names and Aadhaar numbers of family members<br />
                                                    5.Bank account details: To receive cashless healthcare services </pre>

                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>
                                        <hr />

                                        {/* <!-- .Dhanvantari Arogya Rath Yojana (GBOCWWB) --> */}
                                        <h1 className="card-title">
                                            Dhanvantari Arogya Rath Yojana (GBOCWWB)
                                        </h1>
                                        <p className="card-title">
                                            Under this program, free medical check-ups, iron and folic acid supplements, and deworming medication
                                            were provided to adolescent girls between the ages of 10 and 19 years, and pregnant women. The program
                                            also aimed to create awareness about menstrual hygiene, family planning, and nutrition among
                                            adolescent girls and pregnant women.
                                            The program was implemented through a network of health workers, including Accredited Social Health
                                            Activists (ASHAs), Auxiliary Nurse Midwives (ANMs), and Anganwadi workers. The Mamta Taruni Abhiyan
                                            was seen as a significant step towards improving maternal and child health in rural areas of Gujarat.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility24" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits24"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess24" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument24"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility24" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                1. Free medical treatment and monthly assistance of ₹1500/- shall be provided to the registered construction worker under normal circumstances in case of less than 90% disability. <br />
                                                2. Free medical treatment and monthly assistance of ₹3000/- shall be provided to the registered construction worker in case of 90 to 100% disability. <br />
                                                3.The above assistance shall be provided up to a maximum limit of ₹3,00,000/-. <br />
                                                4. Financial assistance is provided to the registered construction workers for 15 types of occupational diseases and 23 types of serious injuries.
                                                Terms and Conditions:
                                                Labourers falling under the category of construction workers as determined by the State Government from time to time, who should be registered with the Board as construction workers, shall be treated free of cost in a hospital approved by the State Government.
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits24" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                1. The construction workers registered with the Gujarat Building and Other Construction Worker's Welfare Board will be eligible to get the benefit of this scheme. <br />
                                                2. The registered worker who has any type of disability due to an occupational disease or any serious injuries can avail of the benefits under this scheme.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess24" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1: The applicant may visit the district office of District Office of the Labour Welfare Board and collect the application form. <br />
                                                    2: Fill out the form completely and attach all the relevant documents. <br />
                                                    3: Submit the filled application form to the District Project Manager. <br />
                                                    4: The District Project Manager will submit it online. <br />
                                                    5: It will then be approved by the District Inspector. <br />
                                                    6: Then it will be submitted to the State Project Manager of the Head Office. <br />
                                                    7: It will then be approved by the Government Labour Officer of the Head Office and subsequently by the Member Secretary. <br />
                                                    8: After approval of the application DBT will be credited to the worker's account.
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument24" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. Photograph of the worker <br />
                                                    2. Aadhaar Card<br />
                                                    3. Ration Card<br />
                                                    4. Caste Category certificate, if applicable<br />
                                                    5. Proof of age (Birth certificate/Driving Licence/PAN Card/Voter ID Card)<br />
                                                    6. Self-declaration certificate<br />
                                                    7. Employer Certificate<br />
                                                    8. Bank Passbook/cancelled Cheque<br />
                                                    9. Any other documents as required
                                                </pre>

                                            </div>

                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>
                                        <hr />

                                        {/* <!-- Mukhyamantri Amrutum Yojana --> */}
                                        <h1 className="card-title">
                                            Mukhyamantri Amrutum Yojana
                                        </h1>
                                        <p className="card-title">
                                            A large number of households are pushed into poverty as a result of the high costs of household spending on health care. The Below Poverty Line (BPL) population is especially vulnerable to catastrophic health risks. To address this key vulnerability faced by the BPL population in Gujarat, the State Government has launched a medical care scheme called Mukhyamantri Amrutum (MA) Yojana. The objective of the scheme is to improve access of BPL families to quality medical and surgical care for the treatment of identified diseases involving hospitalization, surgeries and therapies through an em panel network of health care providers.
                                        </p>

                                        <div className="nav nav-pills bg-light" id="scheme" role="tablist">

                                            <button className=" nav-link active  text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Eligibility25" role="tab" aria-controls="nav-health" aria-selected="true">
                                                Eligibility</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Benifits25"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Benifits</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab"
                                                data-bs-target="#Applicationprocess25" role="tab" aria-controls="nav-agriculture"
                                                aria-selected="true">Application process</button>

                                            <button className="nav-link text-dark" id="hea" data-bs-toggle="tab" data-bs-target="#Requireddocument25"
                                                role="tab" aria-controls="nav-health" aria-selected="true">Required documents</button>

                                        </div>

                                        <hr />

                                        <div className="tab-content" id="nav-tab-content">

                                            <div className="tab-pane fade show active " id="Eligibility25" role="tabpanel" tabIndex="0"
                                                style={{ "fontWeight": "bold" }}>
                                                The individuals and families listed in the BPL list by the State Government are eligible under the MA Yojana. Furthermore, each family member should be present when enrolled under the scheme. However, families that belong marginally above the poverty line can be under the MA Vatsalya Yojana if they <br /> <br />
                                                <strong>Follow these criteria </strong> <br /> <br />
                                                1. The annual income of the family is up to ₹4 Lakhs  <br />
                                                2. Any member(s) who are Accredited Social Health Activist (ASHA) workers <br />
                                                3. Any member(s) who have accredited reporters <br />
                                                4. Class-3 and Class-4 employees employed on a fixed payroll by the State Government <br />
                                                5. Senior Citizens with families of a total annual income of up to ₹6 Lakhs
                                            </div>

                                            <div className="tab-pane fade show" id="Benifits25" role="tabpanel1" tabIndex="1"
                                                style={{ "fontWeight": "bold" }}>
                                                1. Cardiovascular Surgeries (a total 153 Benefit Packages) <br />
                                                2.Neurosurgery (a total 49 Benefit Packages) <br />
                                                3.Burns (a total 12 Benefit Packages) <br />
                                                4.Poly Trauma (Not covered by Motor Vehicle Insurance) (a total 8 Benefit Packages) <br />
                                                5.Cancer (Malignancies) (Surgical Oncology, Chemotherapy & Radiation Oncology) (a total 210 Benefit Packages) <br />
                                                6.Renal (Kidney) (a total 21 Benefit Packages) <br />
                                                7.Neonatal (newborn) diseases (a total 23 Benefit Packages)
                                                Mukhyamantri Amrutum Yojana provides quality medical and surgical care for catastrophic illnesses involving hospitalization, surgeries and therapies through an em panel network of hospitals to the BPL families.
                                            </div>

                                            <div className="tab-pane fade show " id="Applicationprocess25" role="tabpanel" tabIndex="2"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1. The eligible beneficiaries must visit the Kiosks at Taluka or Civic Centres in their area. <br />Mobile kiosks are also available at a local level. <br />
                                                    2. The authorities are well equipped with the needed hardware for enrolment. <br />
                                                    3. The hardware is used to capture biometrics such as fingerprints, iris scans, and photos of the beneficiaries. <br />
                                                    4. The beneficiaries might even have to fill out the MA Card application form in Gujarati with appropriate details. <br />
                                                    5. Once the details are verified, the MA health card is issued to the beneficiaries and the <br />enrolment process is complete.
                                                </pre>
                                            </div>

                                            <div className="tab-pane fade show" id="Requireddocument25" role="tabpanel" tabIndex="3"
                                                style={{ "fontWeight": "bold" }}>
                                                <pre>
                                                    1.Address proof. <br />
                                                    2. Identification proof. <br />
                                                    3.Proof of income. <br />
                                                    4.Certificate saying that your family qualifies for the below-the-poverty line.</pre>

                                            </div>
                                        </div>

                                        <a href="https://r.search.yahoo.com/_ylt=AwrKFtQVLA5nCgIAX8O7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1730191638/RO=10/RU=https%3a%2f%2fmysy.guj.nic.in%2f/RK=2/RS=k6_wkDvbljPyM9ZEmTS5gZJx8ek-"
                                            role="button" className="btn btn-dark mt-3">Fore More Info Visit Official Website <span
                                                className="bi bi-arrow-right"></span></a>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- Health-en --> */}

                            {/* <!--Fouth--> */}
                            <div className="tab-pane fade show" id="disability" role="tabpanel" aria-labelledby="dis" tabIndex="3">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h1 className="card-title">Disability-citizens</h1>
                                        <p className="card-tex">
                                            Aims to Provide financial aid, Streamline benefits,
                                            Empower disabled individuals, Offer rehabilitation service, Support education.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Fifth--> */}
                            <div className="tab-pane fade  show" id="senior" role="tabpanel" aria-labelledby="sen" tabIndex="4">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h1 className="card-title">Senior-citizen</h1>
                                        <p className="card-tex">
                                            Aims to Provide financial aid, Streamline benefits,
                                            Empower disabled individuals, Offer rehabilitation service, Support education. </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <!--Col-end--> */}


            </div>
        </>
    )
}
