import { LogLevel, Logger } from "./logger/logger";

export const newLogger = (name: string, level?: LogLevel) => new Logger(name, level);
