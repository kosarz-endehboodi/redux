import { BUY_CAKE } from "./cakeType";

export default function buyCake(cake = 1) {
    return {
        type: BUY_CAKE, payload: cake,
    };
}