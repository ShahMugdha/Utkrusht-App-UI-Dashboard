'use client';

import { HelpCircleIcon } from 'lucide-react';
import { JobCard } from './job-card';

export function JobsSection() {
  const jobsUnlockedData = {
    company: 'Clevrr AI',
    title: 'Full Stack Lead',
    jobType: 'Full-time',
    location: 'Pune, Maharashtra',
    postedTime: 'Posted 1 days ago',
    salary: '₹50 - 55 LPA',
    negotiable: 'Open to negotiation',
    isNew: true,
    isAspirational: true,
    skills: [
      { name: 'JavaScript', highlighted: true },
      { name: 'React', highlighted: true },
      { name: 'Node.js', highlighted: false },
      { name: 'MongoDB', highlighted: false },
      { name: '+3 more', highlighted: false },
    ],
    companyLogo: '/figmaAssets/image-2.png',
    backgroundImage: '/figmaAssets/bg-1.svg',
  };

  const jobOpportunityData = {
    company: 'ScaleReal',
    title: 'Frontend Engineer',
    jobType: 'Full-time',
    location: 'Pune, Maharashtra',
    postedTime: 'Posted 1 days ago',
    salary: '₹10 - 15 LPA',
    negotiable: 'Open to negotiation',
    isNew: true,
    isPayLevelUp: true,
    skills: [
      { name: 'JavaScript', highlighted: true },
      { name: 'React', highlighted: true },
      { name: 'Node.js', highlighted: false },
      { name: 'MongoDB', highlighted: false },
      { name: '+3 more', highlighted: false },
    ],
    companyLogo: '/figmaAssets/image-56.png',
    backgroundImage: '/figmaAssets/bg.svg',
  };

  return (
    <div className="space-y-8 px-8">
      {/* Jobs Unlocked Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-base text-[#000000cc] ml-2">
            Jobs Unlocked
          </h2>
          <div className="flex items-center gap-2">
            <span className="font-normal text-sm text-[#4b4b4b]">
              Your 5 opportunities to grab today
            </span>
            <div className="relative w-6 h-6">
              <HelpCircleIcon className="w-5 h-5 absolute top-0.5 left-0.5 text-gray-400" />
            </div>
          </div>
        </div>

        <JobCard
          {...jobsUnlockedData}
          onApply={() => console.log('Apply to', jobsUnlockedData.company)}
        />
      </section>

      {/* Job Opportunities Section */}
      <section>
        <JobCard
          {...jobOpportunityData}
          onApply={() => console.log('Apply to', jobOpportunityData.company)}
        />
      </section>
    </div>
  );
}
