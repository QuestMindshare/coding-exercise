# coding-exercise
## Overview
Sample app stubbed-out using create-next-app which will serve as the skeleton, but there will be some development tasks to complete, placeholder code to be fleshed out, etc.

You may use any and all resources at your disposal...except the "phone-a-friend" option.  Please do this exercise on your own.  If you utilize a third party, that fact _will_ surface in the end, and we'd all prefer that not happen.

The goal here is not perfection.  Depending on your skill level, the goal may not even be _completion_ (in the amount of time granted for the exercise - typically one to three days depending on circumstances).  The goal is for us to evaluate your problem-solving skills - your ability to leverage your knowledge at the tools at hand to solve approximations of business problems within a bounded context.  

The question is not whether you are perfect, or how clever you are...it is, can you accept a task; quickly understand the requirements; assess current-state; and implement a solution within current-state which satisfies the requirements to the letter.  Your ability to do so is absolutely paramount to your success in a job here at Quest, so it's what we're checking.

Feel free to use any public libraries at your disposal, as long as the end product doesn't have any vulnerabilities greater than LOW.

Anyone with Node running on their machine should be able to take the zip file you provide, unzip it, run `npm install` and `npm run dev` within the `app` directory, and see exactly what you do.  Period.

> **_Note_:**
> The expectations for you will vary depending on the position you are applying to, as alluded to above.
>
> For instance, if you are being considered for an *Associate Software Engineer* role, the expectation is that you will be able to produce a solution which captures the basics of: writing an API to read and write data; creating UI components to meet as many of the requirements as possible; and taking your best shot at figuring out a decent implementation of those requirements when the implementation is not dictated.  
> 
> We won't be judging your directory structures, your CSS very harshly, whether you chose a "good" implementation of a given action, and so on.  Your error handling doesn't need to be pristine.  You aren't expected to know the "best" way of doing anything at all.  Unless you are told otherwise, you won't even be judged on whether you have met _all_ the requirements.  You _will_ be judged on whether you've at least taken a _shot_ at meeting all the requirements, and that the application serves the most basic of needs.
>
> If you are applying for a *Senior* (or "higher") role, the expectations for _you_ will be very different.  Our expectation is that by this point in your career, you have a pretty decent handle on best practices; good visual layouts; code structure to facilitate concurrent development workstreams; good error handling practices; clean and performant CSS; data validation and validation failure representations; making UI choices which will lend a hand towards creating an efficient and friendly user experience; etc.  You should understand potential concurrency issues in your IO.  You should have a good idea of how to produce a common error display/reporting framework, how to define error responses in an OpenAPI spec, how to manage user-context JWTs within a session, and so on.  
>
> That being the case...a Senior application will **most certainly** be judged on whether his or her solution satisfied each and every "business requirement" below.
>
> In all cases the exercise is open-ended.  First and foremost, show you can perform the task.  In addition, you may also elect to showcase your particular talents, skills, or expertise...but always bear in mind, on the job you'll be judged based on whether you can do specifically what's demanded of you as the fundamental expectation...and how far you go beyond that will be a function of your passion and your experience.

## The "Problem"

### The "Big Picture"
You work for a small company which does not yet have an HRIS (human resources information systems) software package.  They need a simple way to track jobs they are posting, candidates who make it into the system, which jobs they have applied for, and whether they got the job or were turned away.

You're going to build an application to do just this (or a very simplistic version of it).  You won't have to worry about authentication or authorization.  You won't have to worry about massive horizontal scaling demands.  You won't have to worry about building out a seriously kickass look-and-feel.  You'll (primarily) be judged on: (1) whether your solution met the requirements, (2) could we run it as above, and (3) basic code quality and standard techniques.  If you are applying for a primarily front-end gig, then we'll be a bit more harsh on the user experience than if you're looking at a primarily back-end opening...so just use your discretion.

### Data Access
Such an app would typically utilize a database as the persistence mechanism (from a terminal service layer).  If you would like to add your own mongodb or mysql database and use a connection to that, feel free...but that won't exempt you from the requirement that `npm install` should get this thing running end-to-end, and you'd also need to add scripting which would provision a server, etc, etc.  What we recommend _instead_ is that you utilize the contents of the `./app/data` directory as a datastore itself.  Treat the JSON files we include as "tables" or "collections" of a sort, read data from them and write data to them.  This will also demonstrate that you can handle basic IO tasks in node.

### API
Obviously you'll need to give your browser-rendered app a means by which it can read from and write to this "data store"...and that's where APIs come in.  You'll need to write API endpoints which will do exactly that.  It's not required, but bonus points if you throw an OpenAPI spec around your API...we live and breath spec-first development.  (Suggestion: Don't try and collect your brownie points until you get the rest of this pretend app up and running...but that said, it's ultimately your call.)

We've added one endpoint for you: a POST to _simulate_ a simple authentication endpoint, which will return a static, pre-encoded JWT.  It won't care what you send, it's going to give you the same thing back.  *If* you would like to show that you know something about JWTs, you can show the current user's nickname in the app...but absolutely not required.

### Front End
Now on to the webapp.  The basics are pretty simple.  You need to be able to view a list of open positions; add an open position; remove a posting from public listing and re-instate it; perhaps change the content which is posted.  External users should, in theory, be able to apply from some public app/listing site/whatever; but in this case, we'll just support the ability to add new candidates and let them "apply" for jobs through this UI.

Slightly more detailed requirements follow.

#### Job Openings List View
From the "Jobs" view you must be able to:
- View a list of all reqs (you'll find a placeholder in the app for this list called "reqs-list" - find it).  Fields to display in list: `req_number`, `title`, active, `status`, `posted_on`, filled on, and the number of candidates who have applied.  You'll notice that some are not formatted as code.  That is because these are derived fields, and you'll need to figure out how you'll provide that data.
- Show only active reqs
- Sort list by date posted
- Close a req and re-open it (not the same as "fill" it) directly from the list entry/row.
- Open a list item to a details / edit view.
- Edit the req _if it should be editable_ ... take your best guess at figuring that one out.
- Have a means of creating a new req

#### Job Details View
From the "Job Details" view - up to you to create this one, however you wish to - you must be able to:
- Modify details of an editable (again, best guess at what that means) job posting or save a new posting.  Modifiable details: `title`, `budgeted_salary`, `job_description`, and whether or not the job is open (this could be presence or absence of an action button, changing a dropdown list, whatever)
- *View A LIST OF THE CANDIDATES WHO HAVE APPLIED FOR THE JOB, with the ability to mark the job as "filled" by a specific candidate directly from that list*

#### Applicant List View
From the "Applicants" view you must be able to:
- View a list of all candidates/applicants in the system
- Sort the list by `last_name`
- See which jobs each candidate has applied for _directly in the list_ - suggest you show the `req_number`(s) there, but your call.
- A means to enter the flow to create a new candidate/applicant entry.
- Ability to access applicant details from the list

#### Applicant Details View
On the Applicant Details view you must be able to:
- Save a new candidate being created (we have to add this ability to emulate a new applicant entering the system after all) .  
- Must be able to collect required fields `first_name`, `last_name`, and `email`; as well as the optional fields `resume_body`, `desired_salary` and `weeks_required_notice`
- Ability to apply for an _available_ job (take your best guess as to what "available" means in this case).  Implementation of this functionality is limited only by your creativity!  (Junior Applicants: If you're stumped here, just try a button which toggles a div, in which you can select an available job from a list and click OK to save.)
- Displays all of the jobs for which the applicant has applied (bonus: add the ability to withdraw an application for one of those jobs)





