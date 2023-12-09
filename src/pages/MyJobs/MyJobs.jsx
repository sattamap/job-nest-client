

import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const MyJobs = () => {
    
    const [loading, setLoading] = useState(true);
    const [myJobs, setMyJobs] = useState([]);
    const {user} = useContext(AuthContext);

    console.log(myJobs);
    
    useEffect(() => {
        fetch("https://job-nest-server.vercel.app/jobs",)
      .then((response) => response.json())
      .then((data) => {
          const filteredData = data.filter((item) => item?.userEmail === user.email);
          if (filteredData.length === 0) {
              Swal.fire({
                  icon: 'error',
                  title: 'No Products Available',
                  text: 'There are no products available for this brand.',
              });
          } else {
              setMyJobs(filteredData);    
              setLoading(false);
          }
      })
          
     
      .catch((error) => {
          console.error("Error fetching carts:", error);
      });
        
    }, [user?.email]);
    
    if (loading) {
        return <div>Loading...</div>;
    }

    const handleDelete = (_id) =>{
         console.log('want to delete:',_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://job-nest-server.vercel.app/jobs/${_id}`,{
                    method: 'DELETE'
                })
        
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remaining = myJobs.filter(myJob => myJob._id !== _id);
                            setMyJobs(remaining);
                        }
                    })
           
            }
          })
     
        }
        const calculateTimeElapsed = (postingDate) => {
            return formatDistanceToNow(new Date(postingDate), { addSuffix: true });
          };
        
          const formatDate = (date) => {
            const formattedDate = new Date(date).toISOString().split("T")[0];
            return formattedDate;
          };

    return (
     
          
            <div className="overflow-x-auto max-w-[1300px] mx-auto">
            <Helmet>
              <title>JobNest | My Jobs</title>
            </Helmet>
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
          {myJobs.map((job) => (
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
                <th>
                
                    <Link to={`/update/${job._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                    <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-xs">Delete</button>
                  
                </th>
              </tr>
            </tbody>
          ))}
                </table>
            </div>
       
    );
};

export default MyJobs;
