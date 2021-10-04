import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as S from "./styles";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Div1>
        <Link href="/">
          <a>
            <S.NavLink>Wesley Calazans</S.NavLink>
          </a>
        </Link>
      </S.Div1>
      <S.Div2>
        <li>
          <Link href="/projects">
            <a>
              <S.NavLink title="Projects">Projects</S.NavLink>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <a>
              <S.NavLink>Technologies</S.NavLink>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a>
              <S.NavLink>About</S.NavLink>
            </a>
          </Link>
        </li>
      </S.Div2>
      <S.Div3>
        <S.SocialIcons>
          <Link href="https://github.com/wesleytyber">
            <a>
              <AiFillGithub size="2rem" />
            </a>
          </Link>
        </S.SocialIcons>
        <S.SocialIcons>
          <Link href="https://www.linkedin.com/in/wesley-calazans">
            <a>
              <AiFillLinkedin size="2rem" />
            </a>
          </Link>
        </S.SocialIcons>
        <S.SocialIcons>
          <Link href="https://www.instagram.com/wesleyczans">
            <a>
              <AiFillInstagram size="2rem" />
            </a>
          </Link>
        </S.SocialIcons>
      </S.Div3>
    </S.HeaderContainer>
  );
};

export default Header;
