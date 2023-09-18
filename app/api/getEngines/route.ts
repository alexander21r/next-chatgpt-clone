import openai from "@/lib/chatgpt";
import { NextResponse } from "next/server";

type Option = {
  value: string;
  label: string;
};

export async function GET() {
  const models = await openai.models.list().then((res: any) => res.data);

  const modelOptions = models.map((model: any) => ({
    value: model.id,
    label: model.id,
  }));

  return NextResponse.json({ modelOptions }, { status: 200 });
}
