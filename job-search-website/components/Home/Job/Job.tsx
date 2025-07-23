import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'



const jobs = [
    {
        id:1,
        image: "/images/j1.png",
        title: "Software Engineer",
        location: "London, UK",
        jobType: "Full Time",
        urgency: "Urgent",
    },
    {
        id:2,
        image: "/images/j2.png",
        title: "Recruiting Coordinator",
        location: "Manchester, UK",
        jobType: "Part Time",
        urgency: "Urgent",
    },
    {
        id:3,
        image: "/images/j3.png",
        title: "Project Manager, Studio",
        location: "Birmigham, UK",
        jobType: "Contract",
        urgency: "Urgent",
    },
    {
        id:4,
        image: "/images/j4.png",
        title: "Senior Product Designer",
        location: "Bristol, UK",
        jobType: "Full Time",
        urgency: "Urgent",
    },
    {
        id:5,
        image: "/images/j5.png",
        title: "Product Manager, Risk",
        location: "Edinburgh, UK",
        jobType: "Contract",
        urgency: "Private",
    },
    {
        id:6,
        image: "/images/j6.png",
        title: "Techanical Architect",
        location: "Leeds, UK",
        jobType: "Full Time",
        urgency: "Private",
    },
    {
        id:7,
        image: "/images/j7.png",
        title: "Web Developer",
        location: "Brighton, UK",
        jobType: "Part Time",
        urgency: "Urgent",
    },
    {
        id:8,
        image: "/images/j8.png",
        title:"Senior Product Designer",
        location: "Glassgow, UK",
        jobType: "Contract",
        urgency: "Private",
    },
    {
        id:9,
        image: "/images/j9.png",
        title:"Senior BI Analyst",
        location: "Sheffield, UK",
        jobType: "Full Time",
        urgency: "Private",
    },
]



function Job() {
  return (
    <div className='py-16'>
        <SectionHeading heading='Featured Jobs' subHeading='Know your worth and find the jobs that qualify your life'/>
        <div className='w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
            {jobs.map((job)=>(
                <div key={job.id}>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Job