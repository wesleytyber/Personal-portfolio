import React from "react";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaGitSquare, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextDotJs, SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import TechItem from "../Technologies/TechItem";
import * as S from "./styles";

const Marquee: React.FC = () => {
  return (
    <S.Container>
      <div className="marquee">
        <ul className="marquee-content">
          <li>
            <TechItem title="HTML" icon={<AiFillHtml5 />} />
          </li>
          <li>
            <TechItem title="CSS" icon={<FaCss3Alt />} />
          </li>
          <li>
            <TechItem title="React.JS/RN" icon={<FaReact />} />
          </li>
          <li>
            <TechItem title="Next.JS" icon={<SiNextDotJs />} />
          </li>
          <li>
            <TechItem title="Javascript" icon={<IoLogoJavascript />} />
          </li>
          <li>
            <TechItem title="Typescript" icon={<SiTypescript />} />
          </li>
          <li>
            <TechItem title="Github" icon={<AiFillGithub />} />
          </li>
          <li>
            <TechItem title="Git" icon={<FaGitSquare />} />
          </li>
          <li>
            <TechItem title="GraphQL" icon={<GrGraphQl />} />
          </li>
          <li>
            <TechItem title="HTML" icon={<AiFillHtml5 />} />
          </li>
          <li>
            <TechItem title="CSS" icon={<FaCss3Alt />} />
          </li>
          <li>
            <TechItem title="React.JS/RN" icon={<FaReact />} />
          </li>
          <li>
            <TechItem title="Next.JS" icon={<SiNextDotJs />} />
          </li>
        </ul>
      </div>
    </S.Container>
  );
};

export default Marquee;
