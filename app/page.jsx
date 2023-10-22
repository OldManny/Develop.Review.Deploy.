"use client";
import { webDevelopment, appDevelopment, homePageEnd } from '@components/HomeComp/HomeCards/dataCard';
import { Title, TechIcons, Line, LineBubble, DataMapper, CenteredText } from '@components/HomeComp';
import Button from '@components/Button';
import BackToTop from '@components/BackToTop';
import { BiSolidUpArrow } from "react-icons/bi";

const Home = () => {
    return (
        <div>
            <Title />
            <TechIcons />
            
            {/* Web Development Section */}
            <LineBubble 
                roundedBallClass="rounded-ball-web" 
                lineClass="line-web" 
                title="Web Development" // Passing the text "Web Development"
            />
            
            {/* Mapping */}
            <DataMapper data={webDevelopment} />

            {/* Desktop Engineering Section */}
            <div className="pt-32">
                <LineBubble 
                    roundedBallClass="rounded-ball-app" 
                    lineClass="line-app" 
                    title="Desktop Engineering"
                />
            </div>

            {/* Mapping */}
            <DataMapper data={appDevelopment} />
            <Line />

            {/* End Text */}
            <CenteredText as="h2" className="py-12 text-base text-slate-500">
                {homePageEnd.content}
            </CenteredText>
            <CenteredText as="h2" className="pt-12 text-slate-500 font-semibold">
                {homePageEnd.end}
            </CenteredText>
            
            {/* Home Buttons */}
            <div className="flex pb-60 button-wrapper">
                <Button 
                    label="Contact" 
                    href="/contact" 
                    className="home-btn home-btn-contact"
                    icon={BiSolidUpArrow}
                />

                <Button 
                    label="Source Code" 
                    href="https://github.com/your_repo_link" 
                    className="home-btn home-btn-source"
                />
            </div>   
                
            {/* Back To Top */}
            <BackToTop />

        </div>
  );
};

export default Home;






