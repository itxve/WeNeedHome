/**
 * 同步远程数据
 */
import { join, dirname } from "path";
import { writeFileSync } from "fs";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
const NODEJS_SRC_DIR = dirname(fileURLToPath(import.meta.url));
const FETCH_BASE =
  "https://cdn.jsdelivr.net/gh/WeNeedHome/SummaryOfLoanSuspension@main/data/generated";

const FLAT_JSON = "properties-flat.json";
const TREE_JSON = "properties-tree.json";
const PROPERTIES_FLAT = join(NODEJS_SRC_DIR, "..", "src", "data", FLAT_JSON);
const PROPERTIES_TREE = join(NODEJS_SRC_DIR, "..", "src", "data", TREE_JSON);

async function exec(filePath: string, fetchEnd: string) {
  const fetch_url = join(FETCH_BASE, fetchEnd);
  try {
    const rt = await fetch(fetch_url);
    writeFileSync(filePath, await rt.text(), { encoding: "utf-8" });
  } catch (error) {
    console.error("fetch_url: %s  ,error: %s", fetch_url, error);
  }
}

(async () => {
  await exec(PROPERTIES_FLAT, FLAT_JSON);
  await exec(PROPERTIES_TREE, TREE_JSON);
  console.log("update successful on %s", new Date().toLocaleString());
})();
