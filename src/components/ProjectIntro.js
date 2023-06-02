import React from 'react'

function ProjectIntro(props) {

    const project = props.project;
    console.log(props.project);

    const startdate = props.project.token_sale_starts;
    const enddate = props.project.token_sale_ends;

    const startDate = new Date(startdate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC' });
    const endDate = new Date(enddate).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC' });

    return (
        <div>
            <div>
                <div className='mt-6 '>
                    <h2 className='text-[#f38010] text-xl mb-2 font-bold'>
                        Subscription Timeline
                    </h2>
                    <div className='flex items-center gap-2 mt-2 mb-1'>
                        <div className='bg-[#f38010] rounded-full p-1 w-6 h-6 flex items-center justify-center'>
                            <p className='text-sm'>1</p>
                        </div>
                        <div className=''>
                            <h6 className='text-xs font-bold'>
                                {project.status}
                            </h6>
                            <p className='text-[10px]'>
                               {startDate} UTC
                            </p>
                        </div>
                    </div>
                    <span className='h-6 w-[1px] border-r border-[#f38010]  ml-3'></span>
                    <div className='flex items-center gap-2 mt-1'>
                        <div className='bg-[#9B9BB0] rounded-full p-1 w-6 h-6 flex items-center justify-center'>
                            <p className='text-sm'>2</p>
                        </div>
                        <div className=''>
                            <h6 className='text-xs font-bold'>
                                Token Sale
                            </h6>
                            <p className='text-[10px]'>
                                {endDate} UTC
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='mt-4 text-[#f38010] text-xl mb-2 font-bold'>
                        {project.project_name} Introduction
                    </h2>
                    <ul className='list-disc'>
                        <li className='text-xs mb-2 font-light text-justify'>
                            {project.description}
                        </li>
                    </ul>
                </div>


                <div>
                    <h2 className='mt-4 text-[#f38010] text-xl mb-2 font-bold'>Roadmap</h2>
                    <ul className='list-disc'>
                        <li className='text-xs mb-2 font-light text-justify'>
                            {project.roadmap}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectIntro;