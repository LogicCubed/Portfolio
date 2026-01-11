import ProfileHeader from "@/components/profile-header";
import SectionCard from "@/components/ui/section-card";

export default function Home() {
  return (
    <div className="mb-50">
      <div className="flex justify-center items-center h-auto py-6">
        <ProfileHeader />
      </div>

      <div className="w-[80%] h-px bg-slate-600 my-6 mb-20 mx-auto"></div>

      <div className="flex flex-col items-center">

        <div className="w-4/5 md:w-[50%] bg-slate-800 p-6 text-left rounded-2xl mb-8">
          <h1 className="text-white text-3xl font-extrabold mb-6">Education</h1>
          <SectionCard
            image="/images/logos/csuf_logo.png"
            alt="CSUF"
            title="California State University, Fullerton"
            subtitle="B.S. in Computer Science, Entrepreneurship Minor, Honor Roll"
            date="Aug 2023 – May 2027"
            description="Bachelor’s program focused on computer science theory with software engineering, algorithms, and systems 
                        with applied work in entrepreneurship involving startup funding, marketing, and finance. Consistent academic 
                        performance reflected by Honor Roll recognition."
          />
        </div>

        <div className="w-4/5 md:w-[50%] bg-slate-800 p-6 text-left rounded-2xl mb-8">
          <h1 className="text-white text-3xl font-extrabold mb-6">Experience</h1>
          <SectionCard
            image="/images/logos/soft_school_logo.png"
            alt="Soft School"
            title="Soft School"
            subtitle="Co-Founder, CTO"
            date="June 2025 – Present"
            description='Co-Founder and Lead Developer of startup titled "Soft School" - a program dedicated towards the teaching and 
                        improvement of social "soft skills" amongst youth, addressing deficits amplified by technology, social media, 
                        and the social isolation caused by the COVID-19 pandemic.'
          />
          <SectionCard
            image="/images/logos/sketchfab_logo.png"
            alt="Sketchfab"
            title="3D Modeler"
            subtitle="Freelance & Commissions"
            date="June 2022 – Present"
            description='Designed and modeled 3D products of varying styles using programs such as Blockbench and Blender. This process 
                        involved the negotiation of prices on a case-by-case basis per client, and marketing of assets to become a vendor
                        on higher-traffic sites such as "MCModels"'
          />
          <SectionCard
            image="/images/logos/euphaurix_logo.png"
            alt="Euphaurix"
            title="Euphaurix"
            subtitle="Creative Team Lead"
            date="May 2021 – Apr 2023"
            description="Managed a small team of low-poly 3D modelers and digital artists to coordinate content with developers to 
                        create e-sports themed game experiences. At age 15, this role introduced me to collaborative workflows and
                        team coordination"
          />
        </div>

        <div className="w-4/5 md:w-[50%] bg-slate-800 p-6 text-left rounded-2xl mb-8">
          <h1 className="text-white text-3xl font-extrabold mb-6">Languages</h1>
          <SectionCard
            image="/images/flags/us_flag.png"
            alt="English"
            title="English"
            subtitle="Native proficiency"
          />
          <SectionCard
            image="/images/flags/ph_flag.png"
            alt="Philippines"
            title="Tagalog"
            subtitle="Professional working proficiency"
          />
          <SectionCard
            image="/images/flags/fr_flag.png"
            alt="France"
            title="French"
            subtitle="Limited working proficiency"
          />
          <SectionCard
            image="/images/flags/jp_flag.png"
            alt="Japan"
            title="Japanese"
            subtitle="Elementary proficiency"
          />
        </div>

      </div>


    </div>
  );
}