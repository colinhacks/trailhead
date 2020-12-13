type Primitives = string | number | boolean | bigint;
type Pathify<
  T,
  Path extends (string | number | symbol)[] = []
> = T extends undefined
  ? never
  : T extends Array<infer U>
  ? { __path: Path } & Pathify<U, [...Path, number]>[]
  : T extends object
  ? { __path: Path } & {
      [k in keyof T]: { __path: Path } & Pathify<T[k], [...Path, k]>;
    }
  : T extends Primitives
  ? { __path: Path } & Path
  : 'ERROR';

export const trailhead = <T>(): Pathify<T, []> => {
  function makeTrailhead(path: string[]): any {
    return new Proxy(
      { __path: [] },
      {
        get(obj, name: string) {
          if (typeof name === 'symbol') return null;
          if (
            [
              ...Object.getOwnPropertyNames(Object.getPrototypeOf(obj)),
              'inspect',
            ].includes(name)
          )
            return null;
          const newTrailhead = makeTrailhead([...path, name]);
          newTrailhead.__path = [...path, name];
          return newTrailhead;
        },
      },
    );
  }

  return makeTrailhead([]);
};
