import { useState, useMemo, useEffect } from "react";
import startGeneratingNewApp from "@wasp/actions/startGeneratingNewApp";
import { useHistory } from "react-router-dom";
import { MyDropdown } from "../components/Dropdown";
import { ExampleCard } from "../components/ExampleCard";
import { Header } from "../components/Header";
import { availableColors } from "../components/Color";
import { Faq } from "../components/Faq";
import { exampleIdeas } from "../examples";
import { PiMagicWandDuotone, PiGithubLogoDuotone, PiStarDuotone } from "react-icons/pi";
import { readReferrerFromLocalStorage } from "../storage";
import { MyDialog } from "../components/Dialog";

const MainPage = () => {
  const [appName, setAppName] = useState("");
  const [appDesc, setAppDesc] = useState("");
  const [isPowerUserModalOpen, setIsPowerUserModalOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState({
    status: "idle",
    message: "Waiting for instructions",
  });
  const history = useHistory();

  const [appPrimaryColor, setAppPrimaryColor] = useState(
    availableColors.find((color) => color.name === "sky")
  );

  const availableCreativityLevels = useMemo(
    () => [{
      value: "conventional",
      name: "Conventional",
      description: "Generates sensible code with minimal amount of mistakes.",
      disabled: false
    }, {
      value: "balanced",
      name: "Balanced",
      description: "Optimal trade-off between creativity and possible mistakes.",
      disabled: false
    }, {
      value: "creative",
      name: "Creative",
      description: "Generates more creative code, but mistakes are more likely.",
      disabled: false
    }]
  , []);
  const [creativityLevel, setCreativityLevel] = useState(
    availableCreativityLevels.find((lvl) => lvl.value === "balanced")
  );

  const availableAuthMethods = useMemo(
    () => [
      {
        value: "usernameAndPassword",
        name: "Username & Password",
        disabled: false,
      },
      {
        value: "email",
        name: "Email & Password",
        disabled: true,
      },
      {
        value: "socialAuth",
        name: "Social Auth",
        disabled: true,
      },
    ],
    []
  );

  const [appAuthMethod, setAppAuthMethod] = useState(availableAuthMethods[0]);

  useEffect(() => {
    try {
      const appDetails = JSON.parse(localStorage.getItem("appDetails"));
      const appNum = JSON.parse(localStorage.getItem("appNum"));
      if (!appNum) {
        localStorage.setItem("appNum", 0);
      }
      if (appNum === 2) {
        setIsPowerUserModalOpen(true);
      }
      if (appDetails) {
        setAppName(appDetails.appName);
        setAppDesc(appDetails.appDesc);
        setAppPrimaryColor(availableColors.find((color) => color.name === appDetails.appPrimaryColor));
        setAppAuthMethod(availableAuthMethods.find((method) => method.value === appDetails.appAuthMethod));
        setCreativityLevel(availableCreativityLevels.find((level) => level.value === appDetails.appCreativityLevel));
        localStorage.removeItem("appDetails");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  async function startGenerating(event) {
    event.preventDefault();

    try {
      const appNum = JSON.parse(localStorage.getItem("appNum"))
      localStorage.setItem("appNum", appNum + 1)
      localStorage.setItem("appDetails", JSON.stringify({
        appName,
        appDesc,
        appPrimaryColor: appPrimaryColor.name,
        appAuthMethod: appAuthMethod.value,
        appCreativityLevel: creativityLevel.value,
      }));
    } catch (error) {
      console.error(error)
    }

    setCurrentStatus({
      status: "idle",
      message: "Starting...",
    });

    try {
      const referrer = readReferrerFromLocalStorage(); 
      const appId = await startGeneratingNewApp({
        referrer,
        appName,
        appDesc,
        appPrimaryColor: appPrimaryColor.name,
        appAuthMethod: appAuthMethod.value,
        appCreativityLevel: creativityLevel.value,
      });
      history.push(`/result/${appId}`);
    } catch (e) {
      setCurrentStatus({
        status: "error",
        message: e.message,
      });
    }
  }

  function useIdea(idea) {
    setAppName(idea.name);
    setAppDesc(idea.description);
    setAppPrimaryColor(idea.color);
    window.scrollTo(0, 0);
  }

  function setAppNameIfValid(value) {
    if (/^[a-zA-Z0-9_-]*$/.test(value)) {
      setAppName(value);
    }
  }

  return (
    <div className="container">
      <Header currentStatus={currentStatus} isStatusVisible={true} />

      <PowerUserModal isOpen={isPowerUserModalOpen} setIsOpen={setIsPowerUserModalOpen} />

      <form onSubmit={startGenerating} className="bg-slate-50 p-8 rounded-xl">
        <div className="mb-6 flex flex-col gap-3">
          <div>
            <label htmlFor="appName" className="text-slate-700 block mb-2">
              App name <span className="text-red-500">*</span>
            </label>
            <input
              id="appName"
              required
              type="text"
              placeholder="e.g. TodoApp or MyPlants"
              value={appName}
              onChange={(e) => setAppNameIfValid(e.target.value)}
              disabled={currentStatus.status === "inProgress"}
            />
          </div>
          <div>
            <label htmlFor="appDesc" className="text-slate-700 block mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="appDesc"
              required
              placeholder="Describe your web app in a couple of sentences!
Mention pages you want + what should be happening on them, what data should be stored in the database, etc (check out the examples below).
The simpler and more specific the app is, the better the generated app will be."
              value={appDesc}
              rows="5"
              cols="50"
              onChange={(e) => setAppDesc(e.target.value)}
              disabled={currentStatus.status === "inProgress"}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <label htmlFor="appPrimaryColor" className="text-slate-700 block mb-2">
                App brand color
              </label>
              <MyDropdown value={appPrimaryColor} onChange={setAppPrimaryColor} options={availableColors} />
            </div>
            <div>
              <label htmlFor="creativityLevel" className="text-slate-700 block mb-2">
                Creativity level
              </label>
              <MyDropdown value={creativityLevel} onChange={setCreativityLevel} options={availableCreativityLevels} />
            </div>
            <div>
              <label htmlFor="appAuthMethod" className="text-slate-700 block mb-2">
                Auth method
              </label>
              <MyDropdown value={appAuthMethod} onChange={setAppAuthMethod} options={availableAuthMethods} />
            </div>
          </div>
        </div>
        <button className="button mr-2" disabled={currentStatus.status === "inProgress"}>
          Generate the app <PiMagicWandDuotone className="inline-block ml-1" />
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-slate-800">Some example ideas</h3>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
          {exampleIdeas.map((idea) => (
            <ExampleCard key={idea.name} idea={idea} useIdea={useIdea} />
          ))}
        </div>
        <div className="mt-8">
          <Faq />
        </div>
      </div>
    </div>
  );
};
export default MainPage;

export function PowerUserModal({ isOpen, setIsOpen }) {
  return (
    <MyDialog isOpen={isOpen} onClose={() => setIsOpen(false)} title={<span>With Great Power Comes Great Responsibility! 🧙</span>}>
      <div className="mt-6 space-y-5">
        <p className="text-base leading-relaxed text-gray-500">
          We've made this tool completely <span className="font-semibold">free</span> and cover all the costs 😇
        </p>

        <p className="text-base leading-relaxed text-gray-500">
          But you can still show your support by starring us on GitHub:
        </p>
        <a
          href="https://github.com/wasp-lang/wasp"
          target="_blank"
          className="flex items-center justify-center underline text-pink-600 "
        >
          <div className="py-4 px-2 flex items-center justify-center bg-pink-50 text-pink-800 rounded-lg font-semibold tracking-wide w-full">
            <PiStarDuotone size="1.35rem" className="mr-3" /> Star Wasp on GitHub{" "}
            <PiGithubLogoDuotone size="1.35rem" className="ml-3" />
          </div>
        </a>
        <p className="text-base leading-relaxed text-gray-500">
          This helps spread the word, so we can keep making Mage better.
        </p>
        <p className="text-base leading-relaxed text-gray-500">We'd very much appreciate it! 🧙</p>
      </div>
    </MyDialog>
  )
}