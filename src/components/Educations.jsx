import Title from "./Title";

const Educations = () => {
    return (
        <div className="mb-20 bg-slate-200 py-6">
            <Title heading={'My Educations'} />
            <div className="grid mx-auto bg-white w-[600px] h-[200px] pb-8">
                <div className="rounded-lg   shadow-2xl border-t   transition-colors">
                    <div className="card-body space-y-4">
                        <h2 className="card-title fon">Bachelor of Science Electrical & Electronic Engineering</h2>
                        <hr/>
                        <p className="text-lg">I'm completed Bachelor of Science Electrical & Electronic Engineering in City University,Bangladesh in 2018.</p>
                    </div>
                </div>
              
              
            </div>
        </div>
    );
};

export default Educations;
