import React from 'react';
import Image from 'next/image';
import projectPic from '../../../public/projects.png'
import Link from 'next/link';
import {
    SectionContainer,
    ProjectText,
    ProjectGlobal,
    TitleVegan,
    SectionContent,
    Divider,
    Subtitle,
    Stack,
    StackContent,
    StackList,
} from './styles';

const Projects: React.FC = () => {

    return (
        <SectionContainer id="projects" >
            <ProjectGlobal>
                <ProjectText>Projects</ProjectText>
            </ProjectGlobal>
            <SectionContent>
                <Image src={projectPic} alt="Picture projects" />
                <div>
                    <TitleVegan>Vegan Search</TitleVegan>
                    <Divider />
                    <Subtitle>Using React, with Next JS (FrameWork) + TypeScript, Axios with MongoDB.
                    </Subtitle>
                    <Stack>
                        Stack
                        <StackContent>
                            <StackList>
                                <Link href="https://nextjs.org/">
                                    <a>Next.JS</a>
                                </Link>
                            </StackList>
                            <StackList>
                                <Link href="#">
                                    <a>TypeScript</a>
                                </Link>
                            </StackList>
                        </StackContent>
                    </Stack>
                </div>
            </SectionContent>
        </SectionContainer>
    )
}

export default Projects;