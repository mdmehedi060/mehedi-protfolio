import Title from "./Title";

const Projects = () => {
    return (
        <div className="bg-neutral pb-8">
            <Title heading={'My projects'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-8">
            <div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="text-xl font-bold">Medical Camp</h1>
  <a href="https://github.com/mdmehedi060/medical-camp-server.git" className="font-bold text-green-500">Github server Link</a>
  <a href="https://github.com/mdmehedi060/medical-camp-client.git" className="font-bold text-red-500">Github Client Link</a>
  <a href="https://spontaneous-sprinkles-77db29.netlify.app/" className="font-bold text-blue-500">Live Link</a>
  </div>
</div>
            <div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="text-xl font-bold">Blogger</h1>
  <a href="https://github.com/mdmehedi060/blog-server.git" className="font-bold text-green-500">Github server Link</a>
  <a href="https://github.com/mdmehedi060/blog-client.git" className="font-bold text-red-500">Github Client Link</a>
  <a href="https://sparkling-starship-484111.netlify.app/" className="font-bold text-blue-500">Live Link</a>
  </div>
</div>
            <div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="text-xl font-bold">Event Management</h1>
  <a href="https://github.com/mdmehedi060/event-management" className="font-bold text-red-500">Github Link</a>
  <a href="https://rainbow-fox-bbd38b.netlify.app/" className="font-bold text-blue-500">Live Link</a>
  </div>
</div>
            <div className="card w-60 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="text-xl font-bold">Restaurent</h1>
  <a href="https://github.com/mdmehedi060/bristo-boss-server.git" className="font-bold text-green-500">Github server Link</a>
  <a href="https://github.com/mdmehedi060/bristo-boss-client.git" className="font-bold text-red-500">Github Client Link</a>
  <a href="https://lustrous-semifreddo-90699b.netlify.app/" className="font-bold text-blue-500">Live Link</a>
  </div>
</div>
            </div>
        </div>
    );
};

export default Projects;