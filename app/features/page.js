"use client"
import Section from "./_components/Section";
import MemberCard from "./_components/MemberCard";
import InvestorCard from "./_components/InvestorCard";
import ApplicantCards from "./_components/ApplicantCards";
import { members } from '../data/members';
import { icons } from '../data/icons';

export default function Page() {


  return (
    <main className="pt-16 px-4">
      <Section
        title="Kickstart an organization with your co-founders"
        description="It's the early days, you just had a long conversation with two friends about a meaningful challenge that you're all passionate about and have a potential solution for. You're ready to embark the startup journey."
      >
        <MemberCard members={members.slice(0, 3)} />
      </Section>

      <Section
        title="Onboard users, investors and advisors as you grow"
        description="You've bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success."
        icon={icons.icon1}
        reverse
      >
        <InvestorCard investor={members[3]} />
      </Section>

      <Section
        title="Engage highly committed contributors"
        description="You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares."
        icon={icons.icon2}
      >
        <ApplicantCards applicants={members.slice(4, 7)} />
      </Section>
    </main>
  )
}

