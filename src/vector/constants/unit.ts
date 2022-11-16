import { Vector } from "../types/Vector";

const two = Math.sqrt(1/2);
const three = Math.sqrt(1/3);

export const unit2D = (): Vector<2> => [ two, two ];

export const unit3D = (): Vector<3> => [ three, three, three ];
