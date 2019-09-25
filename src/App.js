import React from "react";
import "./styles/global";
import './App.scss';
import Routes from "./routes";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTrashAlt, faEdit);

const App = () => <Routes />;
export default App;