import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Update = () => {
    const {user} = useContext(AuthContext);
    const loadedData = useLoaderData();
    const [jobPostingDate, setJobPostingDate] = useState(null);
    const [applicationDeadline, setApplicationDeadline] = useState(null);


    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const jobBannerURL = form.jobBannerURL.value;
        const jobTitle = form.jobTitle.value;
        const loggedInUserName = form.loggedInUserName.value;
        const jobCategory = form.jobCategory.value;
        const salaryRange = form.salaryRange.value;
        const jobDescription = form.jobDescription.value;
        const jobApplicantsNumber = form.jobApplicantsNumber.value;
      
        const userEmail = user ? user.email : null;
        const updatedJob = {
          jobBannerURL,
          jobTitle,
          loggedInUserName,
          jobCategory,
          salaryRange,
          jobDescription,
          jobPostingDate,
          applicationDeadline,
          jobApplicantsNumber,
          userEmail, // Add the user's email to the new job data
        };
      
        console.log(updatedJob);
        // Send the new job data to the server for storage
        fetch(`https://job-nest-server.vercel.app/jobs/${loadedData._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedJob),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              Swal.fire({
                title: "Success!",
                text: "Information Updated successfully",
                icon: "success",
                confirmButtonText: "ok",
              });
            
            }
          });
      };
      
    
      return (
        
          <div>
            <Helmet>
              <title>JobNest | Update Jobs</title>
            </Helmet>
            <h2 className="text-xl text-center">Update Jobs</h2>
            <form
              onSubmit={handleUpdate}
              className="card-body md:w-3/4 lg:w-1/2 mx-auto"
            >
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="jobBannerURL"
                  placeholder="Image URL"
                  className="input input-bordered"
                  defaultValue={loadedData?.jobBannerURL}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  className="input input-bordered"
                  defaultValue={loadedData?.jobTitle}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Posted By</span>
                </label>
                <input
                  type="text"
                  name="loggedInUserName"
                  placeholder="Posted By"
                  className="input input-bordered"
                  defaultValue={loadedData?.loggedInUserName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Category</span>
                </label>
                <input
                  type="text"
                  name="jobCategory"
                  placeholder="Job Category"
                  className="input input-bordered"
                  defaultValue={loadedData?.jobCategory}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Salary</span>
                </label>
                <input
                  type="text"
                  name="salaryRange"
                  placeholder="Salary"
                  className="input input-bordered"
                  defaultValue={loadedData?.salaryRange}
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Description</span>
                </label>
                <input
                  type="text"
                  name="jobDescription"
                  placeholder="Job Description"
                  className="input input-bordered"
                  defaultValue={loadedData?.jobDescription}
                  required
                />
               
              </div>
              <div className="form-control">
  <label className="label">
    <span className="label-text">Job Posting Date</span>
  </label>
  <DatePicker
  selected={jobPostingDate || (loadedData?.jobPostingDate && new Date(loadedData.jobPostingDate))}
  onChange={(date) => setJobPostingDate(date)}
  className="input input-bordered"
  required
/>
</div>

<div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <DatePicker
  selected={applicationDeadline || (loadedData?.applicationDeadline && new Date(loadedData.applicationDeadline))}
  onChange={(date) => setApplicationDeadline(date)}
  className="input input-bordered"
  required
/>
        </div>
              <div className="form-control">
      <label className="label">
        <span className="label-text">Job Applicants Number</span>
      </label>
      <input
        type="text"
        name="jobApplicantsNumber"
        placeholder="Job Applicants Number"
        className="input input-bordered"
        defaultValue={loadedData?.jobApplicantsNumber}

        required
      />
    </div>
    
              <div className="form-control mt-2">
                <button className="btn btn-primary">Update </button>
              </div>
            </form>
          </div>
       
      );
    };

export default Update;