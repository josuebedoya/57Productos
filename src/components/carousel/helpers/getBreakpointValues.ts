import type {Breakpoints} from "@/components/carousel/types.d.ts";

const getBreakpointValues = (breakpoints: Breakpoints): Record<number, any> => {
  if (!breakpoints || breakpoints.length === 0) return {};

  const values: Record<number, any> = {};
  for (const bp of breakpoints) {
    const {width, ...rest} = bp;
    values[width] = rest;
  }
  return values;
};

export default getBreakpointValues;