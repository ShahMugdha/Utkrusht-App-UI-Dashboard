'use client';

import { AssessmentCard } from './assessment-card';

interface PaginationDot {
  active: boolean;
}

interface AssessmentSectionProps {
  paginationDots: PaginationDot[];
}

export function AssessmentSection({ paginationDots }: AssessmentSectionProps) {
  const assessments = [
    {
      title: 'Node.js Assessment',
      image: '/figmaAssets/assessment.png',
      difficulty: 'Intermediate',
    },
    {
      title: 'React Assessment', 
      image: '/figmaAssets/assessment-1.png',
      difficulty: 'Advanced',
    },
    {
      title: 'MongoDB Assessment',
      image: '/figmaAssets/assessment-2.png', 
      difficulty: 'Beginner',
    },
  ];

  return (
    <section className="mt-10 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-base text-[#000000cc] ml-10">
          Recommended Assessments
        </h2>
        <div className="flex items-center gap-2 mr-8">
          <span className="font-normal text-sm text-[#4b4b4b]">
            Sorted by verified skills and aspirations
          </span>
          <span className="font-medium text-sm text-primary cursor-pointer hover:underline">
            View All (24)
          </span>
        </div>
      </div>

      {/* Assessment cards */}
      <div className="flex gap-8 px-8 justify-center">
        {assessments.map((assessment, index) => (
          <AssessmentCard
            key={index}
            title={assessment.title}
            image={assessment.image}
            difficulty={assessment.difficulty}
            onTakeAssessment={() => console.log(`Take ${assessment.title}`)}
          />
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-4 mt-4 mb-8">
        {paginationDots.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
              dot.active ? 'bg-[#4b4b4b]' : 'bg-[#4b4b4b33] hover:bg-[#4b4b4b66]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}