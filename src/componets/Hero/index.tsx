import React from "react";

import { LeftSection, Section, SectionTitle, SectionText, Button, SectionFlex, ButtonLearn, } from "./styles";

const Hero: React.FC = () => {
    return (
        <Section>
            <SectionFlex>
                <LeftSection>
                    <SectionTitle>Welcome to <br />My Personal Portfólio</SectionTitle>
                    <SectionText>
                        Working on developing performance web applications and focusing on user experience
                    </SectionText>
                    <Button>
                        <ButtonLearn>Learn More</ButtonLearn>
                    </Button>
                </LeftSection>
            </SectionFlex>
        </Section>
    );
};

export default Hero;
