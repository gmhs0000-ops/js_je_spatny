console.log("       \/\\\r\n      \/\/\\\\\r\n ____\/\/__\\\\____\r\n \\.-\/\/----\\\\-,\/\r\n  \\v\/      \\v\/\r\n  \/\\\\      \/\/\\\r\n \/\/_\\\\____\/\/_\\\\\r\n\'----\\\\--\/\/----`\r\n      \\\\\/\/\r\n       \\\/     \r\n")
console.log("  _   _      _                          _           \r\n | \\ | | ___| |_ __ _ _ __  _   _  __ _| |__  _   _ \r\n |  \\| |\/ _ \\ __\/ _` | \'_ \\| | | |\/ _` | \'_ \\| | | |\r\n | |\\  |  __\/ || (_| | | | | |_| | (_| | | | | |_| |\r\n |_| \\_|\\___|\\__\\__,_|_| |_|\\__, |\\__,_|_| |_|\\__,_|\r\n                            |___\/                   ")
console.log("     _                 ____ _               _             \r\n    \/ \\   __ _  ___   \/ ___| |__   ___  ___| | _____ _ __ \r\n   \/ _ \\ \/ _` |\/ _ \\ | |   | \'_ \\ \/ _ \\\/ __| |\/ \/ _ \\ \'__|\r\n  \/ ___ \\ (_| |  __\/ | |___| | | |  __\/ (__|   <  __\/ |   \r\n \/_\/   \\_\\__, |\\___|  \\____|_| |_|\\___|\\___|_|\\_\\___|_|   \r\n         |___\/                                            ")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let age = 13;

async function checkStatus(age) {
  console.log("Running through goyim proxies...");
  await sleep(1500); 

  console.log("Connecting to PALANTIR servers...");
  await sleep(2000);

  console.log("Tel Aviv remote desktop integrating...");
  await sleep(4000);

  console.log("AGE DETECTED: ", age);
  await sleep(1000);

  if (age > 11) {
    console.log("RESULT: expired");
  } else if (age < 5) {
    console.log("RESULT: E F N");
  } else if (age < 12) {
    console.log("RESULT: FRESH");
  }
}

checkStatus(age);