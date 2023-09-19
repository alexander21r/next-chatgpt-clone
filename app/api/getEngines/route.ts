import openai from "@/lib/chatgpt";
import { NextResponse } from "next/server";

type Option = {
  value: string;
  label: string;
};

export async function GET() {
  const models = await openai.models.list().then((res) => res.data);

  const filteredModels = models.filter((model) =>
    model.id.startsWith("gpt-3.5")
  );
  const skippedModels = filteredModels.slice(2);

  const modelOptions = skippedModels.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  return NextResponse.json({ modelOptions }, { status: 200 });
}
