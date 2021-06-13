import { cordova, CordovaOptions, PluginConfig } from '@ionic-native/core';

export function Cordova(options?: CordovaOptions): MethodDecorator {
  return (target: object, key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    return {
      ...descriptor,
      value(): unknown {
        return cordova(this, key, options, arguments);
      },
    };
  };
}

export function Plugin(options: PluginConfig): ClassDecorator {
  return (target: object): void => {
    Object.assign(target, options);
  };
}
