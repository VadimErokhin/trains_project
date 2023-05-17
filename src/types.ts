export interface Train {
  name: string;
  description: string;
  speedLimits: Array<SpeedLimit>
}

export interface SpeedLimit {
  name: string;
  speedLimit: number;
}
