# Morphobot Control Station

A desktop-interface project for a hybrid rover/drone concept. This repository currently contains an HTML control-station interface and an Electron entry point.

<p>
  <a href="https://img.shields.io/badge/Interface-Dark%20%2B%20Cyan-0EA5E9?style=for-the-badge"><img src="https://img.shields.io/badge/Interface-Dark%20%2B%20Cyan-0EA5E9?style=for-the-badge" alt="Dark and cyan interface"></a>
  <a href="https://img.shields.io/badge/Desktop-Electron-191919?style=for-the-badge&logo=electron"><img src="https://img.shields.io/badge/Desktop-Electron-191919?style=for-the-badge&logo=electron" alt="Electron"></a>
  <a href="https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JavaScript-2563EB?style=for-the-badge"><img src="https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JavaScript-2563EB?style=for-the-badge" alt="HTML CSS JavaScript"></a>
</p>

## Project overview

The interface is themed as a control station for a hybrid ground/aerial robot concept. The main HTML file contains the user interface and styles; `main.js` creates an Electron `BrowserWindow` and configures the desktop shell.

This README documents the repository contents and current setup state. It does **not** claim that the interface is connected to real vehicle hardware or that flight/rover controls have been validated.

## Repository structure

| Path | Purpose |
|---|---|
| `index.html` | Main HTML interface and embedded styling |
| `main.js` | Electron window bootstrap |
| `package.json` | Electron dependencies and package scripts |
| `vercel.json` | Deployment configuration |

## Local setup

Requires a supported Node.js version and npm.

```bash
npm install
npm start
```

## Current setup caveat

The current `package.json` and `main.js` refer to `M4 Website.html`, while the repository tree contains `index.html`. The `build` script currently prints a message rather than compiling or validating the app. As a result, the Electron start/package flow may require a path correction before it runs successfully.

This documentation-only update intentionally does not alter project source code. Before using this interface with a real robot, add and test the required hardware communication layer, command validation, telemetry handling, failsafe behavior, and emergency-stop logic in a controlled environment.

## Related work

- [ROS 2 Robotics Engineering Notebook](https://github.com/Yakhrevan/ros2-robotics-engineering-notebook)
- [ROS Academy](https://github.com/Yakhrevan/ros-academy)
- [Robotics Portfolio](https://github.com/Yakhrevan/Yakhrevan-Portfolio)
- [GitHub profile](https://github.com/Yakhrevan)

## Author

**Yakhrevan** — Junior Robotics Engineer · Mechatronics · ROS 2 · Embedded Systems
