import React from "react";
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {
    FooterContainer,
    FooterText,
    FooterCell,
    FooterMail,
    Content,
    FooterSocial,
} from "./styles";


const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Content>
                <FooterCell>
                    Call
                    <FooterText>
                        <a href="tel:(11) 95470-3688">(11) 95470-3688</a>
                    </FooterText>
                </FooterCell>
                <FooterMail>
                    Mail
                    <FooterText>
                        <a href="mailto:wesleytyber@gmail.com">wesleytyber@gmail.com</a>
                    </FooterText>
                </FooterMail>
            </Content>
            <FooterSocial>
                <Link href="https://github.com/wesleytyber">
                    <a>
                        <AiFillGithub size="2rem" />
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/wesley-calazans" >
                    <a>
                        <AiFillLinkedin size="2rem" />
                    </a>
                </Link>
                <Link href="https://www.instagram.com/wesleyczans/" >
                    <a>
                        <AiFillInstagram size="2rem" />
                    </a>
                </Link>
            </FooterSocial>
        </FooterContainer>
    )
};

export default Footer;
