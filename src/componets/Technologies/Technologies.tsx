import React from "react";
import * as S from "./styles";
import Marquee from "../Marquee";

const Technologies: React.FC = () => (
  <S.Section id="tech">
    <S.SectionTitle title="knowledge">Technologies</S.SectionTitle>

    <S.SectionContent>
      <li>
        <S.SectionTech>Front-End</S.SectionTech>
        <S.SectionSkill>
          Experience with <br /> HTML - CSS - Javascript - Typescript
        </S.SectionSkill>
        <S.SectionSkill>
          Frameworks <br /> Next.js - React.js - Vue.js
        </S.SectionSkill>
        <S.Divider />
      </li>
      <li>
        <div>
          <S.SectionTech>Back-End</S.SectionTech>
          <S.SectionSkill>
            Experience with <br />
            Node.js (Basic level)
          </S.SectionSkill>
          <S.SectionSkill>
            Framework <br />
            Express.js
          </S.SectionSkill>
          <S.Divider />
        </div>
      </li>
      <li>
        <div>
          <S.SectionTech>Mobile</S.SectionTech>
          <S.SectionSkill>
            Experience with <br />
            React Native
          </S.SectionSkill>
          <S.SectionSkill>
            {" "}
            Dev tools
            <br /> Expo CLI
          </S.SectionSkill>
          <S.Divider />
        </div>
      </li>
    </S.SectionContent>
    <Marquee />

    <S.Divider />
  </S.Section>
);

export default Technologies;
