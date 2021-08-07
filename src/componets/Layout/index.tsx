import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Head from 'next/head';
import { LayoutContainer } from './styles';

const Layout: React.FC = ({ children }) => {

    return (
        <LayoutContainer>
            <Head>
                <title>
                    Portfólio
                </title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer></Footer>
        </LayoutContainer>
    )
}

export default Layout;