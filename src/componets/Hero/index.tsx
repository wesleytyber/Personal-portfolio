import React from "react";

import { LeftSection, Section, SectionTitle, SectionText, Button, SectionFlex, ButtonLearn, } from "./styles";

const Hero: React.FC = () => {
    return (
        <Section>
            <SectionFlex>
                <LeftSection>
                    <SectionTitle>Welcome to <br />My Personal Portfólio</SectionTitle>
                    <SectionText>Lorem ipsum dolor, sit amet elit. Dicta non atque quisquam a aspernatur consequatur accusantium.</SectionText>
                    <Button>
                        <ButtonLearn>Learn More</ButtonLearn>
                    </Button>
                </LeftSection>
            </SectionFlex>
        </Section>
    );
};

export default Hero;
