/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import { HeaderContainer, Div1, Div2, Div3, NavLink, SocialIcons } from './styles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Div1>
                <Link href="/">
                    <NavLink>Wesley Calazans</NavLink>
                </Link>
            </Div1>
            <Div2>
                <li>
                    <Link href="#projects">
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#tech">
                        <NavLink>Technologies</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Div2>
            <Div3>
                <SocialIcons>
                    <Link href="https://github.com/wesleytyber">
                        <a>
                            <AiFillGithub size="2rem" />
                        </a>
                    </Link>
                </SocialIcons>
                <SocialIcons>
                    <Link href="https://www.linkedin.com/in/wesley-calazans">
                        <a>
                            <AiFillLinkedin size="2rem" />
                        </a>
                    </Link>
                </SocialIcons>
                <SocialIcons>
                    <Link href="https://www.instagram.com/wesleyczans">
                        <a>
                            <AiFillInstagram size="2rem" />
                        </a>
                    </Link>
                </SocialIcons>
            </Div3>
        </HeaderContainer>

    )
}

export default Header;