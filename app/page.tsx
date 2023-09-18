import { SunIcon } from "@heroicons/react/20/solid";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen flex-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-4 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />

            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Eplain something to me</p>
            <p className="infoText">Eplain something to me</p>
            <p className="infoText">Eplain something to me</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />

            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Eplain something to me</p>
            <p className="infoText">Eplain something to me</p>
            <p className="infoText">Eplain something to me</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />

            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Eplain something to me</p>
            <p className="infoText">Eplain something to me</p>
            <p className="infoText">Eplain something to me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
