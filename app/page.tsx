import { SunIcon } from "@heroicons/react/20/solid";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen flex-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-4 text-center">
        <div className="p-1">
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />

            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">"What is React.js?"</p>
            <p className="infoText">"Release date of React.js?"</p>
          </div>
        </div>
        <div className="p-1">
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />

            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the model to use</p>
            <p className="infoText">Messages stored in Firebase</p>
            <p className="infoText">Loading notifications</p>
          </div>
        </div>
        <div className="p-1">
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />

            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Sometimes gives wrong info</p>
            <p className="infoText">Request limitions</p>
            <p className="infoText">A bit slow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
