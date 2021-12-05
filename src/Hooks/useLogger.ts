/* eslint-disable no-console */
import pino from 'pino';

const useLogger = (name: string, context?: any) => {
  const pinoOptions: pino.LoggerOptions = {
    browser: {
      asObject: true,
      write: {
        info: (o) => console.info(o),
        warn: (o) => console.warn(o),
        debug: (o) => console.debug(o),
        error: (o) => console.error(o),
        trace: (o) => console.trace(o),
        fatal: (o) => console.error(o),
      },
    },
    level: 'debug',
    name,
  };
  return pino(pinoOptions).child({ name, context });
};

export default useLogger;
