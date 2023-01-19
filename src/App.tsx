import type { Component } from "solid-js";

import { Route, Routes } from "@solidjs/router";
import { Index } from "./routes";
import { List } from "./routes/list";
import { Entity, EntityData } from "./routes/entity";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Index} />
      <Route path="/list" component={List} />
      <Route path="/list/:id" component={Entity} data={EntityData} />
    </Routes>
  );
};

export default App;
