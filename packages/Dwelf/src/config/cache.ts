import { RedisOptions } from "ioredis";
interface ICacheConfig {
  driver: string;
  config: {
    redis: RedisOptions;
  };
}

const cacheConfig: ICacheConfig = {
  driver: "redis",
  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASS || undefined,
    },
  },
};

export { cacheConfig };
