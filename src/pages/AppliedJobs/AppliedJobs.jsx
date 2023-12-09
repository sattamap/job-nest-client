import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { formatDistanceToNow } from "date-fns";
import { Helmet } from "react-helmet-async";
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFSummary from "./PDFSummary";




const AppliedJobs = () => {
    const [loading, setLoading] = useState(true);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(""); // Add selectedCategory state
    const { user } = useContext(AuthContext);
    

    useEffect(() => {
        fetch(`https://job-nest-server.vercel.app/appliedJobs?email=${user?.email}`,{credentials:'include'})
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((item) => item?.email === user.email);
                if (filteredData.length === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'No Products Available',
                        text: 'There are no products available for this brand.',
                    });
                } else {
                    setAppliedJobs(filteredData);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error("Error fetching carts:", error);
            });
    }, [user]);

    const calculateTimeElapsed = (postingDate) => {
        return formatDistanceToNow(new Date(postingDate), { addSuffix: true });
    };

    const formatDate = (date) => {
        const formattedDate = new Date(date).toISOString().split("T")[0];
        return formattedDate;
    };

    // Filter the appliedJobs based on the selectedCategory
    const filteredJobs = appliedJobs.filter((job) =>
        selectedCategory === "" || job.jobCategory === selectedCategory
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-[1300px] mx-auto mb-48">
            <Helmet>
                <title>JobNest | Applied Jobs</title>
            </Helmet>
            <div className="overflow-x-auto mt-5">
                {/* Select field to filter by category */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="input input-bordered"
                >
                    <option value="">All Categories</option>
                    <option value="On Site">On Site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Part Time">Part Time</option>
                </select>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Type</th>
                            <th>Salary Range</th>
                            <th>Deadline</th>
                            <th>Applicants</th>
                        </tr>
                    </thead>
                    {filteredJobs.map((job) => (
                        <tbody key={job._id}>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={job.jobBannerURL} alt={job.jobTitle} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.jobTitle}</div>
                                            <div className="text-sm opacity-50">
                                                {calculateTimeElapsed(job.jobPostingDate)}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{job.jobCategory}</td>
                                <td>{job.salaryRange}</td>
                                <td>{formatDate(job.applicationDeadline)}</td>
                                <td>{job.jobApplicantsNumber}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>


            </div>
            <button className="btn bg-[#8c5ad1] mt-5">
  <PDFDownloadLink
    document={<PDFSummary appliedJobs={filteredJobs} />}
    fileName="applied-jobs-summary.pdf"
  >
    {({ url, loading }) => {
      if (loading) {
        return 'Generating PDF...';
      } else {
        console.log('PDF URL:', url);
        return 'Download Summary';
      }
    }}
  </PDFDownloadLink>
</button>
            
        </div>
    );
};

export default AppliedJobs;

