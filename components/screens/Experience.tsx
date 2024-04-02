import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import Image, { StaticImageData } from 'next/image';
import { experiences } from '@/data/experienceData';

interface ExperienceCardProps {
    icon: string | StaticImageData;
    title: string;
    company_name: string;
    date: string;
    points: string[]
    iconBg: string
}

const ExperienceCard = ({ icon, title, company_name, date, points, iconBg }: ExperienceCardProps) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ backgroundColor: '#000', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #000' }}
            date={date}
            iconStyle={{ background: iconBg }}
            icon={<div className='flex justify-center items-center w-full h-full'>
                <Image
                    src={icon}
                    alt={company_name}
                    className='object-contain'
                    style={{ borderRadius: '50%' }}
                />
            </div>}
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >{company_name}</p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {
                    points.map((point, index) => (
                        <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
                    ))
                }
            </ul>
        </VerticalTimelineElement>
    )
}

export const Experience = () => {
    return (
        <div className="mt-20 flex flex-col">
            <VerticalTimeline lineColor='#000'>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </VerticalTimeline>
        </div>
    )
}