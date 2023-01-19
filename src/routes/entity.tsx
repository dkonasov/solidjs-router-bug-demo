import { A, RouteDataFuncArgs, useRouteData } from "@solidjs/router";

export const EntityData = ({ params }: RouteDataFuncArgs) => {
  const { id } = params;

  return id;
};

export const Entity = () => {
  const data = useRouteData<typeof EntityData>();
  const nextEntity = Number(data) + 1;

  return (
    <div>
      {`An entity with id ${data}`}
      <br />
      <A href={`/list/${nextEntity}`}>Entity {nextEntity}</A>
      <br />
      <A href="/list">Back to list</A>
    </div>
  );
};
