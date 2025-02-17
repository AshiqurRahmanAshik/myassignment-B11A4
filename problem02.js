function validEmail(email) {
  if (typeof email !== "string") return "Invalid";
  const invalidStart = [".", "-", "_", "+", "@"];
  if (
    email.includes("@") &&
    !email.includes(" ") &&
    !invalidStart.includes(email[0]) &&
    email.endsWith(".com")
  ) {
    return true;
  } else {
    return false;
  }
}
let userId = validEmail("he ro@alom.com");
console.log(userId);
