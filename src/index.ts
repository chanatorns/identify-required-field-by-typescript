interface RequiredItemField {
  id: string;
  media: string[];
  variant: {
    vid: string;
  }[];
}
interface DecoratedField {
  newField2: string;
}
const mutateFunc = (aaa: RequiredItemField) => {
  let decorateData: Partial<
    DecoratedField & RequiredItemField["variant"][0]
  > = {};

  if (aaa.variant.length > 0) {
    decorateData = aaa.variant[0];
  }

  decorateData.newField2 = "nnn";
  delete aaa.media;

  return { ...aaa, ...decorateData };
};

interface Item {
  id: string;
  media: string[];
  variant: {
    vid: string;
  }[];
  price: number;
}
const main = (item: Item) => {
  const mutated = mutateFunc(item);
  console.log(mutated);
};

main({ a: "what" } as any);
