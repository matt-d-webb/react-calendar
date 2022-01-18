import { Config } from "./Types";

export default function setConfig(options: Config): Config {
    const _defaults_ = {
        view: 'grid',
        months: 3,
    }
    return Object.assign({}, _defaults_, options);
}