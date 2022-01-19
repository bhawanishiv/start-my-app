import inquirer from "inquirer";
import shell from "shelljs";

export const getAvailableDevices = () => {
  const result = shell.exec("emulator -list-avds", { silent: true });
  if (!result) throw new Error();
  const devices = result.split("\n").filter((d) => d);
  return devices;
};

export const selectDevice = async (devices) => {
  const questions = [];
  questions.push({
    type: "list",
    name: "device",
    message: "Please select a device",
    choices: devices,
    default: devices[0],
  });

  const answers = await inquirer.prompt(questions);

  return { device: answers.device };
};

export const startDevice = (device) => {
  shell.exec(`emulator @${device}`);
};
