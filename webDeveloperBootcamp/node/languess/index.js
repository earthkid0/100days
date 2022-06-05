import { franc, francAll } from 'franc'
import langs from "langs"

const input = process.argv[2];
const langCodes = franc(input);
const language = langs.where("3", langCodes);
if (langCodes == "und") {
    console.log("Try again!!")
} else {
    console.log(language.name)
}