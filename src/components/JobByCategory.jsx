import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

const JobByCategory = () => {
    const [jobs, setJobs] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        // Fetch job data from your MongoDB API using AXIOS
        axios.get('https://job-nest-server.vercel.app/jobs')
            .then((response) => {
                setJobs(response.data);
            })
            .catch((error) => {
                console.error('Error fetching job data: ', error);
            });
    }, []);

    const calculateTimeElapsed = (postingDate) => {
        return formatDistanceToNow(new Date(postingDate), { addSuffix: true });
    };

    const formatDate = (date) => {
        const formattedDate = new Date(date).toISOString().split('T')[0];
        return formattedDate;
    };

    // Define an array of tab titles
    const tabTitles = ['All Jobs', 'On Site', 'Remote', 'Hybrid', 'Part-Time'];
    //w-[1200px] mx-auto
    return (
        <div className=' bg-[#f2f2f2]'>
            <div className='pt-16'>
                <h1 className='text-4xl font-bold text-center mb-20'>Current Jobs</h1>
            </div>
            <div className=''>
                <Tabs>
                    <div >
                        <TabList className="flex gap-6 items-center justify-center mb-10 lg:w-1/2 mx-auto bg-white p-6">
                            {tabTitles.map((title, index) => (
                                <Tab
                                    key={index}
                                    className={`hover:bg-gray-500 border p-4 shadow-xl ${activeTab === index ? '' : 'bg-[#8c5ad1]'
                                        }`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {title}
                                </Tab>
                            ))}
                        </TabList>
                    </div>
                    {tabTitles.map((title, index) => (
                        <TabPanel key={index}>
                            <div className='w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                {jobs
                                    .filter((job) => {
                                        if (index === 0) return true; // Show all jobs on the first tab
                                        return job.jobCategory === title;
                                    })
                                    .map((job, jobIndex) => (
                                        <div className="border" key={jobIndex}>
                                            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center bg-base-100 shadow-xl p-3">
                                                <div className='w-full mx-auto'><img src={job.jobBannerURL} alt={job.jobTitle} className='w-1/2 lg:w-2/3' /></div>
                                                <div className='lg:col-span-3 grid  lg:grid-cols-3 justify-center items-center'>
                                                <div className='col-span-2'>
                                                    <h2 className="card-title">{job.jobTitle}</h2>
                                                    <p>Posting Date: {formatDate(job.jobPostingDate)}{' '}
                                                        <span>({calculateTimeElapsed(job.jobPostingDate)})</span></p>
                                                    {/* <p>Deadline: {formatDate(job.applicationDeadline)}</p>
                                                    <p>Salary Range: {job.salaryRange}</p> */}

                                                </div>
                                               
                                                    <div className="card-actions">
                                                        <Link to={`/job/${job._id}`}>
                                                            <button className="btn bg-[#8c5ad1] text-sm px-4"> Details</button>
                                                            
                                                        </Link>
                                                        <button className="btn bg-[#8c5ad1] text-sm ">{job.jobCategory} </button>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                            {/* <p>Category: {job.jobCategory}</p>
                      <p>Logged In User: {job.loggedInUserName}</p>
                      <p>Title: {job.jobTitle}</p>
                      <p>Posting Date: {formatDate(job.jobPostingDate)}{' '}
                      <span>({calculateTimeElapsed(job.jobPostingDate)})</span>
                      </p>
                      <p>Deadline: {formatDate(job.applicationDeadline)}</p>
                      <p>Salary Range: {job.salaryRange}</p>
                      <p>Applicants: {job.jobApplicantsNumber}</p>
                      <Link to={`/job/${job._id}`}>
                        <button className="btn">View Details</button>
                      </Link> */}
                                        </div>
                                    ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default JobByCategory;

