import React from "react";
import "./styles/global";
import './App.scss';
import Header from './components/header/Header';
import Routes from "./routes";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTrashAlt);

const App = () => <Routes />;
export default App;