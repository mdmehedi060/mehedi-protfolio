import Title from "./Title";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { MdCastForEducation } from "react-icons/md";
const Educations = () => {
    return (
        <div id="education" className="mt-10 md:mt-0 bg-neutral my-10">
      <Title heading={"My Education"}></Title>

      <VerticalTimeline lineColor={"#70FF00"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2010"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            SSC
          </h3>

          <p>
            In 2010, I completed a Secendoy School Certificate in Science VibekAnanda High School,Tangail.Education Board Dhaka,Danglaedsh.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2014"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
           HSC
          </h3>

          <p>
          In 2014, I completed a Higher Secendoy School Certificate in Science Lion Nazrul Islam Degree College,Tangail.Education Board Dhaka,Danglaedsh.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2014 - 2018"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
           BSC IN EEE
          </h3>

          <p>
          In 2018, I completed a Bachelor of  Science Electrical & Electronic Engineering City Univercity(CU),Dhaka,Danglaedsh.
          </p>
        </VerticalTimelineElement>

        

        
      </VerticalTimeline>
    </div>
    );
};

export default Educations;
