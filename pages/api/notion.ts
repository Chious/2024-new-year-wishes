import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionSecret || !notionDatabaseId) {
    throw new Error("Missing notion secret or DB-ID.");
  }

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  //1. Get Data From Notion
  const rawData = query.results[0];

  type Row = {
    name: {
      id: string;
      title: [{ type: string; text: { content: string; link: string } }];
    };
    id: { id: string; rich_text: { text: { content: string } }[] };
    content: { id: string; rich_text: { text: { content: string } }[] };
  };

  //@ts-ignore
  const rows = query.results.map((res) => res.properties) as Row[];

  const dataStructure = rows.map((row) => ({
    name: row.name.title[0].text.content,
    id: row.id.rich_text[0].text.content,
    content: row.content.rich_text[0].text.content,
  }));

  res.status(200).json(dataStructure);
}
