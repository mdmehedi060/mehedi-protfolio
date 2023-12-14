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
      <Title heading={"My Experience"}></Title>

      <VerticalTimeline lineColor={"#70FF00"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2023 - present"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Frontend Developer
          </h3>

          <p>
            In 2023, I completed a web development course at Programming Hero.
            Over the last six months, I devoted significant time to research,
            enhancing my understanding of various technologies. This period has
            been particularly fruitful for my learning journey. 
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ backgroundColor: "transparent", color: "#828282" }}
          contentArrowStyle={{ borderRight: "7px solid  #70FF00" }}
          date="2022"
          dateClassName={"text-[#70FF00]"}
          iconStyle={{ backgroundColor: "#161616", color: "#70FF00" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-[#70FF00]">
            Self Learner
          </h3>

          <p>
            In 2022, I embarked on a challenging solo journey into web
            development. Progress was slow, but the experience proved
            invaluable. The turning point came when I started the Programming
            Hero course, where I found significant help and realized the
            effectiveness of structured learning.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    );
};

export default Educations;
