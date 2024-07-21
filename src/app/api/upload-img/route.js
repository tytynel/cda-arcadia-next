import { NextRequest, NextResponse } from "next/server";
import {writeFile} from "fs/promises";
import { join } from "path";

export async function POST(request) {
const data = await request.formData();
console.log(data);
const file = data.get("file");
console.log(file);
if (!file) {
    return NextResponse.json({ success: false});
}
const bytes = await file.arrayBuffer();
const buffer = Buffer.from(bytes);
const path = join('',process.env.IMG_URI, file.name);
await writeFile(path,buffer);
console.log("fichier sauvegardé ici: " , path);
return NextResponse.json({ success: true});
}