
import { behave } from "./behave.js";
import { mood } from "./mood.js";
import { scroll } from "./gsap.js";
scroll();

const instances = behave();
mood(instances);


