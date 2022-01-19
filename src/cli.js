import chalk from "chalk";

import { getAvailableDevices, selectDevice, startDevice } from "./main";

export async function cli() {
  try {
    const devices = getAvailableDevices();
    const results = await selectDevice(devices);
    startDevice(results.device);
  } catch (e) {
    console.error(
      "%s %s",
      chalk.red.bold("ERROR"),
      "Unable to start the device"
    );
    process.exit(1);
  }
}
