import React from "react";
import {
  Section,
  Divider,
  SectionText,
  SectionTitle,
  SectionYear,
  SectionContent,
  SectionTimeline,
  Carousel,
  CarouselText,
} from "./styles";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        migrating careers, and seeking every day more knowledge and skills, to
        be always up to date with each new stack.
      </SectionText>
      <SectionContent>
        <SectionTimeline>
          <Carousel>
            <SectionYear>2020</SectionYear>
            <CarouselText>Started my journey</CarouselText>
          </Carousel>
        </SectionTimeline>
      </SectionContent>
      <Divider />
    </Section>
  );
};

export default Timeline;
