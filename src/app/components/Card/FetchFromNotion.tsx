import { useSearchParams } from "next/navigation";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function FetchFromNotion() {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  const res = await fetch(url);
  const rawData = await res.json();

  const queryParam = id ? id : "default";

  type rawDataType = { id: string; name: string; content: string };
  const output = rawData.filter((data: rawDataType) => {
    data.id === queryParam;
  });

  return output;
}
