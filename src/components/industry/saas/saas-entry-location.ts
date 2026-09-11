type EntryLocationReader = () => string;

export function createIndustryEntryLocationStore(
  readLocation: EntryLocationReader,
) {
  let entryLocationHref: string | undefined;

  return {
    subscribe: () => () => undefined,
    getSnapshot: () => {
      entryLocationHref ??= readLocation();
      return entryLocationHref;
    },
    getServerSnapshot: () => "",
  };
}
