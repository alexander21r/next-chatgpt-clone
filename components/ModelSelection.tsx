"use client";

import useSWR from "swr";
import Select from "react-select";

function ModelSelection() {
  const fetchModels = async () => {
    return fetch("/api/getEngines").then((res) => res.json());
  };
  const { data: models, isLoading }: any = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2 "
        options={models?.modelOptions}
        defaultValue={model}
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        placeholder={model}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
