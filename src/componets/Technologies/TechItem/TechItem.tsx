import { ReactNode } from "react";
import * as S from "../../Technologies/styles";

interface IKnowledgeProps {
  title: string;
  icon: ReactNode;
}

const TechItem = ({ title, icon }: IKnowledgeProps) => {
  return (
    <S.KnowledgeContainer>
      <p>{title}</p>
      {icon}
    </S.KnowledgeContainer>
  );
};

export default TechItem;
