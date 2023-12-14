import { NavLink } from "react-router-dom";
import Title from "./Title";
// import { Container } from "postcss";
import project1 from "../assets/MedicalCamp.png";
import project2 from "../assets/Blogger.png";
import project3 from "../assets/Resturent2.png";
// import project4 from "../assets/Event management.png";
const Projects = () => {
    return (
      <div id="projects" >
      <Title heading={"My Projects"}></Title>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Project 1 */}
          <div className="card  shadow-lg text-center bg-gray-300 my-6">
            <figure>
              <img src={project1} alt="Project" className="h-[275px] w-full "/>
            </figure>
            <div className="card-body">
              <h2 className=" font-bold text-2xl text-center text-blue-600">
               Medical Camp
              </h2>
              <p className="mt-3 text-black font-bold">
              A versatile medical camp platform enabling seamless interaction for Participants, Organizers, and Health Professionals. Participants register, manage payments via Camp K Stripe, and track their history. Organizers effortlessly oversee camp details, confirm payments, and manage their own events. Health Professionals express interest in upcoming camp
              </p>
              <div className="card-actions justify-center mt-5">
                <NavLink
                  to={"https://spontaneous-sprinkles-77db29.netlify.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Live Link
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/mdmehedi060/medical-camp-client.git"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Client Code
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/mdmehedi060/medical-camp-server.git"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Server Code
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="card  shadow-lg text-center bg-gray-300 my-6">
            <figure>
              <img src={project3} alt="Project" className="h-[275px] w-full "/>
            </figure>
            <div className="card-body">
              <h2 className=" font-bold text-2xl text-center text-blue-600">
              Rasturent
              </h2>
              <p className="mt-3 text-black font-bold">
              Welcome to Bistro Boss Resturant a culinary haven where flavors dance, and every bite is a celebration. From the freshest ingredients to inspired creations, our menu invites you on a journey of gastronomic delight. Immerse yourself in an ambiance that fuses modern elegance with warmth, ensuring each visit is a memorable experience. Join us at [Restaurant Name] and indulge in the extraordinary.
              </p>
              <div className="card-actions justify-center mt-5">
                <NavLink
                
                  to={"https://lustrous-semifreddo-90699b.netlify.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Live Link
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/mdmehedi060/bristo-boss-client.git"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Client Code
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/mdmehedi060/bristo-boss-server.git"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Server Code
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="card  shadow-lg text-center bg-gray-300 my-6">
            <figure>
              <img src={project2} alt="Project" className="h-[275px] w-full "/>
            </figure>
            <div className="card-body">
              <h2 className=" font-bold text-2xl text-center text-blue-600">
                Blogger
              </h2>
              <p className="mt-3 text-black font-bold">
              Empower your blogging journey on this platform! Users create accounts, upload, and manage blogs effortlessly. Unique features include restriction on commenting for blog owners, wish list functionality. Explore engaging blogs with intuitive interface, enhanced by optional task completions using React and other technologies.
              </p>
              <div className="card-actions justify-center mt-5">
                <NavLink
                  to={"https://657b17f2a609042a75d101b8--effervescent-dusk-92ec9d.netlify.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Live Link
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/mdmehedi060/blog-client.git"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Client Code
                  </button>
                </NavLink>

                <NavLink
                  to={
                    "https://github.com/mdmehedi060/blog-server.git"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-sm  btn-outline text-blue-600 border-white">
                    Server Code
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Projects;