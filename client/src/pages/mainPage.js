import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import MainBanner from "../components/mainContent/mainBanner"
import DevPicksMainBanner from "../components/mainContent/devPicksMainBanner"
import MainBannerStorySection from "../components/mainContent/mainBannerStorySection"
import Footer from "../components/footer/footer"
class MainPage extends Component {
    render() {
        return (
            <span>
                <Navbar />
                <MainBanner />
                <DevPicksMainBanner />
                <MainBannerStorySection />
                <Footer />
               
            </span>
        )

    }

}

export default MainPage