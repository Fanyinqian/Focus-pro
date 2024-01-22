import badges from "./badges";
import email from "./email";
import link from "./link";
import tags from "./tags";
var valueTypeMap = {
  email: email,
  tags: tags,
  link: link,
  badges: badges
};
export default valueTypeMap;