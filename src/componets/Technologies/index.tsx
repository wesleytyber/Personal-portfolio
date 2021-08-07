import React from 'react';

import {
  Section,
  SectionTitle,
  SectionText,
  SectionContent,
  SectionTech,
  SectionSkill,
  Divider,

} from './styles';

const Technologies: React.FC = () => {
  return (
    <Section id="tech" >
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Currently focused on Front-End development.
      </SectionText>
      <SectionContent>
        <li>
          <SectionTech>Front-End</SectionTech>
          <SectionSkill>Experience with <br /> HTML - CSS - Javascript - Typescript</SectionSkill>
          <SectionSkill>Frameworks <br /> Next.js -  React.js - Vue.js </SectionSkill>
            <Divider />
        </li>
        <li>
          <div>
            <SectionTech>Back-End</SectionTech>
            <SectionSkill>Experience with <br />Node.js (Basic level)</SectionSkill>
            <SectionSkill>Framework <br />Express.js</SectionSkill>
            <Divider />
          </div>
        </li>
        <li>
          <div>
            <SectionTech>Mobile</SectionTech>
            <SectionSkill>Experience with <br />React Native</SectionSkill>
            <SectionSkill> Dev tools<br /> Expo CLI</SectionSkill>
            <Divider />
          </div>
        </li>
      </SectionContent>
    </Section>
  )
}

export default Technologies;