
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeLink, setResumeLink] = useState("");
//   const [isApplyButtonActive, setIsApplyButtonActive] = useState(true);


  const authInfo = useContext(AuthContext);

  useEffect(() => {
    fetch("https://job-nest-server.vercel.app/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch user's name and email from your AuthContext
    if (authInfo.user) {
      setName(authInfo.user.displayName);
      setEmail(authInfo.user.email);
    }
  }, [authInfo.user]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  };

  const jobDetails = jobs.find((job) => job._id === id);

if (!jobDetails) {
  // Handle the case when jobDetails is undefined (e.g., job not found)
  return <div>Job not found or an error occurred.</div>;
}

  // Check if the current date is greater than the application deadline
  const isApplicationDeadlineOver = Date.now() > new Date(jobDetails.applicationDeadline).getTime();

  // Check if the logged-in user is the employer
  const isEmployer = jobDetails.userEmail === email;

  // Determine if the "Apply" button should be active
    const isButtonActive = !isApplicationDeadlineOver && !isEmployer;
 
    const submitApplication = () => {
    // Prevent applying if the deadline is over or if the user is the employer
    if (isApplicationDeadlineOver || isEmployer) {
      return;
    }

    const applicationData = {
      name,
      email,
      resumeLink,
      jobId: jobDetails._id,
      jobBannerURL: jobDetails.jobBannerURL,
      jobTitle: jobDetails.jobTitle,
      jobCategory: jobDetails.jobCategory,
      salaryRange: jobDetails.salaryRange,
      jobPostingDate: jobDetails.jobPostingDate,
      applicationDeadline: jobDetails.applicationDeadline,
      jobApplicantsNumber: jobDetails.jobApplicantsNumber,

    };

    fetch("https://job-nest-server.vercel.app/appliedJobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Application submitted:", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Application submitted successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
        closeModal();
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
              <title>JobNest | Job Details</title>
            </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img src={jobDetails.jobBannerURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-3">
            <h1 className="text-5xl font-bold mb-5">{jobDetails.jobTitle}</h1>
            <h1 className=" "><span className="text-xl font-bold">Job Type:</span> <span className="text-lg"> {jobDetails.jobCategory} </span></h1>
            <h1 className=""><span className="text-xl font-bold">Job Posting Date:</span> <span className="text-lg">{formatDate(jobDetails.jobPostingDate)}</span></h1>
            <h1 className=""><span className="text-xl font-bold text-red-500">Deadline:</span> <span className="text-lg">{formatDate(jobDetails.applicationDeadline)}</span></h1>
            <h3 className=""><span className="text-xl font-bold">Salary Range:</span> <span className="text-lg">{jobDetails.salaryRange}</span></h3>
            <p className="py-6 text-justify">{jobDetails.jobDescription}</p>
             {/* Conditionally render the "Apply" button and messages */}
          {isButtonActive ? (
            <button onClick={openModal} className="btn btn-primary">
              Apply
            </button>
          ) : (
            <div>
              <button className="btn btn-disabled" disabled>
                Apply (Inactive)
              </button>
              {isApplicationDeadlineOver ? (
                <p>Application Deadline has passed. You can no longer apply for this job.</p>
              ) : isEmployer ? (
                <p>You are the employer of this job. You cannot apply for your own job.</p>
              ) : null}
            </div>
          )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-2xl">Submit Your Application</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" value={name} disabled className="input" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" value={email} disabled className="input" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume Link</span>
              </label>
              <input
                type="text"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
                className="input"
              />
            </div>
            <div className="modal-action">
              <button onClick={submitApplication} className="btn btn-primary">
                Submit Application
              </button>
              <button onClick={closeModal} className="btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
