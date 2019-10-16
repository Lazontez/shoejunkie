import React from "react";
import storyCSS from "../../css/mainBanner/storySection.css"

function MainBannerStorySection(props) {
    return (
        <span id="mainBannerStorySection">
            <div style={storyCSS} className="storySection"><h4 className="storySectionHeader">SNEAKER WORLD X POSITIVITY</h4>
                <div style={{"padding":"20px"}}>
                    <h3 className="storyHeadline" style={{"padding":"10px"}}>Carbon Emissions From The Largest Cities Dropping Since Signing Climate Pact</h3>
                    <p style={{"padding":"20px"}}>
                        Austin, Athens, Lisbon, and Venice are the latest major cities to have peaked their greenhouse gas emissions, according to this latest environmental report.
            
            The world’s leading scientists have calculated that global greenhouse gas emissions must peak by 2020 in order to limit global temperature rise to 1.5°C. New analysis published ahead of the C40 World Mayors Summit confirms that 30 of the world’s largest cities, representing more than 58 million urban citizens, have now reached this crucial milestone.
            
            The 30 cities are: Athens, Austin, Barcelona, Berlin, Boston, Chicago, Copenhagen, Heidelberg, Lisbon, London, Los Angeles, Madrid, Melbourne, Milan, Montréal, New Orleans, New York City, Oslo, Paris, Philadelphia, Portland, Rome, San Francisco, Stockholm, Sydney, Toronto, Vancouver, Venice, Warsaw, and Washington, D.C.
            </p>
            <div className="btn btn-danger seeMoreBtn"><a href="https://www.goodnewsnetwork.org/30-largest-cities-have-peaked-carbon-emissions/" target="blank" style={{"color":"black"}}>Read More</a></div>

                </div>
            </div>
        </span>
    )
}
export default MainBannerStorySection